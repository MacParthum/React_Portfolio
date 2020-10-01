import React from "react";

function About() {
  return (
    // Grid Container
    <div className="container w-100 full-page pb-5">
      <div className="row w-100">
        <div className="col-md-1"></div>
        <div className="col-md-8 mt-5 card">
          <div className="card-body">
            <h1 className="text-bold">About Me</h1>

            <img
              src="#"
              alt="Mac's Facebook"
              className="float-left mr-3 img-fluid"
            />
            <p>paragraph 1</p>
            <p>paragraph 2</p>
            {/* <p>
              <a href="#" target="_blank">
                LinkdIn
              </a>
            </p>

            <p>
              <a href="#" target="_blank">
                GitHub
              </a>
            </p> */}

            <p>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vT1t64alV8NNc5jwzTgoO01JiLA0ovR7VT3LaWmidnbyt3_0OTEZ5d933cPrqVUUxuFqke8o3Pkyb0E/pub"
                target="_blank"
              >
                Resume
              </a>
            </p>

            <p>email: macparthum@gmail.com</p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default About;
