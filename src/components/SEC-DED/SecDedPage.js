import React, { useState } from "react";

import CardTitle from "../utils/CardTitle";
import SecDedInput from "./SecDedInput";
import useForm from "../utils/useForm";
import SecDedStatus from "./SecDedStatus";
import SecDedResults from "./SecDedResults";

export default function SecDec() {
  const [values, handleChange] = useForm({ encoded: "0b101" });
  const [binaryArr, updateBinaryArr] = useState([1, 0, 1]);
  const [valid, updateValid] = useState(false);
  const [results, updateResults] = useState({
    errorBits: [],
    parityArray: [],
    bitToCorrect: 0,
  });

  return (
    <div>
      <CardTitle
        title="SEC/DED"
        subtitle="Single Error Correction, Double Error Detection"
      />
      <SecDedInput
        value={values.encoded}
        handleChange={handleChange}
        updateBinaryArr={updateBinaryArr}
        updateValid={updateValid}
      />
      {valid && console.log(binaryArr)}
      <SecDedStatus encoded={values.encoded} results={results} />
      <SecDedResults
        binaryArr={binaryArr}
        results={results}
        updateResults={updateResults}
      />
    </div>
  );
}
