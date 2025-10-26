/*
  Warnings:

  - You are about to drop the column `id_role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[role_name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `role_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_id_role_fkey";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "id_role",
ADD COLUMN     "role_name" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Role";

-- CreateIndex
CREATE UNIQUE INDEX "User_role_name_key" ON "public"."User"("role_name");
