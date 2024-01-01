import Hero from '../assets/Hero.png'
const Body = () => {
  return (
    <>
      <div className=' px-40 flex py-8 justify-between items-center'>
        <div>
          <h1 className=" font-extrabold text-7xl uppercase">
            Your feet deserve the best
          </h1>
          <p className=' font-semibold my-6 max-w-[70%] uppercase text-gray-700'>
            Your feet deserve the best and we are here to help you with our
            shoes. Your feet deserve the best and we are here to help you with
            our shoes
          </p>
          <div className='flex gap-8'>
            <button type="button" className='bg-teal-600 px-4 py-1.5 rounded-lg text-white font-semibold border-gray-700 border-2 hover:border-teal-600 hover:bg-white hover:text-gray-700 transition-all duration-300 ease-in-out'>Shop Now</button>
            <button type="button" className='bg-gray-500 px-4 py-1.5 rounded-lg text-white font-semibold border-gray-700 border-2 hover:border-gray-500 hover:bg-white hover:text-gray-700 transition-all duration-300 ease-in-out'>Category</button>
          </div>
        </div>
        <img src={Hero} alt="" className='w-[45%]'/>
      </div>
    </>
  );
};

export default Body;
