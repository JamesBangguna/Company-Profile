'use client';

import { useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: 'Discovery & Consultation',
    description: 'Understand Your Needs & Goals',
    side: 'left',
  },
  {
    id: 2,
    title: 'Planning & Strategy',
    description: 'Build a Clear, Scalable Roadmap',
    side: 'right',
  },
  {
    id: 3,
    title: 'Design & Prototyping',
    description: 'Craft UX That Converts',
    side: 'left',
  },
  {
    id: 4,
    title: 'Development & Implementation',
    description: 'Deliver With Speed & Precision',
    side: 'right',
  },
  {
    id: 5,
    title: 'Testing & Optimization',
    description: 'Ensure Quality at Every Step',
    side: 'left',
  },
  {
    id: 6,
    title: 'Launch & Growth',
    description: 'Scale, Measure & Improve Continuously',
    side: 'right',
  },
];

export default function Process() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      className='
      w-full
      px-6 
      lg:px-16
      py-8
      bg-white
      dark:bg-black
      transition-colors
    '
    >
      <div className='w-full px-5 lg:px-16'>
        {/* Header */}
        <div className='text-center mb-24'>
          <h2
            className='
            text-4xl
            lg:text-5xl
            font-bold
            text-slate-900
            dark:text-white
            mb-5
          '
          >
            Our Process
          </h2>

          <p
            className='
            text-lg
            text-slate-500
            dark:text-slate-400
          '
          >
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* Desktop */}
        <div className='hidden lg:block relative'>
          {/* Center Line */}
          <div
            className='
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-[2px]
            h-full
            bg-slate-200
            dark:bg-slate-900
          '
          />

          <div className='space-y-14'>
            {steps.map((step) => (
              <div
                key={step.id}
                className={`
                  flex items-center
                  ${step.side === 'left' ? 'justify-start' : 'justify-end'}
                `}
              >
                <div className='w-full max-w-[45%]'>
                  <ProcessCard
                    step={step}
                    isExpanded={expandedItems.includes(step.id)}
                    onToggle={toggleExpanded}
                  />
                </div>

                {/* Number */}
                <div
                  className='
                  absolute
                  left-1/2
                  -translate-x-1/2
                '
                >
                  <div
                    className='
                    w-14
                    h-14
                    rounded-full
                    bg-orange-500
                    text-white
                    font-bold
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  '
                  >
                    {step.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className='lg:hidden space-y-5'>
          {steps.map((step) => (
            <ProcessCard
              key={step.id}
              step={step}
              isExpanded={expandedItems.includes(step.id)}
              onToggle={toggleExpanded}
              showNumber
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProcessCardProps {
  step: ProcessStep;
  isExpanded: boolean;
  onToggle: (id: number) => void;
  showNumber?: boolean;
}

function ProcessCard({
  step,
  isExpanded,
  onToggle,
  showNumber = false,
}: ProcessCardProps) {
  return (
    <div
      className='
        bg-white
        dark:bg-slate-950
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        px-6
        py-8
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      '
    >
      <button onClick={() => onToggle(step.id)} className='w-full text-left'>
        <div className='flex items-center justify-between gap-6'>
          {/* Left Content */}
          <div className='flex items-center gap-5 flex-1'>
            {showNumber && (
              <div
                className='
                  w-12
                  h-12
                  rounded-full
                  bg-orange-500
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-base
                  shrink-0
                '
              >
                {step.id}
              </div>
            )}

            <h3
              className='
                text-xl
                font-bold
                text-slate-900
                dark:text-white
              '
            >
              {step.title}
            </h3>
          </div>

          <ChevronUp
            size={24}
            className={`
              shrink-0
              text-slate-400
              transition-transform
              duration-300
              ${isExpanded ? 'rotate-0' : 'rotate-180'}
            `}
          />
        </div>
      </button>

      {/* Description Dalam Card Yang Sama */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${isExpanded ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}
        `}
      >
        <div className='pt-3'>
          <p
            className='
              text-base
              leading-relaxed
              text-slate-500
              dark:text-slate-400
            '
          >
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}
