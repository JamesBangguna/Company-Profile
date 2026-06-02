import { Container } from '../ui/container';
import { solutions } from '../../data/index';

export const Solutions = () => {
  return (
    <section
      className='
        w-full
        py-24
        bg-white
        dark:bg-black
        transition-colors
      '
    >
      <Container>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2
            className='
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-slate-900
              dark:text-white
              mb-5
            '
          >
            Smart IT Solutions That Grow With You
          </h2>

          <p
            className='
              max-w-3xl
              mx-auto
              text-slate-500
              dark:text-slate-400
              text-lg
            '
          >
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* Solutions Grid */}
        <div
          className='
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          '
        >
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className='
                relative
                pt-10
              '
            >
              {/* Card */}
              <div
                className='
                  h-full
                  rounded-3xl
                  border
                  border-slate-200
                  dark:border-slate-950
                  bg-white
                  dark:bg-[#14121277]
                  px-8
                  py-8
                  transition-all
                  duration-300
                  
                  hover:shadow-2xl
                '
              >
                {/* Icon */}
                <div
                  className='
                    absolute
                    top-0
                    left-6
                    '
                >
                  {/* Light */}
                  <img
                    src={solution.iconLight}
                    alt={solution.title}
                    className='
                      block
                      dark:hidden
                      w-20
                      h-20
                      object-contain
                    '
                  />

                  {/* Dark */}
                  <img
                    src={solution.iconDark}
                    alt={solution.title}
                    className='
                      hidden
                      dark:block
                      w-20
                      h-20
                      object-contain
                    '
                  />
                </div>

                {/* Content */}
                <div className='mt-6'>
                  <h3
                    className='
                      text-xl
                      lg:text-2xl
                      font-bold
                      text-slate-900
                      dark:text-white
                      mb-4
                    '
                  >
                    {solution.title}
                  </h3>

                  <p
                    className='
                      text-slate-500
                      dark:text-slate-400
                      leading-8
                    '
                  >
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solutions;
