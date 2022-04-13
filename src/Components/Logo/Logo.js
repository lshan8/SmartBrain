import React from "react";
import Tilty from "react-tilty";
import "./Logo.css";
import brain from "./brain.png";    
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty className=" tilt br2 shadow-2" scale={1.2} perspective={1200} reset={true}>
        <div className="pa3"><img style={{paddingTop: "5px"}} src={brain} alt="Logo"/></div>
      </Tilty>
    </div>
  );
};
export default Logo;
