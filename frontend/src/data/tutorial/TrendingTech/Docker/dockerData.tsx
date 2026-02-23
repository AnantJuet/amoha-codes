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
  { label: "Docker Home", href: "docker_home" },
  { label: "Docker Intro", href: "docker_intro" },
  { label: "Docker Installation", href: "docker_installation" },
  {
    label: "Images & Containers",
    href: "docker_images",
    isHeader: true,
    children: [
      { label: "Docker Images", href: "docker_images_basics" },
      { label: "Docker Containers", href: "docker_containers" },
      { label: "Dockerfile", href: "docker_dockerfile" },
      { label: "Building Images", href: "docker_build" },
    ],
  },
  {
    label: "Container Management",
    href: "docker_management",
    isHeader: true,
    children: [
      { label: "Run Containers", href: "docker_run" },
      { label: "Container Lifecycle", href: "docker_lifecycle" },
      { label: "Exec & Attach", href: "docker_exec" },
      { label: "Logs & Inspect", href: "docker_logs" },
    ],
  },
  {
    label: "Networking",
    href: "docker_networking",
    isHeader: true,
    children: [
      { label: "Network Basics", href: "docker_network_basics" },
      { label: "Network Types", href: "docker_network_types" },
      { label: "Port Mapping", href: "docker_ports" },
    ],
  },
  {
    label: "Storage",
    href: "docker_storage",
    isHeader: true,
    children: [
      { label: "Volumes", href: "docker_volumes" },
      { label: "Bind Mounts", href: "docker_bind_mounts" },
      { label: "tmpfs Mounts", href: "docker_tmpfs" },
    ],
  },
  { label: "Docker Compose", href: "docker_compose" },
  { label: "Docker Hub", href: "docker_hub" },
  { label: "Docker Registry", href: "docker_registry" },
  { label: "Best Practices", href: "docker_best_practices" },
  { label: "Security", href: "docker_security" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "docker_home": {
    title: "Docker Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Learn Docker
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Docker</strong> is a platform for developing, shipping, and running applications in containers.
        </p>
        <p className="leading-relaxed mb-4">
          Containers allow you to package an application with all its dependencies and run it consistently across different environments.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">What You Will Learn</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Docker fundamentals and architecture</li>
          <li>Working with images and containers</li>
          <li>Writing Dockerfiles</li>
          <li>Docker networking and volumes</li>
          <li>Docker Compose for multi-container apps</li>
          <li>Best practices and security</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Example: Running Your First Container</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Run a simple hello-world container
docker run hello-world

# Run an interactive Ubuntu container
docker run -it ubuntu bash

# Run nginx web server
docker run -d -p 80:80 nginx`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_intro": {
    title: "Introduction to Docker",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          What is Docker?
        </h2>
        <p className="leading-relaxed mb-4">
          Docker is an open-source platform that automates the deployment of applications inside lightweight, portable containers.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Containers vs Virtual Machines</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Containers</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Virtual Machines</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Start Time</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Seconds</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Minutes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Size</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">MBs</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">GBs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">OS</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shared kernel</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full OS</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Isolation</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Process level</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Hardware level</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Docker Architecture</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Docker Daemon:</strong> Background service managing containers</li>
          <li><strong>Docker Client:</strong> CLI tool to interact with Docker</li>
          <li><strong>Docker Registry:</strong> Storage for Docker images</li>
          <li><strong>Docker Objects:</strong> Images, containers, networks, volumes</li>
        </ul>
      </>
    ),
  },

  "docker_installation": {
    title: "Docker Installation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Installing Docker
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Windows Installation</h3>
        <ol className="list-decimal list-inside ml-4 mb-4 space-y-2">
          <li>Download Docker Desktop from docker.com</li>
          <li>Run the installer</li>
          <li>Enable WSL 2 if prompted</li>
          <li>Restart your computer</li>
          <li>Start Docker Desktop</li>
        </ol>

        <h3 className="text-xl font-medium mb-3 mt-8">macOS Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using Homebrew
brew install --cask docker

# Or download Docker Desktop from docker.com`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Linux Installation (Ubuntu)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Update packages
sudo apt-get update

# Install prerequisites
sudo apt-get install ca-certificates curl gnupg

# Add Docker's GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Add repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Verify Installation</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`docker --version
# Docker version 24.0.7, build afdd53b

docker run hello-world`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_images_basics": {
    title: "Docker Images",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Images
        </h2>
        <p className="leading-relaxed mb-4">
          A Docker image is a read-only template containing instructions for creating a container.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Image Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List images
docker images
docker image ls

# Pull an image
docker pull nginx
docker pull nginx:1.25

# Search for images
docker search ubuntu

# Remove an image
docker rmi nginx
docker image rm nginx

# Remove unused images
docker image prune

# Inspect an image
docker image inspect nginx

# View image history
docker image history nginx`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Image Naming</h3>
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
          <p className="font-mono text-sm">
            [registry/]repository[:tag]
          </p>
          <p className="text-sm mt-2">
            Examples: nginx, nginx:1.25, docker.io/library/nginx:latest
          </p>
        </div>
      </>
    ),
  },

  "docker_containers": {
    title: "Docker Containers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Containers
        </h2>
        <p className="leading-relaxed mb-4">
          A container is a runnable instance of an image. You can create, start, stop, move, or delete a container.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Container Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List running containers
docker ps
docker container ls

# List all containers
docker ps -a

# Create a container
docker create nginx

# Start a container
docker start container_id

# Stop a container
docker stop container_id

# Remove a container
docker rm container_id

# Remove all stopped containers
docker container prune`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_dockerfile": {
    title: "Dockerfile",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Dockerfile
        </h2>
        <p className="leading-relaxed mb-4">
          A Dockerfile is a text file containing instructions to build a Docker image.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Dockerfile Instructions</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Instruction</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">FROM</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Base image</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">RUN</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Execute commands</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">COPY</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Copy files from host</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">ADD</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Copy files (with extraction)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">WORKDIR</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set working directory</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">EXPOSE</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Declare ports</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">ENV</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set environment variables</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">CMD</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Default command</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">ENTRYPOINT</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Container entrypoint</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Example Dockerfile</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Set environment variable
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_build": {
    title: "Building Images",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Building Docker Images
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Build Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Build from Dockerfile in current directory
docker build -t myapp .

# Build with tag
docker build -t myapp:1.0 .

# Build from specific file
docker build -f Dockerfile.prod -t myapp:prod .

# Build with build arguments
docker build --build-arg VERSION=1.0 -t myapp .

# Build without cache
docker build --no-cache -t myapp .`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Multi-stage Builds</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_run": {
    title: "Running Containers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Run
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Run Options</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Basic run
docker run nginx

# Run in detached mode
docker run -d nginx

# Run with name
docker run -d --name my-nginx nginx

# Run with port mapping
docker run -d -p 8080:80 nginx

# Run with environment variable
docker run -d -e MY_VAR=value nginx

# Run with volume
docker run -d -v /host/path:/container/path nginx

# Run interactively
docker run -it ubuntu bash

# Run and remove after exit
docker run --rm nginx

# Run with resource limits
docker run -d --memory=512m --cpus=1 nginx`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Common Flags</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flag</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">-d</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Detached mode</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">-p</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Port mapping</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">-v</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Volume mount</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">-e</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Environment variable</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">--name</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Container name</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 font-mono">--rm</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remove on exit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "docker_lifecycle": {
    title: "Container Lifecycle",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Container Lifecycle
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Lifecycle Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Start a stopped container
docker start container_name

# Stop a running container
docker stop container_name

# Restart a container
docker restart container_name

# Pause a container
docker pause container_name

# Unpause a container
docker unpause container_name

# Kill a container
docker kill container_name

# Wait for container to stop
docker wait container_name`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Container States</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Created:</strong> Container created but not started</li>
          <li><strong>Running:</strong> Container is running</li>
          <li><strong>Paused:</strong> Container processes are paused</li>
          <li><strong>Stopped:</strong> Container has stopped</li>
          <li><strong>Dead:</strong> Container failed to stop</li>
        </ul>
      </>
    ),
  },

  "docker_exec": {
    title: "Exec & Attach",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Exec and Attach
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Docker Exec</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Execute command in running container
docker exec container_name ls

# Interactive shell
docker exec -it container_name bash
docker exec -it container_name sh

# Execute as specific user
docker exec -u root container_name command

# Set environment variable
docker exec -e VAR=value container_name command`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Docker Attach</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Attach to running container
docker attach container_name

# Detach without stopping: Ctrl+P, Ctrl+Q`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_logs": {
    title: "Logs & Inspect",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Logs and Inspect
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Container Logs</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# View logs
docker logs container_name

# Follow logs (live)
docker logs -f container_name

# Show last N lines
docker logs --tail 100 container_name

# Show timestamps
docker logs -t container_name

# Since specific time
docker logs --since 2h container_name`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Inspect Container</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Full container details
docker inspect container_name

# Get specific field
docker inspect -f '{{.State.Status}}' container_name

# Get IP address
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name

# View container stats
docker stats container_name

# View processes
docker top container_name`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_network_basics": {
    title: "Network Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Networking Basics
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Network Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List networks
docker network ls

# Create a network
docker network create my-network

# Inspect a network
docker network inspect my-network

# Connect container to network
docker network connect my-network container_name

# Disconnect container
docker network disconnect my-network container_name

# Remove a network
docker network rm my-network`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_network_types": {
    title: "Network Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Network Types
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Driver</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">bridge</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Default. Isolated network on host</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">host</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use host's network directly</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">none</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">No networking</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">overlay</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multi-host networking (Swarm)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">macvlan</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Assign MAC address</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Creating Networks</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create bridge network
docker network create --driver bridge my-bridge

# Create with subnet
docker network create --subnet=172.18.0.0/16 my-network

# Run container with network
docker run -d --network my-network nginx`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_ports": {
    title: "Port Mapping",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Port Mapping
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Port Options</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Map port 80 to host 8080
docker run -p 8080:80 nginx

# Map multiple ports
docker run -p 8080:80 -p 443:443 nginx

# Map to specific interface
docker run -p 127.0.0.1:8080:80 nginx

# Map random host port
docker run -P nginx

# View port mappings
docker port container_name`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_volumes": {
    title: "Docker Volumes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Volumes
        </h2>
        <p className="leading-relaxed mb-4">
          Volumes are the preferred way to persist data in Docker containers.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Volume Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create a volume
docker volume create my-volume

# List volumes
docker volume ls

# Inspect a volume
docker volume inspect my-volume

# Remove a volume
docker volume rm my-volume

# Remove unused volumes
docker volume prune

# Use volume in container
docker run -v my-volume:/data nginx

# Named volume
docker run -v mydata:/app/data nginx`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_bind_mounts": {
    title: "Bind Mounts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Bind Mounts
        </h2>
        <p className="leading-relaxed mb-4">
          Bind mounts map a host file or directory to a container path.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Using Bind Mounts</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Bind mount with -v
docker run -v /host/path:/container/path nginx

# Bind mount with --mount
docker run --mount type=bind,source=/host/path,target=/container/path nginx

# Read-only mount
docker run -v /host/path:/container/path:ro nginx`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Volumes vs Bind Mounts</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Volumes</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Bind Mounts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Location</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Docker managed</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Any host path</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Portability</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Host dependent</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Production data</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Development</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "docker_tmpfs": {
    title: "tmpfs Mounts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          tmpfs Mounts
        </h2>
        <p className="leading-relaxed mb-4">
          tmpfs mounts store data in memory only - data is lost when container stops.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Using tmpfs</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# tmpfs mount
docker run --tmpfs /app/tmp nginx

# With size limit
docker run --mount type=tmpfs,target=/app/tmp,tmpfs-size=100m nginx`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_compose": {
    title: "Docker Compose",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Compose
        </h2>
        <p className="leading-relaxed mb-4">
          Docker Compose is a tool for defining and running multi-container applications.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Example docker-compose.yml</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgres://db:5432/myapp

  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=secret

volumes:
  postgres_data:`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Compose Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Start services
docker compose up

# Start in background
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs

# List services
docker compose ps

# Build images
docker compose build

# Scale a service
docker compose up -d --scale web=3`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_hub": {
    title: "Docker Hub",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Hub
        </h2>
        <p className="leading-relaxed mb-4">
          Docker Hub is the default public registry for Docker images.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Docker Hub Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Login to Docker Hub
docker login

# Pull an image
docker pull username/image:tag

# Tag an image
docker tag myapp username/myapp:1.0

# Push an image
docker push username/myapp:1.0

# Search images
docker search nginx

# Logout
docker logout`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_registry": {
    title: "Docker Registry",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Private Docker Registry
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Run Local Registry</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Start a local registry
docker run -d -p 5000:5000 --name registry registry:2

# Tag image for local registry
docker tag myapp localhost:5000/myapp

# Push to local registry
docker push localhost:5000/myapp

# Pull from local registry
docker pull localhost:5000/myapp`}
          </pre>
        </div>
      </>
    ),
  },

  "docker_best_practices": {
    title: "Docker Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Best Practices
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Dockerfile Best Practices</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Use official base images</li>
          <li>Use specific tags, not latest</li>
          <li>Minimize layers by combining RUN commands</li>
          <li>Use multi-stage builds</li>
          <li>Order commands from least to most changing</li>
          <li>Use .dockerignore file</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Example .dockerignore</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
*.md
.env`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Container Best Practices</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>One process per container</li>
          <li>Keep containers stateless</li>
          <li>Use volumes for persistent data</li>
          <li>Set resource limits</li>
          <li>Use health checks</li>
        </ul>
      </>
    ),
  },

  "docker_security": {
    title: "Docker Security",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Docker Security
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Security Best Practices</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Don't run as root inside containers</li>
          <li>Scan images for vulnerabilities</li>
          <li>Use read-only file systems when possible</li>
          <li>Limit container capabilities</li>
          <li>Keep Docker and images updated</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Security Options</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Run as non-root user
docker run --user 1000:1000 myapp

# Read-only filesystem
docker run --read-only myapp

# Drop capabilities
docker run --cap-drop ALL myapp

# No new privileges
docker run --security-opt no-new-privileges myapp

# Scan image for vulnerabilities
docker scout cves myimage`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Dockerfile Security</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`FROM node:18-alpine

# Create non-root user
RUN addgroup -g 1001 appgroup && \\
    adduser -u 1001 -G appgroup -D appuser

WORKDIR /app
COPY --chown=appuser:appgroup . .

# Switch to non-root user
USER appuser

CMD ["node", "app.js"]`}
          </pre>
        </div>
      </>
    ),
  },
};
