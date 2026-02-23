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
  { label: "Cloud Home", href: "cloud_home.asp" },
  { label: "Cloud Intro", href: "cloud_intro.asp" },
  { label: "Cloud History", href: "cloud_history.asp" },
  {
    label: "Service Models",
    href: "cloud_service_models.asp",
    isHeader: true,
    children: [
      { label: "IaaS", href: "cloud_iaas.asp" },
      { label: "PaaS", href: "cloud_paas.asp" },
      { label: "SaaS", href: "cloud_saas.asp" },
    ],
  },
  {
    label: "Deployment Models",
    href: "cloud_deployment.asp",
    isHeader: true,
    children: [
      { label: "Public Cloud", href: "cloud_public.asp" },
      { label: "Private Cloud", href: "cloud_private.asp" },
      { label: "Hybrid Cloud", href: "cloud_hybrid.asp" },
    ],
  },
  { label: "Virtualization", href: "cloud_virtualization.asp" },
  { label: "Containers", href: "cloud_containers.asp" },
  { label: "Cloud Storage", href: "cloud_storage.asp" },
  { label: "Cloud Databases", href: "cloud_databases.asp" },
  { label: "Cloud Networking", href: "cloud_networking.asp" },
  { label: "Cloud Security", href: "cloud_security.asp" },
  { label: "Cost Management", href: "cloud_cost.asp" },
  { label: "Best Practices", href: "cloud_best_practices.asp" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "cloud_home.asp": {
    title: "Cloud Computing Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Learn Cloud Computing</h2>
        <p className="leading-relaxed mb-4"><strong>Cloud Computing</strong> is the delivery of computing services over the internet, including servers, storage, databases, networking, software, and analytics.</p>
        <p className="leading-relaxed mb-4">Cloud computing enables organizations to access technology resources on-demand without owning physical infrastructure.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Why Learn Cloud Computing?</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>High demand for cloud professionals in the job market</li>
          <li>Cost-effective IT infrastructure management</li>
          <li>Scalability and flexibility for businesses</li>
          <li>Foundation for modern DevOps practices</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Major Cloud Providers</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Provider</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Market Share</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">AWS</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">~32%</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Microsoft Azure</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">~23%</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Google Cloud</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">~10%</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "cloud_intro.asp": {
    title: "Introduction to Cloud Computing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is Cloud Computing?</h2>
        <p className="leading-relaxed mb-4">Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services on an as-needed basis.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Key Characteristics</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>On-demand self-service:</strong> Provision resources automatically without human intervention</li>
          <li><strong>Broad network access:</strong> Available over the network via standard mechanisms</li>
          <li><strong>Resource pooling:</strong> Provider resources are pooled to serve multiple consumers</li>
          <li><strong>Rapid elasticity:</strong> Capabilities can be scaled rapidly</li>
          <li><strong>Measured service:</strong> Resource usage is monitored and billed accordingly</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Benefits of Cloud Computing</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li><strong>Cost Savings:</strong> No upfront capital expenditure</li>
            <li><strong>Scalability:</strong> Scale up or down based on demand</li>
            <li><strong>Reliability:</strong> Data backup and disaster recovery</li>
            <li><strong>Performance:</strong> Regular upgrades to latest hardware</li>
            <li><strong>Security:</strong> Robust security policies and technologies</li>
          </ul>
        </div>
      </>
    ),
  },
  "cloud_history.asp": {
    title: "History of Cloud Computing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Evolution of Cloud Computing</h2>
        <p className="leading-relaxed mb-4">The concept of cloud computing dates back to the 1960s when computer scientist John McCarthy suggested that computation could be organized as a public utility.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Timeline</h3>
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-purple-500 pl-4"><strong>1960s:</strong> Concept of time-sharing and utility computing introduced</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>1999:</strong> Salesforce pioneers delivering enterprise applications via the web</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>2002:</strong> Amazon Web Services (AWS) launches</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>2006:</strong> AWS introduces EC2 and S3</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>2008:</strong> Google App Engine launched</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>2010:</strong> Microsoft Azure becomes generally available</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>2011:</strong> IBM SmartCloud launched</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>2013:</strong> Docker revolutionizes containerization</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>2014:</strong> Kubernetes released by Google</div>
          <div className="border-l-4 border-purple-500 pl-4"><strong>2020s:</strong> Multi-cloud and edge computing become mainstream</div>
        </div>
      </>
    ),
  },
  "cloud_service_models.asp": {
    title: "Cloud Service Models",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Understanding Service Models</h2>
        <p className="leading-relaxed mb-4">Cloud computing services are typically categorized into three main service models, often referred to as the cloud computing stack.</p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Model</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">IaaS</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Infrastructure as a Service</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">AWS EC2, Azure VMs</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">PaaS</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Platform as a Service</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Heroku, Google App Engine</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">SaaS</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Software as a Service</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Gmail, Salesforce</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "cloud_iaas.asp": {
    title: "Infrastructure as a Service (IaaS)",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is IaaS?</h2>
        <p className="leading-relaxed mb-4">IaaS provides virtualized computing resources over the internet. It offers the highest level of flexibility and management control over IT resources.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">IaaS Components</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Virtual machines and servers</li>
          <li>Storage (block, file, object)</li>
          <li>Networking (VPCs, load balancers)</li>
          <li>Firewalls and security groups</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Popular IaaS Providers</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li><strong>AWS EC2:</strong> Elastic Compute Cloud</li>
            <li><strong>Azure VMs:</strong> Virtual Machines</li>
            <li><strong>Google Compute Engine:</strong> GCE</li>
            <li><strong>DigitalOcean:</strong> Droplets</li>
          </ul>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Use Cases</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Website hosting and web applications</li>
          <li>High-performance computing</li>
          <li>Big data analysis</li>
          <li>Development and testing environments</li>
        </ul>
      </>
    ),
  },
  "cloud_paas.asp": {
    title: "Platform as a Service (PaaS)",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is PaaS?</h2>
        <p className="leading-relaxed mb-4">PaaS provides a platform allowing customers to develop, run, and manage applications without dealing with the infrastructure.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">PaaS Features</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Development frameworks and tools</li>
          <li>Database management systems</li>
          <li>Business analytics</li>
          <li>Operating systems</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Popular PaaS Providers</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li><strong>Heroku:</strong> Application deployment platform</li>
            <li><strong>Google App Engine:</strong> Serverless application platform</li>
            <li><strong>AWS Elastic Beanstalk:</strong> Application deployment service</li>
            <li><strong>Azure App Service:</strong> Web app hosting</li>
          </ul>
        </div>
      </>
    ),
  },
  "cloud_saas.asp": {
    title: "Software as a Service (SaaS)",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is SaaS?</h2>
        <p className="leading-relaxed mb-4">SaaS delivers software applications over the internet on a subscription basis. Users access software from web browsers without installing it locally.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">SaaS Characteristics</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Accessible from any device with internet</li>
          <li>Automatic updates and patches</li>
          <li>Subscription-based pricing</li>
          <li>Multi-tenancy architecture</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Popular SaaS Examples</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Category</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Email</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Gmail, Outlook</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">CRM</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Salesforce, HubSpot</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Collaboration</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Slack, Microsoft Teams</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Storage</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Dropbox, Google Drive</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "cloud_deployment.asp": {
    title: "Cloud Deployment Models",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Types of Cloud Deployment</h2>
        <p className="leading-relaxed mb-4">Cloud deployment models define how cloud infrastructure is accessed and who has control over it.</p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Model</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Public</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shared infrastructure</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Startups, variable workloads</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Private</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Dedicated infrastructure</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enterprises, compliance</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Hybrid</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mix of both</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flexible requirements</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "cloud_public.asp": {
    title: "Public Cloud",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is Public Cloud?</h2>
        <p className="leading-relaxed mb-4">Public cloud is owned and operated by third-party providers who deliver computing resources over the internet. Resources are shared among multiple customers.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Advantages</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>No capital expenditure</li>
          <li>Pay-as-you-go pricing</li>
          <li>Unlimited scalability</li>
          <li>High reliability</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Considerations</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Limited control over infrastructure</li>
          <li>Potential security concerns</li>
          <li>Compliance requirements</li>
        </ul>
      </>
    ),
  },
  "cloud_private.asp": {
    title: "Private Cloud",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is Private Cloud?</h2>
        <p className="leading-relaxed mb-4">Private cloud computing resources are used exclusively by a single organization. It can be physically located at the organization's on-site datacenter or hosted by a third-party service provider.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Advantages</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Enhanced security and privacy</li>
          <li>Greater control over resources</li>
          <li>Customization options</li>
          <li>Compliance management</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Private Cloud Solutions</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li><strong>VMware vSphere:</strong> Enterprise virtualization platform</li>
            <li><strong>OpenStack:</strong> Open-source cloud platform</li>
            <li><strong>Microsoft Azure Stack:</strong> Hybrid cloud solution</li>
          </ul>
        </div>
      </>
    ),
  },
  "cloud_hybrid.asp": {
    title: "Hybrid Cloud",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is Hybrid Cloud?</h2>
        <p className="leading-relaxed mb-4">Hybrid cloud combines public and private clouds, allowing data and applications to be shared between them. It provides greater flexibility and optimization.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Benefits</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Flexibility and scalability</li>
          <li>Cost optimization</li>
          <li>Better resource allocation</li>
          <li>Business continuity</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Use Cases</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Cloud bursting for peak loads</li>
          <li>Development and testing</li>
          <li>Disaster recovery</li>
          <li>Data processing and analytics</li>
        </ul>
      </>
    ),
  },
  "cloud_virtualization.asp": {
    title: "Cloud Virtualization",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Understanding Virtualization</h2>
        <p className="leading-relaxed mb-4">Virtualization is the foundation of cloud computing. It creates virtual versions of computing resources like servers, storage, and networks.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Types of Virtualization</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Server</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multiple VMs on single physical server</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Storage</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pool physical storage from multiple devices</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Network</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Virtual networks independent of hardware</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Desktop</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Virtual desktop environments</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Hypervisors</h3>
        <p className="leading-relaxed mb-4">A hypervisor is software that creates and manages virtual machines.</p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Type 1 (Bare-metal):</strong> VMware ESXi, Microsoft Hyper-V</li>
          <li><strong>Type 2 (Hosted):</strong> VirtualBox, VMware Workstation</li>
        </ul>
      </>
    ),
  },
  "cloud_containers.asp": {
    title: "Containers in Cloud",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Container Technology</h2>
        <p className="leading-relaxed mb-4">Containers package applications with their dependencies, making them portable and consistent across different environments.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Containers vs VMs</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Aspect</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Containers</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">VMs</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Size</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Megabytes</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Gigabytes</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Startup</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Seconds</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Minutes</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">OS</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shares host OS</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full OS per VM</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Docker Example</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap">
{`# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Container Orchestration</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Kubernetes:</strong> Industry-standard container orchestration</li>
          <li><strong>Docker Swarm:</strong> Native Docker clustering</li>
          <li><strong>Amazon ECS:</strong> AWS container service</li>
        </ul>
      </>
    ),
  },
  "cloud_storage.asp": {
    title: "Cloud Storage",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Cloud Storage Types</h2>
        <p className="leading-relaxed mb-4">Cloud storage provides scalable and durable data storage solutions accessible over the internet.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Storage Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Object</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unstructured data, backups</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">S3, Azure Blob</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Block</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Databases, VMs</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">EBS, Azure Disk</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">File</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shared file systems</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">EFS, Azure Files</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Storage Classes</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Hot:</strong> Frequently accessed data</li>
          <li><strong>Cool:</strong> Infrequently accessed data</li>
          <li><strong>Archive:</strong> Rarely accessed, long-term retention</li>
        </ul>
      </>
    ),
  },
  "cloud_databases.asp": {
    title: "Cloud Databases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Database Services</h2>
        <p className="leading-relaxed mb-4">Cloud databases are managed database services that handle infrastructure, maintenance, and scaling automatically.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Database Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Best For</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Services</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Relational</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Structured data, ACID</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">RDS, Azure SQL</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">NoSQL</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flexible schema</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">DynamoDB, Cosmos DB</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">In-Memory</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Caching, real-time</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">ElastiCache, Redis</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "cloud_networking.asp": {
    title: "Cloud Networking",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Networking in the Cloud</h2>
        <p className="leading-relaxed mb-4">Cloud networking enables communication between cloud resources and connects cloud infrastructure to on-premises systems.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Key Concepts</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>VPC:</strong> Virtual Private Cloud - isolated network environment</li>
          <li><strong>Subnets:</strong> Subdivisions of VPC IP ranges</li>
          <li><strong>Security Groups:</strong> Virtual firewalls for instances</li>
          <li><strong>Load Balancers:</strong> Distribute traffic across resources</li>
          <li><strong>CDN:</strong> Content Delivery Network for edge caching</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Network Architecture</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <pre className="font-mono text-sm">
{`VPC (10.0.0.0/16)
├── Public Subnet (10.0.1.0/24)
│   ├── Load Balancer
│   └── NAT Gateway
└── Private Subnet (10.0.2.0/24)
    ├── Application Servers
    └── Database Servers`}
          </pre>
        </div>
      </>
    ),
  },
  "cloud_security.asp": {
    title: "Cloud Security",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Security in the Cloud</h2>
        <p className="leading-relaxed mb-4">Cloud security encompasses the policies, technologies, and controls that protect cloud-based systems, data, and infrastructure.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Shared Responsibility Model</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Provider Responsibility</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Customer Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Physical security</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data encryption</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Network infrastructure</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Access management</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Hypervisor security</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Application security</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Security Best Practices</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Implement IAM with least privilege</li>
          <li>Enable encryption at rest and in transit</li>
          <li>Use multi-factor authentication</li>
          <li>Regular security audits and monitoring</li>
          <li>Implement network segmentation</li>
        </ul>
      </>
    ),
  },
  "cloud_cost.asp": {
    title: "Cloud Cost Management",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Managing Cloud Costs</h2>
        <p className="leading-relaxed mb-4">Effective cost management is crucial for optimizing cloud spending and maximizing ROI.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Pricing Models</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>On-Demand:</strong> Pay for what you use</li>
          <li><strong>Reserved:</strong> Commit for 1-3 years for discounts</li>
          <li><strong>Spot/Preemptible:</strong> Bid for unused capacity</li>
          <li><strong>Savings Plans:</strong> Flexible commitment discounts</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Cost Optimization Strategies</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Right-size resources based on actual usage</li>
          <li>Use auto-scaling to match demand</li>
          <li>Implement tagging for cost allocation</li>
          <li>Schedule non-production workloads</li>
          <li>Monitor and set budget alerts</li>
        </ul>
      </>
    ),
  },
  "cloud_best_practices.asp": {
    title: "Cloud Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Cloud Architecture Best Practices</h2>
        <p className="leading-relaxed mb-4">Following best practices ensures reliable, secure, and cost-effective cloud deployments.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Well-Architected Pillars</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Operational Excellence:</strong> Run and monitor systems</li>
          <li><strong>Security:</strong> Protect data and systems</li>
          <li><strong>Reliability:</strong> Recover from failures</li>
          <li><strong>Performance:</strong> Use resources efficiently</li>
          <li><strong>Cost Optimization:</strong> Avoid unnecessary costs</li>
          <li><strong>Sustainability:</strong> Minimize environmental impact</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Key Recommendations</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Design for failure and implement redundancy</li>
          <li>Automate infrastructure with IaC</li>
          <li>Implement comprehensive monitoring</li>
          <li>Use managed services when possible</li>
          <li>Follow the principle of least privilege</li>
          <li>Document architecture decisions</li>
        </ul>
      </>
    ),
  },
};
