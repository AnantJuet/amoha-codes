import React, { useState } from "react";
import Layout from "./Layout";

// Import topic components
import Home from "./Topic/Home";
import Intro from "./Topic/intro";
import GetStarted from "./Topic/GetStarted";
import CSharpSyntax from "./Topic/CsharpSyntax";
import CsharpComments from "./Topic/CsharpComments";
import CsharpOutput from "./Topic/CsharpOutput";
import CsharpVariables from "./Topic/CsharpVariables/CsharpVariables";
import CsharpDisplayVariables from "./Topic/CsharpVariables/CsharpDisplayVariable";
import CsharpMultipleVariables from "./Topic/CsharpVariables/CsharpMultipleVariables";
import CsharpConstants from "./Topic/CsharpConstants";
import CsharpDataTypes from "./Topic/CsharpDataTypes";
import CsharpTypecasting from "./Topic/CsharpTypecasting";
import CsharpUserInput from "./Topic/CsharpUserInput";
import CsharpMath from "./Topic/CsharpMath";
import CsharpBooleans from "./Topic/CsharpBooleans";
import CsharpWhileLoop from "./Topic/CsharpWhileLoop";
import CsharpSwitch from "./Topic/CsharpSwitch";
import CsharpBreakContinue from "./Topic/CsharpBreakContinue";
import CsharpArithmetic from "./Topic/CsharpOperators/CsharpArithmetic";
import CsharpAssignment from "./Topic/CsharpOperators/CsharpAssignment";
import CsharpComparison from "./Topic/CsharpOperators/CsharpComparison";
import CsharpLogical from "./Topic/CsharpOperators/CsharpLogical";
import CsharpIfElse from "./Topic/CsharpIfElse/CsharpIfElse";
import CsharpElse from "./Topic/CsharpIfElse/CsharpElse";
import CsharpElseIf from "./Topic/CsharpIfElse/CsharpElseIf";
import CsharpStrings from "./Topic/CsharpStrings.tsx/Strings";
import CsharpConcatenation from "./Topic/CsharpStrings.tsx/Concatenation";
import CsharpInterpolation from "./Topic/CsharpStrings.tsx/Interpolation";
import CsharpAccessStrings from "./Topic/CsharpStrings.tsx/AccessString";
import CsharpSpecialCharacters from "./Topic/CsharpStrings.tsx/SpecialCharacter";
import CsharpForLoop from "./Topic/CsharpForLoop/ForLoop";
import CsharpForeachLoop from "./Topic/CsharpForLoop/ForeachLoop";
import CsharpArrays from "./Topic/CsharpArray.tsx/Array";
import CsharpLoopThroughArrays from "./Topic/CsharpArray.tsx/LoopthroughArray";
import CsharpSortArrays from "./Topic/CsharpArray.tsx/SortArrays";
import CsharpMultidimensionalArrays from "./Topic/CsharpArray.tsx/Multidimensional";
import CsharpMethods from "./Topic/Csharp Methods/Methods";
import CsharpMethodParameters from "./Topic/Csharp Methods/Parameters";
import CsharpMethodOverloading from "./Topic/Csharp Methods/MethodOverloading";

// Map sidebar component keys to actual components
const topicComponents: { [key: string]: React.FC } = {
  Home: Home,
  intro: Intro,
  getstarted:  GetStarted,
  syntax:  CSharpSyntax,
  output:  CsharpOutput,
  comments:CsharpComments,
  variables:CsharpVariables,
  constants:CsharpConstants,
  displayvariables:CsharpDisplayVariables,
  multiplevariables:CsharpMultipleVariables,
  datatypes:CsharpDataTypes,
  typecasting:CsharpTypecasting,
  userinput:CsharpUserInput,
  math:CsharpMath,
  booleans:CsharpBooleans,
  whileloop:CsharpWhileLoop,
  switch:CsharpSwitch,
  breakcontinue:CsharpBreakContinue,
  arithmetic:CsharpArithmetic,
  assignment:CsharpAssignment,
  comparison:CsharpComparison,
  logical:CsharpLogical,
  if:CsharpIfElse,
  else:CsharpElse,
  elseif:CsharpElseIf,
  strings:CsharpStrings,
  concatenation:CsharpConcatenation,
  interpolation:CsharpInterpolation,
  access:CsharpAccessStrings,
  characters:CsharpSpecialCharacters,
  forloop:CsharpForLoop,
  foreachloop:CsharpForeachLoop,
  arrays:CsharpArrays,
  looparray:CsharpLoopThroughArrays,
  sortarrays:CsharpSortArrays,
  multidimensionalarrays:CsharpMultidimensionalArrays,
  methods:CsharpMethods,
  parameters:CsharpMethodParameters,
  values:CsharpMethodOverloading

};

const Csharp: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || Home;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Csharp;
