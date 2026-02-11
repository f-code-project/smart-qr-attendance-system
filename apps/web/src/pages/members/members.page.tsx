import TitlePage from '../../components/TitlePage';
import FilterMembers from './FilterMembers';
import MembersTable from './MembersTable';

const MembersPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <TitlePage title="Quản lý thành viên" description="Danh sách tất cả thành viên trong CLB" />
      </div>
      <FilterMembers />
      <MembersTable />
    </div>
  );
};

export default MembersPage;
