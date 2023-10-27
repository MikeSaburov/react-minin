import { useEffect, useState } from 'react';
import { Product } from './components/Product';
import axios, { Axios, AxiosError } from 'axios';
import { IProduct } from './models';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProducts() {
    try {
      setError('');
      setIsLoading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/dproducts?limit=10'
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
