
import { useDispatch, useSelector } from "react-redux"
import Hero from "./Hero"
import Navbar from "./Navbar"
import CartModal from './CartModal'
import Checkout from './Checkout'

function App() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  let content
  if (isOpen) {
    content = <CartModal />
  }
  if (isOpen == false) {
    content = <Hero />
  }
  if (isOpen == "checkout") {
    content = <Checkout />
  }

  return (
    <>

      <div className="container text-neutral-very-dark-blue">
        <Navbar />
        {content}
      </div>

    </>
  )
}

export default App
