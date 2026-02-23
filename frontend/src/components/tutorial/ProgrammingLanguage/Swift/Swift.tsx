import React, { useState } from "react";
import Layout from "./Layout";

import SwiftHome from "./Topic/SwiftHome";
import SwiftIntroduction from "./Topic/SwiftIntro";
import SwiftGetStarted from "./Topic/SwiftGetStarted";
import SwiftSyntax from "./Topic/SwiftSyntax";
import SwiftStatements from "./Topic/SwiftStatements";
import SwiftComments from "./Topic/SwiftComments";
import SwiftVariables from "./Topic/Swift Variables/Variables";
import SwiftPrintVariables from "./Topic/Swift Variables/PrintVariables";
import SwiftMultipleVariables from "./Topic/Swift Variables/MultipleVariables";
import SwiftIdentifiers from "./Topic/Swift Variables/Identifiers";
import SwiftTextOutput from "./Topic/Swift Output/PrintText";
import SwiftNumberOutput from "./Topic/Swift Output/PrintNumbers";
import SwiftDataTypes from "./Topic/Swift DataTypes/BasicDataTypes";
import SwiftBoolean from "./Topic/Swift DataTypes/Boolean";
import SwiftNumbers from "./Topic/Swift DataTypes/Numbers";
import SwiftCharacters from "./Topic/Swift DataTypes/Character";
import SwiftTypeCasting from "./Topic/SwiftTypeCasting";
import SwiftArrays from "./Topic/Swift Array/Arrays";
import SwiftArraysLoop from "./Topic/Swift Array/LoopThroughArray";
import SwiftArraysIndices from "./Topic/Swift Array/Indices";
import SwiftArraysSlices from "./Topic/Swift Array/ArraySlices";
import SwiftArraysMultidimensional from "./Topic/Swift Array/MultiDimensionalArray";
import SwiftSwitch from "./Topic/SwiftSwitches";
import SwiftBreakContinue from "./Topic/SwiftBreakContinue";
import SwiftFunctions from "./Topic/Swift Types And Functions/Swiftfunctions";
import SwiftOptionals from "./Topic/Swift Types And Functions/SwiftOptionals";
import SwiftEnumsPatternMatching from "./Topic/Swift Types And Functions/EnumsAndPatterns";
import SwiftTuplesTypeAliases from "./Topic/Swift Types And Functions/Tuples";
import SwiftClosures from "./Topic/Swift Types And Functions/Closures";
import SwiftOperatorPrecedence from "./Topic/Swift Operators/OperatorPrecedence";
import SwiftOperators from "./Topic/Swift Operators/Operators";
import SwiftArithmeticOperators from "./Topic/Swift Operators/Arithmetice";
import SwiftAssignmentOperators from "./Topic/Swift Operators/Assignment";
import SwiftLogicalOperators from "./Topic/Swift Operators/Logical";
import SwiftComparisonOperators from "./Topic/Swift Operators/Comparison";
import SwiftStrings from "./Topic/Swift Strings/Strings";
import SwiftStringsConcatenation from "./Topic/Swift Strings/Concatenation";
import SwiftStringsNumbers from "./Topic/Swift Strings/NumbersStrings";
import SwiftWhileLoop from "./Topic/Swift Whileloop/WhileLoop";
import SwiftRepeatWhileLoop from "./Topic/Swift Whileloop/RepeatedWhileLoop";
import SwiftIf from "./Topic/Swift IfElse/if";
import SwiftElseIf from "./Topic/Swift IfElse/elseif";
import SwiftIfElse from "./Topic/Swift IfElse/Ifelse";
import SwiftNestedIf from "./Topic/Swift IfElse/nestedif";
import SwiftElse from "./Topic/Swift IfElse/else";
import SwiftForLoop from "./Topic/Swift For Loop/ForLoop";
import SwiftNestedLoops from "./Topic/Swift For Loop/NestedLoop";
import SwiftForEachLoop from "./Topic/Swift For Loop/Foreachloop";
import Constants from "./Topic/Swift Variables/Constants";
import SwiftsConstants from "./Topic/SwiftConstants";
import SwiftRanges from "./Topic/SwiftRanges";
import SwiftOverview from "./Topic/Swift Collection/Overview";
import SwiftSets from "./Topic/Swift Collection/Sets";
import Swiftdic from "./Topic/Swift Collection/Dict";
import SwiftMap from "./Topic/Swift Collection/Map";
import SwiftMutable from "./Topic/Swift Collection/Mutability";
import SwiftSorting from "./Topic/Swift Collection/Sorting";

// Map sidebar keys to actual components
const topicComponents: { [key: string]: React.FC } = {
  Home: SwiftHome, // key name must match the default state value
  intro:SwiftIntroduction,
  getstarted:SwiftGetStarted,
  syntax:SwiftSyntax,
 statements:SwiftStatements,
 comments:SwiftComments,
 variables:SwiftVariables,
 printvariables:SwiftPrintVariables,
 multiplevariables:SwiftMultipleVariables,
 swiftconstant:SwiftsConstants,
 identifiers:SwiftIdentifiers,
 printtext:SwiftTextOutput,
 ranges:SwiftRanges,
 printnumbers: SwiftNumberOutput,
 datatypes:SwiftDataTypes,
 boolean:SwiftBoolean,
 numbers:SwiftNumbers,
 character:SwiftCharacters,
 typecasting:SwiftTypeCasting,
 arrays:SwiftArrays,
 looparray:SwiftArraysLoop,
 indices:SwiftArraysIndices,
 arrayslices:SwiftArraysSlices,
multidimensionalarray:SwiftArraysMultidimensional,
switches:SwiftSwitch,
break:SwiftBreakContinue,
swiftfunction:SwiftFunctions,
optional:SwiftOptionals,
closure:SwiftClosures,
enums:SwiftEnumsPatternMatching,
tuples:SwiftTuplesTypeAliases,
operators:SwiftOperators,
precedence:SwiftOperatorPrecedence,
arithmetic:SwiftArithmeticOperators,
constants:Constants,
assignment:SwiftAssignmentOperators,
logical:SwiftLogicalOperators,
comparison:SwiftComparisonOperators,
strings:SwiftStrings,
specialcharacter:SwiftCharacters,
concatenation:SwiftStringsConcatenation,
numbersstring:SwiftStringsNumbers,
whileloop:SwiftWhileLoop,
repeatwhileloop:SwiftRepeatWhileLoop,
if:SwiftIf,
elseif:SwiftElseIf,
ifelse:SwiftIfElse,
nestedif:SwiftNestedIf,
else:SwiftElse,
forloop:SwiftForLoop,
nestedloop:SwiftNestedLoops,
foreachloop:SwiftForEachLoop,
overview:SwiftOverview,
sets:SwiftSets,
dictionaries:Swiftdic,
map:SwiftMap,
mutability:SwiftMutable,
sorting:SwiftSorting





};

const Swift: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || SwiftHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Swift;
