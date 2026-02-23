import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Total Number of Possible Functions ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Total Number of Possible Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Aug, 2024</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A function from one set to another assigns each element of the domain to 
      exactly one element in the codomain. To understand different types of 
      functions, you may refer to classes of functions such as injective, 
      surjective, and bijective.
    </p>

    {/* Number of Functions */}
    <h2 className="text-3xl font-bold  mt-8">
      Number of Functions from One Set to Another
    </h2>
    <p className="leading-relaxed">
      Let X and Y be sets containing <strong>m</strong> and <strong>n</strong> 
      elements respectively. In a function from X to Y, each element of X has 
      <strong> n choices</strong> in Y.  
    </p>
    <p className="leading-relaxed">
      Therefore, the total number of possible functions is:  
      <strong> n<sup>m</sup></strong>
    </p>

    <p className="leading-relaxed">
      <strong>Example:</strong>  
      If X = &#123;a, b, c&#125; and Y = &#123;4, 5&#125;, then the total number of 
      functions is 2<sup>3</sup> = 8.
    </p>

    {/* Examples Section */}
    <h2 className="text-3xl font-bold  mt-8">Examples</h2>

    {/* Q1 */}
    <h3 className="text-2xl font-semibold mt-4 ">
      Example 1
    </h3>
    <p className="leading-relaxed">
      Let X, Y, Z be sets of sizes x, y, and z respectively, and let 
      W = X × Y. The number of elements in W is <strong>xy</strong>.
      The power set E contains <strong>2<sup>xy</sup></strong> elements.
    </p>
    <p className="leading-relaxed">
      Therefore, the number of functions from Z (z elements) to E 
      (2<sup>xy</sup> elements) is:
      <br />
      <strong>2<sup>x y z</sup></strong>
    </p>

    {/* Q2 */}
    <h3 className="text-2xl font-semibold mt-4 ">
      Example 2
    </h3>
    <p className="leading-relaxed">
      Let S be the set of all functions f: &#123;0,1&#125;<sup>4</sup> → &#123;0,1&#125;.
      Since &#123;0,1&#125;<sup>4</sup> has 16 elements, the number of such functions is 
      <strong>2<sup>16</sup></strong>.
    </p>
    <p className="leading-relaxed">
      Now, N is the number of functions from S (2<sup>16</sup> elements)
      to &#123;0,1&#125; (2 elements).  
    </p>
    <p className="leading-relaxed">
      So, N = 2<sup>2<sup>16</sup></sup>.
    </p>
    <p className="leading-relaxed">
      Required value:
      <br />
      Log₂(Log₂(N)) = Log₂(2<sup>16</sup>) = 16
    </p>

    {/* Onto Functions */}
    <h2 className="text-3xl font-bold  mt-8">
      Number of Onto (Surjective) Functions
    </h2>
    <p className="leading-relaxed">
      A function is <strong>onto</strong> if all elements of the codomain Y 
      must be used at least once.
    </p>

    <p className="leading-relaxed">
      If X has m elements and Y has 2 elements, the number of onto functions is:
      <br />
      <strong>2<sup>m</sup> - 2</strong>
    </p>

    <p className="leading-relaxed">
      For a general case where |X| = m and |Y| = n:
    </p>

    <p className="leading-relaxed">
      <strong>
        Number of onto functions =  
        Σ (from k = 0 to n) (-1)<sup>k</sup> × 
        (n choose k) × (n - k)<sup>m</sup>
      </strong>
    </p>

    {/* Q3 */}
    <h3 className="text-2xl font-semibold mt-4 ">
      Example 3
    </h3>
    <p className="leading-relaxed">
      Number of onto functions from X = &#123;1,2,3,4&#125; to Y = 
      &#123;a,b,c&#125;:
    </p>
    <p className="leading-relaxed">
      = 3<sup>4</sup> − 3C1 × 2<sup>4</sup> + 3C2 × 1<sup>4</sup>  
      <br />
      = 81 − 3×16 + 3×1 = 36  
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold  mt-8">
      Practice Problems
    </h2>

    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>How many functions can be defined from a set with 3 elements to a set with 2 elements?</li>
      <li>If set A has 4 elements and set B has 3 elements, how many functions exist from A to B?</li>
      <li>How many injective functions are possible from a 3-element set to a 5-element set?</li>
      <li>How many surjective functions exist from a set of 4 elements to a set of 3 elements?</li>
      <li>If each element in B must be the image of exactly two elements in A (4 → 3 mapping), how many functions are possible?</li>
      <li>How many functions can be defined from a set with 3 elements to itself?</li>
      <li>How many functions exist from a 4-element set to a 2-element set such that every element of the codomain is used?</li>
      <li>How many bijective functions exist from a 3-element set to another 3-element set?</li>
      <li>How many functions from a 2-element set to a 4-element set have exactly 2 elements in their range?</li>
      <li>If A has 5 elements and B has 4 elements, how many functions use exactly 3 elements of B?</li>
    </ul>

  </div>
);

export default Home;
