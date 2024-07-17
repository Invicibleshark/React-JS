import React from 'react';

export const Restuarantshimmer = () => {
  return (
    <div className="flex justify-center items-center w-full"> 
        <div>
        <div className="flex flex-col justify-center items-center mt-3">
            <div
                className="flex justify-center items-center h-72 bg-gray-200 rounded-lg m-2"
                style={{width:'680px'}}
            >
                <div className=" m-5 w-2/5 h-full bg-gray-400 rounded-lg" style={{height:'270px', width:'240px'}}></div>
                <div className="w-3/5 h-full bg-gray-300 rounded-lg m-3 " style={{height:'270px', width:'450px'}}></div>
            </div>
            </div>
        <div className="flex flex-col justify-center items-center">
            {Array.from({ length: 5}).map((_, index) => (
            <div
                key={index}
                className="flex justify-center items-center h-28 w-96 bg-gray-200 rounded-lg m-2"
                style={{width:'680px'}}
            >
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
            </div>
            ))}
      </div>
        </div>
    </div>
  );
};
