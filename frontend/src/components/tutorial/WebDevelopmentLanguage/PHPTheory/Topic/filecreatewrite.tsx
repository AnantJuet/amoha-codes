import React from "react";

const PHPFileCreateWrite: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP File Create / Write</h1>

      <p>
        In this chapter, we will learn how to create and write to a file on the server.
      </p>

      <h2 className="text-2xl font-semibold mt-6">PHP Create File - <code>fopen()</code></h2>
      <p>
        The <code>fopen()</code> function is used to open a file, but if the file does not exist, it can also create it when opened in writing (<code>w</code>) or appending (<code>a</code>) mode.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("testfile.txt", "w");
?>`}
      </pre>

      <p className="mt-2">
        <strong>Note:</strong> Ensure your PHP script has write permissions to create files on the server.
      </p>

      <h2 className="text-2xl font-semibold mt-6">PHP Write to File - <code>fwrite()</code></h2>
      <p>
        The <code>fwrite()</code> function writes text to a file. The first parameter is the file handle, the second is the text to write.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "John Doe\\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\\n";
fwrite($myfile, $txt);
fclose($myfile);
?>`}
      </pre>

      <p className="mt-2">
        This will create a file <code>newfile.txt</code> with the content:
      </p>
      <pre className="bg-gray-100 p-2 rounded mt-1">
{`John Doe
Jane Doe`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">PHP Overwriting</h2>
      <p>
        Opening an existing file with mode <code>w</code> will erase all previous content.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "Mickey Mouse\\n";
fwrite($myfile, $txt);
$txt = "Minnie Mouse\\n";
fwrite($myfile, $txt);
fclose($myfile);
?>`}
      </pre>

      <p className="mt-2">
        The file <code>newfile.txt</code> will now contain:
      </p>
      <pre className="bg-gray-100 p-2 rounded mt-1">
{`Mickey Mouse
Minnie Mouse`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">PHP Append Text</h2>
      <p>
        To add text to the end of a file without erasing existing content, use mode <code>a</code> for appending.
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$myfile = fopen("newfile.txt", "a") or die("Unable to open file!");
$txt = "Donald Duck\\n";
fwrite($myfile, $txt);
$txt = "Goofy Goof\\n";
fwrite($myfile, $txt);
fclose($myfile);
?>`}
      </pre>

      <p className="mt-2">
        Now, <code>newfile.txt</code> will contain:
      </p>
      <pre className="bg-gray-100 p-2 rounded mt-1">
{`Mickey Mouse
Minnie Mouse
Donald Duck
Goofy Goof`}
      </pre>
    </div>
  );
};

export default PHPFileCreateWrite;
