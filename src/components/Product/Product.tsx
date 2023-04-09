import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
  },
});

export default Product;