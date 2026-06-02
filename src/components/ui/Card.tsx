import type { CardProps } from '../../types';

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
