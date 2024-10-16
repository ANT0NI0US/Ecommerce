import { useState, useEffect } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export default function useAuth() {
  const [currentUser, setCurrentUser] = useState<object | null>({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  });

  return currentUser;
}
