import React from "react";

import CardTitle from "../utils/CardTitle";
import SecDecInput from "./SecDecInput";
import useForm from "../utils/useForm";
import SecDedStatus from "./SecDedStatus"

export default function SecDec() {
  const [values, handleChange] = useForm({ encoded: "" });

  return (
    <div>
      <CardTitle
        title="SEC/DED"
        subtitle="Single Error Correction, Double Error Detection"
      />
      <SecDecInput values={values} handleChange={handleChange} />
      <SecDedStatus encoded={values.encoded} />
    </div>
  );
}
