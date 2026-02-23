import React from "react";

export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const tutorialData: SidebarItem[] = [
  { label: "GDScript Home", href: "gdscript_home" },
  { label: "GDScript Intro", href: "gdscript_intro" },
  { label: "Godot Setup", href: "godot_setup" },
  {
    label: "Variables",
    href: "gdscript_variables",
    isHeader: true,
    children: [
      { label: "Variables Basics", href: "gdscript_variables_basics" },
      { label: "Data Types", href: "gdscript_data_types" },
      { label: "Type Hints", href: "gdscript_type_hints" },
    ],
  },
  {
    label: "Operators",
    href: "gdscript_operators",
    isHeader: true,
    children: [
      { label: "Arithmetic Operators", href: "gdscript_arithmetic" },
      { label: "Comparison Operators", href: "gdscript_comparison" },
      { label: "Logical Operators", href: "gdscript_logical" },
    ],
  },
  {
    label: "Control Flow",
    href: "gdscript_control_flow",
    isHeader: true,
    children: [
      { label: "If Statements", href: "gdscript_if" },
      { label: "Match Statements", href: "gdscript_match" },
      { label: "Loops", href: "gdscript_loops" },
    ],
  },
  {
    label: "Functions",
    href: "gdscript_functions",
    isHeader: true,
    children: [
      { label: "Function Basics", href: "gdscript_functions_basics" },
      { label: "Parameters & Return", href: "gdscript_parameters" },
      { label: "Built-in Functions", href: "gdscript_builtin" },
    ],
  },
  {
    label: "Classes",
    href: "gdscript_classes",
    isHeader: true,
    children: [
      { label: "Class Basics", href: "gdscript_class_basics" },
      { label: "Inheritance", href: "gdscript_inheritance" },
      { label: "Inner Classes", href: "gdscript_inner_classes" },
    ],
  },
  {
    label: "Signals & Exports",
    href: "gdscript_signals",
    isHeader: true,
    children: [
      { label: "Signals", href: "gdscript_signals_basics" },
      { label: "Export Variables", href: "gdscript_exports" },
    ],
  },
  {
    label: "Nodes & Scenes",
    href: "gdscript_nodes",
    isHeader: true,
    children: [
      { label: "Node System", href: "gdscript_node_system" },
      { label: "Scene Tree", href: "gdscript_scene_tree" },
      { label: "Instancing", href: "gdscript_instancing" },
    ],
  },
  { label: "Input Handling", href: "gdscript_input" },
  {
    label: "Physics",
    href: "gdscript_physics",
    isHeader: true,
    children: [
      { label: "Physics Basics", href: "gdscript_physics_basics" },
      { label: "Collision Detection", href: "gdscript_collision" },
    ],
  },
  { label: "Animation", href: "gdscript_animation" },
  { label: "2D Game Basics", href: "gdscript_2d_basics" },
  { label: "3D Game Basics", href: "gdscript_3d_basics" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "gdscript_home": {
    title: "GDScript Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Learn GDScript
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>GDScript</strong> is a high-level, dynamically typed programming language used to create content in the Godot game engine.
        </p>
        <p className="leading-relaxed mb-4">
          It uses a syntax similar to Python and is designed specifically for game development, making it easy to learn and efficient for creating games.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">What You Will Learn</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>GDScript fundamentals and syntax</li>
          <li>Variables, data types, and operators</li>
          <li>Control flow and functions</li>
          <li>Object-oriented programming with classes</li>
          <li>Signals and export variables</li>
          <li>Working with nodes and scenes</li>
          <li>Input handling and physics</li>
          <li>2D and 3D game development basics</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Example: Your First GDScript</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends Node

func _ready():
    print("Hello, Godot!")

func _process(delta):
    # Called every frame
    pass`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_intro": {
    title: "Introduction to GDScript",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          What is GDScript?
        </h2>
        <p className="leading-relaxed mb-4">
          GDScript is Godot's built-in scripting language. It's designed specifically for game development and integrates seamlessly with the engine.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Key Features</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Python-like syntax:</strong> Easy to read and write</li>
          <li><strong>Tightly integrated:</strong> Direct access to Godot's API</li>
          <li><strong>Dynamic typing:</strong> With optional static typing</li>
          <li><strong>Built-in types:</strong> Vectors, transforms, and more</li>
          <li><strong>Signal system:</strong> Event-driven programming</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">GDScript vs Other Languages</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">GDScript</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">C#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Learning Curve</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Easy</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Moderate</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Performance</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Good</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Excellent</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Integration</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Native</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Good</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "godot_setup": {
    title: "Godot Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Installing Godot
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Download Godot</h3>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Visit godotengine.org</li>
          <li>Download the appropriate version for your OS</li>
          <li>Extract the archive (no installation needed)</li>
          <li>Run the Godot executable</li>
        </ol>

        <h3 className="text-xl font-medium mb-3 mt-8">Creating Your First Project</h3>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Click "New Project"</li>
          <li>Choose a project name and location</li>
          <li>Select renderer (Forward+ for 3D, Compatibility for 2D)</li>
          <li>Click "Create & Edit"</li>
        </ol>

        <h3 className="text-xl font-medium mb-3 mt-8">Editor Overview</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Scene dock:</strong> Node hierarchy</li>
          <li><strong>FileSystem dock:</strong> Project files</li>
          <li><strong>Inspector:</strong> Node properties</li>
          <li><strong>Viewport:</strong> Visual editor</li>
          <li><strong>Script editor:</strong> Code editing</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Creating Your First Script</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# 1. Create a new scene with a Node2D
# 2. Select the node and click "Attach Script"
# 3. Keep defaults and click "Create"

extends Node2D

func _ready():
    print("Script is working!")`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_variables_basics": {
    title: "Variables Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Variables in GDScript
        </h2>
        <p className="leading-relaxed mb-4">
          Variables store data that can be used and modified throughout your script.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Declaring Variables</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic variable declaration
var player_name = "Hero"
var health = 100
var speed = 5.5
var is_alive = true

# Constants (cannot be changed)
const MAX_HEALTH = 100
const GAME_VERSION = "1.0"

# Onready variables (initialized when node enters scene tree)
@onready var sprite = $Sprite2D
@onready var collision = $CollisionShape2D`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Variable Scope</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Class-level variable (accessible everywhere in the script)
var score = 0

func _ready():
    # Local variable (only accessible in this function)
    var local_var = 10
    score += local_var

func add_points(points):
    score += points  # Can access class-level variable`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_data_types": {
    title: "Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          GDScript Data Types
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Integer
var age: int = 25
var count = 10

# Float
var speed: float = 5.5
var gravity = 9.8

# String
var name: String = "Player"
var message = "Hello, World!"

# Boolean
var is_active: bool = true
var game_over = false

# Null
var empty_value = null`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Collections</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Array
var inventory = ["sword", "shield", "potion"]
var numbers: Array[int] = [1, 2, 3, 4, 5]

# Dictionary
var player = {
    "name": "Hero",
    "health": 100,
    "level": 1
}

# Accessing elements
print(inventory[0])      # "sword"
print(player["name"])    # "Hero"
print(player.health)     # 100`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Built-in Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Vector2 (2D position/direction)
var position = Vector2(100, 200)
var velocity = Vector2.ZERO

# Vector3 (3D position/direction)
var position_3d = Vector3(1, 2, 3)

# Color
var red = Color.RED
var custom_color = Color(0.5, 0.8, 1.0, 1.0)

# Transform2D / Transform3D
var transform = Transform2D.IDENTITY`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_type_hints": {
    title: "Type Hints",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Static Typing in GDScript
        </h2>
        <p className="leading-relaxed mb-4">
          GDScript supports optional static typing for better performance and error detection.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Type Annotations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Variable type hints
var health: int = 100
var speed: float = 5.5
var name: String = "Player"
var position: Vector2 = Vector2.ZERO

# Inferred types with :=
var score := 0        # Inferred as int
var velocity := Vector2.ZERO  # Inferred as Vector2

# Function parameters and return types
func add(a: int, b: int) -> int:
    return a + b

func get_player_name() -> String:
    return name

func move(direction: Vector2) -> void:
    position += direction * speed`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Typed Arrays</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Typed arrays
var scores: Array[int] = [10, 20, 30]
var names: Array[String] = ["Alice", "Bob"]
var enemies: Array[Node2D] = []

# PackedArrays for better performance
var vertices: PackedVector2Array = PackedVector2Array()
var colors: PackedColorArray = PackedColorArray()`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_arithmetic": {
    title: "Arithmetic Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Arithmetic Operators
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var a = 10
var b = 3

# Addition
print(a + b)   # 13

# Subtraction
print(a - b)   # 7

# Multiplication
print(a * b)   # 30

# Division
print(a / b)   # 3.333...

# Integer division
print(a / b)   # Use int() for integer result

# Modulo (remainder)
print(a % b)   # 1

# Power
print(a ** 2)  # 100`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Assignment Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var score = 100

score += 10   # score = score + 10 -> 110
score -= 5    # score = score - 5 -> 105
score *= 2    # score = score * 2 -> 210
score /= 3    # score = score / 3 -> 70`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_comparison": {
    title: "Comparison Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Comparison Operators
        </h2>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var a = 10
var b = 5

# Equal to
print(a == b)   # false

# Not equal to
print(a != b)   # true

# Greater than
print(a > b)    # true

# Less than
print(a < b)    # false

# Greater than or equal
print(a >= 10)  # true

# Less than or equal
print(b <= 5)   # true

# Identity comparison
var node1 = Node.new()
var node2 = node1
print(node1 == node2)  # true (same object)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">String Comparison</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var name1 = "Alice"
var name2 = "Bob"

print(name1 == "Alice")  # true
print(name1 < name2)     # true (alphabetical)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_logical": {
    title: "Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Logical Operators
        </h2>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var is_alive = true
var has_weapon = true
var is_stunned = false

# AND - both must be true
if is_alive and has_weapon:
    print("Can attack!")

# OR - at least one must be true
if has_weapon or has_magic:
    print("Has combat ability")

# NOT - inverts the value
if not is_stunned:
    print("Can move")

# Combined conditions
if is_alive and (has_weapon or has_magic) and not is_stunned:
    print("Ready for battle!")`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Truthiness</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Falsy values: false, 0, 0.0, "", [], {}, null
# Everything else is truthy

var inventory = []
if inventory:
    print("Has items")
else:
    print("Empty inventory")  # This prints

var health = 100
if health:
    print("Still alive!")  # This prints`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_if": {
    title: "If Statements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Conditional Statements
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">If, Elif, Else</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var health = 75

if health <= 0:
    print("Game Over")
elif health < 25:
    print("Critical Health!")
elif health < 50:
    print("Low Health")
else:
    print("Healthy")

# Single line if
if health > 0: print("Alive")`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Ternary Operator</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var score = 85

# Ternary expression
var result = "Pass" if score >= 60 else "Fail"
print(result)  # "Pass"

# Nested ternary
var grade = "A" if score >= 90 else "B" if score >= 80 else "C"`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_match": {
    title: "Match Statements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Match Statements
        </h2>
        <p className="leading-relaxed mb-4">
          Match is similar to switch statements in other languages but more powerful.
        </p>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var state = "idle"

match state:
    "idle":
        print("Standing still")
    "walking":
        print("Moving around")
    "jumping":
        print("In the air")
    _:  # Default case
        print("Unknown state")

# Multiple patterns
var input = "w"
match input:
    "w", "W", "up":
        move_up()
    "s", "S", "down":
        move_down()

# Pattern binding
var command = ["attack", "sword"]
match command:
    ["attack", var weapon]:
        print("Attacking with ", weapon)
    ["defend"]:
        print("Defending")
    var other:
        print("Unknown command: ", other)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_loops": {
    title: "Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Loops in GDScript
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">For Loop</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Range loop
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(2, 6):
    print(i)  # 2, 3, 4, 5

for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Array loop
var items = ["sword", "shield", "potion"]
for item in items:
    print(item)

# Dictionary loop
var stats = {"health": 100, "mana": 50}
for key in stats:
    print(key, ": ", stats[key])`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">While Loop</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var count = 0
while count < 5:
    print(count)
    count += 1

# Break and continue
for i in range(10):
    if i == 3:
        continue  # Skip this iteration
    if i == 7:
        break     # Exit the loop
    print(i)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_functions_basics": {
    title: "Function Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Functions in GDScript
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Defining Functions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic function
func greet():
    print("Hello!")

# Function with parameters
func greet_player(name):
    print("Hello, " + name + "!")

# Function with return value
func add(a, b):
    return a + b

# Calling functions
greet()
greet_player("Hero")
var sum = add(5, 3)  # 8`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Virtual Functions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Built-in virtual functions (called by Godot)
func _ready():
    # Called when node enters scene tree
    print("Node is ready!")

func _process(delta):
    # Called every frame
    position.x += 100 * delta

func _physics_process(delta):
    # Called every physics frame (fixed timestep)
    velocity += gravity * delta

func _input(event):
    # Called on input events
    if event.is_action_pressed("jump"):
        jump()`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_parameters": {
    title: "Parameters & Return",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Function Parameters and Return Values
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Default Parameters</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`func attack(damage: int = 10, critical: bool = false):
    var total = damage * 2 if critical else damage
    return total

# Calling with defaults
attack()           # damage=10, critical=false
attack(25)         # damage=25, critical=false
attack(25, true)   # damage=25, critical=true`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Multiple Return Values</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Return multiple values using Array
func get_stats():
    return [100, 50, 25]  # health, mana, stamina

var stats = get_stats()
var health = stats[0]

# Return using Dictionary
func get_player_info() -> Dictionary:
    return {
        "name": "Hero",
        "level": 10,
        "health": 100
    }

var info = get_player_info()
print(info["name"])`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_builtin": {
    title: "Built-in Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Built-in Functions
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Common Functions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Output
print("Hello")
print_debug("Debug info")
printerr("Error message")

# Math
abs(-5)           # 5
ceil(4.2)         # 5
floor(4.8)        # 4
round(4.5)        # 5
clamp(15, 0, 10)  # 10
lerp(0, 100, 0.5) # 50

# Random
randomize()       # Seed random generator
randi() % 100     # Random int 0-99
randf()           # Random float 0-1
randi_range(1, 6) # Random int 1-6
randf_range(0.5, 1.5)  # Random float

# Type conversion
int("42")         # 42
float("3.14")     # 3.14
str(100)          # "100"`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Array Functions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var arr = [3, 1, 4, 1, 5]

arr.append(9)      # Add to end
arr.insert(0, 2)   # Insert at index
arr.pop_back()     # Remove and return last
arr.pop_front()    # Remove and return first
arr.erase(1)       # Remove first occurrence
arr.sort()         # Sort in place
arr.shuffle()      # Randomize order
arr.has(4)         # Check if contains
arr.find(4)        # Get index of element
arr.size()         # Get length`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_class_basics": {
    title: "Class Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Classes in GDScript
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Basic Class Structure</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Every script is implicitly a class
# player.gd
extends CharacterBody2D
class_name Player  # Optional: register as global class

# Member variables
var health: int = 100
var speed: float = 200.0

# Constructor
func _init():
    print("Player created")

# Methods
func take_damage(amount: int):
    health -= amount
    if health <= 0:
        die()

func die():
    queue_free()`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Using Classes</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# If class_name is defined
var player = Player.new()

# Using preload
var PlayerClass = preload("res://player.gd")
var player = PlayerClass.new()

# Adding to scene
var player_instance = player_scene.instantiate()
add_child(player_instance)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_inheritance": {
    title: "Inheritance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Inheritance in GDScript
        </h2>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Base class: entity.gd
extends Node2D
class_name Entity

var health: int = 100

func take_damage(amount: int):
    health -= amount
    print("Took ", amount, " damage")

func die():
    queue_free()

# Derived class: player.gd
extends Entity
class_name Player

var score: int = 0

# Override parent method
func take_damage(amount: int):
    super.take_damage(amount)  # Call parent method
    flash_red()

func flash_red():
    modulate = Color.RED
    await get_tree().create_timer(0.1).timeout
    modulate = Color.WHITE

# Enemy class: enemy.gd
extends Entity
class_name Enemy

var damage: int = 10

func attack(target: Entity):
    target.take_damage(damage)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_inner_classes": {
    title: "Inner Classes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Inner Classes
        </h2>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends Node

# Inner class definition
class Item:
    var name: String
    var value: int

    func _init(n: String, v: int):
        name = n
        value = v

    func get_description() -> String:
        return name + " worth " + str(value) + " gold"

class Weapon extends Item:
    var damage: int

    func _init(n: String, v: int, d: int):
        super._init(n, v)
        damage = d

# Using inner classes
func _ready():
    var potion = Item.new("Health Potion", 50)
    print(potion.get_description())

    var sword = Weapon.new("Iron Sword", 100, 15)
    print(sword.damage)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_signals_basics": {
    title: "Signals",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Signals in GDScript
        </h2>
        <p className="leading-relaxed mb-4">
          Signals are Godot's version of the observer pattern, allowing nodes to communicate without tight coupling.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Defining and Emitting Signals</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# player.gd
extends CharacterBody2D

# Define signals
signal health_changed(new_health)
signal died
signal item_collected(item_name, item_value)

var health: int = 100

func take_damage(amount: int):
    health -= amount
    health_changed.emit(health)  # Emit with argument

    if health <= 0:
        died.emit()  # Emit without arguments

func collect_item(item):
    item_collected.emit(item.name, item.value)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Connecting Signals</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# game.gd
extends Node

@onready var player = $Player
@onready var hud = $HUD

func _ready():
    # Connect signals to methods
    player.health_changed.connect(_on_health_changed)
    player.died.connect(_on_player_died)

    # Connect with callable
    player.item_collected.connect(func(name, value):
        print("Got ", name, " worth ", value)
    )

func _on_health_changed(new_health: int):
    hud.update_health_bar(new_health)

func _on_player_died():
    show_game_over_screen()`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_exports": {
    title: "Export Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Export Variables
        </h2>
        <p className="leading-relaxed mb-4">
          Export variables are exposed in the Godot Inspector, allowing you to modify values without editing code.
        </p>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends CharacterBody2D

# Basic exports
@export var speed: float = 200.0
@export var jump_force: int = 400
@export var player_name: String = "Hero"

# Export with range
@export_range(0, 100) var health: int = 100
@export_range(0.0, 10.0, 0.1) var damage_multiplier: float = 1.0

# Export enums
@export_enum("Warrior", "Mage", "Rogue") var player_class: int = 0

# Export resources
@export var weapon_texture: Texture2D
@export var attack_sound: AudioStream

# Export node paths
@export var target_path: NodePath

# Export groups
@export_group("Movement")
@export var walk_speed: float = 100.0
@export var run_speed: float = 200.0

@export_group("Combat")
@export var attack_damage: int = 10
@export var defense: int = 5

# Export categories
@export_category("Player Stats")
@export var level: int = 1
@export var experience: int = 0`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_node_system": {
    title: "Node System",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Understanding Nodes
        </h2>
        <p className="leading-relaxed mb-4">
          Nodes are the fundamental building blocks in Godot. Everything in your game is made of nodes.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Common Node Types</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Node2D:</strong> Base for 2D game objects</li>
          <li><strong>Node3D:</strong> Base for 3D game objects</li>
          <li><strong>CharacterBody2D/3D:</strong> For player/enemy movement</li>
          <li><strong>RigidBody2D/3D:</strong> Physics-based objects</li>
          <li><strong>Area2D/3D:</strong> Trigger zones</li>
          <li><strong>Sprite2D:</strong> Display images</li>
          <li><strong>AnimationPlayer:</strong> Play animations</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Accessing Nodes</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Get child node by name
var sprite = get_node("Sprite2D")
var sprite = $Sprite2D  # Shorthand

# Get nested child
var collision = $Player/CollisionShape2D

# Get parent
var parent = get_parent()

# Get sibling
var sibling = get_parent().get_node("Sibling")

# Using @onready
@onready var player = $Player
@onready var health_bar = $UI/HealthBar`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_scene_tree": {
    title: "Scene Tree",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Working with the Scene Tree
        </h2>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Access the scene tree
var tree = get_tree()

# Get all nodes in a group
var enemies = get_tree().get_nodes_in_group("enemies")
for enemy in enemies:
    enemy.take_damage(10)

# Add node to group
add_to_group("players")

# Check group membership
if is_in_group("enemies"):
    print("This is an enemy")

# Change scenes
get_tree().change_scene_to_file("res://levels/level2.tscn")

# Reload current scene
get_tree().reload_current_scene()

# Pause/unpause
get_tree().paused = true
get_tree().paused = false

# Quit game
get_tree().quit()`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_instancing": {
    title: "Instancing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Scene Instancing
        </h2>

        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Load and preload scenes
var bullet_scene = preload("res://bullet.tscn")
var enemy_scene = load("res://enemy.tscn")

# Create instance
func spawn_bullet():
    var bullet = bullet_scene.instantiate()
    bullet.position = position
    bullet.direction = facing_direction
    get_parent().add_child(bullet)

# Spawn multiple enemies
func spawn_enemies(count: int):
    for i in range(count):
        var enemy = enemy_scene.instantiate()
        enemy.position = get_random_position()
        add_child(enemy)

# Remove instance
func die():
    queue_free()  # Safe removal at end of frame

# Reparent node
func pickup_item(item):
    item.get_parent().remove_child(item)
    inventory_node.add_child(item)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_input": {
    title: "Input Handling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Handling Input
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Input Actions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Define actions in Project Settings > Input Map
# Then use them in code:

func _process(delta):
    # Check if action is currently pressed
    if Input.is_action_pressed("move_right"):
        position.x += speed * delta

    # Check if action was just pressed this frame
    if Input.is_action_just_pressed("jump"):
        jump()

    # Check if action was just released
    if Input.is_action_just_released("attack"):
        release_attack()

# Get axis input (returns -1 to 1)
func get_input_direction() -> Vector2:
    return Vector2(
        Input.get_axis("move_left", "move_right"),
        Input.get_axis("move_up", "move_down")
    )`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Input Events</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`func _input(event):
    if event is InputEventKey:
        if event.pressed and event.keycode == KEY_ESCAPE:
            get_tree().quit()

    if event is InputEventMouseButton:
        if event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
            shoot_at(event.position)

func _unhandled_input(event):
    # Called for unhandled input
    if event.is_action_pressed("pause"):
        toggle_pause()

# Mouse position
func _process(delta):
    var mouse_pos = get_global_mouse_position()
    look_at(mouse_pos)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_physics_basics": {
    title: "Physics Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Physics in Godot
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">CharacterBody2D Movement</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends CharacterBody2D

@export var speed: float = 200.0
@export var jump_velocity: float = -400.0

var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")

func _physics_process(delta):
    # Apply gravity
    if not is_on_floor():
        velocity.y += gravity * delta

    # Handle jump
    if Input.is_action_just_pressed("jump") and is_on_floor():
        velocity.y = jump_velocity

    # Get horizontal input
    var direction = Input.get_axis("move_left", "move_right")
    if direction:
        velocity.x = direction * speed
    else:
        velocity.x = move_toward(velocity.x, 0, speed)

    move_and_slide()`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">RigidBody2D</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends RigidBody2D

func _ready():
    # Apply initial impulse
    apply_central_impulse(Vector2(100, -200))

func _physics_process(delta):
    # Apply continuous force
    if Input.is_action_pressed("move_right"):
        apply_central_force(Vector2(500, 0))`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_collision": {
    title: "Collision Detection",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Collision Detection
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Area2D Signals</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends Area2D

func _ready():
    # Connect collision signals
    body_entered.connect(_on_body_entered)
    body_exited.connect(_on_body_exited)
    area_entered.connect(_on_area_entered)

func _on_body_entered(body: Node2D):
    if body.is_in_group("player"):
        print("Player entered!")
        body.collect_item(self)

func _on_body_exited(body: Node2D):
    print("Body exited: ", body.name)

func _on_area_entered(area: Area2D):
    if area.is_in_group("hitbox"):
        take_damage(area.damage)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Collision Layers and Masks</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Set collision layer and mask via code
collision_layer = 1  # What layer this object is on
collision_mask = 2   # What layers this object detects

# Check collision after move_and_slide
func _physics_process(delta):
    move_and_slide()

    for i in get_slide_collision_count():
        var collision = get_slide_collision(i)
        var collider = collision.get_collider()

        if collider.is_in_group("enemy"):
            take_damage(10)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_animation": {
    title: "Animation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Animation in Godot
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">AnimationPlayer</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends CharacterBody2D

@onready var anim_player = $AnimationPlayer

func _physics_process(delta):
    # Movement code...
    update_animation()

func update_animation():
    if velocity.length() > 0:
        anim_player.play("walk")
    else:
        anim_player.play("idle")

func attack():
    anim_player.play("attack")
    # Wait for animation to finish
    await anim_player.animation_finished
    print("Attack complete!")`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">AnimatedSprite2D</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends CharacterBody2D

@onready var sprite = $AnimatedSprite2D

func _physics_process(delta):
    if velocity.x != 0:
        sprite.play("run")
        sprite.flip_h = velocity.x < 0
    elif velocity.y < 0:
        sprite.play("jump")
    else:
        sprite.play("idle")`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Tweening</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`func fade_out():
    var tween = create_tween()
    tween.tween_property(self, "modulate:a", 0.0, 1.0)
    await tween.finished
    queue_free()

func bounce():
    var tween = create_tween()
    tween.tween_property(self, "scale", Vector2(1.2, 0.8), 0.1)
    tween.tween_property(self, "scale", Vector2(1.0, 1.0), 0.1)`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_2d_basics": {
    title: "2D Game Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          2D Game Development
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Complete 2D Player Script</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends CharacterBody2D

@export var speed: float = 200.0
@export var jump_velocity: float = -350.0

@onready var sprite = $AnimatedSprite2D
@onready var coyote_timer = $CoyoteTimer

var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")
var was_on_floor: bool = false

func _physics_process(delta):
    was_on_floor = is_on_floor()

    # Apply gravity
    if not is_on_floor():
        velocity.y += gravity * delta

    # Coyote time jump
    if was_on_floor and not is_on_floor():
        coyote_timer.start()

    # Jump
    var can_jump = is_on_floor() or not coyote_timer.is_stopped()
    if Input.is_action_just_pressed("jump") and can_jump:
        velocity.y = jump_velocity
        coyote_timer.stop()

    # Horizontal movement
    var direction = Input.get_axis("move_left", "move_right")
    velocity.x = direction * speed if direction else move_toward(velocity.x, 0, speed)

    move_and_slide()
    update_animation(direction)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">2D Camera Setup</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Add Camera2D as child of player
# Set camera limits and smoothing in inspector
# Or via code:

@onready var camera = $Camera2D

func _ready():
    camera.limit_left = 0
    camera.limit_top = 0
    camera.limit_right = 1920
    camera.limit_bottom = 1080
    camera.position_smoothing_enabled = true
    camera.position_smoothing_speed = 5.0`}
          </pre>
        </div>
      </>
    ),
  },

  "gdscript_3d_basics": {
    title: "3D Game Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          3D Game Development
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">3D Player Controller</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`extends CharacterBody3D

@export var speed: float = 5.0
@export var jump_velocity: float = 4.5
@export var mouse_sensitivity: float = 0.002

@onready var camera_pivot = $CameraPivot
@onready var camera = $CameraPivot/Camera3D

var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

func _ready():
    Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)

func _input(event):
    if event is InputEventMouseMotion:
        rotate_y(-event.relative.x * mouse_sensitivity)
        camera_pivot.rotate_x(-event.relative.y * mouse_sensitivity)
        camera_pivot.rotation.x = clamp(camera_pivot.rotation.x, -PI/2, PI/2)

func _physics_process(delta):
    if not is_on_floor():
        velocity.y -= gravity * delta

    if Input.is_action_just_pressed("jump") and is_on_floor():
        velocity.y = jump_velocity

    var input_dir = Input.get_vector("move_left", "move_right", "move_forward", "move_back")
    var direction = (transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()

    if direction:
        velocity.x = direction.x * speed
        velocity.z = direction.z * speed
    else:
        velocity.x = move_toward(velocity.x, 0, speed)
        velocity.z = move_toward(velocity.z, 0, speed)

    move_and_slide()`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Common 3D Node Types</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Node3D:</strong> Base 3D node</li>
          <li><strong>MeshInstance3D:</strong> Display 3D meshes</li>
          <li><strong>Camera3D:</strong> 3D viewport camera</li>
          <li><strong>DirectionalLight3D:</strong> Sun-like lighting</li>
          <li><strong>CharacterBody3D:</strong> Player/NPC movement</li>
          <li><strong>RigidBody3D:</strong> Physics objects</li>
          <li><strong>Area3D:</strong> Trigger volumes</li>
        </ul>
      </>
    ),
  },
};
