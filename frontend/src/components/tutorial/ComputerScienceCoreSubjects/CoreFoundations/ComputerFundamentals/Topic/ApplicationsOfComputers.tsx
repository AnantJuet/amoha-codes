import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg  mt-20">

    {/* ================= Basic Applications of Computers ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Basic Applications of Computers
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      The term computer was taken from the Greek word <strong>compute</strong> meaning calculation,
      and the computer was originally a person or device that performed computations.
    </p>
    <p className="leading-relaxed">
      Computers are used in every field of life, such as homes, businesses, educational institutions,
      research organizations, the medical field, government offices, and entertainment. 
      Today, we cannot imagine growing our technology without computers.
    </p>

    {/* Applications Heading */}
    <h2 className="text-3xl font-bold  mt-8">
      Basic Applications of Computers
    </h2>
    <p className="leading-relaxed">
      The various fields where computers are very essential include:
    </p>

    {/* Science */}
    <h3 className="text-2xl font-semibold mt-4 ">Science</h3>
    <p className="leading-relaxed">
      Today, computers are the best-suited machines for collecting, analyzing, classifying,
      and storing data. They have become essential tools for spreading knowledge both internally
      and internationally. Scientists from different locations can work together and share ideas
      on the same project with ease.
    </p>

    {/* Defence System */}
    <h3 className="text-2xl font-semibold mt-4 ">Defence System</h3>
    <p className="leading-relaxed">
      Computers are used to track airplanes, missiles, tanks, and various kinds of weapons.
      For example, radar systems track incoming missiles, and artificial intelligence can be
      programmed to target and destroy them before they reach the surface. Computers also help
      in GPS tracking, controlling defense vehicles, and maintaining military personnel records.
    </p>

    {/* Medical */}
    <h3 className="text-2xl font-semibold mt-4 ">Medical</h3>
    <p className="leading-relaxed">
      Computers are used to record patients’ information and monitor heart rate, oxygen levels,
      and blood pressure. During surgeries, junior doctors can get real-time assistance from
      professional doctors through web conferencing.
    </p>

    {/* Education */}
    <h3 className="text-2xl font-semibold mt-4 ">Education</h3>
    <p className="leading-relaxed">
      Computers play a crucial role in online classes, downloading study materials from the internet,
      and enabling students to interact with peers and teachers. They are also used to track attendance
      and assess learning progress.
    </p>

    {/* Banking */}
    <h3 className="text-2xl font-semibold mt-4 ">Banking</h3>
    <p className="leading-relaxed">
      Computers help store account holder details on bank servers. Transactions such as deposits
      and withdrawals are processed by computers. Banks also use them to monitor ATMs and manage
      passbook printing systems efficiently.
    </p>

    {/* Government Sectors */}
    <h3 className="text-2xl font-semibold mt-4 ">Government Sectors</h3>
    <p className="leading-relaxed">
      Governments use computers to monitor sectors like road services, railways, and development programs.
      Information about every citizen is stored securely on government servers for better administration.
    </p>

    {/* Entertainment */}
    <h3 className="text-2xl font-semibold mt-4 ">Entertainment</h3>
    <p className="leading-relaxed">
      Computers allow us to play interactive video games, watch movies, TV shows, and reality programs.
      They are also used for creating memes, animations, and digital content that keep us entertained.
    </p>
  </div>
);

export default Home;
