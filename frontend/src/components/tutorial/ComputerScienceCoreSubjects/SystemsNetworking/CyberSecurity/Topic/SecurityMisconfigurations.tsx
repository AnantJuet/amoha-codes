import React from "react";

const SecurityMisconfigurations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Security Misconfigurations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Security misconfiguration is one of the most common vulnerabilities, occurring when
      security settings are not properly implemented or maintained. It can happen at any
      level of the application stack including network services, platforms, web servers,
      databases, and custom code.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common Misconfigurations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Example</th>
            <th className="p-3 border">Risk</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Default Credentials</td>
            <td className="p-3 border">admin/admin, root/password</td>
            <td className="p-3 border">Unauthorized access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Verbose Errors</td>
            <td className="p-3 border">Stack traces in production</td>
            <td className="p-3 border">Information disclosure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Directory Listing</td>
            <td className="p-3 border">Enabled on web server</td>
            <td className="p-3 border">File enumeration</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unnecessary Services</td>
            <td className="p-3 border">FTP, Telnet enabled</td>
            <td className="p-3 border">Expanded attack surface</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Web Server Misconfigurations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Web Server Issues:

1. DIRECTORY LISTING ENABLED
   http://site.com/images/
   → Shows all files in directory

   Fix (Apache): Options -Indexes
   Fix (Nginx): autoindex off;

2. DEFAULT ERROR PAGES
   Error reveals: Server version, framework, paths

   Fix: Custom error pages without sensitive info

3. SERVER BANNER EXPOSURE
   Response Header: Server: Apache/2.4.41 (Ubuntu)

   Fix (Apache): ServerTokens Prod
   Fix (Nginx): server_tokens off;

4. UNNECESSARY HTTP METHODS
   OPTIONS, TRACE, PUT, DELETE enabled

   Fix: Only allow GET, POST, HEAD as needed

5. MISSING SECURITY HEADERS
   - X-Content-Type-Options
   - X-Frame-Options
   - Content-Security-Policy
   - Strict-Transport-Security`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cloud Misconfigurations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Cloud Security Issues:

AWS S3 BUCKET:
- Public access enabled
- No encryption at rest
- Overly permissive bucket policies

Example insecure policy:
{
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::bucket/*"
}

KUBERNETES:
- Dashboard exposed publicly
- Default service accounts with cluster-admin
- No network policies
- Secrets not encrypted

DOCKER:
- Running containers as root
- Exposing Docker socket
- Using latest tag (unpinned versions)
- Sensitive data in images

DATABASE (RDS/Cloud SQL):
- Public accessibility enabled
- Weak authentication
- No encryption in transit
- Default security groups`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Application Misconfigurations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Application-Level Issues:

DEBUG MODE IN PRODUCTION:
# Django
DEBUG = True  # Should be False!

# Flask
app.debug = True  # Should be False!

# Express
app.use(errorHandler({ dumpExceptions: true }));

HARDCODED SECRETS:
const API_KEY = "sk_live_abc123";  // In code!
database_password: "mysecretpass"  # In config file

INSECURE DEFAULTS:
- Auto-complete enabled on password fields
- Session timeout too long (or none)
- No HTTPS redirect
- Weak CORS policy (Access-Control-Allow-Origin: *)

DEVELOPMENT ARTIFACTS:
- .git directory accessible
- Backup files (.bak, .old, ~)
- Test/debug endpoints
- Documentation/swagger in production`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Checklist</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Remove defaults:</strong> Change default credentials, remove sample apps</li>
        <li><strong>Minimize attack surface:</strong> Disable unused features and services</li>
        <li><strong>Automate hardening:</strong> Use configuration management tools</li>
        <li><strong>Regular audits:</strong> Scan for misconfigurations periodically</li>
        <li><strong>Environment separation:</strong> Different configs for dev/staging/prod</li>
        <li><strong>Security headers:</strong> Implement all recommended HTTP headers</li>
        <li><strong>Secrets management:</strong> Use vaults, never hardcode credentials</li>
        <li><strong>Patch management:</strong> Keep all software updated</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Security misconfiguration can occur at any layer of the stack</li>
        <li>Always change default credentials and remove default accounts</li>
        <li>Disable directory listing and verbose error messages</li>
        <li>Implement proper security headers on all responses</li>
        <li>Use automated scanning tools to detect misconfigurations</li>
        <li>Maintain different configurations for different environments</li>
      </ul>
    </div>
  </div>
);

export default SecurityMisconfigurations;
