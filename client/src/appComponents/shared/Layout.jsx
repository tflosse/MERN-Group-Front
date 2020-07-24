import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css'

const Layout = (props) => {
    return (
    <div className="Layout-component">  
        <Navbar username={props.username}/>
        <div className="LayoutContainer">
        {props.children}
        </div>
        <Footer />
    </div>
    )};

export default Layout;