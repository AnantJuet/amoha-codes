import React from 'react';

const FCFS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      First Come First Serve (FCFS) Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      First Come First Serve (FCFS) is the simplest CPU scheduling algorithm. As the name suggests,
      the process that arrives first is executed first. It follows a first-in, first-out (FIFO)
      queue structure.
    </p>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">How FCFS Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Processes are placed in a ready queue in order of their arrival</li>
      <li>The CPU is allocated to the first process in the queue</li>
      <li>The process runs until it completes or blocks for I/O</li>
      <li>When the process finishes, the next process in the queue gets the CPU</li>
      <li>New processes are added to the end of the queue</li>
    </ul>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Non-preemptive:</strong> Once a process starts, it runs to completion</li>
      <li><strong>Simple:</strong> Easy to understand and implement</li>
      <li><strong>Fair:</strong> Every process eventually gets CPU time</li>
      <li><strong>No starvation:</strong> All processes will eventually execute</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider the following processes with their arrival times and burst times:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Arrival Time</th>
            <th className="p-3 border">Burst Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">24</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Gantt Chart:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
|     P1      |  P2  |  P3  |
0            24     27     30
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Calculation:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Completion Time</th>
            <th className="p-3 border">Turnaround Time</th>
            <th className="p-3 border">Waiting Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">24</td>
            <td className="p-3 border">24 - 0 = 24</td>
            <td className="p-3 border">24 - 24 = 0</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">27</td>
            <td className="p-3 border">27 - 1 = 26</td>
            <td className="p-3 border">26 - 3 = 23</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">30</td>
            <td className="p-3 border">30 - 2 = 28</td>
            <td className="p-3 border">28 - 3 = 25</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-4">
      <strong>Average Waiting Time:</strong> (0 + 23 + 25) / 3 = 16 ms<br/>
      <strong>Average Turnaround Time:</strong> (24 + 26 + 28) / 3 = 26 ms
    </p>

    {/* Convoy Effect */}
    <h2 className="text-3xl font-bold mt-8">Convoy Effect</h2>
    <p className="leading-relaxed">
      The convoy effect is a major problem with FCFS. When a CPU-bound process (long burst time)
      arrives before I/O-bound processes (short burst time), all shorter processes must wait,
      leading to poor CPU and device utilization.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Short processes wait behind long processes</li>
      <li>Results in high average waiting time</li>
      <li>I/O devices remain idle while processes wait for CPU</li>
      <li>Overall system throughput decreases</li>
    </ul>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simple to understand and implement</li>
      <li>No starvation - every process gets executed</li>
      <li>No complex scheduling decisions</li>
      <li>Low scheduling overhead</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Convoy effect leads to poor performance</li>
      <li>High average waiting time</li>
      <li>Not suitable for time-sharing systems</li>
      <li>Does not consider process priority or burst time</li>
      <li>Non-preemptive nature can cause problems in interactive systems</li>
    </ul>

    {/* When to Use */}
    <h2 className="text-3xl font-bold mt-8">When to Use FCFS</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Batch processing systems where response time is not critical</li>
      <li>Systems where all processes have similar burst times</li>
      <li>Simple embedded systems</li>
      <li>Print queue management</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>FCFS is non-preemptive and uses FIFO queue</li>
      <li>Average waiting time is generally high and varies with process order</li>
      <li>The convoy effect is the main drawback</li>
      <li>Best suited for batch systems, not interactive systems</li>
    </ul>
  </div>
);

export default FCFS;
