// endpoints
export const API_BASE_URL = "https://api.miportafolio.com";
export const LOGIN_ENDPOINT = "/auth/login";

// enums
export const UserRoles = {
    Admin: "admin",
    User: "user",
    Guest: "guest",
} as const;

export type UserRoles = typeof UserRoles[keyof typeof UserRoles];
