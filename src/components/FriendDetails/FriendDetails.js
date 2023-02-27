import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css';
const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, phone, website, address,company} = friend;
    // console.log(friend);
    return (
        <div className='friendDetails'>
            <h1>Details about:{name} page</h1>
            <h1> Company name :{company.name} </h1>
            <p>Call him/her:{phone}</p>
            <p> website:{website}</p>
            <p> address:{address.street} suite: {address.suite}  zip code:{address.zipcode}</p>
            <h2> city : {address.city}</h2>
            <h2>Everything you need to know about this</h2>
        </div>
    );
};

export default FriendDetails;