import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";
// import { useNavigate } from "react-router";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((result) => {
    //   console.log(result);
    //   // navigate("/");
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  const createLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  });

  const singOutUser = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        console.log("sign out");
        // navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userInfo = {
    createUser,
    createLogin,
    user,
    singOutUser,
    loading,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
