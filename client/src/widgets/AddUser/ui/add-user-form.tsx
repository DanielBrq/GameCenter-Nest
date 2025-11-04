import {
  Button,
  DatePicker,
  PasswordInput,
  RoleSelect,
  TextInput,
} from "~/shared";

export const AddUserForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 mx-10 py-10">
      <p
        className="bg-linear-to-r from-blue-500 to-rose-500 bg-clip-text font-extrabold text-transparent 
          text-3xl sm:text-5xl lg:text-5xl"
      >
        Crear Usuario
      </p>
      {/* text input */}
      <div className="flex flex-col gap-6 w-[550px] pl-0">
        <div className="flex flex-row gap-3">
          <TextInput placeholder="Nombre" />
          <TextInput placeholder="Apellido" />
          <TextInput placeholder="Segundo apellido" />
        </div>

        <div className="flex flex-row gap-3">
          <RoleSelect />
          <DatePicker />
        </div>

        <div className="flex flex-row gap-3">
          <TextInput placeholder="Ingrese el correo" />
          <TextInput placeholder="Número de identificación" />
        </div>

        <div className="flex flex-row gap-3">
          <PasswordInput placeholder="Contraseña" />
          <PasswordInput placeholder="Confirmar contraseña" />
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-col gap-4 w-[550px]">
        <Button label="Crear Usuario" className="btn-primary text-lg w-full" />
      </div>
    </div>
  );
};
