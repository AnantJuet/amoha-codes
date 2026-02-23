import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Introduction to Internet ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Introduction to Internet
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Computers and networks can seem complex, especially with terms that differ across English, 
      networking, and internet contexts. While networks and the Internet might appear similar, 
      they serve distinct purposes.
    </p>
    <p className="leading-relaxed">
      A <strong>network</strong> is a group of two or more computers (hosts) connected via channels 
      to send and receive data. Networks may include devices such as routers, switches, hubs, and 
      bridges to facilitate communication.
    </p>

    {/* What is Internet */}
    <h2 className="text-3xl font-bold  mt-8">
      What is Internet?
    </h2>
    <p className="leading-relaxed">
      The <strong>Internet</strong> is a global network of interconnected computers and networks. 
      It relies on the Internet Protocol (IP) suite, which organizes communication into layers 
      of protocols. The Internet provides a wide variety of services including forums, databases, 
      email, and hypertext.
    </p>
    <p className="leading-relaxed">
      It connects networks from local to global scales, enabling millions of computers to communicate 
      reliably using digital, wireless, and networking technologies.
    </p>

    {/* Working of the Internet */}
    <h2 className="text-3xl font-bold  mt-8">
      Working of the Internet
    </h2>
    <p className="leading-relaxed">
      The Internet transmits data in packets using the Transmission Control Protocol (TCP) and 
      Internet Protocol (IP). IP determines how data is addressed and routed, while TCP ensures 
      reliable transmission, correct ordering of packets, and no data loss. Data travels across 
      the Internet in the form of messages and packets.
    </p>

    {/* History of Internet */}
    <h2 className="text-3xl font-bold  mt-8">
      History of Internet
    </h2>
    <p className="leading-relaxed">
      The ARPANET, established in 1969, created the first successful network link between UCLA 
      and Stanford Research Institute. TCP/IP protocols were developed in the 1970s, standardizing 
      data transfer. NSFNET in 1986 expanded connectivity. Commercial use of the Internet 
      began in the 1990s, with Wi-Fi introduced in 1997, Windows 98 in 1998, smartphones in 2007, 
      4G in 2009, and today it connects billions of users globally.
    </p>

    {/* Uses of Internet */}
    <h2 className="text-3xl font-bold  mt-8">
      Uses of the Internet
    </h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>E-mail:</strong> Send and receive electronic messages via servers.</li>
      <li><strong>Web Chat:</strong> Real-time messaging using chat software.</li>
      <li><strong>World Wide Web:</strong> Access interconnected documents through hyperlinks.</li>
      <li><strong>E-commerce:</strong> Online buying and selling of goods and services.</li>
      <li><strong>Internet Telephony:</strong> Converts analog voice to digital signals over the Internet.</li>
      <li><strong>Video Conferencing:</strong> Communicate using audio and video streams.</li>
    </ul>

    {/* Common Terms */}
    <h2 className="text-3xl font-bold  mt-8">Common Terms Used in Internet</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Web Client:</strong> Software on a device that requests information from web servers.</li>
      <li><strong>Web Browser:</strong> Software to access, retrieve, and display web content (e.g., Chrome, Firefox).</li>
      <li><strong>Webpage:</strong> A document on the web, typically built with HTML and CSS.</li>
      <li><strong>Website:</strong> A collection of related web pages under one domain.</li>
      <li><strong>Search Engine:</strong> Online tools to search for content across the Internet (e.g., Google, Bing).</li>
    </ul>

    {/* Evolution of Web */}
    <h2 className="text-3xl font-bold  mt-8">Web 1.0, 2.0, and 3.0</h2>
    <p className="leading-relaxed">
      <strong>Web 1.0:</strong> Static web pages, limited interactivity, early browsers like Mosaic and Netscape.
    </p>
    <p className="leading-relaxed">
      <strong>Web 2.0:</strong> Dynamic pages, user-generated content, social media platforms, blogs, wikis.
    </p>
    <p className="leading-relaxed">
      <strong>Web 3.0:</strong> Emerging intelligent web using AI, ML, and blockchain, focusing on decentralization, 
      personalization, and security.
    </p>

    {/* Network vs Internet */}
    <h2 className="text-3xl font-bold  mt-8">Differentiation between Network and Internet</h2>
    <p className="leading-relaxed">
      A <strong>network</strong> is a private collection of physically connected computers sharing resources, 
      while the <strong>Internet</strong> connects multiple networks globally, forming a vast and accessible network.
    </p>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold  mt-8">Advantages of the Internet</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Access to vast information resources and research materials.</li>
      <li>Entertainment, online gaming, music, movies, and social interaction.</li>
      <li>Immediate updates via newsgroups and online services.</li>
      <li>Online shopping and business without leaving home.</li>
      <li>Ease of purchasing products and services using digital payments.</li>
    </ul>

    <h2 className="text-3xl font-bold  mt-8">Disadvantages of the Internet</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Excessive use can harm physical and mental health.</li>
      <li>Risk of addiction, especially among children.</li>
      <li>Susceptible to hacking and privacy breaches.</li>
      <li>Reduces face-to-face social interactions due to online dependency.</li>
    </ul>

  </div>
);

export default Home;
