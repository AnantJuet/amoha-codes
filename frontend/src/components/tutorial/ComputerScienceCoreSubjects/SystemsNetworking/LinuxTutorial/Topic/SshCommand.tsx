import React from "react";

const SshCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SSH Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SSH (Secure Shell) provides encrypted remote access to Linux systems.
      It supports password and key-based authentication, port forwarding,
      and secure file transfer.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic SSH Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Connect to remote host
$ ssh user@hostname

# Connect on specific port
$ ssh -p 2222 user@hostname

# Connect with specific identity file
$ ssh -i ~/.ssh/mykey user@hostname

# Run command on remote host
$ ssh user@hostname "ls -la"

# Verbose mode for debugging
$ ssh -v user@hostname`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Key Management</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Generate SSH key pair
$ ssh-keygen -t rsa -b 4096
$ ssh-keygen -t ed25519

# Copy public key to server
$ ssh-copy-id user@hostname

# Manual key copy
$ cat ~/.ssh/id_rsa.pub | ssh user@hostname "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# List fingerprints
$ ssh-keygen -lf ~/.ssh/id_rsa.pub`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Config File</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# ~/.ssh/config
Host myserver
    HostName 192.168.1.100
    User admin
    Port 2222
    IdentityFile ~/.ssh/mykey

Host production
    HostName prod.example.com
    User deploy
    ForwardAgent yes

# Then connect with:
$ ssh myserver
$ ssh production`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Port Forwarding</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Local port forwarding
# Access remote:8080 via localhost:3000
$ ssh -L 3000:localhost:8080 user@hostname

# Remote port forwarding
# Expose local:3000 on remote:8080
$ ssh -R 8080:localhost:3000 user@hostname

# Dynamic port forwarding (SOCKS proxy)
$ ssh -D 1080 user@hostname`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common SSH Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-p</td>
            <td className="p-3 border">Specify port number</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-i</td>
            <td className="p-3 border">Identity file (private key)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-L</td>
            <td className="p-3 border">Local port forwarding</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-R</td>
            <td className="p-3 border">Remote port forwarding</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-X</td>
            <td className="p-3 border">Enable X11 forwarding</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-N</td>
            <td className="p-3 border">No command (for tunnels)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use ssh-keygen to create key pairs</li>
        <li>ssh-copy-id simplifies key deployment</li>
        <li>~/.ssh/config saves connection settings</li>
        <li>Port forwarding creates secure tunnels</li>
      </ul>
    </div>
  </div>
);

export default SshCommand;
