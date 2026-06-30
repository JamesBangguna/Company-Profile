import {
  Menu,
  Moon,
  Sun,
  X,
  Home,
  BriefcaseBusiness,
  FolderKanban,
  MessageSquareText,
  CircleHelp,
  ChevronRight,
} from 'lucide-react';
import { useEffect, useState } from 'react';

// 1. Definisikan Interface Props untuk TypeScript
interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

// 2. Hubungkan Props ke dalam Komponen Navbar
const Navbar = ({ darkMode, onToggleDarkMode }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Blur Navbar Saat Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock Scroll Saat Mobile Menu Terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const menus = [
    {
      title: 'About',
      icon: <Home size={20} />,
    },
    {
      title: 'Service',
      icon: <BriefcaseBusiness size={20} />,
    },
    {
      title: 'Projects',
      icon: <FolderKanban size={20} />,
    },
    {
      title: 'Testimonials',
      icon: <MessageSquareText size={20} />,
    },
    {
      title: 'FAQ',
      icon: <CircleHelp size={20} />,
    },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? 'bg-white/90 dark:bg-[#071028]/20 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        }
      `}
    >
      <div className='w-full px-5 lg:px-16'>
        {/* Desktop */}
        <div
          className='
            hidden
            lg:flex
            items-center
            justify-between
            w-full
            h-[88px]
            bg-white
            dark:bg-black
            px-5
            border-slate-200
            dark:border-black
            relative
            overflow-hidden
          '
        >
          {/* Glow */}
          <div className='absolute right-0 w-[300px] h-[300px] blur-[150px]' />

          {/* Logo */}
          <div className='flex items-center gap-3 flex-shrink-0'>
            <img
              src='/logo-light.png'
              alt='Logo'
              className='h-10 w-auto object-contain'
            />

            <h1 className='text-2xl font-bold text-black dark:text-white'>
              Your Logo
            </h1>
          </div>

          {/* Menu */}
          <nav className='w-full px-6 lg:px-16 flex items-center gap-8 relative z-10'>
            {menus.map((menu) => (
              <a
                key={menu.title}
                href='#'
                className='
                  text-base
                  font-medium
                  text-black
                  dark:text-white
                  hover:text-orange-500
                  transition-all
                '
              >
                {menu.title}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className='flex items-center gap-4 relative z-10'>
            {/* Menggunakan onToggleDarkMode dari props */}
            <button
              onClick={onToggleDarkMode}
              className='
                w-10
                h-10
                rounded-full
                bg-white
                dark:bg-black
                border-slate-200
                dark:border-black
                flex
                items-center
                justify-center
              '
            >
              {darkMode ? (
                <Moon size={18} className='text-white' />
              ) : (
                <Sun size={18} className='text-black' />
              )}
            </button>

            <button
              className='
                min-w-[180px]
                h-[40px]
                rounded-full
                bg-orange-500
                hover:bg-orange-600
                text-white
                text-base
                font-semibold
                border-2
                border-orange-400
                shadow-lg
                hover:shadow-orange-500/30
                transition-all
                duration-300
                flex
                items-center
                justify-center
              '
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className='lg:hidden'>
          <div
            className='
              h-[75px]
              px-5
              flex
              items-center
              justify-between
              bg-white
              dark:bg-black
              border-slate-200
              dark:border-black
            '
          >
            {/* Logo */}
            <div className='flex items-center gap-3'>
              <img
                src='/logo-light.png'
                alt='Logo'
                className='h-10 w-auto object-contain'
              />

              <h1 className='text-xl font-bold text-black dark:text-white'>
                Your Logo
              </h1>
            </div>

            <div className='flex items-center gap-3'>
              {/* Menggunakan onToggleDarkMode dari props */}
              <button
                onClick={onToggleDarkMode}
                className='
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border-slate-200
                  dark:border-black
                '
              >
                {darkMode ? (
                  <Moon size={18} className='text-white' />
                ) : (
                  <Sun size={18} className='text-black' />
                )}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  border-slate-200
                  dark:border-black
                  text-black
                  dark:text-white
                '
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className='
                w-full 
                px-6 
                lg:px-16
                fixed
                inset-0
                top-[75px]
                z-40
                bg-white
                dark:bg-black
                overflow-y-auto
                p-6
              '
            >
              <div className='space-y-6'>
                {menus.map((menu) => (
                  <a
                    key={menu.title}
                    href='#'
                    onClick={() => setMenuOpen(false)}
                    className='
                      flex
                      items-center
                      justify-between
                    '
                  >
                    <div className='flex items-center gap-4'>
                      <span className='text-orange-500'>{menu.icon}</span>

                      <span className='text-lg font-medium text-black dark:text-white'>
                        {menu.title}
                      </span>
                    </div>

                    <ChevronRight
                      size={20}
                      className='text-black dark:text-white'
                    />
                  </a>
                ))}

                <button
                  className='
                    w-full
                    px-6
                    lg:px-16
                    mx-auto
                    mt-8
                    py-4
                    rounded-full
                    bg-orange-500
                    text-white
                    font-semibold
                  '
                >
                  Let's Talk
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
