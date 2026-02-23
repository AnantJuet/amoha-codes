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
  { label: "Kubernetes Home", href: "k8s_home" },
  { label: "Kubernetes Intro", href: "k8s_intro" },
  { label: "Architecture", href: "k8s_architecture" },
  {
    label: "Core Concepts",
    href: "k8s_core",
    isHeader: true,
    children: [
      { label: "Pods", href: "k8s_pods" },
      { label: "Deployments", href: "k8s_deployments" },
      { label: "ReplicaSets", href: "k8s_replicasets" },
      { label: "Services", href: "k8s_services" },
    ],
  },
  {
    label: "Networking",
    href: "k8s_networking",
    isHeader: true,
    children: [
      { label: "Service Types", href: "k8s_service_types" },
      { label: "Ingress", href: "k8s_ingress" },
      { label: "Network Policies", href: "k8s_network_policies" },
    ],
  },
  {
    label: "Configuration",
    href: "k8s_config",
    isHeader: true,
    children: [
      { label: "ConfigMaps", href: "k8s_configmaps" },
      { label: "Secrets", href: "k8s_secrets" },
      { label: "Environment Vars", href: "k8s_env_vars" },
    ],
  },
  {
    label: "Storage",
    href: "k8s_storage",
    isHeader: true,
    children: [
      { label: "Volumes", href: "k8s_volumes" },
      { label: "PersistentVolumes", href: "k8s_pv" },
      { label: "StorageClasses", href: "k8s_storage_classes" },
    ],
  },
  {
    label: "Security",
    href: "k8s_security",
    isHeader: true,
    children: [
      { label: "Namespaces", href: "k8s_namespaces" },
      { label: "RBAC", href: "k8s_rbac" },
      { label: "Service Accounts", href: "k8s_service_accounts" },
    ],
  },
  {
    label: "Advanced",
    href: "k8s_advanced",
    isHeader: true,
    children: [
      { label: "Helm", href: "k8s_helm" },
      { label: "Operators", href: "k8s_operators" },
      { label: "Custom Resources", href: "k8s_crd" },
    ],
  },
  { label: "Monitoring", href: "k8s_monitoring" },
  { label: "Scaling", href: "k8s_scaling" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "k8s_home": {
    title: "Kubernetes Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Learn Kubernetes
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Kubernetes</strong> (K8s) is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">What You Will Learn</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Kubernetes architecture and components</li>
          <li>Pods, Deployments, and Services</li>
          <li>Networking and Ingress</li>
          <li>ConfigMaps and Secrets</li>
          <li>Persistent storage</li>
          <li>RBAC and security</li>
          <li>Helm and Operators</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Example: Deploy an Application</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create a deployment
kubectl create deployment nginx --image=nginx

# Expose as a service
kubectl expose deployment nginx --port=80 --type=LoadBalancer

# View resources
kubectl get pods
kubectl get services`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_intro": {
    title: "Introduction to Kubernetes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          What is Kubernetes?
        </h2>
        <p className="leading-relaxed mb-4">
          Kubernetes is a portable, extensible platform for managing containerized workloads and services.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Why Kubernetes?</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Service Discovery:</strong> Automatic DNS and load balancing</li>
          <li><strong>Self-Healing:</strong> Restarts failed containers</li>
          <li><strong>Scaling:</strong> Scale up/down based on demand</li>
          <li><strong>Rolling Updates:</strong> Zero-downtime deployments</li>
          <li><strong>Secret Management:</strong> Secure configuration handling</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Key Concepts</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Concept</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cluster</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set of nodes running containerized apps</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Node</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Worker machine in the cluster</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pod</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Smallest deployable unit</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Service</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Network abstraction for pods</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "k8s_architecture": {
    title: "Kubernetes Architecture",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Kubernetes Architecture
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Control Plane Components</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>kube-apiserver:</strong> API server, entry point for all commands</li>
          <li><strong>etcd:</strong> Distributed key-value store for cluster data</li>
          <li><strong>kube-scheduler:</strong> Assigns pods to nodes</li>
          <li><strong>kube-controller-manager:</strong> Runs controller processes</li>
          <li><strong>cloud-controller-manager:</strong> Cloud-specific controllers</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Node Components</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>kubelet:</strong> Agent that runs on each node</li>
          <li><strong>kube-proxy:</strong> Network proxy for services</li>
          <li><strong>Container Runtime:</strong> Docker, containerd, CRI-O</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">kubectl Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# View cluster info
kubectl cluster-info

# List nodes
kubectl get nodes

# View node details
kubectl describe node node-name

# Check component status
kubectl get componentstatuses`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_pods": {
    title: "Kubernetes Pods",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Pods
        </h2>
        <p className="leading-relaxed mb-4">
          A Pod is the smallest deployable unit in Kubernetes - a group of one or more containers with shared storage and network.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Pod YAML Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.25
    ports:
    - containerPort: 80
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Pod Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create pod from YAML
kubectl apply -f pod.yaml

# List pods
kubectl get pods
kubectl get pods -o wide

# Describe pod
kubectl describe pod nginx-pod

# View logs
kubectl logs nginx-pod
kubectl logs -f nginx-pod  # follow

# Execute command in pod
kubectl exec -it nginx-pod -- bash

# Delete pod
kubectl delete pod nginx-pod`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_deployments": {
    title: "Deployments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Deployments
        </h2>
        <p className="leading-relaxed mb-4">
          A Deployment provides declarative updates for Pods and ReplicaSets.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Deployment YAML</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.25
        ports:
        - containerPort: 80`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Deployment Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create deployment
kubectl apply -f deployment.yaml

# List deployments
kubectl get deployments

# Scale deployment
kubectl scale deployment nginx-deployment --replicas=5

# Update image
kubectl set image deployment/nginx-deployment nginx=nginx:1.26

# Rollout status
kubectl rollout status deployment/nginx-deployment

# Rollback
kubectl rollout undo deployment/nginx-deployment

# View history
kubectl rollout history deployment/nginx-deployment`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_replicasets": {
    title: "ReplicaSets",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          ReplicaSets
        </h2>
        <p className="leading-relaxed mb-4">
          A ReplicaSet ensures a specified number of pod replicas are running at all times.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">ReplicaSet YAML</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.25`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List replicasets
kubectl get replicasets
kubectl get rs

# Describe
kubectl describe rs nginx-replicaset`}
          </pre>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-4">
          <p><strong>Note:</strong> Use Deployments instead of ReplicaSets directly. Deployments manage ReplicaSets for you.</p>
        </div>
      </>
    ),
  },

  "k8s_services": {
    title: "Services",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Services
        </h2>
        <p className="leading-relaxed mb-4">
          A Service is an abstraction that defines a logical set of Pods and a policy to access them.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Service YAML</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: ClusterIP`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Service Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create service
kubectl apply -f service.yaml

# Expose deployment as service
kubectl expose deployment nginx --port=80 --type=ClusterIP

# List services
kubectl get services
kubectl get svc

# Describe service
kubectl describe svc nginx-service`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_service_types": {
    title: "Service Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Service Types
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-purple-100 dark:bg-purple-900">
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">ClusterIP</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Internal IP, only accessible within cluster (default)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">NodePort</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Exposes on each node's IP at a static port</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">LoadBalancer</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">External load balancer (cloud provider)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">ExternalName</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maps to external DNS name</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">NodePort Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Service
metadata:
  name: nginx-nodeport
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80
    nodePort: 30080`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">LoadBalancer Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Service
metadata:
  name: nginx-lb
spec:
  type: LoadBalancer
  selector:
    app: nginx
  ports:
  - port: 80
    targetPort: 80`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_ingress": {
    title: "Ingress",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Ingress
        </h2>
        <p className="leading-relaxed mb-4">
          Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Ingress YAML</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: app-service
            port:
              number: 80`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Ingress with TLS</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: tls-ingress
spec:
  tls:
  - hosts:
    - myapp.example.com
    secretName: tls-secret
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: app-service
            port:
              number: 80`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_network_policies": {
    title: "Network Policies",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Network Policies
        </h2>
        <p className="leading-relaxed mb-4">
          Network policies control traffic flow between pods and external endpoints.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">NetworkPolicy Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-web
spec:
  podSelector:
    matchLabels:
      app: web
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 80
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: database
    ports:
    - protocol: TCP
      port: 5432`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_configmaps": {
    title: "ConfigMaps",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          ConfigMaps
        </h2>
        <p className="leading-relaxed mb-4">
          ConfigMaps store non-confidential configuration data as key-value pairs.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Create ConfigMap</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# From literal values
kubectl create configmap app-config --from-literal=DB_HOST=localhost

# From file
kubectl create configmap app-config --from-file=config.properties

# YAML definition
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DB_HOST: localhost
  DB_PORT: "5432"
  config.json: |
    {
      "feature_flags": {
        "new_ui": true
      }
    }`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Using ConfigMap in Pod</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
  - name: app
    image: myapp
    # As environment variables
    envFrom:
    - configMapRef:
        name: app-config
    # Or mount as volume
    volumeMounts:
    - name: config-volume
      mountPath: /etc/config
  volumes:
  - name: config-volume
    configMap:
      name: app-config`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_secrets": {
    title: "Secrets",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Secrets
        </h2>
        <p className="leading-relaxed mb-4">
          Secrets store sensitive data like passwords, tokens, and keys.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Create Secret</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# From literal
kubectl create secret generic db-secret \\
  --from-literal=username=admin \\
  --from-literal=password=secret123

# YAML (values are base64 encoded)
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: YWRtaW4=       # base64 of 'admin'
  password: c2VjcmV0MTIz   # base64 of 'secret123'

# Or use stringData (plain text)
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
stringData:
  username: admin
  password: secret123`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Using Secret in Pod</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
  - name: app
    image: myapp
    env:
    - name: DB_USERNAME
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: username
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: password`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_env_vars": {
    title: "Environment Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Environment Variables
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Setting Environment Variables</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
  - name: app
    image: myapp
    env:
    # Direct value
    - name: APP_ENV
      value: "production"
    # From ConfigMap
    - name: DB_HOST
      valueFrom:
        configMapKeyRef:
          name: app-config
          key: DB_HOST
    # From Secret
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: password
    # From field reference
    - name: POD_NAME
      valueFrom:
        fieldRef:
          fieldPath: metadata.name`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_volumes": {
    title: "Volumes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Volumes
        </h2>
        <p className="leading-relaxed mb-4">
          Volumes provide persistent storage for pods.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Volume Types</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>emptyDir:</strong> Temporary storage, deleted with pod</li>
          <li><strong>hostPath:</strong> Mounts from host node</li>
          <li><strong>persistentVolumeClaim:</strong> Persistent storage</li>
          <li><strong>configMap/secret:</strong> Configuration as files</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">emptyDir Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
  - name: app
    image: myapp
    volumeMounts:
    - name: cache-volume
      mountPath: /cache
  volumes:
  - name: cache-volume
    emptyDir: {}`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_pv": {
    title: "PersistentVolumes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          PersistentVolumes & Claims
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">PersistentVolume (PV)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: /data/pv`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">PersistentVolumeClaim (PVC)</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Using PVC in Pod</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
  - name: app
    image: myapp
    volumeMounts:
    - name: data
      mountPath: /data
  volumes:
  - name: data
    persistentVolumeClaim:
      claimName: my-pvc`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_storage_classes": {
    title: "StorageClasses",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          StorageClasses
        </h2>
        <p className="leading-relaxed mb-4">
          StorageClasses enable dynamic provisioning of PersistentVolumes.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">StorageClass Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-storage
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp3
  iopsPerGB: "10"
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_namespaces": {
    title: "Namespaces",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Namespaces
        </h2>
        <p className="leading-relaxed mb-4">
          Namespaces provide isolation and organization for resources within a cluster.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Namespace Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# List namespaces
kubectl get namespaces

# Create namespace
kubectl create namespace dev

# Set default namespace
kubectl config set-context --current --namespace=dev

# Get resources in namespace
kubectl get pods -n dev

# Delete namespace
kubectl delete namespace dev`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Default Namespaces</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>default:</strong> Default for resources without namespace</li>
          <li><strong>kube-system:</strong> Kubernetes system components</li>
          <li><strong>kube-public:</strong> Publicly accessible resources</li>
          <li><strong>kube-node-lease:</strong> Node heartbeat data</li>
        </ul>
      </>
    ),
  },

  "k8s_rbac": {
    title: "RBAC",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Role-Based Access Control (RBAC)
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Role & RoleBinding</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Role (namespace-scoped)
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: dev
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
---
# RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: dev
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">ClusterRole & ClusterRoleBinding</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# ClusterRole (cluster-wide)
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: secret-reader
rules:
- apiGroups: [""]
  resources: ["secrets"]
  verbs: ["get", "watch", "list"]
---
# ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: read-secrets-global
subjects:
- kind: Group
  name: developers
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: secret-reader
  apiGroup: rbac.authorization.k8s.io`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_service_accounts": {
    title: "Service Accounts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Service Accounts
        </h2>
        <p className="leading-relaxed mb-4">
          Service Accounts provide identity for processes running in pods.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Create Service Account</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create service account
kubectl create serviceaccount my-sa

# YAML
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-sa
  namespace: default`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Use in Pod</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  serviceAccountName: my-sa
  containers:
  - name: app
    image: myapp`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_helm": {
    title: "Helm",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Helm - Kubernetes Package Manager
        </h2>
        <p className="leading-relaxed mb-4">
          Helm is a package manager for Kubernetes that simplifies deployment and management.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">Helm Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Add a repository
helm repo add bitnami https://charts.bitnami.com/bitnami

# Update repositories
helm repo update

# Search for charts
helm search repo nginx

# Install a chart
helm install my-nginx bitnami/nginx

# Install with custom values
helm install my-nginx bitnami/nginx -f values.yaml

# List releases
helm list

# Upgrade a release
helm upgrade my-nginx bitnami/nginx

# Uninstall
helm uninstall my-nginx

# Show values
helm show values bitnami/nginx`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Chart Structure</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`mychart/
  Chart.yaml        # Chart metadata
  values.yaml       # Default configuration
  templates/        # Kubernetes manifests
    deployment.yaml
    service.yaml
    ingress.yaml
  charts/           # Dependencies`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_operators": {
    title: "Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Kubernetes Operators
        </h2>
        <p className="leading-relaxed mb-4">
          Operators extend Kubernetes to automate management of complex applications.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">What Operators Do</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Automate application deployment</li>
          <li>Handle upgrades and scaling</li>
          <li>Manage backups and recovery</li>
          <li>Implement application-specific logic</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Popular Operators</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Prometheus Operator</li>
          <li>PostgreSQL Operator</li>
          <li>Redis Operator</li>
          <li>Elastic Cloud on Kubernetes</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">OperatorHub</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Install OLM (Operator Lifecycle Manager)
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.25.0/install.sh | bash

# Browse: operatorhub.io`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_crd": {
    title: "Custom Resources",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Custom Resource Definitions (CRD)
        </h2>
        <p className="leading-relaxed mb-4">
          CRDs extend Kubernetes with custom resource types.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-8">CRD Example</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: databases.example.com
spec:
  group: example.com
  versions:
  - name: v1
    served: true
    storage: true
    schema:
      openAPIV3Schema:
        type: object
        properties:
          spec:
            type: object
            properties:
              engine:
                type: string
              version:
                type: string
              size:
                type: string
  scope: Namespaced
  names:
    plural: databases
    singular: database
    kind: Database
    shortNames:
    - db`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Using Custom Resource</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: example.com/v1
kind: Database
metadata:
  name: my-database
spec:
  engine: postgres
  version: "15"
  size: "10Gi"`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_monitoring": {
    title: "Monitoring",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Kubernetes Monitoring
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Built-in Tools</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# View resource usage
kubectl top nodes
kubectl top pods

# View events
kubectl get events

# View pod logs
kubectl logs pod-name
kubectl logs -f pod-name
kubectl logs pod-name -c container-name`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Monitoring Stack</h3>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li><strong>Prometheus:</strong> Metrics collection</li>
          <li><strong>Grafana:</strong> Visualization</li>
          <li><strong>Alertmanager:</strong> Alerting</li>
          <li><strong>Loki:</strong> Log aggregation</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-8">Health Probes</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
  - name: app
    image: myapp
    livenessProbe:
      httpGet:
        path: /health
        port: 8080
      initialDelaySeconds: 30
      periodSeconds: 10
    readinessProbe:
      httpGet:
        path: /ready
        port: 8080
      initialDelaySeconds: 5
      periodSeconds: 5`}
          </pre>
        </div>
      </>
    ),
  },

  "k8s_scaling": {
    title: "Scaling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-500 mt-10">
          Kubernetes Scaling
        </h2>

        <h3 className="text-xl font-medium mb-3 mt-8">Manual Scaling</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Scale deployment
kubectl scale deployment nginx --replicas=5

# Scale with YAML
kubectl apply -f deployment.yaml`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Horizontal Pod Autoscaler</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: nginx-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">HPA Commands</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create HPA
kubectl autoscale deployment nginx --cpu-percent=50 --min=2 --max=10

# List HPAs
kubectl get hpa

# Describe HPA
kubectl describe hpa nginx-hpa`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-8">Vertical Pod Autoscaler</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: nginx-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx
  updatePolicy:
    updateMode: "Auto"`}
          </pre>
        </div>
      </>
    ),
  },
};
