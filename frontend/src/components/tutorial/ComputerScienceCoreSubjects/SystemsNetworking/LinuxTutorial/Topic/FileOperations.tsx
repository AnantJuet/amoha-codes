import React from "react";

const FileOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Operations in Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File operations are fundamental to working with Linux. This includes creating,
      copying, moving, renaming, and deleting files. Mastering these commands is
      essential for effective file management.
    </p>

    <h2 className="text-3xl font-bold mt-8">Creating Files</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create empty file with touch
$ touch filename.txt
$ touch file1.txt file2.txt file3.txt    # Multiple files

# Create file with content using echo
$ echo "Hello World" > newfile.txt       # Creates/overwrites
$ echo "More content" >> newfile.txt     # Appends

# Create file with cat
$ cat > myfile.txt
Type your content here
Press Ctrl+D to save

# Create file with text editor
$ nano filename.txt
$ vim filename.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Copying Files (cp)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ cp [options] source destination

# Copy single file
$ cp file.txt backup.txt

# Copy file to directory
$ cp file.txt /home/user/documents/

# Copy multiple files to directory
$ cp file1.txt file2.txt /destination/

# Copy with confirmation (interactive)
$ cp -i source.txt dest.txt

# Copy preserving attributes
$ cp -p source.txt dest.txt

# Copy directory recursively
$ cp -r source_dir/ dest_dir/

# Verbose output
$ cp -v file.txt backup.txt
'file.txt' -> 'backup.txt'`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">cp Command Options</h3>
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
            <td className="p-3 border font-mono text-gray-900">-r, -R</td>
            <td className="p-3 border">Copy directories recursively</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-i</td>
            <td className="p-3 border">Interactive mode, prompt before overwrite</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-v</td>
            <td className="p-3 border">Verbose mode, show files being copied</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-p</td>
            <td className="p-3 border">Preserve permissions and timestamps</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-a</td>
            <td className="p-3 border">Archive mode (preserves all attributes)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-u</td>
            <td className="p-3 border">Update (copy only if source is newer)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-n</td>
            <td className="p-3 border">Do not overwrite existing files</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Moving/Renaming Files (mv)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ mv [options] source destination

# Rename a file
$ mv oldname.txt newname.txt

# Move file to directory
$ mv file.txt /home/user/documents/

# Move multiple files
$ mv file1.txt file2.txt /destination/

# Move and rename
$ mv oldfile.txt /destination/newfile.txt

# Interactive mode (prompt before overwrite)
$ mv -i source.txt dest.txt

# Verbose output
$ mv -v file.txt /destination/
renamed 'file.txt' -> '/destination/file.txt'

# Move directory
$ mv source_dir/ /destination/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deleting Files (rm)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ rm [options] file(s)

# Remove single file
$ rm file.txt

# Remove multiple files
$ rm file1.txt file2.txt file3.txt

# Interactive mode (confirm each deletion)
$ rm -i file.txt
rm: remove regular file 'file.txt'? y

# Force removal (no prompts, ignore nonexistent)
$ rm -f file.txt

# Remove directory and contents
$ rm -r directory/

# Force remove directory (DANGEROUS!)
$ rm -rf directory/

# Verbose output
$ rm -v file.txt
removed 'file.txt'`}
      </pre>
    </div>

    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4 border-l-4 border-red-500">
      <p className="font-bold text-red-700 dark:text-red-300">Warning: rm -rf is dangerous!</p>
      <p className="mt-2">
        Always double-check before using <code className="font-mono text-gray-900">rm -rf</code>.
        There is no recycle bin - deleted files are gone permanently.
        Never run <code className="font-mono text-gray-900">rm -rf /</code> or <code className="font-mono text-gray-900">rm -rf ~</code>.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">File Operations Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">touch</td>
            <td className="p-3 border">Create empty file</td>
            <td className="p-3 border font-mono text-gray-900">touch file.txt</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">cp</td>
            <td className="p-3 border">Copy files/directories</td>
            <td className="p-3 border font-mono text-gray-900">cp file.txt backup.txt</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">mv</td>
            <td className="p-3 border">Move or rename</td>
            <td className="p-3 border font-mono text-gray-900">mv old.txt new.txt</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">rm</td>
            <td className="p-3 border">Remove files/directories</td>
            <td className="p-3 border font-mono text-gray-900">rm file.txt</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use touch to create empty files or update timestamps</li>
        <li>cp -r is required to copy directories</li>
        <li>mv works for both moving and renaming files</li>
        <li>rm -rf is dangerous - always double-check the path</li>
        <li>Use -i flag for interactive confirmation on destructive operations</li>
        <li>Use -v flag for verbose output to see what is happening</li>
      </ul>
    </div>
  </div>
);

export default FileOperations;
