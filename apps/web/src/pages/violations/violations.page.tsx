import TitlePage from '../../components/TitlePage';
import AddViolationModal from './AddViolationModal';
import FilterViolations from './FilterViolations';
import ViolationsTable from './ViolationsTable';

const ViolationsPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <TitlePage title="Quản lý vi phạm" description="Xem và quản lý các vi phạm của sinh viên" />
        <AddViolationModal />
      </div>
      <FilterViolations />
      <ViolationsTable />
    </div>
  );
};

export default ViolationsPage;
