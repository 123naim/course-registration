import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Cart from './components/Cart/Cart'
import { useEffect } from 'react';

function App() {
  const [cardsData, setCardData] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const [addHours, setAddHours] = useState(0);
  const [addNumber, setAddNumber] = useState(0);
  const [addRimaing, setAddRimaing] = useState(20);


  useEffect(() => {
    fetch('../public/fake-data.json')
      .then(res => res.json())
      .then(data => setCardData(data))
  }, [])

  const handleButtonClick = (card, credit, price) => {
    const newData = [...cardInfo, card];
    const similarData = cardInfo.find(data => data.id === card.id)
    if (similarData) {
      return
    }
    else {
      
      if (addHours >= 20) {
        return alert('not exist')
      }

      if(addRimaing <= 0){
        return alert('sorry')
      }
      else {
        setAddHours(addHours + credit);
        setAddNumber(addNumber + price)
        setAddRimaing(addRimaing - credit)
        setCardInfo(newData);
      }
    }
  }


  return (
    <div className='bg-gray-200'>
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
