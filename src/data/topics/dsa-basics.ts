import type { Topic } from "../../types";

const dsaBasics: Topic = {
  id: "t_dsa_basics",
  slug: "dsa-basics",
  title: "DSA - 1",
  description: "Introduction to Data Structures and Algorithms. Learn arrays, strings, and basic complexity analysis.",
  difficulty: "Beginner",
  category: "Computer Science",
  icon: "/src/assets/topics/dsa.svg",
  isFeatured: true,
  lessons: [
    { id: "l_dsa_b_1", slug: "complexity", title: "Time & Space Complexity", description: "Big O notation basics.", sections: [] },
    { id: "l_dsa_b_2", slug: "arrays", title: "Arrays & Strings", description: "Memory layout and basic operations.", sections: [] }
  ]
};

export default dsaBasics;
