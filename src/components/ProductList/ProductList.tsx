import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Product from '../Product/Product';

interface ProductData {
  id: number;
  name: string;
  price: number;
}

interface ProductListProps {
  products: ProductData[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ScrollView contentContainerStyle={styles.productListContainer}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productListContainer: {
    flexGrow: 1,
    padding: 16,
  },
});

export default ProductList;