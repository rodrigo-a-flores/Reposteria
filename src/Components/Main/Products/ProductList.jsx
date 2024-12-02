import Product from './Product.jsx';

function ProductList({ products }) {
    return (
        <div className='container-list'>
            <h1>Listado de productos</h1>
            <div className="list">
                {products && products.length > 0 ? (
                    products.map((prod) => (
                        <Product producto={prod} key={prod.id} />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;
