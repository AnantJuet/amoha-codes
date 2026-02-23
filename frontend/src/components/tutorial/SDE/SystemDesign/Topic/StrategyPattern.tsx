import React from 'react';

const StrategyPattern: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Strategy Pattern
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Strategy Pattern is a behavioral design pattern that defines a family of algorithms,
      encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary
      independently from clients that use it. It enables selecting an algorithm at runtime
      without modifying the context that uses the algorithm.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Components</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Strategy Interface</h4>
        <p className="mt-2 text-sm">Common interface for all supported algorithms</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Concrete Strategies</h4>
        <p className="mt-2 text-sm">Implementations of different algorithms</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Context</h4>
        <p className="mt-2 text-sm">Maintains reference to strategy and delegates work</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Implementation</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
  validate(): boolean;
}

// Concrete strategies
class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  private cvv: string;
  private expiryDate: string;

  constructor(cardNumber: string, cvv: string, expiryDate: string) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.expiryDate = expiryDate;
  }

  validate(): boolean {
    // Validate credit card details
    return this.cardNumber.length === 16 && this.cvv.length === 3;
  }

  pay(amount: number): void {
    console.log(\`Paid \$\${amount} using Credit Card ending in \${this.cardNumber.slice(-4)}\`);
  }
}

class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  validate(): boolean {
    return this.email.includes('@');
  }

  pay(amount: number): void {
    console.log(\`Paid \$\${amount} using PayPal account \${this.email}\`);
  }
}

class CryptoPayment implements PaymentStrategy {
  private walletAddress: string;

  constructor(walletAddress: string) {
    this.walletAddress = walletAddress;
  }

  validate(): boolean {
    return this.walletAddress.length > 20;
  }

  pay(amount: number): void {
    console.log(\`Paid \$\${amount} equivalent in crypto to wallet \${this.walletAddress.slice(0, 10)}...\`);
  }
}

// Context
class ShoppingCart {
  private items: { name: string; price: number }[] = [];
  private paymentStrategy?: PaymentStrategy;

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

  setPaymentStrategy(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  checkout(): void {
    if (!this.paymentStrategy) {
      throw new Error('Please select a payment method');
    }
    if (!this.paymentStrategy.validate()) {
      throw new Error('Invalid payment details');
    }
    this.paymentStrategy.pay(this.getTotal());
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem('Laptop', 999);
cart.addItem('Mouse', 49);

// Pay with credit card
cart.setPaymentStrategy(new CreditCardPayment('1234567890123456', '123', '12/25'));
cart.checkout(); // Paid $1048 using Credit Card ending in 3456

// Or pay with PayPal
cart.setPaymentStrategy(new PayPalPayment('user@email.com'));
cart.checkout(); // Paid $1048 using PayPal account user@email.com`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Example: Sorting Strategies</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`interface SortStrategy<T> {
  sort(data: T[]): T[];
}

class QuickSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    if (data.length <= 1) return data;
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter(x => x < pivot);
    const middle = data.filter(x => x === pivot);
    const right = data.filter(x => x > pivot);
    return [...this.sort(left), ...middle, ...this.sort(right)];
  }
}

class MergeSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    if (data.length <= 1) return data;
    const mid = Math.floor(data.length / 2);
    const left = this.sort(data.slice(0, mid));
    const right = this.sort(data.slice(mid));
    return this.merge(left, right);
  }

  private merge(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let l = 0, r = 0;
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    return [...result, ...left.slice(l), ...right.slice(r)];
  }
}

class BubbleSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}

class DataSorter<T> {
  private strategy: SortStrategy<T>;

  constructor(strategy: SortStrategy<T>) {
    this.strategy = strategy;
  }

  setStrategy(strategy: SortStrategy<T>): void {
    this.strategy = strategy;
  }

  sortData(data: T[]): T[] {
    console.log(\`Sorting using \${this.strategy.constructor.name}\`);
    return this.strategy.sort(data);
  }
}

// Usage - choose strategy based on data size
const data = [64, 34, 25, 12, 22, 11, 90];
const sorter = new DataSorter<number>(new QuickSort());
console.log(sorter.sortData(data)); // Uses QuickSort

// Switch to different strategy at runtime
sorter.setStrategy(new MergeSort());
console.log(sorter.sortData(data)); // Uses MergeSort`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example: Compression Strategies</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`interface CompressionStrategy {
  compress(data: string): string;
  decompress(data: string): string;
  getExtension(): string;
}

class ZipCompression implements CompressionStrategy {
  compress(data: string): string {
    console.log('Compressing using ZIP algorithm');
    return \`ZIP[\${data}]\`;
  }
  decompress(data: string): string {
    return data.replace('ZIP[', '').replace(']', '');
  }
  getExtension(): string {
    return '.zip';
  }
}

class GzipCompression implements CompressionStrategy {
  compress(data: string): string {
    console.log('Compressing using GZIP algorithm');
    return \`GZIP[\${data}]\`;
  }
  decompress(data: string): string {
    return data.replace('GZIP[', '').replace(']', '');
  }
  getExtension(): string {
    return '.gz';
  }
}

class FileCompressor {
  private strategy: CompressionStrategy;

  constructor(strategy: CompressionStrategy) {
    this.strategy = strategy;
  }

  compressFile(filename: string, content: string): { name: string; data: string } {
    const compressed = this.strategy.compress(content);
    return {
      name: filename + this.strategy.getExtension(),
      data: compressed
    };
  }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Strategy vs Other Patterns</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Strategy vs State</h4>
        <p className="mt-2 text-sm">
          <strong>Strategy:</strong> Algorithm selection is typically set once or changed explicitly by client<br />
          <strong>State:</strong> State changes automatically based on internal conditions
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Strategy vs Template Method</h4>
        <p className="mt-2 text-sm">
          <strong>Strategy:</strong> Uses composition, entire algorithm is replaced<br />
          <strong>Template:</strong> Uses inheritance, only certain steps are overridden
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Strategy Pattern</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When you have multiple algorithms for a specific task</li>
      <li>When you want to switch algorithms at runtime</li>
      <li>When you have many related classes that differ only in behavior</li>
      <li>When you need to isolate the algorithm logic from the code that uses it</li>
      <li>When a class has a massive conditional statement for selecting algorithm variants</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Benefits</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Open/Closed Principle:</strong> New strategies without changing context</li>
      <li><strong>Eliminates conditionals:</strong> Replace if/switch with polymorphism</li>
      <li><strong>Runtime flexibility:</strong> Change behavior dynamically</li>
      <li><strong>Testability:</strong> Strategies can be tested in isolation</li>
      <li><strong>Code reuse:</strong> Strategies can be shared across contexts</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Design Tip:</strong> If you have a class with a big switch statement that selects
        behavior based on some condition, consider refactoring it to use the Strategy pattern.
        Each case in the switch becomes a separate strategy class.
      </p>
    </div>
  </div>
);

export default StrategyPattern;
