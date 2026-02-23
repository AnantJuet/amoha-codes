import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Adobe Photoshop vs MS Paint ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Adobe Photoshop vs MS Paint
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Jun, 2024</p>

    {/* Intro Paragraph */}
    <p className="leading-relaxed">
      Images are a powerful way to present information, showcase products, or explain concepts.
      With around 3.2 billion images uploaded daily, graphic software plays a key role in image creation,
      editing, and manipulation. Choosing the right software, whether for personal or professional use,
      can be challenging. Here we compare two popular tools: Adobe Photoshop and MS Paint.
    </p>

    {/* Adobe Photoshop */}
    <h2 className="text-3xl font-bold  mt-8">Adobe Photoshop</h2>
    <p className="leading-relaxed">
      Adobe Photoshop is a professional graphic editor for creating and editing images, supporting multiple formats.
      Developed by Thomas and John Knoll and released by Adobe Inc. in 1990 (stable version 2022),
      it offers tools like shape tools, selection tools, clone stamp, pen tools, and more.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Advantages of Adobe Photoshop</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Professional photo editing made easy.</li>
      <li>Supports almost all image formats.</li>
      <li>Available for multiple operating systems (Windows & Mac).</li>
      <li>Provides numerous templates for creative work.</li>
      <li>Produces high-quality images compatible across platforms.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Disadvantages of Adobe Photoshop</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>No lifetime purchase; only monthly or yearly subscriptions.</li>
      <li>Heavy software requiring significant memory and storage.</li>
    </ul>

    {/* MS Paint */}
    <h2 className="text-3xl font-bold  mt-8">MS Paint</h2>
    <p className="leading-relaxed">
      MS Paint (originally Paintbrush, 1985) is a raster image editor included for free in Windows.
      It offers basic color and black-and-white modes for image creation and editing, requiring minimal memory.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Advantages of MS Paint</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Simple interface with essential tools.</li>
      <li>Free to use; no license required.</li>
      <li>Small installation size; very light on system resources.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Disadvantages of MS Paint</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>No grayscale mode.</li>
      <li>Lacks advanced features like image tracing or masking.</li>
    </ul>

    {/* Comparison Table */}
<h2 className="text-3xl font-bold  mt-8">Comparison Between Adobe Photoshop and MS Paint</h2>
  <div className="overflow-x-auto mt-4">
    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
      <thead className="bg-gray-400 text-gray-900">
        <tr>
          <th className="px-4 py-2 text-left  font-semibold border">Feature</th>
          <th className="px-4 py-2 text-left  font-semibold border">Adobe Photoshop</th>
          <th className="px-4 py-2 text-left  font-semibold border">MS Paint</th>
        </tr>
      </thead>
      <tbody className=" divide-y ">
        <tr>
          <td className="px-4 py-2 border">Type</td>
          <td className="px-4 py-2 border">Pixel-based image editor</td>
          <td className="px-4 py-2 border">Raster image editor</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Developer</td>
          <td className="px-4 py-2 border">Adobe</td>
          <td className="px-4 py-2 border">Microsoft</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Supported OS</td>
          <td className="px-4 py-2 border">Windows & Mac</td>
          <td className="px-4 py-2 border">Windows only</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Cost</td>
          <td className="px-4 py-2 border">$20.99/month</td>
          <td className="px-4 py-2 border">Free</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">XML Support</td>
          <td className="px-4 py-2 border">Yes</td>
          <td className="px-4 py-2 border">No</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Programming Language</td>
          <td className="px-4 py-2 border">Pascal & C++</td>
          <td className="px-4 py-2 border">C#</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Memory Requirement</td>
          <td className="px-4 py-2 border">~2 GB RAM</td>
          <td className="px-4 py-2 border">~512 MB RAM</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">Learning Curve</td>
          <td className="px-4 py-2 border">Harder, requires tutorials</td>
          <td className="px-4 py-2 border">Easy, no tutorials needed</td>
        </tr>
      </tbody>
    </table>
  </div>

  </div>
);

export default Home;
