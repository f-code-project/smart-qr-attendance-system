import { Facebook, Globe, Youtube } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-base-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:w-[80%]">
            <div className="flex items-center gap-2.5">
              <img src="/images/fcode.png" alt="F-Code" className="h-10 w-10" />
              <span className="text-primary text-2xl font-bold">F-Code</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-base-content/70">
              F-Code, thành lập năm 2014, là câu lạc bộ học thuật đầu tiên của Đại học FPT tại Thành phố Hồ Chí Minh.
              Ban đầu hướng đến việc tạo ra một cộng đồng cho sinh viên chuyên ngành Kỹ thuật Phần mềm, F-Code cho phép
              họ chia sẻ và cải thiện các kỹ năng cần thiết cho lập trình viên. Sau 11 năm, F-Code đã cung cấp nhiều
              hoạt động khác nhau cho sinh viên.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/fcodeclub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-outline btn-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZyrUXSrQ1AdkomxYz1GvCw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-outline btn-primary"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://fcodehcm.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-outline btn-primary"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="/" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                  Đề tài
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/WvudrJaYD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-base-content/70 hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Ban Chủ nhiệm</h3>
            <ul className="space-y-2">
              <li className="text-sm text-base-content/70">
                <span className="font-medium text-base-content">Chủ nhiệm:</span> Võ Nhật Minh
              </li>
              <li className="text-sm text-base-content/70">
                <span className="font-medium text-base-content">PCN Academic:</span> Phạm Anh Kiệt
              </li>
              <li className="text-sm text-base-content/70">
                <span className="font-medium text-base-content">PCN Media:</span> Ngô Hoàng Thái Dương
              </li>
              <li className="text-sm text-base-content/70">
                <span className="font-medium text-base-content">PCN Plan:</span> Lê Hoàng Trang Nhã
              </li>
              <li className="text-sm text-base-content/70">
                <span className="font-medium text-base-content">PCN HR:</span> Trương Đoàn Viên
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Về dự án</h3>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Hệ thống điểm danh QR thông minh được thiết kế và phát triển bởi Innovation F-Code Team.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge badge-soft badge-primary">Smart QR</span>
              <span className="badge badge-soft badge-primary">Attendance</span>
              <span className="badge badge-soft badge-primary">F-Code</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-base-300">
          <p className="text-center text-sm text-base-content/60">
            &copy; 2026 F-Code Club. Thiết kế bởi{' '}
            <Link
              className="text-primary font-medium hover:underline"
              target="_blank"
              to="https://www.facebook.com/fcodeclub"
            >
              Innovation F-Code Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
