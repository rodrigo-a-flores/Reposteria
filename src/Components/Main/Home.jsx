import React from 'react';
import ProductCard from './ProductCard';
import Navbar from '../Header/Navbar';
import '../../App.css';

const products = [
    {
        id: 1,
        image: '/product1.jpg',
        name: 'Producto 1',
        description: 'Descripción breve del producto 1.',
        price: 100,
        detailsLink: '/product/1',
    },
    {
        id: 2,
        image: '/product2.jpg',
        name: 'Producto 2',
        description: 'Descripción breve del producto 2.',
        price: 200,
        detailsLink: '/product/2',
    },
    {
        id: 3,
        image: '/product3.jpg',
        name: 'Producto 3',
        description: 'Descripción breve del producto 3.',
        price: 150,
        detailsLink: '/product/3',
    }
];

function Home() {
    return (
        <>
            <Navbar username={"Test"}/>
            <div className="home">            
                <h1 className="home-title">Galería de Productos</h1>
                <div className="product-gallery">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
            
        </>
    );
}

export default Home