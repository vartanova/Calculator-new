import { Calculator } from "./components/Calculator";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-xl font-bold text-gray-800 mb-6">Калькулятор</h1>
        <Calculator />
      </div>
    </div>
  );
};
