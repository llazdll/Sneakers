import logo from './images/logo.svg'
import menubtn from './images/icon-menu.svg'
import cartIcon from './images/icon-cart.svg'
import profile from './images/image-avatar.png'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { OpenModal } from './Store/ModalSlice'




export default function Navbar() {
    const dispatch=useDispatch()

    function ClickHandler() {
        dispatch(OpenModal())
    }
    

    return (
        <>
            <div className="nav flex py-1 justify-between items-center gap-2">
                <img src={menubtn} alt="menubtn" className='md:hidden' />
                <div className=" flex items-center justify-evenly ">
                    <img src={logo} alt="Logo" className='pr-20 md:pr-5' />
                    <div className='hidden md:block '>
                        <ul className="flex sm:gap-1 md:gap-4 lg:gap-8 md:text-sm">
                            <li className='hover:border-b-2 hover:border-primary-orange transition-colors'>Collection</li>
                            <li className='hover:border-b-2 hover:border-primary-orange transition-colors'>Men</li>
                            <li className='hover:border-b-2 hover:border-primary-orange transition-colors'>Women</li>
                            <li className='hover:border-b-2 hover:border-primary-orange transition-colors'>About</li>
                            <li className='hover:border-b-2 hover:border-primary-orange transition-colors'>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className=" flex gap-8 items-center justify-end">
                    <img src={cartIcon} alt="Logo"  onClick={ClickHandler} className='hover:shadow-sm ' />
                    <img src={profile} alt="Logo" className='rounded-full w-[30%] items-center' />
                </div>
            </div>
        </>
    )
}
