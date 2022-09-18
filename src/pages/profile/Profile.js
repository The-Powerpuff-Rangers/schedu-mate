import React, { useContext, useEffect, useState } from "react";
import ISODateFormatter from "iso-date-formatter";
import NavBar from "../../components/navbar/navbar";
import { UserContext } from "../../context/AuthContext";
import { db } from "../../appwrite";
import "./profile.scss";

const Profile = () => {
  const { getUser } = useContext(UserContext);
  // console.log(user.uid);

  const [profile, setProfile] = useState({});
  //   const docRef = doc(db, "users", user.uid);

  useEffect(() => {
    // event.preventDefault();
    const getInfo = async () => {
      const userData = await getUser();
      // console.log(user);
      const profileSnap = await db.getDocument(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_USERS_COLLECTION_ID,
        userData.$id
      );
      // console.log(profileSnap);
      setProfile(profileSnap);
    };
    getInfo();
  }, []);

  const isoDate = "2019-06-04T14:03:07.007Z";
  const formattedDate = ISODateFormatter(isoDate, {
    format: "dd MM yyyy HH:mm",
  });

  const avatar = `https://avatars.dicebear.com/api/croodles/${profile.firstname}/.svg`;

  return (
    <div className="profile-main">
      <NavBar active={"profile"}></NavBar>
      <div className="profile-card">
        <article class="cssui-usercard">
          <div class="cssui-usercard__body">
            <header class="cssui-usercard__header">
              <img
                className="avatar"
                src={avatar}
                class="cssui-usercard__avatar"
                alt="Avatar"
              ></img>
              <div class="cssui-usercard__header-info">
                <h3 class="cssui-usercard__name">Hi</h3>
                <span class="cssui-usercard__post">
                  {profile.firstname} {profile.lastname}!
                </span>
              </div>
            </header>
            <div class="cssui-usercard__content">
              <div class="cssui-slider">
                <input
                  id="slide1"
                  type="radio"
                  class="cssui-slider__switch cssui-usercard__switch"
                  name="slider-controls"
                ></input>
                <label
                  for="slide1"
                  class="cssui-slider__control cssui-usercard__control"
                ></label>
                <input
                  id="slide2"
                  type="radio"
                  class="cssui-slider__switch cssui-usercard__switch"
                  name="slider-controls"
                ></input>
                <label
                  for="slide2"
                  class="cssui-slider__control cssui-usercard__control"
                ></label>
                <h4 class="cssui-usercard__title">About me</h4>
                <div class="cssui-slider__slides">
                  <div class="cssui-slider__slide">
                    <div class="cssui-usercard__stats">
                      <div class="cssui-stats cssui-usercard__stats-item">
                        <i class="cssui-icon icon-earth"></i>
                        <div class="cssui-stats__info cssui-usercard__stats-info">
                          <span class="cssui-stats__name cssui-usercard__stats-name">
                            Date of Birth:{" "}
                          </span>
                          <span class="cssui-stats__value">
                            <span>{formattedDate}</span>
                          </span>
                        </div>
                      </div>
                      <div class="cssui-stats cssui-usercard__stats-item">
                        <i class="cssui-icon icon-location"></i>
                        <div class="cssui-stats__info cssui-usercard__stats-info">
                          <span class="cssui-stats__name cssui-usercard__stats-name">
                            Mobile Number:
                          </span>
                          <span class="cssui-stats__value">
                            <span>{profile.mobile}</span>
                          </span>
                        </div>
                      </div>
                      <div class="cssui-stats cssui-usercard__stats-item">
                        <i class="cssui-icon icon-calendar"></i>
                        <div class="cssui-stats__info cssui-usercard__stats-info">
                          <span class="cssui-stats__name cssui-usercard__stats-name">
                            Email:
                          </span>
                          <span class="cssui-stats__value">
                            {profile.email}
                          </span>
                        </div>
                      </div>
                      <div class="cssui-stats cssui-usercard__stats-item">
                        <i class="cssui-icon icon-man-woman"></i>
                        <div class="cssui-stats__info cssui-usercard__stats-info">
                          <span class="cssui-stats__name cssui-usercard__stats-name">
                            Gender:
                          </span>
                          <span class="cssui-stats__value">
                            {profile.gender}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="cssui-slider__slide">
                    <div class="cssui-usercard__stats">
                      <div class="cssui-stats cssui-usercard__stats-item">
                        <i class="cssui-icon icon-html"></i>
                        <div class="cssui-stats__info cssui-usercard__stats-info">
                          <span class="cssui-stats__name cssui-usercard__stats-name">
                            College:
                          </span>
                          <span class="cssui-stats__value">
                            {profile.university}
                          </span>
                        </div>
                      </div>
                      <div class="cssui-stats cssui-usercard__stats-item">
                        <i class="cssui-icon icon-vue"></i>
                        <div class="cssui-stats__info cssui-usercard__stats-info">
                          <span class="cssui-stats__name cssui-usercard__stats-name">
                            Course:
                          </span>
                          <span class="cssui-stats__value">
                            {profile.program}
                          </span>
                        </div>
                      </div>
                      <div class="cssui-stats cssui-usercard__stats-item">
                        <i class="cssui-icon icon-angular"></i>
                        <div class="cssui-stats__info cssui-usercard__stats-info">
                          <span class="cssui-stats__name cssui-usercard__stats-name">
                            Year
                          </span>
                          <span class="cssui-stats__value">{profile.year}</span>
                        </div>
                      </div>
                      <div class="cssui-stats cssui-usercard__stats-item">
                        <i class="cssui-icon icon-js"></i>
                        <div class="cssui-stats__info cssui-usercard__stats-info">
                          <span class="cssui-stats__name cssui-usercard__stats-name">
                            Term
                          </span>
                          <span class="cssui-stats__value">{profile.term}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Profile;
