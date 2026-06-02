import type { ButtonProps } from '../../types';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full
        px-6
        py-3
        rounded-full
        font-semibold
        transition-all
        duration-300

        ${
          variant === 'primary'
            ? 'bg-orange-500 text-white'
            : 'bg-slate-200 dark:bg-slate-800 text-black dark:text-white'
        }

        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
