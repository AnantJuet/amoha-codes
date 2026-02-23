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

// Main structure of the sidebar navigation for ASP.NET
export const tutorialData: SidebarItem[] = [
  { label: "ASP.NET Home", href: "aspnet_home" },
  { label: "ASP.NET Intro", href: "aspnet_intro" },
  { label: "ASP.NET Setup", href: "aspnet_setup" },
  {
    label: "MVC Architecture",
    href: "aspnet_mvc",
    isHeader: true,
    children: [
      { label: "MVC Overview", href: "aspnet_mvc" },
      { label: "MVC Pattern", href: "aspnet_mvc_pattern" },
      { label: "Project Structure", href: "aspnet_project_structure" },
    ]
  },
  {
    label: "Controllers",
    href: "aspnet_controllers",
    isHeader: true,
    children: [
      { label: "Controllers Basics", href: "aspnet_controllers" },
      { label: "Action Methods", href: "aspnet_action_methods" },
      { label: "Action Results", href: "aspnet_action_results" },
      { label: "Routing", href: "aspnet_routing" },
    ]
  },
  {
    label: "Views",
    href: "aspnet_views",
    isHeader: true,
    children: [
      { label: "Views Basics", href: "aspnet_views" },
      { label: "Layouts", href: "aspnet_layouts" },
      { label: "Partial Views", href: "aspnet_partial_views" },
      { label: "View Components", href: "aspnet_view_components" },
    ]
  },
  {
    label: "Models",
    href: "aspnet_models",
    isHeader: true,
    children: [
      { label: "Models Basics", href: "aspnet_models" },
      { label: "Data Annotations", href: "aspnet_data_annotations" },
      { label: "Model Binding", href: "aspnet_model_binding" },
      { label: "Validation", href: "aspnet_validation" },
    ]
  },
  {
    label: "Razor Pages",
    href: "aspnet_razor_pages",
    isHeader: true,
    children: [
      { label: "Razor Syntax", href: "aspnet_razor_pages" },
      { label: "Page Model", href: "aspnet_page_model" },
      { label: "Tag Helpers", href: "aspnet_tag_helpers" },
      { label: "Forms", href: "aspnet_forms" },
    ]
  },
  {
    label: "Web API",
    href: "aspnet_web_api",
    isHeader: true,
    children: [
      { label: "API Basics", href: "aspnet_web_api" },
      { label: "API Controllers", href: "aspnet_api_controllers" },
      { label: "RESTful Services", href: "aspnet_restful" },
      { label: "Content Negotiation", href: "aspnet_content_negotiation" },
    ]
  },
  {
    label: "Entity Framework",
    href: "aspnet_entity_framework",
    isHeader: true,
    children: [
      { label: "EF Core Basics", href: "aspnet_entity_framework" },
      { label: "DbContext", href: "aspnet_dbcontext" },
      { label: "Migrations", href: "aspnet_migrations" },
      { label: "LINQ Queries", href: "aspnet_linq" },
    ]
  },
  {
    label: "Authentication",
    href: "aspnet_authentication",
    isHeader: true,
    children: [
      { label: "Identity", href: "aspnet_authentication" },
      { label: "JWT Tokens", href: "aspnet_jwt" },
      { label: "OAuth", href: "aspnet_oauth" },
      { label: "Cookie Auth", href: "aspnet_cookie_auth" },
    ]
  },
  {
    label: "Authorization",
    href: "aspnet_authorization",
    isHeader: true,
    children: [
      { label: "Roles", href: "aspnet_authorization" },
      { label: "Policies", href: "aspnet_policies" },
      { label: "Claims", href: "aspnet_claims" },
    ]
  },
  {
    label: "Deployment",
    href: "aspnet_deployment",
    isHeader: true,
    children: [
      { label: "IIS Deployment", href: "aspnet_deployment" },
      { label: "Azure Deployment", href: "aspnet_azure" },
      { label: "Docker", href: "aspnet_docker" },
      { label: "CI/CD", href: "aspnet_cicd" },
    ]
  },
];

// Content for each tutorial page
export const tutorialContent: Record<string, TopicContent> = {
  "aspnet_home": {
    title: "ASP.NET Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ASP.NET Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>ASP.NET</strong> is a powerful, open-source web framework for building modern web applications and services with .NET.
        </p>
        <p className="leading-relaxed mb-4">
          ASP.NET extends the .NET platform with tools and libraries specifically for building web apps. It supports building web pages, REST APIs, real-time apps, and microservices.
        </p>

        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Build web applications using MVC pattern</li>
          <li>Create RESTful Web APIs</li>
          <li>Work with Entity Framework Core for data access</li>
          <li>Implement authentication and authorization</li>
          <li>Deploy applications to various platforms</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_intro": {
    title: "ASP.NET Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is ASP.NET?
        </h2>
        <p className="leading-relaxed mb-4">
          ASP.NET is a free, cross-platform, open-source framework for building web apps and services with .NET and C#.
        </p>
        <p className="leading-relaxed mb-4">
          ASP.NET Core is the modern, modular version of ASP.NET that runs on Windows, macOS, and Linux.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Cross-platform:</strong> Runs on Windows, macOS, and Linux</li>
          <li><strong>High performance:</strong> One of the fastest web frameworks</li>
          <li><strong>Modern architecture:</strong> Built-in dependency injection, modular middleware</li>
          <li><strong>Cloud-ready:</strong> Easy deployment to cloud platforms</li>
          <li><strong>Flexible:</strong> Supports MVC, Razor Pages, Web APIs, and more</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">ASP.NET vs ASP.NET Core</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <th className="text-left p-2">Feature</th>
                <th className="text-left p-2">ASP.NET (Framework)</th>
                <th className="text-left p-2">ASP.NET Core</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">Platform</td>
                <td className="p-2">Windows only</td>
                <td className="p-2">Cross-platform</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">Performance</td>
                <td className="p-2">Good</td>
                <td className="p-2">Excellent</td>
              </tr>
              <tr>
                <td className="p-2">Hosting</td>
                <td className="p-2">IIS only</td>
                <td className="p-2">IIS, Kestrel, Docker</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "aspnet_setup": {
    title: "ASP.NET Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up ASP.NET Development Environment
        </h2>
        <p className="leading-relaxed mb-4">
          To start developing ASP.NET applications, you need to install the .NET SDK and a code editor.
        </p>

        <h3 className="text-xl font-medium mb-3">Step 1: Install .NET SDK</h3>
        <p className="leading-relaxed mb-4">
          Download and install the .NET SDK from the official Microsoft website.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Verify installation
dotnet --version

# Check installed SDKs
dotnet --list-sdks`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Step 2: Install Visual Studio or VS Code</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Visual Studio:</strong> Full-featured IDE for Windows (Community Edition is free)</li>
          <li><strong>Visual Studio Code:</strong> Lightweight, cross-platform editor with C# extension</li>
          <li><strong>JetBrains Rider:</strong> Cross-platform .NET IDE</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Step 3: Create Your First Project</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create a new web application
dotnet new webapp -n MyFirstApp

# Navigate to the project
cd MyFirstApp

# Run the application
dotnet run`}
          </pre>
        </div>
        <p className="leading-relaxed mb-4">
          Open your browser and navigate to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">https://localhost:5001</code> to see your application.
        </p>
      </>
    ),
  },
  "aspnet_mvc": {
    title: "MVC Architecture",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Understanding MVC Architecture
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>MVC (Model-View-Controller)</strong> is an architectural pattern that separates an application into three main components.
        </p>

        <h3 className="text-xl font-medium mb-3">The Three Components</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Model:</strong> Represents the data and business logic</li>
          <li><strong>View:</strong> Handles the display of information (UI)</li>
          <li><strong>Controller:</strong> Processes requests and coordinates between Model and View</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">How MVC Works</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`1. User sends a request to the application
2. Controller receives the request
3. Controller interacts with Model to get/update data
4. Controller selects a View to render
5. View displays the data to the user`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Creating an MVC Project</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create new MVC project
dotnet new mvc -n MyMvcApp

# Project structure
MyMvcApp/
├── Controllers/
│   └── HomeController.cs
├── Models/
├── Views/
│   ├── Home/
│   │   └── Index.cshtml
│   └── Shared/
│       └── _Layout.cshtml
├── wwwroot/
└── Program.cs`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_mvc_pattern": {
    title: "MVC Pattern",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          The MVC Pattern in Detail
        </h2>
        <p className="leading-relaxed mb-4">
          The MVC pattern promotes separation of concerns, making applications easier to test and maintain.
        </p>

        <h3 className="text-xl font-medium mb-3">Benefits of MVC</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Clear separation between UI and business logic</li>
          <li>Easier unit testing</li>
          <li>Better code organization</li>
          <li>Multiple developers can work simultaneously</li>
          <li>Support for multiple views of the same data</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Request Flow Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Controller
public class ProductController : Controller
{
    private readonly IProductService _service;

    public ProductController(IProductService service)
    {
        _service = service;
    }

    public IActionResult Details(int id)
    {
        var product = _service.GetById(id); // Model
        return View(product); // View
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_project_structure": {
    title: "Project Structure",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ASP.NET Project Structure
        </h2>
        <p className="leading-relaxed mb-4">
          Understanding the project structure is essential for organizing your code effectively.
        </p>

        <h3 className="text-xl font-medium mb-3">Standard Project Layout</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`MyProject/
├── Controllers/          # Request handlers
├── Models/              # Data classes
├── Views/               # Razor view templates
│   ├── Shared/          # Shared layouts and partials
│   └── _ViewImports.cshtml
├── wwwroot/             # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── lib/
├── Data/                # Database context and migrations
├── Services/            # Business logic services
├── appsettings.json     # Configuration
├── Program.cs           # Application entry point
└── MyProject.csproj     # Project file`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Key Files</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Program.cs:</strong> Application startup and configuration</li>
          <li><strong>appsettings.json:</strong> Application settings</li>
          <li><strong>*.csproj:</strong> Project dependencies and settings</li>
        </ul>
      </>
    ),
  },
  "aspnet_controllers": {
    title: "Controllers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Controllers in ASP.NET
        </h2>
        <p className="leading-relaxed mb-4">
          Controllers handle incoming HTTP requests and return responses. They coordinate between models and views.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating a Controller</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult About()
    {
        ViewData["Message"] = "Your application description";
        return View();
    }

    public IActionResult Contact()
    {
        return View();
    }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Controller Conventions</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Controller names end with "Controller" suffix</li>
          <li>Inherit from <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Controller</code> or <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">ControllerBase</code></li>
          <li>Public methods are called action methods</li>
          <li>Use dependency injection for services</li>
        </ul>
      </>
    ),
  },
  "aspnet_action_methods": {
    title: "Action Methods",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Action Methods
        </h2>
        <p className="leading-relaxed mb-4">
          Action methods are public methods in controllers that handle HTTP requests and return responses.
        </p>

        <h3 className="text-xl font-medium mb-3">HTTP Method Attributes</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class ProductController : Controller
{
    [HttpGet]
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet("{id}")]
    public IActionResult Details(int id)
    {
        var product = GetProduct(id);
        return View(product);
    }

    [HttpPost]
    public IActionResult Create(Product product)
    {
        if (ModelState.IsValid)
        {
            SaveProduct(product);
            return RedirectToAction("Index");
        }
        return View(product);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Product product)
    {
        UpdateProduct(id, product);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        DeleteProduct(id);
        return NoContent();
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_action_results": {
    title: "Action Results",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Action Results
        </h2>
        <p className="leading-relaxed mb-4">
          Action results represent the result of an action method. ASP.NET provides many built-in result types.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Action Results</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class ExampleController : Controller
{
    // Returns a view
    public IActionResult ViewExample() => View();

    // Returns a view with model
    public IActionResult ViewWithModel() => View(new Product());

    // Returns JSON
    public IActionResult JsonExample() => Json(new { name = "Test" });

    // Redirect to another action
    public IActionResult RedirectExample()
        => RedirectToAction("Index", "Home");

    // Returns 404 Not Found
    public IActionResult NotFoundExample() => NotFound();

    // Returns 200 OK
    public IActionResult OkExample() => Ok();

    // Returns 201 Created
    public IActionResult CreatedExample()
        => Created("/api/products/1", new Product());

    // Returns file
    public IActionResult FileExample()
        => File(fileBytes, "application/pdf");

    // Returns content
    public IActionResult ContentExample()
        => Content("Plain text response");
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_routing": {
    title: "Routing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Routing in ASP.NET
        </h2>
        <p className="leading-relaxed mb-4">
          Routing matches incoming HTTP requests to controller actions. ASP.NET supports both conventional and attribute routing.
        </p>

        <h3 className="text-xl font-medium mb-3">Conventional Routing</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Program.cs
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// URL: /Products/Details/5
// Maps to: ProductsController.Details(5)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Attribute Routing</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`[Route("api/[controller]")]
public class ProductsController : Controller
{
    [HttpGet]                    // GET api/products
    public IActionResult GetAll() { }

    [HttpGet("{id}")]            // GET api/products/5
    public IActionResult GetById(int id) { }

    [HttpGet("category/{name}")] // GET api/products/category/electronics
    public IActionResult ByCategory(string name) { }

    [HttpPost]                   // POST api/products
    public IActionResult Create([FromBody] Product p) { }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Route Constraints</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`[HttpGet("{id:int}")]           // id must be integer
[HttpGet("{name:alpha}")]        // name must be alphabetic
[HttpGet("{id:min(1)}")]         // id must be >= 1
[HttpGet("{name:maxlength(10)}")] // name max 10 chars`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_views": {
    title: "Views",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Views in ASP.NET
        </h2>
        <p className="leading-relaxed mb-4">
          Views are responsible for rendering the user interface. ASP.NET uses Razor syntax to combine C# with HTML.
        </p>

        <h3 className="text-xl font-medium mb-3">Razor Syntax Basics</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@* This is a Razor comment *@

@{
    // C# code block
    var message = "Hello, World!";
}

<h1>@message</h1>

@if (User.Identity.IsAuthenticated)
{
    <p>Welcome, @User.Identity.Name!</p>
}
else
{
    <p>Please log in.</p>
}

<ul>
@foreach (var item in Model.Items)
{
    <li>@item.Name - @item.Price.ToString("C")</li>
}
</ul>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">View Discovery</h3>
        <p className="leading-relaxed mb-4">
          ASP.NET looks for views in these locations by convention:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/Views/[Controller]/[Action].cshtml</code></li>
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/Views/Shared/[Action].cshtml</code></li>
        </ul>
      </>
    ),
  },
  "aspnet_layouts": {
    title: "Layouts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Layouts in ASP.NET
        </h2>
        <p className="leading-relaxed mb-4">
          Layouts provide a consistent look across multiple pages. They define the common HTML structure.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating a Layout</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@* Views/Shared/_Layout.cshtml *@
<!DOCTYPE html>
<html>
<head>
    <title>@ViewData["Title"] - My App</title>
    <link rel="stylesheet" href="~/css/site.css" />
    @RenderSection("Styles", required: false)
</head>
<body>
    <header>
        <nav><!-- Navigation --></nav>
    </header>

    <main>
        @RenderBody()
    </main>

    <footer>
        <p>&copy; 2024 My Company</p>
    </footer>

    <script src="~/js/site.js"></script>
    @RenderSection("Scripts", required: false)
</body>
</html>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Using a Layout</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@{
    Layout = "_Layout";
    ViewData["Title"] = "Home Page";
}

<h1>Welcome to my website!</h1>

@section Scripts {
    <script src="~/js/home.js"></script>
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_partial_views": {
    title: "Partial Views",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Partial Views
        </h2>
        <p className="leading-relaxed mb-4">
          Partial views are reusable view components that can be included in other views.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating a Partial View</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@* Views/Shared/_ProductCard.cshtml *@
@model Product

<div class="product-card">
    <img src="@Model.ImageUrl" alt="@Model.Name" />
    <h3>@Model.Name</h3>
    <p class="price">@Model.Price.ToString("C")</p>
    <a href="/Products/Details/@Model.Id">View Details</a>
</div>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Using Partial Views</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@* Using partial in a view *@
<div class="product-list">
    @foreach (var product in Model.Products)
    {
        <partial name="_ProductCard" model="product" />
    }
</div>

@* Alternative syntax *@
@await Html.PartialAsync("_ProductCard", product)`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_view_components": {
    title: "View Components",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          View Components
        </h2>
        <p className="leading-relaxed mb-4">
          View Components are similar to partial views but with their own logic. They are ideal for complex reusable UI elements.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating a View Component</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// ViewComponents/ShoppingCartViewComponent.cs
public class ShoppingCartViewComponent : ViewComponent
{
    private readonly ICartService _cartService;

    public ShoppingCartViewComponent(ICartService cartService)
    {
        _cartService = cartService;
    }

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var items = await _cartService.GetCartItemsAsync();
        return View(items);
    }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">View Component View</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@* Views/Shared/Components/ShoppingCart/Default.cshtml *@
@model IEnumerable<CartItem>

<div class="shopping-cart">
    <span>Items: @Model.Count()</span>
    <span>Total: @Model.Sum(i => i.Price).ToString("C")</span>
</div>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Using View Components</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@await Component.InvokeAsync("ShoppingCart")

@* Or using tag helper *@
<vc:shopping-cart></vc:shopping-cart>`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_models": {
    title: "Models",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Models in ASP.NET
        </h2>
        <p className="leading-relaxed mb-4">
          Models represent the data in your application. They define the structure of your data and can include validation rules.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating a Model</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Models/Product.cs
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; }
    public DateTime CreatedAt { get; set; }
    public bool IsActive { get; set; }
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ICollection<Product> Products { get; set; }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">View Models</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// ViewModels/ProductViewModel.cs
public class ProductViewModel
{
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string CategoryName { get; set; }
    public string FormattedPrice => Price.ToString("C");
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_data_annotations": {
    title: "Data Annotations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Data Annotations
        </h2>
        <p className="leading-relaxed mb-4">
          Data annotations are attributes that provide validation and metadata for model properties.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Annotations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`using System.ComponentModel.DataAnnotations;

public class RegisterViewModel
{
    [Required(ErrorMessage = "Name is required")]
    [StringLength(100, MinimumLength = 2)]
    [Display(Name = "Full Name")]
    public string Name { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [StringLength(100, MinimumLength = 8)]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [Compare("Password", ErrorMessage = "Passwords don't match")]
    [DataType(DataType.Password)]
    public string ConfirmPassword { get; set; }

    [Range(18, 120)]
    public int Age { get; set; }

    [Phone]
    public string PhoneNumber { get; set; }

    [Url]
    public string Website { get; set; }

    [RegularExpression(@"^[A-Z]{2}[0-9]{4}$")]
    public string Code { get; set; }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_model_binding": {
    title: "Model Binding",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Model Binding
        </h2>
        <p className="leading-relaxed mb-4">
          Model binding maps HTTP request data to action method parameters. It automatically converts form data, query strings, and JSON bodies to C# objects.
        </p>

        <h3 className="text-xl font-medium mb-3">Binding Sources</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class ProductController : Controller
{
    // From route: /products/5
    public IActionResult Details([FromRoute] int id) { }

    // From query string: /products?category=electronics
    public IActionResult Search([FromQuery] string category) { }

    // From request body (JSON)
    [HttpPost]
    public IActionResult Create([FromBody] Product product) { }

    // From form data
    [HttpPost]
    public IActionResult Update([FromForm] Product product) { }

    // From header
    public IActionResult Auth([FromHeader(Name = "X-API-Key")] string apiKey) { }

    // From services (DI)
    public IActionResult Index([FromServices] IProductService service) { }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Complex Type Binding</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Model
public class SearchFilter
{
    public string Category { get; set; }
    public decimal? MinPrice { get; set; }
    public decimal? MaxPrice { get; set; }
    public int Page { get; set; } = 1;
}

// Action - binds from query string automatically
// /products?category=electronics&minPrice=10&page=2
public IActionResult Search(SearchFilter filter) { }`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_validation": {
    title: "Validation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Model Validation
        </h2>
        <p className="leading-relaxed mb-4">
          ASP.NET provides built-in validation that works on both server and client side.
        </p>

        <h3 className="text-xl font-medium mb-3">Server-Side Validation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`[HttpPost]
public IActionResult Create(ProductViewModel model)
{
    if (!ModelState.IsValid)
    {
        // Return view with validation errors
        return View(model);
    }

    // Process valid model
    _service.Create(model);
    return RedirectToAction("Index");
}

// Custom validation
if (model.EndDate < model.StartDate)
{
    ModelState.AddModelError("EndDate", "End date must be after start date");
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Client-Side Validation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@* Include validation scripts *@
<script src="~/lib/jquery-validation/dist/jquery.validate.min.js"></script>
<script src="~/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js"></script>

@* Form with validation *@
<form asp-action="Create" method="post">
    <div class="form-group">
        <label asp-for="Name"></label>
        <input asp-for="Name" class="form-control" />
        <span asp-validation-for="Name" class="text-danger"></span>
    </div>
    <button type="submit">Submit</button>
</form>

@* Validation summary *@
<div asp-validation-summary="All" class="text-danger"></div>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Custom Validation Attribute</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class FutureDateAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(
        object value, ValidationContext context)
    {
        if (value is DateTime date && date <= DateTime.Now)
        {
            return new ValidationResult("Date must be in the future");
        }
        return ValidationResult.Success;
    }
}

// Usage
[FutureDate]
public DateTime EventDate { get; set; }`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_razor_pages": {
    title: "Razor Pages",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Razor Pages
        </h2>
        <p className="leading-relaxed mb-4">
          Razor Pages is a page-based programming model that makes building web UI easier and more productive.
        </p>

        <h3 className="text-xl font-medium mb-3">Razor Syntax</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@page
@model IndexModel

<h1>Welcome, @Model.UserName!</h1>

@* Expressions *@
<p>Current time: @DateTime.Now.ToString("HH:mm")</p>

@* Code blocks *@
@{
    var items = new[] { "One", "Two", "Three" };
}

@* Control flow *@
@if (Model.IsLoggedIn)
{
    <p>You are logged in.</p>
}

@* Loops *@
<ul>
@foreach (var item in items)
{
    <li>@item</li>
}
</ul>

@* Raw HTML *@
@Html.Raw("<strong>Bold text</strong>")`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_page_model": {
    title: "Page Model",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Page Model
        </h2>
        <p className="leading-relaxed mb-4">
          The PageModel class contains the handlers for HTTP requests and the data for the page.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Page Model</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Pages/Products/Index.cshtml.cs
public class IndexModel : PageModel
{
    private readonly IProductService _service;

    public IndexModel(IProductService service)
    {
        _service = service;
    }

    public IList<Product> Products { get; set; }

    [BindProperty(SupportsGet = true)]
    public string SearchTerm { get; set; }

    public async Task OnGetAsync()
    {
        Products = await _service.GetAllAsync(SearchTerm);
    }

    public async Task<IActionResult> OnPostDeleteAsync(int id)
    {
        await _service.DeleteAsync(id);
        return RedirectToPage();
    }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Handler Methods</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">OnGet()</code> - Handles GET requests</li>
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">OnPost()</code> - Handles POST requests</li>
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">OnPostAsync()</code> - Async POST handler</li>
          <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">OnPostDeleteAsync()</code> - Named handler</li>
        </ul>
      </>
    ),
  },
  "aspnet_tag_helpers": {
    title: "Tag Helpers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Tag Helpers
        </h2>
        <p className="leading-relaxed mb-4">
          Tag Helpers enable server-side code to participate in creating and rendering HTML elements in Razor files.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Tag Helpers</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@* Form tag helpers *@
<form asp-controller="Account" asp-action="Login" method="post">
    <div class="form-group">
        <label asp-for="Email"></label>
        <input asp-for="Email" class="form-control" />
        <span asp-validation-for="Email" class="text-danger"></span>
    </div>

    <select asp-for="Country" asp-items="Model.Countries"></select>

    <textarea asp-for="Message"></textarea>

    <button type="submit">Submit</button>
</form>

@* Link tag helpers *@
<a asp-controller="Home" asp-action="Index">Home</a>
<a asp-page="/Products/Details" asp-route-id="5">View Product</a>

@* Image tag helper *@
<img src="~/images/logo.png" asp-append-version="true" />

@* Environment tag helper *@
<environment include="Development">
    <script src="~/js/site.js"></script>
</environment>
<environment exclude="Development">
    <script src="~/js/site.min.js"></script>
</environment>`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_forms": {
    title: "Forms",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Forms
        </h2>
        <p className="leading-relaxed mb-4">
          Forms are essential for collecting user input. ASP.NET provides powerful tools for creating and handling forms.
        </p>

        <h3 className="text-xl font-medium mb-3">Complete Form Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@page
@model CreateModel

<h1>Create Product</h1>

<form method="post">
    <div asp-validation-summary="All" class="text-danger"></div>

    <div class="form-group">
        <label asp-for="Product.Name"></label>
        <input asp-for="Product.Name" class="form-control" />
        <span asp-validation-for="Product.Name" class="text-danger"></span>
    </div>

    <div class="form-group">
        <label asp-for="Product.Price"></label>
        <input asp-for="Product.Price" class="form-control" />
        <span asp-validation-for="Product.Price" class="text-danger"></span>
    </div>

    <div class="form-group">
        <label asp-for="Product.CategoryId"></label>
        <select asp-for="Product.CategoryId"
                asp-items="Model.Categories"
                class="form-control">
            <option value="">Select Category</option>
        </select>
    </div>

    <div class="form-check">
        <input asp-for="Product.IsActive" class="form-check-input" />
        <label asp-for="Product.IsActive" class="form-check-label"></label>
    </div>

    <button type="submit" class="btn btn-primary">Create</button>
    <a asp-page="Index" class="btn btn-secondary">Cancel</a>
</form>`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_web_api": {
    title: "Web API",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ASP.NET Web API
        </h2>
        <p className="leading-relaxed mb-4">
          Web API is a framework for building HTTP services that can be consumed by various clients including browsers and mobile devices.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating a Web API Project</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create new Web API project
dotnet new webapi -n MyApi

# Program.cs configuration
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Minimal API</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`var app = WebApplication.Create(args);

app.MapGet("/", () => "Hello World!");
app.MapGet("/products", () => GetAllProducts());
app.MapGet("/products/{id}", (int id) => GetProduct(id));
app.MapPost("/products", (Product p) => CreateProduct(p));
app.MapPut("/products/{id}", (int id, Product p) => UpdateProduct(id, p));
app.MapDelete("/products/{id}", (int id) => DeleteProduct(id));

app.Run();`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_api_controllers": {
    title: "API Controllers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          API Controllers
        </h2>
        <p className="leading-relaxed mb-4">
          API Controllers handle HTTP requests and return data (usually JSON) instead of views.
        </p>

        <h3 className="text-xl font-medium mb-3">Complete API Controller</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _service;

    public ProductsController(IProductService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetAll()
    {
        var products = await _service.GetAllAsync();
        return Ok(products);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(int id)
    {
        var product = await _service.GetByIdAsync(id);
        if (product == null)
            return NotFound();
        return Ok(product);
    }

    [HttpPost]
    public async Task<ActionResult<Product>> Create(Product product)
    {
        var created = await _service.CreateAsync(product);
        return CreatedAtAction(
            nameof(GetById),
            new { id = created.Id },
            created);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Product product)
    {
        if (id != product.Id)
            return BadRequest();

        await _service.UpdateAsync(product);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _service.DeleteAsync(id);
        return NoContent();
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_restful": {
    title: "RESTful Services",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          RESTful Services
        </h2>
        <p className="leading-relaxed mb-4">
          REST (Representational State Transfer) is an architectural style for designing networked applications.
        </p>

        <h3 className="text-xl font-medium mb-3">REST Principles</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Resources:</strong> Everything is a resource identified by URI</li>
          <li><strong>HTTP Methods:</strong> Use GET, POST, PUT, DELETE appropriately</li>
          <li><strong>Stateless:</strong> Each request contains all necessary information</li>
          <li><strong>Representations:</strong> Resources can have multiple representations (JSON, XML)</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">HTTP Methods and CRUD</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <th className="text-left p-2">HTTP Method</th>
                <th className="text-left p-2">CRUD Operation</th>
                <th className="text-left p-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">GET</td>
                <td className="p-2">Read</td>
                <td className="p-2">GET /api/products</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">POST</td>
                <td className="p-2">Create</td>
                <td className="p-2">POST /api/products</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">PUT</td>
                <td className="p-2">Update</td>
                <td className="p-2">PUT /api/products/1</td>
              </tr>
              <tr>
                <td className="p-2">DELETE</td>
                <td className="p-2">Delete</td>
                <td className="p-2">DELETE /api/products/1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "aspnet_content_negotiation": {
    title: "Content Negotiation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Content Negotiation
        </h2>
        <p className="leading-relaxed mb-4">
          Content negotiation allows clients to specify the format they want to receive data in.
        </p>

        <h3 className="text-xl font-medium mb-3">Configuring Formatters</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Program.cs
builder.Services.AddControllers(options =>
{
    options.RespectBrowserAcceptHeader = true;
    options.ReturnHttpNotAcceptable = true;
})
.AddXmlSerializerFormatters()
.AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy =
        JsonNamingPolicy.CamelCase;
    options.JsonSerializerOptions.WriteIndented = true;
});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Accept Headers</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Request JSON
Accept: application/json

# Request XML
Accept: application/xml

# Request with quality values
Accept: application/json;q=1.0, application/xml;q=0.5`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_entity_framework": {
    title: "Entity Framework",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Entity Framework Core
        </h2>
        <p className="leading-relaxed mb-4">
          Entity Framework Core (EF Core) is an object-relational mapper (ORM) that enables .NET developers to work with databases using .NET objects.
        </p>

        <h3 className="text-xl font-medium mb-3">Installing EF Core</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Install EF Core packages
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Defining Entities</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; }
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; }
    public ICollection<Product> Products { get; set; }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_dbcontext": {
    title: "DbContext",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          DbContext
        </h2>
        <p className="leading-relaxed mb-4">
          DbContext is the main class that coordinates Entity Framework functionality for a given data model.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating a DbContext</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Order> Orders { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .Property(p => p.Price)
            .HasPrecision(18, 2);

        modelBuilder.Entity<Product>()
            .HasOne(p => p.Category)
            .WithMany(c => c.Products)
            .HasForeignKey(p => p.CategoryId);
    }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Registering DbContext</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_migrations": {
    title: "Migrations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Database Migrations
        </h2>
        <p className="leading-relaxed mb-4">
          Migrations provide a way to incrementally update the database schema to keep it in sync with your data model.
        </p>

        <h3 className="text-xl font-medium mb-3">Migration Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Add a new migration
dotnet ef migrations add InitialCreate

# Apply migrations to database
dotnet ef database update

# Remove last migration (if not applied)
dotnet ef migrations remove

# Generate SQL script
dotnet ef migrations script

# List all migrations
dotnet ef migrations list

# Revert to specific migration
dotnet ef database update MigrationName`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Migration File Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public partial class AddProductTable : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Products",
            columns: table => new
            {
                Id = table.Column<int>(nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Name = table.Column<string>(maxLength: 100, nullable: false),
                Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Products", x => x.Id);
            });
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "Products");
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_linq": {
    title: "LINQ Queries",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          LINQ Queries
        </h2>
        <p className="leading-relaxed mb-4">
          Language Integrated Query (LINQ) provides a consistent way to query data from various sources.
        </p>

        <h3 className="text-xl font-medium mb-3">Common LINQ Operations</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Get all products
var products = await _context.Products.ToListAsync();

// Filter with Where
var expensiveProducts = await _context.Products
    .Where(p => p.Price > 100)
    .ToListAsync();

// Include related data
var productsWithCategory = await _context.Products
    .Include(p => p.Category)
    .ToListAsync();

// Select specific properties
var productNames = await _context.Products
    .Select(p => new { p.Name, p.Price })
    .ToListAsync();

// Ordering
var orderedProducts = await _context.Products
    .OrderByDescending(p => p.Price)
    .ThenBy(p => p.Name)
    .ToListAsync();

// Pagination
var pagedProducts = await _context.Products
    .Skip(20)
    .Take(10)
    .ToListAsync();

// Aggregations
var averagePrice = await _context.Products.AverageAsync(p => p.Price);
var totalProducts = await _context.Products.CountAsync();
var maxPrice = await _context.Products.MaxAsync(p => p.Price);

// First/Single
var product = await _context.Products
    .FirstOrDefaultAsync(p => p.Id == id);

// Any/All
var hasExpensive = await _context.Products
    .AnyAsync(p => p.Price > 1000);`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_authentication": {
    title: "Authentication",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Authentication
        </h2>
        <p className="leading-relaxed mb-4">
          Authentication verifies the identity of a user. ASP.NET provides several authentication mechanisms.
        </p>

        <h3 className="text-xl font-medium mb-3">ASP.NET Core Identity</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Install packages
dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore

// Configure Identity
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    options.Password.RequiredLength = 8;
    options.Password.RequireDigit = true;
    options.Password.RequireUppercase = true;
    options.SignIn.RequireConfirmedEmail = true;
})
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();

// Add authentication middleware
app.UseAuthentication();
app.UseAuthorization();`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Custom ApplicationUser</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_jwt": {
    title: "JWT Tokens",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          JWT Authentication
        </h2>
        <p className="leading-relaxed mb-4">
          JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims between two parties.
        </p>

        <h3 className="text-xl font-medium mb-3">Configuring JWT</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Generating JWT Token</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public string GenerateToken(ApplicationUser user)
{
    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, user.Id),
        new Claim(ClaimTypes.Email, user.Email),
        new Claim(ClaimTypes.Name, user.UserName),
        new Claim("FirstName", user.FirstName)
    };

    var key = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    var token = new JwtSecurityToken(
        issuer: _config["Jwt:Issuer"],
        audience: _config["Jwt:Audience"],
        claims: claims,
        expires: DateTime.Now.AddHours(1),
        signingCredentials: creds);

    return new JwtSecurityTokenHandler().WriteToken(token);
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_oauth": {
    title: "OAuth",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          OAuth Authentication
        </h2>
        <p className="leading-relaxed mb-4">
          OAuth allows users to authenticate using third-party providers like Google, Facebook, or Microsoft.
        </p>

        <h3 className="text-xl font-medium mb-3">Configuring Google OAuth</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Install package
dotnet add package Microsoft.AspNetCore.Authentication.Google

// Configure in Program.cs
builder.Services.AddAuthentication()
    .AddGoogle(options =>
    {
        options.ClientId = builder.Configuration["Google:ClientId"];
        options.ClientSecret = builder.Configuration["Google:ClientSecret"];
        options.CallbackPath = "/signin-google";
    })
    .AddMicrosoftAccount(options =>
    {
        options.ClientId = builder.Configuration["Microsoft:ClientId"];
        options.ClientSecret = builder.Configuration["Microsoft:ClientSecret"];
    })
    .AddFacebook(options =>
    {
        options.AppId = builder.Configuration["Facebook:AppId"];
        options.AppSecret = builder.Configuration["Facebook:AppSecret"];
    });`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">External Login Controller</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`[HttpGet]
public IActionResult ExternalLogin(string provider)
{
    var redirectUrl = Url.Action("ExternalLoginCallback");
    var properties = _signInManager
        .ConfigureExternalAuthenticationProperties(provider, redirectUrl);
    return Challenge(properties, provider);
}

[HttpGet]
public async Task<IActionResult> ExternalLoginCallback()
{
    var info = await _signInManager.GetExternalLoginInfoAsync();
    if (info == null)
        return RedirectToAction("Login");

    var result = await _signInManager.ExternalLoginSignInAsync(
        info.LoginProvider, info.ProviderKey, isPersistent: false);

    if (result.Succeeded)
        return RedirectToAction("Index", "Home");

    // Create new user if doesn't exist
    return RedirectToAction("Register");
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_cookie_auth": {
    title: "Cookie Authentication",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Cookie Authentication
        </h2>
        <p className="leading-relaxed mb-4">
          Cookie authentication is the default authentication scheme for web applications.
        </p>

        <h3 className="text-xl font-medium mb-3">Configuring Cookie Authentication</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Account/Login";
        options.LogoutPath = "/Account/Logout";
        options.AccessDeniedPath = "/Account/AccessDenied";
        options.ExpireTimeSpan = TimeSpan.FromHours(24);
        options.SlidingExpiration = true;
        options.Cookie.HttpOnly = true;
        options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
    });`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Sign In and Sign Out</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Sign in
var claims = new List<Claim>
{
    new Claim(ClaimTypes.Name, user.Username),
    new Claim(ClaimTypes.Email, user.Email),
    new Claim(ClaimTypes.Role, "Admin")
};

var identity = new ClaimsIdentity(claims,
    CookieAuthenticationDefaults.AuthenticationScheme);
var principal = new ClaimsPrincipal(identity);

await HttpContext.SignInAsync(
    CookieAuthenticationDefaults.AuthenticationScheme,
    principal,
    new AuthenticationProperties { IsPersistent = true });

// Sign out
await HttpContext.SignOutAsync(
    CookieAuthenticationDefaults.AuthenticationScheme);`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_authorization": {
    title: "Authorization",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Authorization
        </h2>
        <p className="leading-relaxed mb-4">
          Authorization determines what an authenticated user is allowed to do.
        </p>

        <h3 className="text-xl font-medium mb-3">Role-Based Authorization</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Require authenticated user
[Authorize]
public class AccountController : Controller { }

// Require specific role
[Authorize(Roles = "Admin")]
public class AdminController : Controller { }

// Multiple roles (OR)
[Authorize(Roles = "Admin,Manager")]
public IActionResult Dashboard() { }

// Action level
public class ProductsController : Controller
{
    [AllowAnonymous]
    public IActionResult Index() { }

    [Authorize]
    public IActionResult Create() { }

    [Authorize(Roles = "Admin")]
    public IActionResult Delete(int id) { }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_policies": {
    title: "Policies",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Policy-Based Authorization
        </h2>
        <p className="leading-relaxed mb-4">
          Policies provide a flexible way to define complex authorization requirements.
        </p>

        <h3 className="text-xl font-medium mb-3">Defining Policies</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`builder.Services.AddAuthorization(options =>
{
    // Simple claim requirement
    options.AddPolicy("EmailConfirmed", policy =>
        policy.RequireClaim("EmailConfirmed", "true"));

    // Multiple requirements (AND)
    options.AddPolicy("AdminOnly", policy =>
        policy.RequireRole("Admin")
              .RequireClaim("Department", "IT"));

    // Age requirement
    options.AddPolicy("AtLeast21", policy =>
        policy.Requirements.Add(new MinimumAgeRequirement(21)));
});

// Usage
[Authorize(Policy = "AdminOnly")]
public class AdminController : Controller { }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Custom Requirements</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class MinimumAgeRequirement : IAuthorizationRequirement
{
    public int MinimumAge { get; }
    public MinimumAgeRequirement(int minimumAge)
    {
        MinimumAge = minimumAge;
    }
}

public class MinimumAgeHandler : AuthorizationHandler<MinimumAgeRequirement>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        MinimumAgeRequirement requirement)
    {
        var dobClaim = context.User.FindFirst(c => c.Type == "DateOfBirth");
        if (dobClaim != null)
        {
            var dob = DateTime.Parse(dobClaim.Value);
            var age = DateTime.Today.Year - dob.Year;

            if (age >= requirement.MinimumAge)
                context.Succeed(requirement);
        }
        return Task.CompletedTask;
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_claims": {
    title: "Claims",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Claims-Based Authorization
        </h2>
        <p className="leading-relaxed mb-4">
          Claims are statements about a user that are used for authorization decisions.
        </p>

        <h3 className="text-xl font-medium mb-3">Working with Claims</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Adding claims to user
var claims = new List<Claim>
{
    new Claim(ClaimTypes.Name, "john@example.com"),
    new Claim(ClaimTypes.Role, "Admin"),
    new Claim("Department", "IT"),
    new Claim("EmployeeId", "12345"),
    new Claim("Permission", "CanEdit"),
    new Claim("Permission", "CanDelete")
};

// Reading claims in controller
public IActionResult Profile()
{
    var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    var email = User.FindFirst(ClaimTypes.Email)?.Value;
    var department = User.FindFirst("Department")?.Value;

    var permissions = User.FindAll("Permission")
        .Select(c => c.Value).ToList();

    var isAdmin = User.IsInRole("Admin");

    return View();
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Claims Transformation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`public class CustomClaimsTransformation : IClaimsTransformation
{
    public Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal)
    {
        var identity = (ClaimsIdentity)principal.Identity;

        // Add custom claims based on user
        if (identity.IsAuthenticated)
        {
            identity.AddClaim(new Claim("CustomClaim", "Value"));
        }

        return Task.FromResult(principal);
    }
}

// Register in Program.cs
builder.Services.AddTransient<IClaimsTransformation, CustomClaimsTransformation>();`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_deployment": {
    title: "Deployment",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Deploying ASP.NET Applications
        </h2>
        <p className="leading-relaxed mb-4">
          ASP.NET applications can be deployed to various hosting environments including IIS, Azure, and containers.
        </p>

        <h3 className="text-xl font-medium mb-3">IIS Deployment</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Publish the application
dotnet publish -c Release -o ./publish

# Required IIS components:
# - .NET Core Hosting Bundle
# - ASP.NET Core Module

# web.config is generated automatically
<configuration>
  <system.webServer>
    <handlers>
      <add name="aspNetCore" path="*" verb="*"
           modules="AspNetCoreModuleV2" />
    </handlers>
    <aspNetCore processPath="dotnet"
                arguments=".\MyApp.dll"
                stdoutLogEnabled="false"
                hostingModel="InProcess" />
  </system.webServer>
</configuration>`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Deployment Checklist</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Update connection strings for production</li>
          <li>Configure HTTPS and SSL certificates</li>
          <li>Set appropriate environment variables</li>
          <li>Enable logging and monitoring</li>
          <li>Configure CORS if needed</li>
          <li>Set up health checks</li>
        </ul>
      </>
    ),
  },
  "aspnet_azure": {
    title: "Azure Deployment",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Deploying to Azure
        </h2>
        <p className="leading-relaxed mb-4">
          Azure App Service is a fully managed platform for building, deploying, and scaling web apps.
        </p>

        <h3 className="text-xl font-medium mb-3">Azure CLI Deployment</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Login to Azure
az login

# Create resource group
az group create --name myResourceGroup --location eastus

# Create App Service plan
az appservice plan create --name myAppServicePlan \\
    --resource-group myResourceGroup \\
    --sku B1 --is-linux

# Create web app
az webapp create --name myWebApp \\
    --resource-group myResourceGroup \\
    --plan myAppServicePlan \\
    --runtime "DOTNET|8.0"

# Deploy from local
az webapp deployment source config-zip \\
    --resource-group myResourceGroup \\
    --name myWebApp \\
    --src publish.zip`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Azure App Configuration</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Use Azure App Configuration
builder.Configuration.AddAzureAppConfiguration(options =>
{
    options.Connect(connectionString)
           .UseFeatureFlags();
});

// Use Azure Key Vault
builder.Configuration.AddAzureKeyVault(
    new Uri("https://myvault.vault.azure.net/"),
    new DefaultAzureCredential());`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_docker": {
    title: "Docker",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Docker Containerization
        </h2>
        <p className="leading-relaxed mb-4">
          Docker containers provide a consistent environment for running applications across different platforms.
        </p>

        <h3 className="text-xl font-medium mb-3">Dockerfile</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApp.csproj", "./"]
RUN dotnet restore "MyApp.csproj"
COPY . .
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Docker Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Build image
docker build -t myapp:latest .

# Run container
docker run -d -p 8080:80 --name myapp myapp:latest

# View logs
docker logs myapp

# Stop and remove
docker stop myapp
docker rm myapp`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Docker Compose</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ConnectionStrings__DefaultConnection=...
    depends_on:
      - db
  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=YourPassword123!`}
          </pre>
        </div>
      </>
    ),
  },
  "aspnet_cicd": {
    title: "CI/CD",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Continuous Integration and Deployment
        </h2>
        <p className="leading-relaxed mb-4">
          CI/CD pipelines automate the build, test, and deployment process for your applications.
        </p>

        <h3 className="text-xl font-medium mb-3">GitHub Actions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    - name: Setup .NET
      uses: actions/setup-dotnet@v3
      with:
        dotnet-version: 8.0.x

    - name: Restore dependencies
      run: dotnet restore

    - name: Build
      run: dotnet build --no-restore

    - name: Test
      run: dotnet test --no-build --verbosity normal

    - name: Publish
      run: dotnet publish -c Release -o ./publish

    - name: Deploy to Azure
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'myapp'
        publish-profile: \${{ secrets.AZURE_PUBLISH_PROFILE }}
        package: ./publish`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Azure DevOps Pipeline</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# azure-pipelines.yml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: UseDotNet@2
  inputs:
    version: '8.x'

- script: dotnet restore
  displayName: 'Restore'

- script: dotnet build --configuration Release
  displayName: 'Build'

- script: dotnet test --configuration Release
  displayName: 'Test'

- task: DotNetCoreCLI@2
  inputs:
    command: publish
    publishWebProjects: true
    arguments: '--configuration Release --output \$(Build.ArtifactStagingDirectory)'

- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: '\$(Build.ArtifactStagingDirectory)'
    artifactName: 'webapp'`}
          </pre>
        </div>
      </>
    ),
  },
};
