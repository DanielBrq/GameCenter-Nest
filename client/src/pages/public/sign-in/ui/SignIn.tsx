import React from "react";

export const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card-base card w-min-120 h-130">
        {/* IMG */}
        <div className="flex flex-row overflow-hidden">
          <img
            className="w-90 h-120 rounded-2xl object-cover"
            src="https://i0.wp.com/eltemploesports.com/wp-content/uploads/2024/02/Copia-de-_DSC5837-scaled.webp?resize=1024%2C683&ssl=1"
            alt="gamecenter"
          />
          {/* Login form */}
          <div className="flex flex-col items-center justify-center gap-12 ml-5">
            <p className="bg-linear-to-r from-blue-500 to-rose-500 bg-clip-text font-extrabold text-transparent text-5xl">
              Iniciar Sesión
            </p>
            <div className="flex flex-col gap-7">
              <div className="overflow-hidden px-5 border-lg w-100">
                <input
                  className="text-field"
                  type="text"
                  placeholder="Ingrese su correo"
                />
              </div>
              <div className="overflow-hidden px-5 border-lg w-100">
                <input
                  className="text-field"
                  type="text"
                  placeholder="Ingrese su contraseña"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button type="button" className="btn-primary w-full text-lg">
                Login
              </button>
              <a href="#" className="">
                <p className="text-indigo-400/50 hover:text-indigo-600]">
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
