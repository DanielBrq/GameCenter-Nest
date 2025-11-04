import React, { InputHTMLAttributes } from "react";
import { FaEye } from "react-icons/fa";

type PasswordInputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  value,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-row group">
      <input
        className="text-field border-r-0 rounded-r-none"
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
      />
      <button className="password-button">
        <FaEye className="" />
      </button>
    </div>
  );
};
