import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: ReactNode;

  title?: string;

  description?: string;

  image?: string;

  icon?: ReactNode;

  className?: string;
}
