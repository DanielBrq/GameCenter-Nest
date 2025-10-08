-- CreateTable
CREATE TABLE "public"."Users" (
    "id_user" SERIAL NOT NULL,
    "user_uuid" TEXT NOT NULL,
    "user_email" TEXT,
    "user_name" TEXT NOT NULL,
    "user_last_name" TEXT NOT NULL,
    "user_second_last_name" TEXT,
    "user_national_id" TEXT NOT NULL,
    "user_birth_date" TIMESTAMPTZ NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "id_role" INTEGER,
    "id_credential" INTEGER,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id_role" SERIAL NOT NULL,
    "role_name" TEXT NOT NULL,
    "role_permissions" TEXT,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "public"."Credential" (
    "id_credential" SERIAL NOT NULL,
    "password_hash" TEXT NOT NULL,
    "provider" TEXT DEFAULT 'local',
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("id_credential")
);

-- CreateTable
CREATE TABLE "public"."Game_genre" (
    "id_game_genre" SERIAL NOT NULL,
    "genre_name" TEXT NOT NULL,

    CONSTRAINT "Game_genre_pkey" PRIMARY KEY ("id_game_genre")
);

-- CreateTable
CREATE TABLE "public"."Game" (
    "id_game" SERIAL NOT NULL,
    "game_uuid" TEXT NOT NULL,
    "game_title" TEXT NOT NULL,
    "game_description" TEXT,
    "game_release_date" TIMESTAMPTZ NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "id_game_genre" INTEGER,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id_game")
);

-- CreateTable
CREATE TABLE "public"."Game_console" (
    "id_game_console" SERIAL NOT NULL,
    "game_console_uuid" TEXT NOT NULL,
    "game_console_name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Game_console_pkey" PRIMARY KEY ("id_game_console")
);

-- CreateTable
CREATE TABLE "public"."Game_x_console" (
    "id" SERIAL NOT NULL,
    "id_game_console" INTEGER,
    "id_game" INTEGER,

    CONSTRAINT "Game_x_console_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Station" (
    "id_station" SERIAL NOT NULL,
    "station_uuid" TEXT NOT NULL,
    "station_name" TEXT NOT NULL,
    "station_status" TEXT NOT NULL DEFAULT 'available',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "id_game_console" INTEGER,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id_station")
);

-- CreateTable
CREATE TABLE "public"."Player" (
    "id_player" SERIAL NOT NULL,
    "player_uuid" TEXT NOT NULL,
    "player_name" TEXT NOT NULL,
    "player_last_name" TEXT NOT NULL,
    "player_second_last_name" TEXT,
    "player_birth_date" TIMESTAMPTZ NOT NULL,
    "player_national_id" TEXT,
    "player_last_visit" TIMESTAMPTZ,
    "player_black_list" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id_player")
);

-- CreateTable
CREATE TABLE "public"."Booking" (
    "id_booking" SERIAL NOT NULL,
    "booking_uuid" TEXT NOT NULL,
    "booking_start_time" TIMESTAMPTZ,
    "booking_end_time" TIMESTAMPTZ,
    "booking_date" TIMESTAMPTZ,
    "booking_status" TEXT NOT NULL DEFAULT 'pending',
    "booking_notes" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "user_uuid" TEXT,
    "player_uuid" TEXT,
    "id_game_console" INTEGER,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id_booking")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_uuid_key" ON "public"."Users"("user_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_email_key" ON "public"."Users"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_user_national_id_key" ON "public"."Users"("user_national_id");

-- CreateIndex
CREATE INDEX "Users_active_idx" ON "public"."Users"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_name_key" ON "public"."Role"("role_name");

-- CreateIndex
CREATE UNIQUE INDEX "Game_genre_genre_name_key" ON "public"."Game_genre"("genre_name");

-- CreateIndex
CREATE UNIQUE INDEX "Game_game_uuid_key" ON "public"."Game"("game_uuid");

-- CreateIndex
CREATE INDEX "Game_active_idx" ON "public"."Game"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Game_console_game_console_uuid_key" ON "public"."Game_console"("game_console_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Game_console_game_console_name_key" ON "public"."Game_console"("game_console_name");

-- CreateIndex
CREATE INDEX "Game_console_active_idx" ON "public"."Game_console"("active");

-- CreateIndex
CREATE INDEX "Game_x_console_id_game_idx" ON "public"."Game_x_console"("id_game");

-- CreateIndex
CREATE INDEX "Game_x_console_id_game_console_idx" ON "public"."Game_x_console"("id_game_console");

-- CreateIndex
CREATE UNIQUE INDEX "Station_station_uuid_key" ON "public"."Station"("station_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Station_station_name_key" ON "public"."Station"("station_name");

-- CreateIndex
CREATE INDEX "Station_active_idx" ON "public"."Station"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Player_player_uuid_key" ON "public"."Player"("player_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Player_player_national_id_key" ON "public"."Player"("player_national_id");

-- CreateIndex
CREATE INDEX "Player_active_idx" ON "public"."Player"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_booking_uuid_key" ON "public"."Booking"("booking_uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_booking_status_key" ON "public"."Booking"("booking_status");

-- CreateIndex
CREATE INDEX "Booking_active_idx" ON "public"."Booking"("active");

-- AddForeignKey
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "public"."Role"("id_role") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_id_credential_fkey" FOREIGN KEY ("id_credential") REFERENCES "public"."Credential"("id_credential") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Game" ADD CONSTRAINT "Game_id_game_genre_fkey" FOREIGN KEY ("id_game_genre") REFERENCES "public"."Game_genre"("id_game_genre") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Game_x_console" ADD CONSTRAINT "Game_x_console_id_game_console_fkey" FOREIGN KEY ("id_game_console") REFERENCES "public"."Game_console"("id_game_console") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Game_x_console" ADD CONSTRAINT "Game_x_console_id_game_fkey" FOREIGN KEY ("id_game") REFERENCES "public"."Game"("id_game") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Station" ADD CONSTRAINT "Station_id_game_console_fkey" FOREIGN KEY ("id_game_console") REFERENCES "public"."Game_console"("id_game_console") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "public"."Users"("user_uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_player_uuid_fkey" FOREIGN KEY ("player_uuid") REFERENCES "public"."Player"("player_uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_id_game_console_fkey" FOREIGN KEY ("id_game_console") REFERENCES "public"."Game_console"("id_game_console") ON DELETE SET NULL ON UPDATE CASCADE;
