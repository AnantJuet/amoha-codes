import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between CD and DVD ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between CD and DVD
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      CD (Compact Disc) was the first major step in digital storage for computers, using a 14-bit coding system that also helped in error detection. 
      DVDs (Digital Versatile Discs) provide a higher-capacity alternative for both video storage and computer data. A DVD can hold several times more data than a CD and supports higher-quality video with random access. 
      The main differences between CDs and DVDs lie in storage capacity, physical structure, error correction, and data transfer rates.
    </p>

    {/* Differences Table */}
    <h2 className="text-3xl font-bold  mt-8">Differences Between CD and DVD</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">S.No</th>
          <th className="border px-4 py-2">CD</th>
          <th className="border px-4 py-2">DVD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">Storage capacity: 700 MB</td>
          <td className="border px-4 py-2">Storage capacity: 4.7 GB to 17 GB</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">Recording/metal layer on top of disk</td>
          <td className="border px-4 py-2">Recording/metal layer situated in middle of disk</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">Single pit layer</td>
          <td className="border px-4 py-2">Double pit layers</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">4</td>
          <td className="border px-4 py-2">1.6 μm spacing between spiral loops</td>
          <td className="border px-4 py-2">0.74 μm spacing between spiral loops</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">5</td>
          <td className="border px-4 py-2">0.834 μm spacing between pits</td>
          <td className="border px-4 py-2">0.4 μm spacing between pits</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">6</td>
          <td className="border px-4 py-2">Error correction: CIRC and EFMP</td>
          <td className="border px-4 py-2">Error correction: RS-PC and EFMplus</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">7</td>
          <td className="border px-4 py-2">Metal layer can be damaged after label removal</td>
          <td className="border px-4 py-2">Spin imbalance may occur after label removal</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">8</td>
          <td className="border px-4 py-2">Data transfer rate: 1.4–1.6 MB/sec</td>
          <td className="border px-4 py-2">Data transfer rate: 11 MB/sec</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">9</td>
          <td className="border px-4 py-2">Channel bit length: 300 nm</td>
          <td className="border px-4 py-2">Channel bit length: 113 nm</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">10</td>
          <td className="border px-4 py-2">Numeric aperture: 0.45</td>
          <td className="border px-4 py-2">Numeric aperture: 0.6</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">11</td>
          <td className="border px-4 py-2">Thickness: 1.2 mm</td>
          <td className="border px-4 py-2">Thickness: 0.6 mm</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h3 className="text-2xl font-bold mt-6">Conclusion</h3>
    <p className="text-lg leading-relaxed">
      In summary, DVDs offer higher storage capacity, faster data transfer, and improved error correction compared to CDs. 
      CDs are still used for basic data storage and music, but DVDs have largely replaced them for video, software distribution, and larger data storage requirements.
    </p>

  </div>
);

export default Home;
