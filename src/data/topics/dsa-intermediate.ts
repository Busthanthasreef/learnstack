import type { Topic } from "../../types";

const dsaIntermediate: Topic = {
  id: "t_dsa_intermediate",
  slug: "dsa-intermediate",
  title: "DSA - 2",
  description: "Level up your problem solving with Hash Maps, Linked Lists, Stacks, and Queues.",
  difficulty: "Intermediate",
  category: "Computer Science",
  icon: "/src/assets/topics/dsa.svg",
  isFeatured: true,
  lessons: [
    { id: "l_dsa_i_1", slug: "hashing", title: "Hash Maps & Sets", description: "Fast lookups and collision handling.", sections: [] },
    { id: "l_dsa_i_2", slug: "linked-lists", title: "Linked Lists", description: "Singly and doubly linked lists.", sections: [] },
    { id: "l_dsa_i_3", slug: "stacks-queues", title: "Stacks & Queues", description: "LIFO and FIFO data structures.", sections: [] }
  ]
};

export default dsaIntermediate;
