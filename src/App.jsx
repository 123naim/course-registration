import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cardsData, setCardData] = useState([]);
  const [cartInfo, setCartInfo] = useState([]);
  const [addHours, setAddHours] = useState(0);
  const [addRimaing, setAddRimaing] = useState(20);
  const [addNumber, setAddNumber] = useState(0);


  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCardData(data))
  }, [])

  // click btn
  const handleButtonClick = (card, credit, price) => {
    const newData = [...cartInfo, card];
    const similarData = cartInfo.find(data => data.id === card.id);

    let hour = credit;

    if (similarData) {
      const handleSimilarData = () => {
        toast.warn("this is alrady exist")
      }
      return handleSimilarData();
    }
    else {
      cartInfo.forEach(item => {
        hour += item.credit;
      })

      if (hour > 20) {
        const handleSimilarData = () => {
          toast.warn("Sorry!!! Limited Hours")
        }
        return handleSimilarData();
      }
      setAddHours(hour)
      addRemings(credit)
      setAddNumber(addNumber + price)
      setCartInfo(newData);
    }
  }

  // Hours Remaining
  const addRemings = (credit) => {
    const newRemaining = addRimaing - credit;
    if (newRemaining < 0) {
      return;
    }
    setAddRimaing(newRemaining);
  }


  return (
    <div className='bg-gray-200'>
      <ToastContainer></ToastContainer>
      <h1 className='text-center pt-9 py-6 text-4xl font-bold'>Course Registration</h1>
      <div className='mx-16 lg:flex lg:flex-row flex flex-col-reverse lg:justify-between gap-5'>
        <div className='lg:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto'>
          {
            cardsData.map((card, idx) => <Card
              key={idx}
              card={card}
              handleButtonClick={handleButtonClick}
            ></Card>)
          }
        </div>
        <div className='lg:w-1/4 md:w-8/12 mx-auto'>
          <Cart
            cartInfo={cartInfo}
            addHours={addHours}
            addNumber={addNumber}
            addRimaing={addRimaing}
          ></Cart>
        </div>
      </div>
    </div>
  )
}

export default App
