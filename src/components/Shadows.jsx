import React, { Component, memo } from "react";
/* Importing the OverlayTrigger component from the react-bootstrap library. */
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Loading from "./Loading";
/* Importing the Tooltip component from the react-bootstrap library. */
import Tooltip from "react-bootstrap/Tooltip";
/* Importing the toastify library. */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* A class that extends the Component class. */
class Shadows extends Component {
  constructor(props) {
    super(props);
    /* Setting the initial state of the component. */
    this.state = {
      item: [],
      name: "",
      DataisLoded: false,
      color: "",
    };
  }
  /* A lifecycle method that is called after the component is mounted. */
  async componentDidMount() {
 /* Fetching the data from the json file and setting the state of the component. */
    let res = await fetch("https://mr-adil1.github.io/shadow.json/shadow.json");
    let data = await res.json();
      this.setState({
        item: data.shadow,
        DataisLoded: true,
      });
  }
  copystyle = (e) => {
    let elm = e.target.parentElement;
    let styl = window.getComputedStyle(elm);
    navigator.clipboard.writeText(styl.boxShadow);
    if (styl.boxShadow) {
      toast.success(`shadow has been copied!`);
    } else {
      toast.error(`shadow was not copied!`);
    }
  };
  //rendring component
  render() {
    //loading
    const { DataisLoded, item } = this.state;
    if (!DataisLoded)
      return (
        <div className="text-center">
          <Loading/>
        </div>
      );
    return (
      <>
        <div className="s-container container p-3 d-flex flex-column justify-content-center align-items-center">
          <h3 className="w-100 text-center mt-2 mb-2 fs-3 text-primary fs-6">
            Click the box to copy the box-shadow.
          </h3>
          <div className="s-row row mt-3 mb-3 gap-4 d-flex align-items-center justify-content-center">
            {
              //map on fetched item for using its  values
              item.map((elm, index) => {
                let num = index + 1;
                return (
                  <OverlayTrigger
                    /* A unique identifier for each element in the array. */
                    key={elm.shd.id}
                    overlay={<Tooltip id="tooltip">Shadow by {elm.shd.name}</Tooltip>}
                  >
                    <div
                      className="s-col position-relative col-lg-3 col-md-2 col-sm-4 mb-4 mb-lg-0 d-flex flex-column justify-content-center align-items-center gap-2 bg-white border rounded"
                      style={{
                        boxShadow: elm.shd.val,
                        height: "200px",
                        width: "250px",
                        cursor: "pointer",
                      }}
                      id={elm.shd.id}
                      onClick={this.copystyle}
                    >
                      <span className="text-primary fs-5 position-absolute top-0 start-0 m-2">
                        #{num}
                      </span>
                      <span id="author" className="text-primary fs-4 d-flex justify-content-center align-items-center w-100 h-100">
                        By {`(${elm.shd.name})`}
                      </span>
                    </div>
                  </OverlayTrigger>
                );
              })
            }
          </div>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={1500}
          pauseOnHover={true}
          draggable={true}
        />
      </>
    );
  }
}

export default memo(Shadows);
