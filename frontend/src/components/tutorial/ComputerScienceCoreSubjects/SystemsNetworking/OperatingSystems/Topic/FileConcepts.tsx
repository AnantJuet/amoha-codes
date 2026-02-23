import React from 'react';

const FileConcepts: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Concepts
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A file is a named collection of related information that is recorded on secondary storage.
      From a user's perspective, a file is the smallest allotment of logical secondary storage;
      data cannot be written to secondary storage unless they are within a file.
    </p>

    {/* What is a File */}
    <h2 className="text-3xl font-bold mt-8">What is a File?</h2>
    <p className="leading-relaxed">
      A file is a logical storage unit that abstracts the physical properties of its storage
      devices. The operating system maps files onto physical devices. Files represent programs
      (both source and object forms) and data. Data files may be numeric, alphabetic,
      alphanumeric, or binary.
    </p>

    {/* File Structure */}
    <h2 className="text-3xl font-bold mt-8">File Structure</h2>
    <p className="leading-relaxed">
      A file has a certain defined structure, which depends on its type:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>None (Sequence of Bytes):</strong> The simplest form where the file is
        an unstructured sequence of bytes. The OS does not know or care about the contents.
        Maximum flexibility is given to user programs (used by UNIX, Windows, macOS).
      </li>
      <li>
        <strong>Simple Record Structure:</strong> Files are sequences of fixed-length
        or variable-length records. Used in older systems like punch cards.
      </li>
      <li>
        <strong>Complex Structures:</strong> Formatted documents, relocatable load files,
        databases. The structure can be simulated by inserting control characters.
      </li>
    </ul>

    {/* File Types */}
    <h2 className="text-3xl font-bold mt-8">File Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">File Type</th>
            <th className="p-3 border">Extensions</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Executable</td>
            <td className="p-3 border">.exe, .com, .bin, none</td>
            <td className="p-3 border">Ready-to-run machine code</td>
          </tr>
          <tr>
            <td className="p-3 border">Object</td>
            <td className="p-3 border">.obj, .o</td>
            <td className="p-3 border">Compiled, not linked code</td>
          </tr>
          <tr>
            <td className="p-3 border">Source Code</td>
            <td className="p-3 border">.c, .cpp, .java, .py</td>
            <td className="p-3 border">Human-readable source code</td>
          </tr>
          <tr>
            <td className="p-3 border">Text</td>
            <td className="p-3 border">.txt, .doc, .rtf</td>
            <td className="p-3 border">Textual data, documents</td>
          </tr>
          <tr>
            <td className="p-3 border">Library</td>
            <td className="p-3 border">.lib, .a, .dll, .so</td>
            <td className="p-3 border">Libraries of routines</td>
          </tr>
          <tr>
            <td className="p-3 border">Multimedia</td>
            <td className="p-3 border">.mp3, .mp4, .jpg, .png</td>
            <td className="p-3 border">Audio, video, images</td>
          </tr>
          <tr>
            <td className="p-3 border">Archive</td>
            <td className="p-3 border">.zip, .tar, .rar</td>
            <td className="p-3 border">Compressed files</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Internal File Structure */}
    <h2 className="text-3xl font-bold mt-8">Internal File Structure</h2>
    <p className="leading-relaxed">
      Disk systems typically have a well-defined block size determined by sector size.
      All disk I/O is performed in units of one block (physical record). Files are stored
      as a sequence of blocks.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
File Storage in Blocks:
+--------+--------+--------+--------+--------+
| Block  | Block  | Block  | Block  | Block  |
|   0    |   1    |   2    |   3    |   4    |
+--------+--------+--------+--------+--------+
|<-------- File Data -------->|<-- Waste -->|

Example: Block size = 512 bytes
         File size = 1949 bytes
         Blocks needed = ceil(1949/512) = 4 blocks
         Space used = 4 * 512 = 2048 bytes
         Internal fragmentation = 2048 - 1949 = 99 bytes
`}
      </pre>
    </div>

    {/* File Naming */}
    <h2 className="text-3xl font-bold mt-8">File Naming Conventions</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Files are named for convenience of the user</li>
      <li>The exact rules for naming vary from system to system</li>
      <li>Most systems allow letters, digits, and special characters</li>
      <li>Some systems are case-sensitive (UNIX), others are not (Windows)</li>
      <li>Maximum name length varies (255 characters is common)</li>
      <li>Extensions indicate file type but may not be enforced</li>
    </ul>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operating System</th>
            <th className="p-3 border">Case Sensitive</th>
            <th className="p-3 border">Max Name Length</th>
            <th className="p-3 border">Restrictions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">UNIX/Linux</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">255</td>
            <td className="p-3 border">No / or null</td>
          </tr>
          <tr>
            <td className="p-3 border">Windows (NTFS)</td>
            <td className="p-3 border">Preserving, not sensitive</td>
            <td className="p-3 border">255</td>
            <td className="p-3 border">No \ / : * ? " &lt; &gt; |</td>
          </tr>
          <tr>
            <td className="p-3 border">macOS</td>
            <td className="p-3 border">Configurable</td>
            <td className="p-3 border">255</td>
            <td className="p-3 border">No / or :</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Logical vs Physical Files */}
    <h2 className="text-3xl font-bold mt-8">Logical vs Physical Files</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Logical File</th>
            <th className="p-3 border">Physical File</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Definition</td>
            <td className="p-3 border">User's view of file</td>
            <td className="p-3 border">Actual storage on disk</td>
          </tr>
          <tr>
            <td className="p-3 border">Structure</td>
            <td className="p-3 border">Sequential bytes/records</td>
            <td className="p-3 border">Disk blocks</td>
          </tr>
          <tr>
            <td className="p-3 border">Access</td>
            <td className="p-3 border">By name and operations</td>
            <td className="p-3 border">By block addresses</td>
          </tr>
          <tr>
            <td className="p-3 border">Managed By</td>
            <td className="p-3 border">Application</td>
            <td className="p-3 border">File system</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>A file is a named collection of related data stored on secondary storage</li>
      <li>Files abstract physical storage details from users</li>
      <li>File types can be indicated by extensions but are not always enforced</li>
      <li>Files are stored in blocks, leading to internal fragmentation</li>
      <li>Naming conventions and rules vary across operating systems</li>
    </ul>
  </div>
);

export default FileConcepts;
