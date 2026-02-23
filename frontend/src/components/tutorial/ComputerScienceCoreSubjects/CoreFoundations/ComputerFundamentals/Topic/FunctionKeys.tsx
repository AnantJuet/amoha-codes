import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Function Keys Guide ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Function Keys on Keyboard
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Function keys (F1–F12) are essential for quickly performing commands on a computer or laptop. 
      On laptops, you often need to press the <strong>Fn</strong> key along with F1–F12 to activate their functions.
    </p>

    {/* What are Function Keys */}
    <h2 className="text-3xl font-bold  mt-8">
      What Are Function Keys on Keyboard?
    </h2>
    <p className="leading-relaxed">
      Function keys send commands to the operating system or applications. 
      Standard PC keyboards have F1–F12, while Apple keyboards may have F1–F19 or use a Touch Bar. 
      Some customized keyboards may include up to F24 keys.
    </p>

    {/* Location on Laptop */}
    <h3 className="text-2xl font-semibold mt-4 ">Where Are the Function Keys on a Laptop?</h3>
    <p className="leading-relaxed">
      They are usually in the top row. On smaller laptops, function keys may appear as secondary actions on other keys. 
      Press <strong>Fn</strong> + the corresponding key to use these functions.
    </p>

    {/* Enabling Fn Key */}
    <h3 className="text-2xl font-semibold mt-4 ">How to Enable Fn Keys</h3>
    <p className="leading-relaxed">
      Go to BIOS settings &gt; System Configuration &gt; Actions Key Mode to enable or disable Fn keys. 
      Enabling Fn ensures that F1–F12 perform their intended functions efficiently.
    </p>

    {/* Use of F1–F12 */}
    <h2 className="text-3xl font-bold  mt-8">
      Use of Keyboard Function Keys (F1 – F12)
    </h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>F1:</strong> Open Help center (Fn + F1 on laptops).</li>
      <li><strong>F2:</strong> Rename file/folder. In MS Office: Alt + Ctrl + F2 opens document, Ctrl + F2 shows print preview.</li>
      <li><strong>F3:</strong> Search applications or text. In Word: Shift + F3 changes case.</li>
      <li><strong>F4:</strong> Alt + F4 closes current application; Ctrl + F4 closes active window.</li>
      <li><strong>F5:</strong> Refresh screen or web page.</li>
      <li><strong>F6:</strong> Decrease volume on laptop; Ctrl + F6 toggles documents in Word.</li>
      <li><strong>F7:</strong> Check spelling & grammar in MS Office; Shift + F7 opens Research window.</li>
      <li><strong>F8:</strong> Enter Safe Mode; select text in Word.</li>
      <li><strong>F9:</strong> Mostly used in Word for mail merge (Alt + F9, Ctrl + F9).</li>
      <li><strong>F10:</strong> Opens menu in Word (Shift + F10). No standalone Windows function.</li>
      <li><strong>F11:</strong> Full-screen mode in browser; Alt/Shift/Ctrl combinations for Excel & MS Office.</li>
      <li><strong>F12:</strong> Save dialog in Word; Ctrl + F12 opens document, Shift + Ctrl + F12 opens Print window.</li>
    </ul>
  </div>
);

export default Home;
