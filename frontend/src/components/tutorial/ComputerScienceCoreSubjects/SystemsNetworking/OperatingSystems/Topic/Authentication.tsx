import React from 'react';

const Authentication: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      User Authentication Methods
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Authentication is the process of verifying the identity of a user, process,
      or device. Before an operating system grants access to resources, it must
      confirm that the entity requesting access is who or what it claims to be.
      Authentication is the first line of defense in system security and forms
      the foundation for all subsequent access control decisions.
    </p>

    {/* Authentication Factors */}
    <h2 className="text-3xl font-bold mt-8">Authentication Factors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
The Three Authentication Factors:
===============================================================================

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   1. SOMETHING YOU KNOW          2. SOMETHING YOU HAVE                      │
│   ────────────────────           ────────────────────                       │
│                                                                             │
│   ┌─────────────────┐            ┌─────────────────┐                       │
│   │   Password      │            │   Smart Card    │                       │
│   │   PIN           │            │   Security Key  │                       │
│   │   Security Q&A  │            │   Phone (OTP)   │                       │
│   │   Pattern       │            │   Hardware Token│                       │
│   └─────────────────┘            └─────────────────┘                       │
│                                                                             │
│   3. SOMETHING YOU ARE           4. SOMETHING YOU DO (Behavioral)          │
│   ────────────────────           ─────────────────────────────────          │
│                                                                             │
│   ┌─────────────────┐            ┌─────────────────┐                       │
│   │   Fingerprint   │            │   Typing Pattern│                       │
│   │   Face          │            │   Mouse Movement│                       │
│   │   Iris/Retina   │            │   Gait Analysis │                       │
│   │   Voice         │            │   Usage Patterns│                       │
│   └─────────────────┘            └─────────────────┘                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘


Multi-Factor Authentication (MFA):
─────────────────────────────────────────────────────────────────────────────

    Single Factor:    Password alone         [Weak]
    Two-Factor:       Password + Phone OTP   [Stronger]
    Three-Factor:     Password + Card + Bio  [Strongest]

    Each additional factor significantly increases security
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Authentication Methods Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Security</th>
            <th className="p-3 border">Usability</th>
            <th className="p-3 border">Cost</th>
            <th className="p-3 border">Risks</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Password</td>
            <td className="p-3 border">Low-Medium</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Very Low</td>
            <td className="p-3 border">Guessing, theft, reuse</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Smart Card</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Loss, theft</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">OTP (TOTP/HOTP)</td>
            <td className="p-3 border">Medium-High</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Phone theft, SIM swap</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Fingerprint</td>
            <td className="p-3 border">Medium-High</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Spoofing, cannot change</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Face Recognition</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Photo attacks, twins</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Hardware Key (FIDO2)</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Medium-High</td>
            <td className="p-3 border">Loss</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Password Authentication */}
    <h2 className="text-3xl font-bold mt-8">Password Authentication</h2>
    <p className="leading-relaxed">
      Passwords remain the most common authentication method. The operating system
      must securely store and verify passwords while protecting against various
      attack vectors.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Password Storage Evolution:
===============================================================================

1. Plaintext (NEVER DO THIS):
   ┌────────────────────────────────────────────────────────────────┐
   │  /etc/passwd (old style)                                       │
   │  alice:secretpassword:1000:1000:Alice:/home/alice:/bin/bash   │
   │        └─────────────┘                                         │
   │         [PLAINTEXT - Anyone who reads file knows password!]    │
   └────────────────────────────────────────────────────────────────┘

2. Simple Hash:
   ┌────────────────────────────────────────────────────────────────┐
   │  alice:5f4dcc3b5aa765d61d8327deb882cf99:1000:...              │
   │        └──────────────────────────────────┘                    │
   │         [MD5 hash - vulnerable to rainbow tables]              │
   └────────────────────────────────────────────────────────────────┘

3. Salted Hash (Current Standard):
   ┌────────────────────────────────────────────────────────────────┐
   │  /etc/shadow (Linux)                                           │
   │  alice:$6$xyz123$ABCDhash...:19000:0:99999:7:::               │
   │        │ │     │ │                                             │
   │        │ │     │ └─ Hashed password                            │
   │        │ │     └─── Salt (random, unique per user)             │
   │        │ └───────── Algorithm ID ($6$ = SHA-512)               │
   │        └─────────── Password field format                      │
   └────────────────────────────────────────────────────────────────┘


Password Verification Process:
─────────────────────────────────────────────────────────────────────────────

    User Input                     Stored Data
    ┌────────────┐                 ┌────────────────────────────┐
    │ "password" │                 │ Salt: "xyz123"             │
    └──────┬─────┘                 │ Hash: "ABCDhash..."        │
           │                       └────────────┬───────────────┘
           │                                    │
           │      ┌─────────────────────────┐   │
           └─────►│  hash(password + salt)  │◄──┘
                  └───────────┬─────────────┘
                              │
                              ▼
                  ┌─────────────────────────┐
                  │  Computed hash ==       │
                  │  Stored hash ?          │
                  └───────────┬─────────────┘
                              │
               ┌──────────────┴──────────────┐
               ▼                             ▼
        ┌─────────────┐               ┌─────────────┐
        │   MATCH     │               │  NO MATCH   │
        │   Login OK  │               │   DENIED    │
        └─────────────┘               └─────────────┘
`}
      </pre>
    </div>

    {/* Password Attacks */}
    <h2 className="text-3xl font-bold mt-8">Password Attack Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack</th>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Defense</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Brute Force</td>
            <td className="p-3 border">Try all possible combinations</td>
            <td className="p-3 border">Long passwords, account lockout</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Dictionary</td>
            <td className="p-3 border">Try common words/passwords</td>
            <td className="p-3 border">Complexity requirements</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Rainbow Table</td>
            <td className="p-3 border">Precomputed hash lookup</td>
            <td className="p-3 border">Unique salt per password</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Credential Stuffing</td>
            <td className="p-3 border">Use leaked credentials</td>
            <td className="p-3 border">Unique passwords per site</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Phishing</td>
            <td className="p-3 border">Trick user into revealing</td>
            <td className="p-3 border">User education, MFA</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Keylogger</td>
            <td className="p-3 border">Capture keystrokes</td>
            <td className="p-3 border">Antimalware, virtual keyboards</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Biometric Authentication */}
    <h2 className="text-3xl font-bold mt-8">Biometric Authentication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Biometric Authentication Process:
===============================================================================

Enrollment Phase:
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
    │  Biometric  │      │   Feature   │      │   Template  │
    │   Sample    │ ───► │  Extraction │ ───► │   Storage   │
    │  (finger)   │      │             │      │  (secure)   │
    └─────────────┘      └─────────────┘      └─────────────┘


Verification Phase:
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
    │  Biometric  │      │   Feature   │      │   Compare   │
    │   Sample    │ ───► │  Extraction │ ───► │   with      │
    │   (live)    │      │             │      │  Template   │
    └─────────────┘      └─────────────┘      └──────┬──────┘
                                                     │
                                        ┌────────────┴────────────┐
                                        ▼                         ▼
                              ┌─────────────────┐      ┌─────────────────┐
                              │   Score >= T    │      │   Score < T     │
                              │   ACCEPT        │      │   REJECT        │
                              └─────────────────┘      └─────────────────┘


Biometric Error Rates:
═══════════════════════════════════════════════════════════════════════════

FAR (False Accept Rate):  Incorrect acceptance of unauthorized user
FRR (False Reject Rate):  Incorrect rejection of authorized user

                     FAR
                      │
         High ────────┼────────────────────────
                      │ ╲
                      │   ╲    EER (Equal Error Rate)
                      │     ╲  ●
                      │       ╲│
                      │        ╲
                      │         ╲
                      │           ╲
         Low  ────────┼─────────────╲──────────
                      │              ╲     FRR
                      └──────────────────────────►
                      Low    Threshold    High

Lower EER = Better biometric system
`}
      </pre>
    </div>

    {/* Biometric Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Biometrics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Biometric</th>
            <th className="p-3 border">Uniqueness</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Fingerprint</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Fast, cheap sensors, mature</td>
            <td className="p-3 border">Wear, dirt, spoofing</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Face</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Contactless, convenient</td>
            <td className="p-3 border">Lighting, aging, masks</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Iris</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Very accurate, stable</td>
            <td className="p-3 border">Expensive, user resistance</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Voice</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Remote use, no special hardware</td>
            <td className="p-3 border">Illness, noise, recording</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Retina</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Extremely accurate</td>
            <td className="p-3 border">Intrusive, expensive</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Token-Based Authentication */}
    <h2 className="text-3xl font-bold mt-8">Token-Based Authentication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
One-Time Password (OTP) Generation:
===============================================================================

TOTP (Time-based OTP):
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────────────────────────────────────────────────────────────┐
    │                                                                     │
    │   Shared Secret Key: "JBSWY3DPEHPK3PXP" (base32)                   │
    │                                                                     │
    │   Server                              User's Authenticator App     │
    │   ┌──────────────────┐                ┌──────────────────┐          │
    │   │ Current Time:    │                │ Current Time:    │          │
    │   │ 1736668800       │                │ 1736668800       │          │
    │   │                  │                │                  │          │
    │   │ Time Step:       │                │ Time Step:       │          │
    │   │ 1736668800/30    │                │ 1736668800/30    │          │
    │   │ = 57888960       │                │ = 57888960       │          │
    │   │                  │                │                  │          │
    │   │ OTP = HMAC(key,  │                │ OTP = HMAC(key,  │          │
    │   │       57888960)  │                │       57888960)  │          │
    │   │     = 847293     │                │     = 847293     │ ← Display│
    │   └──────────────────┘                └──────────────────┘          │
    │           │                                    │                    │
    │           └───────────── Compare ─────────────┘                    │
    │                           MATCH!                                    │
    │                                                                     │
    └─────────────────────────────────────────────────────────────────────┘

    New code generated every 30 seconds
    Valid for current and ±1 time window (clock drift tolerance)


Hardware Security Keys (FIDO2/WebAuthn):
─────────────────────────────────────────────────────────────────────────────

    ┌─────────────┐        ┌─────────────┐        ┌─────────────┐
    │   Website   │        │   Browser   │        │  Hardware   │
    │   Server    │        │             │        │    Key      │
    └──────┬──────┘        └──────┬──────┘        └──────┬──────┘
           │                      │                      │
           │  Challenge ─────────►│                      │
           │                      │  Challenge ─────────►│
           │                      │                      │
           │                      │                      │ User touches
           │                      │                      │ key (presence)
           │                      │                      │
           │                      │◄───── Signature ─────│
           │◄───── Signature ─────│  (private key)       │
           │                      │                      │
           │  Verify with         │                      │
           │  public key          │                      │
           │                      │                      │

    Phishing-resistant: Key won't sign for wrong domain
`}
      </pre>
    </div>

    {/* Linux Authentication Example */}
    <h2 className="text-3xl font-bold mt-8">Linux PAM Authentication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Pluggable Authentication Modules (PAM):
===============================================================================

PAM allows flexible authentication configuration:

/etc/pam.d/login:
─────────────────────────────────────────────────────────────────────────────
# Type      Control     Module
auth        required    pam_securetty.so      # Check secure terminal
auth        required    pam_unix.so           # Traditional password
auth        optional    pam_google_authenticator.so  # TOTP (if configured)
account     required    pam_unix.so           # Account validity
password    required    pam_unix.so sha512    # Password changes
session     required    pam_unix.so           # Session setup


Authentication Flow:
─────────────────────────────────────────────────────────────────────────────

    Login Prompt                    PAM Stack
    ┌─────────────┐                 ┌─────────────────────────┐
    │ Username:   │                 │                         │
    │ alice       │ ───────────────►│  1. pam_securetty.so   │
    │             │                 │     (check terminal)    │
    │ Password:   │                 │           │             │
    │ ****        │ ───────────────►│  2. pam_unix.so        │
    │             │                 │     (verify password)   │
    │ OTP:        │                 │           │             │
    │ 847293      │ ───────────────►│  3. pam_google_auth.so │
    │             │                 │     (verify TOTP)       │
    └─────────────┘                 │           │             │
                                    │           ▼             │
                                    │     All PASSED?        │
                                    │           │             │
                                    │     YES: Grant shell   │
                                    │     NO: Deny access    │
                                    └─────────────────────────┘
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Authentication verifies identity before granting access</li>
      <li>Three main factors: something you know, have, or are</li>
      <li>Multi-factor authentication significantly improves security</li>
      <li>Passwords should be stored as salted hashes, never plaintext</li>
      <li>Biometrics provide convenience but cannot be changed if compromised</li>
      <li>Hardware security keys provide phishing-resistant authentication</li>
      <li>PAM allows flexible, modular authentication configuration in Linux</li>
    </ul>
  </div>
);

export default Authentication;
