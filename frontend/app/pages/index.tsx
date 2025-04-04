import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, User } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Maev Store</h1>
        <div className="flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link to="/shop" className="text-gray-600 hover:text-black">Loja</Link>
          <Link to="/about" className="text-gray-600 hover:text-black">Sobre Nós</Link>
          <Link to="/contact" className="text-gray-600 hover:text-black">Contato</Link>
        </div>
        <div className="flex items-center gap-4">
          <Search className="text-gray-600 hover:text-black cursor-pointer" />
          <ShoppingCart className="text-gray-600 hover:text-black cursor-pointer" />
          <User className="text-gray-600 hover:text-black cursor-pointer" />
        </div>
      </nav>

      {/* Banner Principal */}
      <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{ backgroundImage: "url('/path/to/banner.jpg')" }}>
        Nova Coleção Outono/Inverno
      </div>

      {/* Produtos em Destaque */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Destaques da Temporada</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card de Produto */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/path/to/product.jpg" alt="Produto" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Vestido Elegante</h3>
              <p className="text-gray-500">R$ 149,90</p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                Comprar Agora
              </button>
            </div>
          </div>
          {/* Repetir para outros produtos */}
        </div>
      </section>
    </div>
  );
}
