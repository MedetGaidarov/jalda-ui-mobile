import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import styles from './ProductPage.module.css';

const mockProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/150x150?text=Product+1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      imageUrl: "https://via.placeholder.com/150x150?text=Product+2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/150x150?text=Product+3",
    },
    {
      id: 4,
      name: "Product 4",
      price: 39.99,
      imageUrl: "https://via.placeholder.com/150x150?text=Product+4",
    },
    {
      id: 5,
      name: "Product 5",
      price: 59.99,
      imageUrl: "https://via.placeholder.com/150x150?text=Product+5",
    },
  ];
const ProductsPage: React.FC = () => {
  return (
    <div className={styles.productsPage}>
      <h1>Products</h1>
      <ProductList products={mockProducts} />
    </div>
  );
};

export default ProductsPage;