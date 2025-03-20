
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ServiceAdmins from "./pages/ServiceAdmins";
import Services from "./pages/Services";
import Drivers from "./pages/Drivers";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import SystemOverview from "./pages/SystemOverview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/service-admins" element={<ServiceAdmins />} />
            {/* <Route path="/dashboard/services" element={<Services />} /> */}
            <Route path="/dashboard/drivers" element={<Drivers />} />
            {/* <Route path="/dashboard/bookings" element={<Bookings />} /> */}
            {/* <Route path="/dashboard/settings" element={<Settings />} /> */}
            {/* <Route path="/dashboard/system" element={<SystemOverview />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
