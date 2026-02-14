import userRepository from '../modules/user/user.repository';
import members from './data/members.json';
for (const key of Object.keys(members)) {
  for (const member of members[key]) {
    await userRepository.createUser({
      ...member,
      tokenIdentifyMember: `${member.studentCode}-${member.email}`,
    } as any);
  }
}
