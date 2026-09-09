import type { Topic } from "../../types";

const nodejs: Topic = {
  id: "t_nodejs",
  slug: "nodejs",
  title: "Node.js",
  description: "JavaScript runtime built on Chrome's V8 JavaScript engine. Build scalable network applications.",
  difficulty: "Intermediate",
  category: "Backend",
  icon: "/src/assets/topics/nodejs.svg",
  isFeatured: true,
  lessons: [
    { id: "l_node_1", slug: "intro", title: "Introduction to Node", description: "What is Node and how does it work?", sections: [] },
    { id: "l_node_2", slug: "modules", title: "Modules & NPM", description: "Managing packages and dependencies.", sections: [] },
    { id: "l_node_3", slug: "fs", title: "File System", description: "Reading and writing files with Node.", sections: [] }
  ]
};

export default nodejs;
