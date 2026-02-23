import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Classes of Functions ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Classes of Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 19 Aug, 2025</p>

    {/* Intro Paragraphs */}
    <p className="text-lg leading-relaxed">
      In mathematics, functions help us understand how one quantity depends on another.
      But not all functions behave the same way when connecting inputs to outputs.
      Some functions match each input to a unique output, some make sure every output is used,
      and some do both!
    </p>

    <p className="leading-relaxed">
      To study these differences, we classify functions into three types:
      <strong> injective (one-one)</strong>, <strong>surjective (onto)</strong>, 
      and <strong>bijective (both one-one and onto)</strong>.
    </p>

    <p className="leading-relaxed">
      These types help us understand how functions work and are especially important in
      higher-level math like algebra, calculus, and computer science.
    </p>

    {/* ================= Injective Functions ================= */}
    <h2 className="text-3xl font-bold  mt-8">1. Injective Functions (One-to-One)</h2>

    <p className="leading-relaxed">
      A function is called one-to-one if for all elements a and b in A, whenever f(a) = f(b),
      then a = b. It never maps two distinct elements of its domain to the same element of its
      codomain.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Properties of Injective Functions</h3>

    <p className="leading-relaxed">• An injective function does not map two different inputs to the same output.</p>
    <p className="leading-relaxed">• If a function is injective, it has an inverse function on its image.</p>

    {/* ================= Surjective Functions ================= */}
    <h2 className="text-3xl font-bold  mt-8">2. Surjective Functions (Onto)</h2>

    <p className="leading-relaxed">
      A function is surjective if every element b in the codomain B has at least one corresponding
      element a in A such that f(a) = b. The value a does not need to be unique; multiple inputs
      may map to the same output.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Properties of Surjective Functions</h3>

    <p className="leading-relaxed">• A surjective function covers the entire codomain.</p>
    <p className="leading-relaxed">
      • A surjective function can have an inverse function if restricted to its range.
    </p>

    {/* ================= Bijective Functions ================= */}
    <h2 className="text-3xl font-bold  mt-8">3. Bijective Functions (One-to-One Correspondence)</h2>

    <p className="leading-relaxed">
      A function is bijective if it is both one-to-one and onto. This means every element in the
      domain maps to a unique element in the codomain, and every element in the codomain is used.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Properties of Bijective Functions</h3>

    <p className="leading-relaxed">
      • A bijective function has both an inverse function and a unique mapping between the domain
      and codomain.
    </p>
    <p className="leading-relaxed">
      • If a function is bijective, it forms a one-to-one correspondence between sets A and B.
    </p>

    {/* ================= Composition of Functions ================= */}
    <h2 className="text-3xl font-bold  mt-8">Composition of Functions</h2>

    <p className="leading-relaxed">
      Let g be a function from B to C and f be a function from A to B. The composition of f and g
      is written as (f ∘ g)(a) = f(g(a)).
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Properties of Function Composition</h3>

    <p className="leading-relaxed">• f ∘ g ≠ g ∘ f</p>
    <p className="leading-relaxed">• f⁻¹ ∘ f = a (identity)</p>
    <p className="leading-relaxed">• f ∘ f⁻¹ = b (identity)</p>
    <p className="leading-relaxed">• If f and g are injective, then f ∘ g is injective.</p>
    <p className="leading-relaxed">• If f and g are surjective, then f ∘ g is surjective.</p>
    <p className="leading-relaxed">• If f and f ∘ g are injective, then g is injective.</p>
    <p className="leading-relaxed">
      • If f and f ∘ g are surjective, g might not be surjective.
    </p>
    <p className="leading-relaxed">• (f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹</p>

    {/* ================= Applications in Engineering ================= */}
    <h2 className="text-3xl font-bold  mt-8">Applications in Engineering</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Data Encryption</h3>
    <p className="leading-relaxed">
      Bijective functions ensure unique mapping between plaintext and ciphertext, which is crucial
      for secure communication.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Signal Processing</h3>
    <p className="leading-relaxed">
      Injective functions help maintain distinct signals after transformation, enabling accurate
      signal reconstruction.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Network Design</h3>
    <p className="leading-relaxed">
      Surjective functions ensure that all resources and demands in a network are properly mapped
      and utilized.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Control Systems</h3>
    <p className="leading-relaxed">
      Bijective functions allow engineers to design controllers that map system states to control
      actions uniquely and efficiently.
    </p>

    {/* ================= Solved Examples ================= */}
    <h2 className="text-3xl font-bold  mt-8">
      Solved Examples - Classes of Functions
    </h2>

    {/* Problem 1 */}
    <h3 className="text-2xl font-semibold mt-4 ">
      Problem 1: Determine if f(x) = 2x + 1 is injective.
    </h3>

    <p className="leading-relaxed">
      Assume f(x₁) = f(x₂):  
      2x₁ + 1 = 2x₂ + 1 → 2x₁ = 2x₂ → x₁ = x₂.  
      Since equal outputs give equal inputs, f is injective.
    </p>

    {/* Problem 2 */}
    <h3 className="text-2xl font-semibold mt-4 ">
      Problem 2: Is f(x) = x² surjective on ℝ?
    </h3>

    <p className="leading-relaxed">
      x² ≥ 0 for all real x, so negative values cannot be produced.  
      Therefore, f is not surjective on ℝ.  
      If codomain = [0, ∞), then f becomes surjective.
    </p>

    {/* Problem 3 */}
    <h3 className="text-2xl font-semibold mt-4 ">
      Problem 3: Is f(x) = 3x − 2 bijective on ℝ → ℝ?
    </h3>

    <p className="leading-relaxed">
      Injective: Same method as Problem 1 → injective.  
      Surjective: For any y ∈ ℝ, x = (y + 2) / 3 is always real → surjective.  
      Since f is both injective and surjective, it is bijective.
    </p>

  </div>
);

export default Home;
