import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
`;

type InputFieldProps = {
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder }) => (
  <Input
    type="number"
    value={value}
    onChange={onChange}
    onKeyDown={(e) => {
      if (e.key === "e" || e.key === "E") {
        e.preventDefault(); // Impede a entrada da tecla "e"
      }
    }}
    placeholder={placeholder}
  />
);

export default InputField;