import React from "react";

const TextMining: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Text Mining
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Text mining (also called text analytics) extracts meaningful information and
      patterns from unstructured text data. It combines natural language processing,
      machine learning, and data mining techniques to derive insights from text.
    </p>

    {/* Text Mining Pipeline */}
    <h2 className="text-3xl font-bold mt-8">Text Mining Pipeline</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Text Mining Pipeline:
════════════════════════════════════════════════════════════════

Raw Text → Preprocessing → Feature Extraction → Analysis → Insights

┌─────────────────────────────────────────────────────────────────┐
│ RAW TEXT                                                        │
│ "The product is AMAZING! Best purchase I've ever made!!! :)"    │
└─────────────────────────┬───────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│ PREPROCESSING                                                    │
│ • Lowercase: "the product is amazing best purchase..."          │
│ • Remove punctuation: "the product is amazing best purchase"    │
│ • Tokenize: ["the", "product", "is", "amazing", ...]           │
│ • Remove stopwords: ["product", "amazing", "best", "purchase"]  │
│ • Stemming: ["product", "amaz", "best", "purchas"]             │
└─────────────────────────┬───────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│ FEATURE EXTRACTION                                               │
│ • Bag of Words / TF-IDF vectors                                 │
│ • Word embeddings (Word2Vec, BERT)                              │
│ • N-grams                                                        │
└─────────────────────────┬───────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│ ANALYSIS                                                         │
│ • Classification: Positive sentiment                             │
│ • Topic: Product review                                          │
│ • Entity: [Product]                                              │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Text Preprocessing */}
    <h2 className="text-3xl font-bold mt-8">Text Preprocessing Steps</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Tokenization</h3>
        <p className="text-sm mb-2">Split text into individual words or tokens.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Input: "Data mining is fascinating!"
Output: ["Data", "mining", "is", "fascinating", "!"]`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. Stopword Removal</h3>
        <p className="text-sm mb-2">Remove common words that don't add meaning.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Stopwords: "the", "is", "a", "an", "in", "on", "and"...
Input:  ["Data", "mining", "is", "fascinating"]
Output: ["Data", "mining", "fascinating"]`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Stemming & Lemmatization</h3>
        <p className="text-sm mb-2">Reduce words to their root form.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Stemming (rule-based):
"running" → "run"  |  "studies" → "studi"

Lemmatization (dictionary-based):
"running" → "run"  |  "studies" → "study"  |  "better" → "good"`}
          </pre>
        </div>
      </div>
    </div>

    {/* Feature Extraction */}
    <h2 className="text-3xl font-bold mt-8">Feature Extraction Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TF-IDF (Term Frequency - Inverse Document Frequency):
════════════════════════════════════════════════════════════════

TF(t,d) = (Count of term t in doc d) / (Total terms in doc d)
IDF(t) = log(Total documents / Documents containing term t)
TF-IDF = TF × IDF

Example:
─────────────────────────────────────────
Doc1: "data mining data analysis"
Doc2: "text mining NLP"
Doc3: "data visualization charts"

Term "data":
  TF in Doc1 = 2/4 = 0.5
  IDF = log(3/2) = 0.176
  TF-IDF = 0.5 × 0.176 = 0.088

Term "mining":
  TF in Doc1 = 1/4 = 0.25
  IDF = log(3/2) = 0.176
  TF-IDF = 0.25 × 0.176 = 0.044

Result: Document vectors for ML algorithms`}
      </pre>
    </div>

    {/* Text Mining Tasks */}
    <h2 className="text-3xl font-bold mt-8">Text Mining Tasks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Task</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Sentiment Analysis</td>
            <td className="p-3 border">Determine emotional tone</td>
            <td className="p-3 border">Review → Positive/Negative</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Topic Modeling</td>
            <td className="p-3 border">Discover hidden topics</td>
            <td className="p-3 border">News → Politics, Sports, Tech</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Named Entity Recognition</td>
            <td className="p-3 border">Identify entities</td>
            <td className="p-3 border">"Apple Inc." → Organization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Text Classification</td>
            <td className="p-3 border">Categorize documents</td>
            <td className="p-3 border">Email → Spam/Not Spam</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Document Clustering</td>
            <td className="p-3 border">Group similar docs</td>
            <td className="p-3 border">Articles → Topic groups</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Summarization</td>
            <td className="p-3 border">Generate summaries</td>
            <td className="p-3 border">Article → Key points</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Word Embeddings */}
    <h2 className="text-3xl font-bold mt-8">Word Embeddings</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="text-sm mb-2">Dense vector representations that capture semantic meaning.</p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Word2Vec / GloVe - Word as vectors:
─────────────────────────────────────────

"king"   = [0.2, 0.5, -0.1, 0.8, ...]
"queen"  = [0.3, 0.6, -0.2, 0.7, ...]
"man"    = [0.1, 0.3,  0.2, 0.5, ...]
"woman"  = [0.2, 0.4,  0.1, 0.4, ...]

Vector arithmetic:
king - man + woman ≈ queen

Similar words have similar vectors:
cosine_similarity("king", "queen") = 0.85`}
        </pre>
      </div>
    </div>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Customer Feedback Analysis</h3>
        <p className="text-sm">Analyze reviews, surveys, and social media for insights.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Email Filtering</h3>
        <p className="text-sm">Spam detection, email routing, priority classification.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Legal Document Analysis</h3>
        <p className="text-sm">Contract analysis, case research, compliance checking.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Healthcare</h3>
        <p className="text-sm">Medical record analysis, literature review, drug discovery.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Text mining extracts insights from unstructured text data</li>
        <li>Preprocessing: tokenization, stopword removal, stemming</li>
        <li>TF-IDF converts text to numerical feature vectors</li>
        <li>Word embeddings capture semantic relationships</li>
        <li>Common tasks: sentiment, classification, NER, topic modeling</li>
        <li>Modern approaches use transformers (BERT, GPT)</li>
        <li>Domain-specific preprocessing often improves results</li>
        <li>Text mining powers chatbots, search engines, and analytics</li>
      </ul>
    </div>
  </div>
);

export default TextMining;
