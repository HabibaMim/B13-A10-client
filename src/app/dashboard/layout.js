import DashboardSidebar from "@/components/dashboard/DashboardSidebar";


export default function DashboardLayout({ children }) {
  return (
   <div className="flex h-screen bg-background">
    <div className="flex flex-1 overflow-hidden">
       <DashboardSidebar></DashboardSidebar>
    
    <div data-theme="night" className="flex-1 overflow-y-auto">
         
        <main  className="P-5">
          
            {children}
        </main>
    </div>
    </div>
   </div>
  );
}