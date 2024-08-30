import React, { ForwardedRef } from "react";

interface TextAreaProps {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
  disabled?: boolean;
  showLabel?: boolean;
  Rows?: number;
  defaultValue?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      placeholder,
      name,
      value,
      onChange,
      error,
      disabled,
      showLabel = true,
      Rows = 4,
      defaultValue,
    },
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <div className="h-full w-full">
        {showLabel && (
          <label
            htmlFor={placeholder}
            className="block p-[3px] text-sm text-light-color"
          >
            {placeholder}
          </label>
        )}

        <textarea
          defaultValue={defaultValue}
          ref={ref}
          id={placeholder}
          rows={Rows}
          className={`input h-full w-full resize-none rounded-md border-[1px] border-orange-color bg-main-color/55 transition-all`}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
        />

        {error && (
          <div className="mt-[3px] pl-[5px] text-sm text-red-300">{error}</div>
        )}
      </div>
    );
  },
);

export default TextArea;
