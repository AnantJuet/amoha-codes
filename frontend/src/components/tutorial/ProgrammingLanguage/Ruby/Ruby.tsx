import React, { useState } from "react";
import Layout from "./Layout";

// Import all topic components
import RubyHome from "./Topic/RubyHome";
import RubyIntro from "./Topic/RubyIntro";
import RubyGetStarted from "./Topic/RubyGetStarted";
import RubySyntax from "./Topic/RubySyntax";
import RubyComments from "./Topic/RubyComments";
import RubyVariables from "./Topic/RubyVariables";
import RubyDataTypes from "./Topic/RubyDataTypes";
import RubyOperators from "./Topic/RubyOperators";
import RubyControlFlow from "./Topic/RubyControlFlow";
import RubyLoops from "./Topic/RubyLoops";
import RubyMethods from "./Topic/RubyMethods";
import RubyArrays from "./Topic/RubyArrays";
import RubyHashes from "./Topic/RubyHashes";
import RubyBlocks from "./Topic/RubyBlocks";
import RubyOOP from "./Topic/RubyOOP";
import RubyExceptions from "./Topic/RubyExceptions";
import RubyFileIO from "./Topic/RubyFileIO";

const topicComponents: { [key: string]: React.FC } = {
  home: RubyHome,
  intro: RubyIntro,
  getstarted: RubyGetStarted,
  syntax: RubySyntax,
  comments: RubyComments,
  variables: RubyVariables,
  scope: RubyVariables,
  constants: RubyVariables,
  datatypes: RubyDataTypes,
  numbers: RubyDataTypes,
  strings: RubyDataTypes,
  symbols: RubyDataTypes,
  booleans: RubyDataTypes,
  operators: RubyOperators,
  arithmetic: RubyOperators,
  comparison: RubyOperators,
  logical: RubyOperators,
  controlflow: RubyControlFlow,
  ifelse: RubyControlFlow,
  unless: RubyControlFlow,
  case: RubyControlFlow,
  loops: RubyLoops,
  while: RubyLoops,
  for: RubyLoops,
  each: RubyLoops,
  times: RubyLoops,
  methods: RubyMethods,
  parameters: RubyMethods,
  returnvalues: RubyMethods,
  arrays: RubyArrays,
  hashes: RubyHashes,
  blocks: RubyBlocks,
  procs: RubyBlocks,
  lambdas: RubyBlocks,
  oop: RubyOOP,
  classes: RubyOOP,
  objects: RubyOOP,
  inheritance: RubyOOP,
  modules: RubyOOP,
  exceptions: RubyExceptions,
  fileio: RubyFileIO,
};

const Ruby: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || RubyHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Ruby;
