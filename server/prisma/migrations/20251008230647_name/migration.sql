/*
  Warnings:

  - You are about to drop the column `id_game_console` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `player_uuid` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `user_uuid` on the `Booking` table. All the data in the column will be lost.
  - Made the column `booking_start_time` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `booking_end_time` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `booking_date` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_id_game_console_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_player_uuid_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_user_uuid_fkey";

-- DropIndex
DROP INDEX "public"."Booking_booking_status_key";

-- AlterTable
ALTER TABLE "public"."Booking" DROP COLUMN "id_game_console",
DROP COLUMN "player_uuid",
DROP COLUMN "user_uuid",
ADD COLUMN     "id_station" INTEGER,
ADD COLUMN     "id_user" INTEGER,
ALTER COLUMN "booking_start_time" SET NOT NULL,
ALTER COLUMN "booking_end_time" SET NOT NULL,
ALTER COLUMN "booking_date" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."Player_x_booking" (
    "id_player_x_booking" SERIAL NOT NULL,
    "id_player" INTEGER,
    "id_booking" INTEGER,

    CONSTRAINT "Player_x_booking_pkey" PRIMARY KEY ("id_player_x_booking")
);

-- AddForeignKey
ALTER TABLE "public"."Player_x_booking" ADD CONSTRAINT "Player_x_booking_id_player_fkey" FOREIGN KEY ("id_player") REFERENCES "public"."Player"("id_player") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Player_x_booking" ADD CONSTRAINT "Player_x_booking_id_booking_fkey" FOREIGN KEY ("id_booking") REFERENCES "public"."Booking"("id_booking") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."Users"("id_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_id_station_fkey" FOREIGN KEY ("id_station") REFERENCES "public"."Station"("id_station") ON DELETE SET NULL ON UPDATE CASCADE;
