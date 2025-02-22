import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LabCard = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f97d6d8f682a8424ed142dc86fffa966691403a45cb7dbb619659217633680c"
          alt="Lab icon"
          className="w-10 h-10"
        />
        <span className="text-lg font-medium">MARKIIlab</span>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
          <DropdownMenuItem>Editar laboratorio</DropdownMenuItem>
          <DropdownMenuItem>Eliminar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};