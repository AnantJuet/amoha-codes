import React from "react";

const Classification: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Classification in Data Mining
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Classification is a supervised learning technique that assigns items to predefined
      categories based on their features. A classifier learns from labeled training data
      and then predicts labels for new, unseen instances.
    </p>

    {/* Classification Process */}
    <h2 className="text-3xl font-bold mt-8">Classification Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Classification Workflow:
════════════════════════════════════════════════════════════════

TRAINING PHASE:
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  Training Data           Learning           Classification  │
│  (with labels)           Algorithm               Model      │
│                                                              │
│  ┌────────────────┐     ┌──────────┐     ┌──────────────┐  │
│  │ Features Label │     │          │     │              │  │
│  │ [f1,f2,f3] A   │ ──▶ │ Decision │ ──▶ │   Trained    │  │
│  │ [f4,f5,f6] B   │     │   Tree   │     │   Classifier │  │
│  │ [f7,f8,f9] A   │     │ Builder  │     │              │  │
│  └────────────────┘     └──────────┘     └──────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘

PREDICTION PHASE:
┌─────────────────────────────────────────────────────────────┐
│                                                              │
│  New Instance        Trained Model        Predicted Label   │
│  (unlabeled)                                                 │
│                                                              │
│  ┌────────────────┐  ┌──────────────┐   ┌──────────────┐   │
│  │ Features       │  │              │   │              │   │
│  │ [fx,fy,fz] ?   │─▶│   Trained    │──▶│  Label: A    │   │
│  │                │  │   Classifier │   │              │   │
│  └────────────────┘  └──────────────┘   └──────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Decision Tree Example */}
    <h2 className="text-3xl font-bold mt-8">Decision Tree Classifier</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Decision Tree for Loan Approval:
════════════════════════════════════════════════════════════════

                    ┌─────────────────┐
                    │  Credit Score   │
                    │    > 700 ?      │
                    └────────┬────────┘
                   Yes ┌─────┴─────┐ No
                       ▼           ▼
              ┌────────────┐  ┌────────────┐
              │  Income    │  │   DENY     │
              │  > $50K ?  │  │            │
              └─────┬──────┘  └────────────┘
             Yes ┌──┴──┐ No
                 ▼     ▼
           ┌────────┐ ┌─────────────┐
           │APPROVE │ │  Debt Ratio │
           │        │ │   < 40% ?   │
           └────────┘ └──────┬──────┘
                     Yes ┌───┴───┐ No
                         ▼       ▼
                   ┌────────┐ ┌────────┐
                   │APPROVE │ │  DENY  │
                   └────────┘ └────────┘

Rules extracted:
• IF credit_score > 700 AND income > 50K THEN Approve
• IF credit_score > 700 AND income ≤ 50K AND debt_ratio < 40% THEN Approve
• IF credit_score ≤ 700 THEN Deny`}
      </pre>
    </div>

    {/* Classification Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Classification Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Strengths</th>
            <th className="p-3 border">Weaknesses</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Decision Tree</td>
            <td className="p-3 border">Interpretable, handles mixed data</td>
            <td className="p-3 border">Prone to overfitting</td>
            <td className="p-3 border">Explainable models</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Random Forest</td>
            <td className="p-3 border">High accuracy, robust</td>
            <td className="p-3 border">Less interpretable</td>
            <td className="p-3 border">General purpose</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SVM</td>
            <td className="p-3 border">Works well in high dimensions</td>
            <td className="p-3 border">Slow on large datasets</td>
            <td className="p-3 border">Text classification</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Naive Bayes</td>
            <td className="p-3 border">Fast, works with small data</td>
            <td className="p-3 border">Assumes feature independence</td>
            <td className="p-3 border">Spam filtering</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Neural Network</td>
            <td className="p-3 border">Handles complex patterns</td>
            <td className="p-3 border">Needs lots of data, black box</td>
            <td className="p-3 border">Image, speech, NLP</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">KNN</td>
            <td className="p-3 border">Simple, no training needed</td>
            <td className="p-3 border">Slow prediction, memory heavy</td>
            <td className="p-3 border">Recommendation systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Evaluation Metrics */}
    <h2 className="text-3xl font-bold mt-8">Evaluation Metrics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Confusion Matrix and Metrics:
════════════════════════════════════════════════════════════════

                    Predicted
                 Positive  Negative
              ┌──────────┬──────────┐
    Actual    │    TP    │    FN    │  Positive
              │   (50)   │   (10)   │
              ├──────────┼──────────┤
              │    FP    │    TN    │  Negative
              │    (5)   │   (35)   │
              └──────────┴──────────┘

Metrics:
─────────────────────────────────────
Accuracy    = (TP + TN) / Total     = (50+35)/100 = 85%
Precision   = TP / (TP + FP)        = 50/55 = 91%
Recall      = TP / (TP + FN)        = 50/60 = 83%
F1 Score    = 2 × (P × R)/(P + R)   = 87%

Note: Choose metric based on business cost of FP vs FN`}
      </pre>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Classification Use Cases</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Medical Diagnosis</h3>
        <p className="text-sm">Classify patients as having disease or not based on symptoms and tests.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Email Spam Detection</h3>
        <p className="text-sm">Classify emails as spam or not-spam based on content features.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Credit Risk Assessment</h3>
        <p className="text-sm">Classify loan applicants as high-risk or low-risk.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Customer Churn Prediction</h3>
        <p className="text-sm">Classify customers as likely to churn or stay.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Classification is supervised learning that predicts categorical labels</li>
        <li>Requires labeled training data to learn the model</li>
        <li>Decision trees provide interpretable if-then rules</li>
        <li>Random Forest and Gradient Boosting often achieve best accuracy</li>
        <li>Evaluation metrics: Accuracy, Precision, Recall, F1-Score, AUC-ROC</li>
        <li>Handle class imbalance with oversampling, undersampling, or SMOTE</li>
        <li>Cross-validation helps estimate real-world performance</li>
        <li>Feature engineering often matters more than algorithm choice</li>
      </ul>
    </div>
  </div>
);

export default Classification;
