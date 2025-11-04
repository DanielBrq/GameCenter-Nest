import React, { InputHTMLAttributes } from "react";

type RoleSelectProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const RoleSelect: React.FC<RoleSelectProps> = ({
  id,
  value,
  ...props
}) => {
  return (
    <select className="select text-gray-400" value={value} id={id}>
      <option value="" className="option" selected>
        Seleccionar Rol
      </option>
      <option value="admin" className="option">
        Administrador
      </option>
      <option value="user" className="option">
        Empleado
      </option>
    </select>
  );
};
