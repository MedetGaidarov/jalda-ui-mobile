import React from 'react';
import styles from './Product.module.css';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, imageUrl }) => {
  return (
    <div className={styles.product}>
      <img className={styles.image} src={imageUrl} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;