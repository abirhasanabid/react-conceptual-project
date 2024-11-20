import { useState } from 'react'
import './App.css'
import AllProducts from './component/AllProducts/AllProducts'
import CartContainer from './component/CartContainer/CartContainer'

function App() {

  const [cartData, setCartData] = useState(true);

  const handleCartBtn = (status) => {
    if (status === 'cart') {
      setCartData(true)
    }
    else {
      setCartData(!true)
    }
  }

  return (
    <div className='flex justify-around container mx-auto'>
      <AllProducts></AllProducts>
      <CartContainer cartData={cartData} handleCartBtn={handleCartBtn}></CartContainer>
    </div>
  )
}

export default App
