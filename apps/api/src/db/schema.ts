import { sql } from 'drizzle-orm';
import { char, mysqlEnum, mysqlTable, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: char('id', { length: 36 }).primaryKey(),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: mysqlEnum('role', ['ADMIN', 'HR']).notNull().default('HR'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const members = mysqlTable('members', {
  id: char('id', { length: 36 }).primaryKey(),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  studentCode: varchar('student_code', { length: 20 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  tokenIdentifyMember: varchar('token_identify_member', { length: 255 }).notNull().unique(),
  note: text('note'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});

export const events = mysqlTable('events', {
  id: char('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  location: varchar('location', { length: 255 }),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  lateThreshold: timestamp('late_threshold'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});

export const eventMembers = mysqlTable(
  'event_members',
  {
    id: char('id', { length: 36 }).primaryKey(),
    eventId: char('event_id', { length: 36 })
      .notNull()
      .references(() => events.id),
    memberId: char('member_id', { length: 36 })
      .notNull()
      .references(() => members.id),
    status: mysqlEnum('status', ['NOT_YET', 'ATTENDED', 'LATE', 'EXCUSED']).notNull().default('NOT_YET'),
    checkInTime: timestamp('check_in_time'),
    note: varchar('note', { length: 255 }),
  },
  (table) => ({
    unq: sql`UNIQUE (${table.eventId}, ${table.memberId})`,
  }),
);

export const attendanceLogs = mysqlTable('attendance_logs', {
  id: char('id', { length: 36 }).primaryKey(),
  eventId: char('event_id', { length: 36 })
    .notNull()
    .references(() => events.id),
  memberId: char('member_id', { length: 36 }).references(() => members.id),
  scannerId: char('scanner_id', { length: 36 })
    .notNull()
    .references(() => users.id),
  scannedAt: timestamp('scanned_at').defaultNow(),
  status: mysqlEnum('status', ['SUCCESS', 'DUPLICATE', 'WRONG_EVENT', 'EXPIRED', 'INVALID_QR']).notNull(),
});

export const refreshTokens = mysqlTable('refresh_tokens', {
  id: char('id', { length: 36 }).primaryKey(),
  userId: char('user_id', { length: 36 })
    .notNull()
    .references(() => users.id),
  tokenHash: varchar('token_hash', { length: 255 }).notNull(),
  jti: char('jti', { length: 36 }).notNull().unique(),
  createdByIp: varchar('created_by_ip', { length: 45 }),
  userAgent: varchar('user_agent', { length: 512 }),
  expiresAt: timestamp('expires_at').notNull(),
  revokedAt: timestamp('revoked_at'),
  replacedByTokenId: char('replace_by_token_id', { length: 36 }),
});
