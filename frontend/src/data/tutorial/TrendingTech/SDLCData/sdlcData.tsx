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
  { label: "SDLC Home", href: "sdlc_home" },
  { label: "Introduction", href: "sdlc_intro" },
  { label: "Importance of SDLC", href: "sdlc_importance" },
  {
    label: "SDLC Models",
    href: "sdlc_models",
    isHeader: true,
    children: [
      { label: "Waterfall Model", href: "sdlc_waterfall" },
      { label: "Agile Model", href: "sdlc_agile" },
      { label: "Scrum Framework", href: "sdlc_scrum" },
      { label: "Kanban", href: "sdlc_kanban" },
      { label: "V-Model", href: "sdlc_vmodel" },
      { label: "Spiral Model", href: "sdlc_spiral" },
      { label: "Iterative Model", href: "sdlc_iterative" },
    ]
  },
  { label: "Requirements Analysis", href: "sdlc_requirements" },
  {
    label: "Design Phase",
    href: "sdlc_design",
    isHeader: true,
    children: [
      { label: "High-Level Design", href: "sdlc_hld" },
      { label: "Low-Level Design", href: "sdlc_lld" },
      { label: "Design Patterns", href: "sdlc_patterns" },
    ]
  },
  { label: "Development Phase", href: "sdlc_development" },
  {
    label: "Testing Phases",
    href: "sdlc_testing",
    isHeader: true,
    children: [
      { label: "Unit Testing", href: "sdlc_unit_testing" },
      { label: "Integration Testing", href: "sdlc_integration_testing" },
      { label: "System Testing", href: "sdlc_system_testing" },
      { label: "UAT", href: "sdlc_uat" },
    ]
  },
  { label: "Deployment", href: "sdlc_deployment" },
  { label: "Maintenance", href: "sdlc_maintenance" },
  { label: "DevOps Integration", href: "sdlc_devops" },
  { label: "Best Practices", href: "sdlc_best_practices" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "sdlc_home": {
    title: "SDLC Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Welcome to SDLC Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Software Development Life Cycle (SDLC)</strong> is a systematic process for planning, creating, testing, and deploying software applications. It provides a structured approach to software development.
        </p>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Understanding different SDLC models</li>
          <li>Requirements gathering and analysis</li>
          <li>Design principles and patterns</li>
          <li>Development best practices</li>
          <li>Testing methodologies</li>
          <li>Deployment and maintenance strategies</li>
          <li>DevOps integration</li>
        </ul>
      </>
    ),
  },
  "sdlc_intro": {
    title: "Introduction to SDLC",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is SDLC?
        </h2>
        <p className="leading-relaxed mb-4">
          SDLC is a framework that defines the tasks performed at each step in the software development process. It ensures quality software is delivered on time and within budget.
        </p>
        <h3 className="text-xl font-medium mb-3">SDLC Phases</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4 mb-8">
          <li><strong>Planning:</strong> Define project scope and objectives</li>
          <li><strong>Requirements:</strong> Gather and document requirements</li>
          <li><strong>Design:</strong> Create system architecture</li>
          <li><strong>Development:</strong> Write and compile code</li>
          <li><strong>Testing:</strong> Verify functionality and quality</li>
          <li><strong>Deployment:</strong> Release to production</li>
          <li><strong>Maintenance:</strong> Ongoing support and updates</li>
        </ol>
      </>
    ),
  },
  "sdlc_importance": {
    title: "Importance of SDLC",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Why is SDLC Important?
        </h2>
        <p className="leading-relaxed mb-4">
          SDLC provides a structured approach to software development that helps organizations deliver high-quality software efficiently.
        </p>
        <h3 className="text-xl font-medium mb-3">Benefits of SDLC</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Clear Goals:</strong> Well-defined project objectives</li>
          <li><strong>Cost Control:</strong> Better budget management</li>
          <li><strong>Quality Assurance:</strong> Systematic testing approach</li>
          <li><strong>Risk Management:</strong> Early identification of issues</li>
          <li><strong>Documentation:</strong> Comprehensive project records</li>
          <li><strong>Team Coordination:</strong> Clear roles and responsibilities</li>
        </ul>
      </>
    ),
  },
  "sdlc_models": {
    title: "SDLC Models",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          SDLC Models Overview
        </h2>
        <p className="leading-relaxed mb-4">
          Different SDLC models suit different project requirements. Choosing the right model depends on project size, complexity, and team structure.
        </p>
        <h3 className="text-xl font-medium mb-3">Popular Models</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Waterfall:</strong> Linear, sequential approach</li>
          <li><strong>Agile:</strong> Iterative, flexible methodology</li>
          <li><strong>Scrum:</strong> Sprint-based agile framework</li>
          <li><strong>V-Model:</strong> Verification and validation focus</li>
          <li><strong>Spiral:</strong> Risk-driven iterative model</li>
          <li><strong>DevOps:</strong> Development and operations integration</li>
        </ul>
      </>
    ),
  },
  "sdlc_waterfall": {
    title: "Waterfall Model",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Waterfall Model
        </h2>
        <p className="leading-relaxed mb-4">
          The Waterfall model is a linear sequential approach where each phase must be completed before the next begins. It is one of the oldest SDLC models.
        </p>
        <h3 className="text-xl font-medium mb-3">Phases</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4 mb-8">
          <li>Requirements gathering</li>
          <li>System design</li>
          <li>Implementation</li>
          <li>Testing</li>
          <li>Deployment</li>
          <li>Maintenance</li>
        </ol>
        <h3 className="text-xl font-medium mb-3">When to Use</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Requirements are well-defined and stable</li>
          <li>Project is small to medium-sized</li>
          <li>Technology is well understood</li>
          <li>Resources are available and skilled</li>
        </ul>
      </>
    ),
  },
  "sdlc_agile": {
    title: "Agile Model",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Agile Model
        </h2>
        <p className="leading-relaxed mb-4">
          Agile is an iterative approach that emphasizes flexibility, customer collaboration, and rapid delivery of working software.
        </p>
        <h3 className="text-xl font-medium mb-3">Agile Principles</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Individuals and interactions over processes</li>
          <li>Working software over documentation</li>
          <li>Customer collaboration over contracts</li>
          <li>Responding to change over following a plan</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Benefits</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Faster time to market</li>
          <li>Better quality through continuous testing</li>
          <li>Higher customer satisfaction</li>
          <li>Improved team morale</li>
        </ul>
      </>
    ),
  },
  "sdlc_scrum": {
    title: "Scrum Framework",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Scrum Framework
        </h2>
        <p className="leading-relaxed mb-4">
          Scrum is an agile framework that organizes work into fixed-length iterations called sprints, typically 2-4 weeks long.
        </p>
        <h3 className="text-xl font-medium mb-3">Scrum Roles</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Product Owner:</strong> Defines product backlog</li>
          <li><strong>Scrum Master:</strong> Facilitates the process</li>
          <li><strong>Development Team:</strong> Delivers the work</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Scrum Events</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Sprint Planning</li>
          <li>Daily Standup</li>
          <li>Sprint Review</li>
          <li>Sprint Retrospective</li>
        </ul>
      </>
    ),
  },
  "sdlc_kanban": {
    title: "Kanban",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Kanban Methodology
        </h2>
        <p className="leading-relaxed mb-4">
          Kanban is a visual workflow management method that helps teams visualize work, limit work-in-progress, and maximize efficiency.
        </p>
        <h3 className="text-xl font-medium mb-3">Core Principles</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Visualize the workflow</li>
          <li>Limit work in progress (WIP)</li>
          <li>Manage flow</li>
          <li>Make policies explicit</li>
          <li>Implement feedback loops</li>
          <li>Improve collaboratively</li>
        </ul>
      </>
    ),
  },
  "sdlc_vmodel": {
    title: "V-Model",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          V-Model (Verification and Validation)
        </h2>
        <p className="leading-relaxed mb-4">
          The V-Model is an extension of the waterfall model where testing phases are mapped to corresponding development phases.
        </p>
        <h3 className="text-xl font-medium mb-3">Structure</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Requirements Analysis - Acceptance Testing</li>
          <li>System Design - System Testing</li>
          <li>Architecture Design - Integration Testing</li>
          <li>Module Design - Unit Testing</li>
          <li>Coding (at the bottom of the V)</li>
        </ul>
      </>
    ),
  },
  "sdlc_spiral": {
    title: "Spiral Model",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Spiral Model
        </h2>
        <p className="leading-relaxed mb-4">
          The Spiral model combines iterative development with systematic risk assessment. Each iteration (spiral) passes through four phases.
        </p>
        <h3 className="text-xl font-medium mb-3">Four Quadrants</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4 mb-8">
          <li><strong>Planning:</strong> Determine objectives and constraints</li>
          <li><strong>Risk Analysis:</strong> Identify and resolve risks</li>
          <li><strong>Engineering:</strong> Develop and verify</li>
          <li><strong>Evaluation:</strong> Plan next iteration</li>
        </ol>
      </>
    ),
  },
  "sdlc_iterative": {
    title: "Iterative Model",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Iterative Model
        </h2>
        <p className="leading-relaxed mb-4">
          The Iterative model develops the system through repeated cycles (iterations), allowing developers to learn from earlier iterations.
        </p>
        <h3 className="text-xl font-medium mb-3">Characteristics</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Start with simplified implementation</li>
          <li>Add functionality in each iteration</li>
          <li>Continuous refinement</li>
          <li>Early feedback incorporation</li>
        </ul>
      </>
    ),
  },
  "sdlc_requirements": {
    title: "Requirements Analysis",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Requirements Analysis
        </h2>
        <p className="leading-relaxed mb-4">
          Requirements analysis involves gathering, documenting, and validating stakeholder needs to create a clear specification for the software.
        </p>
        <h3 className="text-xl font-medium mb-3">Types of Requirements</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Functional:</strong> What the system should do</li>
          <li><strong>Non-functional:</strong> Performance, security, usability</li>
          <li><strong>Technical:</strong> Technology constraints</li>
          <li><strong>Business:</strong> Organizational objectives</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Techniques</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Stakeholder interviews</li>
          <li>Surveys and questionnaires</li>
          <li>Use case analysis</li>
          <li>Prototyping</li>
          <li>Document analysis</li>
        </ul>
      </>
    ),
  },
  "sdlc_design": {
    title: "Design Phase",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Design Phase Overview
        </h2>
        <p className="leading-relaxed mb-4">
          The design phase transforms requirements into a detailed blueprint for building the software system.
        </p>
        <h3 className="text-xl font-medium mb-3">Design Levels</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>High-Level Design:</strong> System architecture</li>
          <li><strong>Low-Level Design:</strong> Component details</li>
          <li><strong>Database Design:</strong> Data models</li>
          <li><strong>Interface Design:</strong> User experience</li>
        </ul>
      </>
    ),
  },
  "sdlc_hld": {
    title: "High-Level Design",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          High-Level Design (HLD)
        </h2>
        <p className="leading-relaxed mb-4">
          HLD provides an overview of the system architecture, showing how components interact without implementation details.
        </p>
        <h3 className="text-xl font-medium mb-3">HLD Components</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>System architecture diagram</li>
          <li>Module descriptions</li>
          <li>Data flow diagrams</li>
          <li>Technology stack</li>
          <li>Integration points</li>
          <li>Security architecture</li>
        </ul>
      </>
    ),
  },
  "sdlc_lld": {
    title: "Low-Level Design",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Low-Level Design (LLD)
        </h2>
        <p className="leading-relaxed mb-4">
          LLD provides detailed specifications for each component, including class diagrams, methods, and algorithms.
        </p>
        <h3 className="text-xl font-medium mb-3">LLD Components</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Class diagrams</li>
          <li>Sequence diagrams</li>
          <li>Database schemas</li>
          <li>API specifications</li>
          <li>Algorithm details</li>
          <li>Error handling</li>
        </ul>
      </>
    ),
  },
  "sdlc_patterns": {
    title: "Design Patterns",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Design Patterns
        </h2>
        <p className="leading-relaxed mb-4">
          Design patterns are reusable solutions to common software design problems.
        </p>
        <h3 className="text-xl font-medium mb-3">Pattern Categories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Creational:</strong> Object creation (Singleton, Factory)</li>
          <li><strong>Structural:</strong> Object composition (Adapter, Decorator)</li>
          <li><strong>Behavioral:</strong> Object interaction (Observer, Strategy)</li>
        </ul>
      </>
    ),
  },
  "sdlc_development": {
    title: "Development Phase",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Development Phase
        </h2>
        <p className="leading-relaxed mb-4">
          The development phase involves writing, compiling, and debugging code based on design specifications.
        </p>
        <h3 className="text-xl font-medium mb-3">Best Practices</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Follow coding standards</li>
          <li>Use version control (Git)</li>
          <li>Write clean, maintainable code</li>
          <li>Implement code reviews</li>
          <li>Document code properly</li>
          <li>Write unit tests</li>
        </ul>
      </>
    ),
  },
  "sdlc_testing": {
    title: "Testing Phases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Software Testing
        </h2>
        <p className="leading-relaxed mb-4">
          Testing ensures the software meets requirements and is free of defects.
        </p>
        <h3 className="text-xl font-medium mb-3">Testing Levels</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Unit Testing:</strong> Individual components</li>
          <li><strong>Integration Testing:</strong> Component interactions</li>
          <li><strong>System Testing:</strong> Complete system</li>
          <li><strong>Acceptance Testing:</strong> User validation</li>
        </ul>
      </>
    ),
  },
  "sdlc_unit_testing": {
    title: "Unit Testing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Unit Testing
        </h2>
        <p className="leading-relaxed mb-4">
          Unit testing verifies individual components or functions work correctly in isolation.
        </p>
        <h3 className="text-xl font-medium mb-3">Characteristics</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Tests smallest testable parts</li>
          <li>Written by developers</li>
          <li>Automated execution</li>
          <li>Fast feedback loop</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Popular Frameworks</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>JUnit (Java)</li>
          <li>pytest (Python)</li>
          <li>Jest (JavaScript)</li>
          <li>NUnit (.NET)</li>
        </ul>
      </>
    ),
  },
  "sdlc_integration_testing": {
    title: "Integration Testing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Integration Testing
        </h2>
        <p className="leading-relaxed mb-4">
          Integration testing verifies that different modules or services work together correctly.
        </p>
        <h3 className="text-xl font-medium mb-3">Approaches</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Big Bang:</strong> All components together</li>
          <li><strong>Top-Down:</strong> Start from top modules</li>
          <li><strong>Bottom-Up:</strong> Start from lowest modules</li>
          <li><strong>Sandwich:</strong> Combination approach</li>
        </ul>
      </>
    ),
  },
  "sdlc_system_testing": {
    title: "System Testing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          System Testing
        </h2>
        <p className="leading-relaxed mb-4">
          System testing validates the complete integrated system against requirements.
        </p>
        <h3 className="text-xl font-medium mb-3">Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Functional testing</li>
          <li>Performance testing</li>
          <li>Security testing</li>
          <li>Usability testing</li>
          <li>Compatibility testing</li>
          <li>Recovery testing</li>
        </ul>
      </>
    ),
  },
  "sdlc_uat": {
    title: "User Acceptance Testing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          User Acceptance Testing (UAT)
        </h2>
        <p className="leading-relaxed mb-4">
          UAT is the final testing phase where end users validate the software meets business requirements.
        </p>
        <h3 className="text-xl font-medium mb-3">UAT Process</h3>
        <ol className="list-decimal list-inside space-y-2 ml-4 mb-8">
          <li>Define acceptance criteria</li>
          <li>Create test scenarios</li>
          <li>Execute test cases</li>
          <li>Document results</li>
          <li>Obtain sign-off</li>
        </ol>
      </>
    ),
  },
  "sdlc_deployment": {
    title: "Deployment",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Deployment Phase
        </h2>
        <p className="leading-relaxed mb-4">
          Deployment involves releasing the software to the production environment for end users.
        </p>
        <h3 className="text-xl font-medium mb-3">Deployment Strategies</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Big Bang:</strong> Full deployment at once</li>
          <li><strong>Rolling:</strong> Gradual server updates</li>
          <li><strong>Blue-Green:</strong> Parallel environments</li>
          <li><strong>Canary:</strong> Partial user rollout</li>
          <li><strong>Feature Flags:</strong> Controlled feature release</li>
        </ul>
      </>
    ),
  },
  "sdlc_maintenance": {
    title: "Maintenance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Maintenance Phase
        </h2>
        <p className="leading-relaxed mb-4">
          Maintenance involves ongoing support, bug fixes, and enhancements after deployment.
        </p>
        <h3 className="text-xl font-medium mb-3">Types of Maintenance</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>Corrective:</strong> Bug fixes</li>
          <li><strong>Adaptive:</strong> Environment changes</li>
          <li><strong>Perfective:</strong> Performance improvements</li>
          <li><strong>Preventive:</strong> Future problem prevention</li>
        </ul>
      </>
    ),
  },
  "sdlc_devops": {
    title: "DevOps Integration",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          DevOps Integration
        </h2>
        <p className="leading-relaxed mb-4">
          DevOps bridges development and operations, enabling continuous delivery and faster release cycles.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Practices</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li><strong>CI/CD:</strong> Continuous Integration/Deployment</li>
          <li><strong>Infrastructure as Code:</strong> Automated provisioning</li>
          <li><strong>Monitoring:</strong> Real-time system observability</li>
          <li><strong>Automation:</strong> Reduce manual processes</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Popular Tools</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Jenkins, GitLab CI, GitHub Actions</li>
          <li>Docker, Kubernetes</li>
          <li>Terraform, Ansible</li>
          <li>Prometheus, Grafana</li>
        </ul>
      </>
    ),
  },
  "sdlc_best_practices": {
    title: "Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          SDLC Best Practices
        </h2>
        <h3 className="text-xl font-medium mb-3">General Practices</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Clear and documented requirements</li>
          <li>Regular stakeholder communication</li>
          <li>Version control for all artifacts</li>
          <li>Automated testing and deployment</li>
          <li>Code reviews and pair programming</li>
          <li>Continuous improvement through retrospectives</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Quality Guidelines</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Follow coding standards</li>
          <li>Maintain comprehensive documentation</li>
          <li>Implement security from the start</li>
          <li>Plan for scalability</li>
          <li>Monitor and measure metrics</li>
        </ul>
      </>
    ),
  },
};
