import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "@/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Helmet from "@/components/UI/helmet/Helmet";
import Loader from "@/components/UI/loader/Loader";
import { collection, getDocs } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        getUserTypeAndNavigate(uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoading(false);
      toast.error("Invalid email or password.");
      return;
    }
  };

  const getUserTypeAndNavigate = async (uid: string) => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fetchedUsers = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const result = fetchedUsers.find((user) => user.id === uid);
      setLoading(false);
      if (result && result.type === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
      toast.success("Successfully Logged in");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };

  if (loading) {
    return (
      <div className="w-5/6 m-auto py-[125px]">
        <Loader />
      </div>
    );
  }
  return (
    <Helmet title="Login">
      <div className="w-5/6 sm:w-3/4 md:w-1/2 m-auto py-[125px]">
        <h3 className="text-primary-color text-[1.2rem] font-bold text-center mb-5">
          Login
        </h3>
        <form
          action=""
          className="flex flex-col gap-5 bg-primary-color rounded-md p-5 sm:p-10"
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
          <button className="btn btn-timer w-fit mx-auto mt-5" type="submit">
            Login
          </button>
          <p className="mx-auto text-center">
            Don't have an account?
            <Link className="text-white hover:underline pl-1" to="/signup">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </Helmet>
  );
};

export default Login;
