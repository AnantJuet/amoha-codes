import React from "react";

const SSH: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SSH (Secure Shell)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SSH (Secure Shell) is a cryptographic network protocol for secure remote login,
      command execution, and file transfer. It replaced insecure protocols like Telnet
      and rlogin by providing strong encryption and authentication mechanisms.
    </p>

    <h2 className="text-3xl font-bold mt-8">SSH Protocol Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Port</td>
            <td className="p-3 border">TCP 22 (default)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Versions</td>
            <td className="p-3 border">SSH-1 (deprecated), SSH-2 (current)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key Features</td>
            <td className="p-3 border">Encryption, authentication, integrity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Common Uses</td>
            <td className="p-3 border">Remote shell, file transfer (SCP/SFTP), tunneling</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implementations</td>
            <td className="p-3 border">OpenSSH, PuTTY, Dropbear</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Protocol Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SSH PROTOCOL LAYERS:

┌─────────────────────────────────────────────────────────┐
│ SSH CONNECTION PROTOCOL (RFC 4254)                      │
│ ├── Multiplexed channels                                │
│ ├── Shell sessions                                      │
│ ├── Port forwarding                                     │
│ └── X11 forwarding                                      │
├─────────────────────────────────────────────────────────┤
│ SSH AUTHENTICATION PROTOCOL (RFC 4252)                  │
│ ├── Public key authentication                           │
│ ├── Password authentication                             │
│ ├── Keyboard-interactive                                │
│ └── Host-based authentication                           │
├─────────────────────────────────────────────────────────┤
│ SSH TRANSPORT PROTOCOL (RFC 4253)                       │
│ ├── Server authentication                               │
│ ├── Key exchange (ECDH, DH)                             │
│ ├── Encryption (AES, ChaCha20)                          │
│ └── Integrity (HMAC, AEAD)                              │
├─────────────────────────────────────────────────────────┤
│ TCP/IP                                                  │
└─────────────────────────────────────────────────────────┘

SSH CONNECTION FLOW:
1. TCP connection established (port 22)
2. Protocol version exchange
3. Key exchange and algorithm negotiation
4. Server authentication (host key)
5. User authentication
6. Session establishment
7. Encrypted communication`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic SSH Connection
$ ssh user@hostname
$ ssh -p 2222 user@hostname     # Custom port

# SSH with specific identity file
$ ssh -i ~/.ssh/id_ed25519 user@hostname

# Execute remote command
$ ssh user@hostname 'ls -la /var/log'

# Verbose output for debugging
$ ssh -v user@hostname          # -vv or -vvv for more

# SSH configuration file (~/.ssh/config)
Host myserver
    HostName 192.168.1.100
    User admin
    Port 22
    IdentityFile ~/.ssh/id_ed25519
    ForwardAgent yes

# Now connect with just:
$ ssh myserver

# SCP (Secure Copy)
$ scp file.txt user@host:/remote/path/
$ scp user@host:/remote/file.txt ./local/
$ scp -r directory/ user@host:/remote/path/

# SFTP (Secure File Transfer)
$ sftp user@hostname
sftp> put localfile.txt
sftp> get remotefile.txt
sftp> ls
sftp> cd /path
sftp> exit`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Tunneling / Port Forwarding</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SSH PORT FORWARDING:

LOCAL FORWARDING (-L)
# Access remote_host:8080 via localhost:9000
$ ssh -L 9000:remote_host:8080 user@ssh_server

[localhost:9000] ──SSH──► [ssh_server] ────► [remote_host:8080]

Use case: Access internal web server through SSH jump host

REMOTE FORWARDING (-R)
# Expose localhost:3000 on ssh_server:9000
$ ssh -R 9000:localhost:3000 user@ssh_server

[ssh_server:9000] ◄──SSH── [localhost:3000]

Use case: Expose local development server to internet

DYNAMIC FORWARDING (-D) / SOCKS Proxy
# Create SOCKS5 proxy on localhost:8080
$ ssh -D 8080 user@ssh_server

Configure browser to use SOCKS5 proxy: localhost:8080
All traffic routed through ssh_server

JUMP HOST / ProxyJump
# Connect through intermediate host
$ ssh -J jumphost user@destination

# Or in config:
Host destination
    ProxyJump jumphost`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Recommended</th>
            <th className="p-3 border">Avoid</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Key Exchange</td>
            <td className="p-3 border">curve25519-sha256, ecdh-sha2-nistp384</td>
            <td className="p-3 border">diffie-hellman-group1-sha1</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Host Key</td>
            <td className="p-3 border">ssh-ed25519, ecdsa-sha2-nistp384, rsa-sha2-512</td>
            <td className="p-3 border">ssh-dss, ssh-rsa (sha1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Encryption</td>
            <td className="p-3 border">chacha20-poly1305, aes256-gcm</td>
            <td className="p-3 border">3des-cbc, arcfour</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MAC</td>
            <td className="p-3 border">hmac-sha2-512-etm, umac-128-etm</td>
            <td className="p-3 border">hmac-md5, hmac-sha1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SSH operates on TCP port 22 by default</li>
        <li>Always use SSH-2; SSH-1 has known vulnerabilities</li>
        <li>SSH supports multiple authentication methods (keys, passwords, etc.)</li>
        <li>Port forwarding enables secure tunnels for other protocols</li>
        <li>Use Ed25519 or ECDSA keys for better security and performance</li>
        <li>Configure ~/.ssh/config for easier connection management</li>
      </ul>
    </div>
  </div>
);

export default SSH;
