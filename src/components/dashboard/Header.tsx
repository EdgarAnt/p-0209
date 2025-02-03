import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white border-b px-6 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5635222d8ba20a93bf04ff341fd950fcce8882a5476f18cfcdf682e0d6a18de6"
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
};