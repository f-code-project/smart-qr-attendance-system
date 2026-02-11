import { Plus } from 'lucide-react';
import { Link } from 'react-router';
import TitlePage from '../../components/TitlePage';
import Histories from './Histories';

const HomePage = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <TitlePage title="Quản lý sự kiện/ cuộc họp" description="Danh sách sự kiện và cuộc họp trong CLB" />
          <Link to="/events/add" className="btn btn-primary">
            <Plus size={18} />
            Thêm sự kiện
          </Link>
        </div>
        <Histories />
      </div>
    </>
  );
};

export default HomePage;
