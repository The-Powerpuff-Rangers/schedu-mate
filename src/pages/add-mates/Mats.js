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
      <h1 className="heading2">Add Friends</h1>

      <div className="searchbar">
        <input
          className="searchbar  inside"
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
        name={"Harsh Sharma"}
        school={"Maharaja Surajmal Institute of Technology"}
        email="harshs@gmail.com"
        year="3nd"
        program="Computer Science"
        add="true"
      ></Profile>
      <div className="title">
        <h3>Current Friends</h3>
      </div>
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
        <div className="mates-main">
          <div className="profiles">
            <Profile
              name={"Gunjan"}
              school={"Maharaja Surajmal Institute of Technology"}
              email="gujju@gmail.com"
              year="3nd"
              program="Computer Science"
              add="true"
            ></Profile>
            <Profile
              name={"Vidhu Mathur"}
              school={"Maharaja Surajmal Institute of Technology"}
              email="vid@gmail.com"
              year="3nd"
              program="Computer Science and Engineering"
              add="true"
            ></Profile>
          </div>
          <div className="title">
            <h3>Current Groups</h3>
          </div>
          <div className="profiles">
            <Profile
              name={"GDSC Core"}
              school={"Maharaja Surajmal Institute of Technology"}
              email="m5afsh@msit.com"
            ></Profile>
            <Profile
              name={"Sophia's Group"}
              school={"Maharaja Surajmal Institute of Technology"}
              email="s62nguye@msit.com"
            ></Profile>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mats;
