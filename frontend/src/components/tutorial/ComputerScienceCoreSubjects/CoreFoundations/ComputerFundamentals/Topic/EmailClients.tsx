import React from 'react';

const OutlookTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Microsoft Outlook ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is Microsoft Outlook
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Struggling to manage emails and schedules effectively? <strong>Microsoft Outlook</strong> is a powerful email client and personal information manager designed for seamless email organization, calendar scheduling, task management, and contact storage. Whether you're a business professional, student, or personal user, Outlook streamlines communication and productivity with features like focused inbox, smart filters, automated workflows, and advanced security.
    </p>
    <p className="leading-relaxed">
      With Microsoft 365 integration, Outlook enhances collaboration through Teams, OneDrive, and SharePoint, making it the preferred choice for business email management. In this guide, you’ll discover what Microsoft Outlook is, its features, benefits, history, and how it compares to Gmail, helping you maximize efficiency and organization.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold  mt-8">Overview of Microsoft Outlook</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Outlook Desktop App – Installed on Windows/macOS as part of Microsoft 365.</li>
      <li>Outlook Web App (OWA) – Browser-based version accessible from anywhere.</li>
      <li>Outlook Mobile App – Available on iOS and Android for on-the-go access.</li>
    </ul>

    {/* Uses */}
    <h2 className="text-3xl font-bold  mt-8">What is Microsoft Outlook Used For</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li>Email Management: Send, receive, and organize emails effectively with filters and rules.</li>
      <li>Scheduling & Calendar: Schedule meetings, appointments, and reminders with Teams & Zoom integration.</li>
      <li>Task & To-Do Management: Set priorities, track deadlines, and manage daily tasks.</li>
      <li>Contact & People Management: Store and sync contacts for professional networking.</li>
      <li>Collaboration Tools: Share files, schedule group meetings, and automate workflows.</li>
      <li>Security & Encryption: End-to-end encryption & phishing protection for sensitive emails.</li>
    </ul>

    {/* Features and Benefits */}
    <h2 className="text-3xl font-bold  mt-8">Microsoft Outlook Features and Benefits</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Advanced Email Management:</strong> Multiple accounts, focused inbox, smart filters, auto-archive, and email rules.</li>
      <li><strong>Calendar & Scheduling:</strong> Create & sync calendars, set reminders, schedule online meetings, and share calendars.</li>
      <li><strong>Task & Project Management:</strong> Task lists, deadlines, assigning tasks, and tracking progress via Microsoft To Do.</li>
      <li><strong>Security & Encryption:</strong> Two-Factor Authentication (2FA), end-to-end encryption, and spam protection.</li>
    </ul>

    {/* History Table */}
    <h2 className="text-3xl font-bold  mt-8">History and Evolution of Microsoft Outlook</h2>
    <table className="min-w-full border border-gray-300 mt-4 text-left">
      <thead className="bg-gray-400 text-gray-900">
        <tr>
          <th className="border px-4 py-2">Version</th>
          <th className="border px-4 py-2">Release Date</th>
          <th className="border px-4 py-2">Key Features / Specifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Outlook 97</td>
          <td className="border px-4 py-2">Jan 16, 1997</td>
          <td className="border px-4 py-2">Integrated email, calendar, contacts, tasks; Support for Exchange Server; Outlook Today view.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 98</td>
          <td className="border px-4 py-2">Jun 21, 1998</td>
          <td className="border px-4 py-2">IMAP support; UI enhancements.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 2000</td>
          <td className="border px-4 py-2">Jun 27, 1999</td>
          <td className="border px-4 py-2">Improved collaboration; Integration with Office 2000 suite.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 2002</td>
          <td className="border px-4 py-2">May 31, 2001</td>
          <td className="border px-4 py-2">Enhanced security features; Renamed Outlook XP.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 2003</td>
          <td className="border px-4 py-2">Oct 21, 2003</td>
          <td className="border px-4 py-2">Cached Exchange Mode; improved junk email filtering & calendar features.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 2007</td>
          <td className="border px-4 py-2">Jan 27, 2007</td>
          <td className="border px-4 py-2">Ribbon interface; improved search & calendar features.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 2010</td>
          <td className="border px-4 py-2">Jun 15, 2010</td>
          <td className="border px-4 py-2">Enhanced ribbon interface; conversation view; social connector integration.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 2013</td>
          <td className="border px-4 py-2">Jan 29, 2013</td>
          <td className="border px-4 py-2">Flatter UI; Exchange ActiveSync support; OneDrive integration; touch support.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 2016</td>
          <td className="border px-4 py-2">Sep 22, 2015</td>
          <td className="border px-4 py-2">Real-time collaboration; search improvements; Office 365 Groups support; Skype integration.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook 2019</td>
          <td className="border px-4 py-2">Sep 24, 2018</td>
          <td className="border px-4 py-2">Usability improvements; Office 365 integration.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Outlook for Office 365</td>
          <td className="border px-4 py-2">Ongoing updates</td>
          <td className="border px-4 py-2">Cloud-based features; real-time collaboration; advanced security; Microsoft 365 integration.</td>
        </tr>
      </tbody>
    </table>

    {/* Shortcut Keys */}
    <h2 className="text-3xl font-bold  mt-8">Microsoft Outlook Shortcut Keys (Basic to Advanced)</h2>
    <p className="leading-relaxed">
      Microsoft Outlook offers shortcut keys to enhance efficiency and productivity by streamlining email management, calendar scheduling, task handling, and navigation.
    </p>
    <table className="min-w-full border border-gray-300 mt-4 text-left">
      <thead className="bg-gray-400 text-gray-900">
        <tr>
          <th className="border px-4 py-2">Shortcut Key</th>
          <th className="border px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Ctrl + N</td>
          <td className="border px-4 py-2">Create a new email message</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Ctrl + R</td>
          <td className="border px-4 py-2">Reply to an email</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Ctrl + Shift + R</td>
          <td className="border px-4 py-2">Reply to all recipients</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Ctrl + F</td>
          <td className="border px-4 py-2">Forward an email</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Alt + S</td>
          <td className="border px-4 py-2">Send the email</td>
        </tr>
        {/* You can continue adding the rest of the shortcuts similarly */}
      </tbody>
    </table>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Microsoft Outlook is more than just an email client—it’s a comprehensive productivity tool that helps users manage emails, tasks, calendars, and contacts effortlessly. With AI-powered inbox management, enterprise-grade security, and cloud integration, Outlook keeps you connected and organized across devices. Its integration with Teams, Excel, OneDrive, and SharePoint enhances collaboration while ensuring secure communication.
    </p>

  </div>
);

export default OutlookTutorial;
