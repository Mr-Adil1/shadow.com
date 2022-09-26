import React from "react";

const About = () => { 
  return (
    <div className="container mt-3 mb-3 p-4">
      <h3 className="w-100 text-center text-primary">{`About / USE`}</h3>
      <div className="row mt-2 mb-2 w-100">
        <div className="col-12">
          <br />
          <br />
          <h5 className="w-100 text-primary">About Developer:</h5>
          <p className="row text-secoundry">
            <span
              className="col-lg-6 col-md-8 col-sm-12 text-capitalize"
              style={{ lineHeight: "25px", wordSpacing: "1px" }}
            >
              Hi, I am Adil. I'm 19 years old I am front end web developer. and
              this is my box-shadow project built in react-js. which I made
              while learning to react-js.
            </span>
          </p>
          <br />
          <br />
          <h5 className="w-100 text-primary">USE:</h5>
          <p className="row text-secoundry">
            <span
              className="col-lg-6 col-md-8 col-sm-12 text-capitalize"
              style={{ lineHeight: "25px", wordSpacing: "1px" }}
            >
              In this website you can copy the box shadow code by clicking the
              box in the home section, and you can also create your own box
              shadow.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
