import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem-vindo à Maev Store</h1>
        <div className="flex justify-center">
          <img
            src="/images/modelo.jpg"
            alt="Moda Feminina"
            className="rounded-lg shadow-lg w-1/2 object-cover"
          />
        </div>
      </div>
    </main>
  );
}

