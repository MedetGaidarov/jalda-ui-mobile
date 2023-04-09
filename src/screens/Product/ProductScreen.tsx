import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList/ProductList';

const mockProducts = [
  { id: 1, name: 'Product 2', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
  // Add more products as needed
];

const ProductsScreen: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <ProductList products={mockProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default ProductsScreen;
