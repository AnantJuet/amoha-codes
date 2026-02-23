import React from 'react';

const GoogleDriveTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Google Drive for Desktop ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      How to Use Google Drive for Desktop
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      To easily manage and share content across all your devices and the cloud, use Google’s desktop sync client. With <strong>Drive for Desktop</strong>, you can access your Drive files and folders directly from Windows File Explorer or macOS Finder on your computer.
    </p>
    <p className="leading-relaxed">
      When you edit, delete, or move a file on the cloud, those changes are automatically reflected on your computer and other devices, and vice versa. This ensures your files are always up to date and accessible from any device.
    </p>

    {/* What is Google Drive for Desktop */}
    <h2 className="text-3xl font-bold  mt-8">What is Google Drive for Desktop</h2>
    <p className="leading-relaxed">
      Google Drive for Desktop is a desktop application that provides quick and easy access to your Google Drive files directly from your computer. This tool is especially useful for collaborative work, as any changes made are automatically updated and shared with all collaborators.
    </p>

    {/* Installation Steps */}
    <h2 className="text-3xl font-bold  mt-8">How to Install & Set Up Drive for Desktop</h2>
    <ol className=" list-inside leading-relaxed">
      <li><strong>Step-1. </strong>Download Google Drive for Desktop from the Google Drive website.</li>
      <li><strong>Step-2. </strong>Choose your platform: Windows or macOS.</li>
      <li><strong>Step-3. </strong>Download the installer file.</li>
      <li><strong>Step-4. </strong>Run the installer and follow the on-screen prompts.</li>
      <li><strong>Step-5. </strong>Sign in to your Google account when prompted.</li>
    </ol>

    {/* How to Use */}
    <h2 className="text-3xl font-bold  mt-8">How to Use Google Drive on Your Desktop</h2>
    <ol className=" list-inside leading-relaxed">
      <li><strong>Step-1. </strong>Open your preferred browser and go to Google Drive.</li>
      <li><strong>Step-2. </strong>Sign in using your Google account credentials.</li>
      <li><strong>Step-3. </strong>Open or navigate to the Google Drive folder on your computer.</li>
      <li><strong>Step-4. </strong>Edit, move, or delete files to automatically sync changes with the cloud.</li>
    </ol>

    {/* Sync Configuration */}
    <h2 className="text-3xl font-bold  mt-8">Basic Configuration and Sync Selections</h2>
    <ol className="list-decimal list-inside leading-relaxed">
      <li>Sign in to Google Drive for Desktop after installation.</li>
      <li>Choose which folders on your computer to sync with Google Drive.</li>
      <li>Enable Google Drive syncing to synchronize files between Drive and your PC.</li>
      <li>Optionally, enable "Back Up to Google Photos" for images and videos.</li>
    </ol>

    {/* Uploading Files */}
    <h2 className="text-3xl font-bold  mt-8">How to Upload or Create Files in Google Drive</h2>
    <p className="leading-relaxed">
      You can upload files via the Drive website, drag-and-drop, or through the Desktop Google Drive folder:
    </p>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Drive website:</strong> Click "New" → "File upload" or "Folder upload" → select files from your PC.</li>
      <li><strong>Drag-and-drop:</strong> Open the relevant folder in Google Drive online and drag files from your computer into the window.</li>
      <li><strong>Desktop Google Drive:</strong> Drag files into the "Google Drive" folder on your PC to sync automatically.</li>
    </ul>

    {/* Sharing and Organizing */}
    <h2 className="text-3xl font-bold  mt-8">How to Share and Organize Files</h2>
    <ol className="list-decimal list-inside leading-relaxed">
      <li>Open Google Drive and select the file you want to share.</li>
      <li>Click the file options and select "Share".</li>
      <li>Copy the link or choose sharing permissions: Viewer, Commenter, or Editor.</li>
      <li>Send the link to collaborators as needed.</li>
    </ol>

    {/* Logging Out */}
    <h2 className="text-3xl font-bold  mt-8">How to Log Out of Google Drive</h2>
    <ol className="list-decimal list-inside leading-relaxed">
      <li>Go to Google Drive in your browser or desktop app.</li>
      <li>Click your profile picture at the top-right corner.</li>
      <li>Select "Sign out" to exit your account.</li>
    </ol>

    {/* Pause Syncing */}
    <h2 className="text-3xl font-bold  mt-8">How to Pause Syncing on Google Drive for Desktop</h2>
    <ol className="list-decimal list-inside leading-relaxed">
      <li>Open your browser and go to Google Drive.</li>
      <li>Click the gear icon (Settings) in the top-right corner.</li>
      <li>Go to the "General" tab and uncheck the "Offline" option.</li>
      <li>Wait for confirmation that offline files are removed from your PC.</li>
    </ol>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Google Drive for Desktop allows you to manage your files efficiently across devices. With automatic syncing, offline access, and easy file sharing, it’s a practical solution for both personal and collaborative work. By following this guide, you can optimize your productivity and keep your virtual workspace organized.
    </p>

  </div>
);

export default GoogleDriveTutorial;
