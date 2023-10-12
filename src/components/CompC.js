import React, { useContext } from "react";
import { BioData } from "./CompA";

const CompC = () => {

    const context = useContext(BioData);

  return (
    <div>
      <h1>Component C {context} </h1>
    </div>
  );
};

export default CompC;
