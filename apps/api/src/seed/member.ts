import db from '../db/mysql';
import { members as membersTable } from '../db/schema'; // Import the actual table object
import members from './data/members.json';
for (const key of Object.keys(members)) {
  for (const member of members[key]) {
    await db
      .insert(membersTable)
      .values({
        id: crypto.randomUUID(),
        fullName: member.fullName,
        studentCode: member.studentCode,
        email: member.email,
        tokenIdentifyMember: `${member.studentCode}-${member.fullName}`,
      })
      .onDuplicateKeyUpdate({
        set: {
          fullName: member.fullName,
          note: member.note,
        },
      });
  }
}
