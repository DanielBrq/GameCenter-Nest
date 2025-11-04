import React, { InputHTMLAttributes } from "react";

type TextInputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput: React.FC<TextInputProps> = ({
  id,
  value,
  placeholder,
  ...props
}) => {
  return (
    <input
      className="text-field"
      type="text"
      id={id}
      value={value}
      placeholder={placeholder}
    />
  );
};
