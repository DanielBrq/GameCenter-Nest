/*
  Warnings:

  - You are about to drop the column `role_permissions` on the `Role` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Role" DROP COLUMN "role_permissions";
