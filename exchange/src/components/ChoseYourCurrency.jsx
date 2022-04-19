import BitcoinIcon from '../assets/icons/BitcoinIcon';
import DollarIcon from '../assets/icons/DollarIcon';

export default function ChoseYourCurrency({ setSlide, setPaymentCurrency }) {
  return (
    <div className='s1wrapper'>
      <h3 className='s1title'>Your Exchange method?</h3>
      <p className='s1info'>Chose your method of exchanging now.</p>
      <div className='s1box_wrapper'>
        <div
          onClick={() => {
            setPaymentCurrency('crypto-to-fiat');
            setSlide('chose-ammount');
          }}
          className='s1box'>
          <BitcoinIcon size='3em' color='#777777' />
          <p className='s2text'>Crypto to Fiat</p>
        </div>

        {/* <div
          onClick={() => {
            setPaymentCurrency('fiat-to-crypto');
            setSlide('chose-ammount');
          }}
          className='s1box'>
          <DollarIcon size='3em' color='#777777' />
          <p className='s2text'>Fiat to Crypto</p>
        </div> */}
      </div>
    </div>
  );
}
