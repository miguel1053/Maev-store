import Link from "next/link";

const products = [
  { id: 1, name: "Blusa Feminina", price: 79.99, image: "/images/top-branco.jpg" },
  { id: 2, name: "Vestido Casual", price: 119.99, image: "/images/vestido-preto.jpg" },
  { id: 3, name: "Calça Jeans", price: 99.99, image: "/images/saia-rosa.jpg" },
];

const ProductsPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Nossos Produtos</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">R$ {product.price.toFixed(2)}</p>
                <Link href={`/products/${product.id}`} className="btn btn-primary">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
