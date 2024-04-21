import { useState, useEffect } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const [currentUser, setCurrectUser] = useState<object| null>({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrectUser(user);
      } else {
        setCurrectUser(null);
      }
    });
  });

  return currentUser;
};

export default useAuth;
