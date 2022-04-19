import DepositIcon from '../assets/icons/DepositIcon';
import WithdrawlIcon from '../assets/icons/WithdrawlIcon';

export default function ChosePaymentMethod({ setSlide, setPaymentMethod }) {
  return (
    <div className='s1wrapper'>
      <h3 className='s1title'>What do you want to do?</h3>
      <p className='s1info'>Chose your exchange way of calculator.</p>
      <div className='s1box_wrapper'>
        <div
          onClick={() => {
            setPaymentMethod('d');
            setSlide('chose-currency');
          }}
          className='s1box'>
          <DepositIcon size='3em' color='#777777' />
          <p className='s1text'>Deposit</p>
        </div>

        <div
          onClick={() => {
            setPaymentMethod('w');
            setSlide('chose-currency');
          }}
          className='s1box'>
          <WithdrawlIcon size='3em' color='#777777' />
          <p className='s1text'>Withdrawal</p>
        </div>
      </div>
    </div>
  );
}
