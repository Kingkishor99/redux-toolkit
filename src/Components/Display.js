import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Display() {
  return (
    <div>
      {useSelector((state) => state.co.value)}
      <br />
      <br />
      <Link to="/">To App</Link>
    </div>
  );
}

export default Display;
