import { useState, useEffect } from 'react';
import { getProducts } from '../../../assets/js/main.js';
import ProductList from './ProductList.jsx';
import './productStyle.css';

function ProductListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            if (data) {
                setProducts(data.productList);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <ProductList products={products} />
        </>
    );
}

export default ProductListContainer;
