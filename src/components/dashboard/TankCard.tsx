import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TankCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tanque Lluvia</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ae6e1285cc718cabe684bb633692beb0b368daa7ee6e4ef52056d78282a93f"
              alt="Storage meter"
              className="w-48 h-48"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm text-gray-600">Almacenamiento</span>
              <span className="text-2xl font-semibold">0%</span>
            </div>
          </div>
          <p className="text-center text-gray-600">
            Hay un total de 80 litros de agua
          </p>
        </div>
      </CardContent>
    </Card>
  );
};