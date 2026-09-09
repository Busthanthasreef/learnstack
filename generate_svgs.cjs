const fs = require('fs');
fs.mkdirSync('src/assets/topics', { recursive: true });

fs.writeFileSync('src/assets/topics/javascript.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f7df1e"><rect width="24" height="24" rx="4"/><path fill="#000" d="M12 17.5c0 .6.4 1 1 1 1.2 0 1.6-.7 1.6-1.5 0-1-.8-1.5-1.9-2-1.3-.6-2.5-1.3-2.5-3 0-1.7 1.3-2.8 3-2.8 1.9 0 3 1.2 3 2.5h-1.5c0-.8-.6-1.3-1.5-1.3-1 0-1.5.6-1.5 1.3 0 .8.8 1.1 1.9 1.6 1.4.6 2.5 1.5 2.5 3.2 0 1.8-1.3 3.1-3.2 3.1-2 0-3.3-1.2-3.3-3h1.4zm-4.7 0c0 .6.5 1.1 1.1 1.1.7 0 1-.5 1-1.2v-5.2h1.5v5.3c0 1.6-1.1 2.5-2.5 2.5-1.6 0-2.4-1.1-2.4-2.5h1.3z"/></svg>');

fs.writeFileSync('src/assets/topics/nodejs.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#339933"><path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm-1.8 14.7V11c0-.4.3-.7.7-.7s.7.3.7.7v3.5c0 .5.3.8.7.8s.7-.3.7-.8v-5.8l2-1.1v6.9c0 1.5-1.1 2.7-2.7 2.7-1.6 0-2.7-1.2-2.7-2.7v-3.5c0-.5-.3-.8-.7-.8s-.7.3-.7.8v5.8l-2 1.1V9.8l2-1.1v8z"/></svg>');

fs.writeFileSync('src/assets/topics/mongodb.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#47A248"><path d="M12 2c-3.1 6.8-4.5 12.3-4.5 15 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-2.7-1.4-8.2-4.5-15z"/></svg>');

fs.writeFileSync('src/assets/topics/dsa.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9M15 21V9"/></svg>');

fs.writeFileSync('src/assets/topics/ooad-oop.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5 22h14M12 11v11M8 17h8"/></svg>');

fs.writeFileSync('src/assets/topics/sql.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>');

fs.writeFileSync('src/assets/topics/typescript.svg', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3178C6"><rect width="24" height="24" rx="4"/><path fill="#FFF" d="M11 10.7h-3.6v-1.4h8.8v1.4h-3.6v7.7H11v-7.7zm7.2 3.1c0 1.3-1.1 2.3-2.6 2.3-1.4 0-2.5-.9-2.5-2v-1.4h1.4v1.4c0 .5.5 1 1.1 1 .5 0 1-.4 1-.9 0-.6-.5-1-1.3-1.3l-.7-.3c-1.3-.5-2.2-1.3-2.2-2.6 0-1.2 1-2.2 2.4-2.2 1.4 0 2.4.9 2.4 2v1.3h-1.4v-1.3c0-.5-.5-.9-1-.9-.5 0-1 .4-1 .8 0 .5.5.9 1.2 1.1l.8.3c1.4.5 2.4 1.3 2.4 2.8z"/></svg>');

console.log('SVGs created successfully.');
