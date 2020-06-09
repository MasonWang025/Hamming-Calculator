import React from "react";

export default function SecDedResults(props) {
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <h2>{displayBinaryJSX(props.binaryArr, props.results.errorBits)}</h2>
      </div>
    </div>
  );
}

function displayBinaryJSX(binaryArr, errorBits) {
  let content = [];

  for (let i = 0; i < binaryArr.length; i++) {
    if (errorBits.includes(i)) {
      content.push(
        <span key={i} className="errorBit">
          {binaryArr[i]}
        </span>
      );
    } else {
      content.push(<span className="normalBit" key={i}>{binaryArr[i]}</span>);
    }
  }

  return content;
}
