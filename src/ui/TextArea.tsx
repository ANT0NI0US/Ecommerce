import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "./Label";
import { Error } from "./Error";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  Rows?: number;
  register?: UseFormRegisterReturn;
}

export default function TextArea({
  name,
  label,
  error,
  Rows = 4,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div className="w-full">
      <Label htmlFor={name} text={label} />

      <textarea
        id={name}
        rows={Rows}
        className={`input resize-none rounded-md bg-light-color/60 transition-all  dark:bg-main-color/55 ${
          error
            ? "border-[3px] border-red-600"
            : "border-[1px] border-orange-color-light dark:border-orange-color"
        }`}
        {...(register ? register : {})}
        {...rest}
      />

      <Error message={error} />
    </div>
  );
}
