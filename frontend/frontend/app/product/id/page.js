export default function ProductPage({ params }) {
    return (
      <div>
        <h1>Detalhes do Produto {params.id}</h1>
        <p>Informações detalhadas sobre o produto.</p>
      </div>
    );
  }