import { apiClient } from '../../../api/client';
import {
  Product,
  ProductsResponse,
} from '../types/product.types';

export const productService = {
  async getProducts(
    signal?: AbortSignal,
  ): Promise<Product[]> {
    const response = await apiClient.get<ProductsResponse>(
      '/products',
      { signal },
    );

    return response.data.products;
  },
};