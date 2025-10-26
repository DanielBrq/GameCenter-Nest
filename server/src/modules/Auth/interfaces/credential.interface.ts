export interface Credential {
  id_credential: number;
  password_hash: string;
  provider?: string | null;
  createdAt: Date;
  updatedAt: Date;
}