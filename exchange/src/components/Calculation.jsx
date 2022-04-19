import { useState, useEffect } from 'react';
import OkIcon from '../assets/icons/OkIcon';

export default function Calculation({
  cryptoValue,
  fiatValue,
  paymentMethod,
  paymentCurrency,
  cryptoCategory,
  fiatCategory,
}) {
  const API_URL = 'http://api.coinlayer.com/live';
  const API_KEY = '60c95e9716f2e9ecb31fb80bc5d10413';

  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        `${API_URL}?access_key=${API_KEY}&target=${fiatCategory}&symbols=${cryptoCategory}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (paymentCurrency === 'crypto-to-fiat') {
            setTotal(cryptoValue * data.rates[cryptoCategory].toFixed(0));
          } else {
            setTotal(fiatValue * data.rates[cryptoCategory]);
            console.log(fiatValue * data.rates[cryptoCategory]);
          }
          setLoading(false);
        });
    }, 4000);
  }, []);

  return (
    <div className='s3wrapper'>
      {loading === true ? (
        <lottie-player
          src='https://assets8.lottiefiles.com/packages/lf20_2boc70dk.json'
          background='transparent'
          speed='1.25'
          style={{ width: '160px', height: '160px' }}
          loop
          autoplay></lottie-player>
      ) : (
        <>
          <div className='s5box_wrapper'>
            <h3 className='s1title' style={{ marginBottom: '-.1em' }}>
              Cost of Transaction
            </h3>
            <h1 style={{ fontSize: '3em' }}>
              {((5 / 100) * total).toFixed(2)}{' '}
              {paymentCurrency !== 'crypto-to-fiat'
                ? cryptoCategory
                : fiatCategory}
            </h1>
          </div>
          <p className='s1info' style={{ width: '70%' }}>
            {paymentMethod === 'w' ? 'Withdrawing' : 'Depositing'} {cryptoValue}{' '}
            {paymentCurrency === 'crypto-to-fiat'
              ? cryptoCategory
              : fiatCategory}{' '}
            to {fiatCategory} with cost to you{' '}
            {paymentCurrency === 'crypto-to-fiat'
              ? cryptoCategory
              : fiatCategory}
            {((5 / 100) * total).toFixed(2)} from the total amount: ${total}.
          </p>
          <button
            style={{ marginTop: '1em' }}
            onClick={() => window.location.reload()}
            className='next_wrapper'>
            <p className='next_text'>New Calculation</p>
            <OkIcon size='1.25em' color='#555555' />
          </button>
        </>
      )}
    </div>
  );
}
