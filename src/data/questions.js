export const questions = [
  // =========================
  // ✅ React (20)
  // =========================
  {
    id: "react-01",
    title: "What is JSX in React?",
    category: "React",
    difficulty: "Easy",
    short: "JSX lets you write HTML-like code inside JavaScript.",
    explanation:
      "JSX is a syntax extension for JavaScript that makes UI code easier to read. React converts JSX into regular JavaScript behind the scenes.",
    example:
      "const element = <h1>Hello</h1>;\n\n// Converted to:\n// React.createElement('h1', null, 'Hello')",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: "react-02",
    title: "What is a React Component?",
    category: "React",
    difficulty: "Easy",
    short: "A component is a reusable UI piece in React.",
    explanation:
      "React components help you break UI into smaller parts like Navbar, Button, Card. Components can be functional or class-based (mostly functional now).",
    example:
      "function Button(){\n  return <button>Click</button>;\n}\nexport default Button;",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "react-03",
    title: "Props vs State in React",
    category: "React",
    difficulty: "Easy",
    short: "Props are read-only, state is changeable.",
    explanation:
      "Props are passed from parent to child and should not be changed inside the child. State is managed inside a component and changes over time.",
    example:
      "function Card({title}){\n  const [count,setCount]=useState(0);\n  return <h2>{title} {count}</h2>;\n}",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    id: "react-04",
    title: "What is useState hook?",
    category: "React",
    difficulty: "Easy",
    short: "useState allows a component to store and update data.",
    explanation:
      "useState gives you a state value and a function to update it. When state updates, component re-renders.",
    example: "const [count,setCount] = useState(0);\nsetCount(count+1);",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: "react-05",
    title: "What is useEffect used for?",
    category: "React",
    difficulty: "Easy",
    short: "useEffect runs side effects like API calls, DOM updates.",
    explanation:
      "useEffect is used for side effects such as fetching data, setting subscriptions, timers. You can control when it runs using dependencies array.",
    example:
      "useEffect(()=>{\n  fetch('/api').then(r=>r.json()).then(setData);\n}, []);",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "react-06",
    title: "What is conditional rendering?",
    category: "React",
    difficulty: "Easy",
    short: "Render different UI based on conditions.",
    explanation:
      "In React you can show/hide elements using if statements, ternary operator, or logical && based on state/props.",
    example: "{isLoggedIn ? <Dashboard/> : <Login/>}",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
  {
    id: "react-07",
    title: "What is key in React lists?",
    category: "React",
    difficulty: "Easy",
    short: "Keys help React identify items efficiently.",
    explanation:
      "When rendering lists using map(), each element should have a unique key. It helps React update UI efficiently.",
    example: "{items.map(item => <li key={item.id}>{item.name}</li>)}",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
  },
  {
    id: "react-08",
    title: "What is lifting state up?",
    category: "React",
    difficulty: "Medium",
    short: "Moving shared state to the nearest common parent.",
    explanation:
      "If two components need the same state, store it in their common parent and pass it down via props.",
    example: "// Parent keeps state\n// children get props",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
  },
  {
    id: "react-09",
    title: "What is React Fragment?",
    category: "React",
    difficulty: "Easy",
    short: "Fragments group elements without extra DOM nodes.",
    explanation:
      "Use <>...</> or <React.Fragment> to return multiple elements without adding an extra div wrapper.",
    example: "<>\n  <h1>Title</h1>\n  <p>Text</p>\n</>",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80",
  },
  {
    id: "react-10",
    title: "What is React Router used for?",
    category: "React",
    difficulty: "Easy",
    short: "For client-side routing in React apps.",
    explanation:
      "React Router helps navigate between pages without reloading. In Next.js we use file-based routing instead.",
    example: "<Link to='/about'>About</Link>",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  },
  {
    id: "react-11",
    title: "Controlled vs Uncontrolled components",
    category: "React",
    difficulty: "Medium",
    short: "Controlled uses state; uncontrolled uses refs.",
    explanation:
      "Controlled inputs are managed by React state. Uncontrolled inputs rely on DOM state and use refs to read values.",
    example:
      "const [value,setValue]=useState('');\n<input value={value} onChange={e=>setValue(e.target.value)} />",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    id: "react-12",
    title: "What is prop drilling?",
    category: "React",
    difficulty: "Medium",
    short: "Passing props through many component levels.",
    explanation:
      "Prop drilling happens when you pass data through multiple components. Context API helps reduce it.",
    example: "App -> Layout -> Sidebar -> Item",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "react-13",
    title: "What is Context API?",
    category: "React",
    difficulty: "Medium",
    short: "Global state sharing without passing props deeply.",
    explanation:
      "Context allows sharing data like theme, auth, language across components without prop drilling.",
    example:
      "const ThemeContext = createContext();\n<ThemeContext.Provider value='dark'>...</ThemeContext.Provider>",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: "react-14",
    title: "What is useMemo used for?",
    category: "React",
    difficulty: "Medium",
    short: "useMemo caches expensive calculations.",
    explanation:
      "useMemo prevents unnecessary recalculation of heavy functions by memoizing the result based on dependencies.",
    example: "const filtered = useMemo(()=> items.filter(...), [items]);",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },
  {
    id: "react-15",
    title: "What is useCallback used for?",
    category: "React",
    difficulty: "Medium",
    short: "useCallback memoizes function references.",
    explanation:
      "useCallback prevents re-creating functions on every render which helps optimize child component re-renders.",
    example: "const handleClick = useCallback(()=> setCount(c=>c+1), []);",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "react-16",
    title: "What is React reconciliation?",
    category: "React",
    difficulty: "Hard",
    short: "React compares virtual DOM to update UI efficiently.",
    explanation:
      "React uses a diffing algorithm to compare previous and next virtual DOM trees and updates only changed parts.",
    example: "React updates only changed nodes, not full page reload.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
  },
  {
    id: "react-17",
    title: "What is hydration in React/Next.js?",
    category: "React",
    difficulty: "Hard",
    short: "Hydration connects server-rendered HTML with React events.",
    explanation:
      "In SSR apps, server sends HTML first. Hydration attaches React event listeners on the client to make it interactive.",
    example: "SSR HTML + client JS = interactive app",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    id: "react-18",
    title: "What are React Server Components?",
    category: "React",
    difficulty: "Hard",
    short: "Components rendered on server for performance.",
    explanation:
      "Server components run on the server, reduce bundle size, and can fetch data securely. In Next.js App Router, pages are server by default.",
    example:
      "export default async function Page(){\n  const data = await fetch(...)\n  return <div/>;\n}",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: "react-19",
    title: "What is a custom hook?",
    category: "React",
    difficulty: "Medium",
    short: "A reusable function that uses React hooks.",
    explanation:
      "Custom hooks help reuse logic like fetching, auth, form handling across multiple components.",
    example:
      "function useFetch(url){\n  const [data,setData]=useState(null);\n  useEffect(()=>{...},[url]);\n  return data;\n}",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
  },
  {
    id: "react-20",
    title: "What is the difference between CSR and SSR?",
    category: "React",
    difficulty: "Hard",
    short: "CSR renders in browser, SSR renders on server.",
    explanation:
      "CSR loads JS and renders UI in the browser. SSR renders HTML on the server for faster initial load and better SEO.",
    example: "CSR: React SPA\nSSR: Next.js pages",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80",
  },

  // =========================
  // ✅ JavaScript (20)
  // =========================
  {
    id: "js-01",
    title: "Difference between let, const and var?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Scope and reassignment differences.",
    explanation:
      "var is function scoped and hoisted. let and const are block scoped. const cannot be reassigned but object properties can change.",
    example:
      "if(true){\n  let a=10;\n  const b=20;\n  var c=30;\n}\n// a,b not accessible\n// c accessible",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
  },
  {
    id: "js-02",
    title: "What is hoisting in JavaScript?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Variables/functions moved to the top during execution.",
    explanation:
      "Hoisting means JavaScript moves declarations to the top. var is hoisted with undefined, let/const are in temporal dead zone.",
    example: "console.log(a); // undefined\nvar a=5;",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "js-03",
    title: "What is a closure?",
    category: "JavaScript",
    difficulty: "Medium",
    short: "A function remembers variables from its outer scope.",
    explanation:
      "Closures allow a function to access outer variables even after the outer function has finished execution.",
    example:
      "function outer(){\n  let x=5;\n  return function(){\n    return x;\n  }\n}\nconst fn=outer();\nfn(); // 5",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: "js-04",
    title: "What is event loop in JavaScript?",
    category: "JavaScript",
    difficulty: "Medium",
    short: "Manages async tasks using call stack + queue.",
    explanation:
      "Event loop checks call stack, and executes queued callbacks when stack is empty. Helps handle async operations like setTimeout and fetch.",
    example: "setTimeout(()=>console.log('Hi'),0);\nconsole.log('First');",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "js-05",
    title: "Difference between == and ===",
    category: "JavaScript",
    difficulty: "Easy",
    short: "=== checks value + type, == does type conversion.",
    explanation:
      "== performs type coercion before comparing. === compares strictly without converting types.",
    example: "5 == '5' // true\n5 === '5' // false",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
  },

  // ✅ JS 06-20 (shorter but complete)
  {
    id: "js-06",
    title: "What is a Promise?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Represents future completion/failure of async task.",
    explanation:
      "Promise has states: pending, fulfilled, rejected. Use then/catch/finally to handle results.",
    example:
      "fetch('/api').then(r=>r.json()).then(console.log).catch(console.error);",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
  },
  {
    id: "js-07",
    title: "What is async/await?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Cleaner way to write promise-based code.",
    explanation:
      "async function always returns a promise. await pauses execution until the promise resolves.",
    example:
      "async function load(){\n  const res = await fetch('/api');\n  return await res.json();\n}",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "js-08",
    title: "What is DOM?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Document Object Model represents HTML as objects.",
    explanation:
      "DOM is a tree structure where elements are nodes. JavaScript can manipulate DOM using methods like querySelector.",
    example:
      "document.querySelector('#btn').addEventListener('click', ()=>{});",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: "js-09",
    title: "What is destructuring?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Extract values from arrays/objects easily.",
    explanation:
      "Destructuring helps unpack values into variables in a clean way.",
    example: "const user={name:'Sadia',age:22};\nconst {name,age}=user;",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    id: "js-10",
    title: "What is spread operator?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Copies/merges arrays and objects.",
    explanation:
      "Spread operator (...) is used to expand elements of arrays/objects into new copies.",
    example: "const a=[1,2];\nconst b=[...a,3];",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
  },
  {
    id: "js-11",
    title: "What is rest parameter?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Collects multiple arguments into an array.",
    explanation: "Rest parameter uses ... to group function arguments.",
    example: "function sum(...nums){\n return nums.reduce((a,b)=>a+b,0);\n}",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
  },
  {
    id: "js-12",
    title: "Difference between map, filter, forEach",
    category: "JavaScript",
    difficulty: "Medium",
    short: "map returns new array, filter selects, forEach loops.",
    explanation:
      "map transforms items, filter returns items that pass a condition, forEach just executes code for each item.",
    example:
      "[1,2,3].map(x=>x*2)\n[1,2,3].filter(x=>x>1)\n[1,2,3].forEach(x=>console.log(x))",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "js-13",
    title: "What is truthy and falsy?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Values that act like true/false in conditions.",
    explanation:
      "Falsy values: false, 0, '', null, undefined, NaN. Everything else is truthy.",
    example: "if('') console.log('run'); // won't run",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: "js-14",
    title: "What is optional chaining?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "Safely access nested properties using ?.",
    explanation:
      "Optional chaining prevents errors when a property is undefined or null.",
    example: "user?.profile?.name",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    id: "js-15",
    title: "What is null vs undefined?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "undefined means not assigned, null means intentionally empty.",
    explanation:
      "undefined is default unassigned value. null is explicitly set empty value.",
    example: "let x;\nconsole.log(x); // undefined\nx=null;",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
  },
  {
    id: "js-16",
    title: "What is template literal?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "String with ${} interpolation using backticks.",
    explanation:
      "Template literals allow multi-line strings and embedding expressions.",
    example: "const name='Sadia';\nconsole.log(`Hello ${name}`);",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
  },
  {
    id: "js-17",
    title: "What is scope in JavaScript?",
    category: "JavaScript",
    difficulty: "Medium",
    short: "Where variables can be accessed in code.",
    explanation:
      "Scope can be global, function, or block. let/const are block scoped.",
    example: "if(true){ let x=1; }\n// x not accessible here",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "js-18",
    title: "What is debounce?",
    category: "JavaScript",
    difficulty: "Hard",
    short: "Limits function calls until a delay passes.",
    explanation:
      "Debounce prevents calling a function too frequently, common in search inputs.",
    example: "setTimeout(()=>{ /* run after delay */ }, 300);",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: "js-19",
    title: "What is throttle?",
    category: "JavaScript",
    difficulty: "Hard",
    short: "Calls function at most once per time interval.",
    explanation:
      "Throttle ensures function runs at a controlled rate (e.g. scroll events).",
    example: "// run max once per 200ms",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    id: "js-20",
    title: "What is JSON?",
    category: "JavaScript",
    difficulty: "Easy",
    short: "A text format for data exchange.",
    explanation:
      "JSON is JavaScript Object Notation. Often used in APIs to send/receive data.",
    example: 'const obj = JSON.parse(\'{"name":"Sadia"}\');',
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
  },

  // =========================
  // ✅ CSS (20)
  // =========================
  {
    id: "css-01",
    title: "Flexbox vs Grid — what’s the difference?",
    category: "CSS",
    difficulty: "Medium",
    short: "Flex is 1D layout, Grid is 2D layout.",
    explanation:
      "Flexbox works in one direction (row/column). Grid controls both rows and columns, better for full layouts.",
    example:
      ".flex{display:flex;gap:12px;}\n.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
  },
  {
    id: "css-02",
    title: "What is box model in CSS?",
    category: "CSS",
    difficulty: "Easy",
    short: "Content + padding + border + margin.",
    explanation:
      "Box model describes how elements are sized. Total width includes padding and border unless using box-sizing: border-box.",
    example: "*{box-sizing:border-box;}",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  },

  // ✅ CSS 03-20 (short but meaningful)
  {
    id: "css-03",
    title: "What is position: relative?",
    category: "CSS",
    difficulty: "Easy",
    short: "Moves element relative to its normal position.",
    explanation:
      "relative keeps element in document flow but allows top/left adjustment.",
    example: ".box{position:relative;top:10px;}",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: "css-04",
    title: "What is position: absolute?",
    category: "CSS",
    difficulty: "Easy",
    short: "Positions element relative to nearest positioned ancestor.",
    explanation:
      "absolute removes element from normal flow. It positions based on nearest parent with relative/absolute.",
    example:
      ".parent{position:relative;}\n.child{position:absolute;top:0;right:0;}",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
  },
  {
    id: "css-05",
    title: "What is responsive design?",
    category: "CSS",
    difficulty: "Easy",
    short: "Design that adapts to different screen sizes.",
    explanation:
      "Responsive design uses flexible layouts, media queries, and relative units to look good on mobile, tablet, desktop.",
    example: "@media (max-width:768px){ .grid{grid-template-columns:1fr;} }",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  // Fill remaining CSS up to 20
  ...Array.from({ length: 15 }).map((_, i) => {
    const n = i + 6;
    return {
      id: `css-${String(n).padStart(2, "0")}`,
      title: `CSS Practice Question ${n}`,
      category: "CSS",
      difficulty: n % 3 === 0 ? "Medium" : "Easy",
      short: "A common CSS concept you should know for interviews.",
      explanation:
        "This is a placeholder style question. You can replace it with your own CSS interview question later.",
      example: "/* Write your example here */",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80",
    };
  }),

  // =========================
  // ✅ Interview Tips (20)
  // =========================
  ...Array.from({ length: 20 }).map((_, i) => {
    const n = i + 1;
    return {
      id: `tip-${String(n).padStart(2, "0")}`,
      title: `Interview Tip ${n}`,
      category: "Interview Tips",
      difficulty: "Easy",
      short: "A short interview tip to help you perform better.",
      explanation:
        "Practice confidently. Explain your thought process and keep answers clear. Real interviews focus on communication as much as correctness.",
      example:
        "Tip: When you don't know something, say honestly and explain how you would learn it.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    };
  }),
];
