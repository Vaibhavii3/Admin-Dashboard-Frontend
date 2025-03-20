
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavItem from '@/components/ui/NavItem';
import { 
  HomeIcon, 
  UsersIcon, 
  TruckIcon, 
  LayoutDashboardIcon, 
  LogOutIcon, 
  MenuIcon,
  XIcon,
  UserIcon,
  BriefcaseIcon,
  BookIcon,
  SettingsIcon,
  ShieldIcon
} from 'lucide-react';

const Dashboard = ({ children }) => {
  const { user, logout, hasRole } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Navigation items based on user role
  const getNavItems = () => {
    const items = [
      { 
        icon: HomeIcon, 
        label: 'Dashboard', 
        to: '/dashboard', 
        roles: ['super_admin', 'service_admin', 'driver', 'user']
      }
    ];

    if (hasRole('super_admin')) {
      items.push(
        { 
          icon: UsersIcon, 
          label: 'Service Admins', 
          to: '/dashboard/service-admins', 
          roles: ['super_admin']
        },
        { 
          icon: ShieldIcon, 
          label: 'System Overview', 
          to: '/dashboard/system', 
          roles: ['super_admin']
        }
      );
    }

    if (hasRole(['super_admin', 'service_admin'])) {
      items.push(
        { 
          icon: BriefcaseIcon, 
          label: 'Services', 
          to: '/dashboard/services', 
          roles: ['super_admin', 'service_admin']
        }
      );
    }

    if (hasRole('service_admin')) {
      items.push(
        { 
          icon: TruckIcon, 
          label: 'Drivers', 
          to: '/dashboard/drivers', 
          roles: ['service_admin']
        }
      );
    }

    if (hasRole(['service_admin', 'driver', 'user'])) {
      items.push(
        { 
          icon: BookIcon, 
          label: 'Bookings', 
          to: '/dashboard/bookings', 
          roles: ['service_admin', 'driver', 'user']
        }
      );
    }

    items.push(
      { 
        icon: SettingsIcon, 
        label: 'Settings', 
        to: '/dashboard/settings', 
        roles: ['super_admin', 'service_admin', 'driver', 'user']
      }
    );

    return items.filter(item => hasRole(item.roles));
  };

  const navItems = getNavItems();

  return (
    <div className="flex h-full min-h-screen bg-background">
      {/* Sidebar (desktop) */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:flex ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full w-full">
          {/* Sidebar Header */}
          <div className="flex h-16 items-center justify-between px-4 py-4 border-b border-sidebar-border">
            <div className="flex items-center">
              <LayoutDashboardIcon className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold">Service Portal</span>
            </div>
            <button 
              onClick={toggleSidebar}
              className="lg:hidden text-sidebar-foreground hover:text-primary transition-colors"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          {/* User Info */}
          <div className="px-4 py-4 border-b border-sidebar-border">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <UserIcon className="h-5 w-5" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-sidebar-foreground/70 capitalize">
                  {user?.role.replace('_', ' ')}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavItem 
                    to={item.to} 
                    icon={item.icon}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        setSidebarOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </NavItem>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="border-t border-sidebar-border p-4">
            <button
              onClick={logout}
              className="flex w-full items-center gap-2 px-3 py-2 text-sm font-medium text-sidebar-foreground rounded-md hover:bg-sidebar-accent/50 transition-colors"
            >
              <LogOutIcon className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full">
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 bg-background/80 backdrop-blur-sm border-b shadow-subtle flex items-center px-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden mr-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 py-6 px-4 md:px-6 overflow-y-auto animate-fade-in">
          {children}
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-xs z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Dashboard;
