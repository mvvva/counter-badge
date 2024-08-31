import React from 'react';
import clsx from 'clsx';

type BadgeProps = {
  color: 'info' | 'failure' | 'success';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
};

const badgeColors = {
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  failure: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
};

const badgeSizes = {
  sm: 'text-xs px-2.5 py-0.5',
  md: 'text-sm px-3 py-0.5',
  lg: 'text-base px-4 py-1',
};

const Badge: React.FC<BadgeProps> = ({ color, size, children }) => {
  return (
    <span
      className={clsx(
        'font-medium mr-2 rounded',
        badgeColors[color],
        badgeSizes[size]
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
    