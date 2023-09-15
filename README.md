** Question: Add at least 3 Project features

1. When you click the 'select' button, it will display the card's title, and it should not show the same title twice. It will show a warning in that case.

2. When you click the 'select' button, the hours will be added to the total credit hours, and it cannot exceed 20hr. If it does, a warning will be limited hours.

3. And by default, it will show 'Remaining: 20 hours.' Every time you click the 'select' button, that number will be subtracted from the remaining hours



** Question: Discuss how you managed the state in your assignment project.

1. First State, I declared a state called 'cardsData'. Then, I fetched data and set it inside 'setCardData'. After that, I used a map function on 'cardsData
 
2. In the second state, I declared a state called 'cartInfo.' I created a function that takes new data and sets it using 'setCartInfo.' I then passed 'cartInfo' as a prop value inside the 'Cart' component.

3. In the third state, I named it addHours. I initialized addHours with a value of 0. When the select button is clicked, I added the current hour to it and set it using setAddHours. And I passed it to the 'cart' component.
