import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  const btnClassName = details ? ' bg-yellow-400' : 'bg-blue-400';

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} width={100} height={100} alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price} &euro;</span>
      <button
        className={`py-2 px-4 border rounded-full ${btnClassName}`}
        onClick={() => setDetails(!details)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
          <p className="text-center font-semibold ">
            Rate: <span>{product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};
