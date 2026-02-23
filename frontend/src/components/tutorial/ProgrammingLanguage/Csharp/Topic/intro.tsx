import React from 'react';

const intro: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
       C# Introduction
    </h1>

    <h2 className="text-2xl font-bold mt-6">What is C#?</h2>
    <p className="text-lg  leading-relaxed mt-2">
      <b>C#</b> is pronounced <b>"C-Sharp"</b>. It is an <b>object-oriented programming language</b> 
      created by <b>Microsoft</b> that runs on the <b>.NET Framework</b>.
    </p>

    <p className=" leading-relaxed mt-2">
      C# has its roots in the <b>C language family</b>, and is closely related to other popular 
      languages like <b>C++</b> and <b>Java</b>.
    </p>

    <p className=" leading-relaxed mt-2">
      The first version was released in <b>2002</b>, and the latest version, <b>C# 13</b>, 
      was released in <b>November 2024</b>.
    </p>

    <h2 className="text-2xl font-bold mt-6">C# is used for:</h2>
    <ul className="list-disc list-inside ml-5  space-y-1">
      <li>Mobile applications</li>
      <li>Desktop applications</li>
      <li>Web applications</li>
      <li>Web services</li>
      <li>Web sites</li>
      <li>Games</li>
      <li>VR (Virtual Reality)</li>
      <li>Database applications</li>
      <li>And much, much more!</li>
    </ul>

    <h2 className="text-2xl font-bold  mt-6">Why Use C#?</h2>
    <ul className="list-disc list-inside ml-5  space-y-2">
      <li>It is one of the most popular programming languages in the world.</li>
      <li>It is easy to learn and simple to use.</li>
      <li>It has huge community support.</li>
      <li>
        C# is an <b>object-oriented language</b>, which gives programs a clear structure 
        and allows <b>code reuse</b>, reducing development costs.
      </li>
      <li>
        As C# is similar to <b>C</b>, <b>C++</b>, and <b>Java</b>, it’s easy for programmers 
        to switch between these languages.
      </li>
    </ul>


  </div>
);

export default intro;
