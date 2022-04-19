import { useState } from 'react';
import Container from './components/Container';
import Modal from './components/Modal';
import Header from './components/Header';
import Body from './components/Body';
import Title from './components/Title';
import GraphIcon from './assets/icons/GraphIcon';
import CalculateIcon from './assets/icons/CalculateIcon';
import CloseIcon from './assets/icons/CloseIcon';
import Left from './components/Left';
import Right from './components/Right';
import ChosePaymentMethod from './components/ChosePaymentMethod';
import ChoseYourCurrency from './components/ChoseYourCurrency';
import Amount from './components/Amount';
import Calculation from './components/Calculation';
import { cryptocurrencies, fiat } from './db/data';

export default function App() {
  const [db] = useState({ cryptocurrencies, fiat });
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [slide, setSlide] = useState('chose-method');
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [paymentCurrency, setPaymentCurrency] = useState(null);
  const [cryptoValue, setCryptoValue] = useState('');
  const [cryptoCategory, setCryptoCategory] = useState('BTC');
  const [fiatValue, setFiatValue] = useState('');
  const [fiatCategory, setFiatCategory] = useState('USD');

  const handleClose = () => setIsCalculatorOpen(!isCalculatorOpen);

  if (isCalculatorOpen) {
    return (
      <Container>
        <Modal>
          <Header>
            <Left style={{ display: 'flex' }}>
              <GraphIcon size='1.75em' color='#333333' />
              <Title>Crypto Fee Calculator</Title>
            </Left>

            <Right>
              <CloseIcon
                cb={() => handleClose()}
                size='1.5em'
                color='#999999'
              />
            </Right>
          </Header>
          <Body>
            {
              {
                'chose-method': (
                  <ChosePaymentMethod
                    setSlide={setSlide}
                    setPaymentMethod={setPaymentMethod}
                  />
                ),
                'chose-currency': (
                  <ChoseYourCurrency
                    setSlide={setSlide}
                    setPaymentCurrency={setPaymentCurrency}
                  />
                ),
                'chose-ammount': (
                  <Amount
                    paymentCurrency={paymentCurrency}
                    setSlide={setSlide}
                    cryptoValue={cryptoValue}
                    fiatValue={fiatValue}
                    setFiatValue={setFiatValue}
                    setCryptoValue={setCryptoValue}
                    cryptoCategory={cryptoCategory}
                    fiatCategory={fiatCategory}
                    setFiatCategory={setFiatCategory}
                    setCryptoCategory={setCryptoCategory}
                    db={db}
                  />
                ),
                'calculation-result': (
                  <Calculation
                    paymentMethod={paymentMethod}
                    paymentCurrency={paymentCurrency}
                    cryptoValue={cryptoValue}
                    fiatValue={fiatValue}
                    cryptoCategory={cryptoCategory}
                    fiatCategory={fiatCategory}
                    db={db}
                  />
                ),
              }[slide]
            }
          </Body>
        </Modal>
      </Container>
    );
  } else {
    return (
      <Container>
        <div onClick={() => handleClose()} className='calculate-closed'>
          <CalculateIcon size='2em' color='#333333' />
        </div>

        <p className='info'>
          Click on the icon to open the Crypto Fee Calculator.
        </p>
      </Container>
    );
  }
}
