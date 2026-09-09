import type { Topic } from "../../types";

const mongodb: Topic = {
  id: "t_mongodb",
  slug: "mongodb",
  title: "MongoDB",
  description: "The most popular NoSQL database for modern apps. Store data in flexible, JSON-like documents.",
  difficulty: "Beginner",
  category: "Database",
  icon: "/src/assets/topics/mongodb.svg",
  isFeatured: true,
  lessons: [
    { id: "l_mongo_1", slug: "intro", title: "Intro to NoSQL", description: "Understanding document databases.", sections: [] },
    { id: "l_mongo_2", slug: "crud", title: "CRUD Operations", description: "Create, Read, Update, Delete.", sections: [] }
  ]
};

export default mongodb;
