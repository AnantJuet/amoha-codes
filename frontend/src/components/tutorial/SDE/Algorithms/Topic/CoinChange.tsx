import React from 'react';

const CoinChange: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Coin Change Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Coin Change problem is a classic DP problem that comes in two variants: finding the
      minimum number of coins to make a given amount, and counting the total number of ways
      to make that amount. Both demonstrate fundamental DP concepts.
    </p>

    <h2 className="text-2xl font-bold mt-6">Variant 1: Minimum Coins</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Given coins of different denominations and a total amount, find the minimum number
      of coins needed to make up that amount.</p>
      <p className="mt-4"><strong>Example:</strong></p>
      <p className="font-mono">coins = [1, 2, 5]</p>
      <p className="font-mono">amount = 11</p>
      <p className="mt-2"><strong>Answer:</strong> 3 (5 + 5 + 1)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence for Minimum Coins</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <pre className="text-sm">{`dp[amount] = minimum coins to make 'amount'

dp[i] = min(dp[i], dp[i - coin] + 1) for each coin where coin <= i

Base Case: dp[0] = 0 (0 coins needed for amount 0)
Initial: dp[i] = Infinity for all i > 0`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Minimum Coins: Recursive with Memoization</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function coinChangeMemo(coins, amount) {
    const memo = {};

    function solve(remaining) {
        // Base cases
        if (remaining === 0) return 0;
        if (remaining < 0) return Infinity;

        if (remaining in memo) return memo[remaining];

        let minCoins = Infinity;

        for (const coin of coins) {
            const result = solve(remaining - coin);
            if (result !== Infinity) {
                minCoins = Math.min(minCoins, result + 1);
            }
        }

        memo[remaining] = minCoins;
        return minCoins;
    }

    const result = solve(amount);
    return result === Infinity ? -1 : result;
}

// Time: O(amount * n) where n = number of coins
// Space: O(amount)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Minimum Coins: Tabulation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function coinChangeTab(coins, amount) {
    // dp[i] = minimum coins for amount i
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    // For each amount from 1 to target
    for (let i = 1; i <= amount; i++) {
        // Try each coin
        for (const coin of coins) {
            if (coin <= i && dp[i - coin] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example
console.log(coinChangeTab([1, 2, 5], 11)); // Output: 3

// Time: O(amount * n)
// Space: O(amount)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">DP Table for Minimum Coins</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`coins = [1, 2, 5], amount = 11

Amount:  0  1  2  3  4  5  6  7  8  9  10  11
dp[]:    0  1  1  2  2  1  2  2  3  3   2   3

Explanation:
- dp[0] = 0 (base case)
- dp[1] = min(dp[0]+1) = 1 (use coin 1)
- dp[2] = min(dp[1]+1, dp[0]+1) = 1 (use coin 2)
- dp[5] = min(dp[4]+1, dp[3]+1, dp[0]+1) = 1 (use coin 5)
- dp[11] = min(dp[10]+1, dp[9]+1, dp[6]+1) = min(3, 4, 3) = 3`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variant 2: Count Ways</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Given coins of different denominations and a total amount, count the number of
      different ways to make up that amount.</p>
      <p className="mt-4"><strong>Example:</strong></p>
      <p className="font-mono">coins = [1, 2, 5]</p>
      <p className="font-mono">amount = 5</p>
      <p className="mt-2"><strong>Answer:</strong> 4 ways</p>
      <p className="text-sm">(5), (2+2+1), (2+1+1+1), (1+1+1+1+1)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence for Count Ways</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <pre className="text-sm">{`dp[i][j] = ways to make amount j using first i coins

dp[i][j] = dp[i-1][j]              // Exclude coin i
         + dp[i][j - coins[i-1]]   // Include coin i (can use again)

Base Case: dp[i][0] = 1 (one way to make 0: use no coins)
           dp[0][j] = 0 for j > 0 (no coins, no way)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Count Ways: 2D DP Solution</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function coinChangeWays2D(coins, amount) {
    const n = coins.length;
    const dp = Array(n + 1).fill(null)
        .map(() => Array(amount + 1).fill(0));

    // Base case: one way to make amount 0
    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }

    // Fill table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= amount; j++) {
            // Exclude current coin
            dp[i][j] = dp[i - 1][j];

            // Include current coin (if possible)
            if (coins[i - 1] <= j) {
                dp[i][j] += dp[i][j - coins[i - 1]];
            }
        }
    }

    return dp[n][amount];
}

// Time: O(n * amount)
// Space: O(n * amount)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Count Ways: 1D DP Solution</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function coinChangeWays1D(coins, amount) {
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;  // One way to make amount 0

    // Important: iterate coins first, then amounts
    // This ensures we count combinations, not permutations
    for (const coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }

    return dp[amount];
}

// Example
console.log(coinChangeWays1D([1, 2, 5], 5)); // Output: 4

// Time: O(n * amount)
// Space: O(amount)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Combinations vs Permutations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Combinations (Order doesn't matter)</h4>
        <p className="mt-2 text-sm">Coins loop outside, amount loop inside</p>
        <pre className="text-xs mt-2 font-mono">{`for coin in coins:
    for j in range(coin, amount+1):
        dp[j] += dp[j-coin]`}</pre>
        <p className="mt-2 text-xs">1+2 and 2+1 counted as same</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Permutations (Order matters)</h4>
        <p className="mt-2 text-sm">Amount loop outside, coins loop inside</p>
        <pre className="text-xs mt-2 font-mono">{`for j in range(1, amount+1):
    for coin in coins:
        if coin <= j:
            dp[j] += dp[j-coin]`}</pre>
        <p className="mt-2 text-xs">1+2 and 2+1 counted separately</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Which Coins to Use</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function coinChangeWithCoins(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    const parent = Array(amount + 1).fill(-1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i && dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
                parent[i] = coin;  // Store which coin was used
            }
        }
    }

    if (dp[amount] === Infinity) return { count: -1, coins: [] };

    // Reconstruct solution
    const usedCoins = [];
    let remaining = amount;
    while (remaining > 0) {
        usedCoins.push(parent[remaining]);
        remaining -= parent[remaining];
    }

    return { count: dp[amount], coins: usedCoins };
}

console.log(coinChangeWithCoins([1, 2, 5], 11));
// { count: 3, coins: [5, 5, 1] }`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Min Coins</td>
            <td className="p-3 border">Tabulation</td>
            <td className="p-3 border">O(n * amount)</td>
            <td className="p-3 border">O(amount)</td>
          </tr>
          <tr>
            <td className="p-3 border">Count Ways</td>
            <td className="p-3 border">2D DP</td>
            <td className="p-3 border">O(n * amount)</td>
            <td className="p-3 border">O(n * amount)</td>
          </tr>
          <tr>
            <td className="p-3 border">Count Ways</td>
            <td className="p-3 border">1D DP</td>
            <td className="p-3 border">O(n * amount)</td>
            <td className="p-3 border">O(amount)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Unbounded Knapsack:</strong> Same item can be used multiple times</li>
      <li><strong>Perfect Squares:</strong> Min perfect squares summing to n</li>
      <li><strong>Combination Sum:</strong> Find all combinations that sum to target</li>
      <li><strong>Integer Break:</strong> Max product of integers summing to n</li>
      <li><strong>Minimum Cost for Tickets:</strong> Min cost to travel given days</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> Coin Change is an "unbounded" knapsack variant where
        each item (coin) can be used unlimited times. The key difference from 0/1 knapsack
        is using dp[i][j-coin] instead of dp[i-1][j-coin] when including an item.
      </p>
    </div>
  </div>
);

export default CoinChange;
