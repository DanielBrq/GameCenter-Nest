/*
  Warnings:

  - Made the column `user_email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "user_email" SET NOT NULL;
