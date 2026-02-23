import React from "react";

const CronJobs: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cron Jobs
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cron is a time-based job scheduler in Linux. It allows users to schedule
      commands or scripts to run automatically at specified intervals.
    </p>

    <h2 className="text-3xl font-bold mt-8">Crontab Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Edit current user's crontab
$ crontab -e

# List crontab entries
$ crontab -l

# Remove all crontab entries
$ crontab -r

# Edit another user's crontab (root)
$ sudo crontab -u username -e`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Crontab Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Crontab format:
# MIN HOUR DOM MON DOW COMMAND
#  |    |   |   |   |
#  |    |   |   |   +-- Day of Week (0-7, 0 and 7 are Sunday)
#  |    |   |   +------ Month (1-12)
#  |    |   +---------- Day of Month (1-31)
#  |    +-------------- Hour (0-23)
#  +------------------- Minute (0-59)

# Special characters:
# *     Any value
# ,     Value list (1,3,5)
# -     Range (1-5)
# /     Step values (*/5)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Crontab Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Every minute
* * * * * /path/to/script.sh

# Every 5 minutes
*/5 * * * * /path/to/script.sh

# Every hour at minute 0
0 * * * * /path/to/script.sh

# Every day at 2:30 AM
30 2 * * * /path/to/script.sh

# Every Monday at 9 AM
0 9 * * 1 /path/to/script.sh

# Every 1st of month at midnight
0 0 1 * * /path/to/script.sh

# Every weekday at 6 PM
0 18 * * 1-5 /path/to/script.sh

# Multiple times
0 9,12,18 * * * /path/to/script.sh`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Strings</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">String</th>
            <th className="p-3 border">Equivalent</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">@reboot</td>
            <td className="p-3 border">Run once at startup</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">@yearly</td>
            <td className="p-3 border">0 0 1 1 *</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">@monthly</td>
            <td className="p-3 border">0 0 1 * *</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">@weekly</td>
            <td className="p-3 border">0 0 * * 0</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">@daily</td>
            <td className="p-3 border">0 0 * * *</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">@hourly</td>
            <td className="p-3 border">0 * * * *</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cron Directories</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# System cron directories
/etc/cron.d/        # Custom cron files
/etc/cron.hourly/   # Scripts run hourly
/etc/cron.daily/    # Scripts run daily
/etc/cron.weekly/   # Scripts run weekly
/etc/cron.monthly/  # Scripts run monthly

# Place scripts in these directories (no extension needed)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>crontab -e edits your cron schedule</li>
        <li>Use absolute paths in cron jobs</li>
        <li>Redirect output to log files or /dev/null</li>
        <li>@reboot runs commands at system startup</li>
      </ul>
    </div>
  </div>
);

export default CronJobs;
