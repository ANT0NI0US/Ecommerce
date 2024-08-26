import React from "react";
import Select, {
  MultiValue,
  SingleValue,
  StylesConfig,
  GroupBase,
} from "react-select";

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
  zindex?: number;
  isClearable?: boolean;
  Label?: string;
  showLabel?: boolean;
  name?: string;
}

const getCustomStyles = (zindex: number): StylesConfig<Option> => ({
  control: (provided) => ({
    ...provided,
    border: "1px solid #c18500",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#c18500",
    },
    width: "100%",
    height: "100%",
    padding: "0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: "#0e1013",
    color: "#88d07a",
    outline: "none",
    maxHeight: "60px",
    overflowY: "auto",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#88d07a",
    "&:hover": {
      color: "#88d07a",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "#88d07a",
    "&:hover": {
      color: "#88d07a",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "#88d07a",
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: "#88d07a",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: zindex + 1,
    position: "absolute",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "100px",
    overflowY: "auto",
    backgroundColor: "#0e1013",
    border: "1px solid #c18500",
    padding: "0px",
  }),
  input: (provided) => ({
    ...provided,
    color: "#88d07a",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#88d07a",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "#163b48"
      : state.isFocused
        ? "#163b48"
        : undefined,
    color: state.isSelected
      ? "#daf3ff"
      : state.isFocused
        ? "#daf3ff"
        : "#daf3ff",
    "&:hover": {
      backgroundColor: "#163b48b5",
      color: "#daf3ff",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#0e1013",
    maxHeight: "100px",
    overflowY: "auto",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#88d07a",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#88d07a",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#ff0000",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#88d07a",
  }),
});

// Use Select type for ref
const Choose = React.forwardRef<
  Select<Option, boolean, GroupBase<Option>> | null,
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
      zindex = 100,
      isClearable = false,
      Label,
      name,
      showLabel = false,
    }: ChooseProps,
    ref,
  ) => {
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
      <div className="relative w-full" style={{ zIndex: zindex }}>
        <div className="relative z-10 flex items-center rounded-md transition-all">
          <Select
            styles={getCustomStyles(zindex)}
            ref={ref}
            name={name}
            className="h-full w-full"
            options={data}
            onChange={handleChange}
            isClearable={isClearable}
            isLoading={isLoading}
            placeholder={placeholder}
            isDisabled={disabled}
            defaultValue={defaultValue}
            isMulti={isMulti}
            menuPosition="absolute"
          />

          {showLabel && Label && (
            <label
              htmlFor={Label}
              className="absolute top-[11px] -translate-y-6 bg-white px-[0.5px] ltr:left-6 rtl:right-6"
            >
              {Label}
            </label>
          )}
        </div>

        {error && (
          <div className="mt-[3px] p-[2px] text-sm text-red-700">{error}</div>
        )}
      </div>
    );
  },
);

export default Choose;
