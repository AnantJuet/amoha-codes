import React from "react";

const CompilingFromSource: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Compiling from Source
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sometimes software is not available in package repositories, or you need
      a specific version or custom configuration. In these cases, you can compile
      software from source code.
    </p>

    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Install build tools on Debian/Ubuntu
$ sudo apt install build-essential

# Install build tools on Fedora
$ sudo dnf groupinstall "Development Tools"

# Common build dependencies
$ sudo apt install git cmake autoconf automake libtool`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Standard Build Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# 1. Download source code
$ wget https://example.com/software-1.0.tar.gz
$ tar -xzf software-1.0.tar.gz
$ cd software-1.0

# 2. Configure (check for dependencies)
$ ./configure
# or with options
$ ./configure --prefix=/usr/local

# 3. Compile
$ make
# or parallel build
$ make -j$(nproc)

# 4. Install
$ sudo make install`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CMake-based Projects</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# CMake build process
$ mkdir build && cd build
$ cmake ..
$ make -j$(nproc)
$ sudo make install`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Uninstalling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# If Makefile supports it
$ sudo make uninstall

# Or use checkinstall to create a package
$ sudo apt install checkinstall
$ sudo checkinstall           # Creates .deb package
$ sudo dpkg -r package-name   # Easy removal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Install build-essential (Debian) or Development Tools (Fedora)</li>
        <li>Standard process: configure, make, make install</li>
        <li>Read README and INSTALL files for specific instructions</li>
        <li>Use checkinstall to create packages for easier management</li>
        <li>Prefer package managers when possible for easier updates</li>
      </ul>
    </div>
  </div>
);

export default CompilingFromSource;
