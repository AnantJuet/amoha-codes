import React from "react";

const RubyGetStarted: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Get Started</h1>

    <h2 className="text-2xl font-bold mt-6">Installing Ruby</h2>
    <p>Ruby can be installed on various operating systems.</p>

    <h3 className="text-xl font-semibold mt-4">Windows</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Download RubyInstaller from https://rubyinstaller.org/
# Or use Chocolatey:
choco install ruby`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">macOS</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Ruby comes pre-installed on macOS
# For newer versions, use Homebrew:
brew install ruby

# Or use rbenv:
brew install rbenv
rbenv install 3.2.0
rbenv global 3.2.0`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Linux</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Ubuntu/Debian
sudo apt-get install ruby-full

# Fedora
sudo dnf install ruby

# Using rbenv (recommended)
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/HEAD/bin/rbenv-installer | bash`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Verify Installation</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`ruby --version
# Output: ruby 3.2.0 (2022-12-25 revision a528908271) [x86_64-linux]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Interactive Ruby (IRB)</h2>
    <p>IRB is Ruby's interactive shell for quick experimentation.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Start IRB
irb

# In IRB:
irb(main):001:0> puts "Hello, Ruby!"
Hello, Ruby!
=> nil

irb(main):002:0> 2 + 2
=> 4

irb(main):003:0> exit`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Your First Ruby Program</h2>
    <p>Create a file named <code>hello.rb</code>:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# hello.rb
puts "Hello, World!"
puts "Welcome to Ruby programming!"

# Run it:
# ruby hello.rb`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Ruby File Extension</h2>
    <p>Ruby files use the <code>.rb</code> extension.</p>

    <h2 className="text-2xl font-bold mt-6">Running Ruby Programs</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Run a Ruby file
ruby filename.rb

# Execute Ruby code directly
ruby -e 'puts "Hello from command line!"'

# Check syntax without running
ruby -c filename.rb`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Ruby Gems</h2>
    <p>RubyGems is Ruby's package manager.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Install a gem
gem install rails

# List installed gems
gem list

# Update gems
gem update

# Uninstall a gem
gem uninstall gem_name`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Bundler</h2>
    <p>Bundler manages gem dependencies for your projects.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Install Bundler
gem install bundler

# Create a Gemfile
bundle init

# Install dependencies from Gemfile
bundle install

# Run with bundled gems
bundle exec ruby your_script.rb`}
    </pre>
  </div>
);

export default RubyGetStarted;
