import React, { InputHTMLAttributes } from "react";

type ButtonProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export const Button: React.FC<ButtonProps> = ({
  id,
  className,
  label,
  ...props
}) => {
  return (
    <button type="button" id={id} className={className}>
      {label}
    </button>
  );
};
