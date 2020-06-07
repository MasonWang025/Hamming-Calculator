import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="container mx-auto card-container mt-5">
        <div className="row align-content-center">
          <div className="col">
            <div className="card text-dark bg-light">
                <div className="card-header">
                    <h2>ECC Magic</h2>
                </div>
              <div className="card-body p-5">
                  {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
