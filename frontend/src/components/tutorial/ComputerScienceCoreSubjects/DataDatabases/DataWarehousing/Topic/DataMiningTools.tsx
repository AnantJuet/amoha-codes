import React from "react";

const DataMiningTools: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Mining Tools and Platforms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data mining tools provide the software environment for building, training, and
      deploying mining models. They range from open-source libraries to enterprise
      platforms with GUI-based workflows.
    </p>

    {/* Tool Categories */}
    <h2 className="text-3xl font-bold mt-8">Tool Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Mining Tool Landscape:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    DATA MINING TOOLS                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  PROGRAMMING LIBRARIES                                          │
│  ├── Python: Scikit-learn, TensorFlow, PyTorch, Pandas         │
│  ├── R: caret, randomForest, xgboost                           │
│  └── Java: Weka, MOA, ELKI                                      │
│                                                                  │
│  GUI-BASED TOOLS                                                 │
│  ├── KNIME (open source)                                        │
│  ├── RapidMiner                                                 │
│  ├── Orange                                                      │
│  └── Weka Explorer                                               │
│                                                                  │
│  ENTERPRISE PLATFORMS                                            │
│  ├── SAS Enterprise Miner                                       │
│  ├── IBM SPSS Modeler                                           │
│  ├── Microsoft Azure ML                                         │
│  └── Google Vertex AI                                           │
│                                                                  │
│  CLOUD ML SERVICES                                               │
│  ├── AWS SageMaker                                              │
│  ├── Google Cloud AutoML                                        │
│  ├── Azure Machine Learning                                     │
│  └── Databricks MLflow                                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Popular Tools Comparison */}
    <h2 className="text-3xl font-bold mt-8">Popular Tools Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Cost</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Scikit-learn</td>
            <td className="p-3 border">Python Library</td>
            <td className="p-3 border">Traditional ML algorithms</td>
            <td className="p-3 border">Free</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TensorFlow/PyTorch</td>
            <td className="p-3 border">Deep Learning Framework</td>
            <td className="p-3 border">Neural networks, deep learning</td>
            <td className="p-3 border">Free</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">KNIME</td>
            <td className="p-3 border">Visual Workflow</td>
            <td className="p-3 border">No-code analytics</td>
            <td className="p-3 border">Free (Community)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RapidMiner</td>
            <td className="p-3 border">Visual Platform</td>
            <td className="p-3 border">Business users</td>
            <td className="p-3 border">Freemium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Weka</td>
            <td className="p-3 border">Java-based GUI</td>
            <td className="p-3 border">Education, research</td>
            <td className="p-3 border">Free</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SAS Enterprise Miner</td>
            <td className="p-3 border">Enterprise Platform</td>
            <td className="p-3 border">Large enterprises</td>
            <td className="p-3 border">Commercial</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AWS SageMaker</td>
            <td className="p-3 border">Cloud ML Platform</td>
            <td className="p-3 border">Scalable ML pipelines</td>
            <td className="p-3 border">Pay-per-use</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Python Libraries */}
    <h2 className="text-3xl font-bold mt-8">Python Data Mining Ecosystem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Python Data Mining Stack:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                     VISUALIZATION                                │
│         matplotlib  │  seaborn  │  plotly  │  altair           │
├─────────────────────────────────────────────────────────────────┤
│                     MACHINE LEARNING                             │
│    scikit-learn │ XGBoost │ LightGBM │ CatBoost               │
├─────────────────────────────────────────────────────────────────┤
│                     DEEP LEARNING                                │
│      TensorFlow  │  PyTorch  │  Keras  │  JAX                  │
├─────────────────────────────────────────────────────────────────┤
│                     NLP & TEXT                                   │
│        NLTK  │  spaCy  │  Gensim  │  Transformers              │
├─────────────────────────────────────────────────────────────────┤
│                     DATA MANIPULATION                            │
│           pandas  │  numpy  │  scipy  │  polars                │
└─────────────────────────────────────────────────────────────────┘

Example:
─────────────────────────────────────────
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y)
model = RandomForestClassifier()
model.fit(X_train, y_train)
accuracy = model.score(X_test, y_test)`}
      </pre>
    </div>

    {/* GUI Tools */}
    <h2 className="text-3xl font-bold mt-8">GUI-Based Tools</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">KNIME</h3>
        <p className="text-sm mb-2">Visual workflow builder with drag-and-drop nodes.</p>
        <ul className="list-disc list-inside text-xs space-y-1">
          <li>2000+ nodes available</li>
          <li>Python/R integration</li>
          <li>Free community edition</li>
          <li>Great for prototyping</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">RapidMiner</h3>
        <p className="text-sm mb-2">End-to-end data science platform.</p>
        <ul className="list-disc list-inside text-xs space-y-1">
          <li>Auto-model suggestions</li>
          <li>Built-in data prep</li>
          <li>Model deployment</li>
          <li>Enterprise features</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Orange</h3>
        <p className="text-sm mb-2">Python-based visual programming.</p>
        <ul className="list-disc list-inside text-xs space-y-1">
          <li>Interactive visualizations</li>
          <li>Educational focus</li>
          <li>Bioinformatics extensions</li>
          <li>Completely free</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Weka</h3>
        <p className="text-sm mb-2">Classic ML workbench from University of Waikato.</p>
        <ul className="list-disc list-inside text-xs space-y-1">
          <li>Java-based, cross-platform</li>
          <li>Extensive algorithm library</li>
          <li>Academic standard</li>
          <li>API and GUI modes</li>
        </ul>
      </div>
    </div>

    {/* Selection Criteria */}
    <h2 className="text-3xl font-bold mt-8">Tool Selection Criteria</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-200">Team Skills</h3>
        <p className="text-sm">Programmers → Libraries; Business users → GUI tools</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold mb-2 text-green-800 dark:text-green-200">Data Scale</h3>
        <p className="text-sm">Big data → Spark MLlib, cloud platforms; Small → Desktop tools</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-200">Deployment</h3>
        <p className="text-sm">Production → Cloud ML; Research → Flexible libraries</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Python (Scikit-learn, TensorFlow) dominates data science</li>
        <li>GUI tools (KNIME, RapidMiner) enable no-code analytics</li>
        <li>Cloud platforms (SageMaker, Vertex AI) handle scale and deployment</li>
        <li>Open source tools are sufficient for most projects</li>
        <li>Enterprise tools add governance, security, and support</li>
        <li>Choose based on team skills, data scale, and deployment needs</li>
        <li>Multiple tools often used together in a pipeline</li>
        <li>Tool knowledge is less important than understanding algorithms</li>
      </ul>
    </div>
  </div>
);

export default DataMiningTools;
