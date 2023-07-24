import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Getting started</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            officia deserunt voluptas iste, facilis perspiciatis sit unde, sed
            illo,
            <br />
            facilis perspiciatis sit unde
          </span>
          <button className="button" href>
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
