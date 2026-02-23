import React from 'react';

const HuffmanCoding: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Huffman Coding
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Huffman Coding is a lossless data compression algorithm that uses variable-length codes to
      represent characters. Characters that occur more frequently are assigned shorter codes, while
      less frequent characters get longer codes. This results in optimal prefix-free encoding.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Prefix-free code:</strong> No code is a prefix of another (unambiguous decoding)</li>
      <li><strong>Variable-length encoding:</strong> Different characters have different code lengths</li>
      <li><strong>Optimal:</strong> Minimizes total number of bits for encoding</li>
      <li><strong>Greedy approach:</strong> Always combine two smallest frequency nodes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Count frequency of each character in the input</li>
      <li>Create a leaf node for each character and add to a min-heap</li>
      <li>While heap has more than one node:</li>
      <li className="ml-6">Extract two nodes with minimum frequency</li>
      <li className="ml-6">Create a new internal node with these two as children</li>
      <li className="ml-6">Frequency of new node = sum of children's frequencies</li>
      <li className="ml-6">Add new node back to heap</li>
      <li>Remaining node is the root of Huffman tree</li>
      <li>Traverse tree to assign codes (left=0, right=1)</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Input: "ABRACADABRA"</p>
      <p className="mt-2">Character frequencies: A=5, B=2, R=2, C=1, D=1</p>

      <div className="mt-4 font-mono text-sm space-y-3">
        <p className="text-blue-600 font-bold">Building Huffman Tree:</p>
        <p>Initial heap: [(C,1), (D,1), (B,2), (R,2), (A,5)]</p>
        <p className="mt-2">Step 1: Combine C(1) + D(1) = CD(2)</p>
        <p>Heap: [(B,2), (R,2), (CD,2), (A,5)]</p>
        <p className="mt-2">Step 2: Combine B(2) + R(2) = BR(4)</p>
        <p>Heap: [(CD,2), (BR,4), (A,5)]</p>
        <p className="mt-2">Step 3: Combine CD(2) + BR(4) = CDBR(6)</p>
        <p>Heap: [(A,5), (CDBR,6)]</p>
        <p className="mt-2">Step 4: Combine A(5) + CDBR(6) = Root(11)</p>

        <p className="text-green-600 font-bold mt-4">Huffman Codes:</p>
        <p>A = 0 (1 bit)</p>
        <p>B = 100 (3 bits)</p>
        <p>R = 101 (3 bits)</p>
        <p>C = 110 (3 bits)</p>
        <p>D = 111 (3 bits)</p>

        <p className="mt-4">Original: 11 chars x 8 bits = 88 bits</p>
        <p>Encoded: 5x1 + 2x3 + 2x3 + 1x3 + 1x3 = 23 bits</p>
        <p className="text-green-600 font-bold">Compression ratio: 74% reduction!</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent].freq <= this.heap[index].freq) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }

    bubbleDown(index) {
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < this.heap.length && this.heap[left].freq < this.heap[smallest].freq) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right].freq < this.heap[smallest].freq) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

class HuffmanNode {
    constructor(char, freq) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

function buildHuffmanTree(text) {
    // Count frequencies
    const freq = {};
    for (const char of text) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Create min heap with leaf nodes
    const heap = new MinHeap();
    for (const [char, count] of Object.entries(freq)) {
        heap.insert(new HuffmanNode(char, count));
    }

    // Build tree by combining nodes
    while (heap.size() > 1) {
        const left = heap.extractMin();
        const right = heap.extractMin();

        const merged = new HuffmanNode(null, left.freq + right.freq);
        merged.left = left;
        merged.right = right;

        heap.insert(merged);
    }

    return heap.extractMin();
}

function generateCodes(root, code = '', codes = {}) {
    if (!root) return codes;

    if (root.char !== null) {
        codes[root.char] = code || '0';
    }

    generateCodes(root.left, code + '0', codes);
    generateCodes(root.right, code + '1', codes);

    return codes;
}

// Example
const text = "ABRACADABRA";
const tree = buildHuffmanTree(text);
const codes = generateCodes(tree);
console.log(codes);
// Output: { A: '0', B: '100', R: '101', C: '110', D: '111' }`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Encoding and Decoding</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function encode(text, codes) {
    return text.split('').map(char => codes[char]).join('');
}

function decode(encodedText, root) {
    let result = '';
    let current = root;

    for (const bit of encodedText) {
        current = bit === '0' ? current.left : current.right;

        if (current.char !== null) {
            result += current.char;
            current = root;
        }
    }

    return result;
}

// Example
const text = "ABRACADABRA";
const tree = buildHuffmanTree(text);
const codes = generateCodes(tree);

const encoded = encode(text, codes);
console.log("Encoded:", encoded);
// Output: "01001010110011101001010"

const decoded = decode(encoded, tree);
console.log("Decoded:", decoded);
// Output: "ABRACADABRA"`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Building frequency table</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Building Huffman tree</td>
            <td className="p-3 border">O(d log d)</td>
          </tr>
          <tr>
            <td className="p-3 border">Encoding</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Decoding</td>
            <td className="p-3 border">O(m)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm">where n = input length, d = unique characters, m = encoded bits</p>
    <p className="mt-2"><strong>Space Complexity:</strong> O(d) for the tree and codes</p>

    <h2 className="text-2xl font-bold mt-6">Properties of Huffman Codes</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Prefix-Free</h4>
        <p className="text-sm mt-1">No code is a prefix of another code, enabling unambiguous decoding</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Optimal</h4>
        <p className="text-sm mt-1">Produces minimum weighted path length (optimal for symbol-by-symbol encoding)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Lossless:</strong> Original data can be perfectly reconstructed</li>
      <li><strong>Optimal:</strong> Best possible compression for symbol-by-symbol encoding</li>
      <li><strong>Widely used:</strong> Foundation for many compression formats</li>
      <li><strong>Simple:</strong> Relatively easy to implement</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Two-pass:</strong> Requires scanning input twice (frequency count + encode)</li>
      <li><strong>Static:</strong> Code table must be stored or transmitted with data</li>
      <li><strong>Not adaptive:</strong> Cannot adjust to changing data patterns</li>
      <li><strong>Overhead:</strong> Need to store/transmit code table</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>DEFLATE (used in ZIP, GZIP, PNG)</li>
      <li>JPEG image compression (part of the algorithm)</li>
      <li>MP3 audio compression</li>
      <li>Fax machines (Modified Huffman coding)</li>
      <li>HTTP/2 header compression (HPACK)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Variations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Adaptive Huffman:</strong> Updates tree as data is processed</li>
      <li><strong>Canonical Huffman:</strong> Standardized code assignment for easier storage</li>
      <li><strong>Extended Huffman:</strong> Groups symbols before encoding</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Huffman coding is optimal only when symbol probabilities are powers of 1/2.
        For other cases, arithmetic coding can achieve better compression ratios, though Huffman
        remains popular due to its simplicity and speed.
      </p>
    </div>
  </div>
);

export default HuffmanCoding;
