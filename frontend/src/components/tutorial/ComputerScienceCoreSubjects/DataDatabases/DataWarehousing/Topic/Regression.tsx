import React from "react";

const Regression: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Regression Analysis in Data Mining
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Regression is a supervised learning technique that predicts continuous numeric
      values based on input features. It models the relationship between dependent
      and independent variables to forecast outcomes.
    </p>

    {/* Regression Concept */}
    <h2 className="text-3xl font-bold mt-8">Understanding Regression</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Regression vs Classification:
════════════════════════════════════════════════════════════════

CLASSIFICATION (Discrete output):
Input Features → Classifier → Category (A, B, or C)

REGRESSION (Continuous output):
Input Features → Regressor → Numeric Value (e.g., $350,000)

Example - House Price Prediction:
┌───────────────────┐     ┌────────────┐     ┌────────────┐
│ Square Feet: 1500 │     │            │     │            │
│ Bedrooms: 3       │ ──▶ │ Regression │ ──▶ │ Price:     │
│ Location: Urban   │     │   Model    │     │ $350,000   │
│ Age: 10 years     │     │            │     │            │
└───────────────────┘     └────────────┘     └────────────┘`}
      </pre>
    </div>

    {/* Linear Regression */}
    <h2 className="text-3xl font-bold mt-8">Linear Regression</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Simple Linear Regression:
════════════════════════════════════════════════════════════════

Formula: y = mx + b
         y = dependent variable (what we predict)
         x = independent variable (input feature)
         m = slope (coefficient)
         b = y-intercept

Price (y)
  │
400├                              •
   │                         •
350├                    •  ───── Best fit line
   │               •  •
300├          •  •
   │     •  •
250├  •
   │
   └──────────────────────────────────► Square Feet (x)
        1000   1200   1400   1600


Multiple Linear Regression:
y = b₀ + b₁x₁ + b₂x₂ + b₃x₃ + ... + bₙxₙ

Price = $50,000 + ($100 × sqft) + ($5,000 × bedrooms) - ($1,000 × age)`}
      </pre>
    </div>

    {/* Types of Regression */}
    <h2 className="text-3xl font-bold mt-8">Types of Regression</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Formula</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">When to Use</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Linear</td>
            <td className="p-3 border font-mono text-xs text-gray-900">y = b₀ + b₁x</td>
            <td className="p-3 border">Sales prediction</td>
            <td className="p-3 border">Linear relationship</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Polynomial</td>
            <td className="p-3 border font-mono text-xs text-gray-900">y = b₀ + b₁x + b₂x²</td>
            <td className="p-3 border">Growth curves</td>
            <td className="p-3 border">Curved relationship</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ridge</td>
            <td className="p-3 border font-mono text-xs text-gray-900">+ L2 penalty</td>
            <td className="p-3 border">High-dim data</td>
            <td className="p-3 border">Multicollinearity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lasso</td>
            <td className="p-3 border font-mono text-xs text-gray-900">+ L1 penalty</td>
            <td className="p-3 border">Feature selection</td>
            <td className="p-3 border">Sparse solutions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Logistic</td>
            <td className="p-3 border font-mono text-xs text-gray-900">σ(z) = 1/(1+e⁻ᶻ)</td>
            <td className="p-3 border">Binary outcomes</td>
            <td className="p-3 border">Classification (0/1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Evaluation Metrics */}
    <h2 className="text-3xl font-bold mt-8">Evaluation Metrics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Regression Evaluation Metrics:
════════════════════════════════════════════════════════════════

Mean Absolute Error (MAE):
MAE = (1/n) × Σ|yᵢ - ŷᵢ|
Average absolute difference between predicted and actual

Mean Squared Error (MSE):
MSE = (1/n) × Σ(yᵢ - ŷᵢ)²
Penalizes larger errors more heavily

Root Mean Squared Error (RMSE):
RMSE = √MSE
Same units as target variable (easier to interpret)

R² (Coefficient of Determination):
R² = 1 - (SS_res / SS_tot)
Proportion of variance explained by the model
R² = 1.0 → Perfect fit
R² = 0.0 → No better than mean


Example:
─────────────────────────────────────────
Actual:     $300K  $350K  $400K  $320K
Predicted:  $310K  $340K  $420K  $310K
Error:       $10K   $10K   $20K   $10K

MAE  = ($10K + $10K + $20K + $10K) / 4 = $12.5K
RMSE = √[(100 + 100 + 400 + 100)/4] × $1K = $13.2K`}
      </pre>
    </div>

    {/* Regression Assumptions */}
    <h2 className="text-3xl font-bold mt-8">Linear Regression Assumptions</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">1. Linearity</h3>
        <p className="text-sm">Relationship between X and Y is linear.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">2. Independence</h3>
        <p className="text-sm">Observations are independent of each other.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">3. Homoscedasticity</h3>
        <p className="text-sm">Constant variance of residuals across all X.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">4. Normality</h3>
        <p className="text-sm">Residuals are normally distributed.</p>
      </div>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Regression Use Cases</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-200">Price Prediction</h3>
        <p className="text-sm">Real estate, stock prices, product pricing</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold mb-2 text-green-800 dark:text-green-200">Demand Forecasting</h3>
        <p className="text-sm">Inventory planning, resource allocation</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-200">Risk Assessment</h3>
        <p className="text-sm">Insurance premiums, credit scoring</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Regression predicts continuous numeric values</li>
        <li>Linear regression assumes linear relationship: y = mx + b</li>
        <li>Multiple regression uses multiple input features</li>
        <li>Polynomial regression handles curved relationships</li>
        <li>Ridge and Lasso add regularization to prevent overfitting</li>
        <li>Evaluation metrics: MAE, MSE, RMSE, R²</li>
        <li>Check assumptions: linearity, independence, homoscedasticity</li>
        <li>Feature scaling improves model performance</li>
      </ul>
    </div>
  </div>
);

export default Regression;
