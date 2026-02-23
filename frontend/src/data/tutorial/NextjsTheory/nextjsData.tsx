import React from "react";

// Interfaces are placed here for the tutorial structure
export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

// Main structure of the sidebar navigation for React (from images)
export const tutorialData: SidebarItem[] = [
  
  { label: "React Home", href: "react_home.asp" },
  { label: " Intro", href: "react_intro.asp" },
  { label: "React Get Started", href: "react_get_started.asp" },
  { label: "React First App", href: "react_first_app.asp" },
  { label: "React Render HTML", href: "react_render_html.asp" },
  { label: "React Upgrade", href: "react_upgrade.asp" },

  { label: "React JSX Intro", href: "react_jsx_intro.asp" },
  { label: "React JSX Expressions", href: "react_jsx_expressions.asp" },
  { label: "React JSX Attributes", href: "react_jsx_attributes.asp" },
  { label: "React JSX If Statements", href: "react_jsx_if_statements.asp" },
  { label: "React Components", href: "react_components.asp" },
  { label: "React Class", href: "react_class.asp" },
  { label: "React Props", href: "react_props.asp" },
  { label: "React Props Destructuring", href: "react_props_destructuring.asp" },
  { label: "React Props Children", href: "react_props_children.asp" },
  { label: "React Events", href: "react_events.asp" },
  { label: "React Conditionals", href: "react_conditionals.asp" },
  { label: "React Lists", href: "react_lists.asp" },
  { label: "React Forms", href: "react_forms.asp" },
  { label: "React Forms Submit", href: "react_forms_submit.asp" },
  { label: "React Textarea", href: "react_textarea.asp" },
  { label: "React Select", href: "react_select.asp" },
  { label: "React Multiple Inputs", href: "react_multiple_inputs.asp" },
  { label: "React Checkbox", href: "react_checkbox.asp" },
  { label: "React Radio", href: "react_radio.asp" },
  { label: "React Portals", href: "react_portals.asp" },
  { label: "React Suspense", href: "react_suspense.asp" },
  { label: "React CSS Styling", href: "react_css_styling.asp" },
  { label: "React CSS Modules", href: "react_css_modules.asp" },
  { label: "React CSS-in-JS", href: "react_css_in_js.asp" },
  { label: "React Router", href: "react_router.asp" },
  { label: "React Transitions", href: "react_transitions.asp" },
  { label: "React Forward Ref", href: "react_forward_ref.asp" },
  { label: "React HOC", href: "react_hoc.asp" },

  {
    label: "React Hooks",
    href: "react_hooks.asp",
    isHeader: true,
    children: [
      { label: "What is Hooks?", href: "react_hooks_what_is.asp" },
      { label: "React useState", href: "react_usestate.asp" },
      { label: "React useEffect", href: "react_useeffect.asp" },
      { label: "React useContext", href: "react_usecontext.asp" },
      { label: "React useRef", href: "react_useref.asp" },
      { label: "React useReducer", href: "react_usereducer.asp" },
      { label: "React useCallback", href: "react_usecallback.asp" },
      { label: "React useMemo", href: "react_usememo.asp" },
      { label: "React Custom Hooks", href: "react_custom_hooks.asp" },
    ],
  },
];

// Content for each tutorial page
export const tutorialContent: Record<string, TopicContent> = {
      "react_home.asp": {
    title: "React Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Learn React
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>React</strong> is a JavaScript library for building user interfaces.
        </p>
        <p className="leading-relaxed mb-4">
          React is used to build single-page applications.
        </p>
        <p className="leading-relaxed mb-4">
          React allows us to create reusable UI components.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx</p>
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">import</span> {'{'} <span className="text-red-600 dark:text-red-400">createRoot</span> {'}'} <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'react-dom/client'</span>;
            <br/>
            <span className="text-blue-600 dark:text-blue-400">function</span> <span className="text-yellow-600 dark:text-yellow-400">Hello</span>() {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>Hello World!<span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">createRoot</span>(document.<span className="text-purple-600 dark:text-purple-400">getElementById</span>(<span className="text-green-600 dark:text-green-400">'root'</span>)).<span className="text-red-600 dark:text-red-400">render</span>(
            <br />
            &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;Hello /&gt;</span>
            <br />
            );
          </pre>
        </div>
      </>
    ),
  },

 "react_intro.asp": {
    title: "React Introduction",
    content: (
      <>
        <h3 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
          What is React?
        </h3>
        <p className="leading-relaxed mb-2">
          React is a front-end JavaScript library.
        </p>
        <p className="leading-relaxed mb-2">
          React was developed by the Facebook Software Engineer Jordan Walke.
        </p>
        <p className="leading-relaxed mb-2">
          React is also known as React.js or ReactJS.
        </p>
        <p className="leading-relaxed mb-4">
          React is a tool for building UI components.
        </p>

        <h3 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
          How does React Work?
        </h3>
        <p className="leading-relaxed mb-4 font-bold text-lg text-purple-700 dark:text-purple-300">
          React creates a VIRTUAL DOM in memory.
        </p>
        <p className="leading-relaxed mb-4">
          Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
        </p>
        <p className="leading-relaxed mb-4 font-bold text-lg text-purple-700 dark:text-purple-300">
          React only changes what needs to be changed!
        </p>
        <p className="leading-relaxed mb-4">
          React finds out what changes have been made, and changes only what needs to be changed.
        </p>
        <p className="leading-relaxed mb-4">
          You will learn the various aspects of how React does this in the rest of this tutorial.
        </p>

        <h3 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
          What You Should Already Know
        </h3>
        <p className="leading-relaxed mb-2">
          Before you continue you should have a basic understanding of the following:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-1">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        

        <h3 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
          React.JS History
        </h3>
        <p className="leading-relaxed mb-2">
          Latest version of React.JS is 19.0.0 (December 2024).
        </p>
        <p className="leading-relaxed mb-2">
          Initial release to the Public (version 0.3.0) was in **July 2013**.
        </p>
        <p className="leading-relaxed mb-2">
          React.JS was first used in 2011 for Facebook's Newsfeed feature.
        </p>
        <p className="leading-relaxed mb-4">
          Facebook Software Engineer, Jordan Walke, created it.
        </p>
      </>
    ),
  },
  "react_get_started.asp": {
    title: "React Getting Started",
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
          React Getting Started
        </h2>
        <p className="leading-relaxed mb-4">
          To use React in production, you need **npm** which is included with **Node.js**. Also, you need to set up a React Environment and choose a build tool.
        </p>

        {/* Setting up a React Environment */}
        <h3 className="text-xl font-medium mb-3 mt-8">
          Setting up a React Environment
        </h3>
        <p className="leading-relaxed mb-2">
          First, make sure you have **Node.js** installed. You can check by running this in your terminal:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-white mb-4">
          <code className="font-mono">node -v</code>
        </div>
        <p className="leading-relaxed mb-2">
          If Node.js is installed, you will get a result with the version number:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-green-400 mb-4">
          <code className="font-mono">v22.15.0</code>
        </div>
        <p className="leading-relaxed mb-4">
          If not, you will need to install Node.js.
        </p>

        {/* Install a Build Tool (Vite) */}
        <h3 className="text-xl font-medium mb-3 mt-8">
          Install a Build Tool (Vite)
        </h3>
        <p className="leading-relaxed mb-2">
          When you have Node.js installed, you can start creating a React application by choosing a build tool.
        </p>
        <p className="leading-relaxed mb-2">
          We will use the **Vite** build tool in this tutorial.
        </p>
        <p className="leading-relaxed mb-2">
          Run this command to create a React application named `my-react-app`:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-white mb-4">
          <code className="font-mono">
            npm create vite@latest my-react-app -- --template react
          </code>
        </div>
        <p className="leading-relaxed mb-2">
          If you get this message, just press **y** and press **Enter** to continue:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-gray-300 mb-4">
          <pre className="font-mono whitespace-pre-wrap break-words">
            Need to install the following packages:
            create-vite@6.5.0
            Ok to proceed? (y)
          </pre>
        </div>
        <p className="leading-relaxed mb-2">
          If the creation was a success, you will get a result like this:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-green-400 mb-4">
          <pre className="font-mono whitespace-pre-wrap break-words">
            &gt; npx
            &gt; create-vite my-react-app --template react

            o Scaffolding project in C:\Users\stale\my-react-app...
            
            — Done. Now run:

              cd my-react-app
              npm install
              npm run dev
          </pre>
        </div>

        {/* Install Dependencies */}
        <h3 className="text-xl font-medium mb-3 mt-8">
          Install Dependencies
        </h3>
        <p className="leading-relaxed mb-2">
          As the result above suggests, navigate to your new React application directory:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-white mb-4">
          <code className="font-mono">cd my-react-app</code>
        </div>
        <p className="leading-relaxed mb-2">
          And run this command to install dependencies:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-white mb-4">
          <code className="font-mono">npm install</code>
        </div>
        <p className="leading-relaxed mb-2">
          Which will result in this:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-gray-300 mb-4">
          <pre className="font-mono whitespace-pre-wrap break-words">
            added 154 packages, and audited 155 packages in 8s

            33 packages are looking for funding
              run `npm fund` for details

            found 0 vulnerabilities
          </pre>
        </div>

        {/* Run the React Application */}
        <h3 className="text-xl font-medium mb-3 mt-8">
          Run the React Application
        </h3>
        <p className="leading-relaxed mb-2">
          Now you are ready to run your first **real** React application!
        </p>
        <p className="leading-relaxed mb-2">
          Run this command to run the React application `my-react-app`:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-white mb-4">
          <code className="font-mono">npm run dev</code>
        </div>
        <p className="leading-relaxed mb-2">
          Which will result in this:
        </p>
        <div className="bg-gray-800 p-3 rounded-lg text-yellow-400 mb-4">
          <pre className="font-mono whitespace-pre-wrap break-words">
            VITE v6.3.5 ready in 217 ms

            ➜ Local: http://localhost:5173/
            ➜ Network: use --host to expose
            ➜ press h + enter to show help
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          A new browser window will pop up with your newly created React App! If not, open your browser and type `localhost:5173` in the address bar.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">The result:</h3>
        <div className="flex justify-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#111827]">
          {/* Image of the running app */}
          <img
            src="https://www.w3schools.com/react/screenshot_react1.png"
            alt="Default Vite and React running application on localhost:5173"
            className="rounded-lg max-w-full h-auto"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src='uploaded:image_30b7a3.png-6f54cc65-497e-43ee-979a-7a6f10fb0341'; }}
          />
        </div>
      </>
    ),
  },
  "react_first_app.asp": {
    title: "Your First React App",
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
          Your First React App
        </h2>
        <p className="leading-relaxed mb-4">
          Now that your development environment is set up, let's try to modify the default app to display **"Hello, World!"**.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">
          Modify the React App
        </h3>
        <p className="leading-relaxed mb-2">
          Look in the `my-react-app` directory, and you will find a `src` folder. Inside the `src` folder there is a file called `App.jsx`. Open it, and it will look like this:
        </p>

        <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-4 mb-2">
          Example: Default `App.jsx`
        </h4>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">App.jsx</p>
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">import</span> {'{'} <span className="text-red-600 dark:text-red-400">useState</span> {'}'} <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'react'</span>
            <span className="text-blue-600 dark:text-blue-400">import</span> <span className="text-yellow-600 dark:text-yellow-400">reactLogo</span> <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'./assets/react.svg'</span>
            <span className="text-blue-600 dark:text-blue-400">import</span> <span className="text-yellow-600 dark:text-yellow-400">viteLogo</span> <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'/vite.svg'</span>
            <span className="text-blue-600 dark:text-blue-400">import</span> <span className="text-green-600 dark:text-green-400">'./App.css'</span>

            <span className="text-blue-600 dark:text-blue-400">function</span> <span className="text-yellow-600 dark:text-yellow-400">App</span>() {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> [count, setCount] = <span className="text-red-600 dark:text-red-400">useState</span>(0)
            <br />
            &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;div&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;a</span> href=<span className="text-green-600 dark:text-green-400">"https://vitejs.dev"</span> target=<span className="text-green-600 dark:text-green-400">"_blank"</span><span className="text-purple-600 dark:text-purple-400">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;img</span> src={'{}'} className=<span className="text-green-600 dark:text-green-400">"logo"</span> alt=<span className="text-green-600 dark:text-green-400">"Vite logo"</span> <span className="text-purple-600 dark:text-purple-400">/&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/a&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;a</span> href=<span className="text-green-600 dark:text-green-400">"https://react.dev"</span> target=<span className="text-green-600 dark:text-green-400">"_blank"</span><span className="text-purple-600 dark:text-purple-400">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;img</span> src={'{}'} className=<span className="text-green-600 dark:text-green-400">"logo react"</span> alt=<span className="text-green-600 dark:text-green-400">"React logo"</span> <span className="text-purple-600 dark:text-purple-400">/&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/a&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/div&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>Vite + React<span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;div</span> className=<span className="text-green-600 dark:text-green-400">"card"</span><span className="text-purple-600 dark:text-purple-400">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;button</span> onClick={'{}'}<span className="text-purple-600 dark:text-purple-400">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count is {'{}'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/button&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit <span className="text-red-600 dark:text-red-400">&lt;code&gt;</span>src/App.jsx<span className="text-red-600 dark:text-red-400">&lt;/code&gt;</span> and save to test HMR
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/div&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p</span> className=<span className="text-green-600 dark:text-green-400">"read-the-docs"</span><span className="text-purple-600 dark:text-purple-400">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click on the Vite and React logos to learn more
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/&gt;</span>
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            <span className="text-blue-600 dark:text-blue-400">export default</span> App
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          Try replacing the **entire file content** with the code below and save the file.
        </p>

        <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-4 mb-2">
          Example: Modified `App.jsx`
        </h4>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">App.jsx</p>
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">function</span> <span className="text-yellow-600 dark:text-yellow-400">App</span>() {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;div</span> className=<span className="text-green-600 dark:text-green-400">"App"</span><span className="text-purple-600 dark:text-purple-400">&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>Hello World!<span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/div&gt;</span>
            <br />
            &nbsp;&nbsp;);
            <br />
            {'}'}
            <br />
            <span className="text-blue-600 dark:text-blue-400">export default</span> App;
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          See the changes in the browser when you click Save.
        </p>
        <p className="leading-relaxed mb-4">
          Notice that the changes are visible immediately after you save the file, you do not have to reload the browser! This is thanks to **Hot Module Replacement (HMR)**.
        </p>
        
        <h3 className="text-xl font-medium mb-3 mt-8">The result:</h3>
        <div className="flex justify-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#111827]">
          {/* Image of the resulting app showing only "Hello World" */}
          <img
            src="https://www.w3schools.com/react/react_helloworld.png"
            alt="React application showing only the text Hello World"
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        <p className="leading-relaxed mb-4 mt-8 text-xl font-bold text-green-700 dark:text-green-400">
          Congratulations! You've just modified your first React application.
        </p>
      </>
    ),
  },
 "react_render_html.asp": {
    title: "React Render HTML",
    content: (
      <>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
          React Render HTML
        </h2>
        <p className="leading-relaxed mb-4">
          React's main goal is to render HTML content into a web page. It does this using a container element and the **`createRoot()`** function.
        </p>

        {/* The Container */}
        <h3 className="text-xl font-medium mb-3 mt-8">
          The Container
        </h3>
        <p className="leading-relaxed mb-4">
          React renders HTML into a specific container element on the page. Typically, this container is defined in your `index.html` file as a `&lt;div id="root"&gt;&lt;/div&gt;`.
        </p>

   <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-4 mb-2">
  Example: Simplified `index.html`
</h4>

<div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
  <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">index.html</p>

  <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

    <span className="text-gray-500 dark:text-gray-400">&lt;!doctype html&gt;</span>
    <br />

    <span className="text-purple-600 dark:text-purple-400">&lt;html</span>
    <span className="text-red-600 dark:text-red-400"> lang</span>=
    <span className="text-green-600 dark:text-green-400">"en"</span>
    <span className="text-purple-600 dark:text-purple-400">&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;head&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;meta</span>
    <span className="text-red-600 dark:text-red-400"> charset</span>=
    <span className="text-green-600 dark:text-green-400">"UTF-8"</span>
    <span className="text-purple-600 dark:text-purple-400"> /&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;link</span>
    <span className="text-red-600 dark:text-red-400"> rel</span>=
    <span className="text-green-600 dark:text-green-400">"icon"</span>
    <span className="text-red-600 dark:text-red-400"> type</span>=
    <span className="text-green-600 dark:text-green-400">"image/svg+xml"</span>
    <span className="text-red-600 dark:text-red-400"> href</span>=
    <span className="text-green-600 dark:text-green-400">"/vite.svg"</span>
    <span className="text-purple-600 dark:text-purple-400"> /&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;meta</span>
    <span className="text-red-600 dark:text-red-400"> name</span>=
    <span className="text-green-600 dark:text-green-400">"viewport"</span>
    <span className="text-red-600 dark:text-red-400"> content</span>=
    <span className="text-green-600 dark:text-green-400">"width=device-width, initial-scale=1.0"</span>
    <span className="text-purple-600 dark:text-purple-400"> /&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;title&gt;</span>
    Vite + React
    <span className="text-purple-600 dark:text-purple-400">&lt;/title&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/head&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;body&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;div</span>
    <span className="text-red-600 dark:text-red-400"> id</span>=
    <span className="text-green-600 dark:text-green-400">"root"</span>
    <span className="text-purple-600 dark:text-purple-400">&gt;&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;script</span>
    <span className="text-red-600 dark:text-red-400"> type</span>=
    <span className="text-green-600 dark:text-green-400">"module"</span>
    <span className="text-red-600 dark:text-red-400"> src</span>=
    <span className="text-green-600 dark:text-green-400">"/src/main.jsx"</span>
    <span className="text-purple-600 dark:text-purple-400">&gt;&lt;/script&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/body&gt;</span>
    <br />

    <span className="text-purple-600 dark:text-purple-400">&lt;/html&gt;</span>

  </pre>
</div>

        <p className="leading-relaxed mb-2">
          To simplify, we can remove the extra content to concentrate on what's important:
        </p>

        <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-4 mb-2">
          Example: Simplified `index.html`
        </h4>
      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
  <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">index.html (Simplified)</p>

  <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

    <span className="text-gray-500 dark:text-gray-400">&lt;!doctype html&gt;</span>
    <br />

    <span className="text-purple-600 dark:text-purple-400">&lt;html</span>
    <span className="text-red-600 dark:text-red-400"> lang</span>=
    <span className="text-green-600 dark:text-green-400">"en"</span>
    <span className="text-purple-600 dark:text-purple-400">&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;body&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;div</span>
    <span className="text-red-600 dark:text-red-400"> id</span>=
    <span className="text-green-600 dark:text-green-400">"root"</span>
    <span className="text-purple-600 dark:text-purple-400">&gt;&lt;/div&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;script</span>
    <span className="text-red-600 dark:text-red-400"> type</span>=
    <span className="text-green-600 dark:text-green-400">"module"</span>
    <span className="text-red-600 dark:text-red-400"> src</span>=
    <span className="text-green-600 dark:text-green-400">"/src/main.jsx"</span>
    <span className="text-purple-600 dark:text-purple-400">&gt;&lt;/script&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/body&gt;</span>
    <br />

    <span className="text-purple-600 dark:text-purple-400">&lt;/html&gt;</span>

  </pre>
</div>

        <p className="leading-relaxed mb-4">
          This stripped-down version allows us to focus on the essential part: the **`&lt;div id="root"&gt;`** element, which is the entry point for React.
        </p>

        {/* The createRoot Function */}
        <h3 className="text-xl font-medium mb-3 mt-8">
          The `createRoot` Function
        </h3>
        <p className="leading-relaxed mb-4">
          The **`createRoot`** function is located in the `main.jsx` file inside the `src` folder. It's a built-in function from `react-dom/client` used to create a **root node** for your React application.
        </p>

        <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-4 mb-2">
          Example: Default `src/main.jsx`
        </h4>
 <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
  <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx (Default)</p>

  <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

    <span className="text-blue-600 dark:text-blue-400">import</span> {'{'} 
    <span className="text-red-600 dark:text-red-400">StrictMode</span> {'}'} 
    <span className="text-blue-600 dark:text-blue-400"> from </span>
    <span className="text-green-600 dark:text-green-400">'react'</span>
    <br />

    <span className="text-blue-600 dark:text-blue-400">import</span> {'{'} 
    <span className="text-red-600 dark:text-red-400">createRoot</span> {'}'} 
    <span className="text-blue-600 dark:text-blue-400"> from </span>
    <span className="text-green-600 dark:text-green-400">'react-dom/client'</span>
    <br />

    <span className="text-blue-600 dark:text-blue-400">import</span> 
    <span className="text-green-600 dark:text-green-400">'./index.css'</span>
    <br />

    <span className="text-blue-600 dark:text-blue-400">import</span> 
    <span className="text-yellow-600 dark:text-yellow-400"> App </span>
    <span className="text-blue-600 dark:text-blue-400"> from </span>
    <span className="text-green-600 dark:text-green-400">'./App.jsx'</span>
    <br />
    <br />

    <span className="text-red-600 dark:text-red-400">createRoot</span>(
    document.<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
    <span className="text-green-600 dark:text-green-400">'root'</span>
    )).<span className="text-red-600 dark:text-red-400">render</span>(
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;StrictMode&gt;</span>
    <br />

    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;App /&gt;</span>
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/StrictMode&gt;</span>
    <br />

    )
  </pre>
</div>

        <p className="leading-relaxed mb-4">
          The `createRoot()` function takes one argument: the HTML element (our **`&lt;div id="root"&gt;`**) where the React component tree will be mounted.
        </p>
        <p className="leading-relaxed mb-2">
          If we simplify `main.jsx` and display raw HTML/JSX:
        </p>

        <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-4 mb-2">
          Example: Simple `createRoot` usage
        </h4>
    <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
  <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx (Simple)</p>

  <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

    <span className="text-blue-600 dark:text-blue-400">import</span> {'{'}
    <span className="text-red-600 dark:text-red-400">createRoot</span> {'}'}
    <span className="text-blue-600 dark:text-blue-400"> from </span>
    <span className="text-green-600 dark:text-green-400">'react-dom/client'</span>
    <br />
    <br />

    <span className="text-red-600 dark:text-red-400">createRoot</span>(
    document.<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
    <span className="text-green-600 dark:text-green-400">'root'</span>
    )).<span className="text-red-600 dark:text-red-400">render</span>(
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>
    Hello React!
    <span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>
    <br />

    )
  </pre>
</div>

        <h3 className="text-xl font-medium mb-3 mt-8">The result:</h3>
        <div className="flex justify-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#111827]">
          <img
            src="https://www.w3schools.com/react/react_helloreact.png"
            alt="React application showing only the text Hello React!"
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        {/* The render Method */}
        <h3 className="text-xl font-medium mb-3 mt-8">
          The `render` Method
        </h3>
        <p className="leading-relaxed mb-4">
          The `.render()`method is called on the root object returned by `createRoot()`. The `render` method defines **what** to display inside the HTML container element (`&lt;div id="root"&gt;`).
        </p>

        <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-4 mb-2">
          Example: Displaying a Paragraph
        </h4>
       <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
  <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx</p>

  <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

    <span className="text-blue-600 dark:text-blue-400">import</span> {'{'}
    <span className="text-red-600 dark:text-red-400">createRoot</span> {'}'}
    <span className="text-blue-600 dark:text-blue-400"> from </span>
    <span className="text-green-600 dark:text-green-400">'react-dom/client'</span>
    <br />
    <br />

    <span className="text-red-600 dark:text-red-400">createRoot</span>(
    document.<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
    <span className="text-green-600 dark:text-green-400">'root'</span>
    )).<span className="text-red-600 dark:text-red-400">render</span>(
    <br />

    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p&gt;</span>
    Welcome!
    <span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
    <br />

    )
  </pre>
</div>

          
        <h3 className="text-xl font-medium mb-3 mt-8">The result:</h3>
        <div className="flex justify-center p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#111827]">
          <img
            src="https://www.w3schools.com/react/react_welcome.png"
            alt="React application showing the text Welcome!"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </>
    ),
  },
  "react_upgrade.asp": {
    title: "React Upgrade",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        Upgrade to React 19
      </h2>

      <p className="leading-relaxed mb-4">
        Upgrading an existing React application to version 19 only requires two steps.
        If you are already using the latest version of React, you can skip this section.
      </p>

      <h4 className="font-semibold text-md text-purple-700 dark:text-purple-300 mt-3 mb-2">
        Step 1: Install React 19
      </h4>

      <p className="leading-relaxed mb-4">
        To install the latest version, run the following command inside your project folder:
      </p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
          npm i react@latest react-dom@latest
        </pre>
      </div>

      <h4 className="font-semibold text-md text-purple-700 dark:text-purple-300 mt-3 mb-2">
        Step 2: Use the New Root API
      </h4>

      <p className="leading-relaxed mb-4">
        To take advantage of React 19’s concurrent features, use the new root API for client rendering.
      </p>

      <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Before</p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

          <span className="text-blue-600 dark:text-blue-400">import</span> ReactDOM{" "}
          <span className="text-blue-600 dark:text-blue-400">from</span>{" "}
          <span className="text-green-600 dark:text-green-400">'react-dom'</span>
          <br /><br />

          ReactDOM.<span className="text-red-600 dark:text-red-400">render</span>(
          <br />
          &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>
          Hello React!
          <span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>,
          <br />
          &nbsp;&nbsp;document.<span className="text-purple-600 dark:text-purple-400">
            getElementById
          </span>(
          <span className="text-green-600 dark:text-green-400">'root'</span>)
          <br />
          );
        </pre>
      </div>

      <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">After</p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

          <span className="text-blue-600 dark:text-blue-400">import</span> {"{ "}
          <span className="text-red-600 dark:text-red-400">createRoot</span>{" "}
          {" } "}
          <span className="text-blue-600 dark:text-blue-400">from</span>{" "}
          <span className="text-green-600 dark:text-green-400">'react-dom/client'</span>
          <br /><br />

          <span className="text-red-600 dark:text-red-400">createRoot</span>(
          document.<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
          <span className="text-green-600 dark:text-green-400">'root'</span>
          )).<span className="text-red-600 dark:text-red-400">render</span>(
          <br />
          &nbsp;&nbsp;
          <span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>
          Hello React!
          <span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>
          <br />
          );
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        Your application will still work without the new root API, but it will behave like React 17.
      </p>
    </>
  ),
},
"react_jsx_intro.asp": {
  title: "React JSX",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React JSX
      </h2>

      <p className="leading-relaxed mb-4">
        JSX stands for <strong>JavaScript XML</strong>. JSX allows us to write HTML in React and makes it easier to create UI elements.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Coding JSX</h3>

      <p className="leading-relaxed mb-4">
        JSX lets you write HTML elements directly inside JavaScript without using <code>createElement()</code> or <code>appendChild()</code>.
      </p>

      <p className="leading-relaxed mb-4">
        JSX converts HTML tags into React elements. You don’t have to use JSX, but it makes React code cleaner and easier to write.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-4 mb-2">
        Example 1: JSX
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 text-black dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement ={" "}
          <span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>
          I Love JSX!
          <span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>;
          <br /><br />

          <span className="text-red-600 dark:text-red-400">createRoot</span>(document.
          <span className="text-purple-600 dark:text-purple-400">getElementById</span>(
          <span className="text-green-600 dark:text-green-400">'root'</span>
          )).render(myElement);
        </pre>
      </div>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-6 mb-2">
        Example 2: Without JSX
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border text-black dark:text-gray-200 border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement =
          React.<span className="text-red-600 dark:text-red-400">createElement</span>(
          <span className="text-green-600 dark:text-green-400">'h1'</span>,
          {" {}"},
          <span className="text-green-600 dark:text-green-400">'I do not use JSX!'</span>
          );
          <br /><br />

          <span className="text-red-600 dark:text-red-400">createRoot</span>(document.
          <span className="text-purple-600 dark:text-purple-400">getElementById</span>(
          <span className="text-green-600 dark:text-green-400">'root'</span>
          )).render(myElement);
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        JSX is essentially JavaScript with HTML-like syntax, translated into normal JavaScript at runtime.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Expressions in JSX</h3>

      <p className="leading-relaxed mb-4">
        You can insert JavaScript expressions inside JSX using <strong>{`{ }`}</strong>.
      </p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 text-black dark:text-gray-200border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement ={" "}
          <span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>
          React is {"{"}5 + 5{"}"} times better with JSX
          <span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>;
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Inserting a Large Block of HTML</h3>

      <p className="leading-relaxed mb-4">
        Wrap multi-line JSX inside parentheses:
      </p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] p-3  text-black dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement = (
          <br />
          &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;ul&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;li&gt;</span>
          Apples<span className="text-purple-600 dark:text-purple-400">&lt;/li&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;li&gt;</span>
          Bananas<span className="text-purple-600 dark:text-purple-400">&lt;/li&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;li&gt;</span>
          Cherries<span className="text-purple-600 dark:text-purple-400">&lt;/li&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/ul&gt;</span>
          <br />
          );
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">One Top Level Element</h3>

      <p className="leading-relaxed mb-4">
        JSX must return a single top-level element.
      </p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 text-black dark:text-gray-200  border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement = (
          <br />
          &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;div&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p&gt;</span>
          I am a paragraph.<span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p&gt;</span>
          I am a paragraph too.<span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;/div&gt;</span>
          <br />
          );
        </pre>
      </div>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mt-6 mb-2">
        Using Fragments
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827]  text-black dark:text-gray-200 p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement = (
          <br />
          &nbsp;&nbsp;&lt;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p&gt;</span>
          I am a paragraph.<span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p&gt;</span>
          I am a paragraph too.<span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
          <br />
          &nbsp;&nbsp;&lt;/&gt;
          <br />
          );
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Elements Must Be Closed</h3>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827]  text-black dark:text-gray-200 p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement =
          <span className="text-purple-600 dark:text-purple-400">&lt;input</span>{" "}
          type=<span className="text-green-600 dark:text-green-400">"text"</span>{" "}
          <span className="text-purple-600 dark:text-purple-400">/&gt;</span>;
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">class → className</h3>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 text-black dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement =
          <span className="text-purple-600 dark:text-purple-400">
            &lt;h1 className=
          </span>
          <span className="text-green-600 dark:text-green-400">"myclass"</span>
          <span className="text-purple-600 dark:text-purple-400">&gt;</span>
          Hello World
          <span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>;
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Comments in JSX</h3>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] text-black dark:text-gray-200 p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap">

          <span className="text-blue-600 dark:text-blue-400">const</span> myElement =
          <span className="text-purple-600 dark:text-purple-400">&lt;h1&gt;</span>
          Hello {"{/* Wonderful */}"} World
          <span className="text-purple-600 dark:text-purple-400">&lt;/h1&gt;</span>;
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">JSX Inside Components</h3>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827]  text-black dark:text-gray-200 p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap">

          <span className="text-blue-600 dark:text-blue-400">function</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-400">Car</span>() {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;h2&gt;</span>
          My Car<span className="text-purple-600 dark:text-purple-400">&lt;/h2&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p&gt;</span>
          It is a Ford Mustang.<span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
          <br />
          &nbsp;&nbsp;);
          <br />
          {"}"}
          <br /><br />

          <span className="text-red-600 dark:text-red-400">createRoot</span>(document.
          <span className="text-purple-600 dark:text-purple-400">getElementById</span>(
          <span className="text-green-600 dark:text-green-400">'root'</span>
          )).render(
          <span className="text-purple-600 dark:text-purple-400">&lt;Car /&gt;</span>
          );
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">JSX With Variables</h3>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-10 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827]  text-black dark:text-gray-200 p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap">

          <span className="text-blue-600 dark:text-blue-400">function</span>{" "}
          <span className="text-yellow-600 dark:text-yellow-400">Car</span>() {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> brand =
          <span className="text-green-600 dark:text-green-400">"Ford"</span>;
          <br />
          &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> model =
          <span className="text-green-600 dark:text-green-400">"Mustang"</span>;
          <br /><br />

          &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;h2&gt;</span>
          My Car<span className="text-purple-600 dark:text-purple-400">&lt;/h2&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">&lt;p&gt;</span>
          It is a {"{"}brand{"}"} {"{"}model{"}"}.
          <span className="text-purple-600 dark:text-purple-400">&lt;/p&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
          <br />
          &nbsp;&nbsp;);
          <br />
          {"}"}
          <br /><br />

          <span className="text-red-600 dark:text-red-400">createRoot</span>(document.
          <span className="text-purple-600 dark:text-purple-400">getElementById</span>(
          <span className="text-green-600 dark:text-green-400">'root'</span>
          )).render(
          <span className="text-purple-600 dark:text-purple-400">&lt;Car /&gt;</span>
          );
        </pre>
      </div>
    </>
  ),
},
"react_jsx_expressions.asp": {
  title: "React JSX Expressions",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React JSX Expressions
      </h2>

      <p className="leading-relaxed mb-4">
        One of the most powerful features of JSX is the ability to embed JavaScript expressions directly inside your markup.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Expressions</h3>

      <p className="leading-relaxed mb-4">
        You can insert any valid JavaScript expression inside JSX using <strong>{`{ }`}</strong>. 
        React will evaluate the expression and display the result.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Execute the expression <code>218 * 1.36</code>
      </h4>

      {/* ---------------------- EXAMPLE 1 ---------------------- */}
      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My car&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;It has {"{"}218 * 1.36{"}"} horsepower&lt;/p&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>

      {/* ---------------------- VARIABLES ---------------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">Variables</h3>

      <p className="leading-relaxed mb-4">
        Variables work the same way. Insert them using <strong>{`{ }`}</strong>.
      </p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> hp = 218 * 1.36;
  <br /><br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My car&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;It has {"{"}hp{"}"} horsepower&lt;/p&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>

      {/* ---------------------- FUNCTION CALLS ---------------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">Function Calls</h3>

      <p className="leading-relaxed mb-4">
        You can also call functions inside JSX expressions.
      </p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> kwtohp(kw) {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> kw * 1.36;
  <br />
{"}"}
<br /><br />

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My car&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;It has {"{"}kwtohp(218){"}"} horsepower&lt;/p&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>

      {/* ---------------------- OBJECT PROPERTIES ---------------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">Object Properties</h3>

      <p className="leading-relaxed mb-4">
        You can access object properties directly inside JSX.
      </p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-10 text-sm">
        <p className="mb-2 font-mono text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> myobj = {"{"}
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-green-600 dark:text-green-400">"Fiat"</span>,
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;model: <span className="text-green-600 dark:text-green-400">"500"</span>,
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;color: <span className="text-green-600 dark:text-green-400">"white"</span>
  <br />
  &nbsp;&nbsp;{"}"};
  <br /><br />

  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My car is a {"{"}myobj.color{"}"} {"{"}myobj.name{"}"} {"{"}myobj.model{"}"}
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>
    </>
  ),
},
"react_jsx_attributes.asp": {
  title: "React JSX Attributes",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React JSX Attributes
      </h2>

      <p className="leading-relaxed mb-4">
        JSX allows you to add attributes to elements just like HTML, but with a few important differences.
      </p>

      {/* --------------------------------- className --------------------------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">class → className</h3>

      <p className="leading-relaxed mb-4">
        In JSX, you cannot use the <code>class</code> attribute because <code>class</code> is a reserved JavaScript keyword.
        Instead, React uses <strong>className</strong>.  
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Using className
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">main.jsx</p>
        
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words 
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 className=<span className="text-green-600 dark:text-green-400">"myclass"</span>&gt;
  Hello World
  &lt;/h1&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>

      {/* --------------------------------- Expressions as Attributes --------------------------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">Expressions as Attributes</h3>

      <p className="leading-relaxed mb-4">
        You can use JavaScript expressions as attribute values by wrapping them in <strong>{`{ }`}</strong>.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Using variables inside attributes
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words 
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> x = <span className="text-green-600 dark:text-green-400">"myclass"</span>;
  <br /><br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 className={"{"}x{"}"}&gt;Hello World&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>

      {/* --------------------------------- camelCase Events --------------------------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">camelCase Event Attributes</h3>

      <p className="leading-relaxed mb-4">
        Event attributes in JSX must be written in <strong>camelCase</strong>, not lowercase like HTML.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: onClick event in JSX
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words 
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> myfunc = () =&gt; {"{"}
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;alert(<span className="text-green-600 dark:text-green-400">'Hello World'</span>);
  <br />
  &nbsp;&nbsp;{"}"};
  <br /><br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={"{"}myfunc{"}"}&gt;Click me&lt;/button&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>

      {/* --------------------------------- Boolean Attributes --------------------------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">Boolean Attributes</h3>

      <p className="leading-relaxed mb-4">
        In JSX, boolean attributes work differently.  
        If no value is given, React treats it as <strong>true</strong>.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Examples: Boolean attributes in JSX
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words 
        text-black dark:text-gray-200">

&lt;button disabled&gt;Click me&lt;/button&gt;
<br /><br />
&lt;button disabled={"{"}true{"}"}&gt;Click me&lt;/button&gt;
<br /><br />
&lt;button disabled={"{"}false{"}"}&gt;Click me&lt;/button&gt;

        </pre>
      </div>

      {/* --------------------------------- style Attribute --------------------------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">The style Attribute</h3>

      <p className="leading-relaxed mb-4">
        JSX does not accept CSS strings in the <code>style</code> attribute.  
        Instead, it requires a <strong>JavaScript object</strong> with camelCased CSS property names.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Using the style attribute
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-10 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words 
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> mystyles = {"{"}
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;color: <span className="text-green-600 dark:text-green-400">"red"</span>,
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;fontSize: <span className="text-green-600 dark:text-green-400">"20px"</span>,
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: <span className="text-green-600 dark:text-green-400">"lightyellow"</span>,
  <br />
  &nbsp;&nbsp;{"}"}; 
  <br /><br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 style={"{"}mystyles{"}"}&gt;My car&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>
    </>
  ),
},
"react_jsx_if_statements.asp": {
  title: "React JSX If Statements",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React JSX If Statements
      </h2>

      <p className="leading-relaxed mb-4">
        React supports conditional rendering, but <strong>if statements cannot be used directly inside JSX</strong>. 
        To handle conditions, you can use if statements outside the JSX or ternary expressions inside JSX.
      </p>

      {/* ------------------------------ Option 1: If Statement Outside JSX ------------------------------ */}
      <h3 className="text-xl font-medium mb-3 mt-6">Option 1: If Statements Outside JSX</h3>

      <p className="leading-relaxed mb-4">
        You can write your <code>if</code> statements before returning JSX.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Display "Banana" if x &lt; 10, otherwise "Apple"
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words 
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Fruit() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> x = <span className="text-green-600 dark:text-green-400">5</span>;
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">let</span> y = <span className="text-green-600 dark:text-green-400">"Apple"</span>;
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">if</span> (x &lt; <span className="text-green-600 dark:text-green-400">10</span>) {"{"}
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;y = <span className="text-green-600 dark:text-green-400">"Banana"</span>;
  <br />
  &nbsp;&nbsp;{"}"}
  <br /><br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;{"{"}y{"}"}&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>

      {/* ------------------------------ Option 2: Ternary Expression ------------------------------ */}
      <h3 className="text-xl font-medium mb-3 mt-6">Option 2: Ternary Expressions Inside JSX</h3>

      <p className="leading-relaxed mb-4">
        You can use a ternary operator directly in JSX to handle conditional rendering.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Display "Banana" if x &lt; 10, otherwise "Apple"
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-10 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">main.jsx</p>

        <pre className="font-mono bg-white dark:bg-[#111827] p-3 
        border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words 
        text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Fruit() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> x = <span className="text-green-600 dark:text-green-400">5</span>;
  <br /><br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;{"{"}(x &lt; <span className="text-green-600 dark:text-green-400">10</span>) ? "Banana" : "Apple"{"}"}&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

        </pre>
      </div>
    </>
  ),
},
"react_props.asp": {
  title: "React Props",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Props 
      </h2>

      <p className="leading-relaxed mb-4">
        **Props** (short for **properties**) are arguments passed into React components. They are the mechanism for passing data from a parent component to a child component, functioning similarly to function arguments in JavaScript or attributes in HTML. To send props, you use the same syntax as HTML attributes when rendering the component.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Sending and Receiving Basic Props</h3>
      <p className="leading-relaxed mb-4">
        When a component is rendered with an attribute, that attribute is received inside the component as a property on a single object, typically named **<code>props</code>**. You can access the value using dot notation (e.g., <code>props.brand</code>). While <code>props</code> is the convention, you can name the argument anything you want (e.g., <code>myobj</code>).
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold  text-black dark:text-gray-200 mb-2">Example: Passing and using a single prop</p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(props) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a {"{"}props.brand{"}"}!&lt;/h2&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Car</span> <span className="text-red-600">brand</span>="Ford" /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Passing Multiple Properties</h3>
      <p className="leading-relaxed mb-4">
        You can pass as many attributes (properties) as needed to a component. All of them are collected and accessible as properties on the single <code>props</code> object.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold text-black dark:text-gray-200  mb-2">Example: Multiple props</p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(props) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a {"{"}props.color{"}"} {"{"}props.brand{"}"} {"{"}props.model{"}"}!&lt;/h2&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Car</span> <span className="text-red-600">brand</span>="Ford" <span className="text-red-600">model</span>="Mustang" <span className="text-red-600">color</span>="red" /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Different Data Types for Props</h3>
      <p className="leading-relaxed mb-4">
        React props can handle any JavaScript data type, including **variables, numbers, strings, objects, and arrays**. While strings are passed inside quotes, non-string values like numbers, variables, objects, and arrays **must be enclosed in curly brackets <code>{"{}"}</code>** to be treated as JavaScript expressions rather than strings.
      </p>
      
      <p className="leading-relaxed mb-4">
        For **Object Props**, you access nested properties using standard dot notation (e.g., <code>props.carinfo.name</code>). For **Array Props**, you use array indices (e.g., <code>props.carinfo[0]</code>).
      </p>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold text-black dark:text-gray-200  mb-2">Example: Passing Object Props</p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(props) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;My {"{"}props.carinfo.name{"}"} {"{"}props.carinfo.model{"}"}!&lt;/h2&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;It is {"{"}props.carinfo.color{"}"} and it is from {"{"}props.carinfo.year{"}"}!&lt;/p&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            <span className="text-blue-600">const</span> carInfo = {"{"}<br />
            &nbsp;&nbsp;name: "Ford",<br />
            &nbsp;&nbsp;model: "Mustang",<br />
            &nbsp;&nbsp;color: "red",<br />
            &nbsp;&nbsp;year: 1969<br />
            {"}"};<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Car</span> <span className="text-red-600">carinfo</span>=&#123;carInfo&#125; /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Passing Props Between Components</h3>
      <p className="leading-relaxed mb-4">
        Props are the standard way to pass data down the component tree. A parent component passes data to its child component by setting attributes on the child's element.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold text-black dark:text-gray-200   mb-2">Example: Passing props from <code>Garage</code> (Parent) to <code>Car</code> (Child)</p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(props) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a {"{"}props.brand{"}"}!&lt;/h2&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            <span className="text-blue-600">function</span> <span className="text-red-600">Garage</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Who lives in my garage?&lt;/h1&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car <span className="text-red-600">brand</span>="Ford" /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Garage</span> /&gt;<br />
            );
          </code>
        </pre>
      </div>
    </>
  ),
},
"react_props_destructuring.asp": {
  title: "React Destructuring Props",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Destructuring Props 
      </h2>

      <p className="leading-relaxed mb-4">
        **Destructuring** is a convenient JavaScript feature that allows you to extract specific properties from the **<code>props</code>** object. This makes your component code cleaner and explicitly shows which properties are needed. You can apply destructuring in two main ways: directly in the function definition or inside the component body.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Destructuring in the Function Signature</h3>
      <p className="leading-relaxed mb-4">
        The most common way to use destructuring is to replace the <code>props</code> argument with a destructured object in the function definition. By enclosing the desired properties in curly braces, like **<code>{"{color}"}</code>**, the component only accesses those specific properties, even if more are passed to it.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold  text-black dark:text-gray-200  mb-2">Example: Destructuring <code>{"{color}"}</code> directly</p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(
              <span className="text-purple-600">{"{"}color{"}"}</span>
            ) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;My car is {"{"}color{"}"}!&lt;/h2&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Car</span> brand="Ford" model="Mustang" <span className="text-red-600">color</span>="red" year=&#123;1969&#125; /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Destructuring Inside the Component</h3>
      <p className="leading-relaxed mb-4">
        Alternatively, you can receive the full <code>props</code> object and then destructure the necessary properties inside the component body. This way, the component still receives all properties, but the destructuring line (e.g., **<code>const {"{brand, model}"} = props;</code>**) ensures only the required ones are used within the JSX.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold text-black dark:text-gray-200  mb-2">Example: Destructuring inside the function body</p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(props) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">const</span> {"{"}brand, model{"}"} = props;<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I love my {"{"}brand{"}"} {"{"}model{"}"}!&lt;/h2&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Car</span> <span className="text-red-600">brand</span>="Ford" <span className="text-red-600">model</span>="Mustang" color="red" year=&#123;1969&#125; /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Using the <code>...rest</code> Operator</h3>
      <p className="leading-relaxed mb-4">
        When using destructuring, the **<code>...rest</code>** operator allows you to specify a few properties you need and then collect all **remaining** properties into a new object. This is useful when a component needs to pass the unused properties down to a child component (e.g., applying unknown HTML attributes to a wrapper element).
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold text-black dark:text-gray-200   mb-2">Example: Using <code>...rest</code></p>
        <p className="mb-2 text-gray-700 dark:text-gray-400">
          The <code>rest</code> object here will contain: <code>{"{ model: \"Mustang\", year: 1969 }"}</code>.
        </p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(
              <span className="text-purple-600">{"{"}color, brand, ...rest{"}"}</span>
            ) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;My {"{"}brand{"}"} {"{"}rest.model{"}"} is {"{"}color{"}"}!&lt;/h2&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Car</span> <span className="text-red-600">brand</span>="Ford" <span className="text-red-600">model</span>="Mustang" <span className="text-red-600">color</span>="red" year=&#123;1969&#125; /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Setting Default Values</h3>
      <p className="leading-relaxed mb-4">
        Destructuring also enables you to set **default values** for props directly in the function signature. If a property is not passed to the component, the specified default value will be used instead. This adds robustness to your components.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold text-black dark:text-gray-200   mb-2">Example: Setting a default color to "blue"</p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(
              <span className="text-purple-600">{"{"}color = "blue", brand{"}"}</span>
            ) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;My {"{"}color{"}"} {"{"}brand{"}"}!&lt;/h2&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Car</span> <span className="text-red-600">brand</span>="Ford" /&gt; <span className="text-gray-500">// The color will be "blue"</span><br />
            );
          </code>
        </pre>
      </div>
    </>
  ),
},
"react_props_children.asp": {
  title: "React Props Children",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Props Children 👶
      </h2>

      <p className="leading-relaxed mb-4">
        In React, the term **<code>props.children</code>** refers to the content passed *between* the opening and closing tags of a component invocation. This mechanism is primarily used to create generic container components, layouts, or wrappers, allowing the parent component to fully control the nested elements without the child component needing to know what that content is in advance.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Accessing Nested Content</h3>
      <p className="leading-relaxed mb-4">
        Any HTML, text, or other React components placed inside a component's tags are automatically passed to that component as a special property named **<code>children</code>** within the standard <code>props</code> object. The child component renders this content by placing <code>{"{props.children}"}</code> in its JSX structure.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <p className="font-semibold text-black dark:text-gray-200 mb-2">Example: Using <code>props.children</code></p>
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">Son</span>(props) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div style=&#123;{"{"}background: 'lightgreen'{"}"}&#125;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Son&lt;/h2&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;{"{"}props.children{"}"}&lt;/div&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            <span className="text-blue-600">function</span> <span className="text-red-600">Daughter</span>(props) {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div style=&#123;{"{"}background: 'lightblue'{"}"}&#125;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Daughter&lt;/h2&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;{"{"}props.children{"}"}&lt;/div&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            <span className="text-blue-600">function</span> <span className="text-red-600">Parent</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;My two Children&lt;/h1&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Son&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was written in the Parent component,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;but displayed as a part of the Son component<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Son&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Daughter&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was written in the Parent component,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;but displayed as a part of the Daughter component<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Daughter&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            createRoot(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">Parent</span> /&gt;<br />
            );
          </code>
        </pre>
      </div>
    </>
  ),
},

"react_components.asp": {
  title: "React Components",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Components
      </h2>

      <p className="leading-relaxed mb-4">
        Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions but work in isolation and return HTML.
      </p>

      <p className="leading-relaxed mb-4">
        Components come in two types: <strong>Class components</strong> and <strong>Function components</strong>. In this tutorial, we will concentrate on Function components. 
        Class components are still supported, but Function components with Hooks are now recommended.
      </p>

      {/* ------------------------------ Create Your First Component ------------------------------ */}
      <h3 className="text-xl font-medium mb-3 mt-6">Create Your First Component</h3>

      <p className="leading-relaxed mb-4">
        React component names must start with an uppercase letter. Components return HTML code.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Function Component
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">Car.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}
        </pre>
      </div>

      {/* ------------------------------ Rendering a Component ------------------------------ */}
      <h3 className="text-xl font-medium mb-3 mt-6">Rendering a Component</h3>

      <p className="leading-relaxed mb-4">
        Use a component in your application with JSX syntax: <code>&lt;Car /&gt;</code>.
      </p>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">main.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-red-600 dark:text-red-400">createRoot</span>(document.
<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
<span className="text-green-600 dark:text-green-400">'root'</span>
)).render(
  <span className="text-purple-600 dark:text-purple-400">&lt;Car /&gt;</span>
);
        </pre>
      </div>

      {/* ------------------------------ Props ------------------------------ */}
      <h3 className="text-xl font-medium mb-3 mt-6">Props</h3>

      <p className="leading-relaxed mb-4">
        Arguments can be passed into a component as <strong>props</strong> (properties). Send arguments as HTML attributes.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Passing a Color Prop
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">Car.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car(props) {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a {"{"}props.color{"}"} Car!&lt;/h2&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

<span className="text-red-600 dark:text-red-400">createRoot</span>(document.
<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
<span className="text-green-600 dark:text-green-400">'root'</span>
)).render(
  <span className="text-purple-600 dark:text-purple-400">&lt;Car color="red" /&gt;</span>
);
        </pre>
      </div>

      {/* ------------------------------ Components in Components ------------------------------ */}
      <h3 className="text-xl font-medium mb-3 mt-6">Components in Components</h3>

      <p className="leading-relaxed mb-4">
        Components can be nested inside other components.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Car inside Garage
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">Garage.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a Car!&lt;/h2&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

<span className="text-blue-600 dark:text-blue-400">function</span> Garage() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Who lives in my Garage?&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car /&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

<span className="text-red-600 dark:text-red-400">createRoot</span>(document.
<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
<span className="text-green-600 dark:text-green-400">'root'</span>
)).render(
  <span className="text-purple-600 dark:text-purple-400">&lt;Garage /&gt;</span>
);
        </pre>
      </div>

      {/* ------------------------------ Rendering Component Twice ------------------------------ */}
      <h3 className="text-xl font-medium mb-3 mt-6">Rendering a Component Multiple Times</h3>

      <p className="leading-relaxed mb-4">
        Components can be rendered multiple times inside another component.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Two Cars inside Garage
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-4 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">Garage.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car(props) {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;I am a {"{"}props.brand{"}"}!&lt;/h2&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

<span className="text-blue-600 dark:text-blue-400">function</span> Garage() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Who lives in my Garage?&lt;/h1&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car brand="Ford" /&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Car brand="BMW" /&gt;
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

<span className="text-red-600 dark:text-red-400">createRoot</span>(document.
<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
<span className="text-green-600 dark:text-green-400">'root'</span>
)).render(
  <span className="text-purple-600 dark:text-purple-400">&lt;Garage /&gt;</span>
);
        </pre>
      </div>

      {/* ------------------------------ Components in Files ------------------------------ */}
      <h3 className="text-xl font-medium mb-3 mt-6">Components in Files</h3>

      <p className="leading-relaxed mb-4">
        For reusable code, split components into separate files. Filenames must start with an uppercase letter.
      </p>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Example: Vehicle.jsx
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-10 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">Vehicle.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">function</span> Car() {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">return</span> (
  <br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;Hi, I am a Car!&lt;/h2&gt;
  <br />
  &nbsp;&nbsp;);
  <br />
{"}"}

<span className="text-blue-600 dark:text-blue-400">export default</span> Car;
        </pre>
      </div>

      <h4 className="font-semibold text-lg text-purple-700 dark:text-purple-300 mb-2">
        Importing and Using Component
      </h4>

      <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-10 text-sm">
        <p className="font-mono mb-2 text-gray-700 dark:text-gray-300">main.jsx</p>
        <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-blue-600 dark:text-blue-400">import</span> { '{ createRoot }' } <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'react-dom/client'</span>;
<br />
<span className="text-blue-600 dark:text-blue-400">import</span> Car <span className="text-blue-600 dark:text-blue-400">from</span> <span className="text-green-600 dark:text-green-400">'./Vehicle.jsx'</span>;

<br /><br />

<span className="text-red-600 dark:text-red-400">createRoot</span>(document.
<span className="text-purple-600 dark:text-purple-400">getElementById</span>(
<span className="text-green-600 dark:text-green-400">'root'</span>
)).render(
  <span className="text-purple-600 dark:text-purple-400">&lt;Car /&gt;</span>
);
        </pre>
      </div>
    </>
  ),
}
,
"react_conditionals.asp": {
  title: "React Conditional Rendering",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Conditional Rendering
      </h2>

      <p className="leading-relaxed mb-4">
        In React, you can conditionally render components. There are several ways to do this.
      </p>

      {/* ---------------- if Statement ---------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">if Statement</h3>
      <p className="leading-relaxed mb-4">
        We can use the if JavaScript operator to decide which component to render.
      </p>

<div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
  <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 text-black dark:text-gray-200  rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827]">
    <code>
      <span className="text-blue-600">function</span> <span className="text-red-600">MissedGoal</span>() {"{"}{"\n"}
      &nbsp;&nbsp;<span className="text-blue-600">return</span> &lt;<span className="text-purple-600">h1</span>&gt;MISSED!&lt;/<span className="text-purple-600">h1</span>&gt;;{"\n"}
      {"}"}{"\n\n"}

      <span className="text-blue-600">function</span> <span className="text-red-600">MadeGoal</span>() {"{"}{"\n"}
      &nbsp;&nbsp;<span className="text-blue-600">return</span> &lt;<span className="text-purple-600">h1</span>&gt;Goal!&lt;/<span className="text-purple-600">h1</span>&gt;;{"\n"}
      {"}"}{"\n\n"}

      <span className="text-blue-600">function</span> <span className="text-red-600">Goal</span>(<span className="text-green-600">props</span>) {"{"}{"\n"}
      &nbsp;&nbsp;<span className="text-blue-600">const</span> isGoal = <span className="text-green-600">props.isGoal</span>;<br />
      &nbsp;&nbsp;<span className="text-blue-600">if</span> (isGoal) {"{"}{"\n"}
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">return</span> &lt;<span className="text-red-600">MadeGoal</span> /&gt;;{"\n"}
      &nbsp;&nbsp;{"}"}{"\n"}
      &nbsp;&nbsp;<span className="text-blue-600">return</span> &lt;<span className="text-red-600">MissedGoal</span> /&gt;;{"\n"}
      {"}"}{"\n\n"}

      <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(
      &lt;<span className="text-red-600">Goal</span> isGoal={"{"}false{"}"} /&gt;
      );
    </code>
  </pre>
</div>

<p className="leading-relaxed mb-4">
  Try changing the <code className="text-red-600">isGoal</code> attribute to <code className="text-red-600">true</code>:
</p>

<div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
  <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
    <code>
      <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(
      &lt;<span className="text-red-600">Goal</span> isGoal={"{"}<span className="text-green-600">true</span>{"}"} /&gt;
      );
    </code>
  </pre>
</div>



      {/* ---------------- Logical && Operator ---------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">Logical &amp;&amp; Operator</h3>
      <p className="leading-relaxed mb-4">
        Another way to conditionally render a React component is by using the <code>&amp;&amp;</code> operator.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
   <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
  <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
    <code>
      <span className="text-blue-600">function</span> <span className="text-red-600">Car</span>(<span className="text-green-600">props</span>) {"{"}{"\n"}
      &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-purple-600">&gt;</span><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"}<span className="text-green-600">props.brand</span> &amp;&amp; &lt;<span className="text-purple-600">h1</span>&gt;My car is a {"{"}<span className="text-green-600">props.brand</span>{"}"}!&lt;/<span className="text-purple-600">h1</span>&gt;{"}"}<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-purple-600">&gt;</span><br />
      &nbsp;&nbsp;);{"\n"}
      {"}"}{"\n\n"}

      <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(<br />
      &nbsp;&nbsp;&lt;<span className="text-red-600">Car</span> brand={"{"}"Ford"{"}"} /&gt;<br />
      );
    </code>
  </pre>
</div>

      </div>

      <p className="leading-relaxed mb-4">
        If <code>props.brand</code> evaluates to true, the expression after <code>&amp;&amp;</code> will render. Try emptying the brand property:
      </p>

<div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
  <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
    <code>
      <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(
      &lt;<span className="text-red-600">Car</span> /&gt;
      );
    </code>
  </pre>
</div>


      {/* ---------------- Ternary Operator ---------------- */}
      <h3 className="text-xl font-medium mb-3 mt-6">Ternary Operator</h3>
      <p className="leading-relaxed mb-4">
        You can also use a ternary operator: <code>condition ? true : false</code>. Here’s the goal example:
      </p>

 <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
  <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
    <code>
      <span className="text-red-600">function</span> <span className="text-blue-600">Goal</span>(props) {"{"}
      <br />
      &nbsp;&nbsp;<span className="text-red-600">const</span> isGoal = props.isGoal;
      <br />
      &nbsp;&nbsp;<span className="text-red-600">return</span> (
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;&gt;
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{"} isGoal ? &lt;<span className="text-blue-600">MadeGoal</span> /&gt; : &lt;<span className="text-blue-600">MissedGoal</span> /&gt; {"}"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/&gt;
      <br />
      &nbsp;&nbsp;);
      <br />
      {"}"}
      <br /><br />
      <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(
      <br />
      &nbsp;&nbsp;&lt;<span className="text-red-600">Goal</span> isGoal={"{"}<span className="text-red-600">false</span>{"}"} /&gt;
      <br />
      );
    </code>
  </pre>
</div>

    </>
  ),
},
"react_forms.asp": {
  title: "React Forms",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Forms
      </h2>

      <p className="leading-relaxed mb-4">
        Just like in HTML, React uses forms to allow users to interact with the web page.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Adding Forms in React</h3>
      <p className="leading-relaxed mb-4">
        You add a form with React like any other element. For example, add a form that allows users to enter their name:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">MyForm</span>() {"{"}{"\n"}
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Enter your name:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br />
            &nbsp;&nbsp;);{"\n"}
            {"}"}{"\n\n"}
            <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(
            <br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">MyForm</span> /&gt;
            <br />
            );
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Controlled Components</h3>
      <p className="leading-relaxed mb-4">
        In React, controlled components handle form data through component state. The <code>useState</code> hook is used to store the input value and update it via event handlers.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">import</span> {"{"} useState {"}"} <span className="text-blue-600">from</span> 'react';<br />
            <span className="text-blue-600">import</span> {"{"} createRoot {"}"} <span className="text-blue-600">from</span> 'react-dom/client';<br /><br />

            <span className="text-blue-600">function</span> <span className="text-red-600">MyForm</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">const</span> [name, setName] = useState(<span className="text-red-600">""</span>);<br /><br />
            &nbsp;&nbsp;<span className="text-blue-600">function</span> handleChange(e) {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;setName(e.target.value);<br />
            &nbsp;&nbsp;{"}"}<br /><br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Enter your name:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" value={"{"}name{"}"} onChange={"{"}handleChange{"}"} /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Current value: {"{"}name{"}"}&lt;/p&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">MyForm</span> /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-medium mb-3 mt-6">Initial Values</h3>
      <p className="leading-relaxed mb-4">
        To add an initial value to the input field, set the initial state in <code>useState</code>:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">function</span> <span className="text-red-600">MyForm</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">const</span> [name, setName] = useState(<span className="text-red-600">"John"</span>);<br />
            &nbsp;&nbsp;<span className="text-blue-600">function</span> handleChange(e) {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;setName(e.target.value);<br />
            &nbsp;&nbsp;{"}"}<br /><br />
            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Enter your name:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" value={"{"}name{"}"} onChange={"{"}handleChange{"}"} /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Current value: {"{"}name{"}"}&lt;/p&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />
            <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">MyForm</span> /&gt;<br />
            );
          </code>
        </pre>
      </div>
    </>
  ),
},
"react_forms_submit.asp": {
  title: "React Submit Forms",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Submit Forms
      </h2>

      <p className="leading-relaxed mb-4">
        You can control the submit action by adding an event handler in the <code>onSubmit</code> attribute of the <code>&lt;form&gt;</code>.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Adding Submit Event Handler</h3>
      <p className="leading-relaxed mb-4">
        Add a submit button and an event handler in the <code>onSubmit</code> attribute to control the form submission:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">import</span> {"{"} useState {"}"} <span className="text-blue-600">from</span> 'react';<br />
            <span className="text-blue-600">import</span> {"{"} createRoot {"}"} <span className="text-blue-600">from</span> 'react-dom/client';<br /><br />

            <span className="text-blue-600">function</span> <span className="text-red-600">MyForm</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">const</span> [name, setName] = useState(<span className="text-red-600">""</span>);<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">function</span> handleChange(e) {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;setName(e.target.value);<br />
            &nbsp;&nbsp;{"}"}<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">function</span> handleSubmit(e) {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;e.preventDefault();<br />
            &nbsp;&nbsp;&nbsp;&nbsp;alert(name);<br />
            &nbsp;&nbsp;{"}"}<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;form onSubmit={"{"}handleSubmit{"}"}&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Enter your name:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" value={"{"}name{"}"} onChange={"{"}handleChange{"}"} /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="submit" /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />

            <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">MyForm</span> /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        In this example, the <code>handleSubmit</code> function prevents the default page reload and instead shows an alert with the current value of the input.
      </p>
    </>
  ),
},
"react_textarea.asp": {
  title: "React Forms - Textarea",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Forms - Textarea
      </h2>

      <p className="leading-relaxed mb-4">
        The <code>textarea</code> element in React is slightly different from ordinary HTML.
      </p>

      <p className="leading-relaxed mb-4">
        In HTML, the value of a <code>textarea</code> is the text between the start tag <code>&lt;textarea&gt;</code> and the end tag <code>&lt;/textarea&gt;</code>.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            &lt;textarea&gt;{"\n"}
            &nbsp;&nbsp;Content of the textarea.{"\n"}
            &lt;/textarea&gt;
          </code>
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        In React, the value of a <code>textarea</code> is placed in a <code>value</code> attribute, just like with the <code>input</code> element.
      </p>

      <p className="leading-relaxed mb-4">
        We'll use the <code>useState</code> Hook to manage the value of the textarea.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">import</span> {"{"} useState {"}"} <span className="text-blue-600">from</span> 'react';<br />
            <span className="text-blue-600">import</span> {"{"} createRoot {"}"} <span className="text-blue-600">from</span> 'react-dom/client';<br /><br />

            <span className="text-blue-600">function</span> <span className="text-red-600">MyForm</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">const</span> [mytxt, setMytxt] = useState(<span className="text-red-600">""</span>);<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">function</span> handleChange(e) {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;setMytxt(e.target.value);<br />
            &nbsp;&nbsp;{"}"}<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Write here:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;textarea value={"{"}mytxt{"}"} onChange={"{"}handleChange{"}"} /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Current value: {"{"}mytxt{"}"}&lt;/p&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />

            <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">MyForm</span> /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        In this example, the textarea is a controlled component. The <code>mytxt</code> state holds the current value, and <code>handleChange</code> updates it whenever the user types.
      </p>
    </>
  ),
},
"react_select.asp": {
  title: "React Forms - Select",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Forms - Select
      </h2>

      <p className="leading-relaxed mb-4">
        A drop-down list, or a <code>select</code> box, in React is also slightly different from HTML.
      </p>

      <p className="leading-relaxed mb-4">
        In HTML, the selected value in a drop-down list is defined with the <code>selected</code> attribute:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            &lt;select&gt;{"\n"}
            &nbsp;&nbsp;&lt;option value="Ford"&gt;Ford&lt;/option&gt;{"\n"}
            &nbsp;&nbsp;&lt;option value="Volvo" selected&gt;Volvo&lt;/option&gt;{"\n"}
            &nbsp;&nbsp;&lt;option value="Fiat"&gt;Fiat&lt;/option&gt;{"\n"}
            &lt;/select&gt;
          </code>
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        In React, the selected value is defined with a <code>value</code> attribute on the <code>select</code> tag.
      </p>

      <p className="leading-relaxed mb-4">
        Example: React uses the <code>value</code> attribute to control the select box:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">import</span> {"{"} useState {"}"} <span className="text-blue-600">from</span> 'react';<br />
            <span className="text-blue-600">import</span> {"{"} createRoot {"}"} <span className="text-blue-600">from</span> 'react-dom/client';<br /><br />

            <span className="text-blue-600">function</span> <span className="text-red-600">MyForm</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">const</span> [myCar, setMyCar] = useState(<span className="text-red-600">"Volvo"</span>);<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">const</span> handleChange = (event) = {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;setMyCar(event.target.value);<br />
            &nbsp;&nbsp;{"}"}<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;select value={"{"}myCar{"}"} onChange={"{"}handleChange{"}"}&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value="Ford"&gt;Ford&lt;/option&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value="Volvo"&gt;Volvo&lt;/option&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option value="Fiat"&gt;Fiat&lt;/option&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/select&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/form&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />

            <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">MyForm</span> /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        In this example, the <code>select</code> element is controlled by React state. The <code>myCar</code> state holds the currently selected value, and <code>handleChange</code> updates it when the user selects a different option.
      </p>
    </>
  ),
},
"react_multiple_inputs.asp": {
  title: "React Forms - Multiple Input Fields",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Forms - Multiple Input Fields
      </h2>

      <p className="leading-relaxed mb-4">
        When you have multiple controlled input fields in a form, you can manage their state either by:
      </p>

      <ol className="list-decimal list-inside mb-4">
        <li>Using a separate <code>useState</code> call for each input.</li>
        <li>Using a single <code>useState</code> call with an object to hold all form field values.</li>
      </ol>

      <p className="leading-relaxed mb-4">
        We will use the second approach, as it is more common for forms. Make sure each input field has a unique <code>name</code> attribute.  
        When initializing the state, use an object instead of a string. If the input fields have no initial value, use an empty object.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            <span className="text-blue-600">import</span> {"{"} useState {"}"} <span className="text-blue-600">from</span> 'react';<br />
            <span className="text-blue-600">import</span> {"{"} createRoot {"}"} <span className="text-blue-600">from</span> 'react-dom/client';<br /><br />

            <span className="text-blue-600">function</span> <span className="text-red-600">MyForm</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="text-blue-600">const</span> [inputs, setInputs] = useState({"{"}{"}"});<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">const</span> handleChange = (e) = {"{"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">const</span> name = e.target.name;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600">const</span> value = e.target.value;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;setInputs(values = ({"{"}...values, [name]: value{"}"}))<br />
            &nbsp;&nbsp;{"}"}<br /><br />

            &nbsp;&nbsp;<span className="text-blue-600">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;form&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;First name:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="text" <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name="firstname" <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value={"{"}inputs.firstname{"}"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange={"{"}handleChange{"}"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;Last name:<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="text" <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name="lastname" <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value={"{"}inputs.lastname{"}"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange={"{"}handleChange{"}"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br /><br />

            &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Current values: {"{"}inputs.firstname{"}"} {"{"}inputs.lastname{"}"}&lt;/p&gt;<br />
            &nbsp;&nbsp;&lt;/form&gt;<br />
            &nbsp;&nbsp;);<br />
            {"}"}<br /><br />

            <span className="text-blue-600">createRoot</span>(document.getElementById('root')).render(<br />
            &nbsp;&nbsp;&lt;<span className="text-red-600">MyForm</span> /&gt;<br />
            );
          </code>
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        Here, a single <code>useState</code> call manages multiple input fields as an object. The <code>handleChange</code> function dynamically updates the state based on the <code>name</code> attribute of the input field.
      </p>

      <p className="leading-relaxed mb-4">
        To add initial values, update the <code>useState</code> object like this:
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-4 text-sm">
        <pre className="font-mono p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words bg-white dark:bg-[#111827] text-black dark:text-gray-200">
          <code>
            const [inputs, setInputs] = useState({"{"} firstname: 'John', lastname: 'Doe' {"}"});  
          </code>
        </pre>
      </div>
    </>
  ),
},
"react_css_styling.asp": {
  title: "React CSS Modules",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React CSS Modules
      </h2>

      <p className="leading-relaxed mb-4">
        CSS Modules let you write CSS that is scoped locally to a specific component. This prevents class name conflicts and makes your styles more maintainable.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Creating a CSS Module</h3>
      <p className="leading-relaxed mb-4">
        Create a file named <code>Button.module.css</code> and add the following styles:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`.mybutton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Using a CSS Module</h3>
      <p className="leading-relaxed mb-4">
        Import the module and use the class via <code>styles.className</code>:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.mybutton}>
        My Button
      </button>
    </div>
  );
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Multiple Classes</h3>
      <p className="leading-relaxed mb-4">
        You can add multiple classes in your module and combine them:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`.mybutton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  background-color: #007bff;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;}`}
      </pre>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={\`\${styles.mybutton} \${styles.primary}\`}>
        My Primary Button
      </button>
      <button className={\`\${styles.mybutton} \${styles.secondary}\`}>
        My Secondary Button
      </button>
    </div>
  );
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Composing Classes</h3>
      <p className="leading-relaxed mb-4">
        You can make classes inherit styles from another class using <code>composes</code>:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`.mybutton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  composes: mybutton;
  background-color: #007bff;
  color: white;
}

.secondary {
  composes: mybutton;
  background-color: #6c757d;
  color: white;}`}
      </pre>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.primary}>
        Primary Button
      </button>
      <button className={styles.secondary}>
        Secondary Button
      </button>
    </div>
  );
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Global Classes</h3>
      <p className="leading-relaxed mb-4">
        To make a class available globally, use the <code>:global</code> prefix:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`:global(.myheader) {
  padding: 10px 20px;
  font-size: 50px;
  color: white;
  background-color: dodgerblue;
}`}
      </pre>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import styles from './BlueHeader.module.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
    </div>
  );
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Combine Global and Local Classes</h3>
      <p className="leading-relaxed mb-4">
        You can use global and local classes together:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`:global(.myheader) {
  padding: 10px 20px;
  font-size: 50px;
  color: white;
  background-color: dodgerblue;
}

.myparagraph {
  font-size: 20px;
  color: white;
  background-color: purple;
}`}
      </pre>
      <pre className="bg-gray-100 p-4   text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import styles from './MyStyles.module.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
      <p className={styles.myparagraph}>
        My Paragraph
      </p>
    </div>
  );
}`}
      </pre>
    </>
  ),
},
"react_router.asp": {
  title: "React Router",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Router
      </h2>

      <p className="leading-relaxed mb-4">
        React Router is the standard routing library for React. It allows navigation between multiple views, URL parameters, nested routes, and more.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Installation</h3>
      <p className="mb-4">
        Run the following command to install React Router:
      </p>
      <pre className="bg-gray-100 p-4   text-black dark:text-gray-200  rounded-lg mb-4 text-sm">
        npm install react-router-dom
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Basic Routing</h3>
      <p className="leading-relaxed mb-4">
        Wrap your app with <code>BrowserRouter</code> and use <code>Routes</code> and <code>Route</code> to define paths:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200   rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }
function Contact() { return <h1>Contact Page</h1>; }

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Nested Routes</h3>
      <p className="leading-relaxed mb-4">
        Use <code>Outlet</code> to render child routes inside a parent route:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200   rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function Products() {
  return (
    <div>
      <h1>Products</h1>
      <nav>
        <Link to="car">Cars</Link> | <Link to="bike">Bikes</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function CarProducts() { return <div><h2>Cars</h2><ul><li>Audi</li><li>BMW</li><li>Volvo</li></ul></div>; }
function BikeProducts() { return <div><h2>Bikes</h2><ul><li>Yamaha</li><li>Suzuki</li><li>Honda</li></ul></div>; }

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">NavLink for Active Links</h3>
      <p className="leading-relaxed mb-4">
        <code>NavLink</code> allows styling active links:
      </p>
      <pre className="bg-gray-100 p-4   text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">URL Parameters</h3>
      <p className="leading-relaxed mb-4">
        Use <code>useParams</code> to access dynamic route parameters:
      </p>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Info() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/customer/Emil">Emil</Link> | 
        <Link to="/customer/Tobias">Tobias</Link> | 
        <Link to="/customer/Linus">Linus</Link>
      </nav>
      <Routes>
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}`}
      </pre>
    </>
  ),
},
"react_transitions.asp": {
  title: "React Transitions",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React useTransition
      </h2>

      <p className="leading-relaxed mb-4">
        The <code>useTransition</code> hook lets you mark some state updates as <strong>non-urgent</strong>, keeping your app responsive during heavy updates.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">When to Use Transitions</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Slow operations that might freeze the UI</li>
        <li>Updates that aren’t immediately critical</li>
        <li>Search results or large lists</li>
      </ul>

      <h3 className="text-xl font-medium mb-3 mt-6">Basic Example</h3>
      <p className="leading-relaxed mb-4">
        Immediate input updates are urgent, while search results updates are non-urgent transitions:
      </p>
      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useTransition } from 'react';

function SearchBar() {
  const [text, setText] = useState('');
  const [results, setResults] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value); // urgent update

    startTransition(() => {
      setResults(e.target.value); // non-urgent transition
    });
  };

  return (
    <div>
      <input value={text} onChange={handleChange} placeholder="Type here..." />
      {isPending ? <p>Loading...</p> : <p>Search results for: {results}</p>}
    </div>
  );
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Real-World Example</h3>
      <p className="leading-relaxed mb-4">
        A slow search with many results using transitions to avoid freezing the UI:
      </p>
      <pre className="bg-gray-100 text-black dark:text-gray-200  p-4 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useTransition } from 'react';

function SearchResults({ query }) {
  const items = [];
  if (query) {
    for (let i = 0; i < 1000; i++) {
      items.push(<li key={i}>Result for {query} - {i}</li>);
    }
  }
  return <ul>{items}</ul>;
}

function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value); // urgent update

    startTransition(() => {
      setQuery(e.target.value); // non-urgent transition
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to search..."
      />
      {isPending && <p>Loading results...</p>}
      <SearchResults query={query} />
    </div>
  );
}`}
      </pre>

      <p className="leading-relaxed mb-4">
        In this example, typing into the input updates immediately, while the results render as a transition, keeping the interface responsive.
      </p>
    </>
  ),
},
"react_forward_ref.asp": {
  title: "React forwardRef",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React forwardRef
      </h2>

      <p className="leading-relaxed mb-4">
        <code>forwardRef</code> lets your component pass a <strong>ref</strong> to one of its children. This is useful when you need a direct reference to a DOM element inside a component.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Common Uses</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Focusing input elements</li>
        <li>Triggering animations</li>
        <li>Measuring DOM elements</li>
        <li>Integrating with third-party libraries</li>
      </ul>

      <h3 className="text-xl font-medium mb-3 mt-6">Basic Example</h3>
      <p className="leading-relaxed mb-4">
        Forward a ref to an input element, and focus it via a button:
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-black dark:text-gray-200 mb-4 text-sm whitespace-pre-wrap">
        {`import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`}
      </pre>

      <p className="leading-relaxed mb-4">
        In this example:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>MyInput</code> forwards the ref to the <code>&lt;input&gt;</code> element.</li>
        <li><code>useRef</code> in <code>App</code> captures the input's DOM node.</li>
        <li>The <code>focusInput</code> function calls <code>inputRef.current.focus()</code> to programmatically focus the input.</li>
      </ul>
    </>
  ),
},
"react_hoc.asp": {
  title: "React Higher Order Components",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Higher Order Components (HOC)
      </h2>

      <p className="leading-relaxed mb-4">
        A <strong>Higher Order Component (HOC)</strong> is a function that takes a component and returns a new, enhanced component. It's like a wrapper that adds extra features to your component without modifying it directly.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Common Uses</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Code reuse and logic sharing</li>
        <li>Adding styling or layout wrappers</li>
        <li>Authentication and authorization</li>
        <li>Conditional rendering enhancements</li>
      </ul>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: Adding a Border</h3>
      <p className="leading-relaxed mb-4">
        Here we create an HOC that adds a border to any component we pass into it:
      </p>

      <pre className="bg-gray-100 text-black dark:text-gray-200  p-4 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`// This is our HOC - it adds a border to any component
function withBorder(WrappedComponent) {
  return function NewComponent(props) {
    return (
      <div style={{ border: '2px solid blue', padding: '10px' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// Simple component without border
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Create a new component with border
const GreetingWithBorder = withBorder(Greeting);

function App() {
  return (
    <div>
      <Greeting name="John" />
      <GreetingWithBorder name="Jane" />
    </div>
  );
}`}
      </pre>

      <p className="leading-relaxed mb-4">
        <strong>Explanation:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>withBorder</code> is a function that wraps any component and returns a new component with extra styling.</li>
        <li><code>Greeting</code> is a normal component without any border.</li>
        <li><code>GreetingWithBorder</code> is the enhanced component created by the HOC, which now has a blue border.</li>
      </ul>
    </>
  ),
},

"react_hooks_what_is.asp": {
  title: "React Hooks",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Hooks
      </h2>

      <p className="leading-relaxed mb-4">
        Hooks allow functions to have access to <strong>state</strong> and other React features without using classes. They provide a more direct API to React concepts like props, state, context, refs, and lifecycle methods.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">What is a Hook?</h3>
      <p className="leading-relaxed mb-4">
        Hooks are functions that let you "hook into" React state and lifecycle features from functional components.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Example</h3>
      <p className="leading-relaxed mb-4">
        Here is an example of a Hook. Don't worry if it doesn't make sense yet. We will go into more detail in the next section.
      </p>

      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <p>Click a button below to change the color:</p>
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
      <button type="button" onClick={() => setColor("red")}>Red</button>
      <button type="button" onClick={() => setColor("pink")}>Pink</button>
      <button type="button" onClick={() => setColor("green")}>Green</button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
);`}
      </pre>

      <p className="leading-relaxed mb-4">
        You must import Hooks from <code>react</code>. In this example, we are using the <code>useState</code> Hook to keep track of the component's state. State generally refers to application data or properties that need to be tracked.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Hook Rules</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Hooks can only be called inside React function components.</li>
        <li>Hooks can only be called at the top level of a component.</li>
        <li>Hooks cannot be conditional.</li>
      </ul>
    </>
  ),
},
"react_usestate.asp": {
  title: "React useState Hook",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React useState Hook
      </h2>

      <p className="leading-relaxed mb-4">
        The React <strong>useState Hook</strong> allows us to track state in a function component.
        State generally refers to data or properties that need to be tracked in an application.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Import useState</h3>
      <p className="leading-relaxed mb-4">
        To use the useState Hook, we first need to import it into our component:
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-black dark:text-gray-200  mb-4 text-sm whitespace-pre-wrap">
        {`import { useState } from "react";`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Initialize useState</h3>
      <p className="leading-relaxed mb-4">
        We initialize our state by calling <code>useState</code> in our function component. It accepts an initial state and returns two values: the current state and a function that updates the state.
      </p>

      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
}`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Read State</h3>
      <p className="leading-relaxed mb-4">
        You can now include the state anywhere in your component:
      </p>

      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>;
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Update State</h3>
      <p className="leading-relaxed mb-4">
        To update our state, we use the updater function returned by <code>useState</code>. Never update the state directly (like <code>color = "blue"</code>).
      </p>

      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <FavoriteColor />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">State Can Hold</h3>
      <p className="leading-relaxed mb-4">
        The useState Hook can keep track of strings, numbers, booleans, arrays, objects, or any combination. You can use multiple state hooks or a single state object.
      </p>

      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyCar() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>My {brand}</h1>
      <p>It is a {color} {model} from {year}.</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCar />
);`}
      </pre>

      <p className="leading-relaxed mb-4">
        Or, use a single state object instead of multiple hooks:
      </p>

      <pre className="bg-gray-100 p-4 rounded-lg text-black dark:text-gray-200  mb-4 text-sm whitespace-pre-wrap">
        {`import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyCar() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}.</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCar />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Updating Objects and Arrays in State</h3>
      <p className="leading-relaxed mb-4">
        When updating an object or array, use the JavaScript spread operator to preserve other properties:
      </p>

      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`const updateColor = () => {
  setCar(previousState => {
    return { ...previousState, color: "blue" }
  });
};`}
      </pre>
    </>
  ),
},
"react_useeffect.asp": {
  title: "React useEffect Hook",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React useEffect Hook
      </h2>

      <p className="leading-relaxed mb-4">
        The <strong>useEffect Hook</strong> allows you to perform side effects in your components. 
        Examples of side effects include fetching data, updating the DOM directly, and using timers.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">useEffect Syntax</h3>
      <p className="leading-relaxed mb-4">
        The useEffect Hook accepts two arguments. The second argument is optional.
      </p>

      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`useEffect(<function>, <dependency>)`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: Timer (Runs on every render)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg text-black dark:text-gray-200 mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById('root')).render(
  <Timer />
);`}
      </pre>

      <p className="leading-relaxed mb-4">
        By default, <code>useEffect</code> runs after every render. To control this behavior, we use the dependency array.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">useEffect with Dependency Array</h3>

      <ul className="list-disc list-inside mb-4">
        <li>No dependency passed: runs after every render</li>
        <li>Empty array <code>[]</code>: runs only on the first render</li>
        <li>Props or state values: runs when any dependency changes</li>
      </ul>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: Run Effect Only on Initial Render</h3>
      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- empty array ensures this runs only once

  return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById('root')).render(
  <Timer />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: Effect Dependent on a Variable</h3>
      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- effect runs when count changes

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Counter />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Effect Cleanup</h3>
      <p className="leading-relaxed mb-4">
        Some effects require cleanup to prevent memory leaks, such as timers, subscriptions, or event listeners.
        This is done by returning a cleanup function from useEffect.
      </p>

      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer); // cleanup the timer
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

createRoot(document.getElementById('root')).render(
  <Timer />
);`}
      </pre>
    </>
  ),
},
"react_useref.asp": {
  title: "React useRef Hook",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React useRef Hook
      </h2>

      <p className="leading-relaxed mb-4">
        The <strong>useRef</strong> Hook allows you to persist values between renders. It can store a mutable value that does not cause a re-render when updated and can be used to access DOM elements directly.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Does Not Cause Re-renders</h3>
      <p className="leading-relaxed mb-4">
        Unlike <code>useState</code>, updating a <code>useRef</code> value does not trigger a re-render. This is useful for tracking things like render counts.
      </p>

      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <p>Type in the input field:</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Accessing DOM Elements</h3>
      <p className="leading-relaxed mb-4">
        <code>useRef</code> is commonly used to access DOM elements directly.
      </p>

      <pre className="bg-gray-100 text-black dark:text-gray-200 p-4 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useRef } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Tracking Previous State Values</h3>
      <p className="leading-relaxed mb-4">
        <code>useRef</code> can also persist values between renders, making it useful for keeping track of previous state values.
      </p>

      <pre className="bg-gray-100  text-black dark:text-gray-200 p-4 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);`}
      </pre>

      <ul className="list-disc list-inside mb-4">
        <li><code>useRef</code> returns a <code>current</code> property that holds the value.</li>
        <li>Updating <code>current</code> does not trigger a re-render.</li>
        <li>It is useful for tracking DOM elements, render counts, or previous state values.</li>
      </ul>
    </>
  ),
},
"react_usereducer.asp": {
  title: "React useReducer Hook",
  content: (
    <>
      <h2 className="text-2xl font-semibold  mb-4 border-b pb-2 border-purple-500 mt-10">
        React useReducer Hook
      </h2>

      <p className="leading-relaxed mb-4">
        The <strong>useReducer</strong> Hook is similar to <code>useState</code> but is useful for managing complex state logic or multiple state values that depend on each other.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Syntax</h3>
      <p className="leading-relaxed mb-4">
        <code>useReducer</code> accepts three arguments: <code>reducer</code>, <code>initialState</code>, and an optional <code>init</code> function.
      </p>
      <p className="leading-relaxed mb-4">
        It returns an array with the current <code>state</code> and a <code>dispatch</code> function to update the state.
      </p>

      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`useReducer(reducer, initialState, init)`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: Tracking Scores</h3>
      <p className="leading-relaxed mb-4">
        Here’s an example using <code>useReducer</code> to track the score of two players:
      </p>

      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useReducer } from 'react';
import { createRoot } from 'react-dom/client';

const initialScore = [
  { id: 1, score: 0, name: "John" },
  { id: 2, score: 0, name: "Sally" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((player) =>
        player.id === action.id
          ? { ...player, score: player.score + 1 }
          : player
      );
    default:
      return state;
  }
};

function Score() {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  return (
    <>
      {score.map((player) => (
        <div key={player.id}>
          <label>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={player.name}
            />
            {player.score}
          </label>
        </div>
      ))}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Score />
);`}
      </pre>

      <p className="leading-relaxed mb-4">
        <strong>Explanation:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>initialScore</code> contains the initial state for all players.</li>
        <li><code>reducer</code> defines how the state should change in response to actions.</li>
        <li><code>dispatch</code> triggers state changes by sending an action object to the reducer.</li>
      </ul>
    </>
  ),
},
"react_usecallback.asp": {
  title: "React useCallback Hook",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React useCallback Hook
      </h2>

      <p className="leading-relaxed mb-4">
        The <strong>useCallback</strong> Hook is used to <strong>memoize</strong> a function. Memoizing a function means caching it so that it does not need to be recreated on every render. 
        The function will only be recreated if one of its dependencies changes.
      </p>

      <p className="leading-relaxed mb-4">
        <strong>useCallback vs useMemo:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>useMemo</code> returns a memoized value.</li>
        <li><code>useCallback</code> returns a memoized function.</li>
      </ul>

      <h3 className="text-xl font-medium mb-3 mt-6">Syntax</h3>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`useCallback(callback, dependencies)`}
      </pre>
      <p className="leading-relaxed mb-4">
        <code>callback</code>: the function to memoize.<br/>
        <code>dependencies</code>: array of values that trigger recreation of the function when changed.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: Without useCallback</h3>
      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200   rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Button = React.memo(({ onClick, text }) => {
  alert(\`Child \${text} button rendered\`);
  return <button onClick={onClick}>{text}</button>;
});

function WithoutCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => setCount1(count1 + 1);
  const handleClick2 = () => setCount2(count2 + 1);

  alert("Parent rendered");

  return (
    <div>
      <h2>Without useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <WithoutCallbackExample />
);`}
      </pre>

      <p className="leading-relaxed mb-4">
        In this example, all components (Parent, Button 1, Button 2) re-render each time a button is clicked.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: With useCallback</h3>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import React, { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

const Button = React.memo(({ onClick, text }) => {
  console.log(\`\${text} button rendered\`);
  return <button onClick={onClick}>{text}</button>;
});

function WithCallbackExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const handleClick2 = useCallback(() => setCount2(count2 + 1), [count2]);

  console.log("Parent rendered");

  return (
    <div>
      <h2>With useCallback:</h2>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <WithCallbackExample />
);`}
      </pre>

      <p className="leading-relaxed mb-4">
        <strong>Explanation:</strong> By memoizing the functions with <code>useCallback</code>, only the affected Button and Parent re-render when clicked. This optimizes performance and avoids unnecessary re-renders.
      </p>
    </>
  ),
},
"react_usememo.asp": {
  title: "React useMemo Hook",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React useMemo Hook
      </h2>

      <p className="leading-relaxed mb-4">
        The <strong>useMemo</strong> Hook returns a memoized value. Memoization caches a value so that it does not need to be recalculated. 
        The memoized value only recalculates when one of its dependencies changes, improving performance.
      </p>

      <p className="leading-relaxed mb-4">
        <strong>useMemo vs useCallback:</strong>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><code>useMemo</code> returns a memoized value.</li>
        <li><code>useCallback</code> returns a memoized function.</li>
      </ul>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: Without useMemo</h3>
      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalculation(count);

  const increment = () => setCount((c) => c + 1);
  const addTodo = () => setTodos((t) => [...t, "New Todo"]);

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => <p key={index}>{todo}</p>)}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
        <p>Note: the expensive function runs also when adding a todo.</p>
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

createRoot(document.getElementById('root')).render(
  <App />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: With useMemo</h3>
      <p className="leading-relaxed mb-4">
        By wrapping the expensive calculation in <code>useMemo</code>, it only runs when <code>count</code> changes, not when todos are added.
      </p>
      <pre className="bg-gray-100 p-4 text-black dark:text-gray-200  rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => setCount((c) => c + 1);
  const addTodo = () => setTodos((t) => [...t, "New Todo"]);

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => <p key={index}>{todo}</p>)}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

createRoot(document.getElementById('root')).render(
  <App />
);`}
      </pre>

      <p className="leading-relaxed mb-4">
        <strong>Explanation:</strong> The <code>useMemo</code> Hook prevents unnecessary recalculations of expensive operations, improving app performance.
      </p>
    </>
  ),
}
,
"react_custom_hooks.asp": {
  title: "React Custom Hooks",
  content: (
    <>
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-purple-500 mt-10">
        React Custom Hooks
      </h2>

      <p className="leading-relaxed mb-4">
        You can create your own custom Hooks in React! Custom Hooks allow you to extract and reuse logic that can be shared between multiple components. 
        A custom Hook always starts with <code>use</code>. Example: <code>useFetch</code>.
      </p>

      <h3 className="text-xl font-medium mb-3 mt-6">Example: Without Custom Hook</h3>
      <p className="leading-relaxed mb-4">
        Suppose we want to fetch data from an API and display it:
      </p>

      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item) => <p key={item.id}>{item.title}</p>)}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <Home />
);`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Creating a Custom Hook</h3>
      <p className="leading-relaxed mb-4">
        We can move the fetch logic into a custom Hook so that it can be reused in other components. 
        The file must start with <code>use</code> and end with <code>.js</code>.
      </p>

      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`// useFetch.js
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;`}
      </pre>

      <h3 className="text-xl font-medium mb-3 mt-6">Using the Custom Hook</h3>
      <pre className="bg-gray-100 p-4  text-black dark:text-gray-200 rounded-lg mb-4 text-sm whitespace-pre-wrap">
        {`import { createRoot } from 'react-dom/client';
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => <p key={item.id}>{item.title}</p>)}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <Home />
);`}
      </pre>

      <p className="leading-relaxed mb-4">
        Now, <code>useFetch</code> can be imported and reused in any component that needs to fetch data. This keeps your components clean and promotes reusability.
      </p>
    </>
  ),
},
}