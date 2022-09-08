import React from "react";

import {FiShoppingCart} from 'react-icons/fi';
import {AiOutlineSearch} from 'react-icons/ai'

import './header.css';

export default function Header () {
    return (
        <>
            <div className="head">
                <div className="header">
                    <div className="header_logo">
                        <h2>Swapno_Chura</h2>
                    </div>
                    <div className="header_search">
                        <form className="form">
                        <input className="input" type='search' placeholder="Search for anything" />
                        <AiOutlineSearch className="search_icon" />
                        </form>
                    </div>
                    <div className="sign">
                        <div className="header_signin">
                            <p>Sign in</p>
                        </div>
                        <div className="header_chart">
                            <FiShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}