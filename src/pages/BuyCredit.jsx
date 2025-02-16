import { assets,plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6 hover:scale-105 ' >Our Plans</button>
      <h1 className='text-center font-semibold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-black to-gray-300 bg-clip-text text-transparent'>Choose the plan that's right for you</h1>
      <div className='flex justify-center gap-4 mt-16 xl:mt-24'>
        {plans.map((item, index) => (
          <div className='bg-white border-b-cyan-950 drop-shadow-xl rounded-2xl w-62 h-64 py-3 flex-wrap'>
              <img width={40} src={assets.logo_icon} alt="" />
              <p className='mt-3 font-semibold'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p>
                  <span className='font-bold font-3xl '>${item.price}</span> / {item.credits} credits
              </p>
              <button className='bg-gray-800 p-3 rounded-md text-white'>Get started</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit