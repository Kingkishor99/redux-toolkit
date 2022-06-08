import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Display from "./Components/Display";
import { add, reset, substract } from "./Toolkit/Reducers";

function App() {
  const dispatch = useDispatch();
  const Increase = (e) => {
    dispatch(add());
    console.log("add");
  };
  const Decrease = (e) => {
    dispatch(substract());
    console.log("sub");
  };
  const Refresh = (e) => {
    dispatch(reset());
    console.log("reset");
  };

  return (
    <div>
      <div style={{ backgroundColor: "yellow", display: "inline-block" }}>
        {useSelector((state) => state.co.aa)}
      </div>
      <br />
      <br />
      <button onClick={(e) => Increase(e)}>add</button>
      <br />
      <br />
      <button onClick={(e) => Decrease(e)}>substract</button>
      <br />
      <br />
      <button onClick={(e) => Refresh(e)}>reset</button>
      <br />
      <br />
      <div style={{ backgroundColor: "green", display: "inline-block" }}>
        {useSelector((state) => state.co.value)}
      </div>
      <br />
      <br />

      <Link to="/display">To display</Link>
    </div>
  );
}

export default App;
