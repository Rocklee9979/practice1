import React, { useState, useEffect } from 'react';
import './home.scss';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default function Home() {

    const [stripeToken, setStripeToken] = useState(null);
        
    const handleClick = (token) => {
        setStripeToken(token);
    }

    

    useEffect(() => {
        const makeRequest = async () => {
            try {
                
                const response = await axios.post(
                    'http://localhost:4000/cart/payment', {
                        tokenId: stripeToken.id,
                        amount: 1000, 
                    }
                );
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
        
    }, [stripeToken]);

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
                    <StripeCheckout
                        name="Practice 1"
                        amount={ 10000 }
                        stripeKey={ 'pk_test_51KA8MlEkpPuNlofvJfM54jP8e2rvXW0eZBsv6lWtLMRtEl3T29AoFY8Mig9JW1XstTy6UFoGgmeyXcse5B7cKj0I00CYGg763N' }
                        billingAddress
                        token={ handleClick }
                        currency={ 'AUD'}
                    >
                        <button>Buy Now</button>
                    </StripeCheckout>
                </div>
            </div>

            
        </div>
    );
}
