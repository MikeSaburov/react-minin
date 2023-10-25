import { IProduct } from '../models';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} width={100} height={100} alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price} &euro;</span>
      <button className="py-2 px-4 border bg-yellow-400">Show Details</button>
      {/* <p>{product.description}</p> */}
    </div>
  );
};
