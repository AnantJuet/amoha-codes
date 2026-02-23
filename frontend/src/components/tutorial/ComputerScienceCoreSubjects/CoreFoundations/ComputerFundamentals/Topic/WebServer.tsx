import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-6  rounded-xl shadow-lg  mt-20">
    {/* ================= Web Server and Its Types ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Web Server and Its Types
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 26 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      A web server is a system either software, hardware, or both that stores,
      processes, and delivers web content to users over the Internet using the
      HTTP or HTTPS protocol. When a user’s browser sends a request (like
      visiting a website), the web server responds by delivering the appropriate
      resources, such as HTML pages, images, videos, or data.
    </p>

    <p className="leading-relaxed">
      An HTTP server is a specific type of web server which is responsible for
      handling HTTP requests and responses. While all HTTP servers are web
      servers, not all web servers are limited to HTTP. Some web servers may
      support additional protocols like FTP or SMTP.
    </p>

    {/* How Does a Web Server Work */}
    <h2 className="text-3xl font-bold  mt-8">
      How Does a Web Server Work?
    </h2>
    <p className="leading-relaxed">
      When a user accesses a website by entering a URL in their web browser, the
      browser sends an HTTP request to the web server hosting the website. The
      web server processes this request and returns the necessary resources to
      display the page on the user’s browser.
    </p>

    {/* Working of a Web Server */}
    <h3 className="text-2xl font-semibold  mt-4">
      Working of a Web Server
    </h3>
    <ul className="list-disc list-inside space-y-1 leading-relaxed">
      <li>
        <strong>Client Request:</strong> The user enters a URL
        (https://www.example.com/) in their web browser.
      </li>
      <li>
        <strong>DNS Resolution:</strong> The browser contacts a DNS server to
        get the IP address of the domain.
      </li>
      <li>
        <strong>Connecting to the Web Server:</strong> The browser uses the IP
        address to establish a connection.
      </li>
      <li>
        <strong>Processing Request:</strong> The web server receives and
        processes the client request.
      </li>
      <li>
        <strong>Serving the Response:</strong> The server sends requested files
        (HTML, CSS, JS, images) back to the browser.
      </li>
      <li>
        <strong>Rendering the Web Page:</strong> The browser displays the page
        based on the received data.
      </li>
    </ul>

    {/* Types of Web Servers */}
    <h2 className="text-3xl font-bold  mt-8">
      Types of Web Servers
    </h2>
    <p className="leading-relaxed">
      Web servers can be categorized based on their functionality, usage, and
      implementation. Below are some of the most common types:
    </p>

    <ul className=" list-inside space-y-3 leading-relaxed">
      <li>
        <strong>1. Apache Web Server:</strong> Open-source and flexible, developed
        by Apache Software Foundation (1995), written in C.
        <ul className="list-disc list-inside ml-6">
          <li>Supports multiple OS (Windows, Linux, macOS).</li>
          <li>Allows advanced routing.</li>
          <li>Provides directory-level configuration.</li>
        </ul>
      </li>

      <li>
        <strong>2. Nginx Web Server:</strong> High-performance and scalable,
        developed by Igor Sysoev (2004), written in C.
        <ul className="list-disc list-inside ml-6">
          <li>Handles heavy traffic efficiently.</li>
          <li>Acts as reverse proxy/load balancer.</li>
          <li>Excellent for serving static content.</li>
        </ul>
      </li>

      <li>
        <strong>3. Microsoft IIS (Internet Information Services):</strong> Web
        server for Windows, developed by Microsoft (1995), written in C++.
        <ul className="list-disc list-inside ml-6">
          <li>Supports ASP.NET, PHP, and other technologies.</li>
          <li>Provides built-in security features.</li>
          <li>Integrates well with Microsoft ecosystem.</li>
        </ul>
      </li>

      <li>
        <strong>4. LiteSpeed Web Server:</strong> High-performance server by
        LiteSpeed Technologies (2003), written in C.
        <ul className="list-disc list-inside ml-6">
          <li>Faster processing than Apache in some cases.</li>
          <li>Built-in DDoS protection.</li>
          <li>Supports PHP with high efficiency.</li>
        </ul>
      </li>

      <li>
        <strong>5. Apache Tomcat Web Server:</strong> Java-based server developed
        by Apache Software Foundation (1998).
        <ul className="list-disc list-inside ml-6">
          <li>Supports Java Servlets and JSP.</li>
          <li>Ideal for Java EE applications.</li>
          <li>Works with Apache HTTP server.</li>
        </ul>
      </li>

      <li>
        <strong>6. NodeJS Web Server:</strong> JavaScript runtime (2009) that can
        directly handle HTTP requests.
        <ul className="list-disc list-inside ml-6">
          <li>Event-driven, non-blocking architecture.</li>
          <li>Efficient for real-time applications.</li>
          <li>Uses JavaScript on both client and server.</li>
        </ul>
      </li>

      <li>
        <strong>7. Lighttpd:</strong> Lightweight and fast, developed by Jan
        Kneschke (2003), written in C.
        <ul className="list-disc list-inside ml-6">
          <li>Optimized for low memory usage.</li>
          <li>Asynchronous request handling.</li>
          <li>Supports HTTPS, FastCGI, and URL rewriting.</li>
        </ul>
      </li>

      <li>
        <strong>8. OpenLiteSpeed:</strong> Open-source version of LiteSpeed
        (2013), written in C.
        <ul className="list-disc list-inside ml-6">
          <li>Built-in caching and HTTP/3 support.</li>
          <li>High performance and easy configuration.</li>
          <li>Supports modern web protocols.</li>
        </ul>
      </li>

      <li>
        <strong>9. Jigsaw Server:</strong> Developed by W3C (1996), written in
        Java, open-source.
        <ul className="list-disc list-inside ml-6">
          <li>Cross-platform and flexible for research.</li>
          <li>Allows easy extension and modification.</li>
          <li>Supports HTTP/1.1 for experimentation.</li>
        </ul>
      </li>

      <li>
        <strong>10. Sun Java System Web Server:</strong> Developed by Sun
        Microsystems (1996), written in C and C++.
        <ul className="list-disc list-inside ml-6">
          <li>Designed for Java-based enterprise apps.</li>
          <li>Handles high traffic efficiently.</li>
          <li>Supports Windows, Linux, and Solaris.</li>
        </ul>
      </li>
    </ul>

    {/* Which Web Server Should You Use */}
    <h2 className="text-3xl font-bold  mt-8">
      Which Web Server Should You Use and When?
    </h2>
    <ul className="list-disc list-inside space-y-1 leading-relaxed">
      <li>
        <strong>Use Apache:</strong> For general, reliable hosting with wide
        compatibility.
      </li>
      <li>
        <strong>Use Nginx:</strong> For high-traffic websites needing speed and
        scalability.
      </li>
      <li>
        <strong>Use IIS:</strong> For Windows-based or ASP.NET environments.
      </li>
      <li>
        <strong>Use LiteSpeed:</strong> For faster and more secure PHP hosting.
      </li>
      <li>
        <strong>Use Apache Tomcat:</strong> For Java Servlets and JSP apps.
      </li>
      <li>
        <strong>Use NodeJS:</strong> For real-time, JavaScript-based
        applications.
      </li>
      <li>
        <strong>Use Lighttpd:</strong> For lightweight, low-memory systems.
      </li>
      <li>
        <strong>Use OpenLiteSpeed:</strong> For a free yet powerful alternative
        to LiteSpeed.
      </li>
      <li>
        <strong>Use Jigsaw:</strong> For testing and research purposes.
      </li>
      <li>
        <strong>Use Sun Java System Web Server:</strong> For older Java-based
        enterprise apps (legacy support).
      </li>
    </ul>
  </div>
);

export default Home;
