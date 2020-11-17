import React from 'react'
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Layout
