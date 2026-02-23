import React from "react";

const LinuxHistory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      History of Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux is an open-source operating system kernel created by Linus Torvalds in 1991.
      The development of Linux was inspired by MINIX, a Unix-like system, and has grown
      from a personal project to one of the most widely used operating systems in the world.
    </p>

    <h2 className="text-3xl font-bold mt-8">Timeline of Linux Development</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Event</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1969</td>
            <td className="p-3 border">UNIX developed at AT&T Bell Labs by Ken Thompson and Dennis Ritchie</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1983</td>
            <td className="p-3 border">Richard Stallman launches the GNU Project to create a free Unix-like OS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1987</td>
            <td className="p-3 border">Andrew Tanenbaum creates MINIX for educational purposes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1991</td>
            <td className="p-3 border">Linus Torvalds announces Linux on comp.os.minix newsgroup</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1992</td>
            <td className="p-3 border">Linux re-licensed under GNU GPL, enabling widespread distribution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1993</td>
            <td className="p-3 border">Slackware and Debian distributions released</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1994</td>
            <td className="p-3 border">Linux 1.0 released, Red Hat Linux founded</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1996</td>
            <td className="p-3 border">Linux 2.0 released with SMP support</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2004</td>
            <td className="p-3 border">Ubuntu 4.10 (Warty Warthog) released</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2011</td>
            <td className="p-3 border">Linux 3.0 released, celebrating 20 years of Linux</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2015</td>
            <td className="p-3 border">Linux 4.0 released with live kernel patching</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2019</td>
            <td className="p-3 border">Linux 5.0 released</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Birth of Linux</h2>
    <p className="leading-relaxed">
      On August 25, 1991, Linus Torvalds, a 21-year-old Finnish student at the University
      of Helsinki, posted a message to the comp.os.minix newsgroup announcing his new project:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900 text-sm">
      <pre className="whitespace-pre-wrap text-gray-900">
{`"Hello everybody out there using minix -

I'm doing a (free) operating system (just a hobby, won't be big
and professional like gnu) for 386(486) AT clones. This has been
brewing since april, and is starting to get ready."

- Linus Torvalds, August 25, 1991`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Figures in Linux History</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Person</th>
            <th className="p-3 border">Contribution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Linus Torvalds</td>
            <td className="p-3 border">Creator of the Linux kernel</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Richard Stallman</td>
            <td className="p-3 border">Founded GNU Project and Free Software Foundation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ken Thompson</td>
            <td className="p-3 border">Co-creator of UNIX</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dennis Ritchie</td>
            <td className="p-3 border">Co-creator of UNIX and C programming language</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Andrew Tanenbaum</td>
            <td className="p-3 border">Creator of MINIX, inspiration for Linux</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why GNU/Linux?</h2>
    <p className="leading-relaxed">
      While Linus Torvalds created the Linux kernel, the complete operating system
      relies heavily on GNU software tools created by Richard Stallman and the Free
      Software Foundation. This is why some refer to the complete system as GNU/Linux.
    </p>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">The GNU/Linux System Components:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li><strong>Kernel:</strong> Linux (created by Linus Torvalds)</li>
        <li><strong>Shell:</strong> Bash (GNU Bourne-Again Shell)</li>
        <li><strong>Core Utilities:</strong> GNU coreutils (ls, cp, mv, etc.)</li>
        <li><strong>Compiler:</strong> GCC (GNU Compiler Collection)</li>
        <li><strong>C Library:</strong> glibc (GNU C Library)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Linux Mascot - Tux</h2>
    <p className="leading-relaxed">
      The official mascot of Linux is Tux, a penguin character designed by Larry Ewing in 1996.
      Linus Torvalds mentioned being bitten by a penguin at a zoo in Australia, which influenced
      the choice of mascot. Tux has since become a widely recognized symbol of Linux and
      open-source software.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Linux was created by Linus Torvalds in 1991 as a hobby project</li>
        <li>UNIX (1969) and MINIX influenced the development of Linux</li>
        <li>The GNU Project provided essential tools that complement the Linux kernel</li>
        <li>Linux was licensed under GPL in 1992, enabling open-source distribution</li>
        <li>The Linux mascot Tux was created in 1996 by Larry Ewing</li>
        <li>Linux has evolved from a personal project to powering most of the internet</li>
      </ul>
    </div>
  </div>
);

export default LinuxHistory;
