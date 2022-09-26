import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostShadow = (props) => {
  /* A hook that is used to store the values of the input fields. */
  const [shdval, setshdval] = useState({});
  const [inset, setinset] = useState(false);
  /* A function that is called when the user enters the values in the input fields. */
  const shdfunc = (val) => {
    /* Destructuring the array that is passed to the function. */
    var [inputH, inputV, inputB, inputS, inputC, inputbg] = val;
    setshdval({
      H: inputH,
      V: inputV,
      B: inputB,
      S: inputS,
      C: inputC,
      bg: inputbg,
    });
  };
  /**
   * If inset is true, set inset to false, otherwise set inset to true.
   */
  const insetfunc = () => {
    inset ? setinset(false) : setinset(true);
  };
  /**
   * When the copy button is clicked, get the box-shadow value of the preview element, and copy it to the
   * clipboard.
   */
  const copyfunc = () => {
    let preview = document.getElementById("gshadow");
    var styl = window.getComputedStyle(preview);
    navigator.clipboard
      .writeText(styl.boxShadow || "not was copied")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    if (styl) {
      toast.success(`shadow has been copied!`);
    } else {
      toast.error(`s shadow was not copied!`);
    }
  };
  return (
    <div className="container-fluid mt-1 py-2 px-3 text-center overflow-hiddan">
      <h3 className="w-100 text-primary text-center mb-2">{props.Title}</h3>
      <div
        className={`row mt-3 mb-3 d-flex justify-content-between align-items-center position-relative`}
      >
        {/* A component that is passed as a prop to the PostShadow component. */}
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center gap-5 gap-sm-4 h-100">
          <h3
            className={`w-100 text-primary text-center d-sm-none ${
              window.innerWidth <= 577 ? "d-none" : "d-block"
            }`}
          >
            Your box with shadow you enterd.
          </h3>
          <div
            className="d-flex flex-column justify-content-center align-items-center rounded"
            id="gshadow"
            style={{
              /* A template literal that is used to set the value of the boxShadow property of the style
             attribute. */
              boxShadow: `${shdval.H || 0}px ${shdval.V || 0}px ${
                shdval.B || 10
              }px ${shdval.S || 10}px ${shdval.C || "#00ffff"} ${
                inset ? "inset" : ""
              }`,
              backgroundColor: shdval.bg || "#0d6efd",
              height: "250px",
              width: "250px",
              cursor: "pointer",
            }}
          >
            <span className="text-white fs-4 d-flex justify-content-center align-items-center w-100 h-100">
              {`your name will hear`}
            </span>
          </div>
          <div className="btns w-100 d-flex align-items-center justify-content-center gap-2">
            <button
              className="btn btn-sm btn-primary bg-primary"
              onClick={copyfunc}
            >
              Copy Shadow
            </button>
          </div>
        </div>
        <props.Data shdfunc={shdfunc} insetfunc={insetfunc} />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        pauseOnHover={true}
        draggable={true}
      />
    </div>
  );
};

export default PostShadow;
