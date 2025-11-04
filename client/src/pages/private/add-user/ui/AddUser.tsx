import { AddUserForm } from "~/widgets";

export const AddUser = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="p-4 bg-gray-900/40 h-full w-full backdrop-blur-xl
        lg:border lg:border-fuchsia-300/10 lg:rounded-xl md:h-auto md:w-auto"
      >
        <AddUserForm />
      </div>
    </div>
  );
};
