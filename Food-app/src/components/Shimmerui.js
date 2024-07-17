const Loader = () => {
    console.log("Loading");
    return (
        <div className="flex flex-col justify-center ">
            <div className="animate-pulse flex space-x-4 justify-center my-4">
                <div className="h-10 w-60 bg-gray-300 rounded-md items-center">
                    <div className=" mt-1 ml-1 mr-1 h-8 w-50 bg-gray-100 rounded-md"></div>
                </div>
                <div className="h-10 w-32 bg-gray-300 rounded-md">
                <div className=" mt-1 ml-1 mr-1 h-8 w-22 bg-gray-100 rounded-md"></div>
                </div>
                <div className="h-10 w-32 bg-gray-300 rounded-md">
                <div className=" mt-1 ml-1 mr-1 h-8 w-22 bg-gray-100 rounded-md"></div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center mx-auto max-w-[1400px] mt-12 ">
                {Array.from({ length: 10 }).map((_, index) => (
                <div
                    key={index}
                    className="mr-5 flex flex-col justify-between  items-center h-80 w-72 bg-gray-200 rounded-lg m-2">
                    <div className="w-full h-2/5 bg-gray-200 rounded-lg"></div>
                    <div className="w-full h-3/5 bg-gray-300 rounded-lg"></div>
                </div>
                ))}
            </div>
        </div>
    );
  };
  
  export default Loader;
  