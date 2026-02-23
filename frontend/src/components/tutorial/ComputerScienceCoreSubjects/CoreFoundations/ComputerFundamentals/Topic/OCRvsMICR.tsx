import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between OCR and MICR ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between Optical Character Recognition (OCR) and Magnetic Ink Character Reader (MICR)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Optical Character Recognition (OCR) is a technology that converts images of text—printed or handwritten—into machine-encoded text. 
      It is commonly used to digitize documents, allowing scanned text to be edited, searched, or processed electronically.
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold  mt-8">Differences Between OCR and MICR</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'> 
        <tr>
          <th className="border px-4 py-2">S. No.</th>
          <th className="border px-4 py-2">OCR</th>
          <th className="border px-4 py-2">MICR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">OCR is a scanner that scans pages comprised of texts.</td>
          <td className="border px-4 py-2">MICR is a character scanning technology that uses magnetic ink and special characters.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">2</td>
          <td className="border px-4 py-2">It can scan any type of printed text.</td>
          <td className="border px-4 py-2">It can scan the special information present in cheques.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">3</td>
          <td className="border px-4 py-2">Supports a variety of font shapes.</td>
          <td className="border px-4 py-2">Supports only pre-defined fonts like E-138 and CMC-7.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">4</td>
          <td className="border px-4 py-2">All types of ink can be used.</td>
          <td className="border px-4 py-2">Only special magnetic ink (iron oxide based) is used.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">5</td>
          <td className="border px-4 py-2">Scanned data is used for editing or printing.</td>
          <td className="border px-4 py-2">Scanned data is used for processing cheques.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">6</td>
          <td className="border px-4 py-2">Converts multipage documents into editable text files after recognizing text.</td>
          <td className="border px-4 py-2">Example: A PNB Noida Sector 62 cheque has MICR code 110032013.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">7</td>
          <td className="border px-4 py-2">Does not require secure scanning or processing.</td>
          <td className="border px-4 py-2">Secure scanning and processing is required.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">8</td>
          <td className="border px-4 py-2">No constraints on typeface if appropriate software is used.</td>
          <td className="border px-4 py-2">Limited to 14 characters: 0–9 and special symbols.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">9</td>
          <td className="border px-4 py-2">Data is less reliable compared to MICR.</td>
          <td className="border px-4 py-2">Data is more reliable compared to OCR.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">10</td>
          <td className="border px-4 py-2">Can scan handwritten text.</td>
          <td className="border px-4 py-2">Cannot scan handwritten text.</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
