import React from "react";

const RecursiveDescentParser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Recursive Descent Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>recursive descent parser</strong> is a top-down parser built from a set of
      mutually recursive procedures, one for each non-terminal in the grammar. It is one of
      the simplest and most intuitive parsing techniques.
    </p>

    <h2 className="text-3xl font-bold mt-8">Structure</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>One procedure for each non-terminal</li>
      <li>Procedures call each other recursively</li>
      <li>Uses lookahead to select production</li>
      <li>May use backtracking if needed</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Implementation Template</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For a production A → X₁X₂...Xₙ:

void A() {
    for each Xᵢ:
        if (Xᵢ is a non-terminal)
            call Xᵢ();
        else if (Xᵢ is a terminal)
            match(Xᵢ);
}

For A → α₁ | α₂ | ... | αₙ:

void A() {
    if (lookahead ∈ FIRST(α₁))
        // code for α₁
    else if (lookahead ∈ FIRST(α₂))
        // code for α₂
    ...
    else
        error();
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar for arithmetic expressions:
  E  → T E'
  E' → + T E' | - T E' | ε
  T  → F T'
  T' → * F T' | / F T' | ε
  F  → ( E ) | num | id

C Implementation:

#include <stdio.h>
#include <stdlib.h>

char lookahead;

void match(char expected) {
    if (lookahead == expected) {
        lookahead = getchar();
    } else {
        printf("Syntax error: expected %c\\n", expected);
        exit(1);
    }
}

void E();
void E_prime();
void T();
void T_prime();
void F();

void E() {
    T();
    E_prime();
}

void E_prime() {
    if (lookahead == '+') {
        match('+');
        T();
        E_prime();
    } else if (lookahead == '-') {
        match('-');
        T();
        E_prime();
    }
    // ε production: do nothing
}

void T() {
    F();
    T_prime();
}

void T_prime() {
    if (lookahead == '*') {
        match('*');
        F();
        T_prime();
    } else if (lookahead == '/') {
        match('/');
        F();
        T_prime();
    }
    // ε production: do nothing
}

void F() {
    if (lookahead == '(') {
        match('(');
        E();
        match(')');
    } else if (isdigit(lookahead)) {
        match(lookahead);  // match number
    } else if (isalpha(lookahead)) {
        match(lookahead);  // match identifier
    } else {
        printf("Syntax error in F\\n");
        exit(1);
    }
}

int main() {
    lookahead = getchar();
    E();
    if (lookahead == '\\n' || lookahead == EOF)
        printf("Parsing successful!\\n");
    else
        printf("Extra input after expression\\n");
    return 0;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">With Backtracking</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Backtracking parser saves input position
and restores on failure:

bool A() {
    int saved_pos = input_position;

    // Try first alternative
    if (try_alpha1())
        return true;

    // Backtrack and try second
    input_position = saved_pos;
    if (try_alpha2())
        return true;

    // All alternatives failed
    input_position = saved_pos;
    return false;
}

Backtracking is inefficient - avoid when possible!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Predictive (No Backtracking)</h2>
    <p className="leading-relaxed">
      Predictive recursive descent uses FIRST sets to decide which production to use,
      eliminating backtracking.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For grammar: S → aAB | bBA

void S() {
    if (lookahead == 'a') {
        match('a');
        A();
        B();
    } else if (lookahead == 'b') {
        match('b');
        B();
        A();
    } else {
        error();
    }
}

Decision is immediate based on first symbol.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>One procedure per non-terminal in the grammar</li>
        <li>Procedures call each other based on grammar structure</li>
        <li>Lookahead determines which production to use</li>
        <li>Backtracking version is simple but inefficient</li>
        <li>Predictive version requires LL grammar</li>
      </ul>
    </div>
  </div>
);

export default RecursiveDescentParser;
