import React from "react";

const CFiles: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C File Handling</h1>

    <h2 className="text-2xl font-bold mt-6">What is File Handling?</h2>
    <p>
      File handling in C enables you to create, open, read, write, and close files.
      This is essential for storing data permanently beyond program execution.
    </p>

    <h2 className="text-2xl font-bold mt-6">File Operations</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Function</th>
          <th className="border border-gray-300 p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">fopen()</td><td className="border border-gray-300 p-2">Opens a file</td></tr>
        <tr><td className="border border-gray-300 p-2">fclose()</td><td className="border border-gray-300 p-2">Closes a file</td></tr>
        <tr><td className="border border-gray-300 p-2">fread()</td><td className="border border-gray-300 p-2">Reads from a file</td></tr>
        <tr><td className="border border-gray-300 p-2">fwrite()</td><td className="border border-gray-300 p-2">Writes to a file</td></tr>
        <tr><td className="border border-gray-300 p-2">fprintf()</td><td className="border border-gray-300 p-2">Writes formatted output to file</td></tr>
        <tr><td className="border border-gray-300 p-2">fscanf()</td><td className="border border-gray-300 p-2">Reads formatted input from file</td></tr>
        <tr><td className="border border-gray-300 p-2">fgets()</td><td className="border border-gray-300 p-2">Reads a string from file</td></tr>
        <tr><td className="border border-gray-300 p-2">fputs()</td><td className="border border-gray-300 p-2">Writes a string to file</td></tr>
        <tr><td className="border border-gray-300 p-2">fseek()</td><td className="border border-gray-300 p-2">Moves file pointer to specific location</td></tr>
        <tr><td className="border border-gray-300 p-2">ftell()</td><td className="border border-gray-300 p-2">Returns current file pointer position</td></tr>
        <tr><td className="border border-gray-300 p-2">rewind()</td><td className="border border-gray-300 p-2">Moves file pointer to beginning</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">File Modes</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Mode</th>
          <th className="border border-gray-300 p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">"r"</td><td className="border border-gray-300 p-2">Read - Opens file for reading (file must exist)</td></tr>
        <tr><td className="border border-gray-300 p-2">"w"</td><td className="border border-gray-300 p-2">Write - Creates file for writing (overwrites if exists)</td></tr>
        <tr><td className="border border-gray-300 p-2">"a"</td><td className="border border-gray-300 p-2">Append - Opens file for appending (creates if not exists)</td></tr>
        <tr><td className="border border-gray-300 p-2">"r+"</td><td className="border border-gray-300 p-2">Read/Write - Opens file for both reading and writing</td></tr>
        <tr><td className="border border-gray-300 p-2">"w+"</td><td className="border border-gray-300 p-2">Write/Read - Creates file for reading and writing</td></tr>
        <tr><td className="border border-gray-300 p-2">"a+"</td><td className="border border-gray-300 p-2">Append/Read - Opens file for reading and appending</td></tr>
        <tr><td className="border border-gray-300 p-2">"rb"</td><td className="border border-gray-300 p-2">Read binary - Opens binary file for reading</td></tr>
        <tr><td className="border border-gray-300 p-2">"wb"</td><td className="border border-gray-300 p-2">Write binary - Creates binary file for writing</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Opening and Closing Files</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    FILE *file;

    // Open file for writing
    file = fopen("example.txt", "w");

    if (file == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }

    printf("File opened successfully!\\n");

    // Always close the file
    fclose(file);

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Writing to a File</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    FILE *file = fopen("output.txt", "w");

    if (file != NULL) {
        // Using fprintf
        fprintf(file, "Hello, File!\\n");
        fprintf(file, "Number: %d\\n", 42);

        // Using fputs
        fputs("This is a line of text.\\n", file);

        // Using fputc (single character)
        fputc('A', file);

        fclose(file);
        printf("Data written successfully!\\n");
    }

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Reading from a File</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    FILE *file = fopen("output.txt", "r");
    char buffer[100];

    if (file != NULL) {
        // Read line by line using fgets
        while (fgets(buffer, sizeof(buffer), file) != NULL) {
            printf("%s", buffer);
        }

        fclose(file);
    }

    return 0;
}

// Reading with fscanf
int main() {
    FILE *file = fopen("data.txt", "r");
    char name[50];
    int age;

    if (file != NULL) {
        fscanf(file, "%s %d", name, &age);
        printf("Name: %s, Age: %d\\n", name, age);
        fclose(file);
    }

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Binary File Operations</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

struct Person {
    char name[50];
    int age;
};

int main() {
    struct Person p1 = {"John", 25};
    struct Person p2;
    FILE *file;

    // Write binary data
    file = fopen("person.bin", "wb");
    if (file != NULL) {
        fwrite(&p1, sizeof(struct Person), 1, file);
        fclose(file);
    }

    // Read binary data
    file = fopen("person.bin", "rb");
    if (file != NULL) {
        fread(&p2, sizeof(struct Person), 1, file);
        printf("Name: %s, Age: %d\\n", p2.name, p2.age);
        fclose(file);
    }

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">File Positioning</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    FILE *file = fopen("example.txt", "r");

    if (file != NULL) {
        // Get current position
        long pos = ftell(file);
        printf("Current position: %ld\\n", pos);

        // Move to position 10
        fseek(file, 10, SEEK_SET);  // From beginning

        // Move 5 bytes forward from current position
        fseek(file, 5, SEEK_CUR);   // From current

        // Move to end of file
        fseek(file, 0, SEEK_END);   // From end

        // Go back to beginning
        rewind(file);

        fclose(file);
    }

    return 0;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Error Handling</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    FILE *file = fopen("nonexistent.txt", "r");

    if (file == NULL) {
        perror("Error");  // Prints system error message
        return 1;
    }

    // Check for end of file
    if (feof(file)) {
        printf("End of file reached\\n");
    }

    // Check for errors
    if (ferror(file)) {
        printf("Error reading file\\n");
        clearerr(file);  // Clear error flag
    }

    fclose(file);
    return 0;
}`}
    </pre>
  </div>
);

export default CFiles;
