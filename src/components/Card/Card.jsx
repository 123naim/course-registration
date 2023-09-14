import { LuDollarSign } from 'react-icons/lu';
import { BsBook } from 'react-icons/bs';

const Card = ({card, handleButtonClick}) => {
    const {id, cover_img, title, desc, price, credit} = card;
    return (
        <div className="bg-white p-3 rounded-lg">
            <img src={cover_img} alt="" />
            <h2 className="text-[17px] font-semibold mt-4 my-3">{title}</h2>
            <p className="text-gray-400">{desc}</p>
            <div className="mt-3 flex justify-between pr-1">
                <div>
                    <h1 className='flex items-center gap-2'><LuDollarSign></LuDollarSign> Price: {price}</h1>
                </div>
                <div>
                <h1 className='flex items-center gap-4'><BsBook></BsBook> Credit: {credit}hr</h1>
                </div>
            </div>

            <button onClick={() => handleButtonClick(card, credit, price)} className="w-full bg-blue-500 mt-6 py-1 rounded-lg text-white font-semibold text-xl">Select</button>
        </div>
    );
};

export default Card;