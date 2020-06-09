import React from "react";
import { Link } from "react-router-dom";

import StatusBanner from "../utils/StatusBanner";
import determineType from "../../ecc-logical/determineType";

export default function SecDedStatus(props) {
  let str = props.encoded;
  let title = str;
  let content = "No errors detected";
  let type = "success";

  if (str) {
    // encoded has value inside it
    let strType = determineType(str);
    if (strType === 0) {
      title = "Input error";
      type = "warning";
      content = `"${str}" is not a number.`;
    }
  } else {
    // empty
    return (
      <div>
        <StatusBanner type="info" title="Enter an encoded value">
          Prepend binary values with <b>0b</b> and hexidecimal values with{" "}
          <b>0x</b>. To encode a value, visit{" "}
          <b>
            <Link to="/encode">Encode/Decode</Link>
          </b>
          .
        </StatusBanner>
      </div>
    );
  }

  return (
    <div>
      <StatusBanner type={type} title={title}>
        {content}
      </StatusBanner>
    </div>
  );
}
