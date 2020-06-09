import React from "react";
import { Link } from "react-router-dom";

import StatusBanner from "../utils/StatusBanner";

export default function SecDedStatus(props) {
  let str = props.encoded;
  // truncate for display
  let n = 15;
  let displayStr = str.length > n ? str.substr(0, n - 1) + "..." : str;
  // banner props
  let title = displayStr;
  let content = "No errors detected.";
  let type = "success";

  if (str) {
    if (isNaN(str)) {
      title = "Input error";
      type = "warning";
      content = `"${displayStr}" is not a number.`;
    }
  } else {
    // empty
    return (
      <div>
        <StatusBanner type="info" title="Enter an encoded value">
          Prepend binary values with <b>0b</b> and hexidecimal values with{" "}
          <b>0x</b>. To encode a value, visit{" "}
          <b>
            <Link to="/encode">Encode</Link>
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
