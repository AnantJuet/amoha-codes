import React, { useState } from "react";
import Layout from "./Layout";

// Import all topic components
import RustHome from "./Topic/RustHome";
import RustIntro from "./Topic/RustIntro";
import RustGetStarted from "./Topic/RustGetStarted";
import RustSyntax from "./Topic/RustSyntax";
import RustComments from "./Topic/RustComments";
import RustVariables from "./Topic/RustVariables";
import RustDataTypes from "./Topic/RustDataTypes";
import RustOperators from "./Topic/RustOperators";
import RustControlFlow from "./Topic/RustControlFlow";
import RustOwnership from "./Topic/RustOwnership";
import RustStructs from "./Topic/RustStructs";
import RustEnums from "./Topic/RustEnums";
import RustFunctions from "./Topic/RustFunctions";
import RustStrings from "./Topic/RustStrings";
import RustVectors from "./Topic/RustVectors";
import RustErrors from "./Topic/RustErrors";
import RustTraits from "./Topic/RustTraits";
import RustGenerics from "./Topic/RustGenerics";
import RustLifetimes from "./Topic/RustLifetimes";

const topicComponents: { [key: string]: React.FC } = {
  home: RustHome,
  intro: RustIntro,
  getstarted: RustGetStarted,
  syntax: RustSyntax,
  comments: RustComments,
  variables: RustVariables,
  mutability: RustVariables,
  constants: RustVariables,
  shadowing: RustVariables,
  datatypes: RustDataTypes,
  scalartypes: RustDataTypes,
  compoundtypes: RustDataTypes,
  operators: RustOperators,
  arithmetic: RustOperators,
  comparison: RustOperators,
  logical: RustOperators,
  controlflow: RustControlFlow,
  if: RustControlFlow,
  loop: RustControlFlow,
  while: RustControlFlow,
  for: RustControlFlow,
  ownership: RustOwnership,
  borrowing: RustOwnership,
  slices: RustOwnership,
  structs: RustStructs,
  methods: RustStructs,
  enums: RustEnums,
  matching: RustEnums,
  option: RustEnums,
  functions: RustFunctions,
  parameters: RustFunctions,
  returnvalues: RustFunctions,
  strings: RustStrings,
  vectors: RustVectors,
  errors: RustErrors,
  traits: RustTraits,
  generics: RustGenerics,
  lifetimes: RustLifetimes,
};

const Rust: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || RustHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Rust;
