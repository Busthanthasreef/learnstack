import type { Topic } from "../../types";

const dsaAdvanced: Topic = {
  id: "t_dsa_advanced",
  slug: "dsa-advanced",
  title: "DSA - 3",
  description: "Master complex algorithms like Trees, Graphs, Dynamic Programming, and backtracking.",
  difficulty: "Advanced",
  category: "Computer Science",
  icon: "/src/assets/topics/dsa.svg",
  isFeatured: true,
  lessons: [
    { id: "l_dsa_a_1", slug: "trees", title: "Trees & BSTs", description: "Hierarchical data structures.", sections: [] },
    { id: "l_dsa_a_2", slug: "graphs", title: "Graphs", description: "Nodes, edges, BFS, and DFS.", sections: [] },
    { id: "l_dsa_a_3", slug: "dp", title: "Dynamic Programming", description: "Optimization and memoization.", sections: [] }
  ]
};

export default dsaAdvanced;
