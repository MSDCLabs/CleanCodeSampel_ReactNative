import React from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AppButton } from '../../../components/AppButton';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { LoadingView } from '../../../components/LoadingView';
import { ProductCard } from '../../../components/ProductCard';
import { useProducts } from '../hooks/useProducts';


export default function ProductScreen() {
  const { products, total, isLoading, error, reload } = useProducts();

  // return (
  //   <View>
  //     <Text style={{ fontSize:12 }}>Daftar Produk</Text>
  //   </View>
  // );

  if (isLoading && products.length === 0) {
    return <LoadingView />;
  }

  if (error && products.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <ErrorMessage message={error} />
        <AppButton label="Coba lagi" onPress={reload} />
      </SafeAreaView>
    );
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4F6F8' }}>

      <View style={{ flexDirection: 'row'}}>
        <View style={{ marginLeft: 10, flex:1 }}>
          <Text style={{ fontSize:24, fontWeight: 'bold' }}>Daftar Produk</Text>
        </View>
        <View style={{ flex:1, alignItems: 'flex-end', marginRight: 10 }}>
          <Text style={{ fontSize:24, fontWeight: 'bold',}}>{total} Items</Text>
        </View>
      </View>

      {error ? <ErrorMessage message={error} /> : null}
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProductCard product={item} />}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={reload} />}
        ListEmptyComponent={
          <View style={{ padding: 24, alignItems: 'center' }}>
            <Text>Belum ada produk.</Text>
          </View>}/>
    </SafeAreaView>
  );
}