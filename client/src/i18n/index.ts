import { messages as enMessages } from '../i18n/en';
import { messages as esMessages } from '../i18n/es';

export const LANGUAGES = {
  en: enMessages,
  es: esMessages,
};

export type LanguageCode = keyof typeof LANGUAGES;

// función de ayuda para obtener mensajes por idioma
export function getMessages(lang: LanguageCode = 'es') {
  return LANGUAGES[lang];
}

// Ejemplo
// const messages = getMessages('LANG'); //LANG sería variable global
// console.log(messages.errors.required); // "This field is required"