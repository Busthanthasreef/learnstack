import type { Topic } from "../../types";

const ooadOop: Topic = {
  id: "t_ooad_oop",
  slug: "ooad-oop",
  title: "OOAD & OOP",
  description: "Object-Oriented Analysis and Design. Learn classes, inheritance, polymorphism, and design patterns.",
  difficulty: "Intermediate",
  category: "Architecture",
  icon: "/src/assets/topics/ooad-oop.svg",
  isFeatured: true,
  lessons: [
    { id: "l_oop_1", slug: "classes", title: "Classes & Objects", description: "The building blocks of OOP.", sections: [] },
    { id: "l_oop_2", slug: "pillars", title: "Four Pillars of OOP", description: "Encapsulation, Abstraction, Inheritance, Polymorphism.", sections: [] },
    { id: "l_oop_3", slug: "patterns", title: "Design Patterns", description: "Common solutions to recurring problems.", sections: [] }
  ]
};

export default ooadOop;
