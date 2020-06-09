import React, { useState } from "react";

import CardTitle from "../utils/CardTitle";
import SecDedInput from "./SecDedInput";
import useForm from "../utils/useForm";
import SecDedStatus from "./SecDedStatus";

export default function SecDec() {
  const [values, handleChange] = useForm({ encoded: "" });
  const [binaryArr, updateBinaryArr] = useState([]);
  const [valid, updateValid] = useState(false);

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
      <SecDedStatus encoded={values.encoded} />
    </div>
  );
}
