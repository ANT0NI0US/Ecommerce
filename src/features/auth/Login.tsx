import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { signInFireBase } from "@/store/service/loginService.ts";
import { AppDispatch } from "@/store/index.ts";
import { loginState } from "@/shared/types.ts";
import Button from "@/ui/Button.tsx";
import Input from "@/ui/Input.tsx";
import { EMAIL_REGEX } from "@/utils/constants.ts";
import { isOnlySpaces } from "@/utils/helpers.ts";

interface loginFormProps {
  email: string;
  password: string;
}

const initialState: loginFormProps = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useSelector((state: loginState) => state.login);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const signIn = async (data: loginFormProps) => {
    dispatch(signInFireBase(data))
      .unwrap()
      .then((response) => {
        if (response?.type === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/home");
        }
        toast.success("Successfully Logged in");
        reset();
      })
      .catch(() => {
        toast.error("Invalid email or password.");
      });
  };

  return (
    <form className="relative w-full space-y-8" onSubmit={handleSubmit(signIn)}>
      <div>
        <h1 className="text-center text-4xl font-extrabold text-white">
          Welcome To
          <span className="font-black text-primary-color"> STOREIFY</span>
        </h1>
        <h3 className="text-center text-lg font-bold text-white">Sign In</h3>
      </div>

      <Input
        placeholder="Email"
        disabled={isLoading}
        error={errors?.email?.message}
        {...register("email", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          pattern: {
            value: EMAIL_REGEX,
            message: "Enter a valid email.",
          },
        })}
      />

      <Input
        placeholder="Password"
        type="password"
        disabled={isLoading}
        error={errors?.password?.message}
        {...register("password", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          minLength: {
            value: 8,
            message: "Enter at least 8 letters",
          },
        })}
      />

      <Button loading={isLoading} ArialLabel="Login" type="submit">
        Login
      </Button>

      <p className="mx-auto text-center text-white">
        Don't have an account?
        <Link
          className="pl-1 underline transition-all hover:font-semibold"
          to="/signup"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
};

export default Login;
