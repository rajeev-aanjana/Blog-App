import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="logo">
      <img
        src="https://executivecareerbrand.com/wp-content/uploads/2011/04/blog-49006_640.png" height='20px'
        width='100px'
        alt=""
        style={{marginLeft: '0px'}}
      />
      <h1 className="text-xl ml-20" style={{marginTop: '-20px'}}>App</h1>
    </div>
  );
}

export default Logo;
