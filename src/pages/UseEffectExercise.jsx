import React from "react";
import Product from "../components/Product";

// Aula useEffect 2
const UseEffectExercise = () => {
  const [product, setProduct] = React.useState(null);
  const [productInfo, setProductInfo] = React.useState(null);

  React.useEffect(() => {
    const localProduct = window.localStorage.getItem("product");

    if (localProduct !== null) {
      setProduct(localProduct);
    }
  }, []);

  React.useEffect(() => {
    if (product !== null) {
      window.localStorage.setItem("product", product);

      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((response) => response.json())
        .then((json) => setProductInfo(json));
    }
  }, [product]);

  function handleClick(event) {
    setProduct(event.target.innerText);
  }

  return (
    <>
      {product && <h1>Preferência: {product}</h1>}

      <div style={{ display: "flex", gap: "16px", marginBottom: '24px' }}>
        <button onClick={handleClick}>Notebook</button>
        <button onClick={handleClick}>Smartphone</button>
      </div>

      {productInfo && <Product data={productInfo} />}
    </>
  );
};

export default UseEffectExercise;
