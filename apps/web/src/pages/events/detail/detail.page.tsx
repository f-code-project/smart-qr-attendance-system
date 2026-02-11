import { Activity, ArrowLeft, LayoutDashboard, Settings, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import TitlePage from '../../../components/TitlePage';
import { useNotificationSound } from '../../../hooks/useNotificationSound';
import useTitle from '../../../hooks/useTitle';
import DateUtils from '../../../utils/date';
import ActivityTimeline from './ActivityTimeline';
import AttendanceChart from './AttendanceChart';
import ControlEvent from './ControlEvent';
import EventInfo from './EventInfo';
import QuickActions from './QuickActions';
import RollCall from './RollCall';

const DetailEventPage = () => {
  const [memberActive, setMemberActive] = useState<string | null>('');
  const [activeTab, setActiveTab] = useState<'overview' | 'attendance' | 'activity' | 'settings'>('overview');
  const { playSound, stopSound } = useNotificationSound(`${memberActive!}.mp3`, false);
  const { playSound: playTingSound } = useNotificationSound(`tingting.mp3`, false);
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
    playTingSound();
    playSound();
  }, [memberActive]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <TitlePage title={event.eventName} description={`Mã sự kiện: ${event.eventCode}`} />
        <Link to="/events" className="btn btn-ghost btn-sm gap-2">
          <ArrowLeft size={18} />
          Quay lại
        </Link>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-base-100 shadow-xs rounded-lg">
        <div className="tabs tabs-boxed bg-transparent p-2 gap-2">
          <button
            className={`tab gap-2 ${activeTab === 'overview' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={16} />
            Tổng quan
          </button>
          <button
            className={`tab gap-2 ${activeTab === 'attendance' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('attendance')}
          >
            <Users size={16} />
            Điểm danh
          </button>
          <button
            className={`tab gap-2 ${activeTab === 'activity' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            <Activity size={16} />
            Hoạt động
          </button>
          <button
            className={`tab gap-2 ${activeTab === 'settings' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={16} />
            Cài đặt
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <QuickActions eventId={event.id} isActive={isActive} />
            <EventInfo event={event} />
            <AttendanceChart participantsCount={event.participantsCount} attendeeCount={event.attendeeCount} />
          </div>
          <div className="space-y-4">
            <ActivityTimeline />
          </div>
        </div>
      )}

      {activeTab === 'attendance' && (
        <RollCall eventId={event.id} isActive={isActive} setMemberActive={setMemberActive} />
      )}

      {activeTab === 'activity' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ActivityTimeline />
          <AttendanceChart participantsCount={event.participantsCount} attendeeCount={event.attendeeCount} />
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="space-y-4">
          <ControlEvent eventId={event.id} eventName={event.eventName} isActive={isActive} />
          <EventInfo event={event} />
        </div>
      )}
    </div>
  );
};

export default DetailEventPage;
