import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PK)
const Payment = () => {

    return (
        <div className='mt-28 mx-28'>
            <h1 className='text-5xl text-center font-bold mb-10'>Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;