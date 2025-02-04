import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const TankCard = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      {/* Primera tarjeta */}
      <Card className="w-full md:w-[350px] h-[300px] md:mr-4 flex-shrink-0">
        <CardHeader className="flex items-center justify-between pb-2">
          <p>card1</p>
        </CardHeader>
        {/* Contenido adicional de card1 */}
      </Card>

      {/* Segunda tarjeta */}
      <Card className="w-full md:w-[1000px] h-[300px] mt-4 md:mt-0 md:ml-auto flex-shrink-0">
        <CardHeader className="flex items-center justify-between pb-2">
          <p>card2</p>
        </CardHeader>
        {/* Contenido adicional de card2 */}
      </Card>
    </div>
  );   
};