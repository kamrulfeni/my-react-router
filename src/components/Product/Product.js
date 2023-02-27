import React from 'react';
import './Product.css';
const product = ({product}) => {
    const {id,albumId, title, thumbnailUrl} = product;
    return (
        <div className='product'>
            <h2>title: {title}</h2>
            <p>id :{id}</p>
            <h4> albumId:{albumId}</h4>
            <p>thumbnailUrl:{thumbnailUrl}</p>
        </div>
    );
};

export default product;