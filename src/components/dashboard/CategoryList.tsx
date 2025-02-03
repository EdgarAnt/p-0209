export const CategoryList = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-full">
      <h3 className="text-lg font-semibold mb-4">Categorías de Agua</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm">
            Categoría 1: Agua pura o con bajo contenido de minerales y metales.
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm">
            Categoría 2: Agua con características de agua tratada.
          </p>
        </div>
      </div>
    </div>
  );
};