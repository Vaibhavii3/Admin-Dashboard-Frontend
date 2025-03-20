// import React, { useState } from 'react';
// import DashboardLayout from '../components/layout/Dashboard';
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/table';
// import { Card, CardHeader, CardTitle, CardContent } from '../components/card';
// import { Input } from '../components/input';
// import { useAuth } from '../context/AuthContext';
// import { Search } from 'lucide-react';

// const Bookings = () => {
//   const { hasRole, user } = useAuth();
//   const [searchTerm, setSearchTerm] = useState('');

//   // Mock data - would come from API
//   const bookings = [
//     { id: 'BK-1001', service: 'Regular Car Service', customer: 'Emma Thompson', driver: 'Alex Johnson', date: '2023-09-12T10:00:00', status: 'completed', amount: 89.99, payment: 'paid' },
//     { id: 'BK-1002', service: 'Oil Change', customer: 'David Wilson', driver: 'Maria Garcia', date: '2023-09-15T14:30:00', status: 'in_progress', amount: 49.99, payment: 'paid' },
//     { id: 'BK-1003', service: 'Full Vehicle Inspection', customer: 'Michael Brown', driver: 'James Wilson', date: '2023-09-18T09:00:00', status: 'scheduled', amount: 129.99, payment: 'pending' },
//     { id: 'BK-1004', service: 'Brake Service', customer: 'Sophia Davis', driver: 'Unassigned', date: '2023-09-20T11:00:00', status: 'pending', amount: 149.99, payment: 'pending' },
//     { id: 'BK-1005', service: 'Wheel Alignment', customer: 'Oliver Martinez', driver: 'Linda Thompson', date: '2023-09-14T13:15:00', status: 'cancelled', amount: 79.99, payment: 'refunded' },
//   ];

//   const filteredBookingsByRole = () => {
//     if (hasRole('user')) {
//       return bookings.filter(booking => booking.customer.includes(user?.name || ''));
//     } else if (hasRole('driver')) {
//       return bookings.filter(booking => booking.driver.includes(user?.name || ''));
//     } else {
//       return bookings;
//     }
//   };

//   const roleFilteredBookings = filteredBookingsByRole();

//   const filteredBookings = roleFilteredBookings.filter(booking => 
//     booking.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     booking.customer.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <DashboardLayout>
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
//       </div>

//       <Card className="mb-8">
//         <CardHeader className="flex flex-row items-center justify-between">
//           <div>
//             <CardTitle>All Bookings</CardTitle>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="mb-4 flex items-center gap-2">
//             <div className="relative flex-1">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input 
//                 placeholder="Search bookings..." 
//                 className="pl-8" 
//                 value={searchTerm} 
//                 onChange={(e) => setSearchTerm(e.target.value)} 
//               />
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </DashboardLayout>
//   );
// };

// export default Bookings;
