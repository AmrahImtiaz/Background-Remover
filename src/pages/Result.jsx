import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* iMAGE CONTAINER */}        
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
        {/* ORIGINAL - LEFT SIDE */}        
          <div>
            <p className='font-semibold text-gray-600 mb-2' >
            Original
            </p>
            <img className='rounded-md border' src={assets.image_w_bg} alt="" />
          </div>
        {/* BG REMOVED - RIGHT SIDE */}        
          <div className='flex flex-col' >
            <p className='font-semibold text-gray-600 mb-2'>
            Background Removed
            </p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden">
              <img src={assets.image_wo_bg} alt="" />
              {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600 rounded-full w-12 h-12 border-t-transparent animate-spin">
                </div> */}
              </div>
            </div>
          </div>

      {/* -- BUTTONS -- */}
      <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
        <button className='border border-gray-300 shadow-sm rounded-full p-2 hover:scale-105' >Try Another Image</button>
        <a className='bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-medium
         rounded-full p-2 hover:scale-105' href="">Download Image</a>
      </div>

    </div>
    </div>
  )
}

export default Result