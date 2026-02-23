import React from "react";

const KotlinIntroduction: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Introduction
    </h1>

    <h2 className="text-2xl font-bold  mt-8">What is Kotlin?</h2>
    <p className="text-lg  mt-4 leading-relaxed">
      <b>Kotlin</b> is a modern, trending programming language that was released
      in <b>2016</b> by <b>JetBrains</b>. It has become very popular because it
      is fully compatible with <b>Java</b> — one of the most widely used
      programming languages in the world. This means that Java code and
      libraries can be easily used in Kotlin programs.
    </p>

    <p className="text-lg  mt-4 leading-relaxed">
      Kotlin is a versatile language used for:
    </p>

    <ul className="list-disc list-inside  text-lg mt-2 space-y-1">
      <li>Mobile applications (especially Android apps)</li>
      <li>Web development</li>
      <li>Server-side applications</li>
      <li>Data science</li>
      <li>And much, much more!</li>
    </ul>

    <h2 className="text-2xl font-bold  mt-8">Why Use Kotlin?</h2>
    <ul className="list-disc list-inside  text-lg mt-3 space-y-1">
      <li>Kotlin is fully compatible with Java</li>
      <li>Kotlin works on multiple platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
      <li>Kotlin is concise and safe</li>
      <li>Kotlin is easy to learn — especially if you already know Java</li>
      <li>Kotlin is free to use</li>
      <li>It has a large and active community for support</li>
    </ul>

    <h2 className="text-2xl font-bold  mt-8">Get Started</h2>
    <p className="text-lg  mt-4 leading-relaxed">
      This tutorial will teach you the very basics of Kotlin. It is not
      necessary to have any prior programming experience — the lessons will
      guide you step by step to help you get comfortable with the Kotlin
      language.
    </p>
  </div>
);

export default KotlinIntroduction;
