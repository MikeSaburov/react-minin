import { useEffect, useState } from 'react';
import { Product } from './components/Product';
import axios from 'axios';
import { IProduct } from './models';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    setIsLoading(true);
    const response = await axios.get<IProduct[]>(
      'https://fakestoreapi.com/products?limit=10'
    );
    setProducts(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <p className="text-center">Loading...</p>}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
