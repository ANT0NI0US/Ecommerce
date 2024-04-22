import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "@/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Helmet from "@/components/UI/helmet/Helmet";
import Loader from "@/components/UI/loader/Loader";
import { collection, getDocs } from "firebase/firestore";
import { userProps } from "@/shared/types";

interface UserProp {
  accessToken?: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUserTypeAndNavigate = async (uid: string) => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const fetchedUsers = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as userProps[];
        const result = fetchedUsers.find((user) => user.id === uid);
        console.log(result);
        if (result?.type) {
          localStorage.setItem("userType", result.type);
        }
        setLoading(false);
        if (result) {
          if (result.type === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/home");
          }
        }

        setPassword("");
        setEmail("");
        toast.success("Successfully Logged in");
      } catch (error) {
        setLoading(false);
        toast.error("Something went wrong!");
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        getUserTypeAndNavigate(uid);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser as UserProp;
      if (user && user?.accessToken) {
        console.log(user);
        localStorage.setItem("token", user?.accessToken);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Invalid email or password.");
      return;
    }
  };

  if (loading) {
    return (
      <div className="m-auto w-5/6 py-[125px]">
        <Loader />
      </div>
    );
  }
  return (
    <Helmet title="Login">
      <div className="m-auto w-5/6 py-[125px] sm:w-3/4 md:w-1/2">
        <h3 className="mb-5 text-center text-[1.2rem] font-bold text-primary-color">
          Login
        </h3>
        <form
          action=""
          className="flex flex-col gap-5 rounded-md bg-primary-color p-5 sm:p-10"
          onSubmit={signIn}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input_style"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input_style"
            type="password"
            placeholder="Enter your password"
          />
          <button
            aria-label="Login"
            className="btn btn-timer mx-auto mt-5 w-fit"
            type="submit"
          >
            Login
          </button>
          <p className="mx-auto text-center">
            Don't have an account?
            <Link className="pl-1 text-white hover:underline" to="/signup">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </Helmet>
  );
};

export default Login;
