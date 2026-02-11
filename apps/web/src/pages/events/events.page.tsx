import TitlePage from '../../components/TitlePage';
import AddEventModal from './AddEventModal';
import EventsTable from './EventsTable';
import FilterEvents from './FilterEvents';

const EventsPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <TitlePage title="Quản lý sự kiện" description="Quản lý các sự kiện và quỹ thu của CLB" />
        <AddEventModal />
      </div>
      <FilterEvents />
      <EventsTable />
    </div>
  );
};

export default EventsPage;
