import React from "react";

import weatherDash from "./assets/img/weatherDash.png";

function Portfolio() {
    console.log(weatherDash)
  return (

    <div className="container w-auto full-page pb-3">
      <div className="row w-auto">
        <div className="col-md-0"></div>
        <div className="col-md-12 mt-5 card bg-light">
          <div className="card-body bg-light">
            <h1 className="text-primary">Portfolio</h1>
            <br></br>

            <h4>Weather Dashboard</h4>
            <a
              href="https://github.com/MacParthum/Weather_Dashboard"
              target="_blank"
            >
              <img
                src={weatherDash}
                className="img-fluid p-3"
                alt="weather dashboard"
              />
            </a>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

 export default Portfolio;
