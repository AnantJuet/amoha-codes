import React from 'react';

const ClosestPair: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Closest Pair of Points
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Closest Pair of Points problem finds two points in a set that are closest to each other.
      Using Divide and Conquer, we can solve this in O(n log n) time, improving upon the naive
      O(n^2) brute force approach.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Given n points in a 2D plane, find the pair of points with the smallest Euclidean distance.</p>
      <p className="mt-4"><strong>Example:</strong></p>
      <p className="font-mono">Points: [(2,3), (12,30), (40,50), (5,1), (12,10), (3,4)]</p>
      <p className="mt-2"><strong>Closest Pair:</strong> (2,3) and (3,4) with distance sqrt(2) = 1.414</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Distance Formula</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <p className="font-mono text-center text-lg">
        d(p1, p2) = sqrt((x2-x1)^2 + (y2-y1)^2)
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Brute Force Approach</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function distance(p1, p2) {
    return Math.sqrt(
        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
    );
}

function closestPairBruteForce(points) {
    const n = points.length;
    let minDist = Infinity;
    let closestPair = null;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const d = distance(points[i], points[j]);
            if (d < minDist) {
                minDist = d;
                closestPair = [points[i], points[j]];
            }
        }
    }

    return { distance: minDist, pair: closestPair };
}

// Time: O(n^2)
// Space: O(1)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Divide and Conquer Approach</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Divide</h4>
        <p className="mt-2 text-sm">
          Sort points by x-coordinate. Split into left and right halves using
          a vertical line through the median point.
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Conquer</h4>
        <p className="mt-2 text-sm">
          Recursively find the closest pair in the left half (d_L) and
          right half (d_R). Let d = min(d_L, d_R).
        </p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Combine</h4>
        <p className="mt-2 text-sm">
          Check points in a "strip" of width 2d around the dividing line.
          The closest pair might cross the line!
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">The Strip Optimization</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Key insight for combining step:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Only check points within distance d of the dividing line</li>
        <li>Sort these points by y-coordinate</li>
        <li>For each point, only check next 7 points (geometric proof)</li>
        <li>This makes the combine step O(n) instead of O(n^2)!</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`        Left Half    |    Right Half
                     |
    *                |           *
         *           |       *
              *      |   *
                     |              *
    *       *        |     *
                     |
        <--- d --->  |  <--- d --->
                     |
              "Strip" of width 2d

The closest pair crossing the line must both
be within distance d of the line.

For each point in the strip, we only need to
check the next 7 points (sorted by y).`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function closestPair(points) {
    // Sort by x-coordinate
    const Px = [...points].sort((a, b) => a.x - b.x);
    // Pre-sort by y-coordinate
    const Py = [...points].sort((a, b) => a.y - b.y);

    return closestPairRec(Px, Py);
}

function closestPairRec(Px, Py) {
    const n = Px.length;

    // Base case: use brute force for small sets
    if (n <= 3) {
        return closestPairBruteForce(Px);
    }

    // DIVIDE: Split at median x
    const mid = Math.floor(n / 2);
    const midPoint = Px[mid];

    // Split sorted arrays
    const Lx = Px.slice(0, mid);
    const Rx = Px.slice(mid);

    // Split Py while maintaining y-order
    const Ly = [], Ry = [];
    for (const p of Py) {
        if (p.x <= midPoint.x && Ly.length < mid) {
            Ly.push(p);
        } else {
            Ry.push(p);
        }
    }

    // CONQUER: Recursively solve both halves
    const leftResult = closestPairRec(Lx, Ly);
    const rightResult = closestPairRec(Rx, Ry);

    // Get minimum of both halves
    let d = Math.min(leftResult.distance, rightResult.distance);
    let result = leftResult.distance < rightResult.distance
        ? leftResult : rightResult;

    // COMBINE: Build strip and check for closer pairs
    const strip = Py.filter(p =>
        Math.abs(p.x - midPoint.x) < d
    );

    // Check strip for closer pairs
    const stripResult = closestInStrip(strip, d);
    if (stripResult.distance < d) {
        result = stripResult;
    }

    return result;
}

function closestInStrip(strip, d) {
    let minDist = d;
    let closestPair = null;
    const n = strip.length;

    // For each point, check only next 7 points
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n && j <= i + 7; j++) {
            // Early termination if y-difference exceeds d
            if (strip[j].y - strip[i].y >= minDist) break;

            const dist = distance(strip[i], strip[j]);
            if (dist < minDist) {
                minDist = dist;
                closestPair = [strip[i], strip[j]];
            }
        }
    }

    return {
        distance: minDist,
        pair: closestPair || []
    };
}

function distance(p1, p2) {
    return Math.sqrt(
        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
    );
}

// Example usage
const points = [
    {x: 2, y: 3}, {x: 12, y: 30}, {x: 40, y: 50},
    {x: 5, y: 1}, {x: 12, y: 10}, {x: 3, y: 4}
];
console.log(closestPair(points));
// { distance: 1.414..., pair: [{x:2,y:3}, {x:3,y:4}] }`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Only Check 7 Points?</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`Consider a d x 2d rectangle in the strip:

     d
   |---|
   +---+---+
   |   |   |
 d |   |   |
   |   |   |
   +---+---+
   |   |   |
 d |   |   |
   |   |   |
   +---+---+

Each d x d square can contain at most 1 point
(otherwise those 2 points would be closer than d).

A d x 2d rectangle can have at most 8 points.
Since we're checking against the current point,
we need to check at most 7 other points.

This is why the strip check is O(n) and not O(n^2)!`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <p className="font-mono">T(n) = 2T(n/2) + O(n)</p>
      <ul className="list-disc list-inside mt-4 space-y-1">
        <li><strong>2T(n/2):</strong> Two subproblems of half size</li>
        <li><strong>O(n):</strong> Building strip and checking (linear due to 7-point limit)</li>
        <li><strong>By Master Theorem:</strong> T(n) = O(n log n)</li>
      </ul>
      <p className="mt-4 font-semibold">Total: O(n log n) including initial sort</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Brute Force</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Divide & Conquer</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Extensions</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>3D Points:</strong> Same approach works, check O(1) neighbors in strip</li>
      <li><strong>k-Closest Pairs:</strong> Modify to track k smallest distances</li>
      <li><strong>Farthest Pair:</strong> Related problem (use convex hull)</li>
      <li><strong>Dynamic Points:</strong> Use range trees for insertions/deletions</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Collision detection in games and simulations</li>
      <li>Clustering algorithms (hierarchical clustering)</li>
      <li>Geographic information systems (nearest neighbor queries)</li>
      <li>Computer graphics (spatial partitioning)</li>
      <li>Computational geometry problems</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> The clever part is the combine step. By pre-sorting by
        y-coordinate and proving that only 7 neighbors need checking, we achieve O(n) merge
        instead of O(n^2). This geometric insight is what makes the algorithm O(n log n).
      </p>
    </div>
  </div>
);

export default ClosestPair;
