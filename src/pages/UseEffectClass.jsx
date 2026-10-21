import React from "react";
import Product from '../components/Product';

const UseEffectClass = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <>{data && <Product data={data} />}</>;
};

export default UseEffectClass;
