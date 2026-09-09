import type { Topic } from "../../types";

const typescript: Topic = {
  id: "t_typescript",
  slug: "typescript",
  title: "TypeScript",
  description: "JavaScript with syntax for types. Build robust, scalable, and maintainable applications.",
  difficulty: "Intermediate",
  category: "Language",
  icon: "/src/assets/topics/typescript.svg",
  isFeatured: true,
  lessons: [
    { id: "l_ts_1", slug: "types", title: "Basic Types", description: "Primitives, arrays, and tuples.", sections: [] },
    { id: "l_ts_2", slug: "interfaces", title: "Interfaces & Types", description: "Defining object shapes.", sections: [] },
    { id: "l_ts_3", slug: "generics", title: "Generics", description: "Reusable components and types.", sections: [] }
  ]
};

export default typescript;
