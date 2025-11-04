import { DevLoginButton } from "~/shared";
export const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card-base card h-140 pr-0">
        {/* IMG */}
        <div className="flex flex-row overflow-hidden">
          <img
            className="w-110 h-130 rounded-2xl object-cover"
            src="https://i0.wp.com/eltemploesports.com/wp-content/uploads/2024/02/Copia-de-_DSC5837-scaled.webp?resize=1024%2C683&ssl=1"
            alt="gamecenter"
          />
          {/* Login form */}
          <div className="flex flex-col items-center justify-center gap-12 mx-10">
            <p className="bg-linear-to-r from-blue-500 to-rose-500 bg-clip-text font-extrabold text-transparent text-5xl">
              Iniciar Sesión
            </p>

            {/* text input */}
            <div className="flex flex-col gap-6 w-[360px] pl-0">
              <div className="overflow-hidden border-lg">
                <input
                  className="text-field"
                  type="text"
                  placeholder="Ingrese su correo"
                />
              </div>
              <div className="overflow-hidden border-lg">
                <input
                  className="text-field"
                  type="text"
                  placeholder="Ingrese su contraseña"
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col gap-4 w-[360px]">
              <button type="button" className="btn-primary text-lg w-full">
                Login
              </button>

              <DevLoginButton />

              <a href="#" className="text-center">
                <p className="text-indigo-400/50 hover:text-indigo-500">
                  Olvidé mi contraseña
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
