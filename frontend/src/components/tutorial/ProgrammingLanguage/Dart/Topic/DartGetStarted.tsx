import React from "react";

const DartGetStarted: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Dart Get Started</h1>

    <h2 className="text-2xl font-bold mt-6">Installing Dart</h2>

    <h3 className="text-xl font-semibold mt-4">Windows</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Using Chocolatey
choco install dart-sdk

# Or download from dart.dev and add to PATH`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">macOS</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Using Homebrew
brew tap dart-lang/dart
brew install dart`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Linux</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Ubuntu/Debian
sudo apt-get update
sudo apt-get install apt-transport-https
wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor -o /usr/share/keyrings/dart.gpg
echo 'deb [signed-by=/usr/share/keyrings/dart.gpg arch=amd64] https://storage.googleapis.com/download.dartlang.org/linux/debian stable main' | sudo tee /etc/apt/sources.list.d/dart_stable.list
sudo apt-get update
sudo apt-get install dart`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Verify Installation</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`dart --version
# Dart SDK version: 3.x.x`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Your First Dart Program</h2>
    <p>Create a file named <code>hello.dart</code>:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`void main() {
  print('Hello, Dart!');
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Running Dart Programs</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Run a Dart file
dart run hello.dart

# Or simply
dart hello.dart

# Compile to executable
dart compile exe hello.dart -o hello`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">DartPad</h2>
    <p>
      Try Dart online at <code>dartpad.dev</code> - no installation needed!
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating a Project</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Create a new Dart project
dart create my_project

# Project structure
my_project/
├── bin/
│   └── my_project.dart  # Main entry point
├── lib/
│   └── my_project.dart  # Library code
├── test/
│   └── my_project_test.dart
├── pubspec.yaml          # Package config
└── README.md`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">pubspec.yaml</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`name: my_project
description: A sample Dart project
version: 1.0.0

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  http: ^1.0.0

dev_dependencies:
  lints: ^2.0.0
  test: ^1.21.0`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Package Management</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Get dependencies
dart pub get

# Add a dependency
dart pub add http

# Update dependencies
dart pub upgrade

# Run tests
dart test`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">IDE Setup</h2>
    <p>Recommended IDEs with Dart support:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>VS Code</strong> - Install "Dart" extension</li>
      <li><strong>IntelliJ IDEA/Android Studio</strong> - Install "Dart" plugin</li>
      <li><strong>DartPad</strong> - Online editor at dartpad.dev</li>
    </ul>
  </div>
);

export default DartGetStarted;
