import React from 'react';
import PropTypes from 'prop-types';
import {
  CardElement
} from '@stripe/react-stripe-js';
import '../cardElement/CreditCardEntry.css';

const cardOptions = {
  iconStyle: 'solid',
  hidePostalCode: false,
  style: {
    base: {
      iconColor: 'rgb(240, 57, 122)',
      color: 'rgb(240, 57, 122)',
      fontSize: '16px',
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#CFD7DF'
      }
    },
    invalid: {
      color: '#e5424d',
      ':focus': {
        color: '#303238'
      }
    }
  }
};


function CreditCardEntry({ handleSubmit }) {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement options={cardOptions}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

CreditCardEntry.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default CreditCardEntry;
