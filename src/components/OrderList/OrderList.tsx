import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Order from '../Order/Order';

interface OrderData {
  id: number;
  customer: string;
  total: number;
  status: string;
}

interface OrderListProps {
  orders: OrderData[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <ScrollView contentContainerStyle={styles.orderListContainer}>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  orderListContainer: {
    flexGrow: 1,
    padding: 16,
  },
});

export default OrderList;