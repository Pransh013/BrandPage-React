import Flipkart from '../assets/flipkart.png'
import Amazon from '../assets/amazon.png'

const Footer = () => {
  return (
    <>
      <div className='px-40'>
        <p className=' font-semibold'>Also available on</p>
        <div className=' flex gap-8 items-center'>
          <img src={Flipkart} alt="" />
          <img src={Amazon} alt="" className=' pt-2' />
        </div>
      </div>
    </>
  )
}

export default Footer