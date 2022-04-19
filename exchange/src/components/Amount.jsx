import NextIcon from '../assets/icons/NextIcon';

export default function Amount({
  paymentCurrency,
  setSlide,
  db,
  setFiatValue,
  setCryptoValue,
  cryptoValue,
  fiatValue,
  fiatCategory,
  setFiatCategory,
  cryptoCategory,
  setCryptoCategory,
}) {
  if (paymentCurrency === 'crypto-to-fiat') {
    return (
      <div className='s3wrapper'>
        <h3 className='s1title'>Enter your Amount</h3>
        <p className='s1info' style={{ width: '70%' }}>
          Enter your crypto currency amount that you want to calculate the
          converting fees for.
        </p>
        <div className='s3box_wrapper'>
          <input
            className='input'
            value={cryptoValue}
            type='number'
            placeholder='₿ 1.2223000'
            onChange={(e) => setCryptoValue(e.target.value)}
          />
          <select
            value={cryptoCategory}
            onChange={(e) => setCryptoCategory(e.target.value)}
            className='select'>
            {db.cryptocurrencies.map((crypto) => (
              <option value={crypto.Symbol}>{crypto.Symbol}</option>
            ))}
          </select>
        </div>
        <p className='s1info' style={{ width: '70%', marginBottom: '.5em' }}>
          Now chose the fiat currency that you want to calculate the sending
          fees for.
        </p>
        <select
          className='select_r'
          style={{ marginTop: '.1em' }}
          value={fiatCategory}
          onChange={(e) => setFiatCategory(e.target.value)}>
          {db.fiat.map((fiat) => (
            <option value={fiat.Symbol}>{fiat.Symbol}</option>
          ))}
        </select>
        <button
          onClick={() => setSlide('calculation-result')}
          className='next_wrapper'>
          <p className='next_text'>Calculate</p>
          <NextIcon size='1.25em' color='#555555' />
        </button>
      </div>
    );
  } else {
    return (
      <div className='s3wrapper'>
        <h3 className='s1title'>Enter your Amount</h3>
        <p className='s1info' style={{ width: '70%' }}>
          Enter your fiat amount that you want to calculate the converting fees
          for.
        </p>
        <div className='s3box_wrapper'>
          <input
            value={fiatValue}
            onChange={(e) => setFiatValue(e.target.value)}
            className='input'
            type='number'
            placeholder='$ 1,333.99'
          />
          <select
            className='select'
            value={fiatCategory}
            onChange={(e) => setFiatCategory(e.target.value)}>
            {db.fiat.map((fiat) => (
              <option value={fiat.Symbol}>{fiat.Symbol}</option>
            ))}
          </select>
        </div>
        <p className='s1info' style={{ width: '70%', marginBottom: '.5em' }}>
          Now chose the cryptocurrency that you want to calculate the sending
          fees for.
        </p>
        <select
          className='select_r'
          style={{ marginTop: '.1em' }}
          value={cryptoCategory}
          onChange={(e) => setCryptoCategory(e.target.value)}>
          {db.cryptocurrencies.map((crypto) => (
            <option value={crypto.Symbol}>{crypto.Symbol} </option>
          ))}
        </select>
        <button
          onClick={() => setSlide('calculation-result')}
          className='next_wrapper'>
          <p className='next_text'>Calculate</p>
          <NextIcon size='1.25em' color='#555555' />
        </button>
      </div>
    );
  }
}
