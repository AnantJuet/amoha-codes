import React from 'react';

const DesignNetflix: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Netflix
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Netflix is a global streaming service that delivers movies, TV shows, and original content
      to over 200 million subscribers worldwide. Designing Netflix involves building a highly
      scalable video streaming platform with content delivery, personalized recommendations,
      and adaptive bitrate streaming.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Requirements Gathering</h2>

    <h3 className="text-xl font-semibold mt-4">Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Users can browse and search for movies/TV shows</li>
      <li>Users can stream video content on multiple devices</li>
      <li>Support multiple video qualities (SD, HD, 4K, HDR)</li>
      <li>Personalized content recommendations</li>
      <li>Resume playback from where user left off</li>
      <li>Support for subtitles and multiple audio tracks</li>
      <li>Content uploading and processing for content providers</li>
      <li>User profiles and parental controls</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Non-Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>High Availability:</strong> 99.99% uptime globally</li>
      <li><strong>Low Latency:</strong> Video should start within 2 seconds</li>
      <li><strong>Scalability:</strong> Support 200M+ concurrent streams during peak</li>
      <li><strong>Global Reach:</strong> Serve content from 190+ countries</li>
      <li><strong>Adaptive Streaming:</strong> Adjust quality based on network conditions</li>
      <li><strong>DRM Protection:</strong> Prevent unauthorized content access</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Capacity Estimation</h3>
    <div className="bg-gray-100 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>Total subscribers: 250 million</li>
        <li>Daily active users: 100 million</li>
        <li>Concurrent streams at peak: 10 million</li>
        <li>Average video size (HD, 2 hours): 3-5 GB</li>
        <li>Total content library: 15,000+ titles</li>
        <li>Bandwidth per stream: 5-25 Mbps (depending on quality)</li>
        <li>Peak bandwidth: 100+ Tbps globally</li>
        <li>Storage for all content: 100+ PB</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. High-Level Architecture</h2>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`
┌─────────────┐                    ┌─────────────────────────────────────────────┐
│   Client    │                    │              Netflix Backend                 │
│  (TV, Web,  │                    │                                             │
│   Mobile)   │                    │  ┌─────────────┐  ┌─────────────────────┐   │
└──────┬──────┘                    │  │   API       │  │  Recommendation     │   │
       │                           │  │   Gateway   │  │     Engine          │   │
       │                           │  └──────┬──────┘  └─────────────────────┘   │
       │                           │         │                                    │
       ▼                           │  ┌──────┴──────────────────────────────┐    │
┌─────────────┐                    │  │         Microservices               │    │
│    CDN      │◀───────────────────│  │  ┌────────┐ ┌────────┐ ┌────────┐  │    │
│   (Open     │  Video Delivery    │  │  │ User   │ │Content │ │Playback│  │    │
│   Connect)  │                    │  │  │Service │ │Service │ │Service │  │    │
└─────────────┘                    │  │  └────────┘ └────────┘ └────────┘  │    │
       │                           │  └─────────────────────────────────────┘    │
       │                           │                                             │
       ▼                           │  ┌─────────────┐  ┌─────────────────────┐   │
┌─────────────┐                    │  │   Data      │  │   Message Queue     │   │
│   Origin    │                    │  │   Stores    │  │     (Kafka)         │   │
│   Servers   │                    │  │(Cassandra,  │  └─────────────────────┘   │
│   (S3)      │                    │  │ MySQL, EVS) │                            │
└─────────────┘                    │  └─────────────┘                            │
                                   └─────────────────────────────────────────────┘
`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Core Components</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Client Applications:</strong> Smart TVs, mobile apps, web browsers, gaming consoles</li>
      <li><strong>CDN (Open Connect):</strong> Netflix's custom CDN with servers in ISPs worldwide</li>
      <li><strong>API Gateway:</strong> Entry point for all client requests (Zuul)</li>
      <li><strong>Microservices:</strong> 700+ microservices handling different functionalities</li>
      <li><strong>Recommendation Engine:</strong> ML-powered personalization system</li>
      <li><strong>Transcoding Pipeline:</strong> Converts uploaded content to multiple formats</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">3. Video Processing Pipeline</h2>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Content Ingestion Flow</h4>
      <pre className="text-sm overflow-x-auto">
{`
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Upload  │───▶│  Encode  │───▶│  Quality │───▶│   DRM    │───▶│  Deploy  │
│  (S3)    │    │(Multiple │    │  Check   │    │ Encrypt  │    │  to CDN  │
│          │    │ formats) │    │          │    │          │    │          │
└──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
`}
      </pre>
    </div>

    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Transcoding</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Convert source video to multiple resolutions (480p, 720p, 1080p, 4K)</li>
          <li>Multiple bitrates for each resolution</li>
          <li>Different codecs: H.264, H.265 (HEVC), VP9, AV1</li>
          <li>Generate 1000+ files per title for all device/quality combinations</li>
          <li>Per-title encoding optimization based on content complexity</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Chunking</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Split video into small chunks (2-10 seconds each)</li>
          <li>Enables adaptive bitrate streaming (ABR)</li>
          <li>Client can switch quality mid-stream</li>
          <li>Faster seek and skip operations</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">DRM (Digital Rights Management)</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Encrypt content to prevent piracy</li>
          <li>Support multiple DRM systems: Widevine (Android), FairPlay (iOS), PlayReady (Windows)</li>
          <li>License server validates playback rights</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Content Delivery Network (Open Connect)</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Netflix operates its own CDN called Open Connect, which handles 100% of video streaming traffic.
        Open Connect Appliances (OCAs) are deployed inside ISP networks worldwide.
      </p>
    </div>

    <h3 className="text-xl font-semibold mt-4">CDN Architecture</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Open Connect Appliances:</strong> Custom servers with 100+ TB storage each</li>
      <li><strong>ISP Partnerships:</strong> OCAs deployed directly in ISP data centers</li>
      <li><strong>Steering Service:</strong> Directs clients to optimal OCA based on location/load</li>
      <li><strong>Proactive Caching:</strong> Popular content pre-positioned during off-peak hours</li>
      <li><strong>Fill Optimization:</strong> OCAs fetch missing content from origin or peer OCAs</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Content Popularity Distribution</h3>
    <div className="bg-gray-50 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside text-sm">
        <li>Top 10% of content serves 80% of traffic</li>
        <li>Hot content cached on all OCAs</li>
        <li>Long-tail content served from regional hubs</li>
        <li>Origin servers (AWS S3) for rarely accessed content</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. Database Schema Design</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Users Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE users (
    user_id         BIGINT PRIMARY KEY,
    email           VARCHAR(255) UNIQUE NOT NULL,
    password_hash   VARCHAR(255),
    subscription    ENUM('basic', 'standard', 'premium'),
    country         VARCHAR(100),
    created_at      TIMESTAMP,
    payment_info    JSON
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Content Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE content (
    content_id      BIGINT PRIMARY KEY,
    title           VARCHAR(500),
    type            ENUM('movie', 'series'),
    description     TEXT,
    release_year    INT,
    duration        INT,  -- minutes for movies
    genres          JSON, -- ["Action", "Thriller"]
    cast            JSON,
    director        VARCHAR(200),
    rating          VARCHAR(10),  -- PG-13, R, etc.
    avg_rating      DECIMAL(3,2),
    thumbnail_url   VARCHAR(500),
    trailer_url     VARCHAR(500)
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Video Files Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE video_files (
    file_id         BIGINT PRIMARY KEY,
    content_id      BIGINT,
    resolution      VARCHAR(20),   -- 720p, 1080p, 4K
    bitrate         INT,           -- kbps
    codec           VARCHAR(50),   -- H.264, HEVC, AV1
    file_size       BIGINT,
    manifest_url    VARCHAR(500),  -- DASH/HLS manifest
    drm_key_id      VARCHAR(100),
    FOREIGN KEY (content_id) REFERENCES content(content_id)
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Viewing History (Cassandra)</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE viewing_history (
    user_id         BIGINT,
    content_id      BIGINT,
    watched_at      TIMESTAMP,
    progress        INT,           -- seconds watched
    completed       BOOLEAN,
    device_type     VARCHAR(50),
    PRIMARY KEY (user_id, watched_at)
) WITH CLUSTERING ORDER BY (watched_at DESC);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">6. API Design</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Get Home Page</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/home
Authorization: Bearer {token}

Response:
{
    "rows": [
        {
            "title": "Continue Watching",
            "items": [...]
        },
        {
            "title": "Trending Now",
            "items": [...]
        },
        {
            "title": "Because You Watched Breaking Bad",
            "items": [...]
        }
    ]
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Get Playback Manifest</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/playback/{content_id}/manifest
Authorization: Bearer {token}

Response:
{
    "content_id": "12345",
    "manifests": {
        "dash": "https://cdn.netflix.com/.../manifest.mpd",
        "hls": "https://cdn.netflix.com/.../master.m3u8"
    },
    "drm": {
        "widevine": { "license_url": "..." },
        "fairplay": { "license_url": "..." }
    },
    "resume_position": 3600  // seconds
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Update Watch Progress</h4>
        <pre className="text-sm mt-2">
{`POST /api/v1/playback/{content_id}/progress
Authorization: Bearer {token}

Request:
{
    "position": 3650,      // seconds
    "completed": false,
    "audio_track": "en",
    "subtitle": "es"
}

Response: 200 OK`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Search Content</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/search?q=stranger+things&type=all

Response:
{
    "results": [
        {
            "content_id": "123",
            "title": "Stranger Things",
            "type": "series",
            "thumbnail": "...",
            "match_score": 0.95
        }
    ]
}`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">7. Adaptive Bitrate Streaming</h2>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">How ABR Works</h4>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>Client requests manifest file (MPD for DASH, M3U8 for HLS)</li>
        <li>Manifest contains URLs for all quality levels</li>
        <li>Client measures network bandwidth</li>
        <li>Client selects appropriate quality for next chunk</li>
        <li>Quality can change every few seconds based on conditions</li>
      </ol>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">DASH (Dynamic Adaptive Streaming over HTTP)</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Open standard (MPEG)</li>
          <li>Used on Android, Web, Smart TVs</li>
          <li>XML-based manifest (MPD)</li>
          <li>Codec agnostic</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">HLS (HTTP Live Streaming)</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Apple proprietary</li>
          <li>Required for iOS, tvOS</li>
          <li>M3U8 playlist format</li>
          <li>Good for live streaming</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">8. Recommendation System</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Netflix's recommendation engine drives 80% of content discovery. It uses a combination
        of collaborative filtering, content-based filtering, and deep learning.
      </p>
    </div>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Data Signals Used</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Viewing history and watch time</li>
          <li>Search queries</li>
          <li>Ratings and thumbs up/down</li>
          <li>Time of day, device type</li>
          <li>Browsing behavior (hover, scroll patterns)</li>
          <li>Similar users' preferences</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Personalization Layers</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>Row Selection:</strong> Which categories to show</li>
          <li><strong>Row Ordering:</strong> Order of rows on homepage</li>
          <li><strong>Item Selection:</strong> Which titles in each row</li>
          <li><strong>Item Ranking:</strong> Order within each row</li>
          <li><strong>Artwork Selection:</strong> Which thumbnail to display</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">9. Scalability Considerations</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Microservices Architecture</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>700+ loosely coupled microservices</li>
          <li>Each service scales independently</li>
          <li>Service mesh for communication</li>
          <li>Circuit breakers for fault tolerance</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Data Storage</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Cassandra: Viewing history, user data</li>
          <li>MySQL: Billing, content metadata</li>
          <li>Elasticsearch: Search indexing</li>
          <li>EVCache: Distributed caching</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Chaos Engineering</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Chaos Monkey: Random instance failures</li>
          <li>Chaos Kong: Simulate region failure</li>
          <li>Test resilience continuously</li>
          <li>Identify weaknesses proactively</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Global Deployment</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>AWS multi-region deployment</li>
          <li>Active-active configuration</li>
          <li>Data replication across regions</li>
          <li>Failover in minutes</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">10. Trade-offs and Decisions</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Custom CDN vs Third-Party</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>Custom (Open Connect):</strong> Higher upfront cost, but full control, lower per-GB cost at scale</li>
          <li><strong>Third-Party (Akamai, CloudFront):</strong> Faster deployment, but higher variable cost</li>
          <li><strong>Decision:</strong> Custom CDN justified at Netflix's scale (100+ Tbps)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Pre-encoding vs Real-time</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>Pre-encoding:</strong> All quality variants ready, higher storage cost</li>
          <li><strong>Real-time:</strong> Lower storage, but compute-intensive, latency risk</li>
          <li><strong>Decision:</strong> Pre-encode everything for best user experience</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Availability vs Consistency</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Prioritize availability for streaming</li>
          <li>Eventual consistency acceptable for recommendations</li>
          <li>Strong consistency for billing and authentication</li>
        </ul>
      </div>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
      <p className="text-blue-800">
        <strong>Key Interview Tip:</strong> Focus on the video delivery pipeline and CDN architecture.
        Discuss how Open Connect achieves low latency and high throughput globally. Also cover
        adaptive bitrate streaming and how quality adjusts to network conditions.
      </p>
    </div>
  </div>
);

export default DesignNetflix;
