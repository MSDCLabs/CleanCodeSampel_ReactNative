import { apiClient } from '../../../api/client';
import {
  ProductsResponse,
} from '../types/product.types';

export const productService = {
  async getProducts(): Promise<ProductsResponse> {
    const response = await apiClient.get<ProductsResponse>(
    '/products',
    { params: { limit: 20 } },
    );
    return response.data;
  },

  async getProductById(id: number): Promise<ProductsResponse> {
    const response = await apiClient.get<ProductsResponse>(`/products/${id}`);
    return response.data;
  },

};