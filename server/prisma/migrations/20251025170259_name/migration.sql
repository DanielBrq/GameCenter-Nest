/*
  Warnings:

  - Made the column `id_credential` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_id_credential_fkey";

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "id_credential" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_id_credential_fkey" FOREIGN KEY ("id_credential") REFERENCES "public"."Credential"("id_credential") ON DELETE RESTRICT ON UPDATE CASCADE;
