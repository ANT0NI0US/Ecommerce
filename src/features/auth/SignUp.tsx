import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { loginState } from "@/utils/types";
import { isOnlySpaces, isPasswordValid } from "@/utils/helpers";
import {
  EMAIL_REGEX,
  MAX_INPUT_LENGTH,
  MIN_INPUT_LENGTH,
} from "@/utils/constants";
import { signUpFirebase } from "@/store/service/loginService.ts";
import { AppDispatch } from "@/store";
import useHelmet from "@/hooks/useHelmet";

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

interface signUpFormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  file: File | null;
}

const initialState: signUpFormProps = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  file: null,
};

export default function SignUp() {
  useHelmet("SignUp");

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useSelector((state: loginState) => state.login);

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    setValue,
    formState: { errors, touchedFields },
    watch,
  } = useForm({
    defaultValues: initialState,
    mode: "onChange",
  });

  const imgUrl = watch("file");

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

    if (!allowedTypes.includes(value.type)) {
      return "Only image extensions are allowed to be uploaded.";
    }
    return true;
  };

  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setValue("password", e.target.value);
    trigger("password");
    if (touchedFields.confirmPassword) {
      trigger("confirmPassword");
    }
  }

  const signUp = async (data: signUpFormProps) => {
    const finalData = {
      name: data.name,
      email: data.email,
      password: data.password,
      file: data.file,
    };
    dispatch(signUpFirebase(finalData))
      .unwrap()
      .then(() => {
        toast.success("Account created successfully");
        navigate("/login");
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(signUp)}
      className="relative w-full space-y-8 text-main-color dark:text-light-color"
    >
      <h1 className="text-center text-lg font-bold uppercase">Sign Up</h1>
      <Input
        label="User Name"
        placeholder="User Name"
        disabled={isLoading}
        register={register("name", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
          },
          minLength: {
            value: MIN_INPUT_LENGTH,
            message: "Must be at least 3 characters long",
          },
          maxLength: {
            value: MAX_INPUT_LENGTH,
            message: "Must be at most 50 characters long",
          },
        })}
        error={errors?.name?.message}
      />

      <Input
        fileName="Upload Photo"
        disabled={isLoading}
        type="file"
        register={register("file", {
          validate: { validateFile },
        })}
        accept="image/jpeg, image/png, image/gif ,image/jpg , image/bmp , image/tiff , image/ico , image/avif , image/apng , image/svg"
        onChange={handleImageChange}
        error={errors?.file?.message}
      />
      {imgUrl && (
        <img
          src={URL.createObjectURL(imgUrl)}
          alt="SelectedImage"
          className="mx-auto mt-[10px] max-h-[200px]"
        />
      )}

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
        placeholder="Password"
        type="password"
        disabled={isLoading}
        register={register("password", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
            passwordRequirements: (value) =>
              isPasswordValid(value) ||
              "Password must contain characters, special cases, numbers, and an uppercase letter",
          },
          minLength: {
            value: 8,
            message: "Enter at least 8 letters",
          },
        })}
        onChange={handleChangePassword}
        error={errors?.password?.message}
      />

      <Input
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
        disabled={isLoading}
        register={register("confirmPassword", {
          required: "This Field is required",
          validate: {
            noOnlySpaces: (value) =>
              !isOnlySpaces(value) || "It Mustn't contains only spaces",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          },
        })}
        error={errors?.confirmPassword?.message}
      />

      <Button
        loading={isLoading}
        ArialLabel="New Account"
        type="submit"
        variation="secondary"
      >
        Create An Account
      </Button>
      <p className="mx-auto text-center text-sm sm:text-base">
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
