import React from 'react';
import Order from '../Order/Order';
import styles from './OrderList.module.css';

interface OrderData {
  id: number;
  customerName: string;
  totalAmount: number;
  date: string;
}

interface OrdersListProps {
  orders: OrderData[];
}

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  return (
    <div className={styles.ordersList}>
      {orders.map((order) => (
        <Order
          key={order.id}
          id={order.id}
          customerName={order.customerName}
          totalAmount={order.totalAmount}
          date={order.date}
        />
      ))}
    </div>
  );
};

export default OrdersList;