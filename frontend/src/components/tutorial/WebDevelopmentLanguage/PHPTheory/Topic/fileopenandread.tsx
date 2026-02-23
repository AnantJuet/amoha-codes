import React from "react";

const PHPFileOpenReadClose: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP File Open / Read / Close</h1>

      <p>
        In this chapter, you will learn how to open, read, and close a file on the server.
      </p>

      <h2 className="text-2xl font-semibold mt-6">PHP Open File - <code>fopen()</code></h2>
      <p>
        The <code>fopen()</code> function gives you more control than <code>readfile()</code>.  
        The first parameter is the file name, the second is the mode.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile, filesize("webdictionary.txt"));
fclose($myfile);
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">File Modes</h3>
      <ul className="list-disc ml-6 mt-2">
        <li><code>r</code> - Read only, pointer at beginning</li>
        <li><code>w</code> - Write only, erases content, pointer at beginning</li>
        <li><code>a</code> - Write only, preserves content, pointer at end</li>
        <li><code>x</code> - Create new file, error if exists</li>
        <li><code>r+</code> - Read/write, pointer at beginning</li>
        <li><code>w+</code> - Read/write, erases content, pointer at beginning</li>
        <li><code>a+</code> - Read/write, preserves content, pointer at end</li>
        <li><code>x+</code> - Create new read/write file, error if exists</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">PHP Read File - <code>fread()</code></h2>
      <p>
        The <code>fread()</code> function reads from an open file.  
        The first parameter is the file handle, the second is the number of bytes to read.
      </p>

      <h2 className="text-2xl font-semibold mt-6">PHP Close File - <code>fclose()</code></h2>
      <p>
        It's good practice to close all files after finishing operations.  
        The <code>fclose()</code> function closes a file handle:
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("webdictionary.txt", "r");
// some code here...
fclose($myfile);
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">PHP Read Single Line - <code>fgets()</code></h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);
?>`}
      </pre>
      <p>Note: After calling <code>fgets()</code>, the file pointer moves to the next line.</p>

      <h2 className="text-2xl font-semibold mt-6">PHP Check End-Of-File - <code>feof()</code></h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">PHP Read Single Character - <code>fgetc()</code></h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
while(!feof($myfile)) {
  echo fgetc($myfile);
}
fclose($myfile);
?>`}
      </pre>
      <p>Note: After calling <code>fgetc()</code>, the file pointer moves to the next character.</p>
    </div>
  );
};

export default PHPFileOpenReadClose;
