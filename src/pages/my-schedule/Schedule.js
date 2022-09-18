import React, { useState } from "react";
import NavBar from "../../components/navbar/navbar";
import "./schedule.scss";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { db } from "../../appwrite";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const fetchClasses = async () => {
  const data = await db.listDocuments(
    process.env.REACT_APP_APPWRITE_DATABASE_ID,
    "classes"
  );
  // console.log(data);
  return data;
};

// const events = [
//   {
//     title: "Big Meeting 5.30-6pm",
//     allDay: true,
//     start: new Date(2022, 6, 30),
//     end: new Date(2022, 6, 30),
//   },
//   {
//     title: "Vacation",
//     start: new Date(2021, 6, 7),
//     end: new Date(2021, 6, 10),
//   },
//   {
//     title: "Conference",
//     start: new Date(2022, 10, 20),
//     end: new Date(2022, 10, 23),
//   },
//   {
//     id: 13,
//     title: "Multi-day Event",
//     start: new Date(2022, 3, 20, 19, 30, 0),
//     end: new Date(2022, 3, 22, 2, 0, 0),
//   },
// ];

export default function Schedule() {
  // const [newEvent, setNewEvent] = useState([]);

  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const listOfData = await fetchClasses();
      console.log(listOfData);
      const calData = listOfData.documents.map((data) => {
        const currData = {
          title: data.classname,
          start: new Date(
            2022,
            9,
            17,
            data.starttime.substring(0, 2),
            data.starttime.slice(3)
          ),
          end: new Date(
            2022,
            9,
            18,
            data.endtime.substring(0, 2),
            data.endtime.slice(3)
          ),
        };
        return currData;
      });
      setAllEvents(calData);
      // for (const data of listOfData) {
      //   const currData = {
      //     title: data.className,
      //     start: new Date(
      //       2022,
      //       3,
      //       20,
      //       data.startTime.substring(0, 2),
      //       data.startTime.slice(3)
      //     ),
      //     end: new Date(
      //       2022,
      //       4,
      //       20,
      //       data.endTime.substring(0, 2),
      //       data.endTime.slice(3)
      //     ),
      //   };
      //   setAllEvents(currData);
      // }
    };
    fetchDatas();
  }, []);

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }

  return (
    <div className="App">
      <NavBar active={"schedule"}></NavBar>
     
      <h1 className="heading2">My Schedule</h1>
      {/* <button onClick={fetchClasses}>getData</button> */}
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        default="standard"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}
