import React from "react";

const PHPDateTime: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Date and Time</h1>

      <h2 className="text-2xl font-semibold mt-6">The PHP <code>date()</code> Function</h2>
      <p>
        The <code>date()</code> function formats a timestamp into a more readable date and time.
      </p>

      <h3 className="text-xl font-semibold mt-4">Syntax</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`date(format, timestamp)`}
      </pre>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>format</strong> (required): Specifies the format of the timestamp</li>
        <li><strong>timestamp</strong> (optional): Specifies a timestamp. Default is the current date and time</li>
      </ul>
      <p>
        A timestamp is a sequence of characters representing the date and/or time of an event.
      </p>

      <h3 className="text-xl font-semibold mt-4">Formatting Dates</h3>
      <p>Common characters used for formatting dates:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><code>d</code> - Day of the month (01 to 31)</li>
        <li><code>m</code> - Month (01 to 12)</li>
        <li><code>Y</code> - Year in four digits</li>
        <li><code>l</code> (lowercase L) - Day of the week</li>
        <li>Other characters like "/", ".", or "-" can be added for formatting</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Example: Format Today's Date</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
echo "Today is " . date("Y/m/d") . "<br>";
echo "Today is " . date("Y.m.d") . "<br>";
echo "Today is " . date("Y-m-d") . "<br>";
echo "Today is " . date("l");
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Automatic Copyright Year</h3>
      <p>Use <code>date()</code> to automatically update the copyright year:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`&copy; 2010-<?php echo date("Y"); ?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Formatting Time</h3>
      <p>Common characters used for formatting times:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><code>H</code> - 24-hour format (00 to 23)</li>
        <li><code>h</code> - 12-hour format with leading zeros (01 to 12)</li>
        <li><code>i</code> - Minutes with leading zeros (00 to 59)</li>
        <li><code>s</code> - Seconds with leading zeros (00 to 59)</li>
        <li><code>a</code> - Lowercase am/pm</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Example: Current Time</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
echo "The time is " . date("h:i:sa");
?>`}
      </pre>
    </div>
  );
};

export default PHPDateTime;
