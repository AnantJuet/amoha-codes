import React from "react";

const SSHAuth: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SSH Authentication Methods
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SSH supports multiple authentication methods to verify user identity before granting
      access. Public key authentication is the most secure and commonly recommended method,
      while password authentication provides simplicity at the cost of security.
    </p>

    <h2 className="text-3xl font-bold mt-8">Authentication Methods Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Security Level</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Pros/Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Public Key</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Standard secure access</td>
            <td className="p-3 border">Most secure, no password transmission</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Password</td>
            <td className="p-3 border">Low-Medium</td>
            <td className="p-3 border">Quick setup, temporary access</td>
            <td className="p-3 border">Simple but vulnerable to brute force</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Certificate-Based</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Enterprise environments</td>
            <td className="p-3 border">Scalable, centralized management</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GSSAPI/Kerberos</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Active Directory/SSO</td>
            <td className="p-3 border">Integrates with enterprise auth</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Keyboard-Interactive</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">MFA, challenge-response</td>
            <td className="p-3 border">Flexible, supports 2FA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Public Key Authentication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PUBLIC KEY AUTHENTICATION FLOW:

1. Key Pair Generation (on client)
   ┌────────────────────────────────────────┐
   │ Private Key (id_ed25519)               │ - Kept secret on client
   │ Public Key (id_ed25519.pub)            │ - Copied to server
   └────────────────────────────────────────┘

2. Server Configuration
   Public key added to ~/.ssh/authorized_keys

3. Authentication Process:

   Client                              Server
      │                                   │
      │──── Connection request ──────────►│
      │                                   │
      │◄─── Challenge (random data) ──────│
      │                                   │
      │──── Signed response ─────────────►│
      │     (signature using private key) │
      │                                   │
      │     Server verifies signature     │
      │     using stored public key       │
      │                                   │
      │◄─── Access granted ───────────────│

Benefits:
├── Private key never transmitted
├── Immune to password brute force
├── Can be protected with passphrase
└── Supports key agent for convenience`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Key Generation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Generate Ed25519 key (recommended)
$ ssh-keygen -t ed25519 -C "user@email.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/user/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase): ********
Your identification has been saved in /home/user/.ssh/id_ed25519
Your public key has been saved in /home/user/.ssh/id_ed25519.pub

# Generate RSA key (if Ed25519 not supported)
$ ssh-keygen -t rsa -b 4096 -C "user@email.com"

# Generate ECDSA key
$ ssh-keygen -t ecdsa -b 384 -C "user@email.com"

# View public key
$ cat ~/.ssh/id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIG... user@email.com

# Copy public key to server
$ ssh-copy-id user@hostname
# Or manually:
$ cat ~/.ssh/id_ed25519.pub | ssh user@hostname 'cat >> ~/.ssh/authorized_keys'

# Verify key fingerprint
$ ssh-keygen -lf ~/.ssh/id_ed25519.pub
256 SHA256:abc123... user@email.com (ED25519)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSH Agent</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SSH AGENT USAGE:

# Start SSH agent
$ eval $(ssh-agent -s)
Agent pid 12345

# Add key to agent
$ ssh-add ~/.ssh/id_ed25519
Enter passphrase for /home/user/.ssh/id_ed25519: ********
Identity added: /home/user/.ssh/id_ed25519 (user@email.com)

# List loaded keys
$ ssh-add -l
256 SHA256:abc123... user@email.com (ED25519)

# Remove all keys from agent
$ ssh-add -D

# Agent forwarding (use with caution)
$ ssh -A user@jumphost
# Now on jumphost, can SSH to other servers using your local keys

# Keychain (persistent agent across sessions)
$ keychain ~/.ssh/id_ed25519
$ source ~/.keychain/$HOSTNAME-sh

# SSH config for agent forwarding
Host jumphost
    ForwardAgent yes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">sshd_config Security Settings</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# /etc/ssh/sshd_config - Secure Configuration

# Use SSH Protocol 2 only
Protocol 2

# Authentication methods
PubkeyAuthentication yes
PasswordAuthentication no          # Disable password auth
PermitEmptyPasswords no
ChallengeResponseAuthentication no

# Restrict root login
PermitRootLogin prohibit-password  # Key only for root
# Or: PermitRootLogin no            # No root login at all

# Limit authentication attempts
MaxAuthTries 3
LoginGraceTime 60

# Use strong algorithms
KexAlgorithms curve25519-sha256,ecdh-sha2-nistp384
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com
MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com
HostKeyAlgorithms ssh-ed25519,ecdsa-sha2-nistp384

# Additional hardening
AllowUsers admin deploy           # Whitelist users
AllowGroups sshusers              # Or whitelist groups
ClientAliveInterval 300
ClientAliveCountMax 2
X11Forwarding no
AllowTcpForwarding no             # If tunneling not needed

# Reload after changes
$ sudo systemctl reload sshd`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Types Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Key Type</th>
            <th className="p-3 border">Key Size</th>
            <th className="p-3 border">Security</th>
            <th className="p-3 border">Performance</th>
            <th className="p-3 border">Recommendation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Ed25519</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Fastest</td>
            <td className="p-3 border text-green-600 dark:text-green-400">Highly Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ECDSA</td>
            <td className="p-3 border">256/384/521 bits</td>
            <td className="p-3 border">Very Good</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border text-green-600 dark:text-green-400">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RSA</td>
            <td className="p-3 border">3072+ bits</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border text-yellow-600 dark:text-yellow-400">Use 4096 bits minimum</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DSA</td>
            <td className="p-3 border">1024 bits</td>
            <td className="p-3 border">Weak</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border text-red-600 dark:text-red-400">Deprecated - Do Not Use</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Public key authentication is more secure than passwords</li>
        <li>Ed25519 is the recommended key type for new deployments</li>
        <li>Always protect private keys with a strong passphrase</li>
        <li>Use SSH agent to avoid repeatedly entering passphrases</li>
        <li>Disable password authentication on production servers</li>
        <li>Regularly rotate SSH keys and audit authorized_keys</li>
      </ul>
    </div>
  </div>
);

export default SSHAuth;
