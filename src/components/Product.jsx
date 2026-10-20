const Product = ({data}) => {
  return (
    <div>
      <img src={data.fotos[0].src} style={{maxHeight: '300px'}}/>
      <h1>{data.nome}</h1>
      <h2>{data.descricao}</h2>
      <p>R$ {data.preco}</p>
    </div>
  );
};

export default Product;