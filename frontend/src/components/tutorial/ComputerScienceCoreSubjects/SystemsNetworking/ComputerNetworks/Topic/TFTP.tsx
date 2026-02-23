import React from 'react';

const TFTP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TFTP (Trivial File Transfer Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      TFTP is a simplified file transfer protocol that provides basic file transfer functionality
      without the complexity of FTP. It uses UDP for transport and has no authentication,
      making it lightweight but suitable only for trusted network environments.
    </p>

    <h2 className="text-3xl font-bold mt-8">FTP vs TFTP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">FTP</th>
            <th className="p-3 border">TFTP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">TCP</td>
            <td className="p-3 border">UDP</td>
          </tr>
          <tr>
            <td className="p-3 border">Port</td>
            <td className="p-3 border">21 (control), 20 (data)</td>
            <td className="p-3 border">69</td>
          </tr>
          <tr>
            <td className="p-3 border">Authentication</td>
            <td className="p-3 border">Username/password</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border">Directory listing</td>
            <td className="p-3 border">Yes (LIST)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Operations</td>
            <td className="p-3 border">Many (rename, delete, etc.)</td>
            <td className="p-3 border">Read/Write only</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Simple</td>
          </tr>
          <tr>
            <td className="p-3 border">Block size</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">512 bytes (default)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TFTP Message Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Opcode</th>
            <th className="p-3 border">Message</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">RRQ (Read Request)</td>
            <td className="p-3 border">Request to download file</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">WRQ (Write Request)</td>
            <td className="p-3 border">Request to upload file</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">DATA</td>
            <td className="p-3 border">Data block with content</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">ACK</td>
            <td className="p-3 border">Acknowledge data block</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">ERROR</td>
            <td className="p-3 border">Error notification</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TFTP Read Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TFTP Download (Read Request):

    Client                              Server
       |                                   |
       |-- RRQ "file.txt" ---------------->| Port 69
       |   Opcode=1, filename, mode        |
       |                                   |
       |<-- DATA Block 1 -----------------| Port N (random)
       |   Opcode=3, Block#=1, Data(512B)  |
       |                                   |
       |-- ACK Block 1 ------------------>|
       |   Opcode=4, Block#=1              |
       |                                   |
       |<-- DATA Block 2 -----------------|
       |   Opcode=3, Block#=2, Data(512B)  |
       |                                   |
       |-- ACK Block 2 ------------------>|
       |                                   |
       |<-- DATA Block 3 (last) ----------|
       |   Opcode=3, Block#=3, Data(<512B) |
       |   (Less than 512 bytes = EOF)     |
       |                                   |
       |-- ACK Block 3 ------------------>|
       |                                   |

    Block less than 512 bytes signals end of file.
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TFTP Write Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TFTP Upload (Write Request):

    Client                              Server
       |                                   |
       |-- WRQ "file.txt" ---------------->| Port 69
       |   Opcode=2, filename, mode        |
       |                                   |
       |<-- ACK Block 0 ------------------| Port N
       |   Opcode=4, Block#=0              |
       |   (0 means ready to receive)      |
       |                                   |
       |-- DATA Block 1 ----------------->|
       |   Opcode=3, Block#=1, Data        |
       |                                   |
       |<-- ACK Block 1 ------------------|
       |                                   |
       |-- DATA Block 2 ----------------->|
       |                                   |
       |<-- ACK Block 2 ------------------|
       |                                   |
       |-- DATA Block 3 (last) ---------->|
       |   Data < 512 bytes               |
       |                                   |
       |<-- ACK Block 3 ------------------|
       |                                   |
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TFTP Use Cases</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Common Uses</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Network device booting (PXE)</li>
          <li>Firmware updates on routers</li>
          <li>Diskless workstations</li>
          <li>IP phone configuration</li>
          <li>Simple embedded systems</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Why TFTP for Booting</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Small code footprint</li>
          <li>Easy to implement in ROM</li>
          <li>No authentication needed at boot</li>
          <li>UDP is simpler than TCP</li>
          <li>Works before OS is loaded</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">TFTP Error Codes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Code</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Not defined (see message)</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">File not found</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Access violation</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Disk full or allocation exceeded</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Illegal TFTP operation</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Unknown transfer ID</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">File already exists</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">No such user</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>TFTP uses UDP port 69, simpler than FTP</li>
        <li>No authentication - use in trusted networks only</li>
        <li>Only read (RRQ) and write (WRQ) operations</li>
        <li>512-byte blocks, each must be acknowledged</li>
        <li>Block less than 512 bytes indicates EOF</li>
        <li>Common for network booting (PXE)</li>
      </ul>
    </div>
  </div>
);

export default TFTP;
