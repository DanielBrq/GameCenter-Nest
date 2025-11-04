import { SignInForm } from "~/widgets";

export const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div
        className="p-4 bg-gray-900/40 h-full w-full flex items-center justify-center
        lg:border lg:border-fuchsia-300/10 lg:rounded-xl md:h-auto md:w-auto"
      >
        {/* IMG */}
        <div className="flex flex-row overflow-hidden">
          <img
            className="w-110 h-130 rounded-2xl object-cover hidden sm:block"
            src="https://i0.wp.com/eltemploesports.com/wp-content/uploads/2024/02/Copia-de-_DSC5837-scaled.webp?resize=1024%2C683&ssl=1"
            alt="gamecenter"
          />
          {/* Login form */}
          <SignInForm />
        </div>
      </div>
    </div>
  );
};
