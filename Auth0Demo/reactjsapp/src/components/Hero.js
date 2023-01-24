import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    {/* <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" /> */}
    <p className="lead">
      To test this, you have to login. Then, try the 'External API' and see if you are able to access the secure content.
    </p>
    <p>Due to Google limitations, sometimes, the profile photo will not load</p>
  </div>
);

export default Hero;
