import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference Between Barcode and QR Code ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference Between Barcode and QR Code
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Barcodes and QR codes are two types of machine-readable codes used to store information. They are widely applied in sectors like retail, logistics, and marketing. 
      While both store data, they differ in structure, storage capacity, and applications.
    </p>

    {/* ================= What is a Barcode ================= */}
    <h2 className="text-3xl font-bold  mt-6">What is a Barcode?</h2>
    <p className="text-lg leading-relaxed">
      A barcode is a way to store numbers in a computer-readable format, usually in 1D or 2D. It is scanned for retrieving data. 
      Barcodes are commonly used in stores for tracking products, in hospitals for patient records, in rental car services, and airline luggage management.
    </p>

    <h3 className="text-2xl font-bold mt-4">Advantages of Barcodes</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Simplicity: Easy to implement with minimal investment.</li>
      <li>Low Cost: Equipment for generating and scanning barcodes is inexpensive.</li>
      <li>Quick Scanning: Fast retrieval of data, suitable for retail and numeric environments.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of Barcodes</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Limited Data Capacity: Can store only 8-20 characters.</li>
      <li>One-Dimensional: Cannot store complex information.</li>
      <li>Prone to Damage: Scratches or smudges may prevent scanning.</li>
    </ul>

    {/* ================= What is a QR Code ================= */}
    <h2 className="text-3xl font-bold  mt-6">What is a QR Code?</h2>
    <p className="text-lg leading-relaxed">
      QR codes are a type of 2D barcode that stores data digitally. They can be scanned using QR scanners, smartphones, or tablets. 
      They are widely used for cashless payments, identification, and sharing multimedia like photos and videos.
    </p>

    <h3 className="text-2xl font-bold mt-4">Advantages of QR Codes</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>High Data Capacity: Can store thousands of characters including numbers, letters, and binary data.</li>
      <li>Small Footprint: High storage in small physical size, suitable for printing in limited spaces.</li>
      <li>Error Correction: Can still be scanned even if partially damaged.</li>
      <li>Versatile Applications: Used in marketing, payments, multimedia storage, and more.</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Disadvantages of QR Codes</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Requires Specific Software: Must be scanned with a QR scanner or smartphone app.</li>
      <li>Overuse in Marketing: Frequent exposure may reduce user engagement.</li>
    </ul>

    {/* ================= Differences Table ================= */}
    <h2 className="text-3xl font-bold  mt-6">Differences Between Barcode and QR Code</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-4">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Feature</th>
          <th className="border px-4 py-2">Barcode</th>
          <th className="border px-4 py-2">QR Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Year Developed</td>
          <td className="border px-4 py-2">1952</td>
          <td className="border px-4 py-2">1994</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Developer</td>
          <td className="border px-4 py-2">Norman Joseph Woodland</td>
          <td className="border px-4 py-2">Masahiro Hara</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Type</td>
          <td className="border px-4 py-2">1D or 2D</td>
          <td className="border px-4 py-2">2D barcode</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Data Storage</td>
          <td className="border px-4 py-2">Limited, fewer characters</td>
          <td className="border px-4 py-2">High, can store multimedia data</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Usage</td>
          <td className="border px-4 py-2">Retail, hospitals, rental cars, airline luggage</td>
          <td className="border px-4 py-2">Payments, marketing, multimedia sharing, identification</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Scanning</td>
          <td className="border px-4 py-2">Laser scanner; one barcode at a time</td>
          <td className="border px-4 py-2">QR scanner, smartphone; one QR code at a time</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Orientation</td>
          <td className="border px-4 py-2">Horizontal lines only</td>
          <td className="border px-4 py-2">Horizontal and vertical (square grid)</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h3 className="text-2xl font-bold mt-6">Conclusion</h3>
    <p className="text-lg leading-relaxed">
      Barcodes and QR codes both store and retrieve data, but they serve different purposes. Barcodes are simpler and cheaper, suitable for basic tracking of products. 
      QR codes can store more complex information, making them ideal for payments, marketing, and multimedia applications. Businesses should choose based on their specific needs.
    </p>

  </div>
);

export default Home;
