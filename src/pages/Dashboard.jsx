import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import DashboardLayout from '@/components/layout/Dashboard';
import { UsersIcon, TruckIcon, BriefcaseIcon, BookIcon, ArrowRightIcon } from 'lucide-react';

const Dashboard = () => {
  const { user, hasRole } = useAuth();
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" />;

  const roleStats = {
    super_admin: [
      { title: 'Service Admins', value: '12', icon: UsersIcon, color: 'bg-blue-50 text-blue-500', link: '/dashboard/service-admins' },
      { title: 'Total Services', value: '48', icon: BriefcaseIcon, color: 'bg-green-50 text-green-500', link: '/dashboard/services' },
      { title: 'Active Drivers', value: '85', icon: TruckIcon, color: 'bg-amber-50 text-amber-500' },
      { title: 'Total Bookings', value: '1,253', icon: BookIcon, color: 'bg-purple-50 text-purple-500' },
    ],
    service_admin: [
      { title: 'Services', value: '8', icon: BriefcaseIcon, color: 'bg-green-50 text-green-500', link: '/dashboard/services' },
      { title: 'Drivers', value: '16', icon: TruckIcon, color: 'bg-amber-50 text-amber-500', link: '/dashboard/drivers' },
      { title: 'Active Bookings', value: '34', icon: BookIcon, color: 'bg-purple-50 text-purple-500', link: '/dashboard/bookings' },
      { title: 'Completed Bookings', value: '248', icon: BookIcon, color: 'bg-blue-50 text-blue-500' },
    ],
    driver: [
      { title: 'Assigned Bookings', value: '5', icon: BookIcon, color: 'bg-amber-50 text-amber-500', link: '/dashboard/bookings' },
      { title: 'In Progress', value: '2', icon: TruckIcon, color: 'bg-blue-50 text-blue-500' },
      { title: 'Completed Today', value: '3', icon: BookIcon, color: 'bg-green-50 text-green-500' },
      { title: 'Total Completed', value: '142', icon: BookIcon, color: 'bg-purple-50 text-purple-500' },
    ],
    user: [
      { title: 'Active Bookings', value: '2', icon: BookIcon, color: 'bg-amber-50 text-amber-500', link: '/dashboard/bookings' },
      { title: 'Completed Bookings', value: '8', icon: BookIcon, color: 'bg-green-50 text-green-500' },
      { title: 'Available Services', value: '48', icon: BriefcaseIcon, color: 'bg-blue-50 text-blue-500' },
      { title: 'Saved Services', value: '5', icon: BriefcaseIcon, color: 'bg-purple-50 text-purple-500' },
    ],
  };

  const stats = Object.keys(roleStats).find((role) => hasRole(role)) ? roleStats[user.role] : [];
  const welcomeMessages = {
    super_admin: 'Monitor your platform performance',
    service_admin: 'Manage your services and drivers',
    driver: 'Track your assigned bookings',
    user: 'Book and manage your services',
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {user.name}</h1>
        <p className="text-muted-foreground mt-1">{welcomeMessages[user.role] || ''}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="p-4 rounded-lg shadow bg-white hover:shadow-lg cursor-pointer" onClick={() => stat.link && navigate(stat.link)}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            {stat.link && (
              <div className="mt-4 pt-4 border-t flex items-center text-sm text-primary">
                <span>View details</span>
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;