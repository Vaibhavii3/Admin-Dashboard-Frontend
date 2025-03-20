
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import DashboardLayout from '@/components/layout/Dashboard';
// import { 
//   Card, 
//   CardHeader, 
//   CardTitle, 
//   CardDescription, 
//   CardContent 
// } from '@/components/ui/card';
// import { useAuth } from '@/context/AuthContext';
// import { 
//   ChartContainer,
//   ChartLegend,
//   ChartLegendContent,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

// const SystemOverview = () => {
//   const { hasRole } = useAuth();
//   const navigate = useNavigate();

//   // If not super admin, redirect
//   if (!hasRole('super_admin')) {
//     navigate('/dashboard');
//     return null;
//   }

//   // Mock data
//   const bookingsByMonth = [
//     { name: 'Jan', completed: 65, pending: 15, cancelled: 5 },
//     { name: 'Feb', completed: 78, pending: 18, cancelled: 7 },
//     { name: 'Mar', completed: 82, pending: 22, cancelled: 8 },
//     { name: 'Apr', completed: 95, pending: 25, cancelled: 10 },
//     { name: 'May', completed: 110, pending: 28, cancelled: 12 },
//     { name: 'Jun', completed: 135, pending: 32, cancelled: 15 },
//   ];

//   const serviceDistribution = [
//     { name: 'Regular Service', value: 35 },
//     { name: 'Oil Change', value: 25 },
//     { name: 'Inspection', value: 15 },
//     { name: 'Repair', value: 15 },
//     { name: 'Other', value: 10 },
//   ];

//   const userGrowth = [
//     { name: 'Jan', users: 150 },
//     { name: 'Feb', users: 180 },
//     { name: 'Mar', users: 210 },
//     { name: 'Apr', users: 250 },
//     { name: 'May', users: 290 },
//     { name: 'Jun', users: 320 },
//   ];

//   const COLORS = ['#4f46e5', '#0ea5e9', '#8b5cf6', '#10b981', '#f97316'];

//   return (
//     <DashboardLayout>
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
//         <p className="text-muted-foreground mt-1">Platform performance and analytics</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <Card>
//           <CardHeader>
//             <CardTitle>Bookings Growth</CardTitle>
//             <CardDescription>Monthly booking statistics</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ChartContainer className="h-80" config={{}}>
//               <BarChart data={bookingsByMonth} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <ChartTooltip 
//                   content={props => (
//                     <ChartTooltipContent
//                       {...props}
//                       formatter={(value, name) => [`${value} bookings`, name]}
//                     />
//                   )}
//                 />
//                 <Bar dataKey="completed" stackId="a" fill="#10b981" name="Completed" />
//                 <Bar dataKey="pending" stackId="a" fill="#f59e0b" name="Pending" />
//                 <Bar dataKey="cancelled" stackId="a" fill="#ef4444" name="Cancelled" />
//               </BarChart>
//             </ChartContainer>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Service Distribution</CardTitle>
//             <CardDescription>Bookings by service type</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ChartContainer className="h-80" config={{}}>
//               <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                 <Pie
//                   data={serviceDistribution}
//                   cx="50%"
//                   cy="50%"
//                   labelLine={false}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                 >
//                   {serviceDistribution.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <ChartTooltip 
//                   content={props => (
//                     <ChartTooltipContent
//                       {...props}
//                       formatter={(value, name) => [`${value}%`, name]}
//                     />
//                   )}
//                 />
//               </PieChart>
//             </ChartContainer>
//           </CardContent>
//         </Card>
//       </div>

//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle>User Growth</CardTitle>
//           <CardDescription>Platform user acquisition</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <ChartContainer className="h-80" config={{}}>
//             <LineChart data={userGrowth} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <ChartTooltip 
//                 content={props => (
//                   <ChartTooltipContent
//                     {...props}
//                     formatter={(value, name) => [`${value} users`, name]}
//                   />
//                 )}
//               />
//               <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={2} />
//             </LineChart>
//           </ChartContainer>
//         </CardContent>
//       </Card>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>System Health</CardTitle>
//             <CardDescription>Overall system performance</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col space-y-4">
//               <div className="flex justify-between items-center py-2 border-b">
//                 <span className="text-sm">Server Uptime</span>
//                 <span className="font-medium text-green-600">99.9%</span>
//               </div>
//               <div className="flex justify-between items-center py-2 border-b">
//                 <span className="text-sm">API Response Time</span>
//                 <span className="font-medium">120ms</span>
//               </div>
//               <div className="flex justify-between items-center py-2 border-b">
//                 <span className="text-sm">Database Status</span>
//                 <span className="font-medium text-green-600">Healthy</span>
//               </div>
//               <div className="flex justify-between items-center py-2">
//                 <span className="text-sm">Last Backup</span>
//                 <span className="font-medium">Today, 03:00 AM</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Activity Log</CardTitle>
//             <CardDescription>Recent system activities</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col space-y-4">
//               <div className="text-sm border-b pb-2">
//                 <p className="font-medium">New Service Admin Added</p>
//                 <p className="text-xs text-muted-foreground">Today, 10:23 AM</p>
//               </div>
//               <div className="text-sm border-b pb-2">
//                 <p className="font-medium">Database Backup Completed</p>
//                 <p className="text-xs text-muted-foreground">Today, 03:00 AM</p>
//               </div>
//               <div className="text-sm border-b pb-2">
//                 <p className="font-medium">System Update Deployed</p>
//                 <p className="text-xs text-muted-foreground">Yesterday, 08:45 PM</p>
//               </div>
//               <div className="text-sm">
//                 <p className="font-medium">Security Audit Completed</p>
//                 <p className="text-xs text-muted-foreground">Sep 15, 2023</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Platform Statistics</CardTitle>
//             <CardDescription>Key metrics overview</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col space-y-4">
//               <div className="text-sm border-b pb-2 flex justify-between">
//                 <span>Total Users</span>
//                 <span className="font-bold">1,253</span>
//               </div>
//               <div className="text-sm border-b pb-2 flex justify-between">
//                 <span>Service Admins</span>
//                 <span className="font-bold">12</span>
//               </div>
//               <div className="text-sm border-b pb-2 flex justify-between">
//                 <span>Active Drivers</span>
//                 <span className="font-bold">85</span>
//               </div>
//               <div className="text-sm border-b pb-2 flex justify-between">
//                 <span>Total Services</span>
//                 <span className="font-bold">48</span>
//               </div>
//               <div className="text-sm flex justify-between">
//                 <span>Total Bookings</span>
//                 <span className="font-bold">3,421</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default SystemOverview;
