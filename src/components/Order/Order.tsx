import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OrderProps {
  order: {
    id: number;
    customer: string;
    total: number;
    status: string;
  };
}

const Order: React.FC<OrderProps> = ({ order }) => {
  return (
    <View style={styles.orderContainer}>
      <Text style={styles.orderTitle}>Order ID: {order.id}</Text>
      <Text style={styles.orderDetails}>Customer: {order.customer}</Text>
      <Text style={styles.orderDetails}>Total: ${order.total.toFixed(2)}</Text>
      <Text style={styles.orderDetails}>Status: {order.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDetails: {
    fontSize: 16,
  },
});

export default Order;