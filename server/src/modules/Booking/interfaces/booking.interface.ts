export interface Booking {
  id_booking: number;
  booking_uuid: string;
  booking_start_time: Date;
  booking_end_time: Date;
  booking_date: Date;
  booking_status: string;
  booking_notes?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;

  //FK
  id_user: string;
  id_station: number;
}
