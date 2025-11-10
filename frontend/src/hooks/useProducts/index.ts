import { useEffect, useState } from 'react';
import { configs } from '../../utils/constants';

interface Response {
  total: number;
  pageSize: number;
  totalPages: number;
  products: Product[];
}

export default function useProducts() {
  const [products, setProducts] = useState<Response>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${configs.api}/products`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data[0] || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
