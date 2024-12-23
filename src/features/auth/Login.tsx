import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Button from "@/ui/Button.tsx";
import Input from "@/ui/Input.tsx";
import { loginState } from "@/utils/types";
import { EMAIL_REGEX } from "@/utils/constants.ts";
import { isOnlySpaces } from "@/utils/helpers.ts";
import { signInFireBase } from "@/store/service/loginService.ts";
import { AppDispatch } from "@/store/index.ts";
import useHelmet from "@/hooks/useHelmet";

interface loginFormProps {
  email: string;
  password: string;
}

const initialState: loginFormProps = {
  email: "",
  password: "",
};

export default function Login() {
  useHelmet("login");
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
      .then(() => {
        navigate("/home");
        toast.success("Successfully Logged in");
        reset();
      })
      .catch(() => {
        toast.error("Invalid email or password.");
      });
  };

  return (
    <form
      className="relative w-full space-y-8 text-main-color dark:text-light-color"
      onSubmit={handleSubmit(signIn)}
    >
      <div>
        <h1 className="text-center text-lg font-extrabold xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Welcome To
          <span className="font-black text-primary-color-light dark:text-primary-color">
            STOREIFY
          </span>
        </h1>
        <h2 className="mt-3 text-center text-lg font-bold uppercase">Login</h2>
      </div>

      <Input
        label="Email"
        placeholder="Email"
        disabled={isLoading}
        register={register("email", {
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
        error={errors?.email?.message}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Password"
        disabled={isLoading}
        register={register("password", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
        })}
        error={errors?.password?.message}
      />

      <Button
        loading={isLoading}
        ArialLabel="Login"
        type="submit"
        variation="secondary"
      >
        Login
      </Button>

      <p className="mx-auto text-center text-sm sm:text-base">
        Don't have an account?
        <Link
          className="pl-1 underline transition-all hover:font-semibold"
          to="/signUp"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
}
