import React from "react";
import "./navbar.scss";

import icon from "./icon.svg";
import { Navigate, useNavigate,Link } from "react-router-dom";

import { UserAuth } from "../../context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();

  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("you are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <br></br>
          <Link to="/home"><strong>ScheduMate</strong></Link>

          <a
            role="button"
            onClick={function () {
              var $burgers = document.querySelectorAll(".navbar-burger");

              if ($burgers.length > 0) {
                $burgers.forEach(function ($el) {
                  if (!$el.dataset.target) {
                    return;
                  }

                  var target = $el.dataset.target;
                  var $target = document.getElementById(target);
                  $el.classList.toggle("is-active");
                  $target.classList.toggle("is-active");
                });
              }
            }}
            className="navbar-burger is-active"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a
              className="navbar-item"
              onClick={() => navigate("/home/profile")}
            >
              My Profile
            </a>

            <a
              className="navbar-item"
              onClick={() => navigate("/home/addclasses")}
            >
              Add Classes
            </a>
            <a
              className="navbar-item"
              onClick={() => navigate("/home/schedule")}
            >
              My Schedule
            </a>
            <a
              className="navbar-item"
              onClick={() => navigate("/home/addmates")}
            >
              Add Friends
            </a>
            <a className="navbar-item" onClick={() => navigate("/home/notes")}>
              Notes
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="text-xl border-2 border-black py-2 px-4 rounded-lg font-semibold"
                  onClick={handleLogout}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
