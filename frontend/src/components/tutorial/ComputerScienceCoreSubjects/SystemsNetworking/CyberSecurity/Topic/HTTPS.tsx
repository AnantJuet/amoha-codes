import React from "react";

const HTTPS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      HTTPS (HTTP Secure)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      HTTPS is the secure version of HTTP, using TLS (Transport Layer Security) to
      encrypt communication between web browsers and servers. It provides confidentiality,
      integrity, and authentication for web traffic, protecting users from eavesdropping
      and man-in-the-middle attacks.
    </p>

    <h2 className="text-3xl font-bold mt-8">HTTP vs HTTPS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">HTTP</th>
            <th className="p-3 border">HTTPS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Port</td>
            <td className="p-3 border">80</td>
            <td className="p-3 border">443</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Encryption</td>
            <td className="p-3 border">None (plaintext)</td>
            <td className="p-3 border">TLS encryption</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Server certificate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Integrity</td>
            <td className="p-3 border">No protection</td>
            <td className="p-3 border">TLS MAC/AEAD</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">URL Bar</td>
            <td className="p-3 border">"Not Secure" warning</td>
            <td className="p-3 border">Padlock icon</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SEO</td>
            <td className="p-3 border">Penalized by search engines</td>
            <td className="p-3 border">Ranking boost</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">HTTPS Connection Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HTTPS CONNECTION ESTABLISHMENT:

  Browser                                           Server
     │                                                 │
     │──── TCP SYN ───────────────────────────────────►│ Port 443
     │◄─── TCP SYN-ACK ────────────────────────────────│
     │──── TCP ACK ───────────────────────────────────►│
     │                                                 │
     │              TLS HANDSHAKE                      │
     │──── ClientHello ───────────────────────────────►│
     │     (TLS version, cipher suites, random)        │
     │                                                 │
     │◄─── ServerHello ────────────────────────────────│
     │     (chosen cipher, random)                     │
     │◄─── Certificate ────────────────────────────────│
     │     (server's X.509 certificate)                │
     │◄─── ServerKeyExchange (if needed) ──────────────│
     │◄─── ServerHelloDone ────────────────────────────│
     │                                                 │
     │     (Browser verifies certificate)              │
     │                                                 │
     │──── ClientKeyExchange ─────────────────────────►│
     │     (pre-master secret, encrypted)              │
     │──── ChangeCipherSpec ──────────────────────────►│
     │──── Finished (encrypted) ──────────────────────►│
     │                                                 │
     │◄─── ChangeCipherSpec ───────────────────────────│
     │◄─── Finished (encrypted) ───────────────────────│
     │                                                 │
     │═══════ ENCRYPTED APPLICATION DATA ══════════════│
     │──── HTTP Request (encrypted) ──────────────────►│
     │◄─── HTTP Response (encrypted) ──────────────────│`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSL/TLS Certificates</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Certificate Type</th>
            <th className="p-3 border">Validation Level</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Trust Indicator</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Domain Validation (DV)</td>
            <td className="p-3 border">Domain ownership only</td>
            <td className="p-3 border">Basic websites, blogs</td>
            <td className="p-3 border">Padlock icon</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Organization Validation (OV)</td>
            <td className="p-3 border">Organization verified</td>
            <td className="p-3 border">Business websites</td>
            <td className="p-3 border">Padlock + org info</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Extended Validation (EV)</td>
            <td className="p-3 border">Extensive verification</td>
            <td className="p-3 border">E-commerce, banking</td>
            <td className="p-3 border">Green bar (legacy)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Wildcard</td>
            <td className="p-3 border">Covers *.domain.com</td>
            <td className="p-3 border">Multiple subdomains</td>
            <td className="p-3 border">Standard padlock</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SAN/Multi-Domain</td>
            <td className="p-3 border">Multiple domains</td>
            <td className="p-3 border">Multiple sites</td>
            <td className="p-3 border">Standard padlock</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Certificate Management</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Generate private key
$ openssl genrsa -out server.key 4096

# Generate CSR (Certificate Signing Request)
$ openssl req -new -key server.key -out server.csr
Country Name: US
State: California
Locality: San Francisco
Organization: My Company
Common Name: www.example.com

# Self-signed certificate (for testing)
$ openssl req -x509 -nodes -days 365 -newkey rsa:4096 \
    -keyout server.key -out server.crt

# View certificate details
$ openssl x509 -in server.crt -text -noout

# Verify certificate chain
$ openssl verify -CAfile ca-bundle.crt server.crt

# Let's Encrypt (Free DV Certificates)
$ certbot certonly --webroot -w /var/www/html -d example.com

# Auto-renewal
$ certbot renew --dry-run

# Test HTTPS configuration
$ openssl s_client -connect example.com:443 -servername example.com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Web Server HTTPS Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Nginx HTTPS Configuration
server {
    listen 443 ssl http2;
    server_name example.com;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Modern TLS configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;

    # HSTS (HTTP Strict Transport Security)
    add_header Strict-Transport-Security "max-age=63072000" always;

    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
}

# HTTP to HTTPS redirect
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HTTPS Security Headers</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Strict-Transport-Security (HSTS):</strong> Forces HTTPS connections</li>
      <li><strong>Content-Security-Policy:</strong> Prevents XSS and injection attacks</li>
      <li><strong>X-Content-Type-Options:</strong> Prevents MIME type sniffing</li>
      <li><strong>X-Frame-Options:</strong> Prevents clickjacking</li>
      <li><strong>Referrer-Policy:</strong> Controls referrer information</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>HTTPS = HTTP + TLS encryption on port 443</li>
        <li>Certificates are issued by trusted Certificate Authorities (CAs)</li>
        <li>Let's Encrypt provides free DV certificates</li>
        <li>Use TLS 1.2 or 1.3; disable older versions</li>
        <li>Implement HSTS to prevent downgrade attacks</li>
        <li>All modern websites should use HTTPS exclusively</li>
      </ul>
    </div>
  </div>
);

export default HTTPS;
