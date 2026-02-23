import React from "react";

const LogFiles: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Log Files
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux logs system events and application activity to files in /var/log.
      Understanding logs is essential for troubleshooting and monitoring system health.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common Log Files</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Log File</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">/var/log/syslog</td>
            <td className="p-3 border">General system log (Debian/Ubuntu)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/var/log/messages</td>
            <td className="p-3 border">General system log (RHEL/CentOS)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/var/log/auth.log</td>
            <td className="p-3 border">Authentication logs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/var/log/kern.log</td>
            <td className="p-3 border">Kernel messages</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/var/log/dmesg</td>
            <td className="p-3 border">Boot messages</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/var/log/apache2/</td>
            <td className="p-3 border">Apache web server logs</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">/var/log/nginx/</td>
            <td className="p-3 border">Nginx web server logs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Viewing Logs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View entire log
$ cat /var/log/syslog

# View last 100 lines
$ tail -n 100 /var/log/syslog

# Follow log in real-time
$ tail -f /var/log/syslog

# Search in logs
$ grep "error" /var/log/syslog
$ grep -i "failed" /var/log/auth.log

# View with less (pagination)
$ less /var/log/syslog

# View compressed logs
$ zcat /var/log/syslog.1.gz
$ zgrep "error" /var/log/syslog.*.gz`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">journalctl (systemd)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View all logs
$ journalctl

# Follow logs
$ journalctl -f

# Logs since last boot
$ journalctl -b

# Logs from specific service
$ journalctl -u nginx

# Kernel messages
$ journalctl -k

# Logs by priority
$ journalctl -p err    # Errors and above
$ journalctl -p warning

# Logs by time
$ journalctl --since "1 hour ago"
$ journalctl --since "2024-01-01" --until "2024-01-02"

# Show disk usage
$ journalctl --disk-usage`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Log Rotation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Logrotate configuration
/etc/logrotate.conf
/etc/logrotate.d/

# Force rotation
$ sudo logrotate -f /etc/logrotate.conf

# Test rotation
$ sudo logrotate -d /etc/logrotate.conf`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>System logs are in /var/log</li>
        <li>tail -f follows logs in real-time</li>
        <li>journalctl is used for systemd logs</li>
        <li>logrotate manages log file rotation</li>
      </ul>
    </div>
  </div>
);

export default LogFiles;
