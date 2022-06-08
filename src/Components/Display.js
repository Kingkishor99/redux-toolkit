import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { text } from "../Toolkit/Reducers";

function Display() {
  const dispatch = useDispatch();

  const Change = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(text(e.target.value));
  };

  return (
    <div>
      <div style={{ backgroundColor: "green", display: "inline-block" }}>
        {useSelector((state) => state.co.value)}
      </div>

      <br />
      <br />
      <div style={{ backgroundColor: "yellow", display: "inline-block" }}>
        {useSelector((state) => state.co.aa)}
      </div>
      <br />
      <br />
      <input
        onChange={(e) => {
          Change(e);
        }}
      />
      <br />
      <br />
      <Link to="/">To App</Link>
    </div>
  );
}

export default Display;
