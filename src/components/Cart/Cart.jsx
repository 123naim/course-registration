import { list } from "postcss";

const Cart = ({cardInfo, addHours, addNumber, addRimaing}) => {
    
    return (
        <div className="bg-white p-3 rounded-lg">
            <div>
                <h1 className="text-xl text-blue-500 font-semibold mb-3">Credit Hour Remaining {addRimaing} hr</h1>
                <hr className="border" />
                <h1 className="text-xl font-bold my-3">Course Name</h1>
                <ol className="list-decimal pl-4">
                    {
                        cardInfo.map((card, idx) => <li key={idx}>{card.title}</li>)
                    }
                </ol>
                <hr className="my-3" />
                <h1 className="text-xl text-gray-600 font-semibold">Total Credit Houre: {addHours}
                </h1>
                <hr className="my-3" />
                <h1 className="text-xl text-gray-600 font-semibold">Total Price: {addNumber}</h1>
            </div>
        </div>
    );
};

export default Cart;