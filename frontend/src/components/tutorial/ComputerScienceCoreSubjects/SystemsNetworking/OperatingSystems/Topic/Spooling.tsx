import React from 'react';

const Spooling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Spooling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Spooling (Simultaneous Peripheral Operations On-Line) is a technique where data intended
      for slow I/O devices is first written to an intermediate storage (usually disk), then
      transferred to the device in the background. This allows multiple processes to share
      a single device that normally can only be used by one process at a time.
    </p>

    {/* Spooling Concept */}
    <h2 className="text-3xl font-bold mt-8">The Spooling Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Problem: Exclusive Access Devices

Without Spooling:
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Process A              Printer               Process B               │
│   ┌─────────┐           ┌─────────┐           ┌─────────┐             │
│   │ Wants to│           │ BUSY    │           │ Wants to│             │
│   │ print   │──────────►│ Printing│◄──────────│ print   │             │
│   │         │           │         │           │         │             │
│   └─────────┘           └─────────┘           └─────────┘             │
│                              │                      │                   │
│   Process A holds printer    │                      │                   │
│   for entire print job       │       Process B must WAIT               │
│   (maybe hours!)             │       (blocked until A finishes)        │
│                              │                      │                   │
│   Problems:                                                            │
│   • Process B wastes CPU time waiting                                  │
│   • Process A tied up even when not sending data                       │
│   • Slow device blocks fast processes                                  │
│   • No way to prioritize or reorder jobs                               │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

With Spooling:
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Process A    Process B         Spool       Spooler      Printer     │
│   ┌───────┐   ┌───────┐        (Disk)       Daemon                    │
│   │ Print │   │ Print │      ┌─────────┐   ┌─────────┐   ┌─────────┐ │
│   │ Job A │──►│ Job B │─────►│ Job A   │──►│ Manages │──►│ Prints  │ │
│   │       │   │       │      │ Job B   │   │ Queue   │   │ Jobs    │ │
│   └───────┘   └───────┘      │ Job C   │   │         │   │         │ │
│      │           │           └─────────┘   └─────────┘   └─────────┘ │
│      │           │                                                    │
│      │           └── Completes immediately (fast)                     │
│      └────────────── Completes immediately (fast)                     │
│                                                                         │
│   Both processes finish quickly!                                       │
│   Spooler handles slow printer in background.                          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Spooling Components */}
    <h2 className="text-3xl font-bold mt-8">Spooling System Components</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Spooling System Architecture:

┌─────────────────────────────────────────────────────────────────────────┐
│                           SPOOLING SYSTEM                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  1. SPOOL DIRECTORY (Job Queue)                                 │   │
│  │  ┌─────────────────────────────────────────────────────────────┐│   │
│  │  │  Job ID │ Owner  │ File Path    │ Priority │ Status  │ Size ││   │
│  │  ├─────────┼────────┼──────────────┼──────────┼─────────┼──────┤│   │
│  │  │  001    │ alice  │ /spool/001   │ Normal   │ Waiting │ 50KB ││   │
│  │  │  002    │ bob    │ /spool/002   │ High     │ Printing│ 10KB ││   │
│  │  │  003    │ carol  │ /spool/003   │ Normal   │ Waiting │ 25KB ││   │
│  │  │  004    │ alice  │ /spool/004   │ Low      │ Waiting │ 100KB││   │
│  │  └─────────┴────────┴──────────────┴──────────┴─────────┴──────┘│   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  2. SPOOL FILES (Data Storage)                                  │   │
│  │  ┌─────────────────────────────────────────────────────────────┐│   │
│  │  │  /var/spool/lpd/                                            ││   │
│  │  │  ├── cf001  (control file - job metadata)                   ││   │
│  │  │  ├── df001  (data file - actual print data)                 ││   │
│  │  │  ├── cf002                                                  ││   │
│  │  │  ├── df002                                                  ││   │
│  │  │  └── ...                                                    ││   │
│  │  └─────────────────────────────────────────────────────────────┘│   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  3. SPOOLER DAEMON (Background Process)                         │   │
│  │  ┌─────────────────────────────────────────────────────────────┐│   │
│  │  │  • Runs continuously in background                          ││   │
│  │  │  • Monitors job queue for new jobs                          ││   │
│  │  │  • Selects next job based on priority/scheduling            ││   │
│  │  │  • Sends data to device at device's pace                    ││   │
│  │  │  • Handles device errors and retries                        ││   │
│  │  │  • Removes completed jobs from spool                        ││   │
│  │  │  • Notifies users of job completion/errors                  ││   │
│  │  └─────────────────────────────────────────────────────────────┘│   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Print Spooling Example */}
    <h2 className="text-3xl font-bold mt-8">Print Spooling Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Print Spooling Process:

Step 1: User Submits Print Job
───────────────────────────────────────────────────────────────────────
   User types: lpr document.pdf  (or clicks Print in application)

   ┌─────────────┐
   │ Application │
   │  (Word, etc)│
   └──────┬──────┘
          │ print command
          ▼
   ┌─────────────┐
   │  lpr/CUPS   │  Print client
   │   Client    │
   └──────┬──────┘
          │
          ▼

Step 2: Job Sent to Spool
───────────────────────────────────────────────────────────────────────
   Client creates spool files and adds job to queue

   ┌─────────────────────────────────────────────────────────────────┐
   │                      SPOOL AREA                                 │
   │                                                                 │
   │   Control File (cf001):          Data File (df001):            │
   │   ┌──────────────────────┐       ┌──────────────────────┐      │
   │   │ Host: workstation1   │       │ %PDF-1.4             │      │
   │   │ User: alice          │       │ ... PDF content ...  │      │
   │   │ Job: document.pdf    │       │ ... 50 pages ...     │      │
   │   │ Copies: 1            │       │ %%EOF                │      │
   │   │ Priority: normal     │       │                      │      │
   │   │ Submitted: 10:30 AM  │       │                      │      │
   │   └──────────────────────┘       └──────────────────────┘      │
   │                                                                 │
   └─────────────────────────────────────────────────────────────────┘

   Print client RETURNS IMMEDIATELY to user!
   User can continue working while job waits in queue.


Step 3: Spooler Daemon Processes Queue
───────────────────────────────────────────────────────────────────────
   Daemon continuously monitors queue, processes jobs in order

   ┌─────────────┐
   │   Spooler   │
   │   Daemon    │
   │  (lpd/cupsd)│
   └──────┬──────┘
          │
          │ 1. Check queue for pending jobs
          │ 2. Select highest priority/oldest job
          │ 3. Open spool file
          │ 4. Convert format if needed (PDF → PostScript)
          ▼
   ┌─────────────┐
   │   Printer   │
   │   Driver    │
   └──────┬──────┘
          │
          │ Send data at printer's pace
          │ (slow, character by character or page by page)
          ▼
   ┌─────────────┐
   │   Printer   │  Physical output
   │   Hardware  │
   └─────────────┘


Step 4: Job Completion
───────────────────────────────────────────────────────────────────────
   • Daemon removes completed job from queue
   • Deletes spool files to free disk space
   • Optionally notifies user (email, desktop notification)
   • Moves to next job in queue

   Queue Before:                    Queue After:
   ┌────────────────────────┐       ┌────────────────────────┐
   │ 1. document.pdf ██████ │       │ 1. report.docx □□□□□□  │
   │ 2. report.docx  □□□□□□ │ ───►  │ 2. image.png   □□□□□□  │
   │ 3. image.png    □□□□□□ │       │ 3. (empty)            │
   └────────────────────────┘       └────────────────────────┘
       ██ = Completed                 □ = Waiting
`}
      </pre>
    </div>

    {/* Job Queue Management */}
    <h2 className="text-3xl font-bold mt-8">Print Queue Management Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Common Print Queue Commands (Unix/Linux):

┌─────────────────────────────────────────────────────────────────────────┐
│  Command          │  Description                                        │
├───────────────────┼─────────────────────────────────────────────────────┤
│  lpr file.pdf     │  Submit print job to default printer                │
│  lpr -P laser     │  Submit to specific printer named "laser"           │
│  lpr -# 3         │  Print 3 copies                                     │
│                   │                                                     │
│  lpq              │  Display print queue status                         │
│  lpq -P laser     │  Display queue for specific printer                 │
│                   │                                                     │
│  lprm 123         │  Remove job number 123 from queue                   │
│  lprm -           │  Remove all your jobs from queue                    │
│  lprm -P laser 45 │  Remove job 45 from laser printer queue            │
│                   │                                                     │
│  lpc status       │  Show printer status (admin)                        │
│  lpc stop laser   │  Stop accepting jobs for laser printer             │
│  lpc start laser  │  Start accepting jobs                               │
└───────────────────┴─────────────────────────────────────────────────────┘

Example lpq output:
┌─────────────────────────────────────────────────────────────────────────┐
│ Rank    Owner   Job   Files                    Total Size              │
│ active  alice   001   document.pdf             1,234,567 bytes         │
│ 1st     bob     002   report.docx              456,789 bytes           │
│ 2nd     alice   003   presentation.ppt         2,345,678 bytes         │
│ 3rd     carol   004   photo.jpg                567,890 bytes           │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Benefits of Spooling */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Spooling</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Process Independence</td>
            <td className="p-3 border">Processes do not wait for slow devices; they return immediately</td>
          </tr>
          <tr>
            <td className="p-3 border">Device Sharing</td>
            <td className="p-3 border">Multiple processes can share exclusive-access devices safely</td>
          </tr>
          <tr>
            <td className="p-3 border">Job Queuing</td>
            <td className="p-3 border">Jobs are queued and processed in order, with priority support</td>
          </tr>
          <tr>
            <td className="p-3 border">Output Integrity</td>
            <td className="p-3 border">Output from different jobs is not interleaved</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Recovery</td>
            <td className="p-3 border">Failed jobs can be restarted without re-running the process</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource Efficiency</td>
            <td className="p-3 border">CPU is freed while slow I/O happens in background</td>
          </tr>
          <tr>
            <td className="p-3 border">User Convenience</td>
            <td className="p-3 border">Users can manage jobs (view, cancel, reorder, prioritize)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Spooling vs Buffering */}
    <h2 className="text-3xl font-bold mt-8">Spooling vs Buffering</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Spooling</th>
            <th className="p-3 border">Buffering</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Storage</td>
            <td className="p-3 border">Disk (persistent)</td>
            <td className="p-3 border">RAM (volatile)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Size</td>
            <td className="p-3 border">Entire job (large)</td>
            <td className="p-3 border">Small portion</td>
          </tr>
          <tr>
            <td className="p-3 border">Duration</td>
            <td className="p-3 border">Until job completes</td>
            <td className="p-3 border">Temporary transit</td>
          </tr>
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">Device sharing, queuing</td>
            <td className="p-3 border">Speed mismatch</td>
          </tr>
          <tr>
            <td className="p-3 border">Overlap</td>
            <td className="p-3 border">Job submission and output</td>
            <td className="p-3 border">I/O and processing</td>
          </tr>
          <tr>
            <td className="p-3 border">Management</td>
            <td className="p-3 border">By dedicated daemon</td>
            <td className="p-3 border">By OS/driver</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Other Applications */}
    <h2 className="text-3xl font-bold mt-8">Other Applications of Spooling</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Email:</strong> Messages are spooled to disk before being sent, allowing
        the mail client to return immediately.
      </li>
      <li>
        <strong>Batch Job Processing:</strong> Jobs are submitted to a queue and executed
        when resources are available.
      </li>
      <li>
        <strong>Fax Servers:</strong> Outgoing faxes are spooled and sent one at a time
        over the phone line.
      </li>
      <li>
        <strong>Network File Transfer:</strong> Files are queued for transfer over slow
        WAN links.
      </li>
      <li>
        <strong>Database Logging:</strong> Transaction logs are spooled to disk before
        being applied.
      </li>
    </ul>

    {/* Modern Print Systems */}
    <h2 className="text-3xl font-bold mt-8">Modern Print Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
CUPS (Common Unix Printing System):

┌─────────────────────────────────────────────────────────────────────────┐
│                           CUPS Architecture                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌───────────────┐                                                    │
│   │  Application  │  (Word Processor, Browser, etc.)                   │
│   └───────┬───────┘                                                    │
│           │ Print Request                                              │
│           ▼                                                            │
│   ┌───────────────────────────────────────────────────────────────┐   │
│   │                     CUPS Scheduler (cupsd)                    │   │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐   │   │
│   │  │   Job       │  │   Printer   │  │   Web Interface     │   │   │
│   │  │   Queue     │  │   Config    │  │   (localhost:631)   │   │   │
│   │  └─────────────┘  └─────────────┘  └─────────────────────┘   │   │
│   └───────────────────────────────────────────────────────────────┘   │
│           │                                                            │
│           ▼                                                            │
│   ┌───────────────────────────────────────────────────────────────┐   │
│   │                      Filter Chain                             │   │
│   │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────────────┐  │   │
│   │  │ PDF to  │─►│ PDF to  │─►│ Raster  │─►│ Printer-specific│  │   │
│   │  │ PostScrpt│  │ Raster  │  │ to PCL  │  │ Backend         │  │   │
│   │  └─────────┘  └─────────┘  └─────────┘  └─────────────────┘  │   │
│   └───────────────────────────────────────────────────────────────┘   │
│           │                                                            │
│           ▼                                                            │
│   ┌───────────────┐                                                    │
│   │    Printer    │  USB, Network, IPP                                │
│   └───────────────┘                                                    │
│                                                                         │
│   Spool Directory: /var/spool/cups/                                    │
│   Configuration: /etc/cups/                                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Windows Print Spooler:
• Service: Spooler (spoolsv.exe)
• Spool Directory: C:\\Windows\\System32\\spool\\PRINTERS
• Manages local and network printers
• Supports priorities, scheduling, and pooling
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Spooling stores output data on disk, allowing processes to complete without waiting</li>
      <li>A spooler daemon processes jobs from the queue in the background</li>
      <li>Enables sharing of exclusive-access devices (printers) among multiple processes</li>
      <li>Print spooling is the most common example (lpr, CUPS, Windows Print Spooler)</li>
      <li>Jobs can be managed: viewed, canceled, reordered, prioritized</li>
      <li>Output integrity is maintained - jobs are not interleaved</li>
      <li>Spooling differs from buffering: uses disk, stores entire jobs, enables queuing</li>
    </ul>
  </div>
);

export default Spooling;
