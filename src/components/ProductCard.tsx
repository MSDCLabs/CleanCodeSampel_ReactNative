import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { Product } from '../features/products/types/product.types';
type Props = { product: Product };

export function ProductCard({ product }: Props) {
  return (
  <View style={styles.card}>
    <Image source={{ uri: product.thumbnail }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description} numberOfLines={2}>{product.description}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  image: { width: 88, height: 88, borderRadius: 8, backgroundColor: '#EEEEEE' },
  content: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  description: {
    fontSize: 12,
    color: '#666666',
    width:'72%'
  },
  price: { marginTop: 8, fontWeight: '700', color: '#15803D', },
});
