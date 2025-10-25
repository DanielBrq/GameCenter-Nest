export interface User {
  id_user: number;
  user_uuid: string;
  user_email?: string | null;
  user_name: string;
  user_last_name: string;
  user_second_last_name?: string | null;
  user_national_id: string;
  user_birth_date: Date;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  //FK
  id_role?: number | null;
  id_credential?: number | null;
}
