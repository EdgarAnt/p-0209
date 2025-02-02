import { Header } from "@/components/dashboard/Header";
import { LabCard } from "@/components/dashboard/LabCard";
import { TankCard } from "@/components/dashboard/TankCard";
import { CategoryList } from "@/components/dashboard/CategoryList";
import { Navigation } from "@/components/dashboard/Navigation";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 w-full">
        <Header />
        <Navigation />
        
        <main className="container mx-auto px-4 py-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Good Evening, Tony!</h2>
            <LabCard />
          </section>

          <section className="grid gap-6">
            <TankCard />
            <CategoryList />
          </section>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;