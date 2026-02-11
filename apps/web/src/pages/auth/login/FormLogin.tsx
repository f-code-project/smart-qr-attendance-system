import { Lock, Mail } from 'lucide-react';
import { Link } from 'react-router';

const FormLogin = () => {
  return (
    <section className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12">
      <div className="mb-8 text-center sm:mb-10">
        <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center sm:h-18 sm:w-18">
          <img src="/images/fcode.png" alt="F-Code" className="h-full w-full" />
          <div className="bg-primary/20 absolute inset-0 rounded-full opacity-50 blur-xl"></div>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Đăng nhập</h1>
        <p className="mt-2.5 text-sm text-gray-600 sm:text-base">CLB F-Code thuộc FPT University</p>
      </div>

      <form className="space-y-5 sm:space-y-6">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            {/* <input
              id="email"
              type="email"
              // value={email}
              // disabled={!isFirstLogin}
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="example@fpt.edu.vn"
              className="pl-11 input-bordered w-full"
              required
            /> */}
            <input type="email" placeholder="f-code@fpt.edu.vn" className="input input-bordered w-full" required />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-2.5 block text-sm font-medium text-gray-700">
            Mật khẩu
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            {/* <input
              id="password"
              // type={showPassword ? 'text' : 'password'}
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="pr-11 pl-11"
              required
            /> */}
            <input type="password" placeholder="Nhập mật khẩu" className="input input-bordered w-full" required />
            <button
              type="button"
              // onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4 text-gray-400 transition-colors hover:text-gray-600"
            >
              {/* {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />} */}
            </button>
          </div>
        </div>

        <button className="w-full btn btn-primary">Đăng nhập</button>
      </form>

      <div className="mt-8 border-t border-gray-200 pt-6">
        <p className="text-center text-sm text-gray-600">
          Bạn gặp sự cố khi đăng nhập? Liên hệ{' '}
          <Link
            to="https://www.facebook.com/phamhoangtuanqn/"
            className="text-primary hover:text-primary/80 font-semibold transition-colors hover:underline"
          >
            Phạm Hoàng Tuấn
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FormLogin;
