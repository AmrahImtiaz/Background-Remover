import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 '>
        {/*--LEFT SIDE--*/}
        <div >
            <h1 className='text-4xl xl:text-5xl font-bold text-neutral-800 leading-tight' >
            Remove the <br className='max:md-hidden'/> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent' >background </span> <br className='max:md-hidden'/> from images for free.
            </h1>
            <p className='my-6 text-[15px] text-gray-500 ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry <br className='max:md-hidden'/> Lorem Ipsum has been the industry's standard dummy text ever.</p>
            <div>
                <input type="file" name="" id="upload1" hidden/>
                    <label className='inline-flex gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                        <img className='w-5 sm:w-7' src={assets.upload_btn_icon} alt="" />
                        <p className=' text-white text-small'>Upload Your Image</p>
                    </label>
            </div>
        </div>
        {/*--RIGHT SIDE--*/}
        <div className='max-w-md w-full'>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header