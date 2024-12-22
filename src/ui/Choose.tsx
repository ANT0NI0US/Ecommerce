import React, { useEffect, useState } from "react";
import Select, {
  MultiValue,
  SingleValue,
  StylesConfig,
  GroupBase,
  SelectInstance,
} from "react-select";
import { Error } from "./Error";

interface Option {
  value: string;
  label: string;
}

interface ChooseProps {
  data: Option[];
  isLoading?: boolean;
  onChange: (
    selectedOptions:
      | MultiValue<Option>
      | readonly Option[]
      | SingleValue<Option>
      | null,
  ) => void;
  error?: string;
  disabled?: boolean;
  isMulti?: boolean;
  defaultValue?: MultiValue<Option> | SingleValue<Option> | null;
  placeholder?: string;
  isClearable?: boolean;
  Label?: string;
  showLabel?: boolean;
  name?: string;
}

const getCustomStyles = (mode: "light" | "dark"): StylesConfig<Option> => ({
  control: (provided) => ({
    ...provided,
    border: mode === "dark" ? "1px solid #c18500" : "1px solid #f39530",
    boxShadow: "none",
    "&:hover": {
      borderColor: mode === "dark" ? "#c18500" : "#f39530",
    },
    width: "100%",
    height: "100%",
    padding: "0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: mode === "dark" ? "#0e1013" : "#daf3ff",
    color: mode === "dark" ? "#88d07a" : "#253b45",
    outline: "none",
    maxHeight: "60px",
    overflowY: "auto",
    cursor: "pointer",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#88d07a" : "#253b45",
    "&:hover": {
      color: mode === "dark" ? "#88d07a" : "#253b45",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#88d07a" : "#253b45",
    "&:hover": {
      color: mode === "dark" ? "#88d07a" : "#253b45",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: mode === "dark" ? "#88d07a" : "#253b45",
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#88d07a" : "#253b45",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "100px",
    overflowY: "auto",
    backgroundColor: mode === "dark" ? "#0e1013" : "#daf3ff",
    border: mode === "dark" ? "1px solid #c18500" : "1px solid #f39530",
    padding: "0px",
  }),
  input: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#88d07a" : "#253b45",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#88d07a" : "#253b45",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? mode === "dark"
        ? "#163b48"
        : "#a3ffce"
      : state.isFocused
        ? mode === "dark"
          ? "#163b48"
          : "#a3ffce"
        : undefined,
    color: state.isSelected
      ? mode === "dark"
        ? "#daf3ff"
        : "#253b45"
      : state.isFocused
        ? mode === "dark"
          ? "#daf3ff"
          : "#253b45"
        : mode === "dark"
          ? "#daf3ff"
          : "#253b45",
    "&:hover": {
      backgroundColor: mode === "dark" ? "#163b48b5" : "#a3ffceb5",
      color: mode === "dark" ? "#daf3ff" : "#253b45",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: mode === "dark" ? "#0e1013" : "#daf3ff",
    maxHeight: "100px",
    overflowY: "auto",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#88d07a" : "#253b45",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#88d07a" : "#253b45",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ff0000",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#88d07a" : "#253b45",
  }),
});

// Use Select type for ref
const Choose = React.forwardRef<
  SelectInstance<Option, boolean, GroupBase<Option>> | null,
  ChooseProps
>(
  (
    {
      data,
      isLoading = false,
      onChange,
      error,
      disabled = false,
      isMulti = false,
      defaultValue,
      placeholder = "",
      isClearable = false,
      Label,
      name,
      showLabel = false,
    }: ChooseProps,
    ref,
  ) => {
    const [mode, setMode] = useState<"light" | "dark">("light");

    // Effect to get the mode from body class
    useEffect(() => {
      const bodyClassList = document.body.classList;
      const currentMode = bodyClassList.contains("dark") ? "dark" : "light";
      setMode(currentMode);

      // Optional: listen for class changes on the body
      const observer = new MutationObserver(() => {
        const updatedMode = bodyClassList.contains("dark") ? "dark" : "light";
        setMode(updatedMode);
      });

      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => {
        observer.disconnect();
      };
    }, []);
    const handleChange = (
      selectedOptions:
        | MultiValue<Option>
        | readonly Option[]
        | SingleValue<Option>
        | null,
    ) => {
      onChange(selectedOptions);
    };

    return (
      <div className="w-full">
        {showLabel && (
          <label
            htmlFor={placeholder}
            className="block p-[3px] text-sm font-extrabold uppercase tracking-wider text-main-color dark:text-light-color"
          >
            {Label}
          </label>
        )}
        <Select
          styles={getCustomStyles(mode)}
          ref={ref}
          name={name}
          className="w-full"
          options={data}
          onChange={handleChange}
          isClearable={isClearable}
          isLoading={isLoading}
          placeholder={placeholder}
          isDisabled={disabled}
          defaultValue={defaultValue}
          isMulti={isMulti}
        />

        <Error message={error} />
      </div>
    );
  },
);

export default Choose;
