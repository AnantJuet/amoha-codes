import React from "react";

const Keyloggers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Keyloggers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A keylogger (keystroke logger) is a type of surveillance technology that records every
      keystroke made on a computer or mobile device. While keyloggers have legitimate uses
      such as parental monitoring and corporate oversight, they are frequently deployed by
      attackers to capture sensitive information including passwords, credit card numbers,
      and private communications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Keyloggers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Implementation</th>
            <th className="p-3 border">Detection Difficulty</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Hardware</td>
            <td className="p-3 border">Physical device</td>
            <td className="p-3 border">Requires physical inspection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Software (User-mode)</td>
            <td className="p-3 border">Application level</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Software (Kernel)</td>
            <td className="p-3 border">Kernel driver</td>
            <td className="p-3 border">Hard</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Form Grabber</td>
            <td className="p-3 border">Browser injection</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Memory Injection</td>
            <td className="p-3 border">Process injection</td>
            <td className="p-3 border">Hard</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hardware Keyloggers</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hardware Keylogger Types:

1. INLINE KEYBOARD DEVICES
   +----------+     +------------+     +----------+
   | Keyboard |---->| KEYLOGGER  |---->| Computer |
   +----------+     +------------+     +----------+
                    Records all
                    keystrokes

2. WIRELESS KEYBOARD SNIFFERS
   - Intercept wireless keyboard signals
   - No physical access to computer needed
   - Range: up to 100 meters

3. KEYBOARD OVERLAY
   - Fake ATM keypads
   - Placed over legitimate keypad
   - Records PIN entries

4. ACOUSTIC KEYLOGGERS
   - Analyze keystroke sounds
   - Each key has unique sound
   - Microphone-based capture

5. ELECTROMAGNETIC EMANATIONS
   - Capture EM signals from cables
   - TEMPEST attacks
   - Highly sophisticated

Hardware keylogger detection:
- Visual inspection of keyboard connection
- Check for unusual devices
- Use encrypted keyboards`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Software Keylogger Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Software Keylogging Methods:

1. API-LEVEL HOOKING
   Application --> [GetAsyncKeyState] --> Windows
                        ^
                   Keylogger hooks API
                   Records each keypress

   Common hooked APIs:
   - SetWindowsHookEx (WH_KEYBOARD_LL)
   - GetAsyncKeyState
   - GetKeyboardState

2. FORM GRABBING
   User types in browser form
   Keylogger intercepts before encryption
   Captures: username, password, credit card

   Works against: HTTPS, virtual keyboards

3. KERNEL-LEVEL DRIVERS
   - Intercepts at keyboard driver level
   - Cannot be detected by user-mode tools
   - Requires administrator privileges

4. MEMORY INJECTION
   - Injects into target process
   - Captures input before encryption
   - Often targets browsers

5. JAVASCRIPT KEYLOGGERS
   - Injected into web pages
   - Captures input on compromised sites
   - Event listeners on keypress`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Keylogger Capabilities</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Modern Keylogger Features:

BASIC LOGGING:
- Keystroke recording
- Timestamp for each key
- Window/application tracking

ADVANCED FEATURES:
- Screenshot capture
- Clipboard monitoring
- Application screenshots
- Webcam capture
- Audio recording
- Search query logging
- Email capture

EXFILTRATION METHODS:
- Email reports to attacker
- FTP upload
- HTTP POST to C2 server
- Cloud storage upload
- Physical retrieval (hardware)

EVASION TECHNIQUES:
- Process hiding
- Encrypted storage
- Randomized file names
- Legitimate-looking processes
- Anti-analysis detection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protection Against Keyloggers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Keylogger Defense Strategies:

1. ANTI-KEYLOGGER SOFTWARE
   - Encrypts keystrokes at driver level
   - Detects hooking attempts
   - Examples: KeyScrambler, Zemana

2. VIRTUAL KEYBOARDS
   - On-screen keyboards for passwords
   - Defeats hardware keyloggers
   - Vulnerable to screenshot capture

3. TWO-FACTOR AUTHENTICATION
   - Even captured password insufficient
   - TOTP codes change every 30 seconds
   - Hardware tokens are unloggable

4. PASSWORD MANAGERS
   - Auto-fill without typing
   - Bypasses keystroke capture
   - Form grabbers still a threat

5. PHYSICAL SECURITY
   - Inspect keyboard connections
   - Use encrypted keyboards
   - Secure physical access

6. BEHAVIOR MONITORING
   - Watch for unusual processes
   - Monitor API hooks
   - Network traffic analysis`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Keyloggers capture every keystroke including passwords</li>
        <li>Hardware keyloggers require physical access to install</li>
        <li>Software keyloggers use API hooks or kernel drivers</li>
        <li>Form grabbers defeat HTTPS by capturing before encryption</li>
        <li>Two-factor authentication provides protection even if password is captured</li>
        <li>Regular security scans and behavior monitoring help detect keyloggers</li>
      </ul>
    </div>
  </div>
);

export default Keyloggers;
