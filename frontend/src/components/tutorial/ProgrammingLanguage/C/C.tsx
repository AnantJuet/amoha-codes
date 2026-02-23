import React, { useState } from "react";
import Layout from "./Layout";

// Import all topic components
import CHome from "./Topic/CHome";
import CIntro from "./Topic/CIntro";
import CGetStarted from "./Topic/CGetStarted";
import CSyntax from "./Topic/CSyntax";
import CComments from "./Topic/CComments";
import CVariables from "./Topic/CVariables";
import CDataTypes from "./Topic/CDataTypes";
import COperators from "./Topic/COperators";
import CConditions from "./Topic/CConditions";
import CLoops from "./Topic/CLoops";
import CFunctions from "./Topic/CFunctions";
import CArrays from "./Topic/CArrays";
import CPointers from "./Topic/CPointers";
import CStructures from "./Topic/CStructures";
import CStrings from "./Topic/CStrings";
import CFiles from "./Topic/CFiles";
import CMemory from "./Topic/CMemory";
import CUserInput from "./Topic/CUserInput";

const topicComponents: { [key: string]: React.FC } = {
  home: CHome,
  intro: CIntro,
  getstarted: CGetStarted,
  syntax: CSyntax,
  comments: CComments,
  variables: CVariables,
  formatspecifiers: CVariables,
  changevalues: CVariables,
  multiplevariables: CVariables,
  variablenames: CVariables,
  constants: CVariables,
  datatypes: CDataTypes,
  characters: CDataTypes,
  numbers: CDataTypes,
  decimalprecision: CDataTypes,
  typeconversion: CDataTypes,
  operators: COperators,
  arithmetic: COperators,
  assignment: COperators,
  comparison: COperators,
  logical: COperators,
  bitwise: COperators,
  conditions: CConditions,
  if: CConditions,
  ifelse: CConditions,
  elseif: CConditions,
  shorthandif: CConditions,
  switch: CConditions,
  breakdefault: CConditions,
  loops: CLoops,
  whileloop: CLoops,
  dowhileloop: CLoops,
  forloop: CLoops,
  breakcontinue: CLoops,
  arrays: CArrays,
  arraysize: CArrays,
  multiarrays: CArrays,
  strings: CStrings,
  userinput: CUserInput,
  pointers: CPointers,
  pointersarrays: CPointers,
  functions: CFunctions,
  parameters: CFunctions,
  returnvalues: CFunctions,
  recursion: CFunctions,
  structures: CStructures,
  structpointers: CStructures,
  memory: CMemory,
  memoryallocation: CMemory,
  memoryaccess: CMemory,
  files: CFiles,
  createfiles: CFiles,
  readfiles: CFiles,
};

const C: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const handleSelectTopic = (key: string) => {
    setSelectedTopic(key.toLowerCase());
  };

  const CurrentComponent = topicComponents[selectedTopic] || CHome;

  return (
    <Layout selected={selectedTopic} onSelect={handleSelectTopic} darkMode={darkMode}>
      <CurrentComponent />
    </Layout>
  );
};

export default C;
