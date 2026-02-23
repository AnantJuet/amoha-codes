import React from "react";

const BackupArchive: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Backup and Archive
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux provides several tools for creating backups and archives. The most
      common are tar, gzip, bzip2, xz, and zip/unzip.
    </p>

    <h2 className="text-3xl font-bold mt-8">tar Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create archive
$ tar -cvf archive.tar folder/

# Create compressed archive (gzip)
$ tar -czvf archive.tar.gz folder/

# Create compressed archive (bzip2)
$ tar -cjvf archive.tar.bz2 folder/

# Create compressed archive (xz)
$ tar -cJvf archive.tar.xz folder/

# Extract archive
$ tar -xvf archive.tar

# Extract gzip archive
$ tar -xzvf archive.tar.gz

# Extract to specific directory
$ tar -xzvf archive.tar.gz -C /path/to/dest/

# List contents without extracting
$ tar -tvf archive.tar.gz

# Exclude files
$ tar -czvf archive.tar.gz --exclude='*.log' folder/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">tar Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-c</td>
            <td className="p-3 border">Create archive</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-x</td>
            <td className="p-3 border">Extract archive</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-v</td>
            <td className="p-3 border">Verbose output</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-f</td>
            <td className="p-3 border">Specify filename</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-z</td>
            <td className="p-3 border">Compress with gzip</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-j</td>
            <td className="p-3 border">Compress with bzip2</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-J</td>
            <td className="p-3 border">Compress with xz</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Compression Tools</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# gzip
$ gzip file.txt           # Compress (creates file.txt.gz)
$ gunzip file.txt.gz      # Decompress
$ gzip -k file.txt        # Keep original file

# bzip2
$ bzip2 file.txt          # Compress
$ bunzip2 file.txt.bz2    # Decompress

# xz (best compression)
$ xz file.txt             # Compress
$ unxz file.txt.xz        # Decompress

# zip/unzip
$ zip archive.zip file1 file2
$ zip -r archive.zip folder/
$ unzip archive.zip
$ unzip -l archive.zip    # List contents`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">rsync for Backups</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Local backup
$ rsync -avh /source/ /backup/

# Remote backup
$ rsync -avh /source/ user@host:/backup/

# Incremental backup with delete
$ rsync -avh --delete /source/ /backup/

# Backup with progress
$ rsync -avh --progress /source/ /backup/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>tar -czvf creates gzip-compressed archives</li>
        <li>tar -xzvf extracts gzip-compressed archives</li>
        <li>xz provides best compression ratio</li>
        <li>rsync is efficient for incremental backups</li>
      </ul>
    </div>
  </div>
);

export default BackupArchive;
