import type { Topic } from "../../types";

const javascript: Topic = {
  id: "t_javascript",
  slug: "javascript",
  title: "JavaScript",
  description: "The programming language of the Web. Learn syntax, DOM manipulation, and ES6+ features.",
  difficulty: "Beginner",
  category: "Language",
  icon: "/src/assets/topics/javascript.svg",
  isFeatured: true,
  lessons: [
    { id: "l_js_1", slug: "variables", title: "Variables & Data Types", description: "Learn about let, const, and var.", sections: [] },
    { id: "l_js_2", slug: "functions", title: "Functions & Scope", description: "Understand regular and arrow functions.", sections: [] },
    { id: "l_js_3", slug: "dom", title: "DOM Manipulation", description: "Interact with the browser document.", sections: [] },
    { id: "l_js_4", slug: "async", title: "Asynchronous JS", description: "Promises, async/await, and the event loop.", sections: [] }
  ]
};

export default javascript;
