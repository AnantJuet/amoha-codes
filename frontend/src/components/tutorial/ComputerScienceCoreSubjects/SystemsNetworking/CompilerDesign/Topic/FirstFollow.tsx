import React from "react";

const FirstFollow: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      FIRST and FOLLOW Sets
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>FIRST</strong> and <strong>FOLLOW</strong> sets are fundamental concepts used in
      constructing predictive parsers. They help determine which production to use when parsing
      with a single lookahead token.
    </p>

    <h2 className="text-3xl font-bold mt-8">FIRST Set</h2>
    <p className="leading-relaxed">
      FIRST(α) is the set of terminals that can appear as the first symbol of any string
      derived from α.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`FIRST(α) = { a | α ⇒* aβ for some string β }

If α ⇒* ε, then ε ∈ FIRST(α)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Computing FIRST</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Rules for computing FIRST(X):

1. If X is a terminal, FIRST(X) = {X}

2. If X → ε is a production, add ε to FIRST(X)

3. If X → Y₁Y₂...Yₖ is a production:
   - Add FIRST(Y₁) - {ε} to FIRST(X)
   - If ε ∈ FIRST(Y₁), add FIRST(Y₂) - {ε}
   - If ε ∈ FIRST(Y₁) and ε ∈ FIRST(Y₂), add FIRST(Y₃) - {ε}
   - Continue until Yᵢ where ε ∉ FIRST(Yᵢ)
   - If ε ∈ FIRST(Yⱼ) for all j, add ε to FIRST(X)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">FOLLOW Set</h2>
    <p className="leading-relaxed">
      FOLLOW(A) is the set of terminals that can appear immediately after A in any sentential form.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`FOLLOW(A) = { a | S ⇒* αAaβ for some strings α, β }

$ (end marker) is in FOLLOW(A) if A can appear at the end`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Computing FOLLOW</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Rules for computing FOLLOW(A):

1. Add $ to FOLLOW(S) where S is start symbol

2. If A → αBβ:
   - Add FIRST(β) - {ε} to FOLLOW(B)

3. If A → αB or A → αBβ where ε ∈ FIRST(β):
   - Add FOLLOW(A) to FOLLOW(B)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  E  → T E'
  E' → + T E' | ε
  T  → F T'
  T' → * F T' | ε
  F  → ( E ) | id

FIRST Sets:
  FIRST(E)  = FIRST(T) = FIRST(F) = { (, id }
  FIRST(E') = { +, ε }
  FIRST(T') = { *, ε }

FOLLOW Sets:
  FOLLOW(E)  = { ), $ }
  FOLLOW(E') = { ), $ }
  FOLLOW(T)  = { +, ), $ }
  FOLLOW(T') = { +, ), $ }
  FOLLOW(F)  = { *, +, ), $ }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Computing FIRST(E):
  E → TE'
  FIRST(E) includes FIRST(T)
  T → FT'
  FIRST(T) includes FIRST(F)
  F → (E) | id
  FIRST(F) = { (, id }
  Therefore: FIRST(E) = FIRST(T) = { (, id }

Computing FOLLOW(T):
  From E → TE':
    Add FIRST(E') - {ε} to FOLLOW(T)
    FOLLOW(T) includes { + }
    Since ε ∈ FIRST(E'), add FOLLOW(E) to FOLLOW(T)
  From E' → +TE':
    Same analysis applies
  Result: FOLLOW(T) = { +, ), $ }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use in Parsing</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>FIRST sets help choose which production to apply</li>
      <li>If lookahead ∈ FIRST(α), use production A → α</li>
      <li>If lookahead ∈ FOLLOW(A) and ε ∈ FIRST(α), use A → α</li>
      <li>Used to construct LL(1) parsing tables</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>FIRST(α) = terminals that can begin strings derived from α</li>
        <li>FOLLOW(A) = terminals that can follow A in derivations</li>
        <li>Both sets are essential for predictive parsing</li>
        <li>Computed iteratively until no changes occur</li>
        <li>ε handling requires careful attention</li>
      </ul>
    </div>
  </div>
);

export default FirstFollow;
