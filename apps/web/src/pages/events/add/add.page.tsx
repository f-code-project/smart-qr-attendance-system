import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import TitlePage from '../../../components/TitlePage';
import useTitle from '../../../hooks/useTitle';
import FormCreate from './FormCreate';

const AddEventPage = () => {
  useTitle('Tạo sự kiện mới');

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <TitlePage title="Tạo sự kiện mới" description="Điền đầy đủ thông tin để tạo sự kiện cho câu lạc bộ" />
        <Link to="/events" className="btn btn-ghost btn-sm gap-2">
          <ArrowLeft size={18} />
          Quay lại
        </Link>
      </div>

      <FormCreate />
    </div>
  );
};

export default AddEventPage;
