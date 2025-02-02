import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center gap-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5635222d8ba20a93bf04ff341fd950fcce8882a5476f18cfcdf682e0d6a18de6"
          alt="Logo"
          className="w-8 h-8"
        />
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <Button variant="ghost" size="icon">
        <Menu className="w-6 h-6" />
      </Button>
    </header>
  );
};