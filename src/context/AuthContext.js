import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../appwrite";

export const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Set state for user (otherwise no access to it)
  const [user, setUser] = useState({});

  // Sign up function
  const createUser = async (email, password) => {
    await auth.create("unique()", email, password);
    const userSession = await createUserSession(email, password);
    return userSession;
  };

  const createUserSession = (email, password) => {
    return auth.createEmailSession(email, password);
  };

  // Login function
  const login = (email, password) => {
    return auth.createEmailSession(email, password);
  };

  // Logout function
  const logout = () => {
    return auth.deleteSession("current");
  };

  const getUser = async () => {
    return auth.get();
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
      console.log(userData);
      setUser(userData);
    };
    return () => {
      userCallData();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, login, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
