import React from 'react';
import { View, StyleSheet } from 'react-native';
import OrderList from '../../components/OrderList/OrderList';

const mockOrders = [
  {
    id: 1,
    customer: 'John Doe',
    total: 25.99,
    status: 'Shipped',
  },
  {
    id: 2,
    customer: 'Jane Smith',
    total: 15.99,
    status: 'Processing',
  },
  // Add more orders as needed
];

const OrdersScreen: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <OrderList orders={mockOrders} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default OrdersScreen;
