import type { Topic } from "../../types";

const sql: Topic = {
  id: "t_sql",
  slug: "sql",
  title: "MySQL",
  description: "Structured Query Language. Learn to manage and query relational databases effectively.",
  difficulty: "Beginner",
  category: "Database",
  icon: "/src/assets/topics/sql.svg",
  isFeatured: true,
  lessons: [
    { id: "l_sql_1", slug: "basics", title: "SQL Basics", description: "SELECT, INSERT, UPDATE, DELETE.", sections: [] },
    { id: "l_sql_2", slug: "filtering", title: "Filtering & Sorting", description: "WHERE, ORDER BY, LIMIT.", sections: [] }
  ]
};

export default sql;
