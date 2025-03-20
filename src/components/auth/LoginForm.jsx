
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { LockIcon, UserIcon } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="w-full max-w-md animate-slide-up">
      <Card glass className="overflow-hidden">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-1">Welcome Back</h2>
          <p className="text-muted-foreground">Sign in to continue to the platform</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium"
              >
                Password
              </label>
              <a 
                href="#" 
                className="text-sm text-primary hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  alert('This would trigger password reset in a real app');
                }}
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full" 
              isLoading={loading}
            >
              Sign In
            </Button>
          </div>
        </form>

        <div className="mt-6 py-4 px-4 -mx-6 -mb-6 bg-muted/50 border-t">
          <div className="text-center text-sm">
            <p>Demo accounts (all use password: "password"):</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className="text-xs p-2 bg-white/80 rounded border">
                <div className="font-semibold">Super Admin</div>
                <div className="text-muted-foreground truncate">superadmin@example.com</div>
              </div>
              <div className="text-xs p-2 bg-white/80 rounded border">
                <div className="font-semibold">Service Admin</div>
                <div className="text-muted-foreground truncate">serviceadmin@example.com</div>
              </div>
              <div className="text-xs p-2 bg-white/80 rounded border">
                <div className="font-semibold">Driver</div>
                <div className="text-muted-foreground truncate">driver@example.com</div>
              </div>
              <div className="text-xs p-2 bg-white/80 rounded border">
                <div className="font-semibold">User</div>
                <div className="text-muted-foreground truncate">user@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
