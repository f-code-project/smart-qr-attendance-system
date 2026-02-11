import { BadgeEuro, CalendarDays, House, ShieldAlert, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import ActiveHeader from '../../utils/active-header';
import { NavLink } from './NavLink';

export const Header = () => {
  const location = useLocation();
  return (
    <header className="sticky top-3 z-50 mt-6 rounded-lg border border-gray-200/60 bg-white/95 px-5 py-3.5 backdrop-blur-xl transition-all md:px-7">
      <div className="mx-auto flex max-w-7xl items-center">
        <Link to="/" className="group flex items-center gap-2.5 transition-all sm:gap-3">
          <div className="relative">
            <img
              src="/images/fcode.png"
              alt="F-Code"
              className="h-8 w-8 transition-transform group-hover:scale-105 sm:h-9 sm:w-9"
            />
            <div className="bg-primary/20 absolute inset-0 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-100"></div>
          </div>
          <span className="text-primary text-xl font-bold tracking-tight sm:text-2xl">F-Code</span>
        </Link>

        <nav className="ml-12 hidden lg:block">
          <ul className="flex items-center gap-2">
            <li>
              <NavLink url="/" name="Trang chủ" Icon={House} active={ActiveHeader.isActive(location.pathname, '/')} />
            </li>
            <li>
              <NavLink
                url="/events"
                name="Sự kiện"
                Icon={CalendarDays}
                active={ActiveHeader.isActive(location.pathname, '/events')}
              />
            </li>
            <li>
              <NavLink
                url="/history-transactions"
                name="Giao dịch"
                Icon={BadgeEuro}
                active={ActiveHeader.isActive(location.pathname, '/history-transactions')}
              />
            </li>

            <li>
              <NavLink
                url="/violations"
                name="Vi phạm"
                Icon={ShieldAlert}
                active={ActiveHeader.isActive(location.pathname, '/violations')}
              />
            </li>

            <li>
              <NavLink
                url="/members"
                name="Thành viên"
                Icon={Users}
                active={ActiveHeader.isActive(location.pathname, '/members')}
              />
            </li>

            {/* {isLogin && (
                            <>
                                {Helper.hasRole(role, USER_ROLE.CANDIDATE) && <CandidateHeader />}
                                {Helper.hasRole(role, USER_ROLE.ADMIN) && <AdminHeader />}
                                <li id="teams">
                                    <NavLink
                                        url="/teams"
                                        name="Danh sách nhóm"
                                        Icon={Users}
                                        active={Helper.isActive(location.pathname, '/teams')}
                                    />
                                </li>
                            </>
                        )} */}
            {/* <li>
                            <NavLink
                                url="https://discord.gg/WvudrJaYD"
                                name="Hỗ trợ"
                                Icon={ServerCrash}
                                target="_blank"
                            />
                        </li> */}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          {/* {isLogin ? (
                        <>
                            {user.roles.length >= 2 && (
                                <Select value={currentRole} onValueChange={(value) => handleSwitchRole(value as RoleType)}>
                                    <SelectTrigger className="w-[140px]">
                                        <SelectValue placeholder="Chọn quyền" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Quyền của bạn</SelectLabel>
                                            {user.roles.map((role) => (
                                                <SelectItem key={role} value={role}>
                                                    {role === 'CANDIDATE'
                                                        ? 'Thí sinh'
                                                        : role === 'MENTOR'
                                                            ? 'Mentor'
                                                            : role === 'JUDGE'
                                                                ? 'Giám khảo'
                                                                : role === 'HOST'
                                                                    ? 'Host'
                                                                    : 'Admin'}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                            <div className="relative" ref={menuRef}>
                                <div className="flex items-center gap-3">
                                    <div onClick={() => setShowUserMenu(!showUserMenu)} className="group cursor-pointer rounded-lg px-3">
                                        <div className="flex items-center gap-3">
                                            <div className="from-primary/20 to-primary/40 text-primary ring-primary/10 flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br text-sm font-semibold ring-2 transition-all group-hover:ring-4">
                                                {user.fullName.charAt(0)}
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{user.fullName}</span>
                                            <ChevronDown
                                                size={16}
                                                className={`text-gray-500 transition-all ${showUserMenu ? 'rotate-180' : ''}`}
                                            />
                                        </div>
                                    </div>
                                    {Helper.hasRole(user.roles, USER_ROLE.CANDIDATE) && (
                                        <button
                                            className="hover:border-primary hover:bg-primary/5 hover:text-primary flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-xs transition-all"
                                            onClick={showAgainInstruction}
                                        >
                                            <BadgeQuestionMark size={18} />
                                        </button>
                                    )}
                                </div>
                                {showUserMenu && <SubmenuHeader setShowUserMenu={setShowUserMenu} />}
                            </div>
                        </>
                    ) : (
                        <Link to="/login">
                            <Button>Đăng nhập</Button>
                        </Link>
                    )} */}
          <Link to="/login">
            <button className="btn btn-primary">Đăng nhập</button>
          </Link>
        </div>

        {/* <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-all hover:bg-gray-100 lg:hidden"
                >
                    {showMobileMenu ? <X size={22} /> : <Menu size={22} />}
                </button> */}
      </div>

      {/* {showMobileMenu && <MenuMobileHeader setShowMobileMenu={setShowMobileMenu} />} */}
    </header>
  );
};
