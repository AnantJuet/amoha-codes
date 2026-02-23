import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Output Devices ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Output Devices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Output devices are hardware that display or produce the results of a computer's processing. 
      They convert digital data into formats we can see, hear, or touch.
    </p>
    <p className="leading-relaxed">
      The output device may produce audio, video, printed paper, or any other form of output.
      Output devices convert the computer data to a human-understandable form. 
      We give input to the computer using input devices, and the computer performs operations 
      on the data and displays the output to the user using the output device.
    </p>


    {/* Types of Output Devices */}
    <h2 className="text-3xl font-bold  mt-8">
      Different Types of Output Devices
    </h2>
    <p className="leading-relaxed">
      There are various types of Output Devices, and in the below section, you will explore all types of output devices.
    </p>

    {/* Monitor */}
    <h3 className="text-2xl font-semibold mt-4 ">Monitor</h3>
    <p className="leading-relaxed">
      A monitor is the most common and widely used output device. It displays the processed data in visual form.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Used to view text, graphics, or videos.</li>
      <li>Available in different types such as LED, LCD, and OLED.</li>
      <li>Measured in screen size (in inches) and resolution quality.</li>
      <li>Supports different display ports like HDMI, VGA, or DisplayPort.</li>
    </ul>

    {/* Printer */}
    <h3 className="text-2xl font-semibold mt-4 ">Printer</h3>
    <p className="leading-relaxed">
      A printer is an output device that produces a physical or hard copy of digital documents and images on paper.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Converts digital text and images into printed form.</li>
      <li>Available in types like Inkjet, Laser, and Dot Matrix.</li>
      <li>Can print in monochrome or color.</li>
      <li>Commonly used for office reports, photos, and educational materials.</li>
    </ul>

    {/* Speaker */}
    <h3 className="text-2xl font-semibold mt-4 ">Speaker</h3>
    <p className="leading-relaxed">
      Speakers are output devices used to produce sound from the computer.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Converts digital audio signals into audible sound waves.</li>
      <li>Used for music, movies, voice calls, and gaming.</li>
      <li>Comes in wired, wireless, or Bluetooth-enabled variants.</li>
      <li>Often paired with subwoofers for enhanced bass output.</li>
    </ul>

    {/* Projector */}
    <h3 className="text-2xl font-semibold mt-4 ">Projector</h3>
    <p className="leading-relaxed">
      A projector is an optical output device that displays images, videos, or presentations on large screens or walls.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Magnifies the computer’s display for large audiences.</li>
      <li>Used in classrooms, meetings, and cinemas.</li>
      <li>Connects to computers or other devices via HDMI or VGA.</li>
      <li>Available in types like LCD, DLP, and LED projectors.</li>
    </ul>

    {/* Plotter */}
    <h3 className="text-2xl font-semibold mt-4 ">Plotter</h3>
    <p className="leading-relaxed">
      A plotter is a specialized output device used to produce large-scale graphics or technical drawings.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Used for architectural blueprints, maps, and engineering designs.</li>
      <li>Draws continuous lines using pens or inkjets.</li>
      <li>Offers high precision and is ideal for CAD applications.</li>
      <li>Common types include drum plotters and flatbed plotters.</li>
    </ul>

    {/* Headphones */}
    <h3 className="text-2xl font-semibold mt-4 ">Headphones</h3>
    <p className="leading-relaxed">
      Headphones are personal audio output devices worn over the head or inside the ears.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Enable private listening without disturbing others.</li>
      <li>Available in wired, Bluetooth, or noise-cancelling types.</li>
      <li>Commonly used for calls, media playback, and gaming.</li>
    </ul>

    {/* Smartboard / Interactive Display */}
    <h3 className="text-2xl font-semibold mt-4 ">Smartboard / Interactive Display</h3>
    <p className="leading-relaxed">
      An interactive display works as both input and output device. It displays information while allowing users 
      to interact with the content using touch.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Used in classrooms and meeting rooms for interactive sessions.</li>
      <li>Displays both text and graphics output from a computer.</li>
      <li>Allows annotations, drawings, and presentations in real time.</li>
    </ul>

    {/* Summary */}
    <p className="mt-6 leading-relaxed">
      These output devices convert processed data into visual, audio, or printed form, helping users perceive 
      and interpret computer-generated results effectively.
    </p>

  </div>
);

export default Home;
