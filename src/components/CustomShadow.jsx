import React, { useState } from "react";

const CustomShadow = (props) => {
  /* A React Hook. It is a function that lets you “hook into” React features. For example, useState is a
Hook that lets you add React state to function components. */
  const [inputs, setinputs] = useState({});
  /* A function that is called when the input value changes. It is used to update the state of the
 component. */
  const changehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputs((values) => ({ ...values, [name]: [value] }));
    props.shdfunc([inputs.h, inputs.v, inputs.b, inputs.s, inputs.c,inputs.bg]);
  };
  
  return (
    <div className="inputs-column col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center gap-2" id="inputs-column">
      <h3 className={`w-100 text-primary text-center d-sm-none ${window.innerWidth<=577 ?"d-none" : "d-block"}`}>Box-Shadow Propertys</h3>
      <div className="inputs-fileds mt-1  w-100 px-5 d-flex flex-column  align-items-start gap-0">
        <label htmlFor="horizontale">Horizontal Shadow Length</label>
        <div className="inp w-100 d-flex gap-2">
          <input
            className="w-75"
            type="range"
            name="h"
            value={inputs.h || 10}
            min={-200}
            max={200}
            id="horizontale"
            onChange={changehandler}
          />
          <span
            className="text-white bg-primary mx-3  fs-4 rounded shadow"
            style={{ width: "50px" }}
          >
            {inputs.h || 10}
          </span>
        </div>
        <br />
        <label htmlFor="vertical">Vertical Shadow Length</label>
        <div className="inp w-100 d-flex gap-2">
          <input
            className="w-75"
            type="range"
            name="v"
            value={inputs.v || 10}
            min={-200}
            max={200}
            id="vertical"
            onChange={changehandler}
          />
          <span
            className="text-white bg-primary mx-3  fs-4 rounded shadow"
            style={{ width: "50px" }}
          >
            {inputs.v || 10}
          </span>
        </div>
        <br />
        <label htmlFor="blure">Blur Radius</label>
        <div className="inp w-100 d-flex gap-2">
          <input
            className="w-75"
            type="range"
            name="b"
            value={inputs.b || 5}
            min={0}
            max={400}
            id="blure"
            onChange={changehandler}
          />
          <span
            className="text-white bg-primary mx-3  fs-4 rounded shadow"
            style={{ width: "50px" }}
          >
            {inputs.b || 5}
          </span>
        </div>
        <br />
        <label htmlFor="spread">Spread Radius</label>
        <div className="inp w-100 d-flex gap-2">
          <input
            className="w-75"
            type="range"
            name="s"
            value={inputs.s || 0}
            min={-200}
            max={200}
            id="spread"
            onChange={changehandler}
          />
          <span
            className="text-white bg-primary mx-3  fs-4 rounded shadow"
            style={{ width: "50px" }}
          >
            {inputs.s || 0}
          </span>
        </div>
        <div className="inp w-100 mt-3 d-flex justify-content-between align-items-center pe-5 mt-4">
        <div className="d-flex gap-2">
            {/* <label htmlFor="bg">box-bg</label> */}
            <input
              type="color"
              name="bg"
              value={inputs.bg || "#0d6efd"}
              id="bg"
              onChange={changehandler}
            />
          </div>
          <div className="d-flex gap-2">
            {/* <label htmlFor="color">Shadow</label> */}
            <input
              type="color"
              name="c"
              value={inputs.c || "#00ffff"}
              id="color"
              onChange={changehandler}
            />
          </div>
          <button className="btn btn-sm btn-primary bg-primary me-3" onClick={props.insetfunc}>Inset</button>
        </div>
      </div>
      {/* <div className="gradient-shadow">
        <Link to="/gradientshadow" className="btn btn-sm btn-primary rounded bg-primary">
          Gradient Shadow
        </Link>
      </div> */}
    </div>
  );
};

export default CustomShadow;
