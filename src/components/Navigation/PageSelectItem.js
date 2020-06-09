import React from "react";
import { Link } from "react-router-dom";

export default function PageSelectItem(props) {
  return (
    <Link to={props.to}>
      <button
        type="button"
        className={
          "btn " +
          (props.active ? "btn-dark " : "btn-light ") +
          props.position
        }
      >
        {props.title}
      </button>
    </Link>
  );
}
