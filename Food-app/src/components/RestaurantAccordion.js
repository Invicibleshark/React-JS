import React, { useState } from 'react'
import { CLOUD_URL, alternateImageUrl } from '../utils/constant';
import { Veg,nonVeg} from '../utils/constant';
import altimg from "../utils/res.png";
export const RestaurantAccordion = ({data}) => {
    let { title } = data?.card?.card|| [];
    let [arrow,setarrow]=useState(false);
    let itemCards=data?.card?.card.itemCards||data?.card?.card?.carousel||data?.card?.card?.categories||[];
    const [showFullDescription, setShowFullDescription] = useState(false);
    const maxDescriptionLength = 100;
    let HandleArrow=()=>{
         setarrow(!arrow);
    }
  return (
    <div className='flex flex-col shadow-lg' style={{fontFamily:'Arial'}}>
        <div>
        {title && <div onClick={HandleArrow} className="my-5 hover:cursor-pointer flex flex-row w-12/12 mx-auto p-4">
        { <div>{title} ({itemCards.length})</div>}
        { <div className="ml-auto">{arrow?'⬆️':'⬇️'}</div>}
        </div>}
    </div>
    <div>
    {arrow &&itemCards &&<div >
        {
            itemCards.map((i) => {
                let { name, description="Description", imageId, price, fees,defaultPrice} = i?.card?.info||i?.dish?.info||[];
                return (
                   ( i && <div className='gap-5 justify-between p-3 m-3 transition-transform duration-300 flex flex-row shadow-lg rounded-lg hover:bg-green-10'>
                    <div className='flex justify-center flex-col max-w-[350px]'>
                        <h1 className='font-bold'>{name || 'ItemName'}</h1>
                        <h3 className='text-gray-600'>₹{price ? price / 100 : (fees && fees[0] ? fees[0].fee : defaultPrice) / 100||'Cost of Item'}</h3>
                        <h3 className='text-gray-500'>
                                            {description.length > maxDescriptionLength && !showFullDescription
                                                ? description.substring(0, maxDescriptionLength) + '...'
                                                : description}
                                            {description.length > maxDescriptionLength && (
                                                <span
                                                    className='text-green-500 cursor-pointer'
                                                    onClick={() => setShowFullDescription(!showFullDescription)}>
                                                    {showFullDescription ? ' less' : ' more'}
                                                </span>
                                            )}
                                        </h3>
                    </div>
                    <div className='relative p-4'>
                    <img className='rounded-lg h-[135px] w-[200px] object-cover' src={CLOUD_URL + imageId} alt={altimg} />
                    <div className="absolute inset-0 flex flex-col justify-end items-center">
                        <button className='-bottom-1 font-bold px-8 py-2 border rounded-lg shadow-lg bg-white text-green-600'>
                            ADD
                        </button>
                    </div>
                </div>

                
                </div>
                
                    )
                );
            })
        }
    </div>}
    </div>
    </div>
  )
}

export default RestaurantAccordion;