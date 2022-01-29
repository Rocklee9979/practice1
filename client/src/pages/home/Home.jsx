import React from 'react';
import './home.scss';

export default function Home() {
    return (
        <div className='container'>
            <h1 className="title">Practicing React Stripe API</h1>
            <div className="productWrapper">
                <div className="product">
                    <h3 className="productTitle">Kindle eBook reader</h3>
                    <img src="https://sm.pcmag.com/pcmag_au/photo/f/for-reader/for-readers-on-a-budget_nqyk.jpg" alt="" className="productImg" />
                    <p className="desc">
                        Kindle provides a very natural paper look reading experience.
                        It comes with plenty of storage for your favourite books.
                    </p>
                    <span className="price">$100</span>
                    <button className="productAdd">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
