import React from "react";

const Wireshark: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Wireshark - Network Protocol Analyzer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Wireshark is the world's foremost network protocol analyzer. It lets you capture and
      interactively browse the traffic running on a computer network. It is used for network
      troubleshooting, analysis, software and protocol development, and security analysis.
    </p>

    <h2 className="text-3xl font-bold mt-8">Wireshark Interface</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Wireshark Main Window:

+------------------------------------------------------------------+
|  File  Edit  View  Go  Capture  Analyze  Statistics  Help        |
+------------------------------------------------------------------+
| [Start] [Stop] [Restart] | Filter: __________________________|v| |
+------------------------------------------------------------------+
|  No. | Time     | Source        | Destination   | Proto | Info   |
+------+----------+---------------+---------------+-------+--------+
|  1   | 0.000000 | 192.168.1.10  | 8.8.8.8       | DNS   | Query  |
|  2   | 0.050123 | 8.8.8.8       | 192.168.1.10  | DNS   | Resp   |
|  3   | 0.051234 | 192.168.1.10  | 93.184.216.34 | TCP   | SYN    |
|  4   | 0.080456 | 93.184.216.34 | 192.168.1.10  | TCP   | SYN-ACK|
+------------------------------------------------------------------+
|  PACKET DETAILS PANE                                              |
|  + Frame 1: 74 bytes on wire                                      |
|  + Ethernet II, Src: aa:bb:cc:dd:ee:ff                           |
|  + Internet Protocol Version 4, Src: 192.168.1.10                |
|  + Transmission Control Protocol, Src Port: 54321                |
+------------------------------------------------------------------+
|  PACKET BYTES PANE (Hex + ASCII)                                  |
|  0000  00 1a 2b 3c 4d 5e 00 1a 2b 3c 4d 5f 08 00 45 00   |
+------------------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Capture Filters vs Display Filters</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Capture Filters</th>
            <th className="p-3 border">Display Filters</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">When Applied</td>
            <td className="p-3 border">During capture</td>
            <td className="p-3 border">After capture</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Syntax</td>
            <td className="p-3 border">BPF syntax</td>
            <td className="p-3 border">Wireshark syntax</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Reduce capture size</td>
            <td className="p-3 border">Focus on specific traffic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reversible</td>
            <td className="p-3 border">No - filtered out is gone</td>
            <td className="p-3 border">Yes - can change anytime</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Display Filters</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Essential Display Filters:

# Protocol filters
ip                          # All IP traffic
tcp                         # All TCP traffic
udp                         # All UDP traffic
http                        # All HTTP traffic
dns                         # All DNS traffic
tls                         # All TLS/SSL traffic

# IP address filters
ip.addr == 192.168.1.1      # Source or destination IP
ip.src == 192.168.1.1       # Source IP only
ip.dst == 192.168.1.1       # Destination IP only
ip.addr == 192.168.1.0/24   # Subnet filter

# Port filters
tcp.port == 80              # TCP port 80
tcp.srcport == 443          # Source port 443
tcp.dstport == 22           # Destination port 22
udp.port == 53              # UDP port 53 (DNS)

# Combination filters
ip.addr == 192.168.1.1 && tcp.port == 80
http || dns                 # HTTP or DNS
!(arp || icmp)              # Not ARP and not ICMP

# HTTP specific
http.request                # HTTP requests only
http.response               # HTTP responses only
http.request.method == "POST"
http.response.code == 200
http.host contains "example"

# TCP specific
tcp.flags.syn == 1          # SYN packets
tcp.flags.reset == 1        # RST packets
tcp.analysis.retransmission # Retransmissions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Capture Filters (BPF)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Berkeley Packet Filter (BPF) Syntax:

# Host filters
host 192.168.1.1            # Traffic to/from IP
src host 192.168.1.1        # Source IP only
dst host 192.168.1.1        # Destination IP only

# Network filters
net 192.168.1.0/24          # Entire subnet
src net 10.0.0.0/8          # Source network

# Port filters
port 80                     # Port 80
src port 443                # Source port 443
dst port 22                 # Destination port 22
portrange 1-1024            # Port range

# Protocol filters
tcp                         # TCP only
udp                         # UDP only
icmp                        # ICMP only

# Combining filters
host 192.168.1.1 and port 80
tcp and port 80
not broadcast and not multicast
src host 10.0.0.1 and dst port 443`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Following Streams</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Follow Stream Feature:

Right-click on packet -> Follow -> TCP/UDP/HTTP Stream

TCP Stream Example:
+------------------------------------------------------------------+
|  Follow TCP Stream (192.168.1.10:54321 -> 93.184.216.34:80)      |
+------------------------------------------------------------------+
|  GET /index.html HTTP/1.1                                         |
|  Host: example.com                                                |
|  User-Agent: Mozilla/5.0                                          |
|  Accept: text/html                                                |
|                                                                   |
|  HTTP/1.1 200 OK                                                  |
|  Content-Type: text/html                                          |
|  Content-Length: 1256                                             |
|                                                                   |
|  <!DOCTYPE html>                                                  |
|  <html>...                                                        |
+------------------------------------------------------------------+

Stream Colors:
  Red    = Client to Server
  Blue   = Server to Client

Stream Types:
  - TCP Stream: Reassembled TCP conversation
  - UDP Stream: UDP packets between endpoints
  - TLS Stream: Decrypted TLS (if keys provided)
  - HTTP Stream: HTTP request/response pair`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Analysis Use Cases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Filter/Technique</th>
            <th className="p-3 border">What to Look For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Port Scan Detection</td>
            <td className="p-3 border font-mono text-gray-900">tcp.flags.syn==1 && tcp.flags.ack==0</td>
            <td className="p-3 border">Multiple SYN to different ports</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ARP Spoofing</td>
            <td className="p-3 border font-mono text-gray-900">arp</td>
            <td className="p-3 border">Duplicate IP-MAC mappings</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS Exfiltration</td>
            <td className="p-3 border font-mono text-gray-900">dns &amp;&amp; dns.qry.name.len &gt; 50</td>
            <td className="p-3 border">Unusually long DNS queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unencrypted Credentials</td>
            <td className="p-3 border font-mono text-gray-900">http.authbasic</td>
            <td className="p-3 border">Basic auth in cleartext</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Malware C2</td>
            <td className="p-3 border font-mono text-gray-900">http.request</td>
            <td className="p-3 border">Suspicious URLs, beaconing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Useful Statistics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Statistics Menu Options:

Statistics -> Capture File Properties
  - Packet count, time span, average packet size

Statistics -> Protocol Hierarchy
  - Breakdown of protocols in capture

Statistics -> Conversations
  - All conversations by endpoint pairs

Statistics -> Endpoints
  - All unique endpoints (IP, Ethernet, TCP, UDP)

Statistics -> HTTP -> Requests
  - All HTTP requests made

Statistics -> IO Graph
  - Traffic over time visualization

Analyze -> Expert Information
  - Warnings, errors, notes about capture`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TLS Decryption</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Pre-master Secret:</strong> Set SSLKEYLOGFILE environment variable in browser</li>
      <li><strong>Private Key:</strong> Import server's private key for RSA key exchange</li>
      <li><strong>Configuration:</strong> Edit {">"} Preferences {">"} Protocols {">"} TLS {">"} (Pre)-Master-Secret log filename</li>
      <li><strong>Limitation:</strong> Cannot decrypt with ephemeral key exchange (DHE, ECDHE) using private key alone</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Capture filters reduce file size, display filters help analysis</li>
        <li>Follow Stream reconstructs full conversations</li>
        <li>Use Statistics menu for traffic overview and anomaly detection</li>
        <li>Wireshark can decode hundreds of protocols</li>
        <li>TLS decryption requires keys or secrets</li>
        <li>Save captures in pcapng format for full feature support</li>
      </ul>
    </div>
  </div>
);

export default Wireshark;
