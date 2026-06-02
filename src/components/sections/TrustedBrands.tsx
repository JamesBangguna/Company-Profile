const logos = [
  '/Adobe.png',
  '/upwork.png',
  '/zoom.png',
  '/Postman.png',
  '/databricks.png',
  '/airbnb.png',
  '/Dropbox.png',
  '/paypal.png',
  '/netflix.png',
];

const TrustedBrands = () => {
  return (
    <section className='w-full py-20 bg-white dark:bg-black'>
      <div className='w-full px-6 lg:px-16'>
        {/* Heading */}
        <h2 className='mb-16 text-center text-xl font-bold text-slate-900 dark:text-white md:text-2xl'>
          Trusted by Global Innovators & Leading Brands
        </h2>

        {/* Wrapper */}
        <div className='relative'>
          {/* Blur Kiri */}
          <div
            className='
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-20
              bg-gradient-to-r
              from-white
              dark:from-black
              to-transparent
            '
          />

          {/* Blur Kanan */}
          <div
            className='
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-20
              bg-gradient-to-l
              from-white
              dark:from-black
              to-transparent
            '
          />

          {/* Scroll Area */}
          <div
            className='
              overflow-x-auto
              scrollbar-hide
              cursor-grab
              active:cursor-grabbing
            '
          >
            <div
              className='
                flex
                items-center
                gap-8
                min-w-max
                py-4
              '
            >
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`brand-${index}`}
                  className='
                    h-10
                    md:h-12
                    w-auto
                    object-contain
                    flex-shrink-0
                    min-w-[140 px]
                    grayscale
                    opacity-70
                    hover:opacity-100
                    transition-all
                    duration-300
                  '
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
