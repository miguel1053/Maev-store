import ProductManagement from "../components/ProductManagement";

export default function AdminPanel() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Painel Administrativo</h1>
      <ProductManagement />
    </div>
  );
}
