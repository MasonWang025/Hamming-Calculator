import React from "react";
import { Link } from "react-router-dom";

export default function NavSelectItem(props) {
  return (
    <li className={"nav-item " + (props.active ? "active " : " ")}>
      <Link className="nav-link" to={props.to}>
        {props.title}
      </Link>
    </li>
  );
}
