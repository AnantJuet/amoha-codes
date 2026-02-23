import React from "react";

const VirtualDOM: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Virtual DOM
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>ReactJS Virtual DOM</b> is an in-memory representation of the actual DOM (Document Object Model).
      React uses this lightweight JavaScript object to track changes in the application state and
      efficiently update the actual DOM only where necessary.
    </p>

    <h2 className="text-2xl font-bold mt-6">Working of Virtual DOM</h2>

    <p className="leading-relaxed mt-3">
      Here is a breakdown of how the Virtual DOM works:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li>
        <b>Rendering the Virtual DOM:</b> React creates a virtual representation of the UI as a tree
        of JavaScript objects.
      </li>
      <li>
        <b>Updating State:</b> It generates a new virtual DOM tree to reflect the updated state when
        the application state changes.
      </li>
      <li>
        <b>Diffing Algorithm:</b> React compares the new Virtual DOM tree with the previous one using
        its efficient diffing algorithm to identify the minimal set of changes required.
      </li>
      <li>
        <b>Updating the Real DOM:</b> React applies only the necessary changes to the real DOM,
        optimizing rendering performance.
      </li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">React Fiber</h2>

    <p className="leading-relaxed mt-3">
      React Fiber is like an upgraded engine for React, making it run smoother and faster. Before Fiber,
      React would do all its updates at once, which could sometimes make your app feel slow or "choppy."
      Fiber breaks down this work into smaller, manageable pieces, allowing React to pause and resume
      tasks as needed. This means important things like your clicks or animations get immediate attention,
      making your app feel much more responsive and fluid.
    </p>

    <h2 className="text-2xl font-bold mt-6">Features of React's Virtual DOM</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Efficient Updates:</b> By minimizing direct interactions with the real DOM, React
        significantly reduces rendering time.
      </li>
      <li>
        <b>Reconciliation Process:</b> React's reconciliation efficiently updates the UI based on
        changes in the Virtual DOM.
      </li>
      <li>
        <b>Batching Updates:</b> Multiple state updates are batched into a single re-render cycle,
        avoiding unnecessary computations.
      </li>
      <li>
        <b>Cross-Browser Consistency:</b> The Virtual DOM standardizes behavior across different
        browsers, ensuring consistent rendering.
      </li>
      <li>
        <b>Component-Based Architecture:</b> Virtual DOM integrates seamlessly with React's
        component-based architecture, promoting modular and reusable code.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Performance Optimization Through React's Virtual DOM</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Avoids Full DOM Repaints:</b> React calculates and applies only the changes needed instead
        of repainting the entire DOM.
      </li>
      <li>
        <b>Optimized Rendering:</b> Updates to the Virtual DOM are synchronized with browser rendering
        cycles, avoiding redundant operations.
      </li>
      <li>
        <b>Reduces JavaScript Execution Time:</b> Lightweight Virtual DOM trees are faster to
        manipulate than the actual DOM.
      </li>
      <li>
        <b>Intelligent Rendering Decisions:</b> React intelligently avoids rendering components that
        have not changed using techniques like memoization.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">The Secret Behind React's Speed</h2>

    <p className="leading-relaxed mt-3">
      React's speed comes from its efficient Virtual DOM. Instead of directly manipulating the slow
      Real DOM, React updates an in-memory copy. It then uses a smart algorithm to figure out only
      the necessary changes and applies them in a highly optimized way. This, combined with the Fiber
      architecture's ability to prioritize and break down rendering tasks, ensures the UI remains
      responsive and smooth even during complex updates.
    </p>

    <h2 className="text-2xl font-bold mt-6">Frameworks and Libraries Using Virtual DOM</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>ReactJS:</b> The pioneer in using the Virtual DOM for efficient UI rendering.</li>
      <li><b>Vue.js:</b> Employs a Virtual DOM to provide reactive and declarative UI development.</li>
      <li><b>Inferno:</b> A fast and lightweight React alternative that uses the Virtual DOM.</li>
      <li><b>Preact:</b> A minimalistic version of React with a Virtual DOM for high performance.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Understanding Shadow DOM and Virtual DOM</h2>

    <p className="leading-relaxed mt-3">
      Virtual DOM is a performance optimization used by JavaScript frameworks like React to efficiently
      update the browser's main DOM by comparing virtual copies. Shadow DOM, on the other hand, is a
      native web standard for encapsulating a component's internal structure, styles, and behavior,
      creating isolated DOM subtrees for building reusable web components.
    </p>

    <h2 className="text-2xl font-bold mt-6">Real Life Use Cases of Virtual DOM</h2>

    <p className="leading-relaxed mt-3">
      Real-life usage of the Virtual DOM can be seen in several high-performance web applications like
      Facebook, Instagram, Netflix, Twitter Lite, WhatsApp Web, and Airbnb. These platforms handle
      large-scale, dynamic content and rely on the Virtual DOM to efficiently manage UI updates.
    </p>

    <p className="leading-relaxed mt-3">
      By using a Virtual DOM, changes are first calculated in memory and only the differences are applied
      to the real DOM, making rendering faster and more optimized. This approach minimizes reflows and
      repaints in the browser, leading to better performance and smoother user interactions.
    </p>

    <p className="leading-relaxed mt-3">
      <b>Note:</b> It is especially beneficial for single-page applications (SPAs) where responsiveness
      and speed are critical.
    </p>

    <h2 className="text-2xl font-bold mt-6">Real DOM vs Virtual DOM vs Shadow DOM</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Real DOM</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Virtual DOM</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Shadow DOM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Definition</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Actual structure of a web page</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">In-memory representation</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Encapsulated DOM subtree</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Update Speed</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Slow</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Fast</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">N/A</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Purpose</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Display web pages</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Performance optimization</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Style encapsulation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-4">
      <li>Virtual DOM is best for performance and update speed.</li>
      <li>Shadow DOM is ideal for encapsulation and managing complex UI components.</li>
      <li>Real DOM is less efficient and not preferred for dynamic or modern web applications.</li>
    </ul>
  </>
);

export default VirtualDOM;
