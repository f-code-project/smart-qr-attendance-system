import TitlePage from '../../components/TitlePage';
import Filters from './Filters';
import HistoriesTable from './HistoriesTable';

const HistoriesPage = () => {
  return (
    <section className="space-y-4">
      <TitlePage title="Lịch sử giao dịch" description="Xem và quản lý lịch sử các vi phạm của sinh viên" />
      <Filters />
      <HistoriesTable />
    </section>
  );
};

export default HistoriesPage;
