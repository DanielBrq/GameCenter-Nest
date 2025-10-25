import { Exclude, Expose } from 'class-transformer';

export class ResponseUserDto {
  @Exclude()
  id_user: number;

  @Expose()
  user_uuid: string;

  @Expose()
  user_email: string;

  @Expose()
  user_name: string;

  @Expose()
  user_last_name: string;

  @Expose()
  user_second_last_name: string;

  @Expose()
  user_national_id: string;

  @Expose()
  user_birth_date: string;

  @Expose()
  id_role: number;

  @Exclude()
  active: boolean;

  @Expose()
  role: {
    role_name: string;
    role_permissions: any;
  };

  @Exclude()
  id_credential: number;
}
