import React from "react";

function Contact() {
  return (
    <div className="container w-auto full-page pb-5">
      <div className="row w-auto">
        <div className="col-md-1"></div>
        <div className="col-md-8 mt-5 card">
          <div className="card-body">
            <h1 className="text">Contact</h1>
            <form>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Name</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  placeholder="Name"
                ></textarea>
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Contact;
