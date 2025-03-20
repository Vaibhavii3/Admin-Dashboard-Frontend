import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { UserPlus, Search, Edit, Trash2 } from 'lucide-react';

const ServiceAdmins = () => {
  const { hasRole } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const serviceAdmins = [
    { id: 1, name: 'Jane Smith', email: 'jane@example.com', services: 8, date: '2023-05-12' },
    { id: 2, name: 'John Doe', email: 'john@example.com', services: 5, date: '2023-06-18' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', services: 12, date: '2023-04-22' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', services: 3, date: '2023-07-09' },
    { id: 5, name: 'Robert Brown', email: 'robert@example.com', services: 7, date: '2023-03-15' },
  ];

  useEffect(() => {
    if (!hasRole('super_admin')) {
      navigate('/dashboard');
    }
  }, [hasRole, navigate]);

  const filteredAdmins = serviceAdmins.filter(admin => 
    admin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    admin.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Service Admins</h1>
      <p className="text-gray-600 mt-1">Manage service administrators on your platform</p>
      
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold">All Service Admins</h2>
            <p className="text-gray-500">You have {serviceAdmins.length} total service admins.</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <UserPlus className="mr-2 h-5 w-5" /> Add Admin
          </button>
        </div>
        
        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="border rounded w-full pl-10 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Services</th>
                <th className="p-3 text-left">Created</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.length > 0 ? (
                filteredAdmins.map((admin) => (
                  <tr key={admin.id} className="border-t">
                    <td className="p-3">{admin.name}</td>
                    <td className="p-3">{admin.email}</td>
                    <td className="p-3">{admin.services}</td>
                    <td className="p-3">{new Date(admin.date).toLocaleDateString()}</td>
                    <td className="p-3 text-right flex gap-2 justify-end">
                      <button className="border rounded px-2 py-1">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="border rounded px-2 py-1 text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    No service admins found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="text-sm text-gray-500 mt-4">
          Showing {filteredAdmins.length} of {serviceAdmins.length} service admins
        </div>
      </div>
    </div>
  );
};

export default ServiceAdmins;