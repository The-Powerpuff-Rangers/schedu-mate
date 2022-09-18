import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Landing.scss";

import LandingImg from "../../assets/landing.svg";
import icon from "../../components/navbar/icon.svg";

const Landing = () => {
  const { user } = UserAuth();

  return (
    <div className="landing-main">
      <div role="button" className="name" tabIndex={0}>
          <img className="__button" src={icon} alt="add"></img>
          <p className="maintitle">ScheduMate</p>
        </div>
    
    <div className="landing-flex">
      <div className="left"> 
        <div className="centered">
          <img className="avatar-woman" src={LandingImg} alt="Avatar woman"></img>
        </div>
      </div>

      <div className="right">
        <div className="centered">
          <strong><p className="welcome-message">Welcome to ScheduMate</p></strong>
          <h2 className="h2-font">Never miss a class with a friend again!</h2>
          <p>
            ScheduMate is an application that allows you to easily see the
            classes that you have in common with your friends. Friends make
            classes so much better!
          </p>
          {user.$id ? (
            <p>
              <Link className="landing-button" to="/home">
                Get Started
              </Link>
            </p>
          ) : (
            <p className="button-group">
              <Link className="landing-button" to="/signup">
                Sign up
              </Link>
              <Link className="landing-button" to="/login">
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Landing;
