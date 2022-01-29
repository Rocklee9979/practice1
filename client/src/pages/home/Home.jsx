import React from 'react';
import './home.scss';
import StripeCheckout from 'react-stripe-checkout';

export default function Home() {

    

    const handleClick = (token) => {
        console.log(token);
    }
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
                        Buy Now
                    </StripeCheckout>
                </div>
            </div>

            
        </div>
    );
}
