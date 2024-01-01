import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <div className='flex justify-between px-16 items-center h-20 cursor-pointer'>
        <img src={logo} alt="Logo" className='w-18' />
        <ul className='flex w-[25%] justify-between font-semibold cursor-pointer'>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className='bg-teal-700 px-4 py-1.5 rounded-lg text-white font-semibold border-gray-700 border-2 hover:border-teal-700 hover:bg-white hover:text-gray-700 transition-all duration-300 ease-in-out' type="button">Login</button>
      </div>
    </>
  )
}

export default Header;