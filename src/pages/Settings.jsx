
// import React from 'react';
// import DashboardLayout from '@/components/layout/Dashboard';
// import { 
//   Card, 
//   CardHeader, 
//   CardTitle, 
//   CardDescription, 
//   CardContent, 
//   CardFooter 
// } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import Button from '@/components/ui/Button';
// import { useAuth } from '@/context/AuthContext';
// import { 
//   Tabs, 
//   TabsContent, 
//   TabsList, 
//   TabsTrigger 
// } from '@/components/ui/tabs';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { UserIcon, KeyIcon, BellIcon } from 'lucide-react';

// const Settings = () => {
//   const { user } = useAuth();

//   return (
//     <DashboardLayout>
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
//         <p className="text-muted-foreground mt-1">Manage your account settings and preferences</p>
//       </div>

//       <Tabs defaultValue="profile" className="w-full">
//         <TabsList className="mb-6">
//           <TabsTrigger value="profile" className="flex items-center">
//             <UserIcon className="mr-2 h-4 w-4" />
//             Profile
//           </TabsTrigger>
//           <TabsTrigger value="security" className="flex items-center">
//             <KeyIcon className="mr-2 h-4 w-4" />
//             Security
//           </TabsTrigger>
//           <TabsTrigger value="notifications" className="flex items-center">
//             <BellIcon className="mr-2 h-4 w-4" />
//             Notifications
//           </TabsTrigger>
//         </TabsList>
        
//         <TabsContent value="profile">
//           <Card>
//             <CardHeader>
//               <CardTitle>Profile Information</CardTitle>
//               <CardDescription>
//                 Update your account profile information and settings
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
//                 <div className="flex-1 space-y-4">
//                   <FormItem>
//                     <FormLabel>Full Name</FormLabel>
//                     <FormControl>
//                       <Input defaultValue={user?.name} />
//                     </FormControl>
//                   </FormItem>
                  
//                   <FormItem>
//                     <FormLabel>Email Address</FormLabel>
//                     <FormControl>
//                       <Input defaultValue="user@example.com" type="email" />
//                     </FormControl>
//                   </FormItem>
                  
//                   <FormItem>
//                     <FormLabel>Phone Number</FormLabel>
//                     <FormControl>
//                       <Input defaultValue="(555) 123-4567" type="tel" />
//                     </FormControl>
//                   </FormItem>
//                 </div>
                
//                 <div className="flex-1 space-y-4">
//                   <FormItem>
//                     <FormLabel>Bio</FormLabel>
//                     <FormControl>
//                       <Textarea 
//                         placeholder="Tell us about yourself" 
//                         className="min-h-32"
//                         defaultValue=""
//                       />
//                     </FormControl>
//                     <FormDescription>
//                       This will be displayed on your profile
//                     </FormDescription>
//                   </FormItem>
                  
//                   <FormItem>
//                     <FormLabel>Role</FormLabel>
//                     <FormControl>
//                       <Input 
//                         value={user?.role?.replace('_', ' ')} 
//                         disabled 
//                         className="bg-muted/50"
//                       />
//                     </FormControl>
//                     <FormDescription>
//                       Your role cannot be changed
//                     </FormDescription>
//                   </FormItem>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="flex justify-end">
//               <Button>Save Changes</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="security">
//           <Card>
//             <CardHeader>
//               <CardTitle>Security Settings</CardTitle>
//               <CardDescription>
//                 Update your password and security preferences
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="space-y-4">
//                 <FormItem>
//                   <FormLabel>Current Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" />
//                   </FormControl>
//                 </FormItem>
                
//                 <FormItem>
//                   <FormLabel>New Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" />
//                   </FormControl>
//                 </FormItem>
                
//                 <FormItem>
//                   <FormLabel>Confirm New Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" />
//                   </FormControl>
//                 </FormItem>
//               </div>
//             </CardContent>
//             <CardFooter className="flex justify-end">
//               <Button>Update Password</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
        
//         <TabsContent value="notifications">
//           <Card>
//             <CardHeader>
//               <CardTitle>Notification Preferences</CardTitle>
//               <CardDescription>
//                 Choose how you want to be notified
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between py-3 border-b">
//                   <div>
//                     <h3 className="text-sm font-medium">Email Notifications</h3>
//                     <p className="text-sm text-muted-foreground">
//                       Receive email updates about your account activity
//                     </p>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Button variant="outline" size="sm">Enabled</Button>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center justify-between py-3 border-b">
//                   <div>
//                     <h3 className="text-sm font-medium">SMS Notifications</h3>
//                     <p className="text-sm text-muted-foreground">
//                       Receive text messages for booking updates
//                     </p>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Button variant="outline" size="sm">Disabled</Button>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center justify-between py-3">
//                   <div>
//                     <h3 className="text-sm font-medium">Push Notifications</h3>
//                     <p className="text-sm text-muted-foreground">
//                       Receive push notifications on your mobile device
//                     </p>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Button variant="outline" size="sm">Enabled</Button>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter className="flex justify-end">
//               <Button>Save Preferences</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </DashboardLayout>
//   );
// };

// export default Settings;
