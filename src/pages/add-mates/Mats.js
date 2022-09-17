import { React, useState } from "react";
import Profile from "../../components/profile/profile";
import NavBar from "../../components/navbar/navbar";

import "./mats.scss";

const Mats = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const APIData = []; // pass in firebase profiles

  const friends = []; // add list of all friends

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div>
      <NavBar active={"friends"}></NavBar>
      <h1>Add Friends</h1>

      <div className="searchbar">
        <input
          className="searchbar"
          onChange={searchItems}
          placeholder="search and add new friends by email"
        ></input>
      </div>
      {searchInput.length > 1
        ? filteredResults.map((item) => {
            return (
              <Profile
                name={item.name}
                school={item.university}
                email={item.name}
                year={item.year}
                program={item.program}
                add="true"
              ></Profile>
            );
          })
        : APIData.map((item) => {
            return (
              <Profile
                name={item.name}
                school={item.university}
                email={item.name}
                year={item.year}
                program={item.program}
                add="true"
              ></Profile>
            );
          })}
      <Profile
        name={"Maryam"}
        school={"University of Waterloo"}
        email="m5afsh@uwaterloo.ca"
        year="2nd"
        program="Computer Science"
        add="true"
      ></Profile>
      <div className="title">
        <h3>Current Friends</h3>
        {friends.length > 1 ? (
          friends.map((item) => {
            return (
              <Profile
                name={item.name}
                school={item.university}
                email={item.name}
                year={item.year}
                program={item.program}
                add="true"
              ></Profile>
            );
          })
        ) : (
          <div className="profiles">
            <Profile
              name={"Maryam"}
              school={"University of Waterloo"}
              email="m5afsh@uwaterloo.ca"
              year="2nd"
              program="Computer Science"
            ></Profile>
            <Profile
              name={"Sophia"}
              school={"University of Waterloo"}
              email="s62nguye@uwaterloo.ca"
              year="1st"
              program="Software Engineering"
            ></Profile>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mats;
