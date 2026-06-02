'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    image: '/client-1.png',
    text: 'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
  },
  {
    id: 2,
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    image: '/client-2.png',
    text: 'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    image: '/client-3.png',
    text: 'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
  },
];

const Testimonials = () => {
  return (
    <section
      className='
        w-full
        py-24
        bg-white
        dark:bg-black
        overflow-hidden
      '
    >
      <div className='w-full px-6 lg:px-16'>
        {/* Heading */}
        <div className='text-center mb-16'>
          <h2
            className='
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-slate-900
              dark:text-white
            '
          >
            What Partners Say About Working With Us
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
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Mousewheel]}
          effect='coverflow'
          centeredSlides
          loop
          grabCursor
          mousewheel
          pagination={{
            clickable: true,
          }}
          slidesPerView={1.15}
          breakpoints={{
            768: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 2.2,
            },
            1280: {
              slidesPerView: 2.4,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            scale: 0.85,
            slideShadows: false,
          }}
          className='testimonialSwiper'
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className='
                  relative
                  rounded-[30px]
                  border
                  border-orange-500/20
                  bg-slate-50
                  dark:bg-slate-950
                  p-8
                  lg:p-12
                  text-center
                  transition-all
                  duration-500
                '
              >
                {/* Quote */}
                <div
                  className='
                    absolute
                    -top-12
                    left-1/2
                    -translate-x-1/2
                    text-orange-500
                    text-[110px]
                    lg:text-[140px]
                    font-black
                    
                    
                    
                  '
                >
                  ”
                </div>

                {/* Stars */}
                <div className='flex justify-center gap-1 mb-6'>
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <span key={i} className='text-yellow-400 text-lg'>
                        ★
                      </span>
                    ))}
                </div>

                <p
                  className='
                    text-slate-600
                    dark:text-slate-300
                    leading-8
                    mb-8
                  '
                >
                  "{item.text}"
                </p>

                <h4
                  className='
                    text-xl
                    font-semibold
                    text-slate-900
                    dark:text-white
                  '
                >
                  {item.name}
                </h4>

                <p
                  className='
                    text-orange-500
                    mt-2
                  '
                >
                  {item.role}
                </p>

                {/* Avatar */}
                <img
                  src={item.image}
                  alt={item.name}
                  className='
                    w-20
                    h-20
                    rounded-full
                    object-cover
                    mx-auto
                    mt-8
                    border-4
                    border-white
                    dark:border-slate-800
                  '
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
