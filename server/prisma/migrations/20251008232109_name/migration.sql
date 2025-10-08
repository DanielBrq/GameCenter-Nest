/*
  Warnings:

  - Made the column `id_station` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_user` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_game_console` on table `Game_x_console` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_game` on table `Game_x_console` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_player` on table `Player_x_booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_booking` on table `Player_x_booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_game_console` on table `Station` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_id_station_fkey";

-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_id_user_fkey";

-- DropForeignKey
ALTER TABLE "public"."Game_x_console" DROP CONSTRAINT "Game_x_console_id_game_console_fkey";

-- DropForeignKey
ALTER TABLE "public"."Game_x_console" DROP CONSTRAINT "Game_x_console_id_game_fkey";

-- DropForeignKey
ALTER TABLE "public"."Player_x_booking" DROP CONSTRAINT "Player_x_booking_id_booking_fkey";

-- DropForeignKey
ALTER TABLE "public"."Player_x_booking" DROP CONSTRAINT "Player_x_booking_id_player_fkey";

-- DropForeignKey
ALTER TABLE "public"."Station" DROP CONSTRAINT "Station_id_game_console_fkey";

-- AlterTable
ALTER TABLE "public"."Booking" ALTER COLUMN "id_station" SET NOT NULL,
ALTER COLUMN "id_user" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Game_x_console" ALTER COLUMN "id_game_console" SET NOT NULL,
ALTER COLUMN "id_game" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Player_x_booking" ALTER COLUMN "id_player" SET NOT NULL,
ALTER COLUMN "id_booking" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."Station" ALTER COLUMN "id_game_console" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Game_x_console" ADD CONSTRAINT "Game_x_console_id_game_console_fkey" FOREIGN KEY ("id_game_console") REFERENCES "public"."Game_console"("id_game_console") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Game_x_console" ADD CONSTRAINT "Game_x_console_id_game_fkey" FOREIGN KEY ("id_game") REFERENCES "public"."Game"("id_game") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Station" ADD CONSTRAINT "Station_id_game_console_fkey" FOREIGN KEY ("id_game_console") REFERENCES "public"."Game_console"("id_game_console") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Player_x_booking" ADD CONSTRAINT "Player_x_booking_id_player_fkey" FOREIGN KEY ("id_player") REFERENCES "public"."Player"("id_player") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Player_x_booking" ADD CONSTRAINT "Player_x_booking_id_booking_fkey" FOREIGN KEY ("id_booking") REFERENCES "public"."Booking"("id_booking") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."Users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_id_station_fkey" FOREIGN KEY ("id_station") REFERENCES "public"."Station"("id_station") ON DELETE RESTRICT ON UPDATE CASCADE;
