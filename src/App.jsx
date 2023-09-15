import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cardsData, setCardData] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const [addHours, setAddHours] = useState(0);
  const [addNumber, setAddNumber] = useState(0);
  const [addRimaing, setAddRimaing] = useState(20);


  useEffect(() => {
    fetch('/fake-data.json')
      .then(res => res.json())
      .then(data => setCardData(data))
  }, [])

  // click btn
  const handleButtonClick = (card, credit, price) => {
    const newData = [...cardInfo, card];
    const similarData = cardInfo.find(data => data.id === card.id);

    let hour = credit;

    if (similarData) {
      const handleSimilarData = () => {
        toast.warn("this is alrady exits")
      }
      return handleSimilarData;
    }

    else {
      cardInfo.forEach(item => {
      hour += item.credit;
    })

    if(hour > 20){
      return
    }
    setAddHours(hour)
    addRemings(credit)
    setAddNumber(addNumber + price)
    setCardInfo(newData);
    }
  }



  // add Hours
  // const addHour = (card) => {
  //   let hour = card.credit;
  //   cardsData.forEach(item => {
  //     hour = hour + item.credit;
  //   })
    // console.log(hour)
    // let hour = credit;
    // hour = hour + credit;
    // console.log(hour)
    // const newHourse = addHours + credit;
    // if (hour > 20) {
    //   return
    // }
    // setAddHours(newHourse)
  // }


  // Hours Remaining
  const addRemings = (credit) => {
    const newRemaining = addRimaing - credit;
    if (newRemaining < 0) {
      return
    }
    setAddRimaing(newRemaining);
  }


  return (
    <div className='bg-gray-200'>
      <ToastContainer></ToastContainer>
      <h1 className='text-center pt-9 py-6 text-4xl font-bold'>Course Registration</h1>
      <div className='mx-12 flex justify-between gap-4'>
        <div className='w-3/4 grid grid-cols-3 gap-4 '>
          {
            cardsData.map((card, idx) => <Card
              key={idx}
              card={card}
              handleButtonClick={handleButtonClick}
            ></Card>)
          }
        </div>
        <div className='w-1/4'>
          <Cart
            cardInfo={cardInfo}
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
