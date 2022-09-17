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
    await userCallData();
    return userSession;
  };

  const createUserSession = (email, password) => {
    return auth.createEmailSession(email, password);
  };

  // Login function
  const login = async (email, password) => {
    const session = await auth.createEmailSession(email, password);
    await userCallData();
    return session;
  };

  // Logout function
  const logout = () => {
    return auth.deleteSession("current");
  };

  const getUser = async () => {
    return auth.get();
  };

  const userCallData = async () => {
    console.log("Hello");
    const userData = await auth.get();
    console.log(userData);
    setUser(userData);
  };

  useEffect(() => {
    userCallData();
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
