import type { RoadmapItem } from "../types";

export const roadmap: RoadmapItem[] = [
  {
    id: "rm_1",
    title: "Web Fundamentals",
    description: "Understand how the web works, HTTP, and browser rendering.",
    topicId: "", // Generic concept
    order: 1
  },
  {
    id: "rm_2",
    title: "JavaScript Essentials",
    description: "Master the core language of the web. Variables, functions, and the DOM.",
    topicId: "t_javascript",
    order: 2
  },
  {
    id: "rm_3",
    title: "TypeScript Integration",
    description: "Add static typing to JavaScript for scalable codebases.",
    topicId: "t_typescript",
    order: 3
  },
  {
    id: "rm_4",
    title: "Frontend with React",
    description: "Build interactive, component-driven user interfaces.",
    topicId: "t_react",
    order: 4
  },
  {
    id: "rm_5",
    title: "Backend with Node.js",
    description: "Execute JavaScript on the server.",
    topicId: "t_nodejs",
    order: 5
  },
  {
    id: "rm_6",
    title: "API Design with Express",
    description: "Create robust REST APIs securely and efficiently.",
    topicId: "t_express",
    order: 6
  },
  {
    id: "rm_7",
    title: "Data persistence with MongoDB",
    description: "Store application data in a flexible NoSQL database.",
    topicId: "t_mongodb",
    order: 7
  },
  {
    id: "rm_8",
    title: "Full Stack Mastery",
    description: "Connect the frontend to the backend to deploy full applications.",
    topicId: "", // Integration concept
    order: 8
  }
];

export function getRoadmap(): RoadmapItem[] {
  return [...roadmap].sort((a, b) => a.order - b.order);
}
