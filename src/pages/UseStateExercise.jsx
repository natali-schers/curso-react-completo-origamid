import React from "react";
import Product from '../components/Product';

const UseStateExercise = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(event) {
    setLoading(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );

    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  return (
    <>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: "0.5rem" }} onClick={handleClick}>
        Tablet
      </button>

      {loading && "Carregando..."}

      {!loading && data && <Product data={data} />}
    </>
  );
};

export default UseStateExercise;
