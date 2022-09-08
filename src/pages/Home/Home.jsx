import React from "react";

import './home.css';
import Img from '../../assets/jewe.png'

export default function Home () {
    return (
        <>
            <div className="home">
                <div className="home_card">
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                    <div className="card">
                        <img src={Img} />
                        <p>NECKLACE</p>
                    </div>
                </div>
            </div>
        </>
    );
}