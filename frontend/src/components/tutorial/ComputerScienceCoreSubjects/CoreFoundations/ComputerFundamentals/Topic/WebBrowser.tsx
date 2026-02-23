import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Web Browser Overview ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is a Web Browser and How does it Work?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      A web browser is an application software used to explore the World Wide Web (WWW). 
      It acts as an interface between the client (user) and the server, allowing users to access 
      and view information from the Internet. The browser sends requests to web servers for documents 
      and services, then renders the received HTML content — including text, images, links, styles, and scripts.
    </p>

    <p className="leading-relaxed">
      Simply being connected to the Internet isn’t enough; a browser is essential to search and view 
      content online. Popular examples include <strong>Google Chrome, Microsoft Edge, Mozilla Firefox,</strong> 
      and <strong>Safari</strong>.
    </p>

    {/* How Does a Web Browser Work */}
    <h2 className="text-3xl font-bold  mt-8">How Does a Web Browser Work?</h2>
    <p className="leading-relaxed">
      When a user enters a website URL (like <strong>https://www.geeksforgeeks.org/</strong>), 
      the browser contacts a DNS (Domain Name System) server to convert the domain name 
      into an IP address (e.g., 52.85.142.233). After obtaining the IP address, 
      the browser sends a request to the web server, which processes it and responds with 
      the required content — HTML, CSS, images, and scripts. 
      The browser then renders this content visually for the user.
    </p>

    <p className="leading-relaxed">
      A browser operates on the <strong>client-server model</strong>, 
      where the browser (client) requests data from a remote web server.
      The communication between the two happens via the <strong>HTTP protocol</strong>, 
      which defines how data is transmitted and received.
    </p>

    <p className="leading-relaxed">
      Once the browser receives the response, it parses and renders the HTML, CSS, and JavaScript 
      to display a fully interactive webpage on the user’s device.
    </p>

    {/* Website Cookies */}
    <h2 className="text-3xl font-bold  mt-8">Website Cookies</h2>
    <p className="leading-relaxed">
      When we visit websites, browsers store small files called <strong>cookies</strong> 
      that hold user-related information such as preferences, browsing history, and login state. 
      Cookies help websites remember stateful information about us — for example, our interests 
      and browsing patterns — to deliver personalized content and targeted ads.
    </p>

    <p className="italic text-gray-600">
      Note: Cookies enhance user experience but also raise privacy concerns, 
      as they track behavior across sites.
    </p>

    {/* Core Architecture */}
    <h2 className="text-3xl font-bold  mt-8">Core Architecture of Web Browser</h2>
    <p className="leading-relaxed">
      A web browser consists of multiple components that work together to retrieve, process, 
      and display web content:
    </p>

    <ul className="list-disc pl-6 space-y-2 leading-relaxed">
      <li>
        <strong>User Interface (UI):</strong> Includes elements like the address bar, 
        forward/backward buttons, and bookmarks for user interaction.
      </li>
      <li>
        <strong>Browser Engine:</strong> Manages communication between the UI and the rendering engine.
      </li>
      <li>
        <strong>Rendering Engine:</strong> Parses HTML, CSS, and JavaScript to display web pages visually.
      </li>
      <li>
        <strong>Networking:</strong> Handles communication with web servers via HTTP/HTTPS protocols.
      </li>
      <li>
        <strong>JavaScript Interpreter:</strong> Executes JavaScript code within the browser.
      </li>
      <li>
        <strong>UI Backend:</strong> Draws widgets and interface elements using the system’s native tools.
      </li>
    </ul>

    {/* Popular Web Browsers */}
    <h2 className="text-3xl font-bold  mt-8">Some Popular Web Browsers</h2>
    <p className="leading-relaxed">
      Below is a list of some of the most widely used web browsers and their key features:
    </p>

    <ul className="list-decimal pl-6 space-y-2 leading-relaxed">
      <li>
        <strong>Google Chrome:</strong> Developed by Google; known for its speed, security, and simplicity.
      </li>
      <li>
        <strong>Mozilla Firefox:</strong> Developed by the Mozilla Foundation; open-source, privacy-focused, and highly customizable.
      </li>
      <li>
        <strong>Apple Safari:</strong> Default browser for macOS and iOS, optimized for speed and Apple ecosystem integration.
      </li>
      <li>
        <strong>Microsoft Edge:</strong> Default browser for Windows 10+; offers integration with Microsoft services.
      </li>
      <li>
        <strong>Tor Browser:</strong> Developed by The Tor Project; enables anonymous web browsing through onion routing.
      </li>
      <li>
        <strong>Opera:</strong> Known for its built-in VPN, ad blocker, and fast performance.
      </li>
      <li>
        <strong>Brave:</strong> Privacy-focused browser that blocks third-party ads and trackers by default.
      </li>
    </ul>

    <p className="leading-relaxed">
      <strong>Important Note:</strong> Other browsers such as <em>Vivaldi</em> and <em>Waterfox</em> 
      also exist, and the choice depends on user needs such as performance, privacy, and usability.
    </p>

    {/* History Section */}
    <h2 className="text-3xl font-bold  mt-8">History of Web Browsers</h2>
    <p className="leading-relaxed">
      The first web browser, <strong>WorldWideWeb</strong>, was created by <strong>Tim Berners-Lee</strong> in 1990 
      and later renamed <strong>Nexus</strong>. 
      In 1993, <strong>Mark Andreessen</strong> and his team developed <strong>Mosaic</strong>, 
      the first browser to display text and images together. 
      Andreessen later created <strong>Netscape</strong> in 1994. 
      Microsoft introduced <strong>Internet Explorer</strong> in 1995, bundled with Windows, 
      leading to competition that drove the evolution of browsers like 
      <strong>Mozilla Firefox, Google Chrome, Safari,</strong> and <strong>Opera</strong>, 
      each offering unique features and performance improvements.
    </p>

  </div>
);

export default Home;
