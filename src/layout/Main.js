import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header'
const main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default main;