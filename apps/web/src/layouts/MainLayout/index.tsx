import { Outlet } from 'react-router';
import { Toaster } from 'sonner';
import { Header } from '../../components/Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <section className="flex min-h-screen flex-col justify-between bg-linear-to-b from-gray-100/50 to-white px-4 xl:px-6">
        <section>
          <Header />
          <section className="mx-auto my-8 max-w-7xl sm:my-12">
            <Outlet />
          </section>
        </section>
        <Footer />
        <Toaster
          expand={true}
          richColors
          position="top-center"
          visibleToasts={5}
          theme="system"
          toastOptions={{ duration: 4000, closeButton: true }}
        />
      </section>
    </>
  );
};

export default MainLayout;
