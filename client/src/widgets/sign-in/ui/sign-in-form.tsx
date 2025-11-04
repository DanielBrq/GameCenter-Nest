import { Button, DevLoginButton, PasswordInput, TextInput } from "~/shared";

export const SignInForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 lg:mx-10">
      <p className="bg-linear-to-r from-blue-500 to-rose-500 bg-clip-text font-extrabold text-transparent text-3xl md:text-5xl">
        Iniciar Sesión
      </p>

      {/* text input */}
      <div className="flex flex-col w-auto gap-6 sm:w-[360px] sm:pl-0">
        <div className="overflow-hidden border-lg">
          <TextInput placeholder="Ingrese su correo" />
        </div>
        <div className="overflow-hidden border-lg">
          <PasswordInput placeholder="Ingrese su contraseña" />
        </div>

        {/* Button */}
        <div className="flex flex-col gap-4 sm:w-[360px]">
          <Button
            label="Iniciar Sesión"
            className="btn-primary text-lg w-full"
          />

          <DevLoginButton />

          <a href="#" className="text-center">
            <p className="text-indigo-400/50 hover:text-indigo-500">
              Olvidé mi contraseña
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};
