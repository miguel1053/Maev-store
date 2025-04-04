"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o Bootstrap

export default function ProductManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: "Vestido Floral", price: 129.90, image: "/images/vestido.jpg" },
    { id: 2, name: "Blusa de Cetim", price: 99.90, image: "/images/blusa.jpg" },
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  // Função para lidar com o upload de imagem
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Função para adicionar produto
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      alert("Preencha todos os campos!");
      return;
    }

    const imagePath = `/images/${image.name}`;

    // Simula o salvamento no servidor
    setProducts([...products, { id: Date.now(), name, price, image: imagePath }]);

    // Limpa os campos
    setName("");
    setPrice("");
    setImage(null);

    alert("Produto adicionado com sucesso!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Gerenciamento de Produtos</h2>

      {/* Formulário para adicionar produto */}
      <form onSubmit={handleAddProduct} className="card p-4 shadow-sm mb-4">
        <div className="mb-3">
          <label className="form-label">Nome do Produto:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Preço:</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Imagem do Produto:</label>
          <input type="file" className="form-control" onChange={handleImageUpload} />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Adicionar Produto
        </button>
      </form>

      {/* Lista de produtos */}
      <h3 className="mb-3 text-center">Produtos Cadastrados</h3>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">R$ {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
