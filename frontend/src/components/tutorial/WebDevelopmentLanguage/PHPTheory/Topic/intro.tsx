import React from "react";

const PHPIntroduction: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Introduction</h1>

      <h2 className="text-2xl font-semibold mt-6">What You Should Already Know</h2>
      <p>
        Before you continue, you should have a basic understanding of:
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">What is PHP?</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>PHP stands for "PHP: Hypertext Preprocessor"</li>
        <li>It is a widely-used, open source scripting language</li>
        <li>PHP scripts are executed on the server</li>
        <li>PHP is free to download and use</li>
        <li>It is powerful enough to run large systems like WordPress</li>
        <li>It is easy enough for beginners to learn server-side programming</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">What is a PHP File?</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Can contain text, HTML, CSS, JavaScript, and PHP code</li>
        <li>PHP code is executed on the server, returning plain HTML to the browser</li>
        <li>PHP files have the extension <code>.php</code></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">What Can PHP Do?</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Generate dynamic page content</li>
        <li>Create, open, read, write, delete, and close files on the server</li>
        <li>Collect form data</li>
        <li>Send and receive cookies</li>
        <li>Manipulate database data (add, delete, modify)</li>
        <li>Control user-access</li>
        <li>Encrypt data</li>
        <li>Output HTML, images, PDF files, XHTML, XML, and any text</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Why PHP?</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Runs on multiple platforms: Windows, Linux, Unix, Mac OS X</li>
        <li>Compatible with almost all servers (Apache, IIS, etc.)</li>
        <li>Supports a wide range of databases</li>
        <li>Free to download from <a href="https://www.php.net" className="text-blue-600 underline">www.php.net</a></li>
        <li>Easy to learn and runs efficiently on the server side</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">What's New in PHP 7?</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>Much faster than PHP 5.6</li>
        <li>Improved error handling</li>
        <li>Supports stricter type declarations for function arguments</li>
        <li>Introduces new operators (e.g., spaceship operator <code>&lt;=&gt;</code>)</li>
      </ul>
    </div>
  );
};

export default PHPIntroduction;
