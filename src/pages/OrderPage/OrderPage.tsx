import React, { useEffect, useState } from 'react';
import OrdersList from '../../components/OrderList/OrderList';
import styles from './OrderPage.module.css';
import { fetchOrders } from '../../services/orderService';

const mockOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    totalAmount: 35.50,
    date: '2023-04-01',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    totalAmount: 52.90,
    date: '2023-04-02',
  },
  {
    id: 3,
    customerName: 'Michael Johnson',
    totalAmount: 25.30,
    date: '2023-04-03',
  },
  {
    id: 4,
    customerName: 'Emily Brown',
    totalAmount: 67.10,
    date: '2023-04-04',
  },
  {
    id: 5,
    customerName: 'William Jones',
    totalAmount: 40.20,
    date: '2023-04-05',
  },
];


const OrdersPage: React.FC = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getOrders();
  }, []);
  
  return (
    <div className={styles.ordersPage}>
      <h1>Orders</h1>
      <OrdersList orders={orders} />
    </div>
  );
};

export default OrdersPage;
