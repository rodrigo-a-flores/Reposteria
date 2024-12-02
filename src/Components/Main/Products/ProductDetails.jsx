function ProductDetails( {item} ) {
    
    return (
        <div>
            <section className="product-details">
                <div className="img-container">
                    <img src={item.imageUrl} alt={item.productName} />
                </div>
                <div className="text-container">
                    <h1>{item.productName}</h1>
                    <p>{item.description}</p>
                    <p>S/ {item.price}</p>                    
                </div>
            </section>
        </div>
    )
}

export default ProductDetails