import React, { useState, ReactElement } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { SlCloudUpload } from "react-icons/sl";
import Button from "./Button";
import { Label } from "./Label";
import { Error } from "./Error";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: string;
  Icon?: ReactElement;
  register?: UseFormRegisterReturn;
  fileName?: string;
  disabled?: boolean;
}

export default function Input({
  label,
  name,
  type = "text",
  error,
  Icon,
  register,
  fileName,
  disabled,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative w-full">
      <Label htmlFor={fileName || name} text={label} />

      <div
        className={`${type !== "file" ? `${error ? "border-[3px]	border-[#EE4B2B] dark:border-red-600" : "border-[1px] border-orange-color-light dark:border-orange-color"} z-10 flex w-full  items-center rounded-md  bg-light-color/60 transition-all  dark:bg-main-color/55` : ""} ${type === "password" || Icon ? "relative" : ""}`}
      >
        <input
          id={fileName || name}
          type={showPassword ? "text" : type}
          className={`input ${type === "file" && "hidden"}  ${type === "password" || Icon ? "pr-10" : ""}`}
          disabled={disabled}
          {...(register ? register : {})}
          {...rest}
        />

        {Icon && (
          <div className="flexCenter h-[44px] w-[40px] text-orange-color-light dark:text-orange-color">
            {Icon}
          </div>
        )}

        {type === "file" && (
          <Button
            ArialLabel="File Upload"
            variation="secondary"
            loading={disabled}
            onClick={() => {
              if (fileName) {
                document.getElementById(fileName)?.click();
              }
            }}
          >
            <div className="flexCenter gap-2">
              <SlCloudUpload size={25} />
              <span>{fileName}</span>
            </div>
          </Button>
        )}

        {type === "password" && (
          <button
            type="button"
            className="absolute right-[10px] top-[50%] translate-y-[-50%] text-orange-color-light dark:text-orange-color"
            onClick={toggleShowPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <FaRegEyeSlash size={25} />
            ) : (
              <MdOutlineRemoveRedEye size={25} />
            )}
          </button>
        )}
      </div>

      <Error message={error} />
    </div>
  );
}
