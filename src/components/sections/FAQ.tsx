import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
  },
  {
    id: 2,
    question: 'How do I know if this is right for my business?',
    answer:
      'Book a free consult — we’ll assess your goals and recommend the right approach.',
  },
  {
    id: 3,
    question: 'How much does a project cost?',
    answer:
      'Every project is different. Let’s talk about your needs to get a tailored estimate.',
  },
  {
    id: 4,
    question: 'How long does it take?',
    answer:
      'Depends on scope — but we always prioritize quality and deadlines.',
  },
  {
    id: 5,
    question: 'Can I start with a small project first?',
    answer: 'Absolutely. We often begin with MVPs or pilot projects.',
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div
          className='
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-8
            mb-14
          '
        >
          <div>
            <h2
              className='
                text-4xl
                lg:text-5xl
                font-bold
                text-slate-900
                dark:text-white
                leading-tight
              '
            >
              Need Help? Start
              <br />
              Here.
            </h2>
          </div>

          <p
            className='
              text-slate-600
              dark:text-slate-400
              max-w-sm
            '
          >
            Everything you need to know — all in one place.
          </p>
        </div>

        <div
          className='
            grid
            lg:grid-cols-[1fr_320px]
            gap-12
            items-start
          '
        >
          {/* FAQ Left */}
          <div>
            {faqItems.map((item) => {
              const isOpen = openItems.includes(item.id);

              return (
                <div
                  key={item.id}
                  className='
                    border-b
                    border-slate-200
                    dark:border-slate-800
                  '
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className='
                      w-full
                      py-7
                      flex
                      items-center
                      justify-between
                      text-left
                    '
                  >
                    <h3
                      className='
                        text-xl
                        font-semibold
                        text-slate-900
                        dark:text-white
                      '
                    >
                      {item.question}
                    </h3>

                    {isOpen ? (
                      <Minus
                        size={24}
                        className='text-slate-900 dark:text-white'
                      />
                    ) : (
                      <Plus
                        size={24}
                        className='text-slate-900 dark:text-white'
                      />
                    )}
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? 'max-h-40 pb-7 opacity-100'
                          : 'max-h-0 opacity-0'
                      }
                    `}
                  >
                    <p
                      className='
                        text-lg
                        text-slate-600
                        dark:text-slate-400
                        pr-10
                      '
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Consultation Card */}
          <div
            className='
              bg-orange-600
              rounded-3xl
              p-6
              sticky
              top-24
            '
          >
            <h3
              className='
                text-4xl
                font-bold
                text-white
                leading-tight
                mb-4
              '
            >
              Let's talk it
              <br />
              through
            </h3>

            <p
              className='
                text-orange-100
                mb-6
              '
            >
              Book a free consultation with our team.
            </p>

            <img
              src='/Consultation-Image.png'
              alt='Consultation'
              className='
                w-full
                h-40
                object-cover
                rounded-2xl
                mb-6
              '
            />

            <button
              className='
                w-full
                bg-white
                text-slate-900
                py-4
                rounded-full
                font-semibold
                hover:bg-slate-100
                transition
              '
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
