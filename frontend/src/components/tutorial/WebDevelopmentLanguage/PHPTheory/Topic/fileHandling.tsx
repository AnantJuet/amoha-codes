import React from "react";

const PHPFileHandling: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP File Handling</h1>

      <p>
        File handling is an important part of any web application. You often need to open and process files for various tasks.
      </p>

      <h2 className="text-2xl font-semibold mt-6">PHP Manipulating Files</h2>
      <p>
        PHP provides several functions for creating, reading, uploading, and editing files.
      </p>

      <p className="mt-2 font-semibold">
        ⚠️ Be careful when manipulating files!
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>Editing the wrong file</li>
        <li>Filling a hard drive with garbage data</li>
        <li>Accidentally deleting file content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">PHP <code>readfile()</code> Function</h2>
      <p>
        The <code>readfile()</code> function reads a file and writes its contents to the output buffer.  
        It returns the number of bytes read on success.
      </p>

      <p className="mt-2">
        Assume we have a text file called <code>webdictionary.txt</code> with the following contents:
      </p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`AJAX = Asynchronous JavaScript and XML
CSS = Cascading Style Sheets
HTML = Hyper Text Markup Language
PHP = PHP Hypertext Preprocessor
SQL = Structured Query Language
SVG = Scalable Vector Graphics
XML = EXtensible Markup Language`}
      </pre>

      <p className="mt-2">
        To read this file and display its contents, you can use the following PHP code:
      </p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
echo readfile("webdictionary.txt");
?>`}
      </pre>

      <p className="mt-2">
        The <code>readfile()</code> function is useful if you just want to open a file and output its contents.  
        Later chapters will cover more advanced file handling techniques.
      </p>
    </div>
  );
};

export default PHPFileHandling;
