import React, { InputHTMLAttributes } from "react";

type DatePickerProps = {
  min?: string;
  max?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const DatePicker: React.FC<DatePickerProps> = ({
  id,
  value,
  min,
  max,
  ...props
}) => {
  return (
    <input
      className="text-field text-gray-400"
      type="date"
      id={id}
      value={value}
      min={min}
      max={max}
    />
  );
};
