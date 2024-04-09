import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "@/firebase.config";
import Helmet from "@/components/UI/helmet/Helmet";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [file, setFiles] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: name,
              type: "user",
              email,
              photoURL: downloadURL,
            }).then(() => {
              setLoading(false);
              navigate("/login");
              toast.success("Account created successfully");
              setName("");
              setEmail("");
              setPassword("");
              setFiles(null);
              setLoading(false);
            });
          });
        }
      );
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  if (loading) {
    return (
      <div className="w-5/6 m-auto py-[125px]">
        <h6 className="text-center font-extrabold text-2xl">Loading ....</h6>
      </div>
    );
  }
  return (
    <Helmet title="Sign up">
      <div className="w-5/6 sm:w-3/4 md:w-1/2 m-auto py-[125px]">
        <h3 className="text-primary-color text-[1.2rem] font-bold text-center mb-5">
          Sign Up
        </h3>
        <form
          action=""
          className="flex flex-col gap-5 bg-primary-color rounded-md p-5 sm:p-10"
          onSubmit={signUp}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input_style"
            type="text"
            placeholder="Enter UserName"
          />
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
          <input
            className="text-white cursor-pointer"
            onChange={(e) =>
              setFiles(e.target.files ? e.target.files[0] : null)
            }
            type="file"
          />
          <button className="btn btn-timer w-fit mx-auto mt-5" type="submit">
            Create An Account
          </button>
          <p className="mx-auto text-center">
            Already have an account?
            <Link className="text-white hover:underline pl-1" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Helmet>
  );
};

export default SignUp;
