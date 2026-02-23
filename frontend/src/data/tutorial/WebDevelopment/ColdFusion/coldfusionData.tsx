import React from "react";

// Interfaces for the tutorial structure
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

// Main structure of the sidebar navigation for ColdFusion
export const tutorialData: SidebarItem[] = [
  { label: "ColdFusion Home", href: "cf_home" },
  { label: "ColdFusion Intro", href: "cf_intro" },
  { label: "ColdFusion Setup", href: "cf_setup" },
  {
    label: "CFML Basics",
    href: "cf_cfml_basics",
    isHeader: true,
    children: [
      { label: "CFML Overview", href: "cf_cfml_basics" },
      { label: "Page Structure", href: "cf_page_structure" },
      { label: "Script vs Tag", href: "cf_script_vs_tag" },
    ]
  },
  {
    label: "CFML Tags",
    href: "cf_tags",
    isHeader: true,
    children: [
      { label: "Common Tags", href: "cf_tags" },
      { label: "Output Tags", href: "cf_output_tags" },
      { label: "Logic Tags", href: "cf_logic_tags" },
      { label: "Query Tags", href: "cf_query_tags" },
    ]
  },
  {
    label: "Variables",
    href: "cf_variables",
    isHeader: true,
    children: [
      { label: "Variable Basics", href: "cf_variables" },
      { label: "Variable Scopes", href: "cf_scopes" },
      { label: "Variable Types", href: "cf_var_types" },
    ]
  },
  {
    label: "Data Types",
    href: "cf_data_types",
    isHeader: true,
    children: [
      { label: "Data Types Overview", href: "cf_data_types" },
      { label: "Strings", href: "cf_strings" },
      { label: "Numbers", href: "cf_numbers" },
      { label: "Arrays", href: "cf_arrays" },
      { label: "Structures", href: "cf_structures" },
    ]
  },
  {
    label: "Control Structures",
    href: "cf_control_structures",
    isHeader: true,
    children: [
      { label: "If/Else", href: "cf_control_structures" },
      { label: "Switch", href: "cf_switch" },
      { label: "Loops", href: "cf_loops" },
      { label: "Try/Catch", href: "cf_try_catch" },
    ]
  },
  {
    label: "Functions",
    href: "cf_functions",
    isHeader: true,
    children: [
      { label: "Function Basics", href: "cf_functions" },
      { label: "Built-in Functions", href: "cf_builtin_functions" },
      { label: "User Functions", href: "cf_user_functions" },
      { label: "Closures", href: "cf_closures" },
    ]
  },
  {
    label: "Components",
    href: "cf_components",
    isHeader: true,
    children: [
      { label: "CFC Basics", href: "cf_components" },
      { label: "Properties", href: "cf_properties" },
      { label: "Methods", href: "cf_methods" },
      { label: "Inheritance", href: "cf_inheritance" },
    ]
  },
  {
    label: "Database",
    href: "cf_database",
    isHeader: true,
    children: [
      { label: "Database Setup", href: "cf_database" },
      { label: "cfquery", href: "cf_cfquery" },
      { label: "Query of Queries", href: "cf_qoq" },
      { label: "Stored Procedures", href: "cf_stored_procs" },
    ]
  },
  {
    label: "Forms",
    href: "cf_forms",
    isHeader: true,
    children: [
      { label: "Form Basics", href: "cf_forms" },
      { label: "Form Validation", href: "cf_form_validation" },
      { label: "File Uploads", href: "cf_file_uploads" },
    ]
  },
  {
    label: "File Operations",
    href: "cf_file_operations",
    isHeader: true,
    children: [
      { label: "File Handling", href: "cf_file_operations" },
      { label: "Directory Operations", href: "cf_directory" },
      { label: "File I/O", href: "cf_file_io" },
    ]
  },
  {
    label: "Security",
    href: "cf_security",
    isHeader: true,
    children: [
      { label: "Security Overview", href: "cf_security" },
      { label: "SQL Injection", href: "cf_sql_injection" },
      { label: "XSS Prevention", href: "cf_xss" },
      { label: "Authentication", href: "cf_authentication" },
    ]
  },
];

// Content for each tutorial page
export const tutorialContent: Record<string, TopicContent> = {
  "cf_home": {
    title: "ColdFusion Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ColdFusion Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>ColdFusion</strong> is a rapid web application development platform created by Allaire and now owned by Adobe.
        </p>
        <p className="leading-relaxed mb-4">
          ColdFusion uses its own markup language called CFML (ColdFusion Markup Language) which makes it easy to connect web pages to databases.
        </p>

        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>CFML syntax and tag-based programming</li>
          <li>Working with variables and data types</li>
          <li>Database connectivity and queries</li>
          <li>Building dynamic web forms</li>
          <li>ColdFusion Components (CFCs)</li>
          <li>Security best practices</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- hello.cfm --->
<cfoutput>
    <h1>Hello, World!</h1>
    <p>Welcome to ColdFusion!</p>
    <p>The current time is: #TimeFormat(Now(), "hh:mm:ss tt")#</p>
</cfoutput>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_intro": {
    title: "ColdFusion Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is ColdFusion?
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion is a commercial rapid web-application development computing platform that makes it easy to build web applications with minimal code.
        </p>
        <p className="leading-relaxed mb-4">
          Originally created by Allaire in 1995, ColdFusion is now developed by Adobe Systems.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Tag-based language:</strong> Easy to learn for HTML developers</li>
          <li><strong>Database integration:</strong> Built-in database connectivity</li>
          <li><strong>Rapid development:</strong> Less code for complex tasks</li>
          <li><strong>CFScript:</strong> JavaScript-like scripting syntax</li>
          <li><strong>ColdFusion Components:</strong> Object-oriented programming</li>
          <li><strong>Built-in services:</strong> PDF, email, charts, and more</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">ColdFusion vs Other Languages</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <th className="text-left p-2">Feature</th>
                <th className="text-left p-2">ColdFusion</th>
                <th className="text-left p-2">PHP</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">Syntax</td>
                <td className="p-2">Tag-based / Script</td>
                <td className="p-2">Script-based</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">Database</td>
                <td className="p-2">Built-in admin</td>
                <td className="p-2">Manual config</td>
              </tr>
              <tr>
                <td className="p-2">PDF Generation</td>
                <td className="p-2">Built-in</td>
                <td className="p-2">Library needed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "cf_setup": {
    title: "ColdFusion Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up ColdFusion
        </h2>
        <p className="leading-relaxed mb-4">
          There are several options for running ColdFusion applications, including Adobe ColdFusion and the open-source Lucee.
        </p>

        <h3 className="text-xl font-medium mb-3">Option 1: Adobe ColdFusion</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Download from Adobe website</li>
          <li>Available as Standard, Enterprise, or Developer editions</li>
          <li>Developer edition is free for development</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Option 2: Lucee (Open Source)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using CommandBox (recommended)
# Install CommandBox first from www.ortussolutions.com/products/commandbox

# Start a new Lucee server
box server start cfengine=lucee

# Or start Adobe ColdFusion
box server start cfengine=adobe@2023`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Option 3: Docker</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Run Lucee in Docker
docker run -d -p 8888:8888 lucee/lucee:latest

# Run Adobe ColdFusion
docker run -d -p 8500:8500 adobecoldfusion/coldfusion`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Verify Installation</h3>
        <p className="leading-relaxed mb-4">
          Create a file named <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">test.cfm</code> in your webroot:
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfoutput>
    ColdFusion is working!<br>
    Version: #Server.ColdFusion.ProductVersion#
</cfoutput>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_cfml_basics": {
    title: "CFML Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CFML Basics
        </h2>
        <p className="leading-relaxed mb-4">
          CFML (ColdFusion Markup Language) is the primary language used in ColdFusion. It can be written in tag format or script format.
        </p>

        <h3 className="text-xl font-medium mb-3">Tag Syntax</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- This is a CFML comment --->

<!--- Setting a variable --->
<cfset myName = "John">

<!--- Output --->
<cfoutput>Hello, #myName#!</cfoutput>

<!--- Conditional --->
<cfif myName EQ "John">
    <cfoutput>Welcome, John!</cfoutput>
<cfelse>
    <cfoutput>Hello, Stranger!</cfoutput>
</cfif>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">CFScript Syntax</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // This is a script comment
    myName = "John";

    if (myName == "John") {
        writeOutput("Welcome, John!");
    } else {
        writeOutput("Hello, Stranger!");
    }
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_page_structure": {
    title: "Page Structure",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ColdFusion Page Structure
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion pages use the .cfm extension and can contain both HTML and CFML code.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Page Structure</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Application logic at top --->
<cfset pageTitle = "My Website">
<cfset currentUser = session.user ?: "Guest">

<!DOCTYPE html>
<html>
<head>
    <title><cfoutput>#pageTitle#</cfoutput></title>
</head>
<body>
    <cfoutput>
        <header>
            <h1>#pageTitle#</h1>
            <p>Welcome, #currentUser#!</p>
        </header>

        <main>
            <cfinclude template="includes/content.cfm">
        </main>

        <footer>
            <p>&copy; #Year(Now())# My Company</p>
        </footer>
    </cfoutput>
</body>
</html>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Application.cfc</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Application.cfc - Application settings
component {
    this.name = "MyApplication";
    this.applicationTimeout = CreateTimeSpan(0, 2, 0, 0);
    this.sessionManagement = true;
    this.sessionTimeout = CreateTimeSpan(0, 0, 30, 0);

    function onApplicationStart() {
        application.dsn = "myDatabase";
        return true;
    }

    function onSessionStart() {
        session.isLoggedIn = false;
    }

    function onRequestStart(string targetPage) {
        // Run before every request
        return true;
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_script_vs_tag": {
    title: "Script vs Tag",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CFScript vs Tag Syntax
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion supports two syntaxes: traditional tag-based CFML and script-based CFScript.
        </p>

        <h3 className="text-xl font-medium mb-3">Tag Syntax Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfset users = []>

<cfloop from="1" to="5" index="i">
    <cfset ArrayAppend(users, {id: i, name: "User #i#"})>
</cfloop>

<cfloop array="#users#" item="user">
    <cfoutput>
        <p>#user.id#: #user.name#</p>
    </cfoutput>
</cfloop>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">CFScript Equivalent</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    users = [];

    for (i = 1; i <= 5; i++) {
        users.append({id: i, name: "User #i#"});
    }

    for (user in users) {
        writeOutput("<p>#user.id#: #user.name#</p>");
    }
</cfscript>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">When to Use Which</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Tags:</strong> Better for output-heavy pages with HTML</li>
          <li><strong>Script:</strong> Better for logic-heavy code and CFCs</li>
          <li>Both can be mixed in the same file</li>
          <li>Modern ColdFusion favors script syntax</li>
        </ul>
      </>
    ),
  },
  "cf_tags": {
    title: "CFML Tags",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Common CFML Tags
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides hundreds of built-in tags for various tasks. Here are the most commonly used ones.
        </p>

        <h3 className="text-xl font-medium mb-3">Essential Tags</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- cfset - Set variables --->
<cfset myVar = "Hello">
<cfset myArray = [1, 2, 3]>
<cfset myStruct = {name: "John", age: 30}>

<!--- cfoutput - Output variables --->
<cfoutput>#myVar#</cfoutput>

<!--- cfif/cfelseif/cfelse - Conditionals --->
<cfif condition>
    ...
<cfelseif otherCondition>
    ...
<cfelse>
    ...
</cfif>

<!--- cfloop - Loops --->
<cfloop from="1" to="10" index="i">
    <cfoutput>#i#</cfoutput>
</cfloop>

<!--- cfquery - Database queries --->
<cfquery name="getUsers" datasource="myDS">
    SELECT * FROM users
</cfquery>

<!--- cfinclude - Include files --->
<cfinclude template="header.cfm">`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_output_tags": {
    title: "Output Tags",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Output Tags
        </h2>
        <p className="leading-relaxed mb-4">
          Output tags are used to display dynamic content in ColdFusion pages.
        </p>

        <h3 className="text-xl font-medium mb-3">cfoutput</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfset name = "John">
<cfset price = 29.99>

<!--- Basic output --->
<cfoutput>Hello, #name#!</cfoutput>

<!--- Formatted output --->
<cfoutput>
    Price: #DollarFormat(price)#
    Date: #DateFormat(Now(), "mm/dd/yyyy")#
    Time: #TimeFormat(Now(), "hh:mm:ss tt")#
</cfoutput>

<!--- Output with query --->
<cfoutput query="getUsers">
    #currentRow#. #firstName# #lastName#<br>
</cfoutput>

<!--- Group output --->
<cfoutput query="products" group="category">
    <h3>#category#</h3>
    <cfoutput>
        - #productName#<br>
    </cfoutput>
</cfoutput>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">cfdump</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Debugging tool - displays variable contents --->
<cfset myData = {
    name: "John",
    items: [1, 2, 3],
    nested: {a: 1, b: 2}
}>

<cfdump var="#myData#">
<cfdump var="#myData#" label="My Data" expand="false">`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_logic_tags": {
    title: "Logic Tags",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logic Tags
        </h2>
        <p className="leading-relaxed mb-4">
          Logic tags control the flow of your ColdFusion application.
        </p>

        <h3 className="text-xl font-medium mb-3">Conditional Tags</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- cfif/cfelseif/cfelse --->
<cfif age LT 18>
    Minor
<cfelseif age LT 65>
    Adult
<cfelse>
    Senior
</cfif>

<!--- cfswitch/cfcase --->
<cfswitch expression="#dayOfWeek#">
    <cfcase value="1,7">
        Weekend
    </cfcase>
    <cfcase value="2,3,4,5,6">
        Weekday
    </cfcase>
    <cfdefaultcase>
        Unknown
    </cfdefaultcase>
</cfswitch>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Comparison Operators</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`EQ  or ==   Equal
NEQ or !=   Not Equal
LT  or <    Less Than
LTE or <=   Less Than or Equal
GT  or >    Greater Than
GTE or >=   Greater Than or Equal
AND or &&   Logical AND
OR  or ||   Logical OR
NOT or !    Logical NOT
CONTAINS    String contains
DOES NOT CONTAIN`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_query_tags": {
    title: "Query Tags",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Query Tags
        </h2>
        <p className="leading-relaxed mb-4">
          Query tags are used for database operations in ColdFusion.
        </p>

        <h3 className="text-xl font-medium mb-3">cfquery</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Select query --->
<cfquery name="getUsers" datasource="myDS">
    SELECT id, firstName, lastName, email
    FROM users
    WHERE active = 1
    ORDER BY lastName
</cfquery>

<!--- With parameters (prevents SQL injection) --->
<cfquery name="getUser" datasource="myDS">
    SELECT * FROM users
    WHERE id = <cfqueryparam value="#url.id#" cfsqltype="cf_sql_integer">
</cfquery>

<!--- Insert --->
<cfquery datasource="myDS">
    INSERT INTO users (firstName, lastName, email)
    VALUES (
        <cfqueryparam value="#form.firstName#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.lastName#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.email#" cfsqltype="cf_sql_varchar">
    )
</cfquery>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_variables": {
    title: "Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variables in ColdFusion
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion is a loosely typed language where variables do not need explicit type declarations.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating Variables</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Tag syntax --->
<cfset myString = "Hello World">
<cfset myNumber = 42>
<cfset myBoolean = true>
<cfset myDate = Now()>

<!--- Script syntax --->
<cfscript>
    myString = "Hello World";
    myNumber = 42;
    myBoolean = true;
    myDate = Now();

    // Local variable in function
    var localVar = "local";
    local.anotherLocal = "also local";
</cfscript>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Checking Variables</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Check if variable exists --->
<cfif IsDefined("myVar")>
    Variable exists
</cfif>

<!--- Better: structKeyExists --->
<cfif StructKeyExists(variables, "myVar")>
    Variable exists
</cfif>

<!--- Elvis operator (null coalescing) --->
<cfset displayName = username ?: "Guest">

<!--- Safe navigation --->
<cfset city = user?.address?.city ?: "Unknown">`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_scopes": {
    title: "Variable Scopes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variable Scopes
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion has several variable scopes that determine where variables can be accessed.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Scopes</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Variables scope (page-level, default) --->
<cfset variables.myVar = "page level">

<!--- Local scope (function-level) --->
<cfset var localVar = "function level">
<cfset local.anotherLocal = "also function level">

<!--- Form scope (form submissions) --->
<cfoutput>#form.username#</cfoutput>

<!--- URL scope (query string) --->
<cfoutput>#url.id#</cfoutput>

<!--- Session scope (user session) --->
<cfset session.userId = 123>
<cfset session.isLoggedIn = true>

<!--- Application scope (shared across all users) --->
<cfset application.siteName = "My Site">
<cfset application.dsn = "myDatabase">

<!--- Request scope (current request) --->
<cfset request.startTime = Now()>

<!--- CGI scope (server/client info) --->
<cfoutput>#cgi.REMOTE_ADDR#</cfoutput>
<cfoutput>#cgi.HTTP_USER_AGENT#</cfoutput>

<!--- Server scope (server-wide) --->
<cfoutput>#server.os.name#</cfoutput>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Scope Priority</h3>
        <p className="leading-relaxed mb-4">
          When accessing an unscoped variable, ColdFusion searches scopes in this order:
        </p>
        <ol className="list-decimal list-inside space-y-2 ml-4 mb-8">
          <li>Local (function)</li>
          <li>Arguments</li>
          <li>Thread local</li>
          <li>Query</li>
          <li>Variables</li>
          <li>CGI</li>
          <li>URL</li>
          <li>Form</li>
          <li>Cookie</li>
          <li>Client</li>
        </ol>
      </>
    ),
  },
  "cf_var_types": {
    title: "Variable Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variable Types
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion supports various data types and provides functions to check and convert between them.
        </p>

        <h3 className="text-xl font-medium mb-3">Type Checking Functions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`IsSimpleValue(value)     // String, number, boolean
IsNumeric(value)         // Number
IsBoolean(value)         // Boolean
IsDate(value)            // Date/time
IsArray(value)           // Array
IsStruct(value)          // Structure
IsQuery(value)           // Query object
IsNull(value)            // Null check
IsValid("email", value)  // Validate format`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Type Conversion</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// String to number
<cfset num = Val("123.45")>

// Number to string
<cfset str = ToString(123)>

// Parse JSON
<cfset data = DeserializeJSON(jsonString)>

// To JSON
<cfset json = SerializeJSON(myStruct)>

// Parse date
<cfset date = ParseDateTime("2024-01-15")>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_data_types": {
    title: "Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ColdFusion Data Types
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion supports several core data types for storing and manipulating data.
        </p>

        <h3 className="text-xl font-medium mb-3">Core Data Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>String:</strong> Text values</li>
          <li><strong>Numeric:</strong> Integer and decimal numbers</li>
          <li><strong>Boolean:</strong> true/false values</li>
          <li><strong>Date/Time:</strong> Date and time values</li>
          <li><strong>Array:</strong> Ordered collection of values</li>
          <li><strong>Structure:</strong> Key-value pairs (like objects)</li>
          <li><strong>Query:</strong> Database result set</li>
          <li><strong>Binary:</strong> Raw binary data</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // String
    myString = "Hello World";

    // Numeric
    myInteger = 42;
    myFloat = 3.14159;

    // Boolean
    myBoolean = true;

    // Date/Time
    myDate = Now();
    mySpecificDate = CreateDate(2024, 1, 15);

    // Array
    myArray = [1, 2, 3, "four", true];

    // Structure
    myStruct = {
        name: "John",
        age: 30,
        active: true
    };
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_strings": {
    title: "Strings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Strings
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides extensive string manipulation functions.
        </p>

        <h3 className="text-xl font-medium mb-3">String Operations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    str = "Hello, World!";

    // Length
    len = Len(str);                     // 13

    // Case
    upper = UCase(str);                 // HELLO, WORLD!
    lower = LCase(str);                 // hello, world!

    // Substrings
    left = Left(str, 5);                // Hello
    right = Right(str, 6);              // World!
    mid = Mid(str, 8, 5);               // World

    // Find
    pos = Find("World", str);           // 8
    posNoCase = FindNoCase("world", str); // 8

    // Replace
    replaced = Replace(str, "World", "ColdFusion");
    replacedAll = ReplaceNoCase(str, "o", "0", "all");

    // Trim
    trimmed = Trim("  spaces  ");       // "spaces"

    // Split and join
    parts = ListToArray("a,b,c", ",");  // ["a","b","c"]
    joined = ArrayToList(parts, "-");   // "a-b-c"

    // Concatenation
    full = str & " How are you?";
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_numbers": {
    title: "Numbers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Numbers
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides various functions for mathematical operations and number formatting.
        </p>

        <h3 className="text-xl font-medium mb-3">Math Operations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // Basic math
    sum = 10 + 5;           // 15
    diff = 10 - 5;          // 5
    product = 10 * 5;       // 50
    quotient = 10 / 5;      // 2
    remainder = 10 MOD 3;   // 1
    power = 10 ^ 2;         // 100

    // Math functions
    abs = Abs(-10);         // 10
    ceiling = Ceiling(4.3); // 5
    floor = Floor(4.7);     // 4
    round = Round(4.5);     // 5
    sqrt = Sqr(16);         // 4
    rand = Rand();          // 0-1 random
    randRange = RandRange(1, 100);

    // Formatting
    formatted = NumberFormat(1234.5, "9,999.99");     // 1,234.50
    dollar = DollarFormat(1234.50);                   // $1,234.50
    decimal = DecimalFormat(1234.5);                  // 1,234.50
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_arrays": {
    title: "Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Arrays
        </h2>
        <p className="leading-relaxed mb-4">
          Arrays in ColdFusion are one-indexed (start at 1) ordered collections.
        </p>

        <h3 className="text-xl font-medium mb-3">Array Operations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // Create arrays
    arr = [];
    arr = ArrayNew(1);
    arr = [1, 2, 3, 4, 5];

    // Add elements
    ArrayAppend(arr, 6);        // Add to end
    arr.append(7);              // Member function
    ArrayPrepend(arr, 0);       // Add to beginning
    ArrayInsertAt(arr, 2, 1.5); // Insert at position

    // Access elements (1-indexed!)
    first = arr[1];
    last = arr[ArrayLen(arr)];

    // Remove elements
    ArrayDeleteAt(arr, 1);      // Remove at index
    ArrayClear(arr);            // Remove all

    // Find
    pos = ArrayFind(arr, 3);    // Find exact
    pos = ArrayFindNoCase(arr, "test");

    // Sort
    ArraySort(arr, "numeric", "asc");
    ArraySort(arr, "text", "desc");

    // Loop
    for (item in arr) {
        writeOutput(item);
    }

    // Higher-order functions
    doubled = arr.map(function(item) {
        return item * 2;
    });

    evens = arr.filter(function(item) {
        return item MOD 2 == 0;
    });

    sum = arr.reduce(function(acc, item) {
        return acc + item;
    }, 0);
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_structures": {
    title: "Structures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Structures
        </h2>
        <p className="leading-relaxed mb-4">
          Structures (structs) are key-value collections similar to objects in other languages.
        </p>

        <h3 className="text-xl font-medium mb-3">Structure Operations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // Create structures
    person = {};
    person = StructNew();
    person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john@example.com"
    };

    // Access values
    name = person.firstName;         // Dot notation
    name = person["firstName"];      // Bracket notation

    // Add/Update values
    person.phone = "555-1234";
    person["address"] = "123 Main St";

    // Check existence
    if (StructKeyExists(person, "email")) {
        writeOutput(person.email);
    }

    // Remove
    StructDelete(person, "phone");

    // Get keys/values
    keys = StructKeyList(person);    // Comma list
    keysArr = StructKeyArray(person); // Array

    // Loop
    for (key in person) {
        writeOutput("#key#: #person[key]#<br>");
    }

    // Merge
    extra = {country: "USA", zip: "12345"};
    StructAppend(person, extra);

    // Copy
    personCopy = Duplicate(person);

    // Count
    count = StructCount(person);

    // Clear
    StructClear(person);
</cfscript>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Ordered Structures</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Create ordered struct (maintains insertion order)
orderedPerson = [:];
orderedPerson = StructNew("ordered");
orderedPerson = [
    firstName: "John",
    lastName: "Doe"
];`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_control_structures": {
    title: "Control Structures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Control Structures
        </h2>
        <p className="leading-relaxed mb-4">
          Control structures manage the flow of program execution in ColdFusion.
        </p>

        <h3 className="text-xl font-medium mb-3">If/Else Statements</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Tag syntax --->
<cfif score GTE 90>
    <cfset grade = "A">
<cfelseif score GTE 80>
    <cfset grade = "B">
<cfelseif score GTE 70>
    <cfset grade = "C">
<cfelse>
    <cfset grade = "F">
</cfif>

<!--- Script syntax --->
<cfscript>
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Ternary operator
    status = (age >= 18) ? "adult" : "minor";
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_switch": {
    title: "Switch Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Switch Statement
        </h2>
        <p className="leading-relaxed mb-4">
          The switch statement provides multi-way branching based on a value.
        </p>

        <h3 className="text-xl font-medium mb-3">Switch Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Tag syntax --->
<cfswitch expression="#dayOfWeek#">
    <cfcase value="1">
        Sunday
    </cfcase>
    <cfcase value="2,3,4,5,6">
        Weekday
    </cfcase>
    <cfcase value="7">
        Saturday
    </cfcase>
    <cfdefaultcase>
        Invalid day
    </cfdefaultcase>
</cfswitch>

<!--- Script syntax --->
<cfscript>
    switch (fruit) {
        case "apple":
            color = "red";
            break;
        case "banana":
            color = "yellow";
            break;
        case "orange":
        case "tangerine":
            color = "orange";
            break;
        default:
            color = "unknown";
    }
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_loops": {
    title: "Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Loops in ColdFusion
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides several loop constructs for iterating over data.
        </p>

        <h3 className="text-xl font-medium mb-3">Loop Types</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Index loop --->
<cfloop from="1" to="10" index="i">
    <cfoutput>#i#</cfoutput>
</cfloop>

<!--- Array loop --->
<cfloop array="#myArray#" item="element" index="i">
    <cfoutput>#i#: #element#</cfoutput>
</cfloop>

<!--- Structure loop --->
<cfloop collection="#myStruct#" item="key">
    <cfoutput>#key#: #myStruct[key]#</cfoutput>
</cfloop>

<!--- Query loop --->
<cfloop query="getUsers">
    <cfoutput>#firstName# #lastName#</cfoutput>
</cfloop>

<!--- List loop --->
<cfloop list="a,b,c,d" item="letter">
    <cfoutput>#letter#</cfoutput>
</cfloop>

<!--- Condition loop --->
<cfloop condition="counter LT 10">
    <cfset counter++>
</cfloop>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Script Syntax Loops</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // For loop
    for (i = 1; i <= 10; i++) {
        writeOutput(i);
    }

    // For-in loop (array)
    for (item in myArray) {
        writeOutput(item);
    }

    // For-in loop (struct)
    for (key in myStruct) {
        writeOutput(myStruct[key]);
    }

    // While loop
    while (counter < 10) {
        counter++;
    }

    // Do-while loop
    do {
        counter++;
    } while (counter < 10);

    // Break and continue
    for (i = 1; i <= 10; i++) {
        if (i == 5) continue;
        if (i == 8) break;
        writeOutput(i);
    }
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_try_catch": {
    title: "Try/Catch",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Error Handling
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides try/catch blocks for handling errors gracefully.
        </p>

        <h3 className="text-xl font-medium mb-3">Try/Catch/Finally</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Tag syntax --->
<cftry>
    <cfset result = 10 / 0>
<cfcatch type="any">
    <cfoutput>
        Error: #cfcatch.message#<br>
        Detail: #cfcatch.detail#<br>
        Type: #cfcatch.type#
    </cfoutput>
</cfcatch>
<cffinally>
    <!--- Always runs --->
    <cfset cleanup()>
</cffinally>
</cftry>

<!--- Script syntax --->
<cfscript>
    try {
        result = 10 / 0;
    } catch (any e) {
        writeOutput("Error: " & e.message);
    } finally {
        cleanup();
    }

    // Catch specific types
    try {
        // database operation
    } catch (database e) {
        // handle database error
    } catch (any e) {
        // handle any other error
    }
</cfscript>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Throwing Errors</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Tag syntax --->
<cfthrow message="Something went wrong"
         type="CustomError"
         detail="Additional details here">

<!--- Script syntax --->
<cfscript>
    throw(message="Something went wrong",
          type="CustomError",
          detail="Additional details");

    // Rethrow
    try {
        riskyOperation();
    } catch (any e) {
        logError(e);
        rethrow;
    }
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_functions": {
    title: "Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Functions in ColdFusion
        </h2>
        <p className="leading-relaxed mb-4">
          Functions are reusable blocks of code that perform specific tasks.
        </p>

        <h3 className="text-xl font-medium mb-3">Defining Functions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Tag syntax --->
<cffunction name="greet" returnType="string" access="public">
    <cfargument name="name" type="string" required="true">
    <cfargument name="greeting" type="string" default="Hello">
    <cfreturn "#arguments.greeting#, #arguments.name#!">
</cffunction>

<!--- Script syntax --->
<cfscript>
    function greet(required string name, string greeting = "Hello") {
        return "#greeting#, #name#!";
    }

    // Arrow function syntax
    add = (a, b) => a + b;

    // With type hints
    numeric function calculateTotal(
        required numeric price,
        numeric taxRate = 0.08
    ) {
        return price * (1 + taxRate);
    }
</cfscript>

<!--- Calling functions --->
<cfoutput>#greet("John")#</cfoutput>
<cfoutput>#greet(name="Jane", greeting="Hi")#</cfoutput>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_builtin_functions": {
    title: "Built-in Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Built-in Functions
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides hundreds of built-in functions for common tasks.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Functions by Category</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// String functions
Len(string)               // Length
UCase(string), LCase()    // Case
Trim(), LTrim(), RTrim()  // Whitespace
Left(), Right(), Mid()    // Substrings
Find(), FindNoCase()      // Search
Replace(), ReplaceNoCase() // Replace

// Date functions
Now()                     // Current date/time
DateFormat(date, mask)    // Format date
TimeFormat(time, mask)    // Format time
DateAdd(part, num, date)  // Add to date
DateDiff(part, d1, d2)    // Difference
Year(), Month(), Day()    // Extract parts

// Math functions
Abs(), Ceiling(), Floor() // Rounding
Max(), Min()              // Comparisons
Rand(), RandRange()       // Random

// Array functions
ArrayLen(), ArrayAppend() // Size/add
ArrayFind(), ArraySort()  // Search/sort
ArraySlice(), ArrayMerge() // Manipulate

// Structure functions
StructNew(), StructKeyExists()
StructKeyList(), StructCount()
StructAppend(), StructDelete()

// List functions (comma-delimited)
ListLen(), ListFirst(), ListLast()
ListAppend(), ListPrepend()
ListFind(), ListContains()
ListSort(), ListToArray()`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_user_functions": {
    title: "User Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          User-Defined Functions
        </h2>
        <p className="leading-relaxed mb-4">
          Create your own reusable functions for custom functionality.
        </p>

        <h3 className="text-xl font-medium mb-3">Function Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // Basic function
    function formatCurrency(required numeric amount) {
        return "$" & NumberFormat(amount, ",.00");
    }

    // Function with optional parameters
    function sendEmail(
        required string to,
        required string subject,
        string from = "noreply@example.com",
        string type = "html"
    ) {
        // Email logic here
    }

    // Function returning struct
    struct function validateForm(required struct formData) {
        var result = {valid: true, errors: []};

        if (Len(formData.email) == 0) {
            result.valid = false;
            result.errors.append("Email is required");
        }

        return result;
    }

    // Function with access modifiers
    public string function publicMethod() {}
    private void function privateHelper() {}

    // Output attribute
    function displayData() output="true" {
        writeOutput("Hello World");
    }
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_closures": {
    title: "Closures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Closures
        </h2>
        <p className="leading-relaxed mb-4">
          Closures are functions that capture variables from their surrounding scope.
        </p>

        <h3 className="text-xl font-medium mb-3">Closure Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // Basic closure
    add = function(a, b) {
        return a + b;
    };

    // Arrow function syntax
    multiply = (a, b) => a * b;

    // Closure capturing outer variable
    function createCounter() {
        var count = 0;
        return function() {
            count++;
            return count;
        };
    }
    counter = createCounter();
    counter(); // 1
    counter(); // 2

    // Using closures with array methods
    numbers = [1, 2, 3, 4, 5];

    doubled = numbers.map(function(n) {
        return n * 2;
    });

    evens = numbers.filter((n) => n MOD 2 == 0);

    sum = numbers.reduce((acc, n) => acc + n, 0);

    // Passing closures as callbacks
    function process(data, callback) {
        return callback(data);
    }

    result = process(5, (x) => x * x); // 25
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_components": {
    title: "Components",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ColdFusion Components (CFCs)
        </h2>
        <p className="leading-relaxed mb-4">
          CFCs are reusable, object-oriented components that encapsulate related functionality.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating a Component</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// User.cfc
component accessors="true" {

    // Properties
    property name="id" type="numeric";
    property name="firstName" type="string";
    property name="lastName" type="string";
    property name="email" type="string";

    // Constructor
    function init(string firstName="", string lastName="") {
        variables.firstName = firstName;
        variables.lastName = lastName;
        return this;
    }

    // Methods
    public string function getFullName() {
        return variables.firstName & " " & variables.lastName;
    }

    public void function save() {
        // Save to database
    }

    private void function validate() {
        // Validation logic
    }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Using Components</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // Create instance
    user = new User("John", "Doe");

    // Or with CreateObject
    user = CreateObject("component", "User").init("John", "Doe");

    // Access properties (with accessors=true)
    user.setEmail("john@example.com");
    email = user.getEmail();

    // Call methods
    fullName = user.getFullName();
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_properties": {
    title: "Properties",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Component Properties
        </h2>
        <p className="leading-relaxed mb-4">
          Properties define the data that a component holds. With accessors enabled, getters and setters are auto-generated.
        </p>

        <h3 className="text-xl font-medium mb-3">Defining Properties</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`component accessors="true" {

    // Basic properties
    property name="id" type="numeric";
    property name="name" type="string" default="";

    // With validation
    property name="email" type="string"
             setter="true" getter="true";

    // Computed property (getter only)
    property name="age" type="numeric" setter="false";

    // Custom getter
    public numeric function getAge() {
        return DateDiff("yyyy", variables.birthDate, Now());
    }

    // Custom setter with validation
    public void function setEmail(required string email) {
        if (!IsValid("email", email)) {
            throw(message="Invalid email format");
        }
        variables.email = email;
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_methods": {
    title: "Methods",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Component Methods
        </h2>
        <p className="leading-relaxed mb-4">
          Methods are functions defined within a component that operate on its data.
        </p>

        <h3 className="text-xl font-medium mb-3">Method Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`component {

    // Public method - accessible from outside
    public struct function toJSON() {
        return {
            id: variables.id,
            name: variables.name,
            email: variables.email
        };
    }

    // Remote method - accessible via web services
    remote string function getData() returnFormat="json" {
        return SerializeJSON(this.toJSON());
    }

    // Private method - internal use only
    private void function log(required string message) {
        writeLog(message);
    }

    // Package method - accessible within same package
    package boolean function validate() {
        return Len(variables.name) > 0;
    }

    // Method chaining
    public any function setName(required string name) {
        variables.name = name;
        return this; // Return self for chaining
    }

    public any function setEmail(required string email) {
        variables.email = email;
        return this;
    }
}

// Usage with method chaining
user.setName("John").setEmail("john@example.com");`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_inheritance": {
    title: "Inheritance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Component Inheritance
        </h2>
        <p className="leading-relaxed mb-4">
          Components can extend other components to inherit their properties and methods.
        </p>

        <h3 className="text-xl font-medium mb-3">Inheritance Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// BaseEntity.cfc
component accessors="true" {
    property name="id" type="numeric";
    property name="createdAt" type="date";
    property name="updatedAt" type="date";

    function init() {
        variables.createdAt = Now();
        return this;
    }

    public void function save() {
        variables.updatedAt = Now();
        // Base save logic
    }
}

// User.cfc
component extends="BaseEntity" accessors="true" {
    property name="firstName" type="string";
    property name="lastName" type="string";
    property name="email" type="string";

    function init(string firstName="", string lastName="") {
        // Call parent constructor
        super.init();

        variables.firstName = firstName;
        variables.lastName = lastName;
        return this;
    }

    // Override parent method
    public void function save() {
        validate();
        super.save(); // Call parent method
    }

    private void function validate() {
        if (Len(variables.email) == 0) {
            throw(message="Email is required");
        }
    }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Interfaces</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// IRepository.cfc
interface {
    public any function findById(required numeric id);
    public array function findAll();
    public void function save(required any entity);
    public void function delete(required numeric id);
}

// UserRepository.cfc
component implements="IRepository" {
    public any function findById(required numeric id) {
        // Implementation
    }
    // ... implement all interface methods
}`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_database": {
    title: "Database Connectivity",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Database Connectivity
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion makes database connectivity simple with built-in datasource management and the cfquery tag.
        </p>

        <h3 className="text-xl font-medium mb-3">Configuring Datasources</h3>
        <p className="leading-relaxed mb-4">
          Datasources are configured in the ColdFusion Administrator or in Application.cfc:
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Application.cfc
component {
    this.name = "MyApp";

    this.datasources["myDB"] = {
        class: "com.mysql.cj.jdbc.Driver",
        connectionString: "jdbc:mysql://localhost:3306/mydb",
        username: "dbuser",
        password: "dbpass"
    };

    // Or for SQL Server
    this.datasources["sqlDB"] = {
        class: "com.microsoft.sqlserver.jdbc.SQLServerDriver",
        connectionString: "jdbc:sqlserver://localhost:1433;databaseName=mydb",
        username: "sa",
        password: "password"
    };
}`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_cfquery": {
    title: "cfquery",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Using cfquery
        </h2>
        <p className="leading-relaxed mb-4">
          The cfquery tag executes SQL statements against a database.
        </p>

        <h3 className="text-xl font-medium mb-3">CRUD Operations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- SELECT --->
<cfquery name="users" datasource="myDB">
    SELECT id, firstName, lastName, email
    FROM users
    WHERE active = 1
    ORDER BY lastName
</cfquery>

<cfoutput query="users">
    #id#: #firstName# #lastName#<br>
</cfoutput>
<p>Total: #users.recordCount#</p>

<!--- SELECT with parameters --->
<cfquery name="user" datasource="myDB">
    SELECT * FROM users
    WHERE id = <cfqueryparam value="#url.id#" cfsqltype="cf_sql_integer">
</cfquery>

<!--- INSERT --->
<cfquery datasource="myDB" result="insertResult">
    INSERT INTO users (firstName, lastName, email)
    VALUES (
        <cfqueryparam value="#form.firstName#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.lastName#" cfsqltype="cf_sql_varchar">,
        <cfqueryparam value="#form.email#" cfsqltype="cf_sql_varchar">
    )
</cfquery>
<p>New ID: #insertResult.generatedKey#</p>

<!--- UPDATE --->
<cfquery datasource="myDB">
    UPDATE users
    SET firstName = <cfqueryparam value="#form.firstName#" cfsqltype="cf_sql_varchar">,
        lastName = <cfqueryparam value="#form.lastName#" cfsqltype="cf_sql_varchar">
    WHERE id = <cfqueryparam value="#form.id#" cfsqltype="cf_sql_integer">
</cfquery>

<!--- DELETE --->
<cfquery datasource="myDB">
    DELETE FROM users
    WHERE id = <cfqueryparam value="#url.id#" cfsqltype="cf_sql_integer">
</cfquery>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_qoq": {
    title: "Query of Queries",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Query of Queries
        </h2>
        <p className="leading-relaxed mb-4">
          Query of Queries (QoQ) allows you to query existing query objects using SQL.
        </p>

        <h3 className="text-xl font-medium mb-3">QoQ Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Original query from database --->
<cfquery name="allProducts" datasource="myDB">
    SELECT id, name, price, category
    FROM products
</cfquery>

<!--- Filter using QoQ --->
<cfquery name="expensiveProducts" dbtype="query">
    SELECT *
    FROM allProducts
    WHERE price > 100
    ORDER BY price DESC
</cfquery>

<!--- Aggregate with QoQ --->
<cfquery name="categoryTotals" dbtype="query">
    SELECT category, SUM(price) as total, COUNT(*) as count
    FROM allProducts
    GROUP BY category
</cfquery>

<!--- Join two queries --->
<cfquery name="combined" dbtype="query">
    SELECT p.name, c.categoryName
    FROM products p, categories c
    WHERE p.categoryId = c.id
</cfquery>

<!--- In CFScript --->
<cfscript>
    filtered = QueryExecute(
        "SELECT * FROM allProducts WHERE category = :cat",
        {cat: "Electronics"},
        {dbtype: "query"}
    );
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_stored_procs": {
    title: "Stored Procedures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Stored Procedures
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion can call stored procedures in your database using cfstoredproc.
        </p>

        <h3 className="text-xl font-medium mb-3">Calling Stored Procedures</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Basic stored procedure call --->
<cfstoredproc procedure="sp_GetUsers" datasource="myDB">
    <cfprocresult name="users">
</cfstoredproc>

<!--- With input parameters --->
<cfstoredproc procedure="sp_GetUserById" datasource="myDB">
    <cfprocparam type="in" cfsqltype="cf_sql_integer" value="#userId#">
    <cfprocresult name="user">
</cfstoredproc>

<!--- With output parameters --->
<cfstoredproc procedure="sp_CreateUser" datasource="myDB">
    <cfprocparam type="in" cfsqltype="cf_sql_varchar" value="#form.name#">
    <cfprocparam type="in" cfsqltype="cf_sql_varchar" value="#form.email#">
    <cfprocparam type="out" cfsqltype="cf_sql_integer" variable="newId">
</cfstoredproc>
<cfoutput>New user ID: #newId#</cfoutput>

<!--- Script syntax --->
<cfscript>
    result = storedProc(
        procedure = "sp_GetUsers",
        datasource = "myDB"
    );

    users = result.resultSets[1];
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_forms": {
    title: "Forms",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Forms
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion makes handling form submissions simple with the form scope.
        </p>

        <h3 className="text-xl font-medium mb-3">Form Handling</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- HTML Form --->
<form action="process.cfm" method="post">
    <label>Name:</label>
    <input type="text" name="username" required>

    <label>Email:</label>
    <input type="email" name="email" required>

    <label>Message:</label>
    <textarea name="message"></textarea>

    <button type="submit">Submit</button>
</form>

<!--- process.cfm --->
<cfif StructKeyExists(form, "username")>
    <cfoutput>
        <p>Name: #HTMLEditFormat(form.username)#</p>
        <p>Email: #HTMLEditFormat(form.email)#</p>
        <p>Message: #HTMLEditFormat(form.message)#</p>
    </cfoutput>
</cfif>

<!--- Safe form access --->
<cfparam name="form.username" default="">
<cfparam name="form.email" default="">

<!--- Or using null coalescing --->
<cfset username = form.username ?: "">`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_form_validation": {
    title: "Form Validation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Form Validation
        </h2>
        <p className="leading-relaxed mb-4">
          Always validate form input on the server side to ensure data integrity and security.
        </p>

        <h3 className="text-xl font-medium mb-3">Server-Side Validation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    errors = [];

    // Required field validation
    if (Len(Trim(form.username)) == 0) {
        errors.append("Username is required");
    }

    // Email validation
    if (!IsValid("email", form.email)) {
        errors.append("Please enter a valid email");
    }

    // Length validation
    if (Len(form.password) < 8) {
        errors.append("Password must be at least 8 characters");
    }

    // Numeric validation
    if (!IsNumeric(form.age) || form.age < 18) {
        errors.append("You must be 18 or older");
    }

    // Custom regex validation
    if (!REFind("^[A-Za-z]+$", form.username)) {
        errors.append("Username can only contain letters");
    }

    // Check for errors
    if (ArrayLen(errors) > 0) {
        // Display errors
        for (error in errors) {
            writeOutput("<p class='error'>#error#</p>");
        }
    } else {
        // Process form
        processRegistration(form);
    }
</cfscript>

<!--- Built-in IsValid types --->
IsValid("creditcard", value)
IsValid("date", value)
IsValid("email", value)
IsValid("integer", value)
IsValid("numeric", value)
IsValid("ssn", value)
IsValid("telephone", value)
IsValid("url", value)
IsValid("uuid", value)
IsValid("zipcode", value)
IsValid("regex", value, pattern)`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_file_uploads": {
    title: "File Uploads",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Uploads
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides the cffile tag for handling file uploads securely.
        </p>

        <h3 className="text-xl font-medium mb-3">Upload Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Upload form --->
<form action="upload.cfm" method="post" enctype="multipart/form-data">
    <input type="file" name="uploadFile" accept=".jpg,.png,.pdf">
    <button type="submit">Upload</button>
</form>

<!--- upload.cfm --->
<cfif StructKeyExists(form, "uploadFile") AND Len(form.uploadFile)>
    <cffile action="upload"
            fileField="uploadFile"
            destination="#ExpandPath('./uploads/')#"
            nameConflict="makeUnique"
            accept="image/jpeg,image/png,application/pdf"
            result="uploadResult">

    <cfoutput>
        <p>File uploaded successfully!</p>
        <p>Original name: #uploadResult.clientFile#</p>
        <p>Saved as: #uploadResult.serverFile#</p>
        <p>Size: #NumberFormat(uploadResult.fileSize / 1024, "0.00")# KB</p>
        <p>Type: #uploadResult.contentType#/#uploadResult.contentSubType#</p>
    </cfoutput>
</cfif>

<!--- Script syntax --->
<cfscript>
    uploadResult = FileUpload(
        destination = ExpandPath("./uploads/"),
        fileField = "uploadFile",
        mimeType = "image/jpeg,image/png",
        nameConflict = "makeUnique"
    );
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_file_operations": {
    title: "File Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Operations
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides comprehensive file handling capabilities through the cffile tag.
        </p>

        <h3 className="text-xl font-medium mb-3">File Operations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- Read file --->
<cffile action="read" file="#filePath#" variable="fileContent">

<!--- Write file --->
<cffile action="write" file="#filePath#" output="#content#">

<!--- Append to file --->
<cffile action="append" file="#filePath#" output="#newContent#">

<!--- Copy file --->
<cffile action="copy" source="#sourcePath#" destination="#destPath#">

<!--- Move/Rename file --->
<cffile action="move" source="#oldPath#" destination="#newPath#">

<!--- Delete file --->
<cffile action="delete" file="#filePath#">

<!--- Get file info --->
<cfset fileInfo = GetFileInfo(filePath)>
<cfoutput>
    Size: #fileInfo.size# bytes
    Modified: #fileInfo.lastModified#
    Type: #fileInfo.type#
</cfoutput>

<!--- Script syntax --->
<cfscript>
    content = FileRead(filePath);
    FileWrite(filePath, content);
    FileCopy(source, dest);
    FileMove(source, dest);
    FileDelete(filePath);
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_directory": {
    title: "Directory Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Directory Operations
        </h2>
        <p className="leading-relaxed mb-4">
          Use cfdirectory to list, create, rename, and delete directories.
        </p>

        <h3 className="text-xl font-medium mb-3">Directory Examples</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- List directory --->
<cfdirectory action="list"
             directory="#ExpandPath('./uploads/')#"
             name="files"
             filter="*.jpg|*.png">

<cfoutput query="files">
    #name# - #size# bytes - #dateLastModified#<br>
</cfoutput>

<!--- Create directory --->
<cfdirectory action="create" directory="#newDirPath#">

<!--- Rename directory --->
<cfdirectory action="rename" directory="#oldPath#" newDirectory="#newPath#">

<!--- Delete directory --->
<cfdirectory action="delete" directory="#dirPath#" recurse="true">

<!--- Script syntax --->
<cfscript>
    // List files
    files = DirectoryList(
        path = ExpandPath("./uploads/"),
        recurse = false,
        listInfo = "query",
        filter = "*.jpg"
    );

    // Create directory
    DirectoryCreate(newPath);

    // Check if exists
    if (DirectoryExists(path)) {
        DirectoryDelete(path, true); // true = recursive
    }
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_file_io": {
    title: "File I/O",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File I/O Operations
        </h2>
        <p className="leading-relaxed mb-4">
          ColdFusion provides functions for advanced file reading and writing operations.
        </p>

        <h3 className="text-xl font-medium mb-3">Reading Files</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // Read entire file
    content = FileRead(filePath);
    content = FileRead(filePath, "utf-8");

    // Read as binary
    binaryContent = FileReadBinary(filePath);

    // Read line by line (large files)
    fileHandle = FileOpen(filePath, "read");
    try {
        while (!FileIsEOF(fileHandle)) {
            line = FileReadLine(fileHandle);
            // Process line
        }
    } finally {
        FileClose(fileHandle);
    }
</cfscript>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Writing Files</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
    // Write file (overwrites)
    FileWrite(filePath, content);
    FileWrite(filePath, content, "utf-8");

    // Append to file
    FileAppend(filePath, newContent);

    // Write line by line
    fileHandle = FileOpen(filePath, "write");
    try {
        FileWriteLine(fileHandle, "Line 1");
        FileWriteLine(fileHandle, "Line 2");
    } finally {
        FileClose(fileHandle);
    }

    // Write binary
    binaryData = BinaryDecode(base64String, "base64");
    FileWrite(filePath, binaryData);
</cfscript>`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_security": {
    title: "Security",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Security Best Practices
        </h2>
        <p className="leading-relaxed mb-4">
          Security is critical in web applications. Follow these best practices to protect your ColdFusion applications.
        </p>

        <h3 className="text-xl font-medium mb-3">Security Principles</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Never trust user input:</strong> Always validate and sanitize</li>
          <li><strong>Use parameterized queries:</strong> Prevent SQL injection</li>
          <li><strong>Encode output:</strong> Prevent XSS attacks</li>
          <li><strong>Use HTTPS:</strong> Encrypt data in transit</li>
          <li><strong>Secure sessions:</strong> Use proper session management</li>
          <li><strong>Limit access:</strong> Apply principle of least privilege</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Essential Security Functions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Encode for HTML output
#EncodeForHTML(userInput)#
#HTMLEditFormat(userInput)#

// Encode for JavaScript
#EncodeForJavaScript(userInput)#

// Encode for URLs
#EncodeForURL(userInput)#

// Encode for CSS
#EncodeForCSS(userInput)#

// Hash passwords
hashedPassword = Hash(password, "SHA-256");
hashedPassword = GenerateBCryptHash(password);

// Verify password
isValid = BCryptCheckHash(password, hashedPassword);`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_sql_injection": {
    title: "SQL Injection Prevention",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Preventing SQL Injection
        </h2>
        <p className="leading-relaxed mb-4">
          SQL injection is one of the most common web vulnerabilities. Always use cfqueryparam to prevent it.
        </p>

        <h3 className="text-xl font-medium mb-3">Vulnerable Code (Never Do This)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- VULNERABLE - Never do this! --->
<cfquery name="user" datasource="myDB">
    SELECT * FROM users
    WHERE username = '#form.username#'
    AND password = '#form.password#'
</cfquery>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Secure Code (Always Do This)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- SECURE - Always use cfqueryparam --->
<cfquery name="user" datasource="myDB">
    SELECT * FROM users
    WHERE username = <cfqueryparam value="#form.username#" cfsqltype="cf_sql_varchar">
    AND password = <cfqueryparam value="#hashedPassword#" cfsqltype="cf_sql_varchar">
</cfquery>

<!--- Common cfsqltype values --->
cf_sql_varchar       - Text strings
cf_sql_integer       - Whole numbers
cf_sql_bigint        - Large integers
cf_sql_decimal       - Decimal numbers
cf_sql_date          - Dates
cf_sql_timestamp     - Date/time
cf_sql_bit           - Boolean
cf_sql_blob          - Binary data`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_xss": {
    title: "XSS Prevention",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Cross-Site Scripting (XSS) Prevention
        </h2>
        <p className="leading-relaxed mb-4">
          XSS attacks occur when malicious scripts are injected into web pages. Always encode output to prevent XSS.
        </p>

        <h3 className="text-xl font-medium mb-3">Output Encoding</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- VULNERABLE --->
<cfoutput>#userComment#</cfoutput>

<!--- SECURE - Encode for HTML context --->
<cfoutput>#EncodeForHTML(userComment)#</cfoutput>

<!--- Different contexts require different encoding --->

<!--- In HTML attributes --->
<input value="#EncodeForHTMLAttribute(userInput)#">

<!--- In JavaScript --->
<script>
    var name = '#EncodeForJavaScript(userName)#';
</script>

<!--- In URLs --->
<a href="page.cfm?name=#EncodeForURL(userName)#">Link</a>

<!--- In CSS --->
<style>
    .user { color: #EncodeForCSS(userColor)#; }
</style>

<!--- Content Security Policy --->
<cfheader name="Content-Security-Policy"
          value="default-src 'self'; script-src 'self'">`}
          </pre>
        </div>
      </>
    ),
  },
  "cf_authentication": {
    title: "Authentication",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Authentication
        </h2>
        <p className="leading-relaxed mb-4">
          Implement secure authentication to protect user accounts.
        </p>

        <h3 className="text-xl font-medium mb-3">Secure Login Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<cfscript>
// Login function
function authenticateUser(required string email, required string password) {
    // Get user from database
    var q = QueryExecute(
        "SELECT id, email, password FROM users WHERE email = :email",
        {email: arguments.email},
        {datasource: "myDB"}
    );

    if (q.recordCount == 0) {
        return {success: false, message: "Invalid credentials"};
    }

    // Verify password (using BCrypt)
    if (BCryptCheckHash(arguments.password, q.password)) {
        // Set session variables
        session.isLoggedIn = true;
        session.userId = q.id;
        session.email = q.email;

        // Regenerate session ID to prevent fixation
        SessionRotate();

        return {success: true, userId: q.id};
    }

    return {success: false, message: "Invalid credentials"};
}

// Registration - hash password
function registerUser(required string email, required string password) {
    var hashedPassword = GenerateBCryptHash(arguments.password);

    QueryExecute(
        "INSERT INTO users (email, password) VALUES (:email, :password)",
        {email: arguments.email, password: hashedPassword},
        {datasource: "myDB"}
    );
}

// Logout
function logout() {
    StructClear(session);
    SessionInvalidate();
}
</cfscript>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Protected Page Check</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!--- In Application.cfc onRequestStart --->
function onRequestStart(string targetPage) {
    // List of pages that require login
    var protectedPages = ["dashboard.cfm", "profile.cfm", "settings.cfm"];

    // Check if page requires authentication
    if (ArrayFindNoCase(protectedPages, ListLast(arguments.targetPage, "/")) > 0) {
        if (!session.isLoggedIn ?: false) {
            location(url="login.cfm", addtoken=false);
            return false;
        }
    }

    return true;
}`}
          </pre>
        </div>
      </>
    ),
  },
};
