
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Upload from './components/Upload'
import { SignInButton } from '@clerk/clerk-react'

const App = () => {
  return (
    <div>
      <Navbar/>
      <SignInButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buycredit" element={<BuyCredit />} />
      </Routes>

    </div>
  )
}

export default App
