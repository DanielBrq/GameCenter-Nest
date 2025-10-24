//Lista de respuesta de errores estandarizado
export const ERROR_CODES = {
  // ==> MODULO AUTH <==

  // ==>  MODULO USUARIOS <==
  user_duplicated_email: {
    http_status_code: 409,
    err_code: 'duplicated_email',
    message: 'El email ya está registrado en el sistema.',
  },
  user_duplicated_identity: {
    http_status_code: 409,
    err_code: 'duplicated_identity',
    message: 'El número de identidad ya está registrado en el sistema.',
  },
  user_not_found: {
    http_status_code: 404,
    err_code: 'user_not_found',
    message: 'Usuario con no encontrado.',
  },
  user_already_deactivate: {
    http_status_code: 400,
    err_code: 'user_already_deactivate',
    message: 'El usuario ya está eliminado.',
  },
  // ==>  MODULO ESTACIONES <==
  station_not_found: {
    http_status_code: 404,
    err_code: 'station_not_found',
    message: 'Estación no encontrada.',
  },
  station_name_duplicated: {
    http_status_code: 409,
    err_code: 'station_name_duplicated',
    message: 'El nombre de la estación ya está registrado.',
  },
  // ==>  MODULO JUGADORES / CLIENTES <==
  player_not_found: {
    http_status_code: 404,
    err_code: 'player_not_found',
    message: 'Cliente no encontrado.',
  },
  player_national_id_duplicated: {
    http_status_code: 409,
    err_code: 'player_national_id_duplicated',
    message: 'Esta identificación ya se encuentra registrada.',
  },
  // ==>  MODULO JUEGOS <==
  game_not_found: {
    http_status_code: 404,
    err_code: 'game_not_found',
    message: 'Videojuego no encontrado.',
  },
  game_title_duplicated: {
    http_status_code: 409,
    err_code: 'game_title_duplicated',
    message: 'El título de este videojuego ya se encuentra registrado.',
  },
  game_genre_name_duplicated: {
    http_status_code: 409,
    err_code: 'game_genre_name_duplicated',
    message: 'El este género ya se encuentra registrado.',
  },
  game_console_name_duplicated: {
    http_status_code: 409,
    err_code: 'game_console_name_duplicated',
    message: 'El esta consola ya se encuentra registrada.',
  },
  // ==>  MODULO RESERVAS <==
};
