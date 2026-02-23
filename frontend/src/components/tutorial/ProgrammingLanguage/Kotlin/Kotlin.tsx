import React, { useState } from "react";
import Layout from "./Layout";
import KotlinHome from "./Topic/Home";
import KotlinIntroduction from "./Topic/KotlinIntro";
import KotlinGetStarted from "./Topic/KotlinGetStarted";
import KotlinSyntax from "./Topic/KotlinSyntax";
import KotlinOutput from "./Topic/KotlinOutput";
import KotlinComments from "./Topic/KotlinComments";
import KotlinVariables from "./Topic/KotlinVariables";
import KotlinDataTypes from "./Topic/KotlinDataTypes";
import KotlinOperators from "./Topic/KotlinOperators";
import KotlinStrings from "./Topic/KotlinStrings";
import KotlinIfElse from "./Topic/KotlinIfElse";
import KotlinWhen from "./Topic/KotlinWhen";
import KotlinWhileLoop from "./Topic/KotlinWhileLoop";
import KotlinBreakContinue from "./Topic/KotlinBreakContinue";
import KotlinArrays from "./Topic/KotlinArrays";
import KotlinForLoop from "./Topic/KotlinForLoop";
import KotlinRanges from "./Topic/KotlinRanges";
import KotlinFunctions from "./Topic/KotlinFunctions";
import KotlinOOP from "./Topic/Kotlin Classes/OOP";
import KotlinClassesObjects from "./Topic/Kotlin Classes/Classes";
import KotlinConstructors from "./Topic/Kotlin Classes/Constructors";
import KotlinClassFunctions from "./Topic/Kotlin Classes/ClassFunction";
import KotlinInheritance from "./Topic/Kotlin Classes/Inheritence";


// Map sidebar keys to actual components
const topicComponents: { [key: string]: React.FC } = {
home:KotlinHome,
intro:KotlinIntroduction,
getstarted:KotlinGetStarted,
syntax:KotlinSyntax,
output:KotlinOutput,
comments:KotlinComments,
variables:KotlinVariables,
datatypes:KotlinDataTypes,
operators:KotlinOperators,
strings:KotlinStrings,
ifelse:KotlinIfElse,
when:KotlinWhen,
whileloop:KotlinWhileLoop,
breakcontinue:KotlinBreakContinue,
arrays:KotlinArrays,
forloop:KotlinForLoop,
ranges:KotlinRanges,
functions:KotlinFunctions,
oop:KotlinOOP,
classes:KotlinClassesObjects,
constructors:KotlinConstructors,
classfunction:KotlinClassFunctions,
inheritence:KotlinInheritance


};

const Kotlin: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || KotlinHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Kotlin;
