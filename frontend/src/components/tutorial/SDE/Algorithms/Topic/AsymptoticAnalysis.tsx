import React from 'react';

const AsymptoticAnalysis: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Asymptotic Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Asymptotic Analysis is a method of evaluating the performance of an algorithm in terms of input size.
      Instead of measuring actual running time, we analyze how the time (or space) grows as input size increases.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Asymptotic Analysis?</h2>
    <p className="leading-relaxed">
      Comparing algorithms by implementing them and measuring execution time has problems:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li>Results vary based on machine specifications</li>
      <li>Results depend on programming language used</li>
      <li>Results change based on current system load</li>
      <li>Not practical for very large inputs</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">How It Works</h2>
    <p className="leading-relaxed">
      We evaluate performance in terms of input size (n). We calculate the order of growth of time/space
      taken by an algorithm. For example:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Linear Search</h4>
        <p className="text-sm mt-1">Order of growth is <strong>linear (n)</strong></p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Binary Search</h4>
        <p className="text-sm mt-1">Order of growth is <strong>logarithmic (log n)</strong></p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example: Linear vs Binary Search</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p><strong>Scenario:</strong> Computer A runs Linear Search, Computer B runs Binary Search</p>
      <p className="mt-2">Let's say A is 5000 times faster than B:</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>Linear Search on A: 0.2 × n seconds</li>
        <li>Binary Search on B: 1000 × log(n) seconds</li>
      </ul>
      <p className="mt-2 text-blue-600">
        For small n, A may be faster. But for large n, B will always win because
        log(n) grows much slower than n.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Asymptotic analysis is machine-independent</li>
      <li>Focus on growth rate, not actual time</li>
      <li>Constants are ignored in asymptotic notation</li>
      <li>We typically analyze worst-case scenarios</li>
      <li>Works best for large input sizes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Limitations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Ignores constant factors (Heap Sort is asymptotically better than Quick Sort, but Quick Sort is often faster in practice)</li>
      <li>May not be accurate for small inputs</li>
      <li>Two algorithms with same asymptotic complexity may have different actual performance</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Asymptotic analysis gives us a way to compare algorithms independent of
        hardware. Always consider both theoretical complexity and practical performance for real applications.
      </p>
    </div>
  </div>
);

export default AsymptoticAnalysis;
