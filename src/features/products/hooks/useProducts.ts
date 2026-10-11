import { useCallback, useEffect, useState } from 'react';
import { Product } from '../types/product.types';
import { productService } from '../services/productService';
import { getErrorMessage } from '../../../utils/getErrorMessage';

interface UseProductsResult {
  products: Product[];
  total: number;
  isLoading: boolean;
  error: string | null;
  reload: () => void;
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [total, setTotal] = useState(0);

  const reload = useCallback(() => {
    setReloadKey((current) => current + 1);
  }, []);
  
  useEffect(() => {
    let isActive = true;
    async function loadProducts() {
      setIsLoading(true);
      setError(null);
      try {
        const result = await productService.getProducts();
        if (isActive) setProducts(result.products);
        setTotal(result.total)
      } catch (err: unknown) {
        if (isActive) setError(getErrorMessage(err));
      } finally {
        if (isActive) setIsLoading(false);
      }
    }
    void loadProducts();
      return () => {
      isActive = false;
    };
  }, [reloadKey]);
  return { products, total, isLoading, error, reload };
}