import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Bem-vindo à Maev Store</h1>
        <ProductList />
      </main>
    </div>
  );
}
