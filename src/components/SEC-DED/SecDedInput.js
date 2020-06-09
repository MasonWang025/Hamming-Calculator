import React from "react";

import toBinaryArray from "../../ecc-logical/toBinaryArray";

export default function SecDecInput(props) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <div className="form-row">
          <div className="col-fit">
            <label htmlFor="encoded">Enter encoded value: </label>
          </div>
          <div className="col-12 col-md">
            <input
              className="inline form-control"
              type="text"
              name="encoded"
              id="encoded"
              placeholder="BIN (0b11010), HEX (0x1A), or DEC (26)"
              value={props.value}
              onChange={(e) => {
                props.handleChange(e);
                props.updateBinaryArr(toBinaryArray(e.target.value));
                // validate
                props.updateValid(e.target.value && !isNaN(e.target.value));
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
