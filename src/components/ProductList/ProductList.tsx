import React from 'react';
import Product from '../Product/Product';
import styles from './ProductList.module.css';

interface ProductData {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductListProps {
  products: ProductData[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;