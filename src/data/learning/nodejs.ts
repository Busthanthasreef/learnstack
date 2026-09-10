import type { TopicContent, LearningTopic } from "../../types";

const nodejsAllTopics: LearningTopic[] = [
  {
    id: "nodejs-day-1",
    title: "Day 1 — Node.js Fundamentals & Core Modules",
    sessions: [
      {
        id: "nodejs-day-1-session-1",
        title: "Session 1 — Introduction to Node.js & Core Concepts",
        mainTopics: [
          {
            id: "nodejs-d1-s1-m1",
            title: "Introduction to Node.js",
            subtopics: [
              { id: "nodejs-d1-s1-m1-sub1", title: "What is Node.js?" },
              { id: "nodejs-d1-s1-m1-sub2", title: "Why Node.js is Used" },
              { id: "nodejs-d1-s1-m1-sub3", title: "Features of Node.js" },
              { id: "nodejs-d1-s1-m1-sub4", title: "Node.js Runtime Environment" },
              { id: "nodejs-d1-s1-m1-sub5", title: "Node.js vs Browser JavaScript" },
              { id: "nodejs-d1-s1-m1-sub6", title: "JavaScript Runtime vs Node.js Runtime" }
            ]
          },
          {
            id: "nodejs-d1-s1-m2",
            title: "Node.js Architecture",
            subtopics: [
              { id: "nodejs-d1-s1-m2-sub1", title: "V8 JavaScript Engine" },
              { id: "nodejs-d1-s1-m2-sub2", title: "Single-Threaded Architecture" },
              { id: "nodejs-d1-s1-m2-sub3", title: "Non-Blocking I/O" },
              { id: "nodejs-d1-s1-m2-sub4", title: "Asynchronous Programming" },
              { id: "nodejs-d1-s1-m2-sub5", title: "Event-Driven Architecture" }
            ]
          },
          {
            id: "nodejs-d1-s1-m3",
            title: "Node.js Project Setup",
            subtopics: [
              { id: "nodejs-d1-s1-m3-sub1", title: "Node.js Installation" },
              { id: "nodejs-d1-s1-m3-sub2", title: "npm" },
              { id: "nodejs-d1-s1-m3-sub3", title: "package.json" },
              { id: "nodejs-d1-s1-m3-sub4", title: "package-lock.json" },
              { id: "nodejs-d1-s1-m3-sub5", title: "npm Scripts" },
              { id: "nodejs-d1-s1-m3-sub6", title: "Running Node.js Applications" }
            ]
          },
          {
            id: "nodejs-d1-s1-m4",
            title: "Node.js Modules",
            subtopics: [
              { id: "nodejs-d1-s1-m4-sub1", title: "What is a Module?" },
              { id: "nodejs-d1-s1-m4-sub2", title: "Built-in Modules" },
              { id: "nodejs-d1-s1-m4-sub3", title: "CommonJS Modules" },
              { id: "nodejs-d1-s1-m4-sub4", title: "require()" },
              { id: "nodejs-d1-s1-m4-sub5", title: "module.exports" },
              { id: "nodejs-d1-s1-m4-sub6", title: "Module Import & Export" }
            ]
          }
        ]
      },
      {
        id: "nodejs-day-1-session-2",
        title: "Session 2 — Node.js Built-in Modules",
        mainTopics: [
          {
            id: "nodejs-d1-s2-m1",
            title: "File System Module — fs",
            subtopics: [
              { id: "nodejs-d1-s2-m1-sub1", title: "Reading Files" },
              { id: "nodejs-d1-s2-m1-sub2", title: "readFile()" },
              { id: "nodejs-d1-s2-m1-sub3", title: "readFileSync()" },
              { id: "nodejs-d1-s2-m1-sub4", title: "Writing Files" },
              { id: "nodejs-d1-s2-m1-sub5", title: "writeFile()" },
              { id: "nodejs-d1-s2-m1-sub6", title: "writeFileSync()" },
              { id: "nodejs-d1-s2-m1-sub7", title: "Appending Files" },
              { id: "nodejs-d1-s2-m1-sub8", title: "Creating Directories" },
              { id: "nodejs-d1-s2-m1-sub9", title: "Reading Directories" },
              { id: "nodejs-d1-s2-m1-sub10", title: "File & Directory Operations" }
            ]
          },
          {
            id: "nodejs-d1-s2-m2",
            title: "Path Module — path",
            subtopics: [
              { id: "nodejs-d1-s2-m2-sub1", title: "path.join()" },
              { id: "nodejs-d1-s2-m2-sub2", title: "path.resolve()" },
              { id: "nodejs-d1-s2-m2-sub3", title: "path.basename()" },
              { id: "nodejs-d1-s2-m2-sub4", title: "path.dirname()" },
              { id: "nodejs-d1-s2-m2-sub5", title: "path.extname()" },
              { id: "nodejs-d1-s2-m2-sub6", title: "Working with File Paths" }
            ]
          },
          {
            id: "nodejs-d1-s2-m3",
            title: "OS Module — os",
            subtopics: [
              { id: "nodejs-d1-s2-m3-sub1", title: "os.platform()" },
              { id: "nodejs-d1-s2-m3-sub2", title: "os.arch()" },
              { id: "nodejs-d1-s2-m3-sub3", title: "os.cpus()" },
              { id: "nodejs-d1-s2-m3-sub4", title: "os.totalmem()" },
              { id: "nodejs-d1-s2-m3-sub5", title: "os.freemem()" },
              { id: "nodejs-d1-s2-m3-sub6", title: "os.hostname()" },
              { id: "nodejs-d1-s2-m3-sub7", title: "Operating System Information" }
            ]
          },
          {
            id: "nodejs-d1-s2-m4",
            title: "URL Module — url",
            subtopics: [
              { id: "nodejs-d1-s2-m4-sub1", title: "URL Object" },
              { id: "nodejs-d1-s2-m4-sub2", title: "URL Parsing" },
              { id: "nodejs-d1-s2-m4-sub3", title: "URL Parameters" },
              { id: "nodejs-d1-s2-m4-sub4", title: "URLSearchParams" },
              { id: "nodejs-d1-s2-m4-sub5", title: "Working with Query Parameters" }
            ]
          },
          {
            id: "nodejs-d1-s2-m5",
            title: "Crypto Module — crypto",
            subtopics: [
              { id: "nodejs-d1-s2-m5-sub1", title: "Cryptographic Concepts" },
              { id: "nodejs-d1-s2-m5-sub2", title: "Hashing" },
              { id: "nodejs-d1-s2-m5-sub3", title: "createHash()" },
              { id: "nodejs-d1-s2-m5-sub4", title: "Random Values" },
              { id: "nodejs-d1-s2-m5-sub5", title: "UUID Generation" },
              { id: "nodejs-d1-s2-m5-sub6", title: "Basic Password Hashing Concept" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nodejs-day-2",
    title: "Day 2 — Node.js Event Loop & Express.js Fundamentals",
    sessions: [
      {
        id: "nodejs-day-2-session-1",
        title: "Session 1 — Node.js Event Loop & Asynchronous Programming",
        mainTopics: [
          {
            id: "nodejs-d2-s1-m1",
            title: "Synchronous vs Asynchronous Operations",
            subtopics: [
              { id: "nodejs-d2-s1-m1-sub1", title: "Blocking Operations" },
              { id: "nodejs-d2-s1-m1-sub2", title: "Non-Blocking Operations" },
              { id: "nodejs-d2-s1-m1-sub3", title: "Callback-Based Operations" },
              { id: "nodejs-d2-s1-m1-sub4", title: "Promises" },
              { id: "nodejs-d2-s1-m1-sub5", title: "async / await" }
            ]
          },
          {
            id: "nodejs-d2-s1-m2",
            title: "Event-Driven Architecture",
            subtopics: [
              { id: "nodejs-d2-s1-m2-sub1", title: "Events" },
              { id: "nodejs-d2-s1-m2-sub2", title: "Event Emitters" },
              { id: "nodejs-d2-s1-m2-sub3", title: "EventEmitter Class" },
              { id: "nodejs-d2-s1-m2-sub4", title: "emit()" },
              { id: "nodejs-d2-s1-m2-sub5", title: "on()" },
              { id: "nodejs-d2-s1-m2-sub6", title: "Event-Based Communication" }
            ]
          },
          {
            id: "nodejs-d2-s1-m3",
            title: "Node.js Event Loop",
            subtopics: [
              { id: "nodejs-d2-s1-m3-sub1", title: "What is the Event Loop?" },
              { id: "nodejs-d2-s1-m3-sub2", title: "Call Stack" },
              { id: "nodejs-d2-s1-m3-sub3", title: "Callback Queue" },
              { id: "nodejs-d2-s1-m3-sub4", title: "Microtask Queue" },
              { id: "nodejs-d2-s1-m3-sub5", title: "Timers" },
              { id: "nodejs-d2-s1-m3-sub6", title: "I/O Operations" },
              { id: "nodejs-d2-s1-m3-sub7", title: "Event Loop Execution Flow" }
            ]
          },
          {
            id: "nodejs-d2-s1-m4",
            title: "Asynchronous Execution",
            subtopics: [
              { id: "nodejs-d2-s1-m4-sub1", title: "setTimeout()" },
              { id: "nodejs-d2-s1-m4-sub2", title: "setImmediate()" },
              { id: "nodejs-d2-s1-m4-sub3", title: "process.nextTick()" },
              { id: "nodejs-d2-s1-m4-sub4", title: "Promise Callbacks" },
              { id: "nodejs-d2-s1-m4-sub5", title: "Understanding Execution Order" }
            ]
          }
        ]
      },
      {
        id: "nodejs-day-2-session-2",
        title: "Session 2 — Express.js Fundamentals & Web APIs",
        mainTopics: [
          {
            id: "nodejs-d2-s2-m1",
            title: "Introduction to Express.js",
            subtopics: [
              { id: "nodejs-d2-s2-m1-sub1", title: "What is Express.js?" },
              { id: "nodejs-d2-s2-m1-sub2", title: "Why Express.js?" },
              { id: "nodejs-d2-s2-m1-sub3", title: "Express.js as a Framework" },
              { id: "nodejs-d2-s2-m1-sub4", title: "Node.js vs Express.js" },
              { id: "nodejs-d2-s2-m1-sub5", title: "Creating an Express Application" }
            ]
          },
          {
            id: "nodejs-d2-s2-m2",
            title: "Express Project Setup",
            subtopics: [
              { id: "nodejs-d2-s2-m2-sub1", title: "Installing Express" },
              { id: "nodejs-d2-s2-m2-sub2", title: "package.json" },
              { id: "nodejs-d2-s2-m2-sub3", title: "Creating app.js / server.js" },
              { id: "nodejs-d2-s2-m2-sub4", title: "express()" },
              { id: "nodejs-d2-s2-m2-sub5", title: "app.listen()" }
            ]
          },
          {
            id: "nodejs-d2-s2-m3",
            title: "Web API Fundamentals",
            subtopics: [
              { id: "nodejs-d2-s2-m3-sub1", title: "What is a Web API?" },
              { id: "nodejs-d2-s2-m3-sub2", title: "Client-Server Architecture" },
              { id: "nodejs-d2-s2-m3-sub3", title: "HTTP" },
              { id: "nodejs-d2-s2-m3-sub4", title: "HTTP Request" },
              { id: "nodejs-d2-s2-m3-sub5", title: "HTTP Response" },
              { id: "nodejs-d2-s2-m3-sub6", title: "HTTP Methods" },
              { id: "nodejs-d2-s2-m3-sub7", title: "GET" },
              { id: "nodejs-d2-s2-m3-sub8", title: "POST" },
              { id: "nodejs-d2-s2-m3-sub9", title: "PUT" },
              { id: "nodejs-d2-s2-m3-sub10", title: "PATCH" },
              { id: "nodejs-d2-s2-m3-sub11", title: "DELETE" },
              { id: "nodejs-d2-s2-m3-sub12", title: "HTTP Status Codes" }
            ]
          },
          {
            id: "nodejs-d2-s2-m4",
            title: "Express Routing",
            subtopics: [
              { id: "nodejs-d2-s2-m4-sub1", title: "Routes" },
              { id: "nodejs-d2-s2-m4-sub2", title: "app.get()" },
              { id: "nodejs-d2-s2-m4-sub3", title: "app.post()" },
              { id: "nodejs-d2-s2-m4-sub4", title: "app.put()" },
              { id: "nodejs-d2-s2-m4-sub5", title: "app.patch()" },
              { id: "nodejs-d2-s2-m4-sub6", title: "app.delete()" },
              { id: "nodejs-d2-s2-m4-sub7", title: "Route Parameters" }
            ]
          },
          {
            id: "nodejs-d2-s2-m5",
            title: "Request & Response",
            subtopics: [
              { id: "nodejs-d2-s2-m5-sub1", title: "req" },
              { id: "nodejs-d2-s2-m5-sub2", title: "res" },
              { id: "nodejs-d2-s2-m5-sub3", title: "req.params" },
              { id: "nodejs-d2-s2-m5-sub4", title: "req.query" },
              { id: "nodejs-d2-s2-m5-sub5", title: "req.body" },
              { id: "nodejs-d2-s2-m5-sub6", title: "req.headers" },
              { id: "nodejs-d2-s2-m5-sub7", title: "res.send()" },
              { id: "nodejs-d2-s2-m5-sub8", title: "res.json()" },
              { id: "nodejs-d2-s2-m5-sub9", title: "res.status()" },
              { id: "nodejs-d2-s2-m5-sub10", title: "res.redirect()" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nodejs-day-3",
    title: "Day 3 — Express.js Advanced Features & Authentication Project",
    sessions: [
      {
        id: "nodejs-day-3-session-1",
        title: "Session 1 — Express Middleware, Views, CORS & File Uploads",
        mainTopics: [
          {
            id: "nodejs-d3-s1-m1",
            title: "Middleware",
            subtopics: [
              { id: "nodejs-d3-s1-m1-sub1", title: "What is Middleware?" },
              { id: "nodejs-d3-s1-m1-sub2", title: "Middleware Request Flow" },
              { id: "nodejs-d3-s1-m1-sub3", title: "req, res, next" },
              { id: "nodejs-d3-s1-m1-sub4", title: "Application-Level Middleware" },
              { id: "nodejs-d3-s1-m1-sub5", title: "Router-Level Middleware" },
              { id: "nodejs-d3-s1-m1-sub6", title: "Built-in Middleware" },
              { id: "nodejs-d3-s1-m1-sub7", title: "express.json()" },
              { id: "nodejs-d3-s1-m1-sub8", title: "express.urlencoded()" },
              { id: "nodejs-d3-s1-m1-sub9", title: "Custom Middleware" },
              { id: "nodejs-d3-s1-m1-sub10", title: "Error Handling Middleware" }
            ]
          },
          {
            id: "nodejs-d3-s1-m2",
            title: "Query Parameters",
            subtopics: [
              { id: "nodejs-d3-s1-m2-sub1", title: "What are Query Parameters?" },
              { id: "nodejs-d3-s1-m2-sub2", title: "req.query" },
              { id: "nodejs-d3-s1-m2-sub3", title: "Multiple Query Parameters" },
              { id: "nodejs-d3-s1-m2-sub4", title: "Query Parameter Validation" },
              { id: "nodejs-d3-s1-m2-sub5", title: "Query Parameters vs Route Parameters" }
            ]
          },
          {
            id: "nodejs-d3-s1-m3",
            title: "View Engines",
            subtopics: [
              { id: "nodejs-d3-s1-m3-sub1", title: "What is Server-Side Rendering?" },
              { id: "nodejs-d3-s1-m3-sub2", title: "What is a Template Engine?" },
              { id: "nodejs-d3-s1-m3-sub3", title: "EJS / Handlebars / Pug" },
              { id: "nodejs-d3-s1-m3-sub4", title: "View Configuration" },
              { id: "nodejs-d3-s1-m3-sub5", title: "Rendering Views" },
              { id: "nodejs-d3-s1-m3-sub6", title: "Passing Data to Views" },
              { id: "nodejs-d3-s1-m3-sub7", title: "Dynamic HTML Rendering" }
            ]
          },
          {
            id: "nodejs-d3-s1-m4",
            title: "CORS & Same-Origin Policy",
            subtopics: [
              { id: "nodejs-d3-s1-m4-sub1", title: "Same-Origin Policy" },
              { id: "nodejs-d3-s1-m4-sub2", title: "What is CORS?" },
              { id: "nodejs-d3-s1-m4-sub3", title: "Cross-Origin Requests" },
              { id: "nodejs-d3-s1-m4-sub4", title: "CORS Middleware" },
              { id: "nodejs-d3-s1-m4-sub5", title: "Allowed Origins" },
              { id: "nodejs-d3-s1-m4-sub6", title: "CORS Request Flow" }
            ]
          },
          {
            id: "nodejs-d3-s1-m5",
            title: "Multer",
            subtopics: [
              { id: "nodejs-d3-s1-m5-sub1", title: "What is Multer?" },
              { id: "nodejs-d3-s1-m5-sub2", title: "File Upload Handling" },
              { id: "nodejs-d3-s1-m5-sub3", title: "multipart/form-data" },
              { id: "nodejs-d3-s1-m5-sub4", title: "upload.single()" },
              { id: "nodejs-d3-s1-m5-sub5", title: "upload.array()" },
              { id: "nodejs-d3-s1-m5-sub6", title: "File Information" },
              { id: "nodejs-d3-s1-m5-sub7", title: "Destination Configuration" },
              { id: "nodejs-d3-s1-m5-sub8", title: "File Type / Size Validation" }
            ]
          }
        ]
      },
      {
        id: "nodejs-day-3-session-2",
        title: "Session 2 — Authentication, Sessions, Cookies & Login Project",
        mainTopics: [
          {
            id: "nodejs-d3-s2-m1",
            title: "Authentication & Authorization",
            subtopics: [
              { id: "nodejs-d3-s2-m1-sub1", title: "Authentication" },
              { id: "nodejs-d3-s2-m1-sub2", title: "Authorization" },
              { id: "nodejs-d3-s2-m1-sub3", title: "Authentication vs Authorization" },
              { id: "nodejs-d3-s2-m1-sub4", title: "Login Flow" },
              { id: "nodejs-d3-s2-m1-sub5", title: "Access Control" }
            ]
          },
          {
            id: "nodejs-d3-s2-m2",
            title: "Cookies",
            subtopics: [
              { id: "nodejs-d3-s2-m2-sub1", title: "What is a Cookie?" },
              { id: "nodejs-d3-s2-m2-sub2", title: "Creating Cookies" },
              { id: "nodejs-d3-s2-m2-sub3", title: "Reading Cookies" },
              { id: "nodejs-d3-s2-m2-sub4", title: "Cookie Expiration" },
              { id: "nodejs-d3-s2-m2-sub5", title: "Cookie-Based Authentication" }
            ]
          },
          {
            id: "nodejs-d3-s2-m3",
            title: "Sessions",
            subtopics: [
              { id: "nodejs-d3-s2-m3-sub1", title: "What is a Session?" },
              { id: "nodejs-d3-s2-m3-sub2", title: "Session-Based Authentication" },
              { id: "nodejs-d3-s2-m3-sub3", title: "Session Creation" },
              { id: "nodejs-d3-s2-m3-sub4", title: "Session Data" },
              { id: "nodejs-d3-s2-m3-sub5", title: "Session Validation" },
              { id: "nodejs-d3-s2-m3-sub6", title: "Session Expiration" },
              { id: "nodejs-d3-s2-m3-sub7", title: "Session Destruction" }
            ]
          },
          {
            id: "nodejs-d3-s2-m4",
            title: "Login Page",
            subtopics: [
              { id: "nodejs-d3-s2-m4-sub1", title: "Bootstrap UI" },
              { id: "nodejs-d3-s2-m4-sub2", title: "Username Input" },
              { id: "nodejs-d3-s2-m4-sub3", title: "Password Input" },
              { id: "nodejs-d3-s2-m4-sub4", title: "Login Form" },
              { id: "nodejs-d3-s2-m4-sub5", title: "Server-Side Form Submission" }
            ]
          },
          {
            id: "nodejs-d3-s2-m5",
            title: "Home Page",
            subtopics: [
              { id: "nodejs-d3-s2-m5-sub1", title: "Bootstrap UI" },
              { id: "nodejs-d3-s2-m5-sub2", title: "Non-Blank Content" },
              { id: "nodejs-d3-s2-m5-sub3", title: "User Information" },
              { id: "nodejs-d3-s2-m5-sub4", title: "Signout Button" },
              { id: "nodejs-d3-s2-m5-sub5", title: "Protected Page" }
            ]
          },
          {
            id: "nodejs-d3-s2-m6",
            title: "Server-Side Login Validation",
            subtopics: [
              { id: "nodejs-d3-s2-m6-sub1", title: "Receive Username" },
              { id: "nodejs-d3-s2-m6-sub2", title: "Receive Password" },
              { id: "nodejs-d3-s2-m6-sub3", title: "Validate Credentials" },
              { id: "nodejs-d3-s2-m6-sub4", title: "Correct Credentials" },
              { id: "nodejs-d3-s2-m6-sub5", title: "Create Session → Home Page" },
              { id: "nodejs-d3-s2-m6-sub6", title: "Incorrect Credentials" },
              { id: "nodejs-d3-s2-m6-sub7", title: "Display Error → Login Page" }
            ]
          },
          {
            id: "nodejs-d3-s2-m7",
            title: "Signout Flow",
            subtopics: [
              { id: "nodejs-d3-s2-m7-sub1", title: "Signout Route" },
              { id: "nodejs-d3-s2-m7-sub2", title: "Destroy Session" },
              { id: "nodejs-d3-s2-m7-sub3", title: "Redirect to Login" },
              { id: "nodejs-d3-s2-m7-sub4", title: "Prevent Access After Signout" }
            ]
          },
          {
            id: "nodejs-d3-s2-m8",
            title: "Protected Routes",
            subtopics: [
              { id: "nodejs-d3-s2-m8-sub1", title: "Authentication Middleware" },
              { id: "nodejs-d3-s2-m8-sub2", title: "Check Session" },
              { id: "nodejs-d3-s2-m8-sub3", title: "Allow Authenticated User" },
              { id: "nodejs-d3-s2-m8-sub4", title: "Redirect Unauthenticated User" }
            ]
          },
          {
            id: "nodejs-d3-s2-m9",
            title: "Browser Back Button Protection",
            subtopics: [
              { id: "nodejs-d3-s2-m9-sub1", title: "Prevent Cached Protected Page" },
              { id: "nodejs-d3-s2-m9-sub2", title: "Cache-Control Headers" },
              { id: "nodejs-d3-s2-m9-sub3", title: "no-store" },
              { id: "nodejs-d3-s2-m9-sub4", title: "no-cache" },
              { id: "nodejs-d3-s2-m9-sub5", title: "Revalidate Authentication on Request" }
            ]
          },
          {
            id: "nodejs-d3-s2-m10",
            title: "Development Tools",
            subtopics: [
              { id: "nodejs-d3-s2-m10-sub1", title: "Prettier" },
              { id: "nodejs-d3-s2-m10-sub2", title: "Installation" },
              { id: "nodejs-d3-s2-m10-sub3", title: "Configuration" },
              { id: "nodejs-d3-s2-m10-sub4", title: "Format on Save" },
              { id: "nodejs-d3-s2-m10-sub5", title: "Node.js Debugging" },
              { id: "nodejs-d3-s2-m10-sub6", title: "Breakpoints" },
              { id: "nodejs-d3-s2-m10-sub7", title: "Watch Variables" },
              { id: "nodejs-d3-s2-m10-sub8", title: "Call Stack" },
              { id: "nodejs-d3-s2-m10-sub9", title: "Runtime Errors" },
              { id: "nodejs-d3-s2-m10-sub10", title: "Debugging Request Flow" }
            ]
          }
        ]
      }
    ]
  }
];

const content: TopicContent = {
  topicId: "nodejs",
  allTopics: nodejsAllTopics,
  theoryQuestions: [],
  practicalQuestions: []
};

export default content;
