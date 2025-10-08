// Obtener idioma guardado o poner español por defecto
const storedLang = localStorage.getItem("lang") as "es" | "en" | null;
export let currentLang: "es" | "en" = storedLang || "es";

// inicializar localStorage
if (!storedLang) {
  localStorage.setItem("lang", "es");
}

// Función para cambiar el idioma globalmente
export const setCurrentLang = (lang: "es" | "en") => {
  currentLang = lang;
  localStorage.setItem("lang", lang);
};
