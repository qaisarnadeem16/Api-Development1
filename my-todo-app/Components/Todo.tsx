import React, { useState } from 'react';

type Product = {
  name: string;
  price: number;
  image: string;
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>('');

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProducts([...products, { name, price, image }]);
    setName('');
    setPrice(0);
    setImage('');
  };

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
