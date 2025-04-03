import ProductList from "../components/ProductList";

export default function ProductsPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nossos Produtos</h1>
      <ProductList />
    </main>
  );
}
