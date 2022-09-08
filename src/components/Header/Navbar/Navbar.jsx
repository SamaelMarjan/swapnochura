import React from "react";
import { Link } from "react-router-dom";

import './navbar.css';

export default function Navbar () {
    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <Link to='/'>link01</Link>
                    <Link to='/link'>link02</Link>
                    <Link to='/link'>link03</Link>
                    <Link to='/link'>link04</Link>
                    <Link to='/link'>link05</Link>
                    <Link to='/link'>link06</Link>
                    <Link to='/link'>link07</Link>
                    <Link to='/link'>link08</Link>
                    <Link to='/link'>link09</Link>
                    <Link to='/link'>link10</Link>
                </div>
            </div>
        </>
    );
}