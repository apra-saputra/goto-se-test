import React from "react";
import { inputStyles } from "./Input.style";

type InputCustomProps = {
  type: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const InputCustom = ({
  type,
  value,
  onChange,
  placeholder,
}: InputCustomProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      css={inputStyles.input}
      placeholder={placeholder}
    />
  );
};

export default InputCustom;
