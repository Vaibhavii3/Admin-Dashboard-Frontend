
// import React, { useState } from 'react';
// import DashboardLayout from '@/components/layout/Dashboard';
// import { 
//   Table, 
//   TableHeader, 
//   TableRow, 
//   TableHead, 
//   TableBody, 
//   TableCell 
// } from '@/components/ui/table';
// import { 
//   Card, 
//   CardHeader, 
//   CardTitle, 
//   CardDescription, 
//   CardContent, 
//   CardFooter 
// } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import Button from '@/components/ui/Button';
// import { useAuth } from '@/context/AuthContext';
// import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
// import { 
//   Tabs, 
//   TabsContent, 
//   TabsList, 
//   TabsTrigger 
// } from '@/components/ui/tabs';

// const Services = () => {
//   const { hasRole } = useAuth();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('all');

//   // Mock data - would come from API
//   const services = [
//     { 
//       id: 1, 
//       name: 'Regular Car Service', 
//       price: 89.99, 
//       duration: '2 hours', 
//       category: 'Maintenance',
//       status: 'active',
//       bookings: 156
//     },
//     { 
//       id: 2, 
//       name: 'Full Vehicle Inspection', 
//       price: 129.99, 
//       duration: '3 hours', 
//       category: 'Inspection',
//       status: 'active',
//       bookings: 98
//     },
//     { 
//       id: 3, 
//       name: 'Oil Change', 
//       price: 49.99, 
//       duration: '30 minutes', 
//       category: 'Maintenance',
//       status: 'active',
//       bookings: 312
//     },
//     { 
//       id: 4, 
//       name: 'Brake Service', 
//       price: 149.99, 
//       duration: '1.5 hours', 
//       category: 'Repair',
//       status: 'inactive',
//       bookings: 64
//     },
//     { 
//       id: 5, 
//       name: 'Wheel Alignment', 
//       price: 79.99, 
//       duration: '1 hour', 
//       category: 'Maintenance',
//       status: 'active',
//       bookings: 87
//     },
//   ];

//   const filteredServices = services
//     .filter(service => 
//       (service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       service.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
//       (activeTab === 'all' || 
//        (activeTab === 'active' && service.status === 'active') ||
//        (activeTab === 'inactive' && service.status === 'inactive'))
//     );

//   const isManager = hasRole(['super_admin', 'service_admin']);

//   return (
//     <DashboardLayout>
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold tracking-tight">Services</h1>
//         <p className="text-muted-foreground mt-1">
//           {isManager ? 'Manage services offered on your platform' : 'Browse available services'}
//         </p>
//       </div>

//       <Card className="mb-8">
//         <CardHeader className="flex flex-row items-center justify-between">
//           <div>
//             <CardTitle>All Services</CardTitle>
//             <CardDescription>
//               {services.filter(s => s.status === 'active').length} active services available
//             </CardDescription>
//           </div>
//           {isManager && (
//             <Button className="flex items-center">
//               <Plus className="mr-2 h-4 w-4" />
//               Add Service
//             </Button>
//           )}
//         </CardHeader>
//         <CardContent>
//           <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
//             <TabsList>
//               <TabsTrigger value="all">All Services</TabsTrigger>
//               <TabsTrigger value="active">Active</TabsTrigger>
//               <TabsTrigger value="inactive">Inactive</TabsTrigger>
//             </TabsList>
//           </Tabs>
            
//           <div className="mb-4 flex items-center gap-2">
//             <div className="relative flex-1">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search services..."
//                 className="pl-8"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="rounded-md border">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Name</TableHead>
//                   <TableHead>Category</TableHead>
//                   <TableHead>Price</TableHead>
//                   <TableHead>Duration</TableHead>
//                   <TableHead>Status</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {filteredServices.length > 0 ? (
//                   filteredServices.map((service) => (
//                     <TableRow key={service.id}>
//                       <TableCell className="font-medium">{service.name}</TableCell>
//                       <TableCell>{service.category}</TableCell>
//                       <TableCell>${service.price.toFixed(2)}</TableCell>
//                       <TableCell>{service.duration}</TableCell>
//                       <TableCell>
//                         <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
//                           service.status === 'active' 
//                             ? 'bg-green-50 text-green-700' 
//                             : 'bg-gray-100 text-gray-700'
//                         }`}>
//                           {service.status}
//                         </span>
//                       </TableCell>
//                       <TableCell className="text-right">
//                         <div className="flex justify-end gap-2">
//                           <Button size="sm" variant="outline">
//                             <Eye className="h-4 w-4" />
//                           </Button>
//                           {isManager && (
//                             <>
//                               <Button size="sm" variant="outline">
//                                 <Edit className="h-4 w-4" />
//                               </Button>
//                               <Button size="sm" variant="outline" className="text-destructive hover:bg-destructive/10">
//                                 <Trash2 className="h-4 w-4" />
//                               </Button>
//                             </>
//                           )}
//                         </div>
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={6} className="text-center py-6 text-muted-foreground">
//                       No services found matching your search.
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </div>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <div className="text-sm text-muted-foreground">
//             Showing {filteredServices.length} of {services.length} services
//           </div>
//         </CardFooter>
//       </Card>
//     </DashboardLayout>
//   );
// };

// export default Services;
