import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Google Chrome Operating System ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is Google Chrome Operating System?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 28 Mar, 2021</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Google Chrome Operating System is made specifically for notebooks and tablets. 
      It was introduced by Google LLC in 2009 and is built on top of the Linux Kernel. 
      It works on ARM and Intel x86 chips and is a cloud-based operating system known for its enormous speed and low latency. 
      Websites load quickly, and Chrome OS comes with an automatic upgrade system that updates seamlessly when connected to the internet. 
      Several applications can be opened using different tabs within Chrome OS.
    </p>

    {/* History Section */}
    <h2 className="text-3xl font-bold  mt-8">History</h2>
    <p className="leading-relaxed">
      The Chrome Operating System was announced on July 7, 2009, by Google LLC. 
      Initially designed for netbooks and personal computers, Chrome OS was compatible with HDDs, 
      but Google encouraged manufacturers to use SSDs for better performance and reliability. 
      Matthew Papakipos, Chrome OS engineering director, claimed in 2009 that Chrome OS used only 1/60th of the space required by Windows OS. 
      In November of that year, Google released the open-source version named “Chromium OS”. 
      Sundar Pichai, CEO of Google, also mentioned efforts to reduce Chrome’s boot time to under 7 seconds.
    </p>

    <p className="leading-relaxed">
      Google Chrome is one of the most widely used browsers globally and is open source. 
      Users of Chrome OS enjoy the ease of working online on the cloud, minimizing the need to download or install applications. 
      User data is stored primarily on the cloud, and Chrome OS receives frequent updates and security improvements. 
      Through Google’s cloud computing services, users can work and store data efficiently using Chrome browser tools like Google Docs or Microsoft Office web apps.
    </p>

    {/* Hardware Section */}
    <h2 className="text-3xl font-bold  mt-8">Hardware</h2>
    <p className="leading-relaxed">
      Laptops running Chrome OS are known as Chromebooks. In 2012, Samsung released a desktop version called Chromebox, 
      and in 2015, following partnerships with AOPEN and Samsung, it was commercially launched. 
      LG Electronics developed Chromebase in 2014, an all-in-one Chrome OS device that included a monitor, camera, microphone, and speakers. 
      In 2015, Google launched Chromebit — an HDMI dongle that runs Chrome OS, turning any monitor or TV into a personal computer.
    </p>

    {/* Software Section */}
    <h2 className="text-3xl font-bold  mt-8">Software</h2>
    <p className="leading-relaxed">
      Chrome OS software updates have a defined lifespan. 
      The end-of-life (EOL) details are available under “About Chrome OS → Additional Details.” 
      All Chrome OS software developed after 2020 has a minimum lifespan of 8 years.
    </p>

    {/* Applications Section */}
    <h2 className="text-3xl font-bold  mt-8">Applications of Chrome OS</h2>
    <ol className="list-decimal pl-6 space-y-4">
      <li>
        <strong>Chrome Apps:</strong> Developers are encouraged to create Chrome Apps that function offline, 
        open outside the browser, and support multiple windows. Examples include Google Docs and Media Player.
      </li>
      <li>
        <strong>Android Applications:</strong> Since 2016, Chrome OS devices have been able to run Android apps. 
        Google also introduced “App Runtime for Chrome,” though it was later discontinued after testing.
      </li>
      <li>
        <strong>Linux Applications:</strong> Linux apps can be run on Chrome OS using Crouton. 
        Google has officially enabled desktop Linux app support on Chrome OS devices.
      </li>
    </ol>

    {/* Architecture Section */}
    <h2 className="text-3xl font-bold  mt-8">Architecture of Chrome OS</h2>
    <p className="leading-relaxed">
      Chrome OS is built on the Linux kernel with a three-tier architecture that includes firmware, 
      browser and window manager, and system-level software with userland services. 
      Firmware ensures fast booting and system verification for security. 
      System-level software enhances performance during startup, while userland services handle only essential processes 
      to manage programs efficiently. The window manager handles user interaction across multiple windows, 
      similar to other X window systems.
    </p>

    {/* Advantages Section */}
    <h2 className="text-3xl font-bold  mt-8">Advantages of Google Chrome OS</h2>
    <ol className="list-decimal pl-6 space-y-4">
      <li>The Chrome OS is lightweight and cloud-based, enabling fast web access.</li>
      <li>It is open-source, allowing anyone to access, download, and modify the source code for free.</li>
      <li>Chrome OS focuses on seamless internet browsing and web-based service access.</li>
      <li>It runs efficiently on ARM and Atom processors with high speed.</li>
      <li>It includes built-in media player and printing services integrated with Google Cloud Print.</li>
      <li>It offers automatic updates and strong security features.</li>
      <li>It supports Google apps such as Gmail, Google Docs, and similar services.</li>
    </ol>

    {/* Limitations Section */}
    <h2 className="text-3xl font-bold  mt-8">Limitations of Google Chrome OS</h2>
    <ol className="list-decimal pl-6 space-y-4">
      <li>It faces information security limitations, making it vulnerable to hacking attempts.</li>
      <li>It is not compatible with all types of hardware, though this may improve in future updates.</li>
    </ol>
  </div>
);

export default Home;
