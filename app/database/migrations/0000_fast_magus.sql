CREATE TABLE `chats` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text(512) NOT NULL,
	`content` text,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
