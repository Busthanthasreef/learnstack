import type { Topic } from "../../types";

const advancedMongodb: Topic = {
  id: "t_advanced_mongodb",
  slug: "advanced-mongodb",
  title: "Advanced MongoDB",
  description: "Master aggregation, indexing, transactions, and performance tuning in MongoDB.",
  difficulty: "Advanced",
  category: "Database",
  icon: "/src/assets/topics/mongodb.svg",
  isFeatured: true,
  lessons: [
    { id: "l_adv_mongo_1", slug: "aggregation", title: "Aggregation Pipeline", description: "Complex data transformation and analysis.", sections: [] },
    { id: "l_adv_mongo_2", slug: "indexing", title: "Indexing & Performance", description: "Optimize your queries.", sections: [] },
    { id: "l_adv_mongo_3", slug: "transactions", title: "Transactions", description: "ACID properties in NoSQL.", sections: [] }
  ]
};

export default advancedMongodb;
