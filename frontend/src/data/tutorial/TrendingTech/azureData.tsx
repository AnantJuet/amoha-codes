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
  { label: "Azure Home", href: "azure_home.asp" },
  { label: "Azure Intro", href: "azure_intro.asp" },
  { label: "Azure Account Setup", href: "azure_account.asp" },
  { label: "Azure AD", href: "azure_ad.asp" },
  { label: "Resource Groups", href: "azure_resource_groups.asp" },
  { label: "Virtual Machines", href: "azure_vms.asp" },
  { label: "App Services", href: "azure_app_services.asp" },
  { label: "Azure Storage", href: "azure_storage.asp" },
  { label: "Azure SQL Database", href: "azure_sql.asp" },
  { label: "Azure Functions", href: "azure_functions.asp" },
  { label: "Logic Apps", href: "azure_logic_apps.asp" },
  { label: "Virtual Networks", href: "azure_vnet.asp" },
  { label: "Load Balancer", href: "azure_load_balancer.asp" },
  { label: "Azure DevOps", href: "azure_devops.asp" },
  { label: "Monitoring", href: "azure_monitoring.asp" },
  { label: "Azure Security", href: "azure_security.asp" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "azure_home.asp": {
    title: "Microsoft Azure Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Learn Microsoft Azure</h2>
        <p className="leading-relaxed mb-4"><strong>Microsoft Azure</strong> is a cloud computing platform with an ever-expanding set of cloud services to help your organization meet business challenges.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Why Learn Azure?</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Second largest cloud provider (~23% market share)</li>
          <li>Strong enterprise integration with Microsoft products</li>
          <li>Hybrid cloud capabilities</li>
          <li>Comprehensive compliance certifications</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Core Azure Services</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Category</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Services</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Compute</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">VMs, App Service, Functions</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Storage</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Blob, Files, Queues</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">SQL Database, Cosmos DB</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Networking</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">VNet, Load Balancer, DNS</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "azure_intro.asp": {
    title: "Introduction to Azure",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is Microsoft Azure?</h2>
        <p className="leading-relaxed mb-4">Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Azure Global Infrastructure</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Regions:</strong> 60+ regions worldwide</li>
          <li><strong>Availability Zones:</strong> Physically separate datacenters</li>
          <li><strong>Geography:</strong> Contains multiple regions</li>
          <li><strong>Edge Zones:</strong> Extensions closer to users</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Azure Portal</h3>
        <p className="leading-relaxed mb-4">The Azure Portal is a web-based unified console for managing Azure resources. It provides a graphical interface to deploy, manage, and monitor everything.</p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <p className="font-medium mb-2">Management Tools:</p>
          <ul className="space-y-1">
            <li>Azure Portal (Web UI)</li>
            <li>Azure CLI</li>
            <li>Azure PowerShell</li>
            <li>Azure Resource Manager (ARM) Templates</li>
          </ul>
        </div>
      </>
    ),
  },
  "azure_account.asp": {
    title: "Azure Account Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Setting Up Azure Account</h2>
        <p className="leading-relaxed mb-4">Create and configure your Azure account to start using cloud services.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Account Types</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Free Account:</strong> $200 credit for 30 days + free services</li>
          <li><strong>Pay-As-You-Go:</strong> Pay only for what you use</li>
          <li><strong>Enterprise Agreement:</strong> For large organizations</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Free Tier Services</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li>750 hours of B1S Windows/Linux VMs</li>
            <li>5GB of Blob storage</li>
            <li>250GB SQL Database</li>
            <li>1 million Azure Functions requests</li>
          </ul>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Azure CLI Setup</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`# Install Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Login to Azure
az login

# Set default subscription
az account set --subscription "My Subscription"`}
          </pre>
        </div>
      </>
    ),
  },
  "azure_ad.asp": {
    title: "Azure Active Directory",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure AD (Entra ID)</h2>
        <p className="leading-relaxed mb-4">Azure Active Directory (now Microsoft Entra ID) is Microsoft's cloud-based identity and access management service.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Key Features</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Single Sign-On:</strong> Access all apps with one login</li>
          <li><strong>Multi-Factor Authentication:</strong> Enhanced security</li>
          <li><strong>Conditional Access:</strong> Policy-based access control</li>
          <li><strong>B2B/B2C:</strong> External identity management</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Azure AD vs On-Premises AD</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Azure AD</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">On-Premises AD</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Protocol</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">SAML, OAuth, OIDC</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Kerberos, LDAP</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Structure</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flat</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Hierarchical (OU)</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Management</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cloud portal</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Server tools</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "azure_resource_groups.asp": {
    title: "Azure Resource Groups",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Resource Groups</h2>
        <p className="leading-relaxed mb-4">A resource group is a container that holds related resources for an Azure solution. It provides a way to manage and organize resources.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Key Concepts</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Every Azure resource must belong to a resource group</li>
          <li>Resources can only be in one resource group</li>
          <li>Resource groups can span regions</li>
          <li>Permissions can be applied at resource group level</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">CLI Commands</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`# Create resource group
az group create --name myResourceGroup --location eastus

# List resource groups
az group list --output table

# Delete resource group
az group delete --name myResourceGroup --yes`}
          </pre>
        </div>
      </>
    ),
  },
  "azure_vms.asp": {
    title: "Azure Virtual Machines",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure Virtual Machines</h2>
        <p className="leading-relaxed mb-4">Azure VMs provide on-demand, scalable computing resources. You can create VMs running Windows or Linux in minutes.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">VM Series</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Series</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">B-series</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Burstable, development</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">D-series</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">General purpose</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">E-series</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Memory optimized</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">F-series</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Compute optimized</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Create VM with CLI</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`az vm create \\
  --resource-group myResourceGroup \\
  --name myVM \\
  --image Ubuntu2204 \\
  --size Standard_B2s \\
  --admin-username azureuser \\
  --generate-ssh-keys`}
          </pre>
        </div>
      </>
    ),
  },
  "azure_app_services.asp": {
    title: "Azure App Services",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure App Service</h2>
        <p className="leading-relaxed mb-4">Azure App Service is a fully managed platform for building, deploying, and scaling web apps without managing infrastructure.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Supported Platforms</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>.NET, .NET Core</li>
          <li>Java, Node.js</li>
          <li>PHP, Python, Ruby</li>
          <li>Custom containers</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">App Service Plans</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tier</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Free/Shared</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Development, limited resources</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Basic</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Dedicated compute, custom domains</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Standard</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Auto-scale, staging slots</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Premium</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enhanced performance, VNet</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "azure_storage.asp": {
    title: "Azure Storage",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure Storage Services</h2>
        <p className="leading-relaxed mb-4">Azure Storage provides highly available, secure, durable, scalable, and redundant storage for data in the cloud.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Storage Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Blob Storage</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unstructured data, images, files</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">File Storage</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">SMB file shares</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Queue Storage</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Message queuing</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Table Storage</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">NoSQL key-value store</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">CLI Commands</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`# Create storage account
az storage account create \\
  --name mystorageaccount \\
  --resource-group myResourceGroup \\
  --location eastus \\
  --sku Standard_LRS

# Upload blob
az storage blob upload \\
  --account-name mystorageaccount \\
  --container-name mycontainer \\
  --name myblob \\
  --file ./localfile.txt`}
          </pre>
        </div>
      </>
    ),
  },
  "azure_sql.asp": {
    title: "Azure SQL Database",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure SQL Database</h2>
        <p className="leading-relaxed mb-4">Azure SQL Database is a fully managed relational database service built on the latest stable version of Microsoft SQL Server.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Deployment Options</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Single Database:</strong> Isolated database with dedicated resources</li>
          <li><strong>Elastic Pool:</strong> Multiple databases sharing resources</li>
          <li><strong>Managed Instance:</strong> Full SQL Server compatibility</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Service Tiers</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tier</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Basic</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Small databases, dev/test</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Standard</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Most production workloads</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Premium</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High-performance requirements</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "azure_functions.asp": {
    title: "Azure Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure Functions</h2>
        <p className="leading-relaxed mb-4">Azure Functions is a serverless compute service that enables you to run event-triggered code without managing infrastructure.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Trigger Types</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>HTTP trigger</li>
          <li>Timer trigger</li>
          <li>Blob storage trigger</li>
          <li>Queue storage trigger</li>
          <li>Event Hub trigger</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Function Example (JavaScript)</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`module.exports = async function (context, req) {
  context.log('HTTP trigger function processed a request.');

  const name = req.query.name || req.body?.name;
  const responseMessage = name
    ? "Hello, " + name + "!"
    : "Hello! Pass a name in the query string.";

  context.res = {
    status: 200,
    body: responseMessage
  };
};`}
          </pre>
        </div>
      </>
    ),
  },
  "azure_logic_apps.asp": {
    title: "Azure Logic Apps",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure Logic Apps</h2>
        <p className="leading-relaxed mb-4">Azure Logic Apps is a cloud platform for creating and running automated workflows that integrate apps, data, services, and systems.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Key Features</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Visual designer for workflow creation</li>
          <li>400+ connectors for integrations</li>
          <li>Built-in triggers and actions</li>
          <li>Enterprise integration capabilities</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Common Connectors</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li><strong>Office 365:</strong> Email, Calendar, OneDrive</li>
            <li><strong>Azure Services:</strong> Blob, SQL, Service Bus</li>
            <li><strong>SaaS:</strong> Salesforce, Twitter, Slack</li>
            <li><strong>On-premises:</strong> SQL Server, File System</li>
          </ul>
        </div>
      </>
    ),
  },
  "azure_vnet.asp": {
    title: "Azure Virtual Networks",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure Virtual Network</h2>
        <p className="leading-relaxed mb-4">Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">VNet Components</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Subnets:</strong> Segment VNet address space</li>
          <li><strong>Network Security Groups:</strong> Filter traffic</li>
          <li><strong>Route Tables:</strong> Control traffic routing</li>
          <li><strong>VNet Peering:</strong> Connect VNets</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Create VNet with CLI</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`# Create VNet
az network vnet create \\
  --resource-group myResourceGroup \\
  --name myVNet \\
  --address-prefix 10.0.0.0/16 \\
  --subnet-name mySubnet \\
  --subnet-prefix 10.0.1.0/24`}
          </pre>
        </div>
      </>
    ),
  },
  "azure_load_balancer.asp": {
    title: "Azure Load Balancer",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure Load Balancer</h2>
        <p className="leading-relaxed mb-4">Azure Load Balancer distributes inbound flows from the load balancer's frontend to backend pool instances.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Load Balancer Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Public</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Internet-facing load balancer</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Internal</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Private load balancer within VNet</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">SKU Comparison</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Basic:</strong> Up to 300 instances, free</li>
          <li><strong>Standard:</strong> Up to 1000 instances, zone-redundant</li>
        </ul>
      </>
    ),
  },
  "azure_devops.asp": {
    title: "Azure DevOps",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure DevOps Services</h2>
        <p className="leading-relaxed mb-4">Azure DevOps provides developer services for support teams to plan work, collaborate on code development, and build and deploy applications.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Azure DevOps Services</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Azure Boards:</strong> Agile planning and tracking</li>
          <li><strong>Azure Repos:</strong> Git repositories</li>
          <li><strong>Azure Pipelines:</strong> CI/CD pipelines</li>
          <li><strong>Azure Test Plans:</strong> Testing tools</li>
          <li><strong>Azure Artifacts:</strong> Package management</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Pipeline Example (YAML)</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: NodeTool@0
    inputs:
      versionSpec: '18.x'

  - script: npm install
    displayName: 'Install dependencies'

  - script: npm run build
    displayName: 'Build application'

  - script: npm test
    displayName: 'Run tests'`}
          </pre>
        </div>
      </>
    ),
  },
  "azure_monitoring.asp": {
    title: "Azure Monitoring",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure Monitor</h2>
        <p className="leading-relaxed mb-4">Azure Monitor helps you maximize the availability and performance of your applications and services by collecting, analyzing, and acting on telemetry data.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Monitoring Components</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Metrics:</strong> Numerical data about resources</li>
          <li><strong>Logs:</strong> Event and diagnostic data</li>
          <li><strong>Alerts:</strong> Proactive notifications</li>
          <li><strong>Application Insights:</strong> Application performance monitoring</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Log Analytics Query</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`// Find errors in the last hour
AzureDiagnostics
| where TimeGenerated > ago(1h)
| where Level == "Error"
| summarize count() by Resource
| order by count_ desc`}
          </pre>
        </div>
      </>
    ),
  },
  "azure_security.asp": {
    title: "Azure Security",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Azure Security</h2>
        <p className="leading-relaxed mb-4">Azure provides comprehensive security features to protect your data, applications, and infrastructure.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Security Services</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Microsoft Defender for Cloud:</strong> Security posture management</li>
          <li><strong>Azure Key Vault:</strong> Secrets and key management</li>
          <li><strong>Azure DDoS Protection:</strong> DDoS attack mitigation</li>
          <li><strong>Azure Firewall:</strong> Network security</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Security Best Practices</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li>Enable MFA for all users</li>
            <li>Use Azure Policy for governance</li>
            <li>Encrypt data at rest and in transit</li>
            <li>Implement network segmentation</li>
            <li>Regular security assessments</li>
            <li>Use managed identities</li>
          </ul>
        </div>
      </>
    ),
  },
};
