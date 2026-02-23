import React from 'react';

const Encryption: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Encryption Basics and Use in Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Encryption is the process of converting readable data (plaintext) into an
      unreadable format (ciphertext) using an algorithm and a key. Only those with
      the correct key can decrypt and read the original data. Operating systems
      use encryption extensively to protect data at rest, data in transit, and to
      secure authentication mechanisms.
    </p>

    {/* Basic Concepts */}
    <h2 className="text-3xl font-bold mt-8">Encryption Fundamentals</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Encryption Process:
===============================================================================

                    KEY
                     │
                     ▼
    ┌──────────┐   ┌───────────────┐   ┌──────────────┐
    │PLAINTEXT │ → │  ENCRYPTION   │ → │  CIPHERTEXT  │
    │          │   │   ALGORITHM   │   │              │
    │"Hello"   │   │    (AES)      │   │"xK9#mQ..."   │
    └──────────┘   └───────────────┘   └──────────────┘


Decryption Process:
                    KEY
                     │
                     ▼
    ┌──────────────┐   ┌───────────────┐   ┌──────────┐
    │  CIPHERTEXT  │ → │  DECRYPTION   │ → │PLAINTEXT │
    │              │   │   ALGORITHM   │   │          │
    │"xK9#mQ..."   │   │    (AES)      │   │"Hello"   │
    └──────────────┘   └───────────────┘   └──────────┘


Key Terminology:
─────────────────────────────────────────────────────────────────────────────
Plaintext:    Original, readable data
Ciphertext:   Encrypted, unreadable data
Key:          Secret value used for encryption/decryption
Algorithm:    Mathematical procedure (cipher) for transformation
Key Space:    All possible keys (larger = more secure)
`}
      </pre>
    </div>

    {/* Symmetric vs Asymmetric */}
    <h2 className="text-3xl font-bold mt-8">Symmetric vs Asymmetric Encryption</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Symmetric</th>
            <th className="p-3 border">Asymmetric</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Keys</td>
            <td className="p-3 border">Same key for encrypt/decrypt</td>
            <td className="p-3 border">Public key + Private key</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Speed</td>
            <td className="p-3 border">Fast (100-1000x faster)</td>
            <td className="p-3 border">Slow (complex math)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Key Distribution</td>
            <td className="p-3 border">Challenging (must be secret)</td>
            <td className="p-3 border">Easy (public key is public)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Key Size</td>
            <td className="p-3 border">128-256 bits</td>
            <td className="p-3 border">2048-4096 bits (RSA)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Use Cases</td>
            <td className="p-3 border">Bulk data encryption</td>
            <td className="p-3 border">Key exchange, signatures</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Examples</td>
            <td className="p-3 border">AES, ChaCha20, 3DES</td>
            <td className="p-3 border">RSA, ECC, Diffie-Hellman</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Symmetric Encryption */}
    <h2 className="text-3xl font-bold mt-8">Symmetric Encryption</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Symmetric Encryption:
===============================================================================

    Alice                                              Bob
    ┌─────────────────────┐                ┌─────────────────────┐
    │                     │                │                     │
    │  Plaintext: "Hello" │                │  Ciphertext received│
    │                     │                │                     │
    │  Key: K             │                │  Key: K (same!)     │
    │        │            │                │        │            │
    │        ▼            │                │        ▼            │
    │  ┌──────────────┐   │                │  ┌──────────────┐   │
    │  │   Encrypt    │   │                │  │   Decrypt    │   │
    │  │   with K     │   │    Network     │  │   with K     │   │
    │  └──────┬───────┘   │                │  └──────┬───────┘   │
    │         │           │                │         │           │
    │         ▼           │                │         ▼           │
    │  Ciphertext ────────┼───────────────►│  Plaintext: "Hello" │
    │                     │                │                     │
    └─────────────────────┘                └─────────────────────┘

    Problem: How to share the key K securely?


AES (Advanced Encryption Standard):
─────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────┐
│  AES Characteristics:                                                   │
│                                                                         │
│  Block Size:    128 bits (16 bytes)                                    │
│  Key Sizes:     128, 192, or 256 bits                                  │
│  Rounds:        10 (AES-128), 12 (AES-192), 14 (AES-256)              │
│                                                                         │
│  Operations per round:                                                  │
│  1. SubBytes     - Byte substitution using S-box                       │
│  2. ShiftRows    - Row-wise permutation                                │
│  3. MixColumns   - Column mixing (except final round)                  │
│  4. AddRoundKey  - XOR with round key                                  │
│                                                                         │
│  Status: Current standard, widely used, hardware acceleration (AES-NI) │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Asymmetric Encryption */}
    <h2 className="text-3xl font-bold mt-8">Asymmetric (Public Key) Encryption</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Asymmetric Encryption:
===============================================================================

Key Generation:
─────────────────────────────────────────────────────────────────────────────

    Bob generates key pair:
    ┌─────────────────────────────────────────┐
    │  $ ssh-keygen -t rsa -b 4096           │
    │                                         │
    │  ┌───────────────┐  ┌───────────────┐  │
    │  │ PUBLIC KEY    │  │ PRIVATE KEY   │  │
    │  │ (share with   │  │ (keep SECRET) │  │
    │  │  everyone)    │  │               │  │
    │  │               │  │               │  │
    │  │ id_rsa.pub    │  │ id_rsa        │  │
    │  └───────────────┘  └───────────────┘  │
    └─────────────────────────────────────────┘


Encryption with Public Key:
─────────────────────────────────────────────────────────────────────────────

    Alice                                              Bob
    ┌─────────────────────┐                ┌─────────────────────┐
    │                     │                │                     │
    │  Has: Bob's PUBLIC  │                │  Has: PRIVATE key   │
    │        key          │                │       (secret)      │
    │                     │                │                     │
    │  Plaintext: "Hello" │                │  Ciphertext         │
    │        │            │                │        │            │
    │        ▼            │                │        ▼            │
    │  ┌──────────────┐   │                │  ┌──────────────┐   │
    │  │   Encrypt    │   │    Network     │  │   Decrypt    │   │
    │  │   with Bob's │   │                │  │   with Bob's │   │
    │  │   PUBLIC key │   │                │  │   PRIVATE key│   │
    │  └──────┬───────┘   │                │  └──────┬───────┘   │
    │         │           │                │         │           │
    │         ▼           │                │         ▼           │
    │  Ciphertext ────────┼───────────────►│  Plaintext: "Hello" │
    │                     │                │                     │
    └─────────────────────┘                └─────────────────────┘

    Only Bob (with private key) can decrypt!


Digital Signature (Reverse: Sign with Private):
─────────────────────────────────────────────────────────────────────────────

    Alice signs document:                   Anyone verifies:
    ┌─────────────────────┐                ┌─────────────────────┐
    │  Document           │                │  Document           │
    │      │              │                │  Signature          │
    │      ▼              │                │      │              │
    │  Hash(Document)     │                │      ▼              │
    │      │              │                │  Decrypt signature  │
    │      ▼              │                │  with Alice's       │
    │  Sign with Alice's  │                │  PUBLIC key         │
    │  PRIVATE key        │                │      │              │
    │      │              │                │      ▼              │
    │      ▼              │                │  Compare with       │
    │  Signature ─────────┼───────────────►│  Hash(Document)     │
    │                     │                │  MATCH = Valid!     │
    └─────────────────────┘                └─────────────────────┘
`}
      </pre>
    </div>

    {/* Hybrid Encryption */}
    <h2 className="text-3xl font-bold mt-8">Hybrid Encryption (TLS/SSL)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Hybrid Encryption (Best of Both):
===============================================================================

Used in TLS/HTTPS - Combines speed of symmetric with key exchange of asymmetric

    Client                                              Server
    ┌─────────────────────┐                ┌─────────────────────┐
    │                     │                │                     │
    │  1. Request         │                │  Server's           │
    │     connection      │───────────────►│  Certificate        │
    │                     │                │  (Public Key)       │
    │                     │◄───────────────│                     │
    │  2. Receive         │                │                     │
    │     server's        │                │                     │
    │     public key      │                │                     │
    │                     │                │                     │
    │  3. Generate random │                │                     │
    │     SESSION KEY     │                │                     │
    │     (symmetric)     │                │                     │
    │                     │                │                     │
    │  4. Encrypt session │                │                     │
    │     key with        │                │                     │
    │     server's PUBLIC │                │  5. Decrypt with    │
    │     key             │───────────────►│     PRIVATE key     │
    │                     │                │     to get session  │
    │                     │                │     key             │
    │                     │                │                     │
    │  6. NOW BOTH HAVE SESSION KEY - Use symmetric encryption  │
    │                     │                │                     │
    │     Encrypt data ◄──┼────AES────────►│  Encrypt data      │
    │     with session    │   (fast!)      │  with session      │
    │     key             │                │  key               │
    │                     │                │                     │
    └─────────────────────┘                └─────────────────────┘

Benefits:
- Asymmetric: Solves key distribution problem
- Symmetric: Fast bulk data encryption
`}
      </pre>
    </div>

    {/* Encryption in OS */}
    <h2 className="text-3xl font-bold mt-8">Encryption Uses in Operating Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">What It Protects</th>
            <th className="p-3 border">Technology</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Full Disk Encryption</td>
            <td className="p-3 border">Entire disk contents</td>
            <td className="p-3 border">BitLocker, LUKS, FileVault</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">File System Encryption</td>
            <td className="p-3 border">Specific files/directories</td>
            <td className="p-3 border">EFS (Windows), eCryptfs</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Password Storage</td>
            <td className="p-3 border">User credentials</td>
            <td className="p-3 border">SHA-512, bcrypt, Argon2</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Secure Boot</td>
            <td className="p-3 border">Boot process integrity</td>
            <td className="p-3 border">UEFI Secure Boot, TPM</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Network Communication</td>
            <td className="p-3 border">Data in transit</td>
            <td className="p-3 border">TLS/SSL, IPsec, WPA3</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Memory Protection</td>
            <td className="p-3 border">Sensitive data in RAM</td>
            <td className="p-3 border">AMD SME, Intel TME</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Full Disk Encryption */}
    <h2 className="text-3xl font-bold mt-8">Full Disk Encryption</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Full Disk Encryption (FDE):
===============================================================================

LUKS (Linux Unified Key Setup):
─────────────────────────────────────────────────────────────────────────────

┌─────────────────────────────────────────────────────────────────────────┐
│                          LUKS HEADER                                    │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Magic: "LUKS"                                                   │   │
│  │  Version: 2                                                      │   │
│  │  Cipher: aes-xts-plain64                                         │   │
│  │  Key Slots: 8 (multiple passwords can unlock same disk)         │   │
│  │                                                                   │   │
│  │  Key Slot 0: User password encrypted Master Key                 │   │
│  │  Key Slot 1: Recovery key encrypted Master Key                  │   │
│  │  Key Slot 2: [empty]                                            │   │
│  │  ...                                                             │   │
│  └─────────────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────────┤
│                       ENCRYPTED DATA                                    │
│                                                                         │
│  All data encrypted with Master Key                                    │
│  (Master Key encrypted in key slots)                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


Boot Process with FDE:
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
    │   BIOS/     │     │  Bootloader │     │  initramfs  │
    │   UEFI      │────►│  (GRUB)     │────►│  (decrypt)  │
    │             │     │  unencrypted│     │             │
    └─────────────┘     └─────────────┘     └──────┬──────┘
                                                   │
                                           Password prompt
                                                   │
                                                   ▼
                                           ┌─────────────┐
                                           │  Decrypt    │
                                           │  Master Key │
                                           └──────┬──────┘
                                                   │
                                                   ▼
                                           ┌─────────────┐
                                           │  Mount root │
                                           │  filesystem │
                                           └──────┬──────┘
                                                   │
                                                   ▼
                                           ┌─────────────┐
                                           │  Continue   │
                                           │  boot       │
                                           └─────────────┘
`}
      </pre>
    </div>

    {/* Hashing */}
    <h2 className="text-3xl font-bold mt-8">Hashing (One-Way Functions)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Cryptographic Hash Functions:
===============================================================================

Properties:
─────────────────────────────────────────────────────────────────────────────
1. Deterministic:     Same input always produces same output
2. Fixed Output:      Output is always same length
3. One-Way:           Cannot reverse hash to get input
4. Collision Resistant: Hard to find two inputs with same hash
5. Avalanche Effect:  Small input change = completely different hash


Example (SHA-256):
─────────────────────────────────────────────────────────────────────────────

Input: "Hello"
Hash:  185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969

Input: "hello" (just lowercase h)
Hash:  2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
       Completely different! (Avalanche effect)


Common Hash Functions:
═══════════════════════════════════════════════════════════════════════════

┌──────────────┬────────────┬──────────────────────────────────────────────┐
│ Algorithm    │ Output     │ Status                                       │
├──────────────┼────────────┼──────────────────────────────────────────────┤
│ MD5          │ 128 bits   │ BROKEN - Do not use for security            │
│ SHA-1        │ 160 bits   │ BROKEN - Deprecated, avoid                  │
│ SHA-256      │ 256 bits   │ SECURE - Current standard                   │
│ SHA-3        │ Variable   │ SECURE - Newest standard                    │
│ BLAKE2/3     │ Variable   │ SECURE - Fast, modern                       │
└──────────────┴────────────┴──────────────────────────────────────────────┘


Password Hashing (Special):
─────────────────────────────────────────────────────────────────────────────

Regular hash:    Fast (bad for passwords - easy to brute force)
Password hash:   Intentionally SLOW (hard to brute force)

bcrypt:          Cost factor controls iterations (2^cost)
Argon2:          Memory-hard (requires significant RAM)
PBKDF2:          Key derivation with iterations

$ mkpasswd --method=sha-512 --salt=randomsalt "password"
$6$randomsalt$veryLongHash...
`}
      </pre>
    </div>

    {/* Algorithm Comparison */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Security Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Key Size</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">DES</td>
            <td className="p-3 border">Symmetric</td>
            <td className="p-3 border">56 bits</td>
            <td className="p-3 border">Broken, do not use</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">3DES</td>
            <td className="p-3 border">Symmetric</td>
            <td className="p-3 border">168 bits</td>
            <td className="p-3 border">Deprecated, legacy only</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">AES-128</td>
            <td className="p-3 border">Symmetric</td>
            <td className="p-3 border">128 bits</td>
            <td className="p-3 border">Secure, standard</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">AES-256</td>
            <td className="p-3 border">Symmetric</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">Very secure, government</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">RSA-2048</td>
            <td className="p-3 border">Asymmetric</td>
            <td className="p-3 border">2048 bits</td>
            <td className="p-3 border">Minimum recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">RSA-4096</td>
            <td className="p-3 border">Asymmetric</td>
            <td className="p-3 border">4096 bits</td>
            <td className="p-3 border">High security</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">ECC P-256</td>
            <td className="p-3 border">Asymmetric</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">Secure, efficient</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Encryption converts plaintext to ciphertext using a key</li>
      <li>Symmetric encryption uses one key; asymmetric uses public/private pair</li>
      <li>AES is the current standard for symmetric encryption</li>
      <li>RSA and ECC are common asymmetric algorithms</li>
      <li>Hybrid encryption combines both for efficiency and security</li>
      <li>Full disk encryption protects data at rest</li>
      <li>Hashing is one-way; password hashing must be intentionally slow</li>
      <li>Use modern algorithms (AES, SHA-256+) and avoid deprecated ones (DES, MD5)</li>
    </ul>
  </div>
);

export default Encryption;
