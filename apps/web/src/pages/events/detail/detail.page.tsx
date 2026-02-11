import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import TitlePage from '../../../components/TitlePage';
import useTitle from '../../../hooks/useTitle';
import DateUtils from '../../../utils/date';
import ControlEvent from './ControlEvent';
import EventInfo from './EventInfo';
import RollCall from './RollCall';

const DetailEventPage = () => {
  // const { playSound, stopSound } = useNotificationSound('SE203677.mp3', false);
  useTitle('Chi tiết sự kiện');
  const { id } = useParams<{ id: string }>();

  // Mock data - Thay bằng API call thực tế
  const event = {
    id: parseInt(id || '1'),
    eventName: 'Tất Niên CLB 2026',
    eventCode: 'TN2026',
    description: 'Tiệc tất niên và tổng kết hoạt động năm 2025. Chương trình gồm: ăn uống, giao lưu, trao giải thưởng.',
    category: 'EVENT',
    amount: 200000,
    startDate: '2026-02-13 18:00:00',
    endDate: '2026-02-13 22:00:00',
    status: 'ACTIVE',
    participantsCount: 50,
    attendeeCount: 35,
    location: 'Nhà hàng Riverside, Quận 1, TP.HCM',
    note: 'Vui lòng mặc trang phục lịch sự. Có xe đưa đón tại điểm hẹn.',
  };

  const { status } = DateUtils.formatTimeRange(event.startDate, event.endDate);
  const isActive = ['near', 'active'].includes(status);

  useEffect(() => {
    playSound();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <TitlePage title={event.eventName} description={`Mã sự kiện: ${event.eventCode}`} />
        <Link to="/events" className="btn btn-ghost btn-sm gap-2">
          <ArrowLeft size={18} />
          Quay lại
        </Link>
      </div>

      <ControlEvent eventId={event.id} eventName={event.eventName} isActive={isActive} />

      <EventInfo event={event} />

      <RollCall eventId={event.id} isActive={isActive} />
    </div>
  );
};

export default DetailEventPage;
