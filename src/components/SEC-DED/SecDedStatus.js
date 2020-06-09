import React from "react";
import { Link } from "react-router-dom";

import StatusBanner from "../utils/StatusBanner";

export default function SecDedStatus(props) {
  let str = props.encoded;
  // truncate for display
  let n = 15;
  let displayStr = str.length > n ? str.substr(0, n - 1) + "..." : str;

  if (str) {
    if (isNaN(str)) {
      return (
        <div>
          <StatusBanner type="warning" title="Input error">
            "{displayStr}" is not a valid number.
          </StatusBanner>
        </div>
      );
    } else {
      // 2 bit error detection
      let errArr = props.results.errorBits;
      let n = errArr.length;
      if (n > 0) {
        return (
          <div>
            <StatusBanner
              type="danger"
              title={n + " error" + (n > 1 ? "s" : "") + " detected"}
            >
              Bit
              {n > 1
                ? `s ${errArr[0]} and ${errArr[1]} are `
                : ` ${errArr[0]} is `}
              incorrect.
            </StatusBanner>
          </div>
        );
      } else {
        return <div></div>;
      }
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
}
