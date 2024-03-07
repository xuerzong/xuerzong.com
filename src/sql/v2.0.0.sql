CREATE TABLE IF NOT EXISTS "GUESTBOOKS" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"avatar" varchar(255) NOT NULL,
	"content" varchar(255) NOT NULL,
	"created_at" timestamp NOT NULL DEFAULT now()
);