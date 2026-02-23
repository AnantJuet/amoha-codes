import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Algorithms Tutorial ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Algorithms Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the comprehensive Algorithms tutorial on Amoha Codes. Algorithms focus on processing data
      efficiently and solving computational problems. Understanding algorithms is essential for writing
      efficient code and solving complex programming challenges.
    </p>

    <p className="text-lg leading-relaxed">
      This tutorial covers all fundamental algorithm paradigms from basic to advanced level, including
      Searching, Sorting, Greedy Algorithms, Dynamic Programming, Divide and Conquer, Backtracking, and
      Graph Algorithms. Before beginning this journey, it is recommended to learn data structures first.
    </p>

    {/* What You Will Learn */}
    <h2 className="text-3xl font-bold mt-8">What You Will Learn</h2>
    <p className="leading-relaxed">
      This tutorial provides in-depth coverage of algorithm concepts, from analysis techniques to advanced
      problem-solving paradigms. Whether you're preparing for coding interviews at top tech companies or
      competitive programming contests, this guide will help you master algorithms.
    </p>

    {/* Course Structure */}
    <h2 className="text-3xl font-bold mt-8">Course Structure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S.No</th>
            <th className="p-3 border">Topic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Analysis of Algorithms</td>
            <td className="p-3 border">Asymptotic analysis, Big O notation, time & space complexity</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Searching Algorithms</td>
            <td className="p-3 border">Linear, binary, ternary, jump, interpolation, exponential search</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Sorting Algorithms</td>
            <td className="p-3 border">Bubble, selection, insertion, merge, quick, heap, counting, radix sort</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Greedy Algorithms</td>
            <td className="p-3 border">Activity selection, Huffman coding, job sequencing, Dijkstra's algorithm</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Dynamic Programming</td>
            <td className="p-3 border">Fibonacci, LCS, LIS, knapsack, matrix chain, coin change</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Divide and Conquer</td>
            <td className="p-3 border">Binary search, merge sort, quick sort, Strassen's algorithm</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">Backtracking</td>
            <td className="p-3 border">N-Queens, Sudoku solver, rat in maze, Hamiltonian cycle</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">Graph Algorithms</td>
            <td className="p-3 border">BFS, DFS, topological sort, shortest path, MST, cycle detection</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Learn Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Algorithms?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Problem Solving:</strong> Algorithms provide systematic approaches to solve complex problems</li>
      <li><strong>Interview Preparation:</strong> Algorithm knowledge is essential for technical interviews at all major tech companies</li>
      <li><strong>Efficiency:</strong> Understanding algorithms helps write code with optimal time and space complexity</li>
      <li><strong>Competitive Programming:</strong> Essential for success in coding competitions and contests</li>
      <li><strong>Real-World Applications:</strong> Algorithms power search engines, social networks, GPS navigation, and more</li>
      <li><strong>Foundation for AI/ML:</strong> Many machine learning algorithms are based on classical algorithmic concepts</li>
    </ul>

    {/* Algorithm Paradigms */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Paradigms</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Greedy:</strong> Make locally optimal choices hoping for global optimum</li>
      <li><strong>Dynamic Programming:</strong> Break problems into overlapping subproblems, store results</li>
      <li><strong>Divide and Conquer:</strong> Divide problem into smaller subproblems, solve recursively</li>
      <li><strong>Backtracking:</strong> Build solution incrementally, abandon partial solutions that fail</li>
      <li><strong>Branch and Bound:</strong> Systematic enumeration with pruning based on bounds</li>
    </ul>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Strong programming skills in any language (C++, Java, Python recommended)</li>
      <li>Understanding of basic data structures (arrays, linked lists, trees, graphs)</li>
      <li>Familiarity with recursion and mathematical reasoning</li>
      <li>Basic knowledge of mathematical concepts (series, logarithms)</li>
    </ul>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <p className="leading-relaxed">
      Begin your journey by exploring the Analysis of Algorithms section, which covers how to evaluate
      algorithm efficiency. Each topic builds upon previous concepts, so following the sequential order
      is recommended for beginners. Experienced learners can navigate directly to specific topics using
      the sidebar.
    </p>

    <p className="leading-relaxed mt-4">
      Each topic includes detailed explanations, pseudocode, implementation examples, complexity analysis,
      and practice problems to reinforce your understanding. The content is designed to match the depth
      expected in technical interviews and competitive programming.
    </p>
  </div>
);

export default Home;
