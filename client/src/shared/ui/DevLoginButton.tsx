const env = import.meta.env.VITE_NODE_ENV;

export const DevLoginButton = () => {
  if (env !== "development") return null; // SI no es dev, no renderiza

  return (
    <button type="button" className="btn-warning-outline text-lg w-full">
      Dev Login
    </button>
  );
};

