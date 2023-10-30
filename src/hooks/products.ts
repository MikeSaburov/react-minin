import { useEffect, useState } from 'react';
import axios, { Axios, AxiosError } from 'axios';
import { IProduct } from '../models';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProducts() {
    try {
      setError('');
      setIsLoading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=10'
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

  return { products, error, isLoading };
};
