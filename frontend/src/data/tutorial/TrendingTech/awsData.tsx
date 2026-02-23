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
  { label: "AWS Home", href: "aws_home.asp" },
  { label: "AWS Intro", href: "aws_intro.asp" },
  { label: "AWS Account Setup", href: "aws_account.asp" },
  { label: "AWS IAM", href: "aws_iam.asp" },
  { label: "AWS EC2", href: "aws_ec2.asp" },
  { label: "AWS S3", href: "aws_s3.asp" },
  { label: "AWS VPC", href: "aws_vpc.asp" },
  { label: "AWS Route 53", href: "aws_route53.asp" },
  { label: "AWS RDS", href: "aws_rds.asp" },
  { label: "AWS DynamoDB", href: "aws_dynamodb.asp" },
  { label: "AWS Lambda", href: "aws_lambda.asp" },
  { label: "AWS API Gateway", href: "aws_apigateway.asp" },
  { label: "AWS CloudFormation", href: "aws_cloudformation.asp" },
  { label: "AWS Elastic Beanstalk", href: "aws_elasticbeanstalk.asp" },
  { label: "AWS CloudWatch", href: "aws_cloudwatch.asp" },
  { label: "AWS CloudTrail", href: "aws_cloudtrail.asp" },
  { label: "AWS Best Practices", href: "aws_best_practices.asp" },
  { label: "AWS Pricing", href: "aws_pricing.asp" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "aws_home.asp": {
    title: "AWS Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Learn Amazon Web Services</h2>
        <p className="leading-relaxed mb-4"><strong>Amazon Web Services (AWS)</strong> is the world's most comprehensive and widely adopted cloud platform, offering over 200 fully featured services from data centers globally.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Why Learn AWS?</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Market leader with ~32% cloud market share</li>
          <li>Most extensive service offerings</li>
          <li>High demand for AWS-certified professionals</li>
          <li>Used by millions of customers worldwide</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Core AWS Services</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Category</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Services</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Compute</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">EC2, Lambda, ECS</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Storage</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">S3, EBS, EFS</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">RDS, DynamoDB, Aurora</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Networking</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">VPC, Route 53, CloudFront</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "aws_intro.asp": {
    title: "Introduction to AWS",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">What is AWS?</h2>
        <p className="leading-relaxed mb-4">Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments on a metered pay-as-you-go basis.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">AWS Global Infrastructure</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Regions:</strong> Geographical areas with multiple data centers</li>
          <li><strong>Availability Zones:</strong> Isolated locations within regions</li>
          <li><strong>Edge Locations:</strong> CDN endpoints for CloudFront</li>
          <li><strong>Local Zones:</strong> Extensions of regions closer to users</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">AWS Management Console</h3>
        <p className="leading-relaxed mb-4">The AWS Management Console is a web-based interface for accessing and managing AWS services. It provides a simple graphical interface for most AWS functions.</p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <p className="font-medium mb-2">Access Methods:</p>
          <ul className="space-y-1">
            <li>AWS Management Console (Web UI)</li>
            <li>AWS CLI (Command Line Interface)</li>
            <li>AWS SDKs (Software Development Kits)</li>
            <li>AWS CloudFormation (Infrastructure as Code)</li>
          </ul>
        </div>
      </>
    ),
  },
  "aws_account.asp": {
    title: "AWS Account Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Setting Up Your AWS Account</h2>
        <p className="leading-relaxed mb-4">Follow these steps to create and configure your AWS account for secure and efficient use.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Account Creation Steps</h3>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Go to aws.amazon.com and click "Create an AWS Account"</li>
          <li>Enter your email address and create a password</li>
          <li>Provide contact information</li>
          <li>Enter payment information (credit card required)</li>
          <li>Verify your identity via phone</li>
          <li>Select a support plan (Free tier available)</li>
        </ol>
        <h3 className="text-xl font-medium mb-3 mt-8">Post-Setup Security</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li>Enable MFA on root account</li>
            <li>Create IAM users instead of using root</li>
            <li>Set up billing alerts</li>
            <li>Configure AWS Organizations for multiple accounts</li>
          </ul>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">AWS Free Tier</h3>
        <p className="leading-relaxed mb-4">AWS offers a free tier that includes:</p>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>750 hours/month of EC2 t2.micro</li>
          <li>5GB of S3 standard storage</li>
          <li>25GB of DynamoDB storage</li>
          <li>1 million Lambda requests/month</li>
        </ul>
      </>
    ),
  },
  "aws_iam.asp": {
    title: "AWS IAM",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Identity and Access Management</h2>
        <p className="leading-relaxed mb-4">AWS IAM enables you to manage access to AWS services and resources securely. You can create and manage AWS users and groups, and use permissions to allow and deny access.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">IAM Components</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Component</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Users</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Individual identities with credentials</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Groups</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Collection of users</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Roles</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Temporary credentials for services</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Policies</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">JSON documents defining permissions</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">IAM Policy Example</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}`}
          </pre>
        </div>
      </>
    ),
  },
  "aws_ec2.asp": {
    title: "AWS EC2",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Elastic Compute Cloud</h2>
        <p className="leading-relaxed mb-4">Amazon EC2 provides scalable computing capacity in the AWS cloud. It eliminates the need to invest in hardware upfront, allowing you to develop and deploy applications faster.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">EC2 Instance Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">t3/t3a</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">General purpose, burstable</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">m5/m6i</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">General purpose, balanced</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">c5/c6i</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Compute optimized</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">r5/r6i</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Memory optimized</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Launch EC2 via CLI</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`aws ec2 run-instances \\
  --image-id ami-0c55b159cbfafe1f0 \\
  --instance-type t3.micro \\
  --key-name my-key-pair \\
  --security-group-ids sg-12345678 \\
  --subnet-id subnet-12345678`}
          </pre>
        </div>
      </>
    ),
  },
  "aws_s3.asp": {
    title: "AWS S3",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Simple Storage Service</h2>
        <p className="leading-relaxed mb-4">Amazon S3 is object storage built to store and retrieve any amount of data from anywhere. It offers industry-leading durability, availability, and scalability.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">S3 Storage Classes</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Class</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Standard</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Frequently accessed data</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Intelligent-Tiering</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unknown access patterns</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Glacier</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Long-term archive</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">S3 CLI Commands</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`# Create bucket
aws s3 mb s3://my-bucket-name

# Upload file
aws s3 cp file.txt s3://my-bucket-name/

# List objects
aws s3 ls s3://my-bucket-name/

# Sync directory
aws s3 sync ./local-dir s3://my-bucket-name/`}
          </pre>
        </div>
      </>
    ),
  },
  "aws_vpc.asp": {
    title: "AWS VPC",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Virtual Private Cloud</h2>
        <p className="leading-relaxed mb-4">Amazon VPC lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">VPC Components</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Subnets:</strong> Range of IP addresses in your VPC</li>
          <li><strong>Route Tables:</strong> Rules for network traffic direction</li>
          <li><strong>Internet Gateway:</strong> Enables internet access</li>
          <li><strong>NAT Gateway:</strong> Enables outbound internet for private subnets</li>
          <li><strong>Security Groups:</strong> Virtual firewall for instances</li>
          <li><strong>Network ACLs:</strong> Firewall at subnet level</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">VPC Architecture</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <pre className="font-mono text-sm">
{`VPC: 10.0.0.0/16
├── Public Subnet: 10.0.1.0/24
│   └── Internet Gateway attached
├── Private Subnet: 10.0.2.0/24
│   └── NAT Gateway for outbound
└── Database Subnet: 10.0.3.0/24
    └── No internet access`}
          </pre>
        </div>
      </>
    ),
  },
  "aws_route53.asp": {
    title: "AWS Route 53",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Route 53 DNS Service</h2>
        <p className="leading-relaxed mb-4">Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Routing Policies</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Policy</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Single resource</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Weighted</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Distribute traffic by weight</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Latency</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Route to lowest latency</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Failover</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Active-passive failover</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Geolocation</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Route by user location</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "aws_rds.asp": {
    title: "AWS RDS",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Relational Database Service</h2>
        <p className="leading-relaxed mb-4">Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Supported Engines</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Amazon Aurora (MySQL/PostgreSQL compatible)</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MariaDB</li>
          <li>Oracle</li>
          <li>Microsoft SQL Server</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">RDS Features</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg mb-6">
          <ul className="space-y-2">
            <li><strong>Multi-AZ:</strong> Synchronous replication for high availability</li>
            <li><strong>Read Replicas:</strong> Asynchronous replication for read scaling</li>
            <li><strong>Automated Backups:</strong> Point-in-time recovery</li>
            <li><strong>Encryption:</strong> At-rest and in-transit encryption</li>
          </ul>
        </div>
      </>
    ),
  },
  "aws_dynamodb.asp": {
    title: "AWS DynamoDB",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">DynamoDB NoSQL Database</h2>
        <p className="leading-relaxed mb-4">Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Key Concepts</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Tables:</strong> Collection of items</li>
          <li><strong>Items:</strong> Group of attributes (like rows)</li>
          <li><strong>Attributes:</strong> Data elements (like columns)</li>
          <li><strong>Primary Key:</strong> Partition key + optional sort key</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">DynamoDB Operations</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`# Create table
aws dynamodb create-table \\
  --table-name Users \\
  --attribute-definitions \\
    AttributeName=userId,AttributeType=S \\
  --key-schema AttributeName=userId,KeyType=HASH \\
  --billing-mode PAY_PER_REQUEST`}
          </pre>
        </div>
      </>
    ),
  },
  "aws_lambda.asp": {
    title: "AWS Lambda",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Serverless Computing</h2>
        <p className="leading-relaxed mb-4">AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Lambda Features</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Automatic scaling</li>
          <li>Pay per request and compute time</li>
          <li>Supports multiple languages</li>
          <li>Integrates with other AWS services</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">Lambda Function Example</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`// Node.js Lambda handler
exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda!'
    })
  };

  return response;
};`}
          </pre>
        </div>
      </>
    ),
  },
  "aws_apigateway.asp": {
    title: "AWS API Gateway",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">API Gateway</h2>
        <p className="leading-relaxed mb-4">Amazon API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing APIs at any scale.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">API Types</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">REST API</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full-featured REST APIs</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HTTP API</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Low-latency, cost-effective</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">WebSocket</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Real-time two-way communication</td></tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  "aws_cloudformation.asp": {
    title: "AWS CloudFormation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Infrastructure as Code</h2>
        <p className="leading-relaxed mb-4">AWS CloudFormation lets you model and provision AWS resources using templates. It enables you to use a simple text file to automate infrastructure deployment.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Template Example</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`AWSTemplateFormatVersion: '2010-09-09'
Description: Simple EC2 Instance

Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0c55b159cbfafe1f0
      InstanceType: t3.micro
      Tags:
        - Key: Name
          Value: MyInstance`}
          </pre>
        </div>
      </>
    ),
  },
  "aws_elasticbeanstalk.asp": {
    title: "AWS Elastic Beanstalk",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Elastic Beanstalk PaaS</h2>
        <p className="leading-relaxed mb-4">AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications. Simply upload your code and Elastic Beanstalk handles deployment.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Supported Platforms</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Node.js, Python, Ruby, Java</li>
          <li>.NET, PHP, Go</li>
          <li>Docker containers</li>
        </ul>
        <h3 className="text-xl font-medium mb-3 mt-8">EB CLI Commands</h3>
        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
{`# Initialize application
eb init my-app --platform node.js

# Create environment
eb create my-env

# Deploy changes
eb deploy

# View logs
eb logs`}
          </pre>
        </div>
      </>
    ),
  },
  "aws_cloudwatch.asp": {
    title: "AWS CloudWatch",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Monitoring with CloudWatch</h2>
        <p className="leading-relaxed mb-4">Amazon CloudWatch monitors AWS resources and applications in real-time. It collects metrics, logs, and events.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">CloudWatch Features</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Metrics:</strong> Monitor resource utilization</li>
          <li><strong>Logs:</strong> Centralized log management</li>
          <li><strong>Alarms:</strong> Automated actions on thresholds</li>
          <li><strong>Dashboards:</strong> Visualize metrics</li>
        </ul>
      </>
    ),
  },
  "aws_cloudtrail.asp": {
    title: "AWS CloudTrail",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Auditing with CloudTrail</h2>
        <p className="leading-relaxed mb-4">AWS CloudTrail records AWS API calls for your account. It provides event history of AWS account activity for governance, compliance, and auditing.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">CloudTrail Benefits</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Track user activity and API usage</li>
          <li>Compliance and security analysis</li>
          <li>Operational troubleshooting</li>
          <li>Integration with CloudWatch Logs</li>
        </ul>
      </>
    ),
  },
  "aws_best_practices.asp": {
    title: "AWS Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">AWS Well-Architected Framework</h2>
        <p className="leading-relaxed mb-4">Follow AWS best practices to build secure, high-performing, resilient, and efficient infrastructure.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Six Pillars</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Operational Excellence:</strong> Run and monitor systems</li>
          <li><strong>Security:</strong> Protect data and systems</li>
          <li><strong>Reliability:</strong> Recover from failures</li>
          <li><strong>Performance Efficiency:</strong> Use resources efficiently</li>
          <li><strong>Cost Optimization:</strong> Avoid unnecessary costs</li>
          <li><strong>Sustainability:</strong> Minimize environmental impact</li>
        </ul>
      </>
    ),
  },
  "aws_pricing.asp": {
    title: "AWS Pricing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">Understanding AWS Pricing</h2>
        <p className="leading-relaxed mb-4">AWS uses a pay-as-you-go pricing model. Understand the different pricing options to optimize costs.</p>
        <h3 className="text-xl font-medium mb-3 mt-8">Pricing Models</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Model</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Savings</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Commitment</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">On-Demand</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">0%</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">None</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Reserved</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Up to 72%</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1-3 years</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Spot</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Up to 90%</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">None</td></tr>
              <tr><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Savings Plans</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Up to 72%</td><td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1-3 years</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-medium mb-3 mt-8">Cost Management Tools</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>AWS Cost Explorer</li>
          <li>AWS Budgets</li>
          <li>AWS Cost and Usage Reports</li>
          <li>AWS Trusted Advisor</li>
        </ul>
      </>
    ),
  },
};
