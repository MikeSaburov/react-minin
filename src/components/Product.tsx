import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} width={100} height={100} alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price} &euro;</span>
      <button
        className="py-2 px-4 border bg-yellow-400"
        onClick={() => setDetails(!details)}
      >
        Show Details
      </button>
      {details && <p>{product.description}</p>}
      {/* <p>{product.description}</p> */}
    </div>
  );
};
