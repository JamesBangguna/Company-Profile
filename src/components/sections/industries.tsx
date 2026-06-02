import { useState } from 'react';
import { industries } from '../../data/index';

export const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section
      className='
        w-full
        px-6
        lg:px-16
        py-24
        bg-white
        dark:bg-black
        transition-colors
      '
    >
      <div className='w-full px-6 lg:px-16'>
        {/* Header */}
        <div className='mb-20'>
          <h2
            className='
              text-4xl
              lg:text-5xl
              font-bold
              text-slate-900
              dark:text-white
              mb-6
            '
          >
            Built for Your Industry
          </h2>

          <p
            className='
              text-lg
              text-slate-500
              dark:text-slate-400
              max-w-3xl
            '
          >
            We've helped companies across industries launch smarter, faster, and
            more securely.
          </p>
        </div>

        {/* Content */}
        <div
          className='
            grid
            lg:grid-cols-[280px_1fr]
            gap-16
            items-start
          '
        >
          {/* Sidebar */}
          <div className='space-y-8'>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className='
                  flex
                  items-center
                  gap-4
                  text-left
                  group
                '
              >
                <div
                  className={`
                    w-[4px]
                    h-10
                    rounded-full
                    transition-all
                    ${
                      activeIndustry.id === industry.id
                        ? 'bg-orange-500'
                        : 'bg-slate-300 dark:bg-slate-700'
                    }
                  `}
                />

                <span
                  className={`
                    text-2xl
                    font-semibold
                    transition-all
                    ${
                      activeIndustry.id === industry.id
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-500 dark:text-slate-500'
                    }
                  `}
                >
                  {industry.name}
                </span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div>
            <p
              className='
                text-lg
                leading-9
                text-slate-700
                dark:text-slate-300
                mb-10
              '
            >
              {activeIndustry.description}
            </p>

            <div
              className='
                overflow-hidden
                rounded-[32px]
              '
            >
              {/* Light Mode */}
              <img
                src={activeIndustry.imageLight}
                alt={activeIndustry.name}
                className='
                  block
                  dark:hidden
                  w-full
                  h-[280px]
                  md:h-[450px]
                  object-cover
                '
              />

              {/* Dark Mode */}
              <img
                src={activeIndustry.imageDark}
                alt={activeIndustry.name}
                className='
                  hidden
                  dark:block
                  w-full
                  h-[280px]
                  md:h-[450px]
                  object-cover
                '
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
