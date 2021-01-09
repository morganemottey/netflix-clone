import React from 'react'
import Paypal from '../components/Paypal'
import firebase from 'firebase'

const client = {
    sandbox: "AZDcCIN6Azy2ouwdWsUNwS4AwjsCWm0BJfihhEFVE1N0pM-xZxX3eu0B5gkKLQY1Wa_1tJZc3-iokCRJ", // votre id du sandbox paypal
    production: "xxxxxx" // id Paypal en mode production 
}

const env = process.env.NODE_ENV === "production" ? "production" : "sandbox";

const total = 100;

const currency = "USD";

const onError = (error) => {
    console.log('erreur', error);
}

const onCancel = data => console.log('payment annulé', data);

const Payment = (props) => {
    return (
        <div>
           <Paypal 
            env={env}
            client={client}
            total={total}
            currency={currency}
            onError={onError}
            onCancel={onCancel}
            // onSuccess={onSuccess}
        />
        </div>
    )
}

export default Payment
