import React from "react";

const InsecureDeserialization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Insecure Deserialization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Insecure Deserialization occurs when untrusted data is used to abuse application logic,
      deny service, or execute arbitrary code upon deserialization. This vulnerability arises
      when applications deserialize data from untrusted sources without proper validation,
      allowing attackers to manipulate serialized objects.
    </p>

    <h2 className="text-3xl font-bold mt-8">Serialization Explained</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Serialization Process:

SERIALIZATION:
Object (Memory) --> Byte Stream (Storage/Network)

DESERIALIZATION:
Byte Stream --> Object (Memory)

Example (Java):
// Serialization
ObjectOutputStream out = new ObjectOutputStream(file);
out.writeObject(userObject);

// Deserialization
ObjectInputStream in = new ObjectInputStream(file);
User user = (User) in.readObject();

The Problem:
- Deserialization reconstructs objects from data
- Malicious data can create unexpected objects
- Object creation may trigger dangerous operations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attack Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">RCE</td>
            <td className="p-3 border">Remote code execution via gadget chains</td>
            <td className="p-3 border">Complete system compromise</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Object Injection</td>
            <td className="p-3 border">Modify object properties</td>
            <td className="p-3 border">Privilege escalation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DoS</td>
            <td className="p-3 border">Resource exhaustion</td>
            <td className="p-3 border">Service unavailability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authentication Bypass</td>
            <td className="p-3 border">Modify auth objects</td>
            <td className="p-3 border">Unauthorized access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Gadget Chains</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Gadget Chain Concept:

A "gadget" is existing code that can be repurposed
for malicious operations during deserialization.

Chain of gadgets:
[Malicious Data] --> [Gadget 1] --> [Gadget 2] --> [RCE]

Example Attack Flow:
1. Attacker crafts serialized object
2. Object contains reference to dangerous class
3. During deserialization, magic methods execute
4. Chain of method calls leads to code execution

Common Vulnerable Libraries:
- Java: Apache Commons Collections
- PHP: Various frameworks with __wakeup()
- Python: pickle module
- Ruby: Marshal module
- .NET: BinaryFormatter`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vulnerable Code Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`VULNERABLE EXAMPLES:

// PHP - Dangerous unserialize()
$user = unserialize($_COOKIE['user_data']);
// Attacker controls cookie, can inject objects

// Python - Unsafe pickle
import pickle
data = pickle.loads(user_input)
// pickle can execute arbitrary code

// Java - Direct deserialization
ObjectInputStream ois = new ObjectInputStream(
    new ByteArrayInputStream(userInput));
Object obj = ois.readObject();
// No validation of incoming data

// Node.js - node-serialize vulnerability
var obj = serialize.unserialize(userInput);
// Can execute functions during deserialization`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Mitigation Techniques:

1. AVOID NATIVE DESERIALIZATION
   - Use JSON, XML with strict schemas
   - Avoid serializing complex objects

2. INPUT VALIDATION
   - Implement integrity checks (HMAC)
   - Validate data before deserialization
   - Use allowlists for expected classes

3. USE SAFE ALTERNATIVES
   // Java - Use ObjectInputFilter (Java 9+)
   ObjectInputFilter filter = ObjectInputFilter.Config
       .createFilter("com.myapp.*;!*");

   // Python - Use json instead of pickle
   import json
   data = json.loads(user_input)

4. ISOLATE DESERIALIZATION
   - Run in sandboxed environment
   - Limit permissions and resources

5. MONITOR AND LOG
   - Detect unusual deserialization patterns
   - Alert on suspicious activity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Never deserialize untrusted data without validation</li>
        <li>Prefer simple data formats like JSON over native serialization</li>
        <li>Implement integrity checks before deserialization</li>
        <li>Use allowlists to restrict deserializable classes</li>
        <li>Keep libraries updated to patch known gadget chains</li>
        <li>Monitor applications for deserialization-based attacks</li>
      </ul>
    </div>
  </div>
);

export default InsecureDeserialization;
