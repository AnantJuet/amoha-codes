import React from "react";

const DartComments: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Dart Comments</h1>

    <h2 className="text-2xl font-bold mt-6">Single-Line Comments</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// This is a single-line comment
void main() {
  print('Hello');  // Inline comment
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multi-Line Comments</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`/*
  This is a multi-line comment.
  It can span multiple lines.
*/

/* This also works on a single line */`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Documentation Comments</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`/// A single-line documentation comment.
/// Use for documenting classes, methods, etc.

/**
 * A multi-line documentation comment.
 *
 * This can include more detailed descriptions
 * and examples.
 */

/// Calculates the area of a rectangle.
///
/// Takes [width] and [height] as parameters.
/// Returns the computed area.
///
/// Example:
/// \`\`\`dart
/// var area = calculateArea(5, 10);
/// print(area); // 50
/// \`\`\`
double calculateArea(double width, double height) {
  return width * height;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">DartDoc Annotations</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`/// A person with a [name] and [age].
///
/// Use [greet] to get a greeting message.
///
/// See also:
/// * [Employee] for a person with a job
/// * https://dart.dev for more info
class Person {
  /// The person's name.
  final String name;

  /// The person's age in years.
  final int age;

  /// Creates a person with the given [name] and [age].
  Person(this.name, this.age);

  /// Returns a greeting for this person.
  ///
  /// If [formal] is true, uses formal greeting.
  String greet({bool formal = false}) {
    if (formal) {
      return 'Good day, I am $name.';
    }
    return 'Hi, I\\'m $name!';
  }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Generating Documentation</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Generate documentation
dart doc .

# Output is in doc/api/index.html`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">TODO Comments</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// TODO: Implement error handling
// FIXME: This crashes on empty input
// HACK: Temporary workaround for API bug
// NOTE: This assumes positive numbers only`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Use <code>///</code> for documentation comments (preferred over <code>/** */</code>)</li>
      <li>Document all public APIs</li>
      <li>Use <code>[reference]</code> syntax to link to other elements</li>
      <li>Include examples in documentation when helpful</li>
      <li>Keep comments up-to-date with code changes</li>
    </ul>
  </div>
);

export default DartComments;
