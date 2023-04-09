import React from 'react';
import styles from './Order.module.css';

interface OrderProps {
  id: number;
  customerName: string;
  totalAmount: number;
  date: string;
}

const Order: React.FC<OrderProps> = ({ id, customerName, totalAmount, date }) => {
  return (
    <div className={styles.order}>
      <h3 className={styles.orderId}>Order #{id}</h3>
      <p className={styles.customerName}>Customer: {customerName}</p>
      <p className={styles.totalAmount}>Total Amount: ${totalAmount.toFixed(2)}</p>
      <p className={styles.date}>Date: {date}</p>
    </div>
  );
};

export default Order;