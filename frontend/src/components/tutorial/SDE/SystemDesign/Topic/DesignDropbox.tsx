import React from 'react';

const DesignDropbox: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Design Dropbox
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dropbox is a cloud-based file storage and synchronization service that allows users to
      store files online and sync them across multiple devices. Users can share files and folders
      with others and collaborate in real-time. Designing Dropbox involves handling large file
      uploads, efficient synchronization, and conflict resolution.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Requirements Gathering</h2>

    <h3 className="text-xl font-semibold mt-4">Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Users can upload and download files from any device</li>
      <li>Files are automatically synced across all user devices</li>
      <li>Users can share files and folders with others</li>
      <li>Support for file versioning and rollback</li>
      <li>Offline access with sync when online</li>
      <li>Collaborative editing notifications</li>
      <li>Desktop, mobile, and web clients</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Non-Functional Requirements</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>High Availability:</strong> 99.99% uptime</li>
      <li><strong>Reliability:</strong> No data loss (durability: 99.999999999%)</li>
      <li><strong>Low Latency:</strong> Fast sync, minimal delay</li>
      <li><strong>Scalability:</strong> Support billions of files, millions of users</li>
      <li><strong>Bandwidth Efficiency:</strong> Minimize data transfer for syncing</li>
      <li><strong>Security:</strong> End-to-end encryption, access control</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Capacity Estimation</h3>
    <div className="bg-gray-100 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside space-y-1 text-sm">
        <li>Total users: 700 million</li>
        <li>Daily active users: 50 million</li>
        <li>Average files per user: 200</li>
        <li>Average file size: 1 MB</li>
        <li>Total storage: 700M x 200 x 1MB = 140 PB</li>
        <li>Daily uploads: 1 billion files</li>
        <li>Read:Write ratio: 1:1 (sync heavy)</li>
        <li>Peak file operations: 100K per second</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. High-Level Architecture</h2>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`
┌─────────────────┐
│  Desktop/Mobile │
│    Client       │
│  ┌───────────┐  │     ┌─────────────────────────────────────────────────┐
│  │  Watcher  │  │     │              Dropbox Backend                    │
│  │  Service  │  │     │                                                 │
│  ├───────────┤  │     │  ┌─────────────┐    ┌──────────────────────┐   │
│  │  Chunker  │  │────▶│  │   API       │    │   Sync Service       │   │
│  │  Service  │  │     │  │   Gateway   │────│   (WebSocket)        │   │
│  ├───────────┤  │     │  └──────┬──────┘    └──────────────────────┘   │
│  │  Local DB │  │     │         │                                       │
│  └───────────┘  │     │  ┌──────┴──────────────────────────────────┐   │
└─────────────────┘     │  │           Microservices                  │   │
                        │  │  ┌────────┐ ┌────────┐ ┌──────────────┐ │   │
                        │  │  │Metadata│ │ Block  │ │Notification │ │   │
                        │  │  │Service │ │Service │ │  Service    │ │   │
                        │  │  └────────┘ └────────┘ └──────────────┘ │   │
                        │  └─────────────────────────────────────────┘   │
                        │                                                 │
                        │  ┌─────────────┐    ┌─────────────────────┐    │
                        │  │  Metadata   │    │   Block Storage     │    │
                        │  │  Database   │    │      (S3)           │    │
                        │  │ (MySQL/PG)  │    └─────────────────────┘    │
                        │  └─────────────┘                               │
                        └─────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Core Components</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Client Application:</strong> Desktop/mobile app with file watcher, chunker, and local database</li>
      <li><strong>API Gateway:</strong> Entry point for all client requests</li>
      <li><strong>Metadata Service:</strong> Manages file/folder metadata, permissions, versions</li>
      <li><strong>Block Service:</strong> Handles upload/download of file chunks</li>
      <li><strong>Sync Service:</strong> Maintains WebSocket connections for real-time sync</li>
      <li><strong>Notification Service:</strong> Notifies clients of file changes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">3. File Chunking and Deduplication</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Large files are split into smaller chunks (typically 4MB each). This enables efficient
        uploads, deduplication, and delta sync. Only modified chunks are uploaded on file changes.
      </p>
    </div>

    <div className="space-y-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Chunking Process</h4>
        <ol className="list-decimal list-inside mt-2 text-sm">
          <li>File is split into fixed-size chunks (4MB)</li>
          <li>Each chunk is hashed using SHA-256</li>
          <li>Hash serves as unique identifier for the chunk</li>
          <li>Only chunks not already in storage are uploaded</li>
          <li>File metadata stores ordered list of chunk hashes</li>
        </ol>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Deduplication Benefits</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Same file shared by multiple users = single copy in storage</li>
          <li>Partial file changes = only modified chunks uploaded</li>
          <li>Significant bandwidth and storage savings</li>
          <li>Example: 100 users share same 1GB file = 1GB stored, not 100GB</li>
        </ul>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">Content-Defined Chunking (Advanced)</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Variable-size chunks based on content boundaries</li>
          <li>Uses rolling hash (Rabin fingerprint)</li>
          <li>Better dedup for files with insertions/deletions</li>
          <li>Chunks stay stable when content shifts</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Database Schema Design</h2>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Users Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE users (
    user_id         BIGINT PRIMARY KEY,
    email           VARCHAR(255) UNIQUE NOT NULL,
    password_hash   VARCHAR(255),
    storage_limit   BIGINT,           -- bytes
    storage_used    BIGINT DEFAULT 0,
    created_at      TIMESTAMP,
    last_sync       TIMESTAMP
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Files/Folders Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE file_metadata (
    file_id         BIGINT PRIMARY KEY,
    user_id         BIGINT NOT NULL,
    parent_id       BIGINT,           -- folder containing this file
    name            VARCHAR(255) NOT NULL,
    is_folder       BOOLEAN DEFAULT FALSE,
    size            BIGINT,
    checksum        VARCHAR(64),      -- SHA-256 of entire file
    version         INT DEFAULT 1,
    created_at      TIMESTAMP,
    modified_at     TIMESTAMP,
    is_deleted      BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (parent_id) REFERENCES file_metadata(file_id),
    UNIQUE (user_id, parent_id, name)
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">File Chunks Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE file_chunks (
    file_id         BIGINT,
    chunk_index     INT,              -- order of chunk in file
    chunk_hash      VARCHAR(64),      -- SHA-256 of chunk
    chunk_size      INT,

    PRIMARY KEY (file_id, chunk_index),
    FOREIGN KEY (file_id) REFERENCES file_metadata(file_id)
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Block Storage Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE blocks (
    block_hash      VARCHAR(64) PRIMARY KEY,  -- SHA-256
    storage_path    VARCHAR(500),             -- S3 path
    size            INT,
    reference_count INT DEFAULT 1,            -- for garbage collection
    created_at      TIMESTAMP
);`}
      </pre>
    </div>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">File Versions Table</h4>
      <pre className="text-sm overflow-x-auto">
{`CREATE TABLE file_versions (
    version_id      BIGINT PRIMARY KEY,
    file_id         BIGINT,
    version_number  INT,
    size            BIGINT,
    checksum        VARCHAR(64),
    modified_at     TIMESTAMP,
    modified_by     BIGINT,

    FOREIGN KEY (file_id) REFERENCES file_metadata(file_id)
);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. API Design</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Upload File (Chunked)</h4>
        <pre className="text-sm mt-2">
{`// Step 1: Initialize upload
POST /api/v1/files/upload/init
{
    "name": "document.pdf",
    "parent_id": "folder_123",
    "size": 10485760,
    "checksum": "sha256:abc123...",
    "chunks": [
        {"index": 0, "hash": "sha256:chunk1..."},
        {"index": 1, "hash": "sha256:chunk2..."},
        {"index": 2, "hash": "sha256:chunk3..."}
    ]
}

Response:
{
    "upload_id": "upload_456",
    "chunks_to_upload": [0, 2],  // chunk 1 already exists
    "upload_urls": {
        "0": "https://s3.../presigned-url-chunk-0",
        "2": "https://s3.../presigned-url-chunk-2"
    }
}

// Step 2: Upload each missing chunk
PUT {presigned_url}
Body: [raw chunk bytes]

// Step 3: Complete upload
POST /api/v1/files/upload/complete
{
    "upload_id": "upload_456"
}

Response:
{
    "file_id": "file_789",
    "version": 1
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Download File</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/files/{file_id}/download

Response:
{
    "file_id": "file_789",
    "name": "document.pdf",
    "size": 10485760,
    "chunks": [
        {
            "index": 0,
            "download_url": "https://s3.../presigned-url"
        },
        ...
    ]
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Get Changes (Delta Sync)</h4>
        <pre className="text-sm mt-2">
{`GET /api/v1/sync/changes?cursor={last_sync_cursor}

Response:
{
    "changes": [
        {
            "type": "file_added",
            "file_id": "123",
            "path": "/Documents/new.pdf",
            "version": 1
        },
        {
            "type": "file_modified",
            "file_id": "456",
            "path": "/Photos/image.jpg",
            "version": 3
        },
        {
            "type": "file_deleted",
            "file_id": "789",
            "path": "/old.txt"
        }
    ],
    "cursor": "new_cursor_value",
    "has_more": false
}`}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Share File/Folder</h4>
        <pre className="text-sm mt-2">
{`POST /api/v1/sharing/share
{
    "file_id": "file_789",
    "share_with": [
        {"email": "user@example.com", "permission": "edit"},
        {"email": "viewer@example.com", "permission": "view"}
    ],
    "link_settings": {
        "enabled": true,
        "password": "optional",
        "expires_at": "2026-02-01T00:00:00Z"
    }
}

Response:
{
    "share_id": "share_123",
    "link": "https://dropbox.com/s/abc123"
}`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">6. Synchronization Flow</h2>

    <h3 className="text-xl font-semibold mt-4">Client-Side Architecture</h3>
    <div className="bg-gray-50 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li><strong>File Watcher:</strong> Monitors local folder for changes (inotify/FSEvents)</li>
        <li><strong>Indexer:</strong> Computes file hashes and detects modifications</li>
        <li><strong>Chunker:</strong> Splits files into chunks for upload</li>
        <li><strong>Sync Engine:</strong> Coordinates with server, handles conflicts</li>
        <li><strong>Local Database:</strong> SQLite storing local file metadata</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold mt-4">Sync Algorithm</h3>
    <ol className="list-decimal list-inside space-y-2">
      <li>Client detects local file change via file watcher</li>
      <li>Indexer computes new file hash and identifies modified chunks</li>
      <li>Client queries server for which chunks are already stored</li>
      <li>Only missing chunks are uploaded to block storage</li>
      <li>Metadata service is updated with new file version</li>
      <li>Server pushes notification to other connected clients</li>
      <li>Other clients pull changes and reconstruct file from chunks</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">7. Conflict Resolution</h2>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <h4 className="font-bold text-yellow-800">Conflict Scenarios</h4>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>Same file edited on two devices while offline</li>
        <li>File deleted on one device while edited on another</li>
        <li>Folder renamed while file inside is being modified</li>
      </ul>
    </div>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Resolution Strategies</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>Last Writer Wins:</strong> Simple but can lose data</li>
          <li><strong>Create Conflict Copy:</strong> Dropbox approach - rename conflicted file</li>
          <li><strong>Merge:</strong> For text files, attempt automatic merge</li>
          <li><strong>User Resolution:</strong> Prompt user to choose version</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Dropbox Conflict Copy Naming</h4>
        <pre className="text-sm mt-2">
{`Original: document.pdf
Conflict: document (John's conflicted copy 2026-01-19).pdf`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">8. Scalability Considerations</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Metadata Scaling</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Shard by user_id</li>
          <li>Use MySQL/PostgreSQL with replication</li>
          <li>Hot shards for active users</li>
          <li>Archive cold data to cheaper storage</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Block Storage</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>S3 for durability (11 9s)</li>
          <li>Content-addressed storage</li>
          <li>Cross-region replication</li>
          <li>Lifecycle policies for old versions</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Real-time Sync</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>WebSocket connections per client</li>
          <li>Pub/sub for change notifications</li>
          <li>Long polling as fallback</li>
          <li>Connection pooling</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Caching</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Redis for hot metadata</li>
          <li>CDN for frequently accessed files</li>
          <li>Local client cache</li>
          <li>Block existence cache</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">9. Security Considerations</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Encryption</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>In Transit:</strong> TLS 1.3 for all connections</li>
          <li><strong>At Rest:</strong> AES-256 encryption for stored blocks</li>
          <li><strong>Key Management:</strong> Per-user encryption keys</li>
          <li><strong>Zero-Knowledge (Optional):</strong> Client-side encryption</li>
        </ul>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Access Control</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>OAuth 2.0 for authentication</li>
          <li>Fine-grained permissions (view, edit, share)</li>
          <li>Shared link password protection</li>
          <li>Audit logs for compliance</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">10. Trade-offs and Decisions</h2>

    <div className="space-y-4 mt-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Fixed vs Variable Chunk Size</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>Fixed (4MB):</strong> Simpler, predictable, good for most files</li>
          <li><strong>Variable (Rabin):</strong> Better dedup, handles insertions well</li>
          <li><strong>Decision:</strong> Start with fixed, consider variable for optimization</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Push vs Pull Sync</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li><strong>Push (WebSocket):</strong> Real-time, but maintains many connections</li>
          <li><strong>Pull (Polling):</strong> Simpler, but delayed sync</li>
          <li><strong>Decision:</strong> Push with WebSocket, fallback to long polling</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-bold text-yellow-800">Compression</h4>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Compress chunks before upload (gzip, LZ4)</li>
          <li>Skip for already-compressed files (jpg, mp4, zip)</li>
          <li>Trade CPU for bandwidth savings</li>
        </ul>
      </div>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
      <p className="text-blue-800">
        <strong>Key Interview Tip:</strong> Focus on the chunking and deduplication mechanism
        as it is the core innovation. Explain how delta sync works and why it saves bandwidth.
        Also discuss conflict resolution strategies for collaborative scenarios.
      </p>
    </div>
  </div>
);

export default DesignDropbox;
