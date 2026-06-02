const Hero = () => {
  return (
    <section
      id='about'
      className='relative  overflow-hidden min-h-screen bg-white dark:bg-black'
    >
      {/* Container mengikuti Navbar */}
      <div
        className='
          relative
          z-10
          w-full
          
        '
      >
        <div
          className='
            grid
            items-center
            gap-10
            lg:grid-cols-2
            min-h-[calc(100vh-100px)]
          '
        >
          {/* LEFT */}
          <div className='max-w-2xl w-full px-5 lg:px-16'>
            <h1
              className='
                mb-6
                text-4xl
                font-bold
                leading-tight
                text-slate-900
                dark:text-white
                lg:text-4xl
                px-10
              '
            >
              Your Tech Partner for
              <span className='text-orange-500 mt-20'> Smarter Growth</span>
            </h1>

            <p
              className='
                mb-8
                text-lg
                leading-relaxed
                text-black
                dark:text-slate-300
                px-10
              '
            >
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>

            <div className='relative flex flex-wrap gap-4'>
              <button
                className='
                  min-w-[220px]
                  h-[46px]
                  rounded-full
                  bg-orange-500
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-orange-600
                  px-10
                  py-4
                  flex
                  items-center
                  justify-center
                '
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className='relative flex justify-center lg-justify-end overflow-hidden'>
            {/* Light Mode Image */}
            <img
              src='/Light-Theme.png'
              alt='Hero Light'
              className='
                block
                dark:hidden
                w-full
                lg:w-[130%]
                object-contain
                mix-blend-screen
                '
            />

            {/* Dark Mode Image */}
            <img
              src='/Dark-Theme.png'
              alt='Hero Dark'
              className='
                hidden
                dark:block
                w-full
                lg:w-[130%]
                object-contain
                mix-blend-screen
              '
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
