import React from "react";

const ScpSftpCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      scp and sftp Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      scp (secure copy) and sftp (SSH File Transfer Protocol) transfer files
      securely between systems using SSH encryption. scp is for quick transfers,
      while sftp provides an interactive session.
    </p>

    <h2 className="text-3xl font-bold mt-8">scp Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Copy local file to remote
$ scp file.txt user@host:/path/to/destination/

# Copy remote file to local
$ scp user@host:/path/to/file.txt ./

# Copy directory recursively
$ scp -r folder/ user@host:/path/to/destination/

# Copy with specific port
$ scp -P 2222 file.txt user@host:/path/

# Copy with identity file
$ scp -i ~/.ssh/mykey file.txt user@host:/path/

# Preserve file attributes
$ scp -p file.txt user@host:/path/

# Copy between two remote hosts
$ scp user1@host1:/file user2@host2:/path/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">sftp Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Start sftp session
$ sftp user@hostname

# SFTP interactive commands:
sftp> pwd          # Remote working directory
sftp> lpwd         # Local working directory
sftp> ls           # List remote files
sftp> lls          # List local files
sftp> cd /path     # Change remote directory
sftp> lcd /path    # Change local directory
sftp> get file.txt # Download file
sftp> put file.txt # Upload file
sftp> mget *.txt   # Download multiple files
sftp> mput *.txt   # Upload multiple files
sftp> mkdir dir    # Create remote directory
sftp> rm file      # Delete remote file
sftp> bye          # Exit sftp`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">rsync (Alternative)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Sync local to remote
$ rsync -avz folder/ user@host:/path/

# Sync remote to local
$ rsync -avz user@host:/path/ folder/

# Delete files not in source
$ rsync -avz --delete folder/ user@host:/path/

# Dry run (show what would happen)
$ rsync -avzn folder/ user@host:/path/

# With progress
$ rsync -avz --progress folder/ user@host:/path/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">scp</td>
            <td className="p-3 border">Quick one-time transfers</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">sftp</td>
            <td className="p-3 border">Interactive file management</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">rsync</td>
            <td className="p-3 border">Syncing and incremental backups</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>scp uses -P for port, ssh uses -p</li>
        <li>scp -r copies directories recursively</li>
        <li>sftp provides interactive file browsing</li>
        <li>rsync is more efficient for large/repeated transfers</li>
      </ul>
    </div>
  </div>
);

export default ScpSftpCommands;
