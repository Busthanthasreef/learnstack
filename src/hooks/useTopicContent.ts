import { useMemo } from "react";
import { learningContent } from "../data/learning";
import type { TopicContent } from "../types";

export function useTopicContent(topicSlug: string | undefined): TopicContent | null {
  return useMemo(() => {
    if (!topicSlug) return null;
    return learningContent[topicSlug] || null;
  }, [topicSlug]);
}
