import React from "react";

const InclusionExclusion: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* =================== Heading =================== */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Inclusion–Exclusion and its Various Applications
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 18 Apr, 2023</p>

    {/* =================== Intro =================== */}
    <p className="leading-relaxed text-lg">
      In Combinatorics, the Inclusion–Exclusion Principle is a counting
      technique used to compute the size of the union of sets. It corrects
      overcounting by subtracting intersections of sets appropriately.
    </p>

    {/* =================== For 2 Sets =================== */}
    <h2 className="text-3xl font-bold mt-6 ">For Two Finite Sets</h2>
    <p className="leading-relaxed">
      Let A₁ and A₂ be subsets of a universal set. Then:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg border text-gray-900">
      |A₁ ∪ A₂| = |A₁| + |A₂| − |A₁ ∩ A₂|
    </p>

    {/* =================== For 3 Sets =================== */}
    <h2 className="text-3xl font-bold mt-6 ">For Three Finite Sets</h2>
    <p className="leading-relaxed">
      For sets A₁, A₂ and A₃:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg border text-gray-900">
      |A₁ ∪ A₂ ∪ A₃| = |A₁| + |A₂| + |A₃| − |A₁ ∩ A₂| − |A₂ ∩ A₃| − |A₁ ∩ A₃|
      + |A₁ ∩ A₂ ∩ A₃|
    </p>

    {/* =================== General Principle =================== */}
    <h2 className="text-3xl font-bold mt-6 ">General Principle</h2>
    <p className="leading-relaxed">
      For any number of finite sets A₁, A₂, A₃ ... Aᵢ, the union is:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg border text-gray-900">
      Sum of sizes of all single sets − Sum of sizes of all pairwise intersections
      + Sum of all triple intersections − ... + (−1)ⁱ⁺¹ × Size of intersection of all i sets.
    </p>

    {/* =================== Properties =================== */}
    <h2 className="text-3xl font-bold mt-6 ">Properties</h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>Computes the number of elements that satisfy at least one property.</li>
      <li>Prevents the problem of double counting in set unions.</li>
    </ul>

    {/* =================== Example =================== */}
    <h2 className="text-3xl font-bold mt-6 ">Example</h2>
    <p className="leading-relaxed">
      Consider three sets A, B, and C. Their values are:
    </p>

    <ul className="list-disc ml-6 space-y-1">
      <li>|A| = 2</li>
      <li>|B| = 2</li>
      <li>|C| = 2</li>
      <li>|A ∩ B| = 3</li>
      <li>|B ∩ C| = 3</li>
      <li>|A ∩ C| = 3</li>
      <li>|A ∩ B ∩ C| = 4</li>
    </ul>

    <p className="bg-gray-400 p-4 rounded-lg border text-gray-900">
      |A ∪ B ∪ C| = 2 + 2 + 2 − 3 − 3 − 3 + 4 = 1
    </p>

    {/* =================== Applications =================== */}
    <h2 className="text-3xl font-bold mt-6 ">Applications</h2>

    <h3 className="text-2xl font-semibold mt-4 ">1. Derangements</h3>
    <p className="leading-relaxed">
      Derangements count permutations where no element appears in its original
      position. This is solved using Inclusion–Exclusion.
    </p>

    <ul className="list-disc ml-6 space-y-1">
      <li>For n = 1 → 0 derangements</li>
      <li>For n = 2 → 1 derangement</li>
      <li>For n = 3 → 2 derangements (231, 312)</li>
    </ul>

    {/* =================== Approach Steps =================== */}
    <h2 className="text-3xl font-bold mt-6 ">Approach</h2>
    <ol className="list-decimal ml-6 space-y-2">
      <li>Define the sets involved.</li>
      <li>Compute size of each set.</li>
      <li>Compute intersections of 2 sets.</li>
      <li>Compute intersections of 3 sets.</li>
      <li>Continue for all higher intersections.</li>
      <li>Apply Inclusion–Exclusion formula.</li>
    </ol>

    {/* =================== C++ Example =================== */}
    <h2 className="text-3xl font-bold mt-6 ">C++ Example</h2>

    <pre className="bg-gray-500 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`#include <iostream>
using namespace std;

int main() {
    int n = 100;
    int count = 0;

    for(int i = 2; i < n; i += 2) count++;
    for(int i = 3; i < n; i += 3) count++;
    for(int i = 5; i < n; i += 5) count++;

    for(int i = 6; i < n; i += 6) count--;
    for(int i = 10; i < n; i += 10) count--;
    for(int i = 15; i < n; i += 15) count--;

    for(int i = 30; i < n; i += 30) count++;

    cout << "Result = " << count << endl;
    return 0;
}`}
    </pre>

    <p className="leading-relaxed">
      Output: The number of positive integers less than 100 divisible by 2, 3, or 5 is 73.
    </p>

    <p className="text-gray-300 text-sm">
      Time Complexity: O(2ⁿ) or O(nᵏ)  
      <br />
      Space Complexity: O(n log log n)
    </p>

  </div>
);

export default InclusionExclusion;
