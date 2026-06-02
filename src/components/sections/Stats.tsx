import { Container } from '../ui/container';

const images = ['/Card-1.png', '/Card-2.png', '/Card-3.png', '/Card-4.png'];

export const Stats = () => {
  return (
    <section
      id='stats'
      className='
        w-full 
        px-6 
        lg:px-16
        py-20 
        lg:py-28
        bg-white
        dark:bg-black
        transition-colors
      '
    >
      <Container>
        {/* Heading */}
        <div className='w-full px-6 lg:px-16 '>
          <h2
            className='
              text-center
              text-2xl
              md:text-3xl
              font-bold
              
              text-slate-900
              dark:text-white
            '
          >
            End-to-End IT Solutions That Drive Results
          </h2>

          <p
            className='
              text-center
              mt-4
              mb-10
              text-2xl
              text-slate-600
              dark:text-slate-400
            '
          >
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>

        {/* Images */}
        <div
          className='
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-8
            mt-10
            mb-20
          '
        >
          {images.map((image, index) => (
            <div
              key={index}
              className='
                
                
                bg-white
                dark:bg-black
                
               
                hover:-translate-y-2
                transition-all
                duration-300
              '
            >
              <img
                src={image}
                alt={`Stat ${index + 1}`}
                className='
                  w-full
                  h-full
                  object-cover
                  
                '
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
