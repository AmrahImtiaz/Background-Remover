import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk } from '@clerk/clerk-react'

const Navbar = () => {

  const {OpenSignIn} = useClerk() 

  return (
    <div className='flex items-center justify-between  mx-4 py-3 lg:mx-44 ' >
    <Link to='/'><img className='w-32 sm:w-42' src={assets.logo} alt="" /></Link>
    <button onClick={()=>OpenSignIn()} className='bg-zinc-800 rounded-2xl text-blue-50 flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-4' >Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
    </button>
    </div>
  )
}

export default Navbar