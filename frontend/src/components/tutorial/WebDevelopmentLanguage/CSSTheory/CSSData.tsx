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
  { label: "CSS HOME", href: "css_home.asp" },
  { label: "CSS Introduction", href: "css_intro.asp" },
  { label: "CSS Syntax", href: "css_syntax.asp" },
  { label: "CSS Selectors", href: "css_selectors.asp" },
  {
    label: "CSS How To",
    href: "css_howto.asp",
    isHeader: true,
    children: [
      { label: "Inline CSS", href: "css_inline.asp" },
      { label: "Internal CSS", href: "css_internal.asp" },
      { label: "External CSS", href: "css_external.asp" },
    ]
  },
  { label: "CSS Comments", href: "css_comments.asp" },
  {
    label: "CSS Colors",
    href: "css_colors.asp",
    isHeader: true,
    children: [
      { label: "RGB", href: "css_colors_rgb.asp" },
      { label: "HEX", href: "css_colors_hex.asp" },
      { label: "HSL", href: "css_colors_hsl.asp" },
    ]
  },
  {
    label: "CSS Backgrounds",
    href: "css_background.asp",
    isHeader: true,
    children: [
      { label: "Background Color", href: "css_background_color.asp" },
      { label: "Background Image", href: "css_background_image.asp" },
      { label: "Background Repeat", href: "css_background_repeat.asp" },
      { label: "Background Position", href: "css_background_position.asp" },
      { label: "Background Shorthand", href: "css_background_shorthand.asp" },
    ]
  },
  {
    label: "CSS Borders",
    href: "css_border.asp",
    isHeader: true,
    children: [
      { label: "Border Width", href: "css_border_width.asp" },
      { label: "Border Color", href: "css_border_color.asp" },
      { label: "Border Sides", href: "css_border_sides.asp" },
      { label: "Border Shorthand", href: "css_border_shorthand.asp" },
      { label: "Rounded Borders", href: "css_border_rounded.asp" },
    ]
  },
  { label: "CSS Margins", href: "css_margin.asp" },
  { label: "CSS Padding", href: "css_padding.asp" },
  { label: "CSS Height/Width", href: "css_dimension.asp" },
  { label: "CSS Box Model", href: "css_boxmodel.asp" },
  { label: "CSS Outline", href: "css_outline.asp" },
  {
    label: "CSS Text",
    href: "css_text.asp",
    isHeader: true,
    children: [
      { label: "Text Color", href: "css_text_color.asp" },
      { label: "Text Alignment", href: "css_text_align.asp" },
      { label: "Text Decoration", href: "css_text_decoration.asp" },
      { label: "Text Transform", href: "css_text_transform.asp" },
      { label: "Text Spacing", href: "css_text_spacing.asp" },
    ]
  },
  {
    label: "CSS Fonts",
    href: "css_font.asp",
    isHeader: true,
    children: [
      { label: "Font Family", href: "css_font_family.asp" },
      { label: "Font Style", href: "css_font_style.asp" },
      { label: "Font Size", href: "css_font_size.asp" },
      { label: "Google Fonts", href: "css_font_google.asp" },
    ]
  },
  { label: "CSS Icons", href: "css_icons.asp" },
  { label: "CSS Links", href: "css_link.asp" },
  { label: "CSS Lists", href: "css_list.asp" },
  { label: "CSS Tables", href: "css_table.asp" },
  { label: "CSS Display", href: "css_display.asp" },
  { label: "CSS Position", href: "css_position.asp" },
  { label: "CSS Z-index", href: "css_zindex.asp" },
  { label: "CSS Overflow", href: "css_overflow.asp" },
  { label: "CSS Float", href: "css_float.asp" },
  {
    label: "CSS Flexbox",
    href: "css_flexbox.asp",
    isHeader: true,
    children: [
      { label: "Flex Container", href: "css_flexbox_container.asp" },
      { label: "Flex Items", href: "css_flexbox_items.asp" },
      { label: "Flex Responsive", href: "css_flexbox_responsive.asp" },
    ]
  },
  {
    label: "CSS Grid",
    href: "css_grid.asp",
    isHeader: true,
    children: [
      { label: "Grid Container", href: "css_grid_container.asp" },
      { label: "Grid Items", href: "css_grid_items.asp" },
    ]
  },
  {
    label: "CSS Responsive",
    href: "css_responsive.asp",
    isHeader: true,
    children: [
      { label: "Viewport", href: "css_responsive_viewport.asp" },
      { label: "Media Queries", href: "css_responsive_mediaqueries.asp" },
      { label: "Images", href: "css_responsive_images.asp" },
      { label: "Videos", href: "css_responsive_videos.asp" },
    ]
  },
  {
    label: "CSS Animations",
    href: "css_animations.asp",
    isHeader: true,
    children: [
      { label: "Transitions", href: "css_transitions.asp" },
      { label: "Keyframes", href: "css_keyframes.asp" },
      { label: "Transform", href: "css_transform.asp" },
    ]
  },
  { label: "CSS Variables", href: "css_variables.asp" },
  { label: "CSS Specificity", href: "css_specificity.asp" },
  { label: "CSS !important", href: "css_important.asp" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "css_home.asp": {
    title: "CSS Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>CSS</strong> stands for Cascading Style Sheets. It is used to style and layout web pages, controlling the design, colors, fonts, and spacing of HTML elements.
        </p>
        <p className="leading-relaxed mb-4">
          CSS is one of the core technologies of the web, alongside HTML and JavaScript.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Basic CSS</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">/* CSS to style a heading */</span>
            <br />
            <span className="text-green-600 dark:text-green-400">h1</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">color</span>: blue;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">font-size</span>: 24px;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_intro.asp": {
    title: "CSS Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is CSS?
        </h2>
        <p className="leading-relaxed mb-4">
          CSS (Cascading Style Sheets) describes how HTML elements should be displayed on screen, paper, or other media.
        </p>
        <p className="leading-relaxed mb-4">
          CSS saves a lot of work by controlling the layout of multiple web pages at once. External stylesheets are stored in CSS files.
        </p>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
          Why Use CSS?
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Separates content from presentation</li>
          <li>Enables consistent styling across multiple pages</li>
          <li>Reduces code repetition</li>
          <li>Makes websites responsive and accessible</li>
          <li>Improves page load times</li>
        </ul>
      </>
    ),
  },

  "css_syntax.asp": {
    title: "CSS Syntax",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Syntax
        </h2>
        <p className="leading-relaxed mb-4">
          A CSS rule consists of a selector and a declaration block:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">selector</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">property</span>: value;
            <br />
            {"}"}
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          <strong>Selector:</strong> Points to the HTML element you want to style.
        </p>
        <p className="leading-relaxed mb-4">
          <strong>Declaration Block:</strong> Contains one or more declarations separated by semicolons.
        </p>
        <p className="leading-relaxed mb-4">
          Each declaration includes a CSS property name and a value, separated by a colon.
        </p>
      </>
    ),
  },

  "css_selectors.asp": {
    title: "CSS Selectors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Selectors
        </h2>
        <p className="leading-relaxed mb-4">
          CSS selectors are used to select HTML elements based on their name, id, class, attribute, and more.
        </p>
        <h3 className="text-xl font-medium mb-3">Element Selector</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">p</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: red; {"}"}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">ID Selector</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">#myId</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: blue; {"}"}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Class Selector</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">.myClass</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: green; {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_inline.asp": {
    title: "Inline CSS",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Inline CSS
        </h2>
        <p className="leading-relaxed mb-4">
          Inline CSS is used to apply a unique style to a single HTML element using the style attribute.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            &lt;<span className="text-green-600 dark:text-green-400">h1</span> <span className="text-purple-600 dark:text-purple-400">style</span>=<span className="text-red-600 dark:text-red-400">"color: blue;"</span>&gt;Hello&lt;/<span className="text-green-600 dark:text-green-400">h1</span>&gt;
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          <strong>Note:</strong> Inline styles lose many advantages of stylesheets and should be used sparingly.
        </p>
      </>
    ),
  },

  "css_internal.asp": {
    title: "Internal CSS",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Internal CSS
        </h2>
        <p className="leading-relaxed mb-4">
          Internal CSS is defined inside a &lt;style&gt; element in the &lt;head&gt; section of an HTML page.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            &lt;<span className="text-green-600 dark:text-green-400">style</span>&gt;
            <br />
            {"  "}body {"{"} background-color: lightblue; {"}"}
            <br />
            &lt;/<span className="text-green-600 dark:text-green-400">style</span>&gt;
          </pre>
        </div>
      </>
    ),
  },

  "css_external.asp": {
    title: "External CSS",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          External CSS
        </h2>
        <p className="leading-relaxed mb-4">
          External CSS is defined in a separate .css file and linked to the HTML document.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            &lt;<span className="text-green-600 dark:text-green-400">link</span> <span className="text-purple-600 dark:text-purple-400">rel</span>=<span className="text-red-600 dark:text-red-400">"stylesheet"</span> <span className="text-purple-600 dark:text-purple-400">href</span>=<span className="text-red-600 dark:text-red-400">"styles.css"</span>&gt;
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          External stylesheets are the most efficient way to style multiple pages with a single file.
        </p>
      </>
    ),
  },

  "css_comments.asp": {
    title: "CSS Comments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Comments
        </h2>
        <p className="leading-relaxed mb-4">
          Comments are used to explain your code and are ignored by browsers.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">/* This is a single-line comment */</span>
            <br /><br />
            <span className="text-blue-600 dark:text-blue-400">/* This is</span>
            <br />
            <span className="text-blue-600 dark:text-blue-400">a multi-line</span>
            <br />
            <span className="text-blue-600 dark:text-blue-400">comment */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_colors.asp": {
    title: "CSS Colors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Colors
        </h2>
        <p className="leading-relaxed mb-4">
          Colors in CSS can be specified using predefined color names, RGB, HEX, HSL, RGBA, or HSLA values.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">h1</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: tomato; {"}"}
            <br />
            <span className="text-green-600 dark:text-green-400">p</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: #ff6347; {"}"}
            <br />
            <span className="text-green-600 dark:text-green-400">div</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: rgb(255, 99, 71); {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_colors_rgb.asp": {
    title: "CSS RGB Colors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          RGB Colors
        </h2>
        <p className="leading-relaxed mb-4">
          RGB values specify colors using Red, Green, and Blue components (0-255).
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">color</span>: rgb(255, 0, 0);   <span className="text-blue-600 dark:text-blue-400">/* Red */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: rgb(0, 255, 0);   <span className="text-blue-600 dark:text-blue-400">/* Green */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: rgb(0, 0, 255);   <span className="text-blue-600 dark:text-blue-400">/* Blue */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: rgba(255, 0, 0, 0.5); <span className="text-blue-600 dark:text-blue-400">/* With opacity */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_colors_hex.asp": {
    title: "CSS HEX Colors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HEX Colors
        </h2>
        <p className="leading-relaxed mb-4">
          HEX colors are specified with #RRGGBB where RR, GG, BB are hexadecimal values (00 to FF).
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">color</span>: #ff0000; <span className="text-blue-600 dark:text-blue-400">/* Red */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: #00ff00; <span className="text-blue-600 dark:text-blue-400">/* Green */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: #0000ff; <span className="text-blue-600 dark:text-blue-400">/* Blue */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: #f00;    <span className="text-blue-600 dark:text-blue-400">/* Shorthand Red */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_colors_hsl.asp": {
    title: "CSS HSL Colors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          HSL Colors
        </h2>
        <p className="leading-relaxed mb-4">
          HSL stands for Hue, Saturation, and Lightness. It provides an intuitive way to select colors.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">color</span>: hsl(0, 100%, 50%);   <span className="text-blue-600 dark:text-blue-400">/* Red */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: hsl(120, 100%, 50%); <span className="text-blue-600 dark:text-blue-400">/* Green */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: hsl(240, 100%, 50%); <span className="text-blue-600 dark:text-blue-400">/* Blue */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">color</span>: hsla(0, 100%, 50%, 0.5); <span className="text-blue-600 dark:text-blue-400">/* With opacity */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_background.asp": {
    title: "CSS Backgrounds",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Backgrounds
        </h2>
        <p className="leading-relaxed mb-4">
          CSS background properties are used to define background effects for elements.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>background-color</li>
          <li>background-image</li>
          <li>background-repeat</li>
          <li>background-attachment</li>
          <li>background-position</li>
        </ul>
      </>
    ),
  },

  "css_background_color.asp": {
    title: "CSS Background Color",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Background Color
        </h2>
        <p className="leading-relaxed mb-4">
          The background-color property specifies the background color of an element.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">body</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">background-color</span>: lightblue;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_background_image.asp": {
    title: "CSS Background Image",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Background Image
        </h2>
        <p className="leading-relaxed mb-4">
          The background-image property specifies an image to use as the background.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">body</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">background-image</span>: url("bg.jpg");
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_background_repeat.asp": {
    title: "CSS Background Repeat",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Background Repeat
        </h2>
        <p className="leading-relaxed mb-4">
          The background-repeat property controls how a background image is repeated.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">background-repeat</span>: repeat;    <span className="text-blue-600 dark:text-blue-400">/* Default */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">background-repeat</span>: repeat-x;  <span className="text-blue-600 dark:text-blue-400">/* Horizontal */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">background-repeat</span>: repeat-y;  <span className="text-blue-600 dark:text-blue-400">/* Vertical */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">background-repeat</span>: no-repeat; <span className="text-blue-600 dark:text-blue-400">/* No repeat */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_background_position.asp": {
    title: "CSS Background Position",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Background Position
        </h2>
        <p className="leading-relaxed mb-4">
          The background-position property sets the starting position of a background image.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">background-position</span>: center;
            <br />
            <span className="text-purple-600 dark:text-purple-400">background-position</span>: top right;
            <br />
            <span className="text-purple-600 dark:text-purple-400">background-position</span>: 50% 50%;
          </pre>
        </div>
      </>
    ),
  },

  "css_background_shorthand.asp": {
    title: "CSS Background Shorthand",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Background Shorthand
        </h2>
        <p className="leading-relaxed mb-4">
          The background shorthand property sets all background properties in one declaration.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">body</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">background</span>: #ffffff url("img.png") no-repeat right top;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_border.asp": {
    title: "CSS Borders",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Borders
        </h2>
        <p className="leading-relaxed mb-4">
          The CSS border properties allow you to specify the style, width, and color of an element's border.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">p</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">border</span>: 2px solid black;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_border_width.asp": {
    title: "CSS Border Width",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Border Width
        </h2>
        <p className="leading-relaxed mb-4">
          The border-width property specifies the width of the four borders.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">border-width</span>: 5px;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-width</span>: thin;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-width</span>: medium;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-width</span>: thick;
          </pre>
        </div>
      </>
    ),
  },

  "css_border_color.asp": {
    title: "CSS Border Color",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Border Color
        </h2>
        <p className="leading-relaxed mb-4">
          The border-color property sets the color of the four borders.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">border-color</span>: red;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-color</span>: #ff0000;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-color</span>: rgb(255, 0, 0);
          </pre>
        </div>
      </>
    ),
  },

  "css_border_sides.asp": {
    title: "CSS Border Sides",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Border Sides
        </h2>
        <p className="leading-relaxed mb-4">
          You can specify different borders for each side of an element.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">border-top</span>: 2px solid red;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-right</span>: 2px solid green;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-bottom</span>: 2px solid blue;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-left</span>: 2px solid yellow;
          </pre>
        </div>
      </>
    ),
  },

  "css_border_shorthand.asp": {
    title: "CSS Border Shorthand",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Border Shorthand
        </h2>
        <p className="leading-relaxed mb-4">
          The border property is a shorthand for border-width, border-style, and border-color.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">border</span>: 2px solid red;
          </pre>
        </div>
      </>
    ),
  },

  "css_border_rounded.asp": {
    title: "CSS Rounded Borders",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Rounded Borders
        </h2>
        <p className="leading-relaxed mb-4">
          The border-radius property adds rounded corners to an element.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">border-radius</span>: 5px;
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-radius</span>: 50%; <span className="text-blue-600 dark:text-blue-400">/* Circle */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">border-radius</span>: 10px 20px 30px 40px;
          </pre>
        </div>
      </>
    ),
  },

  "css_margin.asp": {
    title: "CSS Margins",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Margins
        </h2>
        <p className="leading-relaxed mb-4">
          Margins are used to create space around elements, outside of any defined borders.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">margin</span>: 20px; <span className="text-blue-600 dark:text-blue-400">/* All sides */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">margin</span>: 10px 20px; <span className="text-blue-600 dark:text-blue-400">/* Top/Bottom, Left/Right */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">margin</span>: 10px 20px 30px 40px; <span className="text-blue-600 dark:text-blue-400">/* Top, Right, Bottom, Left */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">margin</span>: auto; <span className="text-blue-600 dark:text-blue-400">/* Center horizontally */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_padding.asp": {
    title: "CSS Padding",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Padding
        </h2>
        <p className="leading-relaxed mb-4">
          Padding is used to create space around an element's content, inside of any defined borders.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">padding</span>: 20px; <span className="text-blue-600 dark:text-blue-400">/* All sides */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">padding</span>: 10px 20px; <span className="text-blue-600 dark:text-blue-400">/* Top/Bottom, Left/Right */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">padding</span>: 10px 20px 30px 40px; <span className="text-blue-600 dark:text-blue-400">/* Top, Right, Bottom, Left */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_dimension.asp": {
    title: "CSS Height/Width",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Height and Width
        </h2>
        <p className="leading-relaxed mb-4">
          The height and width properties set the height and width of an element.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">div</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">width</span>: 200px;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">height</span>: 100px;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">max-width</span>: 500px;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">min-height</span>: 50px;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_boxmodel.asp": {
    title: "CSS Box Model",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Box Model
        </h2>
        <p className="leading-relaxed mb-4">
          The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li><strong>Content</strong> - The content of the box</li>
          <li><strong>Padding</strong> - Clears an area around the content</li>
          <li><strong>Border</strong> - A border around the padding</li>
          <li><strong>Margin</strong> - Clears an area outside the border</li>
        </ul>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">div</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">box-sizing</span>: border-box; <span className="text-blue-600 dark:text-blue-400">/* Include padding and border in width */</span>
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_outline.asp": {
    title: "CSS Outline",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Outline
        </h2>
        <p className="leading-relaxed mb-4">
          An outline is a line drawn outside the element's border. Unlike borders, outlines do not take up space.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">p</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">outline</span>: 2px solid red;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">outline-offset</span>: 5px;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_text.asp": {
    title: "CSS Text",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Text
        </h2>
        <p className="leading-relaxed mb-4">
          CSS has many properties for formatting text including color, alignment, decoration, transformation, and spacing.
        </p>
      </>
    ),
  },

  "css_text_color.asp": {
    title: "CSS Text Color",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Text Color
        </h2>
        <p className="leading-relaxed mb-4">
          The color property is used to set the color of the text.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">p</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: blue; {"}"}
            <br />
            <span className="text-green-600 dark:text-green-400">h1</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: #ff0000; {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_text_align.asp": {
    title: "CSS Text Alignment",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Text Alignment
        </h2>
        <p className="leading-relaxed mb-4">
          The text-align property sets the horizontal alignment of text.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">text-align</span>: left;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-align</span>: center;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-align</span>: right;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-align</span>: justify;
          </pre>
        </div>
      </>
    ),
  },

  "css_text_decoration.asp": {
    title: "CSS Text Decoration",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Text Decoration
        </h2>
        <p className="leading-relaxed mb-4">
          The text-decoration property adds decorations to text.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">text-decoration</span>: none;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-decoration</span>: underline;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-decoration</span>: line-through;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-decoration</span>: overline;
          </pre>
        </div>
      </>
    ),
  },

  "css_text_transform.asp": {
    title: "CSS Text Transform",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Text Transform
        </h2>
        <p className="leading-relaxed mb-4">
          The text-transform property controls the capitalization of text.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">text-transform</span>: uppercase;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-transform</span>: lowercase;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-transform</span>: capitalize;
          </pre>
        </div>
      </>
    ),
  },

  "css_text_spacing.asp": {
    title: "CSS Text Spacing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Text Spacing
        </h2>
        <p className="leading-relaxed mb-4">
          CSS provides several properties for controlling text spacing.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">letter-spacing</span>: 2px;
            <br />
            <span className="text-purple-600 dark:text-purple-400">word-spacing</span>: 10px;
            <br />
            <span className="text-purple-600 dark:text-purple-400">line-height</span>: 1.5;
            <br />
            <span className="text-purple-600 dark:text-purple-400">text-indent</span>: 50px;
          </pre>
        </div>
      </>
    ),
  },

  "css_font.asp": {
    title: "CSS Fonts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Fonts
        </h2>
        <p className="leading-relaxed mb-4">
          CSS font properties define the font family, size, style, and weight of text.
        </p>
      </>
    ),
  },

  "css_font_family.asp": {
    title: "CSS Font Family",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Font Family
        </h2>
        <p className="leading-relaxed mb-4">
          The font-family property specifies the font for an element.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">font-family</span>: "Arial", sans-serif;
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-family</span>: "Times New Roman", serif;
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-family</span>: "Courier New", monospace;
          </pre>
        </div>
      </>
    ),
  },

  "css_font_style.asp": {
    title: "CSS Font Style",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Font Style
        </h2>
        <p className="leading-relaxed mb-4">
          The font-style property is used to specify italic text.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">font-style</span>: normal;
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-style</span>: italic;
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-style</span>: oblique;
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-weight</span>: bold;
          </pre>
        </div>
      </>
    ),
  },

  "css_font_size.asp": {
    title: "CSS Font Size",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Font Size
        </h2>
        <p className="leading-relaxed mb-4">
          The font-size property sets the size of the text.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">font-size</span>: 16px;
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-size</span>: 1.5em;
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-size</span>: 1rem;
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-size</span>: 100%;
          </pre>
        </div>
      </>
    ),
  },

  "css_font_google.asp": {
    title: "Google Fonts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Google Fonts
        </h2>
        <p className="leading-relaxed mb-4">
          Google Fonts is a free library of web fonts that you can use in your CSS.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">{`<!-- In HTML head -->`}</span>
            <br />
            &lt;link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"&gt;
            <br /><br />
            <span className="text-blue-600 dark:text-blue-400">/* In CSS */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">font-family</span>: "Roboto", sans-serif;
          </pre>
        </div>
      </>
    ),
  },

  "css_icons.asp": {
    title: "CSS Icons",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Icons
        </h2>
        <p className="leading-relaxed mb-4">
          Icons can be added to your HTML pages using icon libraries like Font Awesome, Bootstrap Icons, or Google Material Icons.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">{`<!-- Font Awesome -->`}</span>
            <br />
            &lt;i class="fa fa-home"&gt;&lt;/i&gt;
            <br /><br />
            <span className="text-blue-600 dark:text-blue-400">{`<!-- Bootstrap Icons -->`}</span>
            <br />
            &lt;i class="bi bi-heart"&gt;&lt;/i&gt;
          </pre>
        </div>
      </>
    ),
  },

  "css_link.asp": {
    title: "CSS Links",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Links
        </h2>
        <p className="leading-relaxed mb-4">
          Links can be styled using pseudo-classes based on their state.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">a:link</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: blue; {"}"} <span className="text-blue-600 dark:text-blue-400">/* unvisited */</span>
            <br />
            <span className="text-green-600 dark:text-green-400">a:visited</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: purple; {"}"} <span className="text-blue-600 dark:text-blue-400">/* visited */</span>
            <br />
            <span className="text-green-600 dark:text-green-400">a:hover</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: red; {"}"} <span className="text-blue-600 dark:text-blue-400">/* mouse over */</span>
            <br />
            <span className="text-green-600 dark:text-green-400">a:active</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: orange; {"}"} <span className="text-blue-600 dark:text-blue-400">/* clicked */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_list.asp": {
    title: "CSS Lists",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Lists
        </h2>
        <p className="leading-relaxed mb-4">
          CSS list properties allow you to set different list item markers.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">list-style-type</span>: disc;
            <br />
            <span className="text-purple-600 dark:text-purple-400">list-style-type</span>: circle;
            <br />
            <span className="text-purple-600 dark:text-purple-400">list-style-type</span>: square;
            <br />
            <span className="text-purple-600 dark:text-purple-400">list-style-type</span>: none;
            <br />
            <span className="text-purple-600 dark:text-purple-400">list-style-image</span>: url("bullet.png");
          </pre>
        </div>
      </>
    ),
  },

  "css_table.asp": {
    title: "CSS Tables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Tables
        </h2>
        <p className="leading-relaxed mb-4">
          CSS can be used to style HTML tables with borders, spacing, and alignment.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">table</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">border-collapse</span>: collapse;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">width</span>: 100%;
            <br />
            {"}"}
            <br />
            <span className="text-green-600 dark:text-green-400">th, td</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">border</span>: 1px solid black;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">padding</span>: 8px;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_display.asp": {
    title: "CSS Display",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Display
        </h2>
        <p className="leading-relaxed mb-4">
          The display property specifies how an element is displayed.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">display</span>: block;
            <br />
            <span className="text-purple-600 dark:text-purple-400">display</span>: inline;
            <br />
            <span className="text-purple-600 dark:text-purple-400">display</span>: inline-block;
            <br />
            <span className="text-purple-600 dark:text-purple-400">display</span>: none;
            <br />
            <span className="text-purple-600 dark:text-purple-400">display</span>: flex;
            <br />
            <span className="text-purple-600 dark:text-purple-400">display</span>: grid;
          </pre>
        </div>
      </>
    ),
  },

  "css_position.asp": {
    title: "CSS Position",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Position
        </h2>
        <p className="leading-relaxed mb-4">
          The position property specifies the type of positioning method used for an element.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">position</span>: static;   <span className="text-blue-600 dark:text-blue-400">/* Default */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">position</span>: relative; <span className="text-blue-600 dark:text-blue-400">/* Relative to normal position */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">position</span>: absolute; <span className="text-blue-600 dark:text-blue-400">/* Relative to nearest positioned ancestor */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">position</span>: fixed;    <span className="text-blue-600 dark:text-blue-400">/* Relative to viewport */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">position</span>: sticky;   <span className="text-blue-600 dark:text-blue-400">/* Based on scroll position */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_zindex.asp": {
    title: "CSS Z-index",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Z-index
        </h2>
        <p className="leading-relaxed mb-4">
          The z-index property specifies the stack order of an element. Elements with higher z-index appear in front.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">.front</span> {"{"} <span className="text-purple-600 dark:text-purple-400">z-index</span>: 10; {"}"}
            <br />
            <span className="text-green-600 dark:text-green-400">.back</span> {"{"} <span className="text-purple-600 dark:text-purple-400">z-index</span>: 1; {"}"}
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          <strong>Note:</strong> z-index only works on positioned elements (position: absolute, relative, fixed, or sticky).
        </p>
      </>
    ),
  },

  "css_overflow.asp": {
    title: "CSS Overflow",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Overflow
        </h2>
        <p className="leading-relaxed mb-4">
          The overflow property controls what happens when content is too big for its container.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">overflow</span>: visible; <span className="text-blue-600 dark:text-blue-400">/* Default */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">overflow</span>: hidden;  <span className="text-blue-600 dark:text-blue-400">/* Clips content */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">overflow</span>: scroll;  <span className="text-blue-600 dark:text-blue-400">/* Always show scrollbars */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">overflow</span>: auto;    <span className="text-blue-600 dark:text-blue-400">/* Scrollbars when needed */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_float.asp": {
    title: "CSS Float",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Float
        </h2>
        <p className="leading-relaxed mb-4">
          The float property positions an element to the left or right, allowing text to wrap around it.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">float</span>: left;
            <br />
            <span className="text-purple-600 dark:text-purple-400">float</span>: right;
            <br />
            <span className="text-purple-600 dark:text-purple-400">float</span>: none;
            <br />
            <span className="text-purple-600 dark:text-purple-400">clear</span>: both; <span className="text-blue-600 dark:text-blue-400">/* Clear floats */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_flexbox.asp": {
    title: "CSS Flexbox",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Flexbox
        </h2>
        <p className="leading-relaxed mb-4">
          Flexbox is a one-dimensional layout method for arranging items in rows or columns.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">.container</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">display</span>: flex;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_flexbox_container.asp": {
    title: "Flex Container",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Flex Container
        </h2>
        <p className="leading-relaxed mb-4">
          The flex container properties control the layout of flex items.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">flex-direction</span>: row | column | row-reverse | column-reverse;
            <br />
            <span className="text-purple-600 dark:text-purple-400">justify-content</span>: flex-start | center | flex-end | space-between | space-around;
            <br />
            <span className="text-purple-600 dark:text-purple-400">align-items</span>: stretch | center | flex-start | flex-end;
            <br />
            <span className="text-purple-600 dark:text-purple-400">flex-wrap</span>: nowrap | wrap | wrap-reverse;
            <br />
            <span className="text-purple-600 dark:text-purple-400">gap</span>: 10px;
          </pre>
        </div>
      </>
    ),
  },

  "css_flexbox_items.asp": {
    title: "Flex Items",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Flex Items
        </h2>
        <p className="leading-relaxed mb-4">
          Flex item properties control how individual items behave within a flex container.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">flex-grow</span>: 1; <span className="text-blue-600 dark:text-blue-400">/* Grow factor */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">flex-shrink</span>: 0; <span className="text-blue-600 dark:text-blue-400">/* Shrink factor */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">flex-basis</span>: 200px; <span className="text-blue-600 dark:text-blue-400">/* Initial size */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">flex</span>: 1 0 200px; <span className="text-blue-600 dark:text-blue-400">/* Shorthand */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">align-self</span>: center; <span className="text-blue-600 dark:text-blue-400">/* Override align-items */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_flexbox_responsive.asp": {
    title: "Flex Responsive",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Responsive Flexbox
        </h2>
        <p className="leading-relaxed mb-4">
          Flexbox can be combined with media queries for responsive layouts.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">.container</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">display</span>: flex;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">flex-wrap</span>: wrap;
            <br />
            {"}"}
            <br /><br />
            <span className="text-red-600 dark:text-red-400">@media</span> (max-width: 768px) {"{"}
            <br />
            {"  "}<span className="text-green-600 dark:text-green-400">.container</span> {"{"}
            <br />
            {"    "}<span className="text-purple-600 dark:text-purple-400">flex-direction</span>: column;
            <br />
            {"  "}{"}"}
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_grid.asp": {
    title: "CSS Grid",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Grid
        </h2>
        <p className="leading-relaxed mb-4">
          CSS Grid Layout is a two-dimensional layout system for creating complex layouts.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">.container</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">display</span>: grid;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_grid_container.asp": {
    title: "Grid Container",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Grid Container
        </h2>
        <p className="leading-relaxed mb-4">
          Grid container properties define the grid structure.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">grid-template-columns</span>: 1fr 1fr 1fr; <span className="text-blue-600 dark:text-blue-400">/* 3 equal columns */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">grid-template-rows</span>: 100px auto;
            <br />
            <span className="text-purple-600 dark:text-purple-400">gap</span>: 10px;
            <br />
            <span className="text-purple-600 dark:text-purple-400">grid-template-columns</span>: repeat(3, 1fr);
            <br />
            <span className="text-purple-600 dark:text-purple-400">grid-template-columns</span>: repeat(auto-fit, minmax(200px, 1fr));
          </pre>
        </div>
      </>
    ),
  },

  "css_grid_items.asp": {
    title: "Grid Items",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Grid Items
        </h2>
        <p className="leading-relaxed mb-4">
          Grid item properties control how items are placed in the grid.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">grid-column</span>: 1 / 3; <span className="text-blue-600 dark:text-blue-400">/* Span columns 1-2 */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">grid-row</span>: 1 / 3; <span className="text-blue-600 dark:text-blue-400">/* Span rows 1-2 */</span>
            <br />
            <span className="text-purple-600 dark:text-purple-400">grid-column</span>: span 2;
            <br />
            <span className="text-purple-600 dark:text-purple-400">grid-area</span>: header; <span className="text-blue-600 dark:text-blue-400">/* Named grid area */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_responsive.asp": {
    title: "CSS Responsive",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Responsive Web Design
        </h2>
        <p className="leading-relaxed mb-4">
          Responsive web design makes your web page look good on all devices using CSS and HTML.
        </p>
      </>
    ),
  },

  "css_responsive_viewport.asp": {
    title: "Viewport",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          The Viewport
        </h2>
        <p className="leading-relaxed mb-4">
          The viewport is the user's visible area of a web page. Set the viewport meta tag for proper scaling.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
          </pre>
        </div>
      </>
    ),
  },

  "css_responsive_mediaqueries.asp": {
    title: "Media Queries",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Media Queries
        </h2>
        <p className="leading-relaxed mb-4">
          Media queries apply different styles for different screen sizes and devices.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">@media</span> (max-width: 600px) {"{"}
            <br />
            {"  "}<span className="text-green-600 dark:text-green-400">.container</span> {"{"} <span className="text-purple-600 dark:text-purple-400">width</span>: 100%; {"}"}
            <br />
            {"}"}
            <br /><br />
            <span className="text-red-600 dark:text-red-400">@media</span> (min-width: 768px) and (max-width: 1024px) {"{"}
            <br />
            {"  "}<span className="text-green-600 dark:text-green-400">.container</span> {"{"} <span className="text-purple-600 dark:text-purple-400">width</span>: 80%; {"}"}
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_responsive_images.asp": {
    title: "Responsive Images",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Responsive Images
        </h2>
        <p className="leading-relaxed mb-4">
          Make images scale properly on different screen sizes.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">img</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">max-width</span>: 100%;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">height</span>: auto;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_responsive_videos.asp": {
    title: "Responsive Videos",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Responsive Videos
        </h2>
        <p className="leading-relaxed mb-4">
          Make videos scale properly while maintaining aspect ratio.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">.video-container</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">position</span>: relative;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">padding-bottom</span>: 56.25%; <span className="text-blue-600 dark:text-blue-400">/* 16:9 */</span>
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">height</span>: 0;
            <br />
            {"}"}
            <br />
            <span className="text-green-600 dark:text-green-400">.video-container iframe</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">position</span>: absolute;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">width</span>: 100%;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">height</span>: 100%;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_animations.asp": {
    title: "CSS Animations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Animations
        </h2>
        <p className="leading-relaxed mb-4">
          CSS allows animation of HTML elements without using JavaScript.
        </p>
      </>
    ),
  },

  "css_transitions.asp": {
    title: "CSS Transitions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Transitions
        </h2>
        <p className="leading-relaxed mb-4">
          Transitions allow you to change property values smoothly over a duration.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">.box</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">transition</span>: all 0.3s ease;
            <br />
            {"}"}
            <br />
            <span className="text-green-600 dark:text-green-400">.box:hover</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">transform</span>: scale(1.1);
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_keyframes.asp": {
    title: "CSS Keyframes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Keyframes
        </h2>
        <p className="leading-relaxed mb-4">
          The @keyframes rule specifies the animation code.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">@keyframes</span> slideIn {"{"}
            <br />
            {"  "}from {"{"} <span className="text-purple-600 dark:text-purple-400">transform</span>: translateX(-100%); {"}"}
            <br />
            {"  "}to {"{"} <span className="text-purple-600 dark:text-purple-400">transform</span>: translateX(0); {"}"}
            <br />
            {"}"}
            <br /><br />
            <span className="text-green-600 dark:text-green-400">.element</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">animation</span>: slideIn 1s ease forwards;
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_transform.asp": {
    title: "CSS Transform",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Transform
        </h2>
        <p className="leading-relaxed mb-4">
          The transform property applies 2D or 3D transformation to an element.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">transform</span>: translate(50px, 100px);
            <br />
            <span className="text-purple-600 dark:text-purple-400">transform</span>: rotate(45deg);
            <br />
            <span className="text-purple-600 dark:text-purple-400">transform</span>: scale(1.5);
            <br />
            <span className="text-purple-600 dark:text-purple-400">transform</span>: skew(10deg, 20deg);
            <br />
            <span className="text-purple-600 dark:text-purple-400">transform</span>: rotate(45deg) scale(1.2);
          </pre>
        </div>
      </>
    ),
  },

  "css_variables.asp": {
    title: "CSS Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Variables
        </h2>
        <p className="leading-relaxed mb-4">
          CSS variables (custom properties) allow you to store values for reuse throughout your stylesheet.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">:root</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">--primary-color</span>: #6334B9;
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">--spacing</span>: 16px;
            <br />
            {"}"}
            <br /><br />
            <span className="text-green-600 dark:text-green-400">.button</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">background-color</span>: var(--primary-color);
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">padding</span>: var(--spacing);
            <br />
            {"}"}
          </pre>
        </div>
      </>
    ),
  },

  "css_specificity.asp": {
    title: "CSS Specificity",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS Specificity
        </h2>
        <p className="leading-relaxed mb-4">
          Specificity determines which CSS rule is applied when multiple rules could apply to the same element.
        </p>
        <p className="leading-relaxed mb-4">
          <strong>Specificity hierarchy (lowest to highest):</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Element selectors (h1, p, div)</li>
          <li>Class selectors (.myClass)</li>
          <li>ID selectors (#myId)</li>
          <li>Inline styles</li>
          <li>!important</li>
        </ul>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">p</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: blue; {"}"} <span className="text-blue-600 dark:text-blue-400">/* Specificity: 0,0,1 */</span>
            <br />
            <span className="text-green-600 dark:text-green-400">.text</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: red; {"}"} <span className="text-blue-600 dark:text-blue-400">/* Specificity: 0,1,0 */</span>
            <br />
            <span className="text-green-600 dark:text-green-400">#intro</span> {"{"} <span className="text-purple-600 dark:text-purple-400">color</span>: green; {"}"} <span className="text-blue-600 dark:text-blue-400">/* Specificity: 1,0,0 */</span>
          </pre>
        </div>
      </>
    ),
  },

  "css_important.asp": {
    title: "CSS !important",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CSS !important
        </h2>
        <p className="leading-relaxed mb-4">
          The !important rule overrides all previous styling rules for that property on that element.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-green-600 dark:text-green-400">.myClass</span> {"{"}
            <br />
            {"  "}<span className="text-purple-600 dark:text-purple-400">color</span>: red <span className="text-red-600 dark:text-red-400">!important</span>;
            <br />
            {"}"}
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          <strong>Warning:</strong> Using !important is generally considered bad practice as it makes debugging more difficult. Use it sparingly and only when necessary.
        </p>
      </>
    ),
  },
};
