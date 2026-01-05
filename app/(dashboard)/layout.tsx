// import React from 'react';




// const layout = () => {
//     return (
//         <div>
//             Dashboard Layout
//         </div>
//     );
// };

// export default layout;






import Sidebar from "@/components/layout/Sidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  );
}






