import React from "react";

const SSH: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SSH - Secure Shell Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Secure Shell (SSH)</strong> is a cryptographic network protocol for secure
      communication over an unsecured network. It provides encrypted remote login,
      command execution, file transfer, and tunneling capabilities.
    </p>

    <h2 className="text-3xl font-bold mt-8">SSH Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SSH Protocol Layers:

+----------------------------------+
|        Application Layer         |
|   (Remote Login, File Transfer)  |
+----------------------------------+
|     SSH Connection Protocol      |
|  (Channels, Sessions, Forwarding)|
+----------------------------------+
|   SSH Authentication Protocol    |
|  (Password, Public Key, etc.)    |
+----------------------------------+
|     SSH Transport Protocol       |
|  (Encryption, Integrity, KEX)    |
+----------------------------------+
|              TCP                 |
|           (Port 22)              |
+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Connection Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SSH Connection Steps:

1. TCP CONNECTION
   Client connects to server port 22

2. PROTOCOL VERSION EXCHANGE
   SSH-2.0-OpenSSH_8.9

3. KEY EXCHANGE (KEX)
   - Agree on algorithms
   - Generate session keys
   - Verify server identity

4. USER AUTHENTICATION
   - Password
   - Public key
   - Keyboard-interactive

5. SESSION ESTABLISHMENT
   - Open channel
   - Request service (shell, exec, sftp)
   - Encrypted communication begins`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Authentication Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Security</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Password</td>
            <td className="p-3 border">Username and password</td>
            <td className="p-3 border">Basic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Public Key</td>
            <td className="p-3 border">RSA/Ed25519 key pair</td>
            <td className="p-3 border">Strong</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Certificate</td>
            <td className="p-3 border">CA-signed certificates</td>
            <td className="p-3 border">Very Strong</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GSSAPI</td>
            <td className="p-3 border">Kerberos integration</td>
            <td className="p-3 border">Enterprise</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common SSH Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic connection
ssh user@hostname

# Specify port
ssh -p 2222 user@hostname

# Use specific key
ssh -i ~/.ssh/mykey user@hostname

# Execute remote command
ssh user@hostname "ls -la"

# Copy files (SCP)
scp file.txt user@hostname:/path/
scp user@hostname:/path/file.txt ./

# SFTP session
sftp user@hostname

# Port forwarding (local)
ssh -L 8080:localhost:80 user@hostname

# Port forwarding (remote)
ssh -R 8080:localhost:80 user@hostname

# Generate key pair
ssh-keygen -t ed25519 -C "email@example.com"

# Copy public key to server
ssh-copy-id user@hostname`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Security Features</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SSH Security:

ENCRYPTION
- AES-256-GCM, ChaCha20-Poly1305
- All traffic encrypted

INTEGRITY
- HMAC-SHA256, ETM modes
- Detects tampering

KEY EXCHANGE
- Diffie-Hellman, ECDH
- Perfect forward secrecy

HOST VERIFICATION
- Known hosts file
- Prevents MITM attacks

~/.ssh/known_hosts:
hostname ssh-ed25519 AAAAC3NzaC1...`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>SSH provides encrypted remote access on port 22</li>
        <li>Supports password, public key, and certificate auth</li>
        <li>Enables secure file transfer (SCP/SFTP)</li>
        <li>Supports port forwarding and tunneling</li>
        <li>Always verify host keys to prevent MITM attacks</li>
      </ul>
    </div>
  </div>
);

export default SSH;
