import React, { useState } from "react";

import CardTitle from "../utils/CardTitle";
import SecDedInput from "./SecDedInput";
import useForm from "../utils/useForm";
import SecDedStatus from "./SecDedStatus";
import SecDedResults from "./SecDedResults";
import findSyndrome from "../../ecc-logical/findSyndrome";
import getParityArray from "../../ecc-logical/getParityArray";

export default function SecDec() {
  const [values, handleChange] = useForm({ encoded: "0b011100101110" });
  const [binaryArr, updateBinaryArr] = useState(
    values.encoded.substring(2).split("").map(Number)
  );
  const [valid, updateValid] = useState(false);
  const syndrome = findSyndrome(binaryArr);
  const [results, updateResults] = useState({
    errorBit: syndrome,
    parityArray: getParityArray(binaryArr),
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
        results={results}
        updateResults={updateResults}
      />
      <SecDedStatus
        encoded={values.encoded}
        results={results}
        valid={valid}
      />
      <SecDedResults
        binaryArr={binaryArr}
        results={results}
        updateResults={updateResults}
      />
    </div>
  );
}
