import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TankCard = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle>Tanque Lluvia</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Storage Indicator */}
          <div className="relative w-48 h-48">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ae6e1285cc718cabe684bb633692beb0b368daa7ee6e4ef52056d78282a93f"
              alt="Storage meter"
              className="w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm text-gray-600">Almacenamiento</span>
              <span className="text-2xl font-semibold">0%</span>
            </div>
          </div>

          {/* Water Quality Bar */}
          <div className="flex-1 h-48 flex items-center justify-center">
            <div className="w-full h-4 bg-blue-500 rounded-lg" aria-hidden="true" />
          </div>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Hay un total de 80 litros de agua
        </p>
      </CardContent>
    </Card>
  );
};