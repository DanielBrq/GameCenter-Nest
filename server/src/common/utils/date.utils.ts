import { format, formatDistanceToNowStrict } from 'date-fns';
import { es } from 'date-fns/locale';

const isValidDate = (date: unknown): date is Date => {
  return date instanceof Date && !isNaN(date.getTime());
};

//Formato simple: "03/11/2025"
export const formatDateSimple = (date: Date): string => {
  if (!isValidDate(date)) {
    throw new Error('Invalid Date provided to formatDateSimple');
  }
  return format(date, 'dd/MM/yyyy');
};

//Formato descriptivo: "lunes 03 de noviembre del 2025"
export const formatDateDescriptive = (date: Date): string => {
  if (!isValidDate(date)) {
    throw new Error('Invalid Date provided to formatDateDescriptive');
  }
  return format(date, "EEEE dd 'de' MMMM 'del' yyyy", { locale: es });
};

//Fecha y hora exacta (sin segundos): "03/11/2025 15:30"
export const formatDateWithTime = (date: Date): string => {
  if (!isValidDate(date)) {
    throw new Error('Invalid Date provided to formatDateWithTime');
  }
  return format(date, 'dd/MM/yyyy HH:mm');
};

//Fecha completa con segundos (para countdown): "2025-11-03T15:30:45Z"
export const formatDateFullISO = (date: Date): string => {
  if (!isValidDate(date)) {
    throw new Error('Invalid Date provided to formatDateFullISO');
  }
  return date.toISOString();
};

//Tiempo restante en formato legible: "2 horas, 15 minutos"
export const formatTimeRemaining = (futureDate: Date): string => {
  if (!isValidDate(futureDate)) {
    throw new Error('Invalid Date provided to formatTimeRemaining');
  }
  return formatDistanceToNowStrict(futureDate, {
    locale: es,
    addSuffix: false,
  });
};
