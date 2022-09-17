import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../appwrite";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Set state for user (otherwise no access to it)
  const [user, setUser] = useState({});

  const [userId, setUserId] = useState("");

  // Sign up function
  const createUser = (email, password) => {
    return auth.create("unique()", email, password);
  };

  // Login function
  const login = (email, password) => {
    return auth.createEmailSession(email, password);
  };

  // Logout function
  const logout = () => {
    return auth.deleteSession("current");
  };

  // useEffect(() => {
  //   const unsubscribe = async () => {
  //     const userData = await auth.get();
  //     console.log(userData);
  //     setUser(userData);
  //   };

  //   return () => {
  //     unsubscribe();
  //   };
  // });

  useEffect(() => {
    const userCallData = async () => {
      console.log("Hello");
      const userData = await auth.get();
      // console.log(userData);
      setUser(userData);
      setUserId(userData.$id);
    };
    // return () => {
    userCallData();
    // };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, login, userId }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
