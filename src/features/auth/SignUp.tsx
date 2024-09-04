import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "@/firebase.config";
import { toast } from "react-toastify";
import Button from "@/ui/Button";
import { useForm } from "react-hook-form";
import Input from "@/ui/Input";

interface signUpFormProps {
  name: string;
  email: string;
  password: string;
  file: File | null;
}

const initialState: signUpFormProps = {
  name: "",
  email: "",
  password: "",
  file: null,
};

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files && files[0]) {
      setValue(name as keyof signUpFormProps, files[0]);
      await trigger(name as keyof signUpFormProps);
    }
  };

  const validateFile = (value: File | null): string | boolean => {
    if (!value) {
      return "This Field is required";
    }
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/tiff",
      "image/ico",
      "image/avif",
      "image/apng",
      "image/svg",
    ];
    if (!allowedTypes.includes(value.type)) {
      setImgUrl("");
      return "Only image extensions are allowed to be uploaded.";
    }
    setImgUrl(URL.createObjectURL(value));
    return true;
  };

  const signUp = async (data: signUpFormProps) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + data.name}`);

      const uploadTask = uploadBytesResumable(storageRef, data.file!);
      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: data.name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: data.name,
              type: "user",
              email: data.email,
              photoURL: downloadURL,
            }).then(() => {
              setLoading(false);
              toast.success("Account created successfully");
              navigate("/login");
              reset();
              setLoading(false);
            });
          });
        },
      );
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(signUp)}
      className="relative w-full space-y-8 text-main-color dark:text-light-color"
    >
      <h3 className="text-center text-lg font-bold">Sign Up</h3>
      <Input
        placeholder="User Name"
        disabled={loading}
        error={errors?.name?.message}
        {...register("name", {
          required: "This Field is required",
        })}
      />
      <Input
        placeholder="Upload Photo"
        disabled={loading}
        type="file"
        showLabel={false}
        error={errors?.file?.message}
        {...register("file", {
          validate: { validateFile },
        })}
        accept="image/jpeg, image/png, image/gif ,image/jpg , image/bmp , image/tiff , image/ico , image/avif , image/apng , image/svg"
        onChange={handleImageChange}
      />
      {imgUrl && (
        <img
          src={imgUrl}
          alt="SelectedImage"
          className="mt-[10px] max-h-[200px]"
        />
      )}
      <Input
        placeholder="Email"
        disabled={loading}
        error={errors?.email?.message}
        {...register("email", {
          required: "This Field is required",
        })}
      />
      <Input
        placeholder="Password"
        type="password"
        disabled={loading}
        error={errors?.password?.message}
        {...register("password", {
          required: "This Field is required",
        })}
      />
      <Button loading={loading} ArialLabel="New Account" type="submit">
        Create An Account
      </Button>
      <p className="mx-auto text-center">
        Already have an account?
        <Link
          className="pl-1 underline transition-all hover:font-semibold"
          to="/login"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
