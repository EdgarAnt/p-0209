import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const TankCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f97d6d8f682a8424ed142dc86fffa966691403a45cb7dbb619659217633680c"
            alt="Tank icon"
            className="w-10 h-10"
          />
          <span className="text-lg font-medium">MARKIIlab</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">Tanque 1</span>
              <span className="text-xs text-muted-foreground">
                Última actualización hace 2 minutos
              </span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm font-medium">85%</span>
              <span className="text-xs text-muted-foreground">4,250 L</span>
            </div>
          </div>
          <Progress value={85} />
        </div>
      </CardContent>
    </Card>
  );
};