import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../../assets/js/main.js';
import ProductDetails from './ProductDetails.jsx';


function ProductDetailsContainer() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProductById = async () => {
            if (id) {
                const data = await getProductsById(id);
                if (data) {
                    setItem(data.data);
                }
            }
        };
        fetchProductById();
    }, [id]);

    return (
        <div className='container'>
            {item && <ProductDetails item={item} key={item.id} />}
        </div>
    );
}

export default ProductDetailsContainer;
