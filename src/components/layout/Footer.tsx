import { Container } from '../ui/container';

const menus = ['About', 'Service', 'Projects', 'Testimonials', 'FAQ'];

const socials = [
  {
    name: 'Facebook',
    icon: '/facebook.png',
    url: 'https://facebook.com',
  },
  {
    name: 'Instagram',
    icon: '/Instagram.png',
    url: 'https://instagram.com',
  },
  {
    name: 'LinkedIn',
    icon: '/linkenid.png',
    url: 'https://linkedin.com/',
  },
  {
    name: 'TikTok',
    icon: '/Tiktok.png',
    url: 'https://tiktok.com/',
  },
];

export default function Footer() {
  return (
    <footer
      className='
        w-full
        bg-slate-50
        dark:bg-black
        py-14
        px-6
        lg:px-16
      '
    >
      <Container>
        <div
          className='
            rounded-[32px]
            border
            border-slate-200
            dark:border-slate-700
            bg-white
            dark:bg-black
            px-8
            md:px-12
            py-10
            shadow-sm
          '
        >
          {/* Top */}
          <div
            className='
              flex
              flex-col
              md:flex-row
              justify-between
              gap-10
            '
          >
            {/* Left */}
            <div>
              <h2
                className='
                  text-3xl
                  md:text-5xl
                  font-bold
                  leading-tight
                  text-slate-900
                  dark:text-white
                '
              >
                LET&apos;S DISCUSS
                <br />
                YOUR IDEAS
              </h2>
            </div>

            {/* Right Logo */}
            <div className='flex items-center gap-3 md:justify-end'>
              <img
                src='/logo-light.png'
                alt='Logo'
                className='
                  h-12
                  md:h-14
                  w-auto
                  object-contain
                  flex-shrink-0
                  '
              />

              <span
                className='
                  
                  text-2xl
                  md:text-xl
                  font-bold
                 text-slate-900
                 dark:text-white
                    whitespace-nowrap
                    '
              >
                Your Logo
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className='
              my-10
              border-t
              border-slate-200
              dark:border-slate-700
            '
          />

          {/* Bottom */}
          <div
            className='
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-8
            '
          >
            {/* Menu */}
            <nav
              className='
                flex
                flex-wrap
                justify-center
                md:justify-start
                gap-6
                md:gap-10
              '
            >
              {menus.map((menu) => (
                <a
                  key={menu}
                  href={`#${menu.toLowerCase()}`}
                  className='
                    text-sm
                    md:text-base
                    text-slate-600
                    dark:text-slate-300
                    hover:text-orange-500
                    transition-colors
                  '
                >
                  {menu}
                </a>
              ))}
            </nav>

            {/* Social */}
            <div className='flex items-center gap-4'>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className='
                    w-18
                    h-18
                    rounded-full
                    border
                    border-slate-200
                    dark:border-slate-700
                    bg-white
                    dark:bg-slate-100
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition-all
                  '
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className='
                      w-7
                      h-7
                      object-contain
                    '
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
