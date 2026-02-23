import React from "react";

const RubyFileIO: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby File I/O</h1>

    <h2 className="text-2xl font-bold mt-6">Reading Files</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Read entire file at once
content = File.read("example.txt")
puts content

# Read as array of lines
lines = File.readlines("example.txt")
lines.each { |line| puts line }

# Read with block (auto-closes file)
File.open("example.txt", "r") do |file|
  while line = file.gets
    puts line
  end
end

# Read line by line (memory efficient)
File.foreach("large_file.txt") do |line|
  puts line
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Writing Files</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Write (overwrites existing)
File.write("output.txt", "Hello, World!")

# Write with block
File.open("output.txt", "w") do |file|
  file.puts "Line 1"
  file.puts "Line 2"
  file.print "No newline"
  file.write "Also no newline"
end

# Append to file
File.open("log.txt", "a") do |file|
  file.puts "#{Time.now}: Log entry"
end

# Shorthand append
File.write("log.txt", "New content\\n", mode: "a")`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">File Modes</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Mode</th>
          <th className="border border-gray-300 p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">"r"</td><td className="border border-gray-300 p-2">Read only (default)</td></tr>
        <tr><td className="border border-gray-300 p-2">"w"</td><td className="border border-gray-300 p-2">Write only (creates/truncates)</td></tr>
        <tr><td className="border border-gray-300 p-2">"a"</td><td className="border border-gray-300 p-2">Append (creates if not exists)</td></tr>
        <tr><td className="border border-gray-300 p-2">"r+"</td><td className="border border-gray-300 p-2">Read and write</td></tr>
        <tr><td className="border border-gray-300 p-2">"w+"</td><td className="border border-gray-300 p-2">Read and write (truncates)</td></tr>
        <tr><td className="border border-gray-300 p-2">"a+"</td><td className="border border-gray-300 p-2">Read and append</td></tr>
        <tr><td className="border border-gray-300 p-2">"b"</td><td className="border border-gray-300 p-2">Binary mode (combine: "rb", "wb")</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">File Information</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`path = "example.txt"

# Existence and type
File.exist?(path)      # true/false
File.file?(path)       # Is it a file?
File.directory?(path)  # Is it a directory?
File.readable?(path)   # Can we read it?
File.writable?(path)   # Can we write to it?

# File properties
File.size(path)        # Size in bytes
File.mtime(path)       # Modified time
File.atime(path)       # Access time
File.ctime(path)       # Created/changed time

# Path manipulation
File.basename("/path/to/file.txt")  # "file.txt"
File.dirname("/path/to/file.txt")   # "/path/to"
File.extname("file.txt")            # ".txt"
File.expand_path("~/file.txt")      # Full path
File.join("path", "to", "file")     # "path/to/file"`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Directory Operations</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Current directory
Dir.pwd

# Change directory
Dir.chdir("/tmp") do
  # Work in /tmp
  puts Dir.pwd
end
# Back to original directory

# List contents
Dir.entries(".")           # [".", "..", "file1", ...]
Dir.glob("*.txt")          # All .txt files
Dir.glob("**/*.rb")        # Recursive .rb files
Dir["*.txt"]               # Shorthand for glob

# Create/remove directories
Dir.mkdir("new_dir")
Dir.mkdir("nested/dir")    # Error if parent doesn't exist
FileUtils.mkdir_p("nested/dir")  # Creates parents
Dir.rmdir("empty_dir")     # Only works if empty
FileUtils.rm_rf("dir")     # Remove recursively`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">FileUtils</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`require 'fileutils'

# Copy
FileUtils.cp("source.txt", "dest.txt")
FileUtils.cp_r("source_dir", "dest_dir")  # Recursive

# Move/rename
FileUtils.mv("old.txt", "new.txt")

# Remove
FileUtils.rm("file.txt")
FileUtils.rm_f("file.txt")   # Force (no error if missing)
FileUtils.rm_rf("directory") # Recursive force

# Create directories
FileUtils.mkdir_p("path/to/dir")

# Touch (create/update timestamp)
FileUtils.touch("file.txt")`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Tempfiles</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`require 'tempfile'

# Create temporary file
Tempfile.create('prefix') do |file|
  file.write("Temporary data")
  file.rewind
  puts file.read
end
# File automatically deleted after block

# Manual management
temp = Tempfile.new('myapp')
temp.write("data")
temp.close
# temp.unlink  # Delete when done`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Reading Structured Data</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`require 'json'
require 'yaml'
require 'csv'

# JSON
data = JSON.parse(File.read("data.json"))
File.write("out.json", JSON.pretty_generate(data))

# YAML
config = YAML.load_file("config.yml")
File.write("out.yml", config.to_yaml)

# CSV
CSV.foreach("data.csv", headers: true) do |row|
  puts row["name"]
end

CSV.open("out.csv", "w") do |csv|
  csv << ["name", "age"]
  csv << ["Alice", 30]
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Error Handling</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`begin
  File.open("missing.txt", "r") do |file|
    puts file.read
  end
rescue Errno::ENOENT => e
  puts "File not found: #{e.message}"
rescue Errno::EACCES => e
  puts "Permission denied: #{e.message}"
rescue IOError => e
  puts "IO error: #{e.message}"
end

# Check before opening
if File.exist?("data.txt") && File.readable?("data.txt")
  content = File.read("data.txt")
end`}
    </pre>
  </div>
);

export default RubyFileIO;
