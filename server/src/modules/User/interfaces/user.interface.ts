export interface User {
  id_user: number;
  user_uuid: string;
  user_email: string;
  user_name: string;
  user_last_name: string;
  user_second_last_name?: string | null;
  user_national_id: string;
  user_birth_date: Date;
  active: boolean;
  role_name: string;
  createdAt: Date;
  updatedAt: Date;
  //FK
  id_credential: number;
}
