import React from "react";

const KotlinGetStarted: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Get Started
    </h1>

    <h2 className="text-2xl font-bold  mt-8">Kotlin IDE</h2>
    <p className="text-lg  mt-4 leading-relaxed">
      The easiest way to get started with <b>Kotlin</b> is by using an{" "}
      <b>IDE (Integrated Development Environment)</b>. An IDE is a software
      application that helps developers write, edit, and compile code efficiently.
    </p>

    <p className="text-lg  mt-4 leading-relaxed">
      In this tutorial, we’ll use <b>IntelliJ IDEA</b> — developed by{" "}
      <b>JetBrains</b>, the same company that created Kotlin. IntelliJ provides
      full Kotlin support and is available for free.
    </p>

    <div className="bg-gray-100 p-4 rounded-xl mt-6">
      <p className=" bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono ">
        🔗 You can download IntelliJ IDEA from:{" "}
        <a
          href="https://www.jetbrains.com/idea/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          https://www.jetbrains.com/idea/download/
        </a>
      </p>
    </div>

    <h2 className="text-2xl font-bold  mt-8">Kotlin Install</h2>
    <p className="text-lg  mt-4 leading-relaxed">
      Once IntelliJ is downloaded and installed, open it and click on the{" "}
      <b>“New Project”</b> button to create your first Kotlin project.
    </p>

    <p className="text-lg  mt-4 leading-relaxed">
      IntelliJ will automatically configure everything needed to start coding in Kotlin,
      including the Kotlin compiler and project setup — so you can start writing and running
      Kotlin programs right away.
    </p>
  </div>
);

export default KotlinGetStarted;
