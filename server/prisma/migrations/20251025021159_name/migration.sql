/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[game_title]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_id_user_fkey";

-- DropForeignKey
ALTER TABLE "public"."Users" DROP CONSTRAINT "Users_id_credential_fkey";

-- DropForeignKey
ALTER TABLE "public"."Users" DROP CONSTRAINT "Users_id_role_fkey";

-- DropTable
DROP TABLE "public"."Users";

-- CreateTable
CREATE TABLE "public"."User" (
    "id_user" SERIAL NOT NULL,
    "user_uuid" TEXT NOT NULL,
    "user_email" TEXT,
    "user_name" TEXT NOT NULL,
    "user_last_name" TEXT NOT NULL,
    "user_second_last_name" TEXT,
    "user_national_id" TEXT NOT NULL,
    "user_birth_date" TIMESTAMPTZ NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "id_role" INTEGER,
    "id_credential" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_uuid_key" ON "public"."User"("user_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_email_key" ON "public"."User"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_national_id_key" ON "public"."User"("user_national_id");

-- CreateIndex
CREATE INDEX "User_active_idx" ON "public"."User"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Game_game_title_key" ON "public"."Game"("game_title");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "public"."Role"("id_role") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_id_credential_fkey" FOREIGN KEY ("id_credential") REFERENCES "public"."Credential"("id_credential") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
