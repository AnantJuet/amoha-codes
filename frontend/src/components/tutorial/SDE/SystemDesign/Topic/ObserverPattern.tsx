import React from 'react';

const ObserverPattern: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Observer Pattern
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Observer Pattern is a behavioral design pattern that defines a one-to-many dependency
      between objects so that when one object (the subject) changes state, all its dependents
      (observers) are notified and updated automatically. It's the foundation of event-driven
      programming and the publish-subscribe model.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Components</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Subject (Observable)</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Maintains a list of observers</li>
          <li>Provides methods to attach/detach observers</li>
          <li>Notifies observers of state changes</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Observer</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Defines an update interface</li>
          <li>Receives notifications from subject</li>
          <li>Updates its state based on subject</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Implementation</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Observer interface
interface Observer {
  update(data: any): void;
}

// Subject interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Concrete Subject
class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private latestNews: string = '';

  attach(observer: Observer): void {
    const exists = this.observers.includes(observer);
    if (!exists) {
      this.observers.push(observer);
      console.log('Observer attached');
    }
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log('Observer detached');
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.latestNews);
    }
  }

  setNews(news: string): void {
    this.latestNews = news;
    console.log(\`NewsAgency: New article - \${news}\`);
    this.notify();
  }
}

// Concrete Observers
class NewsChannel implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(news: string): void {
    console.log(\`\${this.name} received news: \${news}\`);
  }
}

// Usage
const agency = new NewsAgency();

const cnn = new NewsChannel('CNN');
const bbc = new NewsChannel('BBC');
const fox = new NewsChannel('Fox News');

agency.attach(cnn);
agency.attach(bbc);
agency.attach(fox);

agency.setNews('Breaking: New technology breakthrough!');
// Output:
// NewsAgency: New article - Breaking: New technology breakthrough!
// CNN received news: Breaking: New technology breakthrough!
// BBC received news: Breaking: New technology breakthrough!
// Fox News received news: Breaking: New technology breakthrough!

agency.detach(fox);
agency.setNews('Update: Market hits record high');`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Example: Stock Price Monitor</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`interface StockObserver {
  update(stock: string, price: number): void;
}

class StockMarket {
  private observers: Map<string, StockObserver[]> = new Map();
  private prices: Map<string, number> = new Map();

  subscribe(stock: string, observer: StockObserver): void {
    if (!this.observers.has(stock)) {
      this.observers.set(stock, []);
    }
    this.observers.get(stock)!.push(observer);
  }

  unsubscribe(stock: string, observer: StockObserver): void {
    const stockObservers = this.observers.get(stock);
    if (stockObservers) {
      const index = stockObservers.indexOf(observer);
      if (index !== -1) {
        stockObservers.splice(index, 1);
      }
    }
  }

  updatePrice(stock: string, price: number): void {
    this.prices.set(stock, price);
    this.notifyObservers(stock, price);
  }

  private notifyObservers(stock: string, price: number): void {
    const stockObservers = this.observers.get(stock);
    if (stockObservers) {
      stockObservers.forEach(observer => observer.update(stock, price));
    }
  }
}

class StockAlert implements StockObserver {
  private name: string;
  private threshold: number;

  constructor(name: string, threshold: number) {
    this.name = name;
    this.threshold = threshold;
  }

  update(stock: string, price: number): void {
    if (price > this.threshold) {
      console.log(\`\${this.name}: Alert! \${stock} is above \$\${this.threshold}: \$\${price}\`);
    }
  }
}

class StockDisplay implements StockObserver {
  update(stock: string, price: number): void {
    console.log(\`Display: \${stock} - \$\${price}\`);
  }
}

// Usage
const market = new StockMarket();
const display = new StockDisplay();
const alert = new StockAlert('High Value Alert', 150);

market.subscribe('AAPL', display);
market.subscribe('AAPL', alert);
market.subscribe('GOOGL', display);

market.updatePrice('AAPL', 145);  // Display shows, no alert
market.updatePrice('AAPL', 155);  // Display shows, alert triggered
market.updatePrice('GOOGL', 2800); // Only display shows`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Push vs Pull Model</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Push Model</h4>
        <p className="mt-2 text-sm">Subject sends detailed data to observers when notifying them</p>
        <pre className="mt-2 text-xs font-mono">{`observer.update(data);`}</pre>
        <p className="mt-2 text-sm"><strong>Pros:</strong> Observers get all needed data immediately</p>
        <p className="text-sm"><strong>Cons:</strong> May send unnecessary data</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Pull Model</h4>
        <p className="mt-2 text-sm">Subject only notifies, observers pull data they need</p>
        <pre className="mt-2 text-xs font-mono">{`observer.update(this);
// Observer calls subject.getData()`}</pre>
        <p className="mt-2 text-sm"><strong>Pros:</strong> Observers get only needed data</p>
        <p className="text-sm"><strong>Cons:</strong> May require multiple calls</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Event Emitter Implementation</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`type EventCallback = (...args: any[]) => void;

class EventEmitter {
  private events: Map<string, EventCallback[]> = new Map();

  on(event: string, callback: EventCallback): void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
  }

  off(event: string, callback: EventCallback): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index !== -1) {
        callbacks.splice(index, 1);
      }
    }
  }

  emit(event: string, ...args: any[]): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(...args));
    }
  }

  once(event: string, callback: EventCallback): void {
    const onceWrapper = (...args: any[]) => {
      callback(...args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
  }
}

// Usage
const emitter = new EventEmitter();

emitter.on('userLoggedIn', (user) => {
  console.log(\`Welcome, \${user.name}!\`);
});

emitter.on('userLoggedIn', (user) => {
  console.log(\`Loading \${user.name}'s dashboard...\`);
});

emitter.emit('userLoggedIn', { name: 'John', id: 123 });`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Use Cases</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>GUI Events:</strong> Button clicks, form submissions, mouse movements</li>
      <li><strong>Data Binding:</strong> React/Vue reactivity systems</li>
      <li><strong>Message Queues:</strong> Pub/Sub systems like Redis, RabbitMQ</li>
      <li><strong>WebSockets:</strong> Real-time notifications</li>
      <li><strong>Model-View:</strong> MVC/MVVM patterns</li>
      <li><strong>Distributed Systems:</strong> Event-driven microservices</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Benefits and Drawbacks</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Benefits</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Loose coupling between subject and observers</li>
          <li>Open/Closed Principle: new observers without modification</li>
          <li>Establishes runtime relationships</li>
          <li>Supports broadcast communication</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Drawbacks</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Random order of observer notifications</li>
          <li>Memory leaks if observers not properly removed</li>
          <li>Unexpected updates can cause cascading effects</li>
          <li>Debugging can be challenging</li>
        </ul>
      </div>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Best Practice:</strong> Always provide a way to unsubscribe observers to prevent
        memory leaks. In component-based frameworks, remember to unsubscribe in cleanup/unmount
        lifecycle methods.
      </p>
    </div>
  </div>
);

export default ObserverPattern;
