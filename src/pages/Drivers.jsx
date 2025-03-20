import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { UserPlus, Search, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';

const Drivers = () => {
  const { hasRole } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const drivers = [
    { id: 1, name: 'Alex Johnson', phone: '(555) 123-4567', status: 'available', rating: 4.8, completedBookings: 125, assignedBookings: 2 },
    { id: 2, name: 'Maria Garcia', phone: '(555) 234-5678', status: 'busy', rating: 4.9, completedBookings: 98, assignedBookings: 3 },
    { id: 3, name: 'James Wilson', phone: '(555) 345-6789', status: 'offline', rating: 4.7, completedBookings: 156, assignedBookings: 0 },
    { id: 4, name: 'Linda Thompson', phone: '(555) 456-7890', status: 'available', rating: 4.6, completedBookings: 82, assignedBookings: 1 },
    { id: 5, name: 'Robert Miller', phone: '(555) 567-8901', status: 'busy', rating: 4.9, completedBookings: 201, assignedBookings: 2 }
  ];

  if (!hasRole('service_admin')) {
    navigate('/dashboard');
    return null;
  }

  const filteredDrivers = drivers.filter(driver => 
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    driver.phone.includes(searchTerm)
  );

  const getStatusBadge = (status) => {
    switch(status) {
      case 'available':
        return <span className="text-green-600">✔ Available</span>;
      case 'busy':
        return <span className="text-yellow-600">⚡ On duty</span>;
      case 'offline':
        return <span className="text-gray-600">❌ Offline</span>;
      default:
        return status;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Drivers</h1>
      <p className="text-gray-600">Manage your service drivers</p>

      <div className="my-4 flex items-center gap-2">
        <Search className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search by name or phone..."
          className="border p-2 rounded w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Rating</th>
            <th className="border p-2">Assigned</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.length > 0 ? (
            filteredDrivers.map(driver => (
              <tr key={driver.id} className="text-center">
                <td className="border p-2">{driver.name}</td>
                <td className="border p-2">{driver.phone}</td>
                <td className="border p-2">{getStatusBadge(driver.status)}</td>
                <td className="border p-2">⭐ {driver.rating}</td>
                <td className="border p-2">{driver.assignedBookings}</td>
                <td className="border p-2 flex justify-center gap-2">
                  <button className="p-1 bg-blue-500 text-white rounded"><Edit className="h-4 w-4" /></button>
                  <button className="p-1 bg-red-500 text-white rounded"><Trash2 className="h-4 w-4" /></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center p-4 text-gray-500">No drivers found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Drivers;