import React, { useState, ChangeEvent, ReactElement } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import Button from "./Button";
import { SlCloudUpload } from "react-icons/sl";

interface InputProps {
  type?: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  showLabel?: boolean;
  accept?: string;
  Icon?: ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      name,
      value,
      onChange,
      error,
      disabled,
      showLabel = true,
      accept,
      Icon,
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    return (
      <div className="relative h-full w-full">
        {showLabel && (
          <label
            htmlFor={placeholder}
            className="block p-[3px] text-sm text-light-color"
          >
            {placeholder}
          </label>
        )}

        <div
          className={`${type !== "file" ? "z-10 flex h-full w-full items-center rounded-md border-[1px] border-orange-color bg-main-color/55 transition-all " : ""}`}
        >
          <input
            disabled={disabled}
            ref={ref}
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            className={`input  ${type === "file" && "hidden"}`}
            id={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            accept={accept}
          />

          {Icon && (
            <div className="flexCenter h-[44px] w-[40px] text-orange-color">
              {Icon}
            </div>
          )}

          {type === "file" && (
            <div className="mt-[53px]">
              <Button
                disabled={disabled}
                ArialLabel="File Upload"
                variation="secondary"
                onClick={() => document.getElementById(placeholder)?.click()}
              >
                <div className="flexCenter gap-2">
                  <SlCloudUpload size={25} />
                  <span>{placeholder}</span>
                </div>
              </Button>
            </div>
          )}

          {type === "password" && (
            <button
              type="button"
              className="flexCenter pr-[10px] text-orange-color"
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

        {error && (
          <div className="mt-[3px] pl-[5px] text-sm text-red-300">{error}</div>
        )}
      </div>
    );
  },
);

export default Input;
