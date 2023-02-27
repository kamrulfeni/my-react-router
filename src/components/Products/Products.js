import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div>
            <h4>This is MY products{products.length}</h4>

            <div className='products'>    
            {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                ></Product>)
            }
            </div>

        </div>
    );
};

export default Products;

// {
//     friends.map(friend => <Friend
//     key={friend.id}
//     friend={friend}
//     ></Friend>)
// }