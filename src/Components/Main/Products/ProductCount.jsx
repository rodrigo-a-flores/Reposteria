function ProductCount( {addToCart, handleAdd, handleRemove} ) {
    
    return (
        <div>
            <div className="count">
                <button onClick={handleRemove}>-</button>
                <span>{addToCart}</span>
                <button onClick={handleAdd}>+</button>
            </div>            
            <button className="add-to-cart">Add to cart</button>
        </div>
    )
}

export default ProductCount