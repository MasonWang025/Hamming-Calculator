import React from "react";

export default function SecDec() {
  return (
    <div>
      <h1 className="display-5 bold text-dark">SEC/DED</h1>
      <h4 className="inline text-dark">
        {" "}
        <em>Single Error Correction, Double Error Detection</em>
      </h4>{" "}
      <br /> <br />
      <form>
        <div className="form-row">
          <div className="col-fit">
            <label for="encoded">Enter encoded value: </label>
          </div>
          <div className="col-12 col-md">
            <input
              className="inline form-control"
              type="text"
              name="encoded"
              id="encoded"
              placeholder="BIN (11010), HEX (0x1A), or DEC (26)"
            />
          </div>
        </div>
      </form>

      <div class="mt-3 alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <h4 class="alert-heading">Come back soon.</h4>
        <p class="mb-0">
          This page is not complete yet.
        </p>
      </div>

    </div>
  );
}
