
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NavItem = ({ 
  icon: Icon, 
  children, 
  to, 
  onClick, 
  className,
  activeClassName
}) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => cn(
        'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-out',
        isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50',
        className,
        isActive && activeClassName
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
    </NavLink>
  );
};

export default NavItem;
