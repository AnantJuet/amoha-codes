import React from 'react';

const PresentationLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Presentation Layer (Layer 6) - OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Presentation Layer is the sixth layer of the OSI model. It acts as a translator between
      the network and the application, ensuring that data is in a usable format. This layer handles
      data translation, encryption/decryption, and compression/decompression. It is often called the
      syntax layer because it deals with the syntax and semantics of the information exchanged.
    </p>

    {/* Position in OSI */}
    <h2 className="text-3xl font-bold mt-8">Position in OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model:

  +-------------------+
  | 7. Application    |
  +-------------------+
  | 6. PRESENTATION<--+  (You are here!)
  +-------------------+
  | 5. Session        |
  +-------------------+
  | 4. Transport      |
  +-------------------+
  | 3. Network        |
  +-------------------+
  | 2. Data Link      |
  +-------------------+
  | 1. Physical       |
  +-------------------+

  Data Unit: Data
  Functions: Translation, Encryption, Compression
  Examples: SSL/TLS, JPEG, MPEG, ASCII, EBCDIC
`}</pre>
    </div>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of Presentation Layer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Translation</td>
            <td className="p-3 border">Converts data between different formats (e.g., ASCII to EBCDIC)</td>
          </tr>
          <tr>
            <td className="p-3 border">Encryption/Decryption</td>
            <td className="p-3 border">Secures data by encrypting before transmission and decrypting on receipt</td>
          </tr>
          <tr>
            <td className="p-3 border">Compression/Decompression</td>
            <td className="p-3 border">Reduces data size for efficient transmission, restores on receipt</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Formatting</td>
            <td className="p-3 border">Ensures data is in a format that the receiving application understands</td>
          </tr>
          <tr>
            <td className="p-3 border">Character Code Translation</td>
            <td className="p-3 border">Converts between different character encoding schemes</td>
          </tr>
          <tr>
            <td className="p-3 border">Serialization</td>
            <td className="p-3 border">Converts complex data structures into byte streams for transmission</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Translation */}
    <h2 className="text-3xl font-bold mt-8">1. Data Translation</h2>
    <p className="leading-relaxed">
      Different computer systems may use different internal data representations. The Presentation
      Layer translates data between these formats to ensure interoperability.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Data Translation Example:

  System A (ASCII)                     System B (EBCDIC)
  +-------------+                      +-------------+
  |             |                      |             |
  |   'Hello'   |                      |   'Hello'   |
  |             |                      |             |
  | ASCII codes:|                      | EBCDIC codes|
  | H = 72      |                      | H = 200     |
  | e = 101     | ---Translation--->   | e = 133     |
  | l = 108     |    Layer 6           | l = 147     |
  | l = 108     |                      | l = 147     |
  | o = 111     |                      | o = 150     |
  +-------------+                      +-------------+


  Common Character Encoding Schemes:
  +------------+-------------+----------------------------+
  | Encoding   | Bits/Char   | Description                |
  +------------+-------------+----------------------------+
  | ASCII      | 7 bits      | American Standard Code     |
  | EBCDIC     | 8 bits      | IBM mainframe encoding     |
  | Unicode    | Variable    | Universal character set    |
  | UTF-8      | 1-4 bytes   | Variable-length Unicode    |
  | UTF-16     | 2-4 bytes   | Unicode transformation    |
  +------------+-------------+----------------------------+
`}</pre>
    </div>

    {/* Encryption */}
    <h2 className="text-3xl font-bold mt-8">2. Encryption and Decryption</h2>
    <p className="leading-relaxed">
      The Presentation Layer can encrypt data before transmission to protect it from unauthorized
      access. The receiving end decrypts the data to restore the original content.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Encryption Process:

  Sender (Application A)               Receiver (Application B)
       |                                      |
       |  Plain Text: "Hello World"           |
       v                                      |
  +-----------+                               |
  |Presentation                               |
  |  Layer    |                               |
  |           |                               |
  |  Encrypt  |                               |
  +-----------+                               |
       |                                      |
       |  Cipher Text: "Khoor Zruog"          |
       |  (encrypted with key)                |
       |                                      |
       +------------------------------------->|
                                              |
                                         +-----------+
                                         |Presentation
                                         |  Layer    |
                                         |           |
                                         |  Decrypt  |
                                         +-----------+
                                              |
                                              v
                                   Plain Text: "Hello World"


  SSL/TLS Encryption at Presentation Layer:

  Client                                Server
    |                                     |
    |--- Client Hello (cipher suites) --->|
    |                                     |
    |<--- Server Hello + Certificate -----|
    |                                     |
    |--- Key Exchange + Finished -------->|
    |                                     |
    |<====== Encrypted Data =============>|
    |      (using session keys)           |
`}</pre>
    </div>

    {/* Compression */}
    <h2 className="text-3xl font-bold mt-8">3. Compression and Decompression</h2>
    <p className="leading-relaxed">
      Data compression reduces the number of bits to be transmitted, saving bandwidth and
      reducing transmission time. This is especially important for large files and multimedia.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Compression Process:

  Original Data                    Compressed Data
  +------------------+             +--------+
  | 10 MB Image File | -------->   | 2 MB   |  (80% reduction)
  |                  | Compression | File   |
  +------------------+             +--------+
                                        |
                                        | Transmission
                                        v
  Received Data                    +--------+
  +------------------+             | 2 MB   |
  | 10 MB Image File | <--------   | File   |
  |                  | Decompression        |
  +------------------+             +--------+


  Types of Compression:

  1. Lossless Compression:
     - Original data fully recoverable
     - Examples: ZIP, GZIP, PNG, FLAC
     - Used for: Text, executables, documents

  2. Lossy Compression:
     - Some data permanently lost
     - Higher compression ratios
     - Examples: JPEG, MP3, MPEG
     - Used for: Images, audio, video

  +----------------+----------+------------+---------------+
  | Format         | Type     | Compression| Use Case      |
  +----------------+----------+------------+---------------+
  | ZIP, GZIP      | Lossless | 50-70%     | General files |
  | PNG            | Lossless | 10-50%     | Graphics      |
  | JPEG           | Lossy    | 80-95%     | Photos        |
  | MP3            | Lossy    | 90%        | Audio         |
  | H.264/H.265    | Lossy    | 95%+       | Video         |
  +----------------+----------+------------+---------------+
`}</pre>
    </div>

    {/* Data Formats */}
    <h2 className="text-3xl font-bold mt-8">Data Formats Handled</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Formats</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Text</td>
            <td className="p-3 border">ASCII, EBCDIC, Unicode, UTF-8</td>
            <td className="p-3 border">Character encoding schemes</td>
          </tr>
          <tr>
            <td className="p-3 border">Images</td>
            <td className="p-3 border">JPEG, GIF, PNG, TIFF, BMP</td>
            <td className="p-3 border">Graphic file formats</td>
          </tr>
          <tr>
            <td className="p-3 border">Audio</td>
            <td className="p-3 border">MP3, WAV, AAC, FLAC, OGG</td>
            <td className="p-3 border">Audio encoding formats</td>
          </tr>
          <tr>
            <td className="p-3 border">Video</td>
            <td className="p-3 border">MPEG, AVI, MP4, H.264, H.265</td>
            <td className="p-3 border">Video encoding formats</td>
          </tr>
          <tr>
            <td className="p-3 border">Documents</td>
            <td className="p-3 border">PDF, RTF, HTML, XML, JSON</td>
            <td className="p-3 border">Document markup formats</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">SSL, TLS, X.509</td>
            <td className="p-3 border">Encryption standards</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Abstract Syntax Notation */}
    <h2 className="text-3xl font-bold mt-8">Abstract Syntax Notation (ASN.1)</h2>
    <p className="leading-relaxed">
      ASN.1 is a standard interface description language used to define data structures that
      can be serialized and deserialized across different platforms. It is commonly used in
      telecommunications and computer networking.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  ASN.1 Example:

  Definition:
  PersonRecord ::= SEQUENCE {
      name       UTF8String,
      age        INTEGER,
      email      UTF8String OPTIONAL
  }

  Encoded Data (BER - Basic Encoding Rules):
  +-------+--------+------------------+
  | Tag   | Length | Value            |
  +-------+--------+------------------+
  | 30    | 1A     | (SEQUENCE)       |
  | 0C    | 04     | "John"           |
  | 02    | 01     | 25               |
  | 0C    | 0F     | "john@email.com" |
  +-------+--------+------------------+

  Encoding Rules:
  - BER: Basic Encoding Rules
  - DER: Distinguished Encoding Rules (deterministic)
  - PER: Packed Encoding Rules (compact)
  - XER: XML Encoding Rules
`}</pre>
    </div>

    {/* Protocols and Standards */}
    <h2 className="text-3xl font-bold mt-8">Presentation Layer Protocols and Standards</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol/Standard</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SSL/TLS</td>
            <td className="p-3 border">Encryption for secure communication (HTTPS, etc.)</td>
          </tr>
          <tr>
            <td className="p-3 border">MIME</td>
            <td className="p-3 border">Multipurpose Internet Mail Extensions for email attachments</td>
          </tr>
          <tr>
            <td className="p-3 border">JPEG</td>
            <td className="p-3 border">Lossy image compression standard</td>
          </tr>
          <tr>
            <td className="p-3 border">MPEG</td>
            <td className="p-3 border">Video and audio compression standards</td>
          </tr>
          <tr>
            <td className="p-3 border">GIF, PNG</td>
            <td className="p-3 border">Graphics interchange formats</td>
          </tr>
          <tr>
            <td className="p-3 border">ASCII, Unicode</td>
            <td className="p-3 border">Character encoding standards</td>
          </tr>
          <tr>
            <td className="p-3 border">XDR</td>
            <td className="p-3 border">External Data Representation for data exchange</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Real-World Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-World Examples</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">HTTPS (TLS)</h3>
        <p className="text-sm">When you visit a secure website, TLS encrypts all data between your browser and the server, protecting passwords and personal information.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Email Attachments</h3>
        <p className="text-sm">MIME encoding allows binary files (images, documents) to be sent via email by converting them to text format and back.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Video Streaming</h3>
        <p className="text-sm">Services like Netflix use H.264/H.265 compression to deliver high-quality video while minimizing bandwidth usage.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Web Images</h3>
        <p className="text-sm">Images on websites are compressed using JPEG (photos) or PNG (graphics) to reduce page load times.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Presentation Layer is the translator/formatter of the network</li>
      <li>Three main functions: Translation, Encryption, Compression</li>
      <li>Handles character encoding (ASCII, EBCDIC, Unicode)</li>
      <li>SSL/TLS encryption operates at this layer</li>
      <li>Compression can be lossless (ZIP) or lossy (JPEG)</li>
      <li>MIME enables email attachments</li>
      <li>In TCP/IP model, combined with Application layer</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know the three main functions: translation, encryption, compression</li>
        <li>Understand difference between lossless and lossy compression</li>
        <li>SSL/TLS is primarily at Presentation layer (though spans multiple)</li>
        <li>ASCII uses 7 bits (128 characters); Extended ASCII uses 8 bits</li>
        <li>MIME is used for email attachments</li>
        <li>Rarely asked in detail; focus on basic concepts</li>
      </ul>
    </div>
  </div>
);

export default PresentationLayer;
