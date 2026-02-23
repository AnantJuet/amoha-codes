import React from "react";

const RubyOOP: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Object-Oriented Programming</h1>

    <h2 className="text-2xl font-bold mt-6">Classes and Objects</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def introduce
    "Hi, I'm #{@name}, #{@age} years old"
  end
end

# Create objects
alice = Person.new("Alice", 30)
bob = Person.new("Bob", 25)

puts alice.introduce  # Hi, I'm Alice, 30 years old`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Accessors</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Person
  # Manual accessor methods
  def name
    @name
  end

  def name=(value)
    @name = value
  end

  # Shorthand accessors
  attr_reader :age       # Getter only
  attr_writer :email     # Setter only
  attr_accessor :phone   # Both getter and setter

  def initialize(name, age)
    @name = name
    @age = age
  end
end

person = Person.new("Alice", 30)
puts person.name       # Alice (getter)
person.name = "Alicia" # (setter)
puts person.age        # 30 (attr_reader)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Class Methods and Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Counter
  @@count = 0  # Class variable

  def initialize
    @@count += 1
  end

  # Class method
  def self.total
    @@count
  end

  # Alternative class method syntax
  class << self
    def reset
      @@count = 0
    end
  end
end

Counter.new
Counter.new
puts Counter.total  # => 2
Counter.reset`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Inheritance</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Animal
  def initialize(name)
    @name = name
  end

  def speak
    "..."
  end
end

class Dog < Animal
  def speak
    "Woof!"
  end

  def fetch
    "#{@name} fetches the ball"
  end
end

class Cat < Animal
  def speak
    "Meow!"
  end
end

dog = Dog.new("Rex")
puts dog.speak   # Woof!
puts dog.fetch   # Rex fetches the ball

# super calls parent method
class Puppy < Dog
  def speak
    super + " (but smaller)"
  end
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Modules - Mixins</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`module Swimmable
  def swim
    "#{self.class} is swimming"
  end
end

module Flyable
  def fly
    "#{self.class} is flying"
  end
end

class Duck
  include Swimmable  # Instance methods
  include Flyable
end

class Fish
  include Swimmable
end

duck = Duck.new
puts duck.swim  # Duck is swimming
puts duck.fly   # Duck is flying

# extend for class methods
module Findable
  def find(id)
    "Finding #{self} with id #{id}"
  end
end

class User
  extend Findable
end

User.find(1)  # Finding User with id 1`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Modules - Namespaces</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`module MyApp
  class User
    def initialize(name)
      @name = name
    end
  end

  module Admin
    class User
      def initialize(name, role)
        @name = name
        @role = role
      end
    end
  end
end

user = MyApp::User.new("Alice")
admin = MyApp::Admin::User.new("Bob", :superadmin)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Visibility</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Example
  def public_method
    "Anyone can call this"
  end

  protected

  def protected_method
    "Same class or subclass only"
  end

  private

  def private_method
    "Only within this instance"
  end
end

# Alternative syntax
class Example
  def method1; end
  def method2; end
  def method3; end

  public :method1
  protected :method2
  private :method3
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Method Lookup Chain</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`module A
  def greet
    "Hello from A"
  end
end

module B
  def greet
    "Hello from B"
  end
end

class Parent
  def greet
    "Hello from Parent"
  end
end

class Child < Parent
  include A
  include B

  def greet
    "Hello from Child"
  end
end

# Lookup order: Child -> B -> A -> Parent -> Object
Child.ancestors
# => [Child, B, A, Parent, Object, Kernel, BasicObject]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Duck Typing</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# "If it walks like a duck and quacks like a duck..."
def make_speak(animal)
  animal.speak  # Works with any object that has speak
end

class Dog
  def speak
    "Woof!"
  end
end

class Robot
  def speak
    "Beep boop"
  end
end

make_speak(Dog.new)    # Woof!
make_speak(Robot.new)  # Beep boop

# respond_to? for checking
def safe_speak(obj)
  if obj.respond_to?(:speak)
    obj.speak
  else
    "Cannot speak"
  end
end`}
    </pre>
  </div>
);

export default RubyOOP;
