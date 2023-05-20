-- CreateTable
CREATE TABLE `Guestbook` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(64) NOT NULL,
    `name` VARCHAR(64) NOT NULL,
    `image` VARCHAR(256) NOT NULL,
    `content` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
