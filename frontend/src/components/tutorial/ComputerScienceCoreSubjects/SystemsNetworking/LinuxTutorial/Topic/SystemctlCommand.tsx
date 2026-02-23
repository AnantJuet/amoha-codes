import React from "react";

const SystemctlCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      systemctl Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      systemctl is the central management tool for systemd, the init system used
      by most modern Linux distributions. It controls services, targets, and
      system states.
    </p>

    <h2 className="text-3xl font-bold mt-8">Service Management</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Start/stop service
$ sudo systemctl start nginx
$ sudo systemctl stop nginx

# Restart/reload service
$ sudo systemctl restart nginx
$ sudo systemctl reload nginx

# Enable/disable at boot
$ sudo systemctl enable nginx
$ sudo systemctl disable nginx

# Enable and start in one command
$ sudo systemctl enable --now nginx

# Check service status
$ systemctl status nginx

# Check if service is active/enabled
$ systemctl is-active nginx
$ systemctl is-enabled nginx`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Listing Services</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List all services
$ systemctl list-units --type=service

# List running services
$ systemctl list-units --type=service --state=running

# List enabled services
$ systemctl list-unit-files --type=service --state=enabled

# List failed services
$ systemctl list-units --failed

# Show service dependencies
$ systemctl list-dependencies nginx`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">System States</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Reboot system
$ sudo systemctl reboot

# Power off system
$ sudo systemctl poweroff

# Suspend system
$ sudo systemctl suspend

# Hibernate system
$ sudo systemctl hibernate

# Get default target
$ systemctl get-default

# Set default target
$ sudo systemctl set-default multi-user.target
$ sudo systemctl set-default graphical.target`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Viewing Logs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View service logs
$ journalctl -u nginx

# Follow logs in real-time
$ journalctl -u nginx -f

# Logs since boot
$ journalctl -u nginx -b

# Logs from specific time
$ journalctl -u nginx --since "2024-01-01"
$ journalctl -u nginx --since "1 hour ago"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Commands</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">start</td>
            <td className="p-3 border">Start a service</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">stop</td>
            <td className="p-3 border">Stop a service</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">restart</td>
            <td className="p-3 border">Restart a service</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">enable</td>
            <td className="p-3 border">Enable at boot</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">disable</td>
            <td className="p-3 border">Disable at boot</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">status</td>
            <td className="p-3 border">Show service status</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>systemctl manages systemd services</li>
        <li>enable --now starts and enables in one command</li>
        <li>journalctl -u shows service logs</li>
        <li>list-units shows currently loaded units</li>
      </ul>
    </div>
  </div>
);

export default SystemctlCommand;
