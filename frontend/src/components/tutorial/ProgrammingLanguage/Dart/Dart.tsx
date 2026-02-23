import React, { useState } from "react";
import Layout from "./Layout";

// Import all topic components
import DartHome from "./Topic/DartHome";
import DartIntro from "./Topic/DartIntro";
import DartSyntax from "./Topic/DartSyntax";

const topicComponents: { [key: string]: React.FC } = {
  home: DartHome,
  intro: DartIntro,
  getstarted: DartIntro,
  syntax: DartSyntax,
  comments: DartSyntax,
  variables: DartSyntax,
  varfinalconst: DartSyntax,
  late: DartSyntax,
  datatypes: DartSyntax,
  numbers: DartSyntax,
  strings: DartSyntax,
  booleans: DartSyntax,
  lists: DartSyntax,
  maps: DartSyntax,
  operators: DartSyntax,
  arithmetic: DartSyntax,
  comparison: DartSyntax,
  logical: DartSyntax,
  nullaware: DartSyntax,
  controlflow: DartSyntax,
  ifelse: DartSyntax,
  switch: DartSyntax,
  loops: DartSyntax,
  for: DartSyntax,
  while: DartSyntax,
  forin: DartSyntax,
  functions: DartSyntax,
  parameters: DartSyntax,
  arrow: DartSyntax,
  anonymous: DartSyntax,
  oop: DartIntro,
  classes: DartIntro,
  constructors: DartIntro,
  inheritance: DartIntro,
  abstract: DartIntro,
  mixins: DartIntro,
  nullsafety: DartSyntax,
  nullable: DartSyntax,
  nulloperators: DartSyntax,
  async: DartIntro,
  futures: DartIntro,
  asyncawait: DartIntro,
  streams: DartIntro,
  collections: DartSyntax,
  exceptions: DartIntro,
};

const Dart: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || DartHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default Dart;
