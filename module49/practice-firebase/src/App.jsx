import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import "./App.css";
import { auth } from "./firebase/firebase.init";
import { useState } from "react";

function App() {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const handleGoogleSignin = () => {
    console.log("Google Sign In");

    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
        setUser(null);
      })
      .catch(() => {
        console.log("error");
      });
  };

  return (
    <>
      <h1>Login Page</h1>

      {!user ? (
        <button onClick={handleGoogleSignin}>Sign In With Google</button>
      ) : (
        <button onClick={handleSignOut}>Sing Out</button>
      )}
      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
}

export default App;
