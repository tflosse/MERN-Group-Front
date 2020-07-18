import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css'

const Layout = (props) => {
    return (
    <div>
        <Navbar />
        {props.children}
        <Footer />
    </div>
    )};

export default Layout;