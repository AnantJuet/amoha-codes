import React from 'react';

const Wifi: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= What is Wi-Fi ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is Wi-Fi?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Wi-Fi is a wireless networking technology that enables devices like computers, 
      smartphones, and smart gadgets to connect to the Internet and communicate without 
      cables. It creates a local network through a router, allowing seamless internet access 
      and communication in homes, offices, and public spaces.
    </p>

    {/* Wireless Access Point */}
    <h2 className="text-3xl font-bold  mt-8">
      What is a Wireless Access Point?
    </h2>
    <p className="leading-relaxed">
      A Wireless Access Point (WAP) is a networking device that allows Wi-Fi-enabled devices 
      to connect to a wired network. It acts as a hub broadcasting Wi-Fi signals and can extend 
      network coverage, create separate network segments, or provide connectivity in large spaces. 
      WAPs may be standalone or integrated into routers.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold  mt-8">Applications of Wi-Fi</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Wireless internet access for multiple devices in homes, offices, or public areas.</li>
      <li>High-speed file sharing, streaming audio/video, and printing via Wi-Fi-enabled devices.</li>
      <li>Hotspots provide temporary internet access using a main network connection.</li>
      <li>Point-to-point connections to link distant locations without cables.</li>
      <li>VoWi-Fi (Voice over Wi-Fi) enables calls over Wi-Fi networks for improved quality.</li>
      <li>Office networks use Wi-Fi to share projects, files, and presentations efficiently.</li>
      <li>Large-scale Wi-Fi networks can provide city-wide connectivity and positioning services.</li>
    </ul>

    {/* Types of Wi-Fi */}
    <h2 className="text-3xl  font-bold mb-4">Types of Wi-Fi Standards</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-400 text-gray-900">
            <th className="py-2 px-4 border-b">Standards</th>
            <th className="py-2 px-4 border-b">Year of Release</th>
            <th className="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-500">
            <td className="py-2 px-4 border-b">Wi-Fi-1 (802.11b)</td>
            <td className="py-2 px-4 border-b">1999</td>
            <td className="py-2 px-4 border-b">
              Link speed from 2 Mb/s to 11 Mb/s over a 2.4 GHz frequency band
            </td>
          </tr>
          <tr className="hover:bg-gray-500">
            <td className="py-2 px-4 border-b">Wi-Fi-2 (802.11a)</td>
            <td className="py-2 px-4 border-b">1999</td>
            <td className="py-2 px-4 border-b">
              Provides up to 54 Mb/s link speed over 5 GHz band
            </td>
          </tr>
          <tr className="hover:bg-gray-500">
            <td className="py-2 px-4 border-b">Wi-Fi-3 (802.11g)</td>
            <td className="py-2 px-4 border-b">2003</td>
            <td className="py-2 px-4 border-b">
              Speed increased up to 54–108 Mb/s over 2.4 GHz
            </td>
          </tr>
          <tr className="hover:bg-gray-500">
            <td className="py-2 px-4 border-b">802.11i</td>
            <td className="py-2 px-4 border-b">2004</td>
            <td className="py-2 px-4 border-b">
              Same as 802.11g but with enhanced security
            </td>
          </tr>
          <tr className="hover:bg-gray-500">
            <td className="py-2 px-4 border-b">802.11e</td>
            <td className="py-2 px-4 border-b">2004</td>
            <td className="py-2 px-4 border-b">
              Adds Voice over WLAN (VoWi-Fi) and multimedia streaming
            </td>
          </tr>
          <tr className="hover:bg-gray-500">
            <td className="py-2 px-4 border-b">Wi-Fi-4 (802.11n)</td>
            <td className="py-2 px-4 border-b">2009</td>
            <td className="py-2 px-4 border-b">
              Supports 2.4 GHz and 5 GHz, speeds 72–600 Mb/s
            </td>
          </tr>
          <tr className="hover:bg-gray-500">
            <td className="py-2 px-4 border-b">Wi-Fi-5 (802.11ac)</td>
            <td className="py-2 px-4 border-b">2014</td>
            <td className="py-2 px-4 border-b">
              Supports 1733 Mb/s in the 5 GHz band
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    

    {/* Types of Wi-Fi Connections */}
    <h2 className="text-3xl font-bold  mt-8">Types of Wi-Fi Connections</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>LAN (Local Area Network):</strong> Connects devices in a limited area like a home or office.</li>
      <li><strong>PAN (Personal Area Network):</strong> Small network around a single user's devices, e.g., Bluetooth.</li>
      <li><strong>MAN (Metropolitan Area Network):</strong> Covers larger areas like a city or campus.</li>
      <li><strong>WAN (Wide Area Network):</strong> Covers vast areas; the Internet is the most common WAN.</li>
    </ul>

    {/* How Wi-Fi Works */}
    <h2 className="text-3xl font-bold  mt-8">How Wi-Fi Works</h2>
    <p className="leading-relaxed">
      Wi-Fi uses radio waves to transmit data between a router and compatible devices. It has three main components:
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Base Station/Ethernet Connection:</strong> Main host network providing the connection.</li>
      <li><strong>Access Point/Router:</strong> Converts wired Ethernet into wireless signals for devices.</li>
      <li><strong>Accessing Devices:</strong> Smartphones, computers, and other devices receive Wi-Fi signals and communicate.</li>
    </ul>

    <h2 className="text-3xl font-bold  mt-8">Wi-Fi Key Concepts</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>SSID:</strong> Unique network name identifying a Wi-Fi network.</li>
      <li><strong>WPA-PSK:</strong> Security protocol encrypting Wi-Fi signals to prevent unauthorized access (WPA, WPA2, WPA3).</li>
      <li><strong>Ad-Hoc Networks:</strong> Direct point-to-point network without a central router.</li>
    </ul>

    {/* Getting Wi-Fi at Home */}
    <h2 className="text-3xl font-bold  mt-8">How to Get Wi-Fi at Home</h2>
    <ol className=" list-inside leading-relaxed">
      <li><strong>Step-1. </strong>Choose a reliable ISP (Jio Fiber, Airtel, BSNL, ACT Fibernet).</li>
      <li><strong>Step-2. </strong>Obtain the right equipment: router or ONT/modem combo.</li>
      <li><strong>Step-3. </strong>Place the router in a central, elevated location for optimal coverage.</li>
      <li><strong>Step-4. </strong>Install the network with support from your ISP technician.</li>
    </ol>

    {/* Advantages & Disadvantages */}
    <h2 className="text-3xl font-bold  mt-8">Advantages of Wi-Fi</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Cable-free connectivity for multiple devices.</li>
      <li>Reduced installation and maintenance costs.</li>
      <li>Easy expansion for additional devices without extra infrastructure.</li>
    </ul>

    <h2 className="text-3xl font-bold  mt-8">Disadvantages of Wi-Fi</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Vulnerable to hacking and unauthorized access.</li>
      <li>Signal affected by obstacles and interference, reducing speed or coverage.</li>
      <li>Depends on electricity; network becomes inaccessible during power outages.</li>
    </ul>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Wi-Fi enables devices to connect to the internet wirelessly using radio waves. Routers share 
      the internet connection with multiple devices, making it convenient to browse, share files, 
      and stay connected at home, in offices, or public spaces. It is a fundamental technology 
      in the digital world.
    </p>

  </div>
);

export default Wifi;
