import React from 'react';

const DesignUber: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Uber
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Uber is a ride-hailing platform that connects riders with drivers in real-time.
      The system handles millions of ride requests daily, requiring real-time location tracking,
      efficient driver matching, dynamic pricing, and seamless payment processing. Designing
      Uber involves solving complex geospatial problems at massive scale.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Requirements Gathering</h2>

    <h3 className="text-xl font-semibold mt-4">Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Riders can request a ride from current location to destination</li>
      <li>System matches riders with nearby available drivers</li>
      <li>Real-time tracking of driver location during ride</li>
      <li>ETA calculation for pickup and destination</li>
      <li>Dynamic pricing based on demand (surge pricing)</li>
      <li>Payment processing and trip history</li>
      <li>Rating system for drivers and riders</li>
      <li>Multiple ride types (UberX, UberXL, UberBlack, etc.)</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Non-Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>High Availability:</strong> 99.99% uptime (critical service)</li>
      <li><strong>Low Latency:</strong> Driver matching within seconds</li>
      <li><strong>Scalability:</strong> Support millions of concurrent users</li>
      <li><strong>Real-time:</strong> Location updates every 3-4 seconds</li>
      <li><strong>Accuracy:</strong> Precise ETA and fare estimation</li>
      <li><strong>Global:</strong> Work across different regions/countries</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Capacity Estimation</h3>
    <div className="bg-gray-100 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>Daily active riders: 20 million</li>
        <li>Daily active drivers: 5 million</li>
        <li>Rides per day: 20 million</li>
        <li>Location updates per second: 5M drivers x 1 update/4s = 1.25M/s</li>
        <li>Ride requests per second: ~500 at peak</li>
        <li>Location data per update: ~100 bytes</li>
        <li>Location data per day: 1.25M x 86400 x 100 bytes = 10+ TB</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. High-Level Architecture</h2>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`
┌─────────────┐     ┌─────────────┐     ┌─────────────────────────────────────────────┐
│  Rider App  │     │  Driver App │     │              Uber Backend                   │
└──────┬──────┘     └──────┬──────┘     │                                             │
       │                   │            │  ┌─────────────┐    ┌─────────────────────┐ │
       │                   │            │  │   API       │    │   WebSocket         │ │
       └───────────────────┼───────────▶│  │   Gateway   │    │   Gateway           │ │
                           │            │  └──────┬──────┘    └──────────┬──────────┘ │
                           │            │         │                      │            │
                           │            │  ┌──────┴──────────────────────┴──────────┐│
                           │            │  │              Services                   ││
                           │            │  │  ┌────────┐ ┌────────┐ ┌────────────┐  ││
                           │            │  │  │Location│ │Matching│ │  Pricing   │  ││
                           │            │  │  │Service │ │Service │ │  Service   │  ││
                           │            │  │  └────────┘ └────────┘ └────────────┘  ││
                           │            │  │  ┌────────┐ ┌────────┐ ┌────────────┐  ││
                           │            │  │  │  Trip  │ │Payment │ │Notification│  ││
                           │            │  │  │Service │ │Service │ │  Service   │  ││
                           │            │  │  └────────┘ └────────┘ └────────────┘  ││
                           │            │  └────────────────────────────────────────┘│
                           │            │                                             │
                           ▼            │  ┌─────────────┐    ┌─────────────────────┐│
                    ┌─────────────┐     │  │  Geospatial │    │   Message Queue     ││
                    │   Location  │────▶│  │   Index     │    │     (Kafka)         ││
                    │   Stream    │     │  │(QuadTree/H3)│    └─────────────────────┘│
                    └─────────────┘     │  └─────────────┘                           │
                                        └─────────────────────────────────────────────┘
`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Core Services</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Location Service:</strong> Ingests and stores driver locations in real-time</li>
      <li><strong>Matching Service:</strong> Matches riders with optimal available drivers</li>
      <li><strong>Pricing Service:</strong> Calculates fares and surge pricing</li>
      <li><strong>Trip Service:</strong> Manages ride lifecycle and trip data</li>
      <li><strong>ETA Service:</strong> Estimates arrival times using routing data</li>
      <li><strong>Payment Service:</strong> Handles payment processing and invoicing</li>
      <li><strong>Notification Service:</strong> Push notifications to riders and drivers</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">3. Geospatial Indexing</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Efficiently finding nearby drivers is the core challenge. Naive approach of calculating
        distance to all drivers is O(n) and too slow. We need spatial indexing for O(log n) queries.
      </p>
    </div>

    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Option 1: Geohash</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Encode lat/long into alphanumeric string</li>
          <li>Nearby locations share common prefix</li>
          <li>Easy to store in key-value stores</li>
          <li>Example: "9q8yy" represents a cell in San Francisco</li>
          <li>Edge cases at cell boundaries require checking neighbors</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Option 2: QuadTree</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Recursively divide space into quadrants</li>
          <li>Dynamic granularity based on density</li>
          <li>Efficient for non-uniform distribution</li>
          <li>Good for in-memory spatial queries</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Option 3: H3 (Uber's Solution)</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Hexagonal hierarchical spatial index</li>
          <li>Hexagons have uniform neighbors (6 vs 8 for squares)</li>
          <li>No edge/corner issues like geohash</li>
          <li>Multiple resolution levels (0-15)</li>
          <li>Open-source library by Uber</li>
        </ul>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-4">Driver Location Storage</h3>
    <div className="bg-gray-50 p-4 rounded-lg mt-2">
      <pre className="text-sm overflow-x-auto">
{`// In-memory store (Redis)
Key: "drivers:h3cell:{cell_id}"
Value: Set of driver_ids in that cell

// Query: Find drivers within 2km
1. Get H3 cell for rider location (resolution 7 ~ 1km)
2. Get neighboring cells (ring of cells)
3. Fetch all drivers from those cells
4. Filter by exact distance if needed
5. Sort by distance and availability`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Database Schema Design</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Users Table (Riders and Drivers)</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE users (
    user_id         BIGINT PRIMARY KEY,
    user_type       ENUM('rider', 'driver'),
    name            VARCHAR(100),
    email           VARCHAR(255) UNIQUE,
    phone           VARCHAR(20),
    rating          DECIMAL(3,2),
    total_trips     INT DEFAULT 0,
    created_at      TIMESTAMP
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Driver Details Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE driver_details (
    driver_id       BIGINT PRIMARY KEY,
    license_number  VARCHAR(50),
    vehicle_type    ENUM('uberx', 'uberxl', 'uberblack', 'uberpool'),
    vehicle_make    VARCHAR(50),
    vehicle_model   VARCHAR(50),
    vehicle_year    INT,
    license_plate   VARCHAR(20),
    is_verified     BOOLEAN DEFAULT FALSE,
    is_online       BOOLEAN DEFAULT FALSE,
    is_available    BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (driver_id) REFERENCES users(user_id)
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Trips Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE trips (
    trip_id         BIGINT PRIMARY KEY,
    rider_id        BIGINT NOT NULL,
    driver_id       BIGINT,
    vehicle_type    VARCHAR(20),
    status          ENUM('requested', 'matched', 'driver_arriving',
                         'in_progress', 'completed', 'cancelled'),

    pickup_lat      DECIMAL(10, 8),
    pickup_lng      DECIMAL(11, 8),
    pickup_address  VARCHAR(500),

    dropoff_lat     DECIMAL(10, 8),
    dropoff_lng     DECIMAL(11, 8),
    dropoff_address VARCHAR(500),

    requested_at    TIMESTAMP,
    accepted_at     TIMESTAMP,
    picked_up_at    TIMESTAMP,
    completed_at    TIMESTAMP,

    distance_km     DECIMAL(10, 2),
    duration_mins   INT,
    fare_amount     DECIMAL(10, 2),
    surge_multiplier DECIMAL(3, 2) DEFAULT 1.0,

    rider_rating    TINYINT,
    driver_rating   TINYINT,

    FOREIGN KEY (rider_id) REFERENCES users(user_id),
    FOREIGN KEY (driver_id) REFERENCES users(user_id)
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Driver Locations (Time-series/Redis)</h4>
      <pre className="text-sm overflow-x-auto">
{`// Real-time location in Redis
Key: "driver:location:{driver_id}"
Value: {
    "lat": 37.7749,
    "lng": -122.4194,
    "heading": 45,
    "speed": 30,
    "h3_cell": "872830828ffffff",
    "updated_at": 1705654800000
}

// Historical locations (Cassandra/TimescaleDB)
CREATE TABLE location_history (
    driver_id       BIGINT,
    timestamp       TIMESTAMP,
    lat             DECIMAL(10, 8),
    lng             DECIMAL(11, 8),
    heading         INT,
    speed           DECIMAL(5, 2),
    PRIMARY KEY (driver_id, timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. API Design</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Request a Ride</h4>
        <pre className="text-sm mt-2">
{`POST /api/v1/rides/request
Authorization: Bearer {rider_token}

Request:
{
    "pickup": {
        "lat": 37.7749,
        "lng": -122.4194,
        "address": "123 Market St, SF"
    },
    "dropoff": {
        "lat": 37.7849,
        "lng": -122.4094,
        "address": "456 Mission St, SF"
    },
    "vehicle_type": "uberx"
}

Response:
{
    "trip_id": "trip_123",
    "status": "matching",
    "estimated_fare": {
        "min": 12.50,
        "max": 16.00,
        "surge_multiplier": 1.2
    },
    "estimated_pickup_time": 4  // minutes
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Update Driver Location (Streaming)</h4>
        <pre className="text-sm mt-2">
{`WebSocket: wss://api.uber.com/driver/location

// Driver sends every 4 seconds
{
    "type": "location_update",
    "lat": 37.7749,
    "lng": -122.4194,
    "heading": 45,
    "speed": 25,
    "is_available": true
}

// Server acknowledges
{
    "type": "ack",
    "timestamp": 1705654800000
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Accept Ride (Driver)</h4>
        <pre className="text-sm mt-2">
{`POST /api/v1/rides/{trip_id}/accept
Authorization: Bearer {driver_token}

Response:
{
    "trip_id": "trip_123",
    "rider": {
        "name": "John D.",
        "rating": 4.8,
        "phone": "+1xxxxxxx"
    },
    "pickup": {
        "lat": 37.7749,
        "lng": -122.4194,
        "address": "123 Market St"
    },
    "dropoff": {
        "lat": 37.7849,
        "lng": -122.4094
    },
    "navigation_url": "uber://navigation?..."
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Get Fare Estimate</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/fare/estimate?pickup_lat=37.77&pickup_lng=-122.41&dropoff_lat=37.78&dropoff_lng=-122.40

Response:
{
    "estimates": [
        {
            "vehicle_type": "uberx",
            "fare_range": { "min": 12.50, "max": 16.00 },
            "eta_minutes": 4,
            "surge_multiplier": 1.0
        },
        {
            "vehicle_type": "uberxl",
            "fare_range": { "min": 18.00, "max": 24.00 },
            "eta_minutes": 7,
            "surge_multiplier": 1.0
        }
    ]
}`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">6. Driver Matching Algorithm</h2>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Matching Factors</h4>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li><strong>Distance:</strong> Closest available driver (primary factor)</li>
        <li><strong>ETA:</strong> Consider traffic, not just straight-line distance</li>
        <li><strong>Driver Rating:</strong> Higher-rated drivers may be preferred</li>
        <li><strong>Vehicle Type:</strong> Match with requested vehicle type</li>
        <li><strong>Driver Heading:</strong> Prefer drivers moving toward pickup</li>
        <li><strong>Driver History:</strong> Acceptance rate, cancellation rate</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-4">Matching Flow</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Rider requests ride from location A to B</li>
      <li>Get H3 cell for pickup location</li>
      <li>Expand search radius (rings of cells) until enough drivers found</li>
      <li>Filter by vehicle type and availability</li>
      <li>Calculate ETA for each candidate driver</li>
      <li>Score and rank drivers based on matching factors</li>
      <li>Send ride request to top driver (with timeout)</li>
      <li>If declined/timeout, try next driver</li>
      <li>Notify rider when driver accepts</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">7. Surge Pricing</h2>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <h4 className="font-bold text-yellow-800">Dynamic Pricing Factors</h4>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li><strong>Supply:</strong> Number of available drivers in area</li>
        <li><strong>Demand:</strong> Number of ride requests in area</li>
        <li><strong>Historical Patterns:</strong> Time of day, events, weather</li>
        <li><strong>Wait Times:</strong> If ETAs are increasing</li>
      </ul>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Surge Calculation</h4>
      <pre className="text-sm overflow-x-auto">
{`// For each H3 cell (or zone):
demand = count(ride_requests in last 5 minutes)
supply = count(available_drivers)

ratio = demand / supply

if ratio > 2.0: surge = 2.0x
else if ratio > 1.5: surge = 1.5x
else if ratio > 1.2: surge = 1.2x
else: surge = 1.0x (no surge)

// Actual implementation is more sophisticated
// with ML models and smoothing`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">8. Scalability Considerations</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Location Ingestion</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Use Kafka for location stream processing</li>
          <li>Partition by driver_id or h3_cell</li>
          <li>Process 1M+ updates per second</li>
          <li>Redis for real-time driver positions</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Geographic Sharding</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Shard by city/region</li>
          <li>Each city has independent services</li>
          <li>Reduces cross-region latency</li>
          <li>Failure isolation</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Caching Strategy</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Cache driver locations in Redis</li>
          <li>Cache surge multipliers per zone</li>
          <li>Cache route/ETA calculations</li>
          <li>CDN for static map tiles</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Fault Tolerance</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Multi-region deployment</li>
          <li>Circuit breakers for dependencies</li>
          <li>Graceful degradation (skip surge)</li>
          <li>Retry with exponential backoff</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">9. Real-time Communication</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">WebSocket Architecture</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Persistent connections for drivers and active riders</li>
          <li>Server push for ride updates, location tracking</li>
          <li>Horizontal scaling with sticky sessions</li>
          <li>Pub/sub for broadcasting to multiple clients</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Events During Ride</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Driver accepted/arriving</li>
          <li>Driver location updates (every 3-4 seconds)</li>
          <li>Ride started/completed</li>
          <li>Payment processed</li>
          <li>Rating request</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">10. Trade-offs and Decisions</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Push vs Broadcast Matching</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>Push to One:</strong> Send request to best driver, wait for response</li>
          <li><strong>Broadcast:</strong> Send to multiple drivers, first to accept wins</li>
          <li><strong>Decision:</strong> Push to one for better UX, broadcast for high-demand areas</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Location Update Frequency</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>High Frequency (1s):</strong> More accurate, higher bandwidth/battery</li>
          <li><strong>Low Frequency (10s):</strong> Less accurate, lower cost</li>
          <li><strong>Decision:</strong> 3-4 seconds, adaptive based on speed</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Geohash vs H3</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>Geohash:</strong> Simple, widely supported, square cells</li>
          <li><strong>H3:</strong> Hexagonal, uniform neighbors, better for distance</li>
          <li><strong>Decision:</strong> H3 for matching (Uber's choice)</li>
        </ul>
      </div>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
      <p className="text-blue-800">
        <strong>Key Interview Tip:</strong> Focus on geospatial indexing (H3/QuadTree) for
        efficient driver lookup. Discuss the matching algorithm and trade-offs between
        optimizing for rider wait time vs driver utilization. Also cover surge pricing logic.
      </p>
    </div>
  </div>
);

export default DesignUber;
