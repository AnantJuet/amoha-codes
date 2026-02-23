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
  { label: "HTML HOME", href: "html_home.asp" },
  { label: "HTML Introduction", href: "html_intro.asp" },
  { label: "HTML Editors", href: "html_editors.asp" },
  { label: "HTML Basic", href: "html_basic.asp" },
  { label: "HTML Elements", href: "html_elements.asp" },
  { label: "HTML Attributes", href: "html_attributes.asp" },
  { label: "HTML Headings", href: "html_headings.asp" },
  { label: "HTML Paragraphs", href: "html_paragraphs.asp" },
  { label: "HTML Styles", href: "html_styles.asp" },
  { label: "HTML Formatting", href: "html_formatting.asp" },
  { label: "HTML Quotations", href: "html_quotations.asp" },
  { label: "HTML Comments", href: "html_comments.asp" },
  {
    label: "HTML Colors",
    href: "html_colors.asp",
    isHeader: true,
    children: [
      { label: "Colors", href: "html_colors.asp" },
      { label: "RGB", href: "html_colors_rgb.asp" },
      { label: "HEX", href: "html_colors_hex.asp" },
      { label: "HSL", href: "html_colors_hsl.asp" },
    ]
  },
  { label: "HTML CSS", href: "html_css.asp" },
  { label: "HTML Links", href: "html_links.asp" },
  { label: "HTML Images", href: "html_images.asp" },
  { label: "HTML Favicon", href: "html_favicon.asp" },
  {
    label: "HTML Tables",
    href: "html_tables.asp",
    isHeader: true,
    children: [
      { label: "Tables", href: "html_tables.asp" },
      { label: "Table Borders", href: "html_table_borders.asp" },
      { label: "Table Sizes", href: "html_table_sizes.asp" },
      { label: "Table Headers", href: "html_table_headers.asp" },
      { label: "Padding & Spacing", href: "html_table_padding.asp" },
      { label: "Colspan & Rowspan", href: "html_table_colspan.asp" },
    ]
  },
  {
    label: "HTML Lists",
    href: "html_lists.asp",
    isHeader: true,
    children: [
      { label: "Lists", href: "html_lists.asp" },
      { label: "Unordered Lists", href: "html_lists_unordered.asp" },
      { label: "Ordered Lists", href: "html_lists_ordered.asp" },
      { label: "Description Lists", href: "html_lists_description.asp" },
    ]
  },
  { label: "HTML Block & Inline", href: "html_blocks.asp" },
  { label: "HTML Classes", href: "html_classes.asp" },
  { label: "HTML Id", href: "html_id.asp" },
  { label: "HTML Iframes", href: "html_iframes.asp" },
  {
    label: "HTML Forms",
    href: "html_forms.asp",
    isHeader: true,
    children: [
      { label: "Forms", href: "html_forms.asp" },
      { label: "Form Attributes", href: "html_form_attributes.asp" },
      { label: "Form Elements", href: "html_form_elements.asp" },
      { label: "Input Types", href: "html_form_input_types.asp" },
      { label: "Input Attributes", href: "html_form_input_attributes.asp" },
    ]
  },
  {
    label: "HTML Graphics",
    href: "html_canvas.asp",
    isHeader: true,
    children: [
      { label: "Canvas", href: "html_canvas.asp" },
      { label: "SVG", href: "html_svg.asp" },
    ]
  },
  {
    label: "HTML Media",
    href: "html_media.asp",
    isHeader: true,
    children: [
      { label: "Media", href: "html_media.asp" },
      { label: "Video", href: "html_video.asp" },
      { label: "Audio", href: "html_audio.asp" },
      { label: "YouTube", href: "html_youtube.asp" },
    ]
  },
  {
    label: "HTML APIs",
    href: "html_api_geolocation.asp",
    isHeader: true,
    children: [
      { label: "Geolocation", href: "html_api_geolocation.asp" },
      { label: "Drag/Drop", href: "html_api_dragdrop.asp" },
      { label: "Web Storage", href: "html_api_webstorage.asp" },
      { label: "Web Workers", href: "html_api_webworkers.asp" },
    ]
  },
  { label: "HTML Semantics", href: "html_semantics.asp" },
  { label: "HTML Responsive", href: "html_responsive.asp" },
  { label: "HTML Entities", href: "html_entities.asp" },
  { label: "HTML Symbols", href: "html_symbols.asp" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "html_home.asp": {
    title: "HTML Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>HTML</strong> is the standard markup language for creating Web pages. HTML stands for <strong>Hyper Text Markup Language</strong> and describes the structure of a Web page.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Basic HTML Document</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>HTML Elements and Attributes</li>
          <li>HTML Headings, Paragraphs, and Links</li>
          <li>HTML Images, Tables, and Lists</li>
          <li>HTML Forms and Input Elements</li>
          <li>HTML5 Semantic Elements</li>
          <li>HTML APIs and Multimedia</li>
        </ul>
      </>
    ),
  },
  "html_intro.asp": {
    title: "HTML Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is HTML?
        </h2>
        <p className="leading-relaxed mb-4">
          HTML stands for <strong>Hyper Text Markup Language</strong>. It is the standard markup language for creating Web pages and describes the structure of a Web page using a series of elements.
        </p>
        <p className="leading-relaxed mb-4">
          HTML elements tell the browser how to display the content. They label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
        </p>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
          A Simple HTML Document
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Explanation</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>&lt;!DOCTYPE html&gt;</code> - Declares this is an HTML5 document</li>
          <li><code>&lt;html&gt;</code> - Root element of an HTML page</li>
          <li><code>&lt;head&gt;</code> - Contains meta information about the page</li>
          <li><code>&lt;title&gt;</code> - Specifies a title for the page</li>
          <li><code>&lt;body&gt;</code> - Contains the visible page content</li>
          <li><code>&lt;h1&gt;</code> - Defines a large heading</li>
          <li><code>&lt;p&gt;</code> - Defines a paragraph</li>
        </ul>
      </>
    ),
  },
  "html_editors.asp": {
    title: "HTML Editors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Editors
        </h2>
        <p className="leading-relaxed mb-4">
          Web pages can be created and modified by using professional HTML editors. However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).
        </p>
        <h3 className="text-xl font-medium mb-3">Popular HTML Editors</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Visual Studio Code</strong> - Free, powerful, with great extensions</li>
          <li><strong>Sublime Text</strong> - Fast and lightweight</li>
          <li><strong>Atom</strong> - Hackable text editor by GitHub</li>
          <li><strong>Notepad++</strong> - Free source code editor for Windows</li>
          <li><strong>Brackets</strong> - Modern editor for web design</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Steps to Create HTML File</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Open your text editor</li>
          <li>Write or copy HTML code</li>
          <li>Save the file with a <code>.html</code> extension</li>
          <li>Open the file in a web browser</li>
        </ol>
      </>
    ),
  },
  "html_basic.asp": {
    title: "HTML Basic",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Basic Examples
        </h2>
        <p className="leading-relaxed mb-4">
          In this chapter we will show some basic HTML examples. Every HTML document must start with a document type declaration: <code>&lt;!DOCTYPE html&gt;</code>
        </p>
        <h3 className="text-xl font-medium mb-3">HTML Documents</h3>
        <p className="leading-relaxed mb-4">
          The HTML document itself begins with <code>&lt;html&gt;</code> and ends with <code>&lt;/html&gt;</code>. The visible part of the HTML document is between <code>&lt;body&gt;</code> and <code>&lt;/body&gt;</code>.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!DOCTYPE html>
<html>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">HTML Headings</h3>
        <p className="leading-relaxed mb-4">
          HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags. <code>&lt;h1&gt;</code> defines the most important heading. <code>&lt;h6&gt;</code> defines the least important heading.
        </p>
        <h3 className="text-xl font-medium mb-3">HTML Links</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<a href="https://www.example.com">This is a link</a>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">HTML Images</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<img src="image.jpg" alt="Description" width="104" height="142">`}
          </pre>
        </div>
      </>
    ),
  },
  "html_elements.asp": {
    title: "HTML Elements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Elements
        </h2>
        <p className="leading-relaxed mb-4">
          An HTML element is defined by a start tag, some content, and an end tag. The HTML element is everything from the start tag to the end tag.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<tagname>Content goes here...</tagname>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Examples of HTML Elements</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<h1>My First Heading</h1>
<p>My first paragraph.</p>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Nested HTML Elements</h3>
        <p className="leading-relaxed mb-4">
          HTML elements can be nested (elements can contain other elements). All HTML documents consist of nested HTML elements.
        </p>
        <h3 className="text-xl font-medium mb-3">Empty HTML Elements</h3>
        <p className="leading-relaxed mb-4">
          HTML elements with no content are called empty elements. The <code>&lt;br&gt;</code> tag defines a line break, and is an empty element without a closing tag.
        </p>
      </>
    ),
  },
  "html_attributes.asp": {
    title: "HTML Attributes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Attributes
        </h2>
        <p className="leading-relaxed mb-4">
          HTML attributes provide additional information about HTML elements. Attributes are always specified in the start tag and usually come in name/value pairs like: <code>name="value"</code>
        </p>
        <h3 className="text-xl font-medium mb-3">Common Attributes</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><code>href</code> - Specifies the URL for a link</li>
          <li><code>src</code> - Specifies the path to an image</li>
          <li><code>width</code> and <code>height</code> - Specify dimensions</li>
          <li><code>alt</code> - Specifies alternate text for an image</li>
          <li><code>style</code> - Adds inline CSS styles</li>
          <li><code>lang</code> - Declares the language of the document</li>
          <li><code>title</code> - Defines extra information (tooltip)</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<a href="https://www.example.com">Visit Example</a>
<img src="img.jpg" alt="Description" width="500" height="600">
<p style="color:red;">This is a red paragraph.</p>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_headings.asp": {
    title: "HTML Headings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Headings
        </h2>
        <p className="leading-relaxed mb-4">
          HTML headings are titles or subtitles that you want to display on a webpage. HTML headings are defined with the <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> tags.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Headings Are Important</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Search engines use headings to index the structure of your pages</li>
          <li>Users often skim pages by headings</li>
          <li>Use headings to show document structure</li>
          <li>Use <code>&lt;h1&gt;</code> for main headings, followed by <code>&lt;h2&gt;</code>, etc.</li>
        </ul>
      </>
    ),
  },
  "html_paragraphs.asp": {
    title: "HTML Paragraphs",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Paragraphs
        </h2>
        <p className="leading-relaxed mb-4">
          The HTML <code>&lt;p&gt;</code> element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space before and after a paragraph.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">HTML Line Breaks</h3>
        <p className="leading-relaxed mb-4">
          The HTML <code>&lt;br&gt;</code> element defines a line break. Use <code>&lt;br&gt;</code> if you want a line break without starting a new paragraph.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<p>This is<br>a paragraph<br>with line breaks.</p>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">HTML Horizontal Rules</h3>
        <p className="leading-relaxed mb-4">
          The <code>&lt;hr&gt;</code> tag defines a thematic break and is displayed as a horizontal rule.
        </p>
      </>
    ),
  },
  "html_styles.asp": {
    title: "HTML Styles",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Styles
        </h2>
        <p className="leading-relaxed mb-4">
          The HTML <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<tagname style="property:value;">`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Background Color</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<body style="background-color:powderblue;">
  <h1>This is a heading</h1>
</body>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Text Color, Font, and Size</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<h1 style="color:blue;">Blue Heading</h1>
<p style="font-family:courier;">Courier font</p>
<p style="font-size:160%;">Big Text</p>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_formatting.asp": {
    title: "HTML Formatting",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Text Formatting
        </h2>
        <p className="leading-relaxed mb-4">
          HTML contains several elements for defining text with special meaning.
        </p>
        <h3 className="text-xl font-medium mb-3">Formatting Elements</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><code>&lt;b&gt;</code> - Bold text</li>
          <li><code>&lt;strong&gt;</code> - Important text</li>
          <li><code>&lt;i&gt;</code> - Italic text</li>
          <li><code>&lt;em&gt;</code> - Emphasized text</li>
          <li><code>&lt;mark&gt;</code> - Marked/highlighted text</li>
          <li><code>&lt;small&gt;</code> - Smaller text</li>
          <li><code>&lt;del&gt;</code> - Deleted text</li>
          <li><code>&lt;ins&gt;</code> - Inserted text</li>
          <li><code>&lt;sub&gt;</code> - Subscript text</li>
          <li><code>&lt;sup&gt;</code> - Superscript text</li>
        </ul>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<b>Bold text</b>
<strong>Important text</strong>
<i>Italic text</i>
<em>Emphasized text</em>
<mark>Highlighted text</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_quotations.asp": {
    title: "HTML Quotations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Quotation Elements
        </h2>
        <h3 className="text-xl font-medium mb-3">Blockquote</h3>
        <p className="leading-relaxed mb-4">
          The <code>&lt;blockquote&gt;</code> element defines a section quoted from another source. Browsers usually indent blockquote elements.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<blockquote cite="http://www.example.com">
  This is a quoted section from another source.
</blockquote>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Short Quotations</h3>
        <p className="leading-relaxed mb-4">
          The <code>&lt;q&gt;</code> element defines a short inline quotation. Browsers normally insert quotation marks around the element.
        </p>
        <h3 className="text-xl font-medium mb-3">Abbreviations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_comments.asp": {
    title: "HTML Comments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Comments
        </h2>
        <p className="leading-relaxed mb-4">
          HTML comments are not displayed in the browser, but they can help document your HTML source code.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!-- This is a comment -->
<p>This is a paragraph.</p>
<!-- Remember to add more content here -->`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Uses of Comments</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Add notes and reminders in your code</li>
          <li>Hide content temporarily</li>
          <li>Debug by commenting out code</li>
          <li>Document your HTML for other developers</li>
        </ul>
      </>
    ),
  },
  "html_colors.asp": {
    title: "HTML Colors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Colors
        </h2>
        <p className="leading-relaxed mb-4">
          HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.
        </p>
        <h3 className="text-xl font-medium mb-3">Color Names</h3>
        <p className="leading-relaxed mb-4">
          HTML supports 140 standard color names like Red, Green, Blue, Yellow, Cyan, Magenta, etc.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<h1 style="background-color:Tomato;">Tomato</h1>
<h1 style="background-color:Orange;">Orange</h1>
<h1 style="background-color:DodgerBlue;">DodgerBlue</h1>
<h1 style="background-color:MediumSeaGreen;">MediumSeaGreen</h1>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Background Color</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<p style="background-color:Tomato;">
  Lorem ipsum dolor sit amet.
</p>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_colors_rgb.asp": {
    title: "HTML RGB Colors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML RGB and RGBA Colors
        </h2>
        <p className="leading-relaxed mb-4">
          An RGB color value represents RED, GREEN, and BLUE light sources. Each parameter defines the intensity of the color between 0 and 255.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`rgb(red, green, blue)

rgb(255, 0, 0)   /* Red */
rgb(0, 255, 0)   /* Green */
rgb(0, 0, 255)   /* Blue */
rgb(255, 255, 0) /* Yellow */`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">RGBA Colors</h3>
        <p className="leading-relaxed mb-4">
          RGBA adds an Alpha channel for transparency. The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all).
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`rgba(255, 99, 71, 0.5)  /* 50% transparent */
rgba(255, 99, 71, 1)    /* Not transparent */`}
          </pre>
        </div>
      </>
    ),
  },
  "html_colors_hex.asp": {
    title: "HTML HEX Colors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML HEX Colors
        </h2>
        <p className="leading-relaxed mb-4">
          A hexadecimal color is specified with: #RRGGBB, where RR (red), GG (green), and BB (blue) are hexadecimal values between 00 and ff.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#ff0000  /* Red */
#00ff00  /* Green */
#0000ff  /* Blue */
#ffff00  /* Yellow */
#000000  /* Black */
#ffffff  /* White */`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">3 Digit HEX Value</h3>
        <p className="leading-relaxed mb-4">
          Sometimes you will see a 3-digit hex code. This is a shorthand for the 6-digit notation when both digits are the same.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#f00  /* Same as #ff0000 */
#0f0  /* Same as #00ff00 */
#00f  /* Same as #0000ff */`}
          </pre>
        </div>
      </>
    ),
  },
  "html_colors_hsl.asp": {
    title: "HTML HSL Colors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML HSL and HSLA Colors
        </h2>
        <p className="leading-relaxed mb-4">
          HSL stands for Hue, Saturation, and Lightness. Hue is a degree on the color wheel (0-360). Saturation is a percentage (0% = gray, 100% = full color). Lightness is also a percentage (0% = black, 100% = white).
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`hsl(hue, saturation, lightness)

hsl(0, 100%, 50%)   /* Red */
hsl(120, 100%, 50%) /* Green */
hsl(240, 100%, 50%) /* Blue */`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">HSLA Colors</h3>
        <p className="leading-relaxed mb-4">
          HSLA adds an Alpha channel for transparency.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`hsla(0, 100%, 50%, 0.5) /* 50% transparent red */`}
          </pre>
        </div>
      </>
    ),
  },
  "html_css.asp": {
    title: "HTML CSS",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML CSS
        </h2>
        <p className="leading-relaxed mb-4">
          CSS stands for Cascading Style Sheets. CSS saves a lot of work by controlling the layout of multiple web pages all at once.
        </p>
        <h3 className="text-xl font-medium mb-3">Ways to Add CSS</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Inline</strong> - using the style attribute in HTML elements</li>
          <li><strong>Internal</strong> - using a &lt;style&gt; element in the &lt;head&gt; section</li>
          <li><strong>External</strong> - using an external CSS file</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Internal CSS</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<head>
  <style>
    body {background-color: powderblue;}
    h1 {color: blue;}
    p {color: red;}
  </style>
</head>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">External CSS</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_links.asp": {
    title: "HTML Links",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Links
        </h2>
        <p className="leading-relaxed mb-4">
          Links are found in nearly all web pages. Links allow users to click their way from page to page. HTML links are hyperlinks.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<a href="url">link text</a>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">The target Attribute</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><code>_self</code> - Opens in the same window (default)</li>
          <li><code>_blank</code> - Opens in a new window or tab</li>
          <li><code>_parent</code> - Opens in the parent frame</li>
          <li><code>_top</code> - Opens in the full body of the window</li>
        </ul>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<a href="https://www.example.com" target="_blank">Visit Example!</a>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_images.asp": {
    title: "HTML Images",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Images
        </h2>
        <p className="leading-relaxed mb-4">
          Images can improve the design and appearance of a web page. The HTML <code>&lt;img&gt;</code> tag is used to embed an image in a web page.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<img src="url" alt="alternatetext">`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Required Attributes</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><code>src</code> - Specifies the path to the image</li>
          <li><code>alt</code> - Specifies alternate text for the image</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Image Size</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<img src="img.jpg" alt="Description" width="500" height="600">
<img src="img.jpg" alt="Description" style="width:500px;height:600px;">`}
          </pre>
        </div>
      </>
    ),
  },
  "html_favicon.asp": {
    title: "HTML Favicon",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Favicon
        </h2>
        <p className="leading-relaxed mb-4">
          A favicon is a small image displayed next to the page title in the browser tab. It is also known as a "favorite icon".
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>
  <!-- Content -->
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Favicon File Formats</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>.ico</code> - Traditional favicon format</li>
          <li><code>.png</code> - PNG format (modern browsers)</li>
          <li><code>.gif</code> - GIF format</li>
          <li><code>.svg</code> - SVG format (scalable)</li>
        </ul>
      </>
    ),
  },
  "html_tables.asp": {
    title: "HTML Tables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Tables
        </h2>
        <p className="leading-relaxed mb-4">
          HTML tables allow web developers to arrange data into rows and columns.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds</td>
    <td>Maria</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro</td>
    <td>Francisco</td>
    <td>Mexico</td>
  </tr>
</table>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Table Elements</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>&lt;table&gt;</code> - Defines a table</li>
          <li><code>&lt;tr&gt;</code> - Defines a table row</li>
          <li><code>&lt;th&gt;</code> - Defines a table header cell</li>
          <li><code>&lt;td&gt;</code> - Defines a table data cell</li>
          <li><code>&lt;thead&gt;</code> - Groups header content</li>
          <li><code>&lt;tbody&gt;</code> - Groups body content</li>
          <li><code>&lt;tfoot&gt;</code> - Groups footer content</li>
        </ul>
      </>
    ),
  },
  "html_table_borders.asp": {
    title: "HTML Table Borders",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Table Borders
        </h2>
        <p className="leading-relaxed mb-4">
          HTML tables can have borders of different styles and shapes. To add a border, use the CSS border property on table, th, and td elements.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<style>
table, th, td {
  border: 1px solid black;
}
</style>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Collapsed Borders</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_table_sizes.asp": {
    title: "HTML Table Sizes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Table Sizes
        </h2>
        <p className="leading-relaxed mb-4">
          HTML tables can have different sizes for each column, row, or the entire table. Use the style attribute with width or height properties.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<table style="width:100%">
  <tr>
    <th style="width:70%">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_table_headers.asp": {
    title: "HTML Table Headers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Table Headers
        </h2>
        <p className="leading-relaxed mb-4">
          HTML tables can have headers for each column or row, or for many columns/rows. Table headers are defined with <code>&lt;th&gt;</code> elements.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Vertical Headers</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<table>
  <tr>
    <th>Name</th>
    <td>John</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>25</td>
  </tr>
</table>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_table_padding.asp": {
    title: "HTML Table Padding & Spacing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Table Padding & Spacing
        </h2>
        <p className="leading-relaxed mb-4">
          Cell padding is the space between the cell edges and the cell content. Cell spacing is the space between cells.
        </p>
        <h3 className="text-xl font-medium mb-3">Cell Padding</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<style>
th, td {
  padding: 15px;
}
</style>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Cell Spacing</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<style>
table {
  border-spacing: 30px;
}
</style>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_table_colspan.asp": {
    title: "HTML Colspan & Rowspan",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Table Colspan & Rowspan
        </h2>
        <p className="leading-relaxed mb-4">
          HTML tables can have cells that span over multiple rows and/or columns.
        </p>
        <h3 className="text-xl font-medium mb-3">Colspan</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<table>
  <tr>
    <th colspan="2">Name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
</table>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Rowspan</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<table>
  <tr>
    <th>Name</th>
    <td>John</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-5678</td>
  </tr>
</table>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_lists.asp": {
    title: "HTML Lists",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Lists
        </h2>
        <p className="leading-relaxed mb-4">
          HTML lists allow web developers to group a set of related items in lists.
        </p>
        <h3 className="text-xl font-medium mb-3">Types of Lists</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Unordered list</strong> - The list items are marked with bullets</li>
          <li><strong>Ordered list</strong> - The list items are marked with numbers or letters</li>
          <li><strong>Description list</strong> - A list of terms with descriptions</li>
        </ul>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!-- Unordered List -->
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_lists_unordered.asp": {
    title: "HTML Unordered Lists",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Unordered Lists
        </h2>
        <p className="leading-relaxed mb-4">
          An unordered list starts with the <code>&lt;ul&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">List Item Markers</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<ul style="list-style-type:disc;">
<ul style="list-style-type:circle;">
<ul style="list-style-type:square;">
<ul style="list-style-type:none;">`}
          </pre>
        </div>
      </>
    ),
  },
  "html_lists_ordered.asp": {
    title: "HTML Ordered Lists",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Ordered Lists
        </h2>
        <p className="leading-relaxed mb-4">
          An ordered list starts with the <code>&lt;ol&gt;</code> tag. Each list item starts with the <code>&lt;li&gt;</code> tag.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Type Attribute</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<ol type="1"> <!-- Numbers (default) -->
<ol type="A"> <!-- Uppercase letters -->
<ol type="a"> <!-- Lowercase letters -->
<ol type="I"> <!-- Uppercase roman numerals -->
<ol type="i"> <!-- Lowercase roman numerals -->`}
          </pre>
        </div>
      </>
    ),
  },
  "html_lists_description.asp": {
    title: "HTML Description Lists",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Description Lists
        </h2>
        <p className="leading-relaxed mb-4">
          A description list is a list of terms, with a description of each term.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Description List Tags</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>&lt;dl&gt;</code> - Defines the description list</li>
          <li><code>&lt;dt&gt;</code> - Defines the term (name)</li>
          <li><code>&lt;dd&gt;</code> - Describes each term</li>
        </ul>
      </>
    ),
  },
  "html_blocks.asp": {
    title: "HTML Block & Inline Elements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Block and Inline Elements
        </h2>
        <p className="leading-relaxed mb-4">
          Every HTML element has a default display value, depending on what type of element it is. The two most common display values are block and inline.
        </p>
        <h3 className="text-xl font-medium mb-3">Block-level Elements</h3>
        <p className="leading-relaxed mb-4">
          A block-level element always starts on a new line and takes up the full width available.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<div>, <h1>-<h6>, <p>, <form>, <header>, <footer>, <section>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Inline Elements</h3>
        <p className="leading-relaxed mb-4">
          An inline element does not start on a new line and only takes up as much width as necessary.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<span>, <a>, <img>, <strong>, <em>, <br>, <input>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_classes.asp": {
    title: "HTML Classes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Classes
        </h2>
        <p className="leading-relaxed mb-4">
          The HTML <code>class</code> attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>
</head>
<body>
  <h2 class="city">London</h2>
  <h2 class="city">Paris</h2>
  <h2 class="city">Tokyo</h2>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Multiple Classes</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<h2 class="city main">London</h2>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_id.asp": {
    title: "HTML Id",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Id Attribute
        </h2>
        <p className="leading-relaxed mb-4">
          The HTML <code>id</code> attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>
  <h1 id="myHeader">My Header</h1>
</body>
</html>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Difference Between Class and Id</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>class</strong> - Can be used by multiple elements</li>
          <li><strong>id</strong> - Must be unique within a page</li>
        </ul>
      </>
    ),
  },
  "html_iframes.asp": {
    title: "HTML Iframes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Iframes
        </h2>
        <p className="leading-relaxed mb-4">
          An HTML iframe is used to display a web page within a web page.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<iframe src="url" title="description"></iframe>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Set Height and Width</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<iframe src="demo.html" height="200" width="300" title="Demo"></iframe>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Remove Border</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<iframe src="demo.html" style="border:none;" title="Demo"></iframe>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_forms.asp": {
    title: "HTML Forms",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Forms
        </h2>
        <p className="leading-relaxed mb-4">
          An HTML form is used to collect user input. The user input is most often sent to a server for processing.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<form action="/action_page.php" method="post">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">The &lt;form&gt; Element</h3>
        <p className="leading-relaxed mb-4">
          The <code>&lt;form&gt;</code> element is a container for different types of input elements, such as text fields, checkboxes, radio buttons, submit buttons, etc.
        </p>
      </>
    ),
  },
  "html_form_attributes.asp": {
    title: "HTML Form Attributes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Form Attributes
        </h2>
        <h3 className="text-xl font-medium mb-3">The Action Attribute</h3>
        <p className="leading-relaxed mb-4">
          The <code>action</code> attribute defines the action to be performed when the form is submitted.
        </p>
        <h3 className="text-xl font-medium mb-3">The Method Attribute</h3>
        <p className="leading-relaxed mb-4">
          The <code>method</code> attribute specifies the HTTP method (GET or POST) to be used when submitting the form data.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<form action="/action_page.php" method="get">
<form action="/action_page.php" method="post">`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Other Attributes</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>target</code> - Where to display the response</li>
          <li><code>autocomplete</code> - Enable/disable autocomplete</li>
          <li><code>novalidate</code> - Disable form validation</li>
        </ul>
      </>
    ),
  },
  "html_form_elements.asp": {
    title: "HTML Form Elements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Form Elements
        </h2>
        <h3 className="text-xl font-medium mb-3">The &lt;input&gt; Element</h3>
        <p className="leading-relaxed mb-4">
          The most used form element is the <code>&lt;input&gt;</code> element. It can be displayed in several ways, depending on the type attribute.
        </p>
        <h3 className="text-xl font-medium mb-3">The &lt;select&gt; Element</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
</select>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">The &lt;textarea&gt; Element</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_form_input_types.asp": {
    title: "HTML Input Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Input Types
        </h2>
        <p className="leading-relaxed mb-4">
          HTML offers various input types for data collection.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<input type="text">      <!-- Single-line text -->
<input type="password">  <!-- Password field -->
<input type="submit">    <!-- Submit button -->
<input type="reset">     <!-- Reset button -->
<input type="radio">     <!-- Radio button -->
<input type="checkbox">  <!-- Checkbox -->
<input type="button">    <!-- Clickable button -->
<input type="color">     <!-- Color picker -->
<input type="date">      <!-- Date picker -->
<input type="email">     <!-- Email field -->
<input type="file">      <!-- File selector -->
<input type="number">    <!-- Number field -->
<input type="range">     <!-- Slider -->
<input type="search">    <!-- Search field -->
<input type="tel">       <!-- Phone number -->
<input type="time">      <!-- Time picker -->
<input type="url">       <!-- URL field -->`}
          </pre>
        </div>
      </>
    ),
  },
  "html_form_input_attributes.asp": {
    title: "HTML Input Attributes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Input Attributes
        </h2>
        <h3 className="text-xl font-medium mb-3">Common Attributes</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><code>value</code> - Specifies an initial value</li>
          <li><code>readonly</code> - Cannot be modified</li>
          <li><code>disabled</code> - Field is disabled</li>
          <li><code>size</code> - Width of the input field</li>
          <li><code>maxlength</code> - Maximum number of characters</li>
          <li><code>min</code> and <code>max</code> - For numeric inputs</li>
          <li><code>pattern</code> - Regular expression for validation</li>
          <li><code>placeholder</code> - Hint text</li>
          <li><code>required</code> - Field must be filled out</li>
          <li><code>autofocus</code> - Auto focus on load</li>
        </ul>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<input type="text" placeholder="Enter name" required>
<input type="number" min="1" max="100">
<input type="text" pattern="[A-Za-z]{3}">`}
          </pre>
        </div>
      </>
    ),
  },
  "html_canvas.asp": {
    title: "HTML Canvas",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Canvas Graphics
        </h2>
        <p className="leading-relaxed mb-4">
          The HTML <code>&lt;canvas&gt;</code> element is used to draw graphics, on the fly, via JavaScript.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<canvas id="myCanvas" width="200" height="100"></canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);
</script>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What Can Canvas Do?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Draw rectangles, circles, lines, text</li>
          <li>Draw images</li>
          <li>Create animations</li>
          <li>Build interactive graphics and games</li>
        </ul>
      </>
    ),
  },
  "html_svg.asp": {
    title: "HTML SVG",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML SVG Graphics
        </h2>
        <p className="leading-relaxed mb-4">
          SVG stands for Scalable Vector Graphics. SVG defines vector-based graphics in XML format.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green"
    stroke-width="4" fill="yellow" />
</svg>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">SVG vs Canvas</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>SVG</strong> - Vector based, resolution independent, best for large areas</li>
          <li><strong>Canvas</strong> - Pixel based, resolution dependent, best for games and complex graphics</li>
        </ul>
      </>
    ),
  },
  "html_media.asp": {
    title: "HTML Media",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Multimedia
        </h2>
        <p className="leading-relaxed mb-4">
          Multimedia on the web is sound, music, videos, movies, and animations. Multimedia comes in many different formats.
        </p>
        <h3 className="text-xl font-medium mb-3">Common Formats</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Video</strong>: MP4, WebM, Ogg</li>
          <li><strong>Audio</strong>: MP3, WAV, Ogg</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">HTML Media Elements</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>&lt;video&gt;</code> - Embed video content</li>
          <li><code>&lt;audio&gt;</code> - Embed audio content</li>
          <li><code>&lt;source&gt;</code> - Define media resources</li>
          <li><code>&lt;track&gt;</code> - Define text tracks for media</li>
        </ul>
      </>
    ),
  },
  "html_video.asp": {
    title: "HTML Video",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Video
        </h2>
        <p className="leading-relaxed mb-4">
          The HTML <code>&lt;video&gt;</code> element is used to show a video on a web page.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Video Attributes</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>controls</code> - Display video controls</li>
          <li><code>autoplay</code> - Start playing automatically</li>
          <li><code>muted</code> - Mute the video</li>
          <li><code>loop</code> - Loop the video</li>
          <li><code>poster</code> - Image to show before video loads</li>
        </ul>
      </>
    ),
  },
  "html_audio.asp": {
    title: "HTML Audio",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Audio
        </h2>
        <p className="leading-relaxed mb-4">
          The HTML <code>&lt;audio&gt;</code> element is used to play an audio file on a web page.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Audio Attributes</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>controls</code> - Display audio controls</li>
          <li><code>autoplay</code> - Start playing automatically</li>
          <li><code>muted</code> - Mute the audio</li>
          <li><code>loop</code> - Loop the audio</li>
        </ul>
      </>
    ),
  },
  "html_youtube.asp": {
    title: "HTML YouTube",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML YouTube Videos
        </h2>
        <p className="leading-relaxed mb-4">
          The easiest way to play videos in HTML is to use YouTube. You can embed YouTube videos using an iframe.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<iframe width="420" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID">
</iframe>`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">YouTube Parameters</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><code>autoplay=1</code> - Auto-start the video</li>
          <li><code>mute=1</code> - Mute the video</li>
          <li><code>loop=1</code> - Loop the video</li>
          <li><code>controls=0</code> - Hide player controls</li>
        </ul>
      </>
    ),
  },
  "html_api_geolocation.asp": {
    title: "HTML Geolocation API",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Geolocation API
        </h2>
        <p className="leading-relaxed mb-4">
          The HTML Geolocation API is used to get the geographical position of a user. Since this can compromise privacy, the position is not available unless the user approves it.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<script>
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported.");
  }
}

function showPosition(position) {
  alert("Latitude: " + position.coords.latitude +
  " Longitude: " + position.coords.longitude);
}
</script>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_api_dragdrop.asp": {
    title: "HTML Drag and Drop API",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Drag and Drop API
        </h2>
        <p className="leading-relaxed mb-4">
          In HTML, any element can be dragged and dropped. Drag and Drop is a very common feature.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

<img id="drag1" src="img.png" draggable="true"
  ondragstart="drag(event)">

<script>
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_api_webstorage.asp": {
    title: "HTML Web Storage API",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Web Storage API
        </h2>
        <p className="leading-relaxed mb-4">
          HTML web storage provides two objects for storing data on the client: <code>localStorage</code> and <code>sessionStorage</code>.
        </p>
        <h3 className="text-xl font-medium mb-3">localStorage</h3>
        <p className="leading-relaxed mb-4">
          Stores data with no expiration date. The data will not be deleted when the browser is closed.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML =
  localStorage.getItem("lastname");`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">sessionStorage</h3>
        <p className="leading-relaxed mb-4">
          Stores data for one session (data is lost when the browser tab is closed).
        </p>
      </>
    ),
  },
  "html_api_webworkers.asp": {
    title: "HTML Web Workers API",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Web Workers API
        </h2>
        <p className="leading-relaxed mb-4">
          A web worker is a JavaScript running in the background, without affecting the performance of the page.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Check Web Worker Support
if (typeof(Worker) !== "undefined") {
  // Create a Web Worker
  var w = new Worker("demo_workers.js");

  // Receive messages from the Web Worker
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

// Terminate a Web Worker
w.terminate();`}
          </pre>
        </div>
      </>
    ),
  },
  "html_semantics.asp": {
    title: "HTML Semantic Elements",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Semantic Elements
        </h2>
        <p className="leading-relaxed mb-4">
          Semantic elements clearly describe their meaning to both the browser and the developer.
        </p>
        <h3 className="text-xl font-medium mb-3">Semantic Elements</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><code>&lt;article&gt;</code> - Independent, self-contained content</li>
          <li><code>&lt;aside&gt;</code> - Content aside from the page content</li>
          <li><code>&lt;details&gt;</code> - Additional details the user can view or hide</li>
          <li><code>&lt;figcaption&gt;</code> - Caption for a figure element</li>
          <li><code>&lt;figure&gt;</code> - Self-contained content like images</li>
          <li><code>&lt;footer&gt;</code> - Footer for a document or section</li>
          <li><code>&lt;header&gt;</code> - Header for a document or section</li>
          <li><code>&lt;main&gt;</code> - Main content of a document</li>
          <li><code>&lt;nav&gt;</code> - Navigation links</li>
          <li><code>&lt;section&gt;</code> - Section in a document</li>
          <li><code>&lt;time&gt;</code> - Date/time</li>
        </ul>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<header>
  <nav>Navigation links</nav>
</header>
<main>
  <article>
    <section>Content section</section>
  </article>
  <aside>Sidebar content</aside>
</main>
<footer>Footer content</footer>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_responsive.asp": {
    title: "HTML Responsive Design",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Responsive Web Design
        </h2>
        <p className="leading-relaxed mb-4">
          Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen sizes.
        </p>
        <h3 className="text-xl font-medium mb-3">Setting The Viewport</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Responsive Images</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<img src="img.jpg" style="max-width:100%;height:auto;">`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Media Queries</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<style>
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>`}
          </pre>
        </div>
      </>
    ),
  },
  "html_entities.asp": {
    title: "HTML Entities",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Entities
        </h2>
        <p className="leading-relaxed mb-4">
          Reserved characters in HTML must be replaced with character entities. Characters that are not present on your keyboard can also be replaced by entities.
        </p>
        <h3 className="text-xl font-medium mb-3">Common HTML Entities</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`&lt;    <!-- Less than (<) -->
&gt;    <!-- Greater than (>) -->
&amp;   <!-- Ampersand (&) -->
&quot;  <!-- Double quote (") -->
&apos;  <!-- Single quote (') -->
&nbsp;  <!-- Non-breaking space -->
&copy;  <!-- Copyright symbol -->
&reg;   <!-- Registered trademark -->`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Using Entity Numbers</h3>
        <p className="leading-relaxed mb-4">
          You can also use entity numbers: <code>&amp;#60;</code> is the same as <code>&amp;lt;</code>
        </p>
      </>
    ),
  },
  "html_symbols.asp": {
    title: "HTML Symbols",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HTML Symbols
        </h2>
        <p className="leading-relaxed mb-4">
          HTML symbols that are not present on your keyboard can be added using entity names, entity numbers, or hexadecimal values.
        </p>
        <h3 className="text-xl font-medium mb-3">Mathematical Symbols</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`&forall;  <!-- For all -->
&part;    <!-- Partial differential -->
&exist;   <!-- Exists -->
&empty;   <!-- Empty set -->
&sum;     <!-- Sum -->
&prod;    <!-- Product -->
&minus;   <!-- Minus -->
&radic;   <!-- Square root -->`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Currency Symbols</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`&cent;    <!-- Cent -->
&pound;   <!-- Pound -->
&yen;     <!-- Yen -->
&euro;    <!-- Euro -->`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Arrow Symbols</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`&larr;    <!-- Left arrow -->
&uarr;    <!-- Up arrow -->
&rarr;    <!-- Right arrow -->
&darr;    <!-- Down arrow -->`}
          </pre>
        </div>
      </>
    ),
  },
};
