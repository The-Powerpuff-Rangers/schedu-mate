import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../appwrite";
import "./details.scss";

const Details = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateBirth, setDateBirth] = useState(new Date());
  const [number, setNumber] = useState(0);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [studyTerm, setStudyTerm] = useState("");

  // Navigation
  const navigate = useNavigate();
  // user
  const { user } = UserAuth();
  // const userCollectionRef = collection(db, "users", user.uid);

  // submit function
  const createProfile = async (e) => {
    e.preventDefault();
    const userProfile = {
      firstname: firstname,
      lastname: lastname,
      datebirth: dateBirth,
      mobile: number,
      gender: gender,
      country: country,
      university: university,
      program: program,
      year: year,
      term: studyTerm,
      email: user.email,
    };

    console.log(userProfile);
    // add profile
    await db.createDocument(
      process.env.REACT_APP_APPWRITE_DATABASE_ID,
      process.env.REACT_APP_USERS_COLLECTION_ID,
      user.$id,
      userProfile
    );
    navigate("/home/schedule");
    console.log("successfully sent data");
  };

  // HTML code
  return (
    <div className="body-container">
      <div className="container">
        <header>Details Page</header>

        {/* Form */}
        <form onSubmit={createProfile}>
          <div className="form first">
            {/* Personal Details */}
            <div>
              <span className="title1">Personal Details</span>
              <div className="fields">
                {/* First name */}
                <div className="input-field">
                  <label>First Name</label>
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    placeholder="Enter your first name"
                    required
                  ></input>
                </div>
                {/* last name */}
                <div className="input-field">
                  <label>Last Name</label>
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    placeholder="Enter your last name"
                    required
                  ></input>
                </div>
                {/* Date of Birth */}
                <div className="input-field">
                  <label>Date of Birth</label>
                  <input
                    onChange={(e) => setDateBirth(e.target.value)}
                    type="date"
                    placeholder="Enter birth date"
                    required
                  ></input>
                </div>
                {/* Phone Number */}
                <div className="input-field">
                  <label>Mobile Number</label>
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  ></input>
                </div>
                {/* Gender */}
                <div className="input-field">
                  <label>Gender</label>
                  <select onChange={(e) => setGender(e.target.value)} required>
                    <option disabled selected>
                      {" "}
                      Select gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                  </select>
                </div>
                {/* Country */}
                <div className="input-field">
                  <label>Country</label>
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    placeholder="Enter your country"
                    required
                  ></input>
                </div>
              </div>
            </div>

            <div>
              <span className="title1">University Details</span>
              <div className="fields">
                {/* University */}
                <div className="input-field">
                  <label>University or School</label>
                  <input
                    onChange={(e) => setUniversity(e.target.value)}
                    type="text"
                    placeholder="Enter your university"
                    required
                  ></input>
                </div>
                {/* Program */}
                <div className="input-field">
                  <label>Program</label>
                  <input
                    onChange={(e) => setProgram(e.target.value)}
                    type="text"
                    placeholder="Enter your program"
                    required
                  ></input>
                </div>
                {/* Year */}
                <div className="input-field">
                  <label>Year</label>
                  <select onChange={(e) => setYear(e.target.value)} required>
                    <option disabled selected>
                      Select Year
                    </option>
                    <option>Freshman</option>
                    <option>Sophmore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                  </select>
                </div>
                {/* term */}
                <div className="input-field">
                  <label>Current Study Term:</label>
                  <select
                    onChange={(e) => setStudyTerm(e.target.value)}
                    required
                  >
                    <option disabled selected>
                      Select Term
                    </option>
                    <option>1A</option>
                    <option>1B</option>
                    <option>2A</option>
                    <option>2B</option>
                    <option>3A</option>
                    <option>3B</option>
                    <option>4A</option>
                    <option>4B</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>
              {/* Submit */}
              <center>
                <button type="submit" className="button is-info is-rounded">
                  <span className="btnText">Submit</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </center>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
