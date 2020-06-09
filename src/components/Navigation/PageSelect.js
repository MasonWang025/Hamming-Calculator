import React from "react";
import PageItemSelect from "./PageSelectItem";
import { useLocation } from "react-router-dom";

export default function PageSelect() {
  const path = useLocation().pathname;
  return (
    <div className="select ml-sm-3 justify-content-center">
      <div className="btn-group" role="group" aria-label="Navigation Select">
        <PageItemSelect
          title="SEC/DEC"
          active={path === "/sec-ded"}
          to="/sec-ded"
          position="first"
        />
        <PageItemSelect
          title="Encode"
          active={path === "/encode"}
          to="/encode"
          position="middle"
        />
        <PageItemSelect
          title="Analysis"
          active={path === "/analysis"}
          to="/analysis"
          position="last"
        />
      </div>
    </div>
  );
}
