import { Container } from '../ui/container';
import { projects } from '../../data/index';

export const Portfolio = () => {
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
      <Container>
        {/* Header */}
        <div className='w-full px-6 lg:px-16 text-center mb-16'>
          <h2
            className='
              text-2xl
              md:text-3xl
              lg:text-4xl
              font-bold
              text-slate-900
              dark:text-white
              mb-5
            '
          >
            From Vision to Launch! Projects We’re Proud Of
          </h2>

          <p
            className='
              max-w-1xl
              mx-auto
              text-slate-600
              dark:text-slate-400
              text-lg
            '
          >
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div
          className='
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          '
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className='
                group
                rounded-3xl
                overflow-hidden
                border
                border-slate-200
                dark:border-black
                bg-white
                dark:bg-[#030407]
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              '
            >
              {/* Image */}
              <div className='overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='
                    w-full
                    h-[250px]
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  '
                />
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3
                  className='
                    leading-relaxed
                    text-[#bd05059a]
                    dark:text-[#bd05059a]
                    mb-3
                  '
                >
                  {project.title}
                </h3>

                <p
                  className='
                    text-xl
                    font-bold
                    text-black
                    dark:text-slate-100
                    
                  '
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
