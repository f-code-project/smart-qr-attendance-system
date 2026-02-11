import type { RoleType } from '../@types/user.type';

class Helper {
  static belowAverage = (min: number = 0, max: number = 0) => {
    if (max === 0) return false;
    return min / max < 0.5;
  };

  static hasRole = (roles: RoleType[] | string, role: RoleType) => {
    if (typeof roles === 'string') {
      return roles === role;
    }
    return roles?.includes(role);
  };
  static getRoleName = (role: RoleType) => {
    switch (role) {
      case 'CANDIDATE':
        return 'Thí sinh';
      case 'MENTOR':
        return 'Mentor';
      case 'JUDGE':
        return 'Giám khảo';
      case 'HOST':
        return 'Host';
      case 'ADMIN':
        return 'Admin';
      default:
        return role;
    }
  };

  static getStatusC3ClassName = (status: string) => {
    switch (status) {
      case 'FAILED':
        return 'bg-red-50 opacity-70';
      // case "PASSED":
      // return "bg-green-100/70";
      case 'REDO':
        return 'opacity-50 bg-yellow-50';
      default:
        return 'transition-colors hover:bg-gray-50/50';
    }
  };
}
export default Helper;
