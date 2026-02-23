import React from "react";

const PHPInstallation: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Installation</h1>

      {/* What Do I Need? */}
      <h2 className="text-2xl font-semibold mt-6">What Do I Need?</h2>
      <p>To start using PHP, you can choose one of the following options:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>Find a web host with PHP and MySQL support</li>
        <li>Install a web server, PHP, and MySQL on your own computer</li>
      </ul>

      {/* Use a Web Host */}
      <h2 className="text-2xl font-semibold mt-6">
        Use a Web Host With PHP Support
      </h2>

      <p>
        If your hosting server already supports PHP, you don't need to install
        anything. Just create your <strong>.php</strong> files and upload them
        to the server. PHP will be processed automatically.
      </p>

      <p className="mt-2">
        Since PHP is free and widely used, most hosting providers support PHP by
        default.
      </p>

      {/* Set Up PHP on PC */}
      <h2 className="text-2xl font-semibold mt-6">
        Set Up PHP on Your Own PC
      </h2>

      <p>If your server or PC does not support PHP, you need to install:</p>

      <ul className="list-disc ml-6 mt-2">
        <li>A web server</li>
        <li>PHP</li>
        <li>A database (like MySQL)</li>
      </ul>

      <p className="mt-2">
        The official PHP installation documentation is available at:
      </p>

      <a
        href="https://www.php.net/manual/en/install.php"
        target="_blank"
        className="text-blue-600 underline"
      >
        php.net/manual/en/install.php
      </a>

      {/* Online Compiler */}
      <h2 className="text-2xl font-semibold mt-6">PHP Online Compiler / Editor</h2>

      <p>
        You can practice PHP online using w3schools' PHP compiler. You can edit
        the code and see the output instantly.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$txt = "PHP";
echo "I love $txt!";
?>`}
      </pre>

      <p className="mt-2 font-semibold">Output:</p>
      <pre className="bg-gray-200 p-3 rounded">
{`I love PHP!`}
      </pre>

      {/* PHP Version */}
      <h2 className="text-2xl font-semibold mt-6">PHP Version</h2>

      <p>You can check your PHP version using the <code>phpversion()</code> function:</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`echo phpversion();`}
      </pre>
    </div>
  );
};

export default PHPInstallation;
