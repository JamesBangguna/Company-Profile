import { useState } from 'react';

import { Container } from '../ui/container';

const services = [
  'Web Development',
  'Mobile Apps',
  'UI/UX Design',
  'Cloud Solutions',
  'Cyber Security',
  'IT Consulting',
];

export const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = Math.random() > 0.5;

    if (success) {
      setShowSuccess(true);
    } else {
      setShowFailed(true);
    }
  };

  return (
    <>
      {/* Popup Success */}
      {showSuccess && (
        <div className='fixed inset-0 z-[9999] flex items-center justify-center'>
          <div className='absolute inset-0 bg-black/50 backdrop-blur-md' />

          <div className='relative bg-white dark:bg-[#0b0b0cfc] rounded-3xl p-8 w-[90%] max-w-md shadow-2xl text-center'>
            <img
              src='/Success.png'
              alt='success'
              className='w-36 mx-auto mb-5'
            />

            <h3 className='text-2xl font-bold text-black dark:text-slate-300 mb-3'>
              Message Received!
            </h3>

            <p className='text-slate-600 dark:text-slate-300 mb-6'>
              Thanks for reaching out — we’ll get back to you as soon as
              possible.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className='w-full py-3 rounded-full bg-orange-500 text-white font-semibold'
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Popup Failed */}
      {showFailed && (
        <div className='fixed inset-0 z-[9999] flex items-center justify-center'>
          <div className='absolute inset-0 bg-black/50 backdrop-blur-md' />

          <div className='relative bg-white dark:bg-black rounded-3xl p-8 w-[90%] max-w-md shadow-2xl text-center'>
            <img src='/Failed.png' alt='failed' className='w-36 mx-auto mb-5' />

            <h3 className='text-2xl font-bold text-black dark:text-slate-400 mb-3'>
              Oops! Something went wrong.
            </h3>

            <p className='text-slate-600 dark:text-slate-300 mb-6'>
              We couldn’t send your message. Please try again or check your
              connection.
            </p>

            <button
              onClick={() => setShowFailed(false)}
              className='w-full py-3 rounded-full bg-orange-500 text-white font-semibold'
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      <section
        id='contact'
        className='
          w-full
          px-6
          lg:px-16
          py-24
          bg-white
          dark:bg-black
        '
      >
        <Container>
          <div className='text-center mb-16'>
            {/* Header */}
            <div>
              <h2 className='text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
                Ready to Start? Let's Talk.
              </h2>

              <p className='text-lg text-slate-600 dark:text-slate-400 mb-8'>
                Tell us what you need, and we’ll get back to you soon.
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className='
                max-w-2xl
                mx-auto
                bg-slate-50
                dark:bg-black
                rounded-3xl
                p-8
                border
                border-slate-200
                dark:border-slate-950
              '
          >
            <form onSubmit={handleSubmit}>
              <div className='space-y-5'>
                <label
                  htmlFor='name'
                  className='
                      block
                      text-sm
                      font-semibold
                     text-black
                     dark:text-slate-300
                     '
                >
                  Name
                </label>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='
                      w-full
                      px-5
                      py-4
                      rounded-xl
                      border
                      border-slate-300
                      dark:border-slate-300
                      bg-white
                      dark:bg-black
                    '
                />

                <label
                  htmlFor='email'
                  className='
                      block
                      text-sm
                      font-semibold
                     text-black
                     dark:text-slate-300
                     '
                >
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='
                      w-full
                      px-5
                      py-4
                      rounded-xl
                      border
                      border-slate-300
                      dark:border-slate-300
                      bg-white
                      dark:bg-black
                    '
                />

                <label
                  htmlFor='message'
                  className='
                      block
                      text-sm
                      font-semibold
                     text-black
                     dark:text-slate-300
                     '
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder='Enter your message'
                  className='
                      w-full
                      px-5
                      py-4
                      rounded-xl
                      border
                      border-slate-300
                      dark:border-slate-300
                      bg-white
                      dark:bg-black
                    '
                />
              </div>

              {/* Services */}
              <div className='mt-8'>
                <h4 className='font-semibold mb-4 text-slate-900 dark:text-white'>
                  Services
                </h4>

                <div className='grid grid-cols-2 gap-y-4'>
                  {services.map((service) => (
                    <label
                      key={service}
                      className='
                          flex
                          items-center
                          gap-3
                          cursor-pointer
                          text-slate-700
                          dark:text-slate-300
                        '
                    >
                      <input
                        type='checkbox'
                        className='
                            w-5
                            h-5
                            accent-orange-500
                          '
                      />

                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type='submit'
                className='
                    mt-10
                    w-full
                    py-2
                    rounded-full
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-semibold
                    transition
                  '
              >
                Send
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};
