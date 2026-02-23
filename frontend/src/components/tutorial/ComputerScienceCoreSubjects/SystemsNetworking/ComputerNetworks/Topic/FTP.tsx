import React from 'react';

const FTP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      FTP (File Transfer Protocol)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      FTP is a standard network protocol used for transferring files between a client and server
      over a TCP/IP network. It uses a client-server model with separate control and data
      connections, allowing efficient file transfer and directory navigation.
    </p>

    <h2 className="text-3xl font-bold mt-8">FTP Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Control Port</td>
            <td className="p-3 border">21</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Port</td>
            <td className="p-3 border">20 (active mode)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transport</td>
            <td className="p-3 border">TCP</td>
          </tr>
          <tr>
            <td className="p-3 border">Connections</td>
            <td className="p-3 border">Two (control + data)</td>
          </tr>
          <tr>
            <td className="p-3 border">Authentication</td>
            <td className="p-3 border">Username/password (plaintext)</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Not encrypted (use SFTP/FTPS)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two-Channel Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    FTP Uses Two Separate Connections:

    Client                              Server
       |                                   |
       |=== Control Connection (Port 21) ==|
       |   (Commands: USER, PASS, LIST,    |
       |    RETR, STOR, PWD, CWD, etc.)    |
       |   Remains open during session     |
       |                                   |
       |=== Data Connection (Port 20) =====|
       |   (Actual file transfer or        |
       |    directory listing)             |
       |   Opens/closes per transfer       |
       |                                   |

    Why two connections?
    - Control: Send commands, receive responses
    - Data: Transfer files without blocking commands
    - Can abort transfer while sending new command
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Active vs Passive Mode</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Active Mode (PORT Command):

    Client                              Server
       |                                   |
       |-- Control: CONNECT to port 21 --->|
       |-- Control: PORT 192.168.1.100,5000|
       |   "Connect back to my port 5000"  |
       |                                   |
       |<-- Data: Server connects to ------| Port 20
       |    client's port 5000             |

    Problem: Client's firewall blocks incoming!


    Passive Mode (PASV Command):

    Client                              Server
       |                                   |
       |-- Control: CONNECT to port 21 --->|
       |-- Control: PASV ----------------->|
       |   "Give me a port to connect to"  |
       |<-- 227 Entering Passive Mode -----|
       |    (192,168,1,1,195,80)           |
       |    = IP + port (195*256+80=50000) |
       |                                   |
       |-- Data: Client connects to ------>| Port 50000
       |    server's port 50000            |

    Passive mode works better with firewalls!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Active vs Passive Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Active Mode</th>
            <th className="p-3 border">Passive Mode</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Command</td>
            <td className="p-3 border">PORT</td>
            <td className="p-3 border">PASV</td>
          </tr>
          <tr>
            <td className="p-3 border">Data initiator</td>
            <td className="p-3 border">Server connects to client</td>
            <td className="p-3 border">Client connects to server</td>
          </tr>
          <tr>
            <td className="p-3 border">Server port</td>
            <td className="p-3 border">Port 20</td>
            <td className="p-3 border">Random high port</td>
          </tr>
          <tr>
            <td className="p-3 border">Client firewall</td>
            <td className="p-3 border">Problematic</td>
            <td className="p-3 border">Works well</td>
          </tr>
          <tr>
            <td className="p-3 border">Server firewall</td>
            <td className="p-3 border">Works well</td>
            <td className="p-3 border">Need to open port range</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common FTP Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    FTP Commands:

    Authentication:
    USER username     - Send username
    PASS password     - Send password
    QUIT              - Close connection

    Navigation:
    PWD               - Print working directory
    CWD path          - Change working directory
    CDUP              - Change to parent directory
    LIST              - List files (detailed)
    NLST              - List file names only

    Transfer:
    RETR filename     - Download file (retrieve)
    STOR filename     - Upload file (store)
    DELE filename     - Delete file
    MKD dirname       - Make directory
    RMD dirname       - Remove directory
    RNFR oldname      - Rename from
    RNTO newname      - Rename to

    Mode:
    TYPE A            - ASCII mode (text files)
    TYPE I            - Binary mode (images, executables)
    PASV              - Enter passive mode
    PORT h1,h2,h3,h4,p1,p2 - Specify client port

    Example session:
    220 FTP server ready
    USER john
    331 Password required
    PASS secret
    230 Login successful
    PWD
    257 "/" is current directory
    LIST
    150 Opening data connection
    226 Transfer complete
    QUIT
    221 Goodbye
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">FTP Variants</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Security</th>
            <th className="p-3 border">Port</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FTP</td>
            <td className="p-3 border">None (plaintext)</td>
            <td className="p-3 border">21</td>
          </tr>
          <tr>
            <td className="p-3 border">FTPS</td>
            <td className="p-3 border">TLS/SSL encryption</td>
            <td className="p-3 border">990 (implicit) or 21</td>
          </tr>
          <tr>
            <td className="p-3 border">SFTP</td>
            <td className="p-3 border">SSH encryption</td>
            <td className="p-3 border">22</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>FTP uses two connections: control (21) and data (20)</li>
        <li>Active mode: server connects to client (firewall issues)</li>
        <li>Passive mode: client connects to server (preferred)</li>
        <li>Plain FTP is insecure - use SFTP or FTPS</li>
        <li>ASCII mode for text, Binary for other files</li>
        <li>Commands like RETR (download) and STOR (upload)</li>
      </ul>
    </div>
  </div>
);

export default FTP;
