import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Layout.css'

const Layout = (props) => {
    return (
    <>  
        <Navbar username={props.username}/>
        <div className="LayoutContainer">
        {props.children}
        </div>
        <Footer />
    </>
    )};

export default Layout;