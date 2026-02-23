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
  { label: "Spring Boot Home", href: "sb_home" },
  { label: "Introduction", href: "sb_intro" },
  { label: "Setup & Installation", href: "sb_setup" },
  { label: "Project Structure", href: "sb_structure" },
  {
    label: "Configuration",
    href: "sb_config",
    isHeader: true,
    children: [
      { label: "Application Properties", href: "sb_app_properties" },
      { label: "YAML Configuration", href: "sb_yaml" },
      { label: "Profiles", href: "sb_profiles" },
    ]
  },
  {
    label: "Controllers",
    href: "sb_controllers",
    isHeader: true,
    children: [
      { label: "REST Controllers", href: "sb_rest_controllers" },
      { label: "Request Mapping", href: "sb_request_mapping" },
      { label: "Path Variables", href: "sb_path_variables" },
    ]
  },
  {
    label: "REST APIs",
    href: "sb_rest_apis",
    isHeader: true,
    children: [
      { label: "GET Requests", href: "sb_get" },
      { label: "POST Requests", href: "sb_post" },
      { label: "PUT & DELETE", href: "sb_put_delete" },
      { label: "Response Entity", href: "sb_response_entity" },
    ]
  },
  {
    label: "Dependency Injection",
    href: "sb_di",
    isHeader: true,
    children: [
      { label: "IoC Container", href: "sb_ioc" },
      { label: "Autowiring", href: "sb_autowiring" },
      { label: "Qualifier", href: "sb_qualifier" },
    ]
  },
  { label: "Beans", href: "sb_beans" },
  {
    label: "JPA & Database",
    href: "sb_jpa",
    isHeader: true,
    children: [
      { label: "JPA Introduction", href: "sb_jpa_intro" },
      { label: "Entity Classes", href: "sb_entities" },
      { label: "Repositories", href: "sb_repositories" },
      { label: "CRUD Operations", href: "sb_crud" },
    ]
  },
  {
    label: "Security",
    href: "sb_security",
    isHeader: true,
    children: [
      { label: "Spring Security Basics", href: "sb_security_basics" },
      { label: "Authentication", href: "sb_authentication" },
      { label: "JWT", href: "sb_jwt" },
    ]
  },
  { label: "Testing", href: "sb_testing" },
  { label: "Deployment", href: "sb_deployment" },
  { label: "Microservices Basics", href: "sb_microservices" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "sb_home": {
    title: "Spring Boot Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Welcome to Spring Boot
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Spring Boot</strong> is an open-source Java framework that simplifies the creation of production-ready Spring applications. It provides auto-configuration, embedded servers, and opinionated defaults.
        </p>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Setting up Spring Boot projects</li>
          <li>Building RESTful APIs</li>
          <li>Database integration with JPA</li>
          <li>Security and authentication</li>
          <li>Testing and deployment strategies</li>
          <li>Introduction to microservices architecture</li>
        </ul>
      </>
    ),
  },
  "sb_intro": {
    title: "Introduction to Spring Boot",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Spring Boot?
        </h2>
        <p className="leading-relaxed mb-4">
          Spring Boot is built on top of the Spring Framework and provides a faster way to set up, configure, and run applications with minimal configuration.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Auto-configuration:</strong> Automatically configures application based on dependencies</li>
          <li><strong>Embedded Servers:</strong> Includes Tomcat, Jetty, or Undertow</li>
          <li><strong>Starter Dependencies:</strong> Simplified dependency management</li>
          <li><strong>Production-ready:</strong> Health checks, metrics, and externalized configuration</li>
        </ul>
      </>
    ),
  },
  "sb_setup": {
    title: "Setup & Installation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up Spring Boot
        </h2>
        <h3 className="text-xl font-medium mb-3">Prerequisites</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Java JDK 17 or higher</li>
          <li>Maven or Gradle</li>
          <li>IDE (IntelliJ IDEA, Eclipse, or VS Code)</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Using Spring Initializr</h3>
        <p className="leading-relaxed mb-4">
          The easiest way to create a Spring Boot project is using Spring Initializr at start.spring.io
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using Maven
mvn spring-boot:run

# Using Gradle
./gradlew bootRun`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_structure": {
    title: "Project Structure",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Spring Boot Project Structure
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`src/
├── main/
│   ├── java/
│   │   └── com/example/demo/
│   │       ├── DemoApplication.java
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       └── model/
│   └── resources/
│       ├── application.properties
│       ├── static/
│       └── templates/
└── test/
    └── java/`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Key Directories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>controller:</strong> REST controllers and request handlers</li>
          <li><strong>service:</strong> Business logic layer</li>
          <li><strong>repository:</strong> Data access layer</li>
          <li><strong>model:</strong> Entity classes and DTOs</li>
        </ul>
      </>
    ),
  },
  "sb_config": {
    title: "Configuration",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Spring Boot Configuration
        </h2>
        <p className="leading-relaxed mb-4">
          Spring Boot provides multiple ways to configure your application, including properties files, YAML files, and environment variables.
        </p>
        <h3 className="text-xl font-medium mb-3">Configuration Options</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>application.properties</li>
          <li>application.yml</li>
          <li>Environment variables</li>
          <li>Command line arguments</li>
        </ul>
      </>
    ),
  },
  "sb_app_properties": {
    title: "Application Properties",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Application Properties
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Server configuration
server.port=8080

# Database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password

# JPA configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_yaml": {
    title: "YAML Configuration",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          YAML Configuration
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: password
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_profiles": {
    title: "Profiles",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Spring Profiles
        </h2>
        <p className="leading-relaxed mb-4">
          Profiles allow you to define different configurations for different environments (dev, test, prod).
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# application-dev.properties
server.port=8080
spring.datasource.url=jdbc:h2:mem:devdb

# application-prod.properties
server.port=80
spring.datasource.url=jdbc:mysql://prod-server:3306/proddb

# Activate profile
spring.profiles.active=dev`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_controllers": {
    title: "Controllers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Spring Boot Controllers
        </h2>
        <p className="leading-relaxed mb-4">
          Controllers handle incoming HTTP requests and return responses. Spring Boot uses annotations to define controllers and map requests.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@RestController
@RequestMapping("/api")
public class MyController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, World!";
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_rest_controllers": {
    title: "REST Controllers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          REST Controllers
        </h2>
        <p className="leading-relaxed mb-4">
          The @RestController annotation combines @Controller and @ResponseBody, making it ideal for RESTful web services.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_request_mapping": {
    title: "Request Mapping",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Request Mapping
        </h2>
        <p className="leading-relaxed mb-4">
          @RequestMapping maps HTTP requests to handler methods. Specialized annotations include @GetMapping, @PostMapping, @PutMapping, and @DeleteMapping.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@RequestMapping(value = "/users", method = RequestMethod.GET)
// Equivalent to:
@GetMapping("/users")

@RequestMapping(value = "/users", method = RequestMethod.POST)
// Equivalent to:
@PostMapping("/users")`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_path_variables": {
    title: "Path Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Path Variables
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id) {
    return userService.findById(id);
}

@GetMapping("/users/{userId}/orders/{orderId}")
public Order getOrder(
    @PathVariable Long userId,
    @PathVariable Long orderId) {
    return orderService.findByUserAndId(userId, orderId);
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_rest_apis": {
    title: "REST APIs",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Building REST APIs
        </h2>
        <p className="leading-relaxed mb-4">
          REST APIs follow the HTTP protocol conventions for CRUD operations. Spring Boot makes it easy to create RESTful services.
        </p>
        <h3 className="text-xl font-medium mb-3">HTTP Methods</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>GET:</strong> Retrieve resources</li>
          <li><strong>POST:</strong> Create new resources</li>
          <li><strong>PUT:</strong> Update existing resources</li>
          <li><strong>DELETE:</strong> Remove resources</li>
          <li><strong>PATCH:</strong> Partial updates</li>
        </ul>
      </>
    ),
  },
  "sb_get": {
    title: "GET Requests",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          GET Requests
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@GetMapping("/products")
public List<Product> getAllProducts() {
    return productService.findAll();
}

@GetMapping("/products/{id}")
public Product getProduct(@PathVariable Long id) {
    return productService.findById(id);
}

@GetMapping("/products/search")
public List<Product> searchProducts(
    @RequestParam String name,
    @RequestParam(required = false) Double maxPrice) {
    return productService.search(name, maxPrice);
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_post": {
    title: "POST Requests",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          POST Requests
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@PostMapping("/products")
public Product createProduct(@RequestBody Product product) {
    return productService.save(product);
}

@PostMapping("/products")
public ResponseEntity<Product> createProduct(
    @Valid @RequestBody Product product) {
    Product saved = productService.save(product);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_put_delete": {
    title: "PUT & DELETE Requests",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PUT and DELETE Requests
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@PutMapping("/products/{id}")
public Product updateProduct(
    @PathVariable Long id,
    @RequestBody Product product) {
    return productService.update(id, product);
}

@DeleteMapping("/products/{id}")
public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
    productService.delete(id);
    return ResponseEntity.noContent().build();
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_response_entity": {
    title: "Response Entity",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Response Entity
        </h2>
        <p className="leading-relaxed mb-4">
          ResponseEntity gives you full control over the HTTP response including status code, headers, and body.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@GetMapping("/products/{id}")
public ResponseEntity<Product> getProduct(@PathVariable Long id) {
    return productService.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
}

@PostMapping("/products")
public ResponseEntity<Product> create(@RequestBody Product product) {
    Product saved = productService.save(product);
    URI location = URI.create("/products/" + saved.getId());
    return ResponseEntity.created(location).body(saved);
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_di": {
    title: "Dependency Injection",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Dependency Injection
        </h2>
        <p className="leading-relaxed mb-4">
          Dependency Injection is a core concept in Spring that allows objects to be injected rather than created manually.
        </p>
        <h3 className="text-xl font-medium mb-3">Injection Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Constructor Injection:</strong> Recommended approach</li>
          <li><strong>Setter Injection:</strong> For optional dependencies</li>
          <li><strong>Field Injection:</strong> Using @Autowired on fields</li>
        </ul>
      </>
    ),
  },
  "sb_ioc": {
    title: "IoC Container",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Inversion of Control Container
        </h2>
        <p className="leading-relaxed mb-4">
          The IoC container is responsible for instantiating, configuring, and assembling beans. It reads configuration metadata and creates the beans.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Service
public class UserService {
    private final UserRepository repository;

    // Constructor injection (recommended)
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_autowiring": {
    title: "Autowiring",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Autowiring
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Service
public class OrderService {

    @Autowired // Field injection
    private ProductService productService;

    private final UserService userService;

    @Autowired // Constructor injection
    public OrderService(UserService userService) {
        this.userService = userService;
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_qualifier": {
    title: "Qualifier",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Using @Qualifier
        </h2>
        <p className="leading-relaxed mb-4">
          When multiple beans of the same type exist, @Qualifier specifies which bean to inject.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Service("emailNotification")
public class EmailNotificationService implements NotificationService {}

@Service("smsNotification")
public class SmsNotificationService implements NotificationService {}

@Service
public class AlertService {

    @Autowired
    @Qualifier("emailNotification")
    private NotificationService notificationService;
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_beans": {
    title: "Beans",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Spring Beans
        </h2>
        <p className="leading-relaxed mb-4">
          Beans are objects managed by the Spring IoC container. They can be defined using annotations or configuration classes.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    @Scope("prototype")
    public MyBean myBean() {
        return new MyBean();
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_jpa": {
    title: "JPA & Database",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          JPA and Database Integration
        </h2>
        <p className="leading-relaxed mb-4">
          Spring Data JPA simplifies database access by providing repository interfaces and automatic query generation.
        </p>
        <h3 className="text-xl font-medium mb-3">Dependencies</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_jpa_intro": {
    title: "JPA Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          JPA Introduction
        </h2>
        <p className="leading-relaxed mb-4">
          Java Persistence API (JPA) is a specification for object-relational mapping. Hibernate is the most popular JPA implementation.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Concepts</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Entity:</strong> Java class mapped to database table</li>
          <li><strong>EntityManager:</strong> API for CRUD operations</li>
          <li><strong>JPQL:</strong> Object-oriented query language</li>
          <li><strong>Transactions:</strong> Ensure data consistency</li>
        </ul>
      </>
    ),
  },
  "sb_entities": {
    title: "Entity Classes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Entity Classes
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String email;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;

    // Getters and setters
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_repositories": {
    title: "Repositories",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Repository Interfaces
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Derived query methods
    List<User> findByName(String name);
    Optional<User> findByEmail(String email);
    List<User> findByNameContaining(String keyword);

    // Custom query
    @Query("SELECT u FROM User u WHERE u.email LIKE %:domain")
    List<User> findByEmailDomain(@Param("domain") String domain);
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_crud": {
    title: "CRUD Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CRUD Operations
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Create
    public User create(User user) {
        return userRepository.save(user);
    }

    // Read
    public List<User> findAll() {
        return userRepository.findAll();
    }

    // Update
    public User update(Long id, User user) {
        user.setId(id);
        return userRepository.save(user);
    }

    // Delete
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_security": {
    title: "Security",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Spring Security
        </h2>
        <p className="leading-relaxed mb-4">
          Spring Security provides comprehensive security services for Java applications including authentication, authorization, and protection against common attacks.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Authentication and authorization</li>
          <li>Protection against CSRF, XSS, clickjacking</li>
          <li>Session management</li>
          <li>OAuth2 and JWT support</li>
        </ul>
      </>
    ),
  },
  "sb_security_basics": {
    title: "Spring Security Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Spring Security Basics
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http)
        throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/public/**").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .permitAll()
            );
        return http.build();
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_authentication": {
    title: "Authentication",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Authentication
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username)
        throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException(
                "User not found"));
        return new org.springframework.security.core.userdetails.User(
            user.getUsername(),
            user.getPassword(),
            getAuthorities(user.getRoles())
        );
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_jwt": {
    title: "JWT Authentication",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          JWT Authentication
        </h2>
        <p className="leading-relaxed mb-4">
          JSON Web Tokens provide a stateless authentication mechanism for REST APIs.
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@Component
public class JwtUtil {

    private String secret = "mySecretKey";

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
            .setSubject(userDetails.getUsername())
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis()
                + 1000 * 60 * 60 * 10))
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact();
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_testing": {
    title: "Testing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Testing Spring Boot Applications
        </h2>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    void shouldReturnAllUsers() throws Exception {
        when(userService.findAll()).thenReturn(List.of(new User()));

        mockMvc.perform(get("/api/users"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$", hasSize(1)));
    }
}`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_deployment": {
    title: "Deployment",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Deployment Options
        </h2>
        <h3 className="text-xl font-medium mb-3">Building JAR</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Build executable JAR
mvn clean package

# Run the JAR
java -jar target/myapp-0.0.1-SNAPSHOT.jar

# Docker deployment
FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]`}
          </pre>
        </div>
      </>
    ),
  },
  "sb_microservices": {
    title: "Microservices Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Microservices with Spring Boot
        </h2>
        <p className="leading-relaxed mb-4">
          Spring Boot is ideal for building microservices. Spring Cloud provides additional tools for distributed systems.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Components</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Service Discovery:</strong> Eureka Server</li>
          <li><strong>API Gateway:</strong> Spring Cloud Gateway</li>
          <li><strong>Config Server:</strong> Centralized configuration</li>
          <li><strong>Circuit Breaker:</strong> Resilience4j</li>
          <li><strong>Distributed Tracing:</strong> Zipkin, Sleuth</li>
        </ul>
      </>
    ),
  },
};
