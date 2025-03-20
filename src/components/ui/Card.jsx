
import React from 'react';
import { cn } from '@/lib/utils';

const Card = ({ 
  children, 
  className, 
  glass = false, 
  hoverable = false,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-subtle p-6',
        glass && 'glass-card',
        hoverable && 'hover-elevate',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
