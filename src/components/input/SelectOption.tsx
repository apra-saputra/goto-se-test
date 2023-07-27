import React from "react";
import { inputStyles } from "./Input.style";

type SelectOptionProps = {
  name: string;
  data: { value: string; name: string }[];
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectOption = ({ name, data, value, onChange }: SelectOptionProps) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      css={inputStyles.input}
    >
        <option value="" disabled>Pilih Ururtkan</option>
      {data.map((elemnt, index) => (
        <option key={index} value={elemnt.value}>
          {elemnt.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
