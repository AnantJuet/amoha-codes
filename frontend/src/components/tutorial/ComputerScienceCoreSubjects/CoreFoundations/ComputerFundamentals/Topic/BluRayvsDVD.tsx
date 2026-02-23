import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between Blu-ray and DVD ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between Blu-ray and DVD
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      <strong>Blu-ray:</strong> Blu-ray is a high-definition optical storage device designed to store large amounts of data, especially high-definition videos. 
      It achieves higher storage capacity than DVDs due to the shorter wavelength of the blue-violet laser, which allows tighter focus, smaller pits, and denser data storage. 
      A single-layer Blu-ray disc can store 25 GB of data, while a dual-layer disc can hold up to 50 GB.
    </p>
    <p className="text-lg leading-relaxed">
      <strong>DVD:</strong> DVD (Digital Versatile Disc) was developed as an improvement over CDs, providing greater storage capacity and the ability to store high-quality video and data. 
      DVDs use a red laser, larger pits, and less dense data storage. A single-layer DVD holds 4.7 GB, while a dual-layer DVD can store up to 8.5 GB.
    </p>

    {/* Differences Table */}
    <h2 className="text-3xl font-bold  mt-8">Differences Between Blu-ray and DVD</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">S.No</th>
          <th className="border px-4 py-2">Blu-ray</th>
          <th className="border px-4 py-2">DVD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">Single-layer size: 25 GB</td>
          <td className="border px-4 py-2">Single-layer size: 4.7 GB</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">Metal layer closer to laser lens</td>
          <td className="border px-4 py-2">Metal layer in the middle of disk</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">Double pit layers</td>
          <td className="border px-4 py-2">Double pit layers</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">4</td>
          <td className="border px-4 py-2">0.30 μm spacing between spiral loops</td>
          <td className="border px-4 py-2">0.74 μm spacing between spiral loops</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">5</td>
          <td className="border px-4 py-2">0.15 μm spacing between pits</td>
          <td className="border px-4 py-2">0.4 μm spacing between pits</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">6</td>
          <td className="border px-4 py-2">Error correction: Picket code</td>
          <td className="border px-4 py-2">Error correction: RS-PC and EFMplus</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">7</td>
          <td className="border px-4 py-2">Laser wavelength: 405 nm</td>
          <td className="border px-4 py-2">Laser wavelength: 650 nm</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">8</td>
          <td className="border px-4 py-2">Data transfer rate: 36 Mb/sec</td>
          <td className="border px-4 py-2">Data transfer rate: 11 Mb/sec</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">9</td>
          <td className="border px-4 py-2">Double-layer size: 50 GB</td>
          <td className="border px-4 py-2">Double-layer size: 8.5 GB</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">10</td>
          <td className="border px-4 py-2">Numeric aperture: 0.8</td>
          <td className="border px-4 py-2">Numeric aperture: 0.6</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">11</td>
          <td className="border px-4 py-2">Thickness: 1.1 mm</td>
          <td className="border px-4 py-2">Thickness: 0.6 mm</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">12</td>
          <td className="border px-4 py-2">Used for storing large-size data like HD videos</td>
          <td className="border px-4 py-2">Used for storing smaller-size data like standard movies</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">13</td>
          <td className="border px-4 py-2">Higher cost compared to DVD</td>
          <td className="border px-4 py-2">Lower cost</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">14</td>
          <td className="border px-4 py-2">Supported video codecs: MPEG-2, MPEG-4, SMPTE VC-1</td>
          <td className="border px-4 py-2">Supported video codec: MPEG-2</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h3 className="text-2xl font-bold mt-6">Conclusion</h3>
    <p className="text-lg leading-relaxed">
      Blu-ray discs provide higher storage capacity, faster data transfer, and better support for high-definition video compared to DVDs. 
      DVDs remain widely used for standard-definition media and cost-effective storage. The choice between Blu-ray and DVD depends on storage needs, cost, and video quality requirements.
    </p>

  </div>
);

export default Home;
