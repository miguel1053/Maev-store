// components/Navbar.tsx

import * as React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-lg font-bold cursor-pointer">Maev Store</h1>
        </Link>
        <div className="space-x-4">
          <Link href="/produtos" className="hover:underline">Produtos</Link>
          <Link href="/carrinho" className="hover:underline">Carrinho</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
        </div>
      </div>
    </nav>
  );
}
