import { useState, useEffect, useCallback } from "react";
import type { Topic } from "../types";
import { topics as builtInTopics } from "../data/topics";

const STORAGE_KEY = "learnstack-user-topics";

export function useTopics() {
  const [topics, setTopics] = useState<Topic[]>([]);

  const loadTopics = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const userTopics: Topic[] = stored ? JSON.parse(stored) : [];
      
      // Combine built-in topics and user topics, prioritizing user topics if IDs collide (they shouldn't)
      setTopics([...builtInTopics, ...userTopics]);
    } catch (error) {
      console.error("Failed to load user topics from localStorage", error);
      setTopics(builtInTopics);
    }
  }, []);

  useEffect(() => {
    loadTopics();
  }, [loadTopics]);

  const addTopic = (newTopic: Omit<Topic, "id" | "lessons" | "slug">) => {
    try {
      // 1. Generate a slug safely
      let baseSlug = newTopic.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
      
      // Safety: Avoid slug collision
      const existingSlugs = topics.map(t => t.slug);
      let uniqueSlug = baseSlug;
      let counter = 1;
      while (existingSlugs.includes(uniqueSlug)) {
        uniqueSlug = `${baseSlug}-${counter}`;
        counter++;
      }

      // 2. Create the full topic object
      const fullTopic: Topic = {
        ...newTopic,
        id: `t_user_${Date.now()}`,
        slug: uniqueSlug,
        lessons: [] // New topics start empty
      };

      // 3. Save to localStorage
      const stored = localStorage.getItem(STORAGE_KEY);
      const userTopics: Topic[] = stored ? JSON.parse(stored) : [];
      const updatedUserTopics = [...userTopics, fullTopic];
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUserTopics));
      
      // 4. Update UI state immediately
      setTopics(prev => [...prev, fullTopic]);

      return fullTopic;
    } catch (error) {
      console.error("Failed to save new topic", error);
      throw new Error("Failed to save topic");
    }
  };

  const getTopic = (slug: string): Topic | undefined => {
    return topics.find((t) => t.slug === slug);
  };

  return {
    topics,
    addTopic,
    getTopic,
    refreshTopics: loadTopics
  };
}
