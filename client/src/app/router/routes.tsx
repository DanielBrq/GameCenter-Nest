import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

//Import Pages
import { SignIn, Playground } from "~/pages";
import { AuthGuard } from "./guards/AuthGuard";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route element={''}>
          <Route path="/" element={<SignIn />} />
          <Route path="/playground" element={<Playground />} />
        </Route>

        {/* Rutas Privadas */}
        <Route element={<AuthGuard />}></Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}
