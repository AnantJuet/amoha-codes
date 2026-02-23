import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Number of possible equivalence relations ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Number of Possible Equivalence Relations on a Finite Set
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 09 Apr, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      An equivalence relation is defined as a relation that is <strong>Reflexive</strong>, 
      <strong> Symmetric</strong>, and <strong>Transitive</strong>. Before exploring how many 
      equivalence relations exist on a finite set |A| = n, let us understand an example and 
      identify its equivalence classes.
    </p>

    {/* Example Section */}
    <h2 className="text-3xl font-bold  mt-8">Example of an Equivalence Relation</h2>
    <p className="leading-relaxed">
      Let A = &#123;1, 2, 3, 4&#125; be a set and let R be an equivalence relation defined as:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-gray-900">
      R = &#123;(1, 1), (1, 2), (2, 1), (2, 2), (3, 3), (3, 4), (4, 3), (4, 4)&#125;
    </p>

    <p className="leading-relaxed">
      The total relation on the subset C₁ = &#123;1, 2&#125; is included in R, and no larger set has 
      a total relation also included in R. Hence, the equivalence class is:
    </p>

    <p className="leading-relaxed font-semibold">E₁ = &#123;1, 2&#125;</p>

    <p className="leading-relaxed">
      Similarly, another equivalence class is:
    </p>

    <p className="leading-relaxed font-semibold">E₂ = &#123;3, 4&#125;</p>

    <p className="leading-relaxed">
    These equivalence classes are disjoint—this is a fundamental property of equivalence 
    relations. They form a partition &#123;&#123;1,2&#125;, &#123;3,4&#125;&#125; of set A.
    </p>


    {/* Mapping Section */}
    <h2 className="text-3xl font-bold  mt-8">Mapping Equivalence Relations to Partitions</h2>
    <p className="leading-relaxed">
      Every equivalence relation on a set corresponds to exactly one partition of that set, and 
      every partition corresponds to exactly one equivalence relation. Thus, the number of 
      equivalence relations is the number of partitions.
    </p>

    {/* Bell Numbers Section */}
    <h2 className="text-3xl font-bold  mt-8">The Bell Numbers</h2>
    <p className="leading-relaxed">
      The Bell numbers count the number of partitions of a set. Therefore, the number of 
      equivalence relations on a set of size <strong>n</strong> is equal to the <strong>n-th Bell number</strong>.
    </p>

    <p className="leading-relaxed">
      The first few Bell numbers are:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg shadow-inner text-sm text-gray-900">
      B₀ = 1, B₁ = 1, B₂ = 2, B₃ = 5, B₄ = 15, B₅ = 52, …
    </p>

    <p className="leading-relaxed">
      These values form Euler’s triangle, revealing the recursive pattern of Bell numbers.
    </p>

    {/* Example of Partitions */}
    <h2 className="text-3xl font-bold  mt-8">Example: Partitions of a Set</h2>
    <p className="leading-relaxed">
      Consider the set &#123;1, 2, 3, 4&#125;. The partitions are:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>4 → All four elements in one subset (1 way)</li>
      <li>3 + 1 → One group of three, one singleton (4 ways)</li>
      <li>2 + 2 → Two subsets of size two (3 ways)</li>
      <li>2 + 1 + 1 → One pair and two singletons (6 ways)</li>
      <li>1 + 1 + 1 + 1 → All singletons (1 way)</li>
    </ul>

    <p className="leading-relaxed font-semibold">
      Total = 1 + 4 + 3 + 6 + 1 = 15
    </p>

    <p className="leading-relaxed">
      Therefore, there are <strong>15 equivalence relations</strong> on the set &#123;1, 2, 3, 4&#125;.
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Counting equivalence relations is the same as counting partitions of a set. Bell numbers 
      provide an efficient method for determining this count, although computing large Bell 
      numbers is challenging and typically requires recurrence relations or dynamic programming.
    </p>

  </div>
);

export default Home;
