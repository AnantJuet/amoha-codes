import React from 'react';

const AdapterPattern: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Adapter Pattern
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Adapter Pattern is a structural design pattern that allows objects with incompatible
      interfaces to collaborate. It acts as a bridge between two incompatible interfaces by
      wrapping an object with an incompatible interface and exposing a compatible interface
      that clients expect.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Real-World Analogy</h4>
      <p className="mt-2 text-sm">
        Think of a power adapter when traveling internationally. Your device has a plug that
        fits your country's outlets, but foreign outlets are different. The adapter converts
        one interface (your plug) to work with another interface (the foreign outlet).
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Components</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Target Interface</h4>
        <p className="mt-2 text-sm">The interface that the client expects and uses</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Adaptee</h4>
        <p className="mt-2 text-sm">The existing class with an incompatible interface</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Adapter</h4>
        <p className="mt-2 text-sm">Wraps the adaptee and implements the target interface</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">Client</h4>
        <p className="mt-2 text-sm">Uses objects through the target interface</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Object Adapter (Composition)</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Target interface - what the client expects
interface MediaPlayer {
  play(filename: string): void;
}

// Adaptee - existing class with different interface
class AdvancedMediaPlayer {
  playVlc(filename: string): void {
    console.log(\`Playing VLC file: \${filename}\`);
  }

  playMp4(filename: string): void {
    console.log(\`Playing MP4 file: \${filename}\`);
  }
}

// Adapter - wraps adaptee and implements target interface
class MediaAdapter implements MediaPlayer {
  private advancedPlayer: AdvancedMediaPlayer;

  constructor() {
    this.advancedPlayer = new AdvancedMediaPlayer();
  }

  play(filename: string): void {
    const extension = filename.split('.').pop()?.toLowerCase();

    switch (extension) {
      case 'vlc':
        this.advancedPlayer.playVlc(filename);
        break;
      case 'mp4':
        this.advancedPlayer.playMp4(filename);
        break;
      default:
        console.log(\`Format \${extension} not supported by adapter\`);
    }
  }
}

// Client code using the target interface
class AudioPlayer implements MediaPlayer {
  private adapter: MediaAdapter;

  constructor() {
    this.adapter = new MediaAdapter();
  }

  play(filename: string): void {
    const extension = filename.split('.').pop()?.toLowerCase();

    if (extension === 'mp3') {
      console.log(\`Playing MP3 file: \${filename}\`);
    } else if (extension === 'vlc' || extension === 'mp4') {
      this.adapter.play(filename);
    } else {
      console.log(\`Format \${extension} not supported\`);
    }
  }
}

// Usage
const player = new AudioPlayer();
player.play('song.mp3');    // Playing MP3 file: song.mp3
player.play('movie.mp4');   // Playing MP4 file: movie.mp4
player.play('video.vlc');   // Playing VLC file: video.vlc`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Class Adapter (Inheritance)</h2>
    <p className="leading-relaxed">
      In languages that support multiple inheritance, the adapter can inherit from both the
      target and adaptee. In TypeScript/JavaScript, we can achieve this using mixins or
      implementing an interface while extending a class.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Target interface
interface JsonLogger {
  logJson(data: object): void;
}

// Adaptee - legacy XML logger
class XmlLogger {
  logXml(xmlData: string): void {
    console.log(\`XML Log: \${xmlData}\`);
  }
}

// Class Adapter - extends adaptee, implements target
class JsonToXmlLoggerAdapter extends XmlLogger implements JsonLogger {
  logJson(data: object): void {
    // Convert JSON to XML format
    const xmlData = this.jsonToXml(data);
    this.logXml(xmlData);
  }

  private jsonToXml(data: object): string {
    // Simple JSON to XML conversion
    let xml = '<data>';
    for (const [key, value] of Object.entries(data)) {
      xml += \`<\${key}>\${value}</\${key}>\`;
    }
    xml += '</data>';
    return xml;
  }
}

// Usage
const logger: JsonLogger = new JsonToXmlLoggerAdapter();
logger.logJson({ name: 'John', age: 30 });
// XML Log: <data><name>John</name><age>30</age></data>`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Example: Payment Gateway Integration</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4 font-mono text-sm">
      <pre>{`// Your application's payment interface
interface PaymentProcessor {
  processPayment(amount: number, currency: string): PaymentResult;
  refund(transactionId: string): boolean;
}

interface PaymentResult {
  success: boolean;
  transactionId: string;
  message: string;
}

// Third-party Stripe SDK (different interface)
class StripeAPI {
  createCharge(amountInCents: number, currencyCode: string): StripeCharge {
    console.log(\`Stripe: Creating charge of \${amountInCents} cents in \${currencyCode}\`);
    return {
      id: 'ch_' + Math.random().toString(36).substr(2, 9),
      status: 'succeeded',
      amount: amountInCents
    };
  }

  createRefund(chargeId: string): StripeRefund {
    console.log(\`Stripe: Refunding charge \${chargeId}\`);
    return { id: 're_' + chargeId, status: 'succeeded' };
  }
}

interface StripeCharge {
  id: string;
  status: string;
  amount: number;
}

interface StripeRefund {
  id: string;
  status: string;
}

// Adapter for Stripe
class StripePaymentAdapter implements PaymentProcessor {
  private stripeApi: StripeAPI;

  constructor() {
    this.stripeApi = new StripeAPI();
  }

  processPayment(amount: number, currency: string): PaymentResult {
    // Convert dollars to cents for Stripe
    const amountInCents = Math.round(amount * 100);
    const charge = this.stripeApi.createCharge(amountInCents, currency.toLowerCase());

    return {
      success: charge.status === 'succeeded',
      transactionId: charge.id,
      message: charge.status === 'succeeded' ? 'Payment successful' : 'Payment failed'
    };
  }

  refund(transactionId: string): boolean {
    const refund = this.stripeApi.createRefund(transactionId);
    return refund.status === 'succeeded';
  }
}

// Third-party PayPal SDK (another different interface)
class PayPalSDK {
  makePayment(paymentDetails: { total: string; currency: string }): PayPalResponse {
    console.log(\`PayPal: Processing \${paymentDetails.total} \${paymentDetails.currency}\`);
    return {
      paymentId: 'PAY-' + Math.random().toString(36).substr(2, 9),
      state: 'approved'
    };
  }

  refundPayment(paymentId: string): { refundId: string; state: string } {
    return { refundId: 'REF-' + paymentId, state: 'completed' };
  }
}

interface PayPalResponse {
  paymentId: string;
  state: string;
}

// Adapter for PayPal
class PayPalPaymentAdapter implements PaymentProcessor {
  private paypalSdk: PayPalSDK;

  constructor() {
    this.paypalSdk = new PayPalSDK();
  }

  processPayment(amount: number, currency: string): PaymentResult {
    const response = this.paypalSdk.makePayment({
      total: amount.toFixed(2),
      currency: currency.toUpperCase()
    });

    return {
      success: response.state === 'approved',
      transactionId: response.paymentId,
      message: response.state === 'approved' ? 'Payment approved' : 'Payment rejected'
    };
  }

  refund(transactionId: string): boolean {
    const result = this.paypalSdk.refundPayment(transactionId);
    return result.state === 'completed';
  }
}

// Client code - works with any payment processor
class CheckoutService {
  private paymentProcessor: PaymentProcessor;

  constructor(processor: PaymentProcessor) {
    this.paymentProcessor = processor;
  }

  checkout(amount: number, currency: string): void {
    const result = this.paymentProcessor.processPayment(amount, currency);
    if (result.success) {
      console.log(\`Checkout successful! Transaction: \${result.transactionId}\`);
    } else {
      console.log(\`Checkout failed: \${result.message}\`);
    }
  }
}

// Usage - easily switch between payment providers
const stripeCheckout = new CheckoutService(new StripePaymentAdapter());
stripeCheckout.checkout(99.99, 'USD');

const paypalCheckout = new CheckoutService(new PayPalPaymentAdapter());
paypalCheckout.checkout(49.99, 'EUR');`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Adapter Pattern</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When you want to use an existing class with an incompatible interface</li>
      <li>When integrating third-party libraries or APIs</li>
      <li>When working with legacy code that cannot be modified</li>
      <li>When you want to create a reusable class that cooperates with unrelated classes</li>
      <li>When migrating from one system to another</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Adapter vs Other Patterns</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Adapter vs Facade</h4>
        <p className="mt-2 text-sm">
          <strong>Adapter:</strong> Makes existing interfaces work together<br />
          <strong>Facade:</strong> Creates a new simplified interface for a complex subsystem
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Adapter vs Decorator</h4>
        <p className="mt-2 text-sm">
          <strong>Adapter:</strong> Changes the interface of an object<br />
          <strong>Decorator:</strong> Enhances an object without changing its interface
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Benefits and Trade-offs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Benefits</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Single Responsibility: interface conversion separated</li>
          <li>Open/Closed: new adapters without changing client</li>
          <li>Reuses existing functionality</li>
          <li>Decouples client from implementation</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Trade-offs</h4>
        <ul className="mt-2 text-sm space-y-1">
          <li>Increases overall complexity</li>
          <li>Sometimes simpler to modify the adaptee</li>
          <li>May introduce slight performance overhead</li>
        </ul>
      </div>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Best Practice:</strong> Use the Adapter pattern when you cannot modify the source
        code of the class you want to use. If you can modify it, consider changing the interface
        directly instead of adding an adapter layer.
      </p>
    </div>
  </div>
);

export default AdapterPattern;
