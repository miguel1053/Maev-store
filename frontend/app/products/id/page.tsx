import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { id } = params;

  // Simulação de um banco de dados (substitua por API real depois)
  const products = [
    { id: "1", name: "Camisa Feminina", price: "R$ 99,90", description: "Camisa confortável de algodão." },
    { id: "2", name: "Vestido Elegante", price: "R$ 149,90", description: "Vestido longo ideal para eventos." },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound(); // Retorna a página 404 se o produto não existir
  }

  return (
    <main className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <strong>{product.price}</strong>
    </main>
  );
};

export default ProductPage;
