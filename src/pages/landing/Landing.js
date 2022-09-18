import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Landing.scss";

import LandingImg from "../../assets/landing_pic.svg";

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
          <strong><p className="welcome-message">Welcome to ScheduMate</p></strong>
          <h2 className="h2-font">Got classes common with friends? Sync them now.</h2>
          <p className='paragraph'>
            ScheduMate is an application that allows you to easily see and sync the
            classes that you have in common with your friends, access notes , get the latest updates by your University. Friends make
            classes so much better! Get started and Explore more!!
          </p>
          {user.$id ? (
            <p className='button-group'>
              <Link className="landing-button st" to="/home">
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
    
      <div className="right"> 
        
          <img className="avatar1" src={LandingImg} alt="Avatar"></img>
      
      </div>

      
    </div>
    </div>
  );
};

export default Landing;
