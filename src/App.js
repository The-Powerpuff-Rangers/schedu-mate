import { React, useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  AuthContextProvider,
  UserAuth,
  UserContext,
} from "./context/AuthContext.js";
import ProtectedRoute from "./ProtectedRoute.js";
import Landing from "./pages/landing/Landing.js";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Details from "./pages/details/details";
import AddClasses from "./pages/add-classes/AddClasses";
import Schedule from "./pages/my-schedule/Schedule.js";
import Profile from "./pages/profile/Profile";
import Mats from "./pages/add-mates/Mats.js";

function App() {
  // const { user, getUser } = useContext(UserContext);
  // const user = getUser();
  // const [user, setUser] = useState({});
  // useEffect(() => {
  // const UserData = async () => {
  //   const userInfo = await getUser();
  //   setUser(userInfo);
  // };
  // UserData();
  // }, []);
  // console.log(user);
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route
          path="/home"
          exact
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/home/addclasses" exact element={<AddClasses />} />
        <Route path="/home/schedule" exact element={<Schedule />} />
        <Route path="/home/profile" exact element={<Profile />} />
        <Route path="/home/addmates" exact element={<Mats />} />
        <Route path="/details" exact element={<Details />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
