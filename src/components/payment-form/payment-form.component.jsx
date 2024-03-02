import { useState } from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Swal from "sweetalert2";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer, PaymentButton, WarningContainer } from "./payment-form.styles";

// Use the options prop to customize the appearance
const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px", // Adjust the font size to make the CardElement text smaller
      "::placeholder": {
        color: "#aab7c4", // Customize the placeholder color if needed
      },
    },
  },
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const PaymentHandler = async (e) => {
    e.preventDefault();
    
    if(!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        }
      }
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      await Swal.fire({
        title: "Error in payment",
        text: paymentResult.error.message,
        icon: "error",
        showCloseButton: true,
        showCancelButton: false,
        confirmButtonColor: "#f44336",
        confirmButtonText: "OK",
      });
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        await Swal.fire({
          title: "Payment Successful!",
          text: "Thanks for your order",
          icon: "success",
          showCloseButton: true,
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <PaymentFormContainer>
      <WarningContainer>
        *Please use the following for test credit card payments*
        <h3>VISA: </h3>
        <span>4000 0035 6000 0008</span>
        <h3>Exp: Any Future Date, CVC: Any 3 Digits</h3>
      </WarningContainer>
      <FormContainer onSubmit={PaymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement options={cardElementOptions} />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;