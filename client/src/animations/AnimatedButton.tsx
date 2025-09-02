import React from 'react';
import { ArrowAnimation } from './ArrowAnimations';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant: 'dark' | 'light';
  fullWidth?: boolean;
  containerClass?: string;
}

const AnimatedButton = ({
  label,
  onClick,
  href,
  size = 'md',
  variant = 'dark',
  fullWidth = false,
  containerClass,
}: ButtonProps) => {
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: 'w-40 p-2 text-sm',
    md: 'w-48 p-2 text-base',
    lg: 'w-56 p-3 text-lg',
  }[size];

  const ButtonWrapper = href ? 'a' : 'button';
  return (
    <ButtonWrapper
      href={href}
      onClick={onClick}
      className={`group flex cursor-pointer items-center justify-between rounded-full font-medium transition-all ${containerClass} ${sizeClasses} ${fullWidth ? 'w-full' : ''} ${isDark ? 'bg-black text-white' : 'bg-main-bg text-black'}`}
    >
      <span className="mx-4 text-nowrap">{label}</span>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-full flex-shrink-0 ${isDark ? 'h-10 w-10 bg-white' : 'h-12 w-12 bg-black'}`}
      >
        <ArrowAnimation color={isDark ? 'black' : 'white'} />
      </div>
    </ButtonWrapper>
  );
};

export default AnimatedButton;
