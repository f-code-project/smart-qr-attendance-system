CREATE TABLE `attendance_logs` (
	`id` char(36) NOT NULL,
	`event_id` char(36) NOT NULL,
	`member_id` char(36),
	`scanner_id` char(36) NOT NULL,
	`scanned_at` timestamp DEFAULT (now()),
	`status` enum('SUCCESS','DUPLICATE','WRONG_EVENT','EXPIRED','INVALID_QR') NOT NULL,
	CONSTRAINT `attendance_logs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `event_members` (
	`id` char(36) NOT NULL,
	`event_id` char(36) NOT NULL,
	`member_id` char(36) NOT NULL,
	`status` enum('NOT_YET','ATTENDED','LATE','EXCUSED') NOT NULL DEFAULT 'NOT_YET',
	`check_in_time` timestamp,
	`note` varchar(255),
	CONSTRAINT `event_members_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `events` (
	`id` char(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`location` varchar(255),
	`start_date` timestamp NOT NULL,
	`end_date` timestamp NOT NULL,
	`late_threshold` timestamp,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `members` (
	`id` char(36) NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`student_code` varchar(20) NOT NULL,
	`email` varchar(255) NOT NULL,
	`token_identify_member` varchar(255) NOT NULL,
	`note` text,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `members_id` PRIMARY KEY(`id`),
	CONSTRAINT `members_student_code_unique` UNIQUE(`student_code`),
	CONSTRAINT `members_email_unique` UNIQUE(`email`),
	CONSTRAINT `members_token_identify_member_unique` UNIQUE(`token_identify_member`)
);
--> statement-breakpoint
CREATE TABLE `refresh_tokens` (
	`id` char(36) NOT NULL,
	`user_id` char(36) NOT NULL,
	`token_hash` varchar(255) NOT NULL,
	`jti` char(36) NOT NULL,
	`created_by_ip` varchar(45),
	`user_agent` varchar(512),
	`expires_at` timestamp NOT NULL,
	`revoked_at` timestamp,
	`replace_by_token_id` char(36),
	CONSTRAINT `refresh_tokens_id` PRIMARY KEY(`id`),
	CONSTRAINT `refresh_tokens_jti_unique` UNIQUE(`jti`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` char(36) NOT NULL,
	`full_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`role` enum('ADMIN','HR') NOT NULL DEFAULT 'HR',
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `attendance_logs` ADD CONSTRAINT `attendance_logs_event_id_events_id_fk` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `attendance_logs` ADD CONSTRAINT `attendance_logs_member_id_members_id_fk` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `attendance_logs` ADD CONSTRAINT `attendance_logs_scanner_id_users_id_fk` FOREIGN KEY (`scanner_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `event_members` ADD CONSTRAINT `event_members_event_id_events_id_fk` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `event_members` ADD CONSTRAINT `event_members_member_id_members_id_fk` FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `refresh_tokens` ADD CONSTRAINT `refresh_tokens_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;