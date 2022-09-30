import React, { useState, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import "./Add.scss";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../appwrite";
import CourseCard from "../../components/CourseCard/CourseCard";
import { Navigate, Redirect, useNavigate } from "react-router-dom";

const AddClasses = () => {
  const { user } = UserAuth();

  // varaibles
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [courses, setCourses] = useState([]); // array
  const [courseList, setCourseList] = useState([]); // array

  const navigate = useNavigate();

  const createCourses = async (e) => {
    e.preventDefault();
    const course = {
      classname: courseName,
      classcode: courseCode,
      days: day,
      startdate: startDate,
      enddate: endDate,
      starttime: startTime,
      endtime: endTime,
    };
    try {
      await docRef(course);
      setCourses([...courses, course]);
      console.log("successfully send data");
      navigate("/home/schedule");
    } catch (e) {
      console.log(e);
    }
  };

  const docRef = async (course) => {
    return await db.createDocument(
      process.env.REACT_APP_APPWRITE_DATABASE_ID,
      "classes",
      "unique()",
      course
    );
  };

  const Clear = () => {
    setCourseName("");
    setCourseCode("");
    setDay({ selected: "" });
    setStartDate("");
    setEndDate("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="background">
      <NavBar></NavBar>
      <header className="heading1">Add Your Classes</header>
      <div className="form">
        <div className="form-card">
          <form onSubmit={createCourses} className="add-class">
            <div className="single-form">
              {/* Course Name */}
              <div className="field">
                <label className="label">Course Name</label>

                <input
                  className="control"
                  onChange={(e) => setCourseName(e.target.value)}
                  type="text"
                  name="coursename"
                  id="coursename"
                  required
                  autoComplete="off"
                  placeholder="Course Name"
                  value={courseName}
                ></input>
              </div>
              {/* Course Code */}
              <div className="field">
                <label className="label">Course Code</label>
                <input
                  className="control"
                  onChange={(e) => setCourseCode(e.target.value)}
                  type="number"
                  name="coursecode"
                  id="coursecode"
                  required
                  autoComplete="off"
                  placeholder="Course Code"
                  value={courseCode}
                ></input>
              </div>
              {/* Day */}
              <div className="field">
                <label className="label">Lecture Days</label>
                <select
                  className="control"
                  onChange={(e) => setDay(e.target.value)}
                  required
                  value={day}
                >
                  <option disabled defaultValue>
                    Day of the week
                  </option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wedneday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
              {/* Start Date */}
              <div className="field">
                <label className="label">Start Date</label>
                <input
                  className="control"
                  onChange={(e) => setStartDate(e.target.value)}
                  type="date"
                  name="date"
                  id="date"
                  required
                  autoComplete="off"
                  value={startDate}
                ></input>
              </div>
              {/* End Date */}
              <div className="field">
                <label className="label">End Date</label>
                <input
                  className="control"
                  onChange={(e) => setEndDate(e.target.value)}
                  type="date"
                  name="date"
                  id="date"
                  required
                  autoComplete="off"
                  value={endDate}
                ></input>
              </div>
              {/* Start time */}
              <div className="field">
                <label className="label">Start time</label>
                <input
                  className="control"
                  onChange={(e) => setStartTime(e.target.value)}
                  type="time"
                  name="time"
                  id="time"
                  required
                  autoComplete="off"
                  value={startTime}
                ></input>
              </div>
              {/* End time */}
              <div className="field">
                <label className="label">End time</label>
                <input
                  className="control"
                  onChange={(e) => setEndTime(e.target.value)}
                  type="time"
                  name="time"
                  id="time"
                  required
                  autoComplete="off"
                  value={endTime}
                ></input>
              </div>
              {/* Buttons */}
              <div className="field is-grouped">
                <div className="control-2">
                  <button type="submit" className="button is-link">
                    Add
                  </button>
                </div>
                <div className="control-2">
                  <button className="button is-link is-light" onClick={Clear}>
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClasses;
