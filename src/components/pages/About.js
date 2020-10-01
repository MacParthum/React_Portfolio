import React from "react";

function About() {
  return (
    <div className="container w-100 full-page pb-5">
      <div className="row w-100">
        <div className="col-md-1"></div>
        <div className="col-md-8 mt-5 card">
          <div className="card-body">
            <h1 className="text-bold">About Me</h1>

            <img
              src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/67514684_2299926470122695_2668323770661339136_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=VxtoEIfjesUAX-E61AH&_nc_ht=scontent-ort2-2.xx&oh=7fcdc7775d365290d201479b97ccad7d&oe=5F9AB6E0"
              alt="Mac's Facebook"
              width="200"
              height="200"
              border="0"
              className="float-left mr-3 img-fluid"
            />

            <p>
              
              I first became fascinated with computers and video games playing
              Age of Empires. A classic pc game that lets you build a
              civilization and conquer the world with your armies. I knew I
              wanted to learn all video games and how they are made. I stumbled
              upon imvu 12 years ago. imvu is a chat messenger that allows people to pay a
              small price to create items for sale on the messenger. imvu users
              can buy anything you can make on 3ds max like houses, cars,
              clothes for your avitar, avitars themselves. I was hooked on it
              immediatly and I've been at it for over a decade. From my time on
              imvu I learned a lot of photoshop and how to re-texture 3DS Max
              models and sell them for a little profit.
            </p>
            <p>
              
              Each imvu product has an HTML page and I learned the basics of how
              to display images and do a little coding. That little bit of
              coding lead me to lean away from wanting to make games to being
              even more intersted in making webpages and websites. So I enrolled
              at the UNC Charlotte Full Stack Web Developer Bootcamp and made
              this page!. Im exited to put my newfound skills to use to keep
              updating this page as I learn more.
            </p>
            <p>

              <a href="https://www.linkedin.com/in/mac-parthum-3b758782/" target="_blank">
                Go to my LinkdIn Profile
              </a>
            </p>

            <p>

              <a href="https://github.com/MacParthum" target="_blank">
                Go to my GitHub Profile
              </a>
            </p>

            <p>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vT1t64alV8NNc5jwzTgoO01JiLA0ovR7VT3LaWmidnbyt3_0OTEZ5d933cPrqVUUxuFqke8o3Pkyb0E/pub"
                target="_blank"
              >
                Go to my Resume
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
