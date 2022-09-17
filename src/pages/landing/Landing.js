import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Landing.scss";

import LandingImg from "../../assets/landing.svg";
import icon from "../../components/navbar/icon.svg";

const Landing = () => {
  const { user } = UserAuth();
  // const [yn, setYn] = useState(false);

  // useEffect(() => {
  //   if (user) setYn(true);
  //   else setYn(false);
  // }, [user]);

  return (
    <div>
      <div className="split left">
        <div role="button" className="name" tabIndex={0}>
          {/* <img className="__button" src={icon} alt="add"></img> */}
          <p className="maintitle">ScheduLens</p>
        </div>
        <div className="centered">
          <img
            className="avatar-woman"
            src={LandingImg}
            alt="Avatar woman"
          ></img>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <p className="welcome-message">Welcome to</p>
          <h2>ScheduLens - Never miss a class with a friend again!</h2>
          <p>
            ScheduLens is an application that allows you to easily see the
            classes that you have in common with your friends. Friends make
            classes so much better!
          </p>
          {user.$id ? (
            <p>
              <Link className="landingButton" to="/home">
                Get Started
              </Link>
            </p>
          ) : (
            <p>
              <Link className="landingButton" to="/signup">
                Sign up
              </Link>
              <Link className="landingButton" to="/login">
                Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
