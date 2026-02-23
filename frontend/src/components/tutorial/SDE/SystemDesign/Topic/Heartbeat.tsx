import React from 'react';

const Heartbeat: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Heartbeat and Health Checks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Heartbeat and health checks are mechanisms to monitor the health and availability of services
      in a distributed system. They help detect failures early and enable automatic recovery.
    </p>

    <h2 className="text-2xl font-bold mt-6">Heartbeat Mechanism</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>A heartbeat is a periodic signal sent between services to indicate they are alive.</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Push-based:</strong> Service sends "I'm alive" messages to monitor</li>
        <li><strong>Pull-based:</strong> Monitor pings services and expects response</li>
        <li><strong>Interval:</strong> Typically every 1-30 seconds</li>
        <li><strong>Timeout:</strong> Service considered dead after N missed heartbeats</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Types of Health Checks</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Liveness Check</h4>
        <p className="text-sm mt-1">"Is the service running?"</p>
        <p className="text-xs mt-2">Returns 200 if process is alive</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Readiness Check</h4>
        <p className="text-sm mt-1">"Can it handle requests?"</p>
        <p className="text-xs mt-2">Checks dependencies, warm-up status</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-bold text-yellow-800">Startup Check</h4>
        <p className="text-sm mt-1">"Has it finished starting?"</p>
        <p className="text-xs mt-2">Prevents premature traffic routing</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation Example</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Express.js Health Check Endpoints
const express = require('express');
const app = express();

// Simple liveness check
app.get('/health/live', (req, res) => {
    res.status(200).json({ status: 'alive' });
});

// Readiness check with dependency verification
app.get('/health/ready', async (req, res) => {
    const checks = {
        database: await checkDatabase(),
        cache: await checkRedis(),
        queue: await checkMessageQueue()
    };

    const allHealthy = Object.values(checks).every(c => c.healthy);

    res.status(allHealthy ? 200 : 503).json({
        status: allHealthy ? 'ready' : 'not_ready',
        checks
    });
});

// Detailed health check
app.get('/health/detailed', async (req, res) => {
    const startTime = Date.now();

    const health = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        dependencies: {
            database: await checkDatabase(),
            redis: await checkRedis(),
            externalApi: await checkExternalApi()
        }
    };

    health.responseTime = Date.now() - startTime;
    health.status = Object.values(health.dependencies)
        .every(d => d.healthy) ? 'healthy' : 'degraded';

    res.json(health);
});

async function checkDatabase() {
    try {
        await db.query('SELECT 1');
        return { healthy: true, latency: '5ms' };
    } catch (error) {
        return { healthy: false, error: error.message };
    }
}

async function checkRedis() {
    try {
        await redis.ping();
        return { healthy: true };
    } catch (error) {
        return { healthy: false, error: error.message };
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Heartbeat Service Pattern</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class HeartbeatService {
    constructor(config) {
        this.services = new Map();  // serviceId -> lastHeartbeat
        this.heartbeatInterval = config.interval || 5000;
        this.timeout = config.timeout || 15000;
    }

    // Record heartbeat from a service
    recordHeartbeat(serviceId, metadata = {}) {
        this.services.set(serviceId, {
            lastHeartbeat: Date.now(),
            metadata
        });
    }

    // Check if service is alive
    isAlive(serviceId) {
        const service = this.services.get(serviceId);
        if (!service) return false;

        return Date.now() - service.lastHeartbeat < this.timeout;
    }

    // Get all dead services
    getDeadServices() {
        const dead = [];
        const now = Date.now();

        for (const [id, data] of this.services) {
            if (now - data.lastHeartbeat >= this.timeout) {
                dead.push({ id, lastSeen: data.lastHeartbeat });
            }
        }

        return dead;
    }

    // Start monitoring
    startMonitoring(onDead) {
        setInterval(() => {
            const deadServices = this.getDeadServices();
            deadServices.forEach(service => {
                onDead(service);
                this.services.delete(service.id);
            });
        }, this.heartbeatInterval);
    }
}

// Client-side heartbeat sender
class HeartbeatClient {
    constructor(serviceId, serverUrl, interval = 5000) {
        this.serviceId = serviceId;
        this.serverUrl = serverUrl;
        this.interval = interval;
    }

    start() {
        this.timer = setInterval(() => {
            this.sendHeartbeat();
        }, this.interval);
    }

    async sendHeartbeat() {
        try {
            await fetch(\`\${this.serverUrl}/heartbeat\`, {
                method: 'POST',
                body: JSON.stringify({
                    serviceId: this.serviceId,
                    timestamp: Date.now(),
                    metadata: this.getMetadata()
                })
            });
        } catch (error) {
            console.error('Failed to send heartbeat:', error);
        }
    }

    getMetadata() {
        return {
            cpu: process.cpuUsage(),
            memory: process.memoryUsage(),
            connections: getActiveConnections()
        };
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Kubernetes Health Probes</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <pre className="text-sm">{`# Kubernetes deployment with health checks
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: my-app
        livenessProbe:
          httpGet:
            path: /health/live
            port: 8080
          initialDelaySeconds: 10
          periodSeconds: 5
          failureThreshold: 3
        readinessProbe:
          httpGet:
            path: /health/ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 10
        startupProbe:
          httpGet:
            path: /health/startup
            port: 8080
          failureThreshold: 30
          periodSeconds: 10`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Separate endpoints:</strong> Different checks for liveness vs readiness</li>
      <li><strong>Fast response:</strong> Health checks should respond quickly ({"<"}100ms)</li>
      <li><strong>Graceful degradation:</strong> Return partial health if some dependencies fail</li>
      <li><strong>Include metadata:</strong> Version, uptime, dependency status</li>
      <li><strong>Avoid cascading failures:</strong> Don't mark unhealthy if optional dependency fails</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Failure Detection Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Fixed Timeout</td>
            <td className="p-3 border">Dead after N seconds</td>
            <td className="p-3 border">Simple systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Consecutive Failures</td>
            <td className="p-3 border">Dead after N failed checks</td>
            <td className="p-3 border">Avoid false positives</td>
          </tr>
          <tr>
            <td className="p-3 border">Phi Accrual</td>
            <td className="p-3 border">Probability-based detection</td>
            <td className="p-3 border">Variable latency systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Production Tip:</strong> Always implement circuit breakers alongside health checks.
        If a dependency's health check fails repeatedly, stop sending traffic to avoid cascading failures.
      </p>
    </div>
  </div>
);

export default Heartbeat;
