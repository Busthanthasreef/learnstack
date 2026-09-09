import type { Topic } from "../../types";

const advancedSql: Topic = {
  id: "t_advanced_sql",
  slug: "advanced-sql",
  title: "Advanced MySQL",
  description: "Deep dive into complex queries, window functions, CTEs, and database optimization.",
  difficulty: "Advanced",
  category: "Database",
  icon: "/src/assets/topics/sql.svg",
  isFeatured: true,
  lessons: [
    { id: "l_adv_sql_1", slug: "joins", title: "Advanced Joins", description: "INNER, OUTER, CROSS, and SELF joins.", sections: [] },
    { id: "l_adv_sql_2", slug: "window-functions", title: "Window Functions", description: "Analytics and aggregations over partitions.", sections: [] },
    { id: "l_adv_sql_3", slug: "ctes", title: "Common Table Expressions", description: "Recursive and non-recursive CTEs.", sections: [] }
  ]
};

export default advancedSql;
