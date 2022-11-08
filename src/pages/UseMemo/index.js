import { useState, useRef, useEffect, useMemo } from "react";

const UseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  const refName = useRef();
  const handleProduct = () => {
    setProduct((pre) => [...pre, { name, price: +price }]);
    setName("");
    setPrice("");
    refName.current.focus();
  };

  const total = useMemo(() => {
    const result = product.reduce((rs, value) => {
      console.log("re-render");
      return rs + value.price;
    }, 0);
    return result
  }, [product]);

  return (
    <>
      <h1>UseMemo</h1>
      <input
        ref={refName}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price"
      />
      <button onClick={handleProduct}>Add</button>
      <h2>Total: {total}</h2>
      <ul>
        {product.map((value, index) => {
          return (
            <li key={index}>
              {value.name} - {value.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { UseMemo };
