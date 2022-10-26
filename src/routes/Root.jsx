import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Main from '../main/Main';

function Root() {
    return (
        <>
            <Header/>
            <Main outlet={<Outlet />}/>
        </>
    );
}

export default Root;