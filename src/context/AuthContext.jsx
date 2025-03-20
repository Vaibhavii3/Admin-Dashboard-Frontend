
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

// Mock user data - in a real app, this would come from your backend
const mockUsers = [
  { id: 1, email: 'superadmin@example.com', password: 'password', role: 'super_admin', name: 'Super Admin' },
  { id: 2, email: 'serviceadmin@example.com', password: 'password', role: 'service_admin', name: 'Service Admin' },
  { id: 3, email: 'driver@example.com', password: 'password', role: 'driver', name: 'John Driver' },
  { id: 4, email: 'user@example.com', password: 'password', role: 'user', name: 'Jane User' },
];

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (email, password) => {
    setLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      const foundUser = mockUsers.find(
        (u) => u.email === email && u.password === password
      );
      
      if (foundUser) {
        // Remove password before storing
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        toast.success(`Welcome back, ${foundUser.name}`);
        navigate('/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
      
      setLoading(false);
    }, 800);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.info('You have been logged out');
    navigate('/login');
  };

  // Check if user has a specific role
  const hasRole = (roles) => {
    if (!user) return false;
    if (typeof roles === 'string') return user.role === roles;
    return roles.includes(user.role);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
