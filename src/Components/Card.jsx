import React, { useState } from "react";

function Card({values, removeTour}){

    const {id, image,price,name,description} = values;

    const [readMore, setReadMore] = useState(false);
    const [notInterestedClicked, setNotInterestedClicked] = useState(false);

    // const [countRemove , setCountRemove] = useState(cardIndex);

    function readMoreHandler(){
        setReadMore(!readMore);
        console.log(readMore)
    }

    
    function notInterestedHandler(){
        setNotInterestedClicked(!notInterestedClicked);
        setCountRemove(prev => prev-1);
        console.log(countRemove)
    }

    return (
        <div>
            <div className={` w-[400px] transition-all duration-200  flex-col justify-between p-4 m-4 bg-white rounded-lg drop-shadow-xl overflow-y-clip ${readMore ? 'h-[750px]': 'h-[700px]'}  ${notInterestedClicked ? 'hidden': 'flex'} `}>
                <div>
                    <img className="h-[380px] w-[380px] object-cover rounded-md" src={image}></img>
                </div>
                <div>
                    <h1 className="text-green-600 font-extrabold pt-4 text-xl">{price}</h1>
                    <h1 className="font-extrabold text-2xl"> {name} </h1>
                    <p className={` font-semibold h-[130px] py-2 text-[17px] ${readMore? 'overflow-visible h-fit' :'overflow-hidden'} `}>{description}</p>
                     <span className=" text-sky-600 "><button onClick={readMoreHandler}> {`${readMore ? 'Show Less':'Read More'}`} </button></span>
                    
                </div>

                <div className="text-center">
                    <button onClick={notInterestedHandler} className="border-2  border-red-700 bg-red-100 px-16 py-2 rounded-xl font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-150">Not Interested</button>
                </div>
            </div>

            
        </div>
        

    )
    console.log(readMore)
}

export default Card;