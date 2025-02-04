import { Header } from "@/components/dashboard/Header";
import { LabCard } from "@/components/dashboard/LabCard";
import { TankCard } from "@/components/dashboard/TankCard";
import { CategoryList } from "@/components/dashboard/CategoryList";
import { AccountSelector } from "@/components/dashboard/AccountSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Greeting and Account Selector */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-3xl font-bold text-gray-800">Good Evening, Tony!</h2>
            <AccountSelector />
          </div>

          {/* Tank Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <TankCard />
            <CategoryList />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;