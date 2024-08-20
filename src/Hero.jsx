import { useSearchParams } from 'react-router-dom'
import cartIcon from './images/icon-cart.svg'
import img1 from './images/image-product-1.jpg'
import img2 from './images/image-product-2.jpg'
import img3 from './images/image-product-3.jpg'
import img4 from './images/image-product-4.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './Store/counterSlice'
import { useState} from 'react'
import { OpenModal } from './Store/ModalSlice'
export default function Hero() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    // const [count, setCount] = useState(3)    
    const [selectedImg, setSelectedImg] = useState(img1)

    
    return (
        <>
            <div className="lg:flex mt-20">
                <div className="left lg:w-[50%]">
                    <div className='w-[80%] mx-auto flex flex-col'>
                        <img src={selectedImg} alt="cart" className='rounded-3xl' />
                        <div className="flex ">

                            <img src={img1} className='rounded-xl md:rounded-3xl hover:opacity-50 transition-opacity w-1/4 p-2' onClick={() => { setSelectedImg(img1) }} />
                            <img src={img2} className='rounded-xl md:rounded-3xl hover:opacity-50 transition-opacity w-1/4 p-2' onClick={() => { setSelectedImg(img2) }} />
                            <img src={img3} className='rounded-xl md:rounded-3xl hover:opacity-50 transition-opacity w-1/4 p-2' onClick={() => { setSelectedImg(img3) }} />
                            <img src={img4} className='rounded-xl md:rounded-3xl hover:opacity-50 transition-opacity w-1/4 p-2' onClick={() => { setSelectedImg(img4) }} />

                        </div>
                    </div>
                </div>
                <div className="right lg:w-[50%] p-4 flex items-center">
                    <div className="w-[80%] mx-auto mt-20">
                        <p className='opacity-65'>Sneaker Company</p>
                        <h1 className='bold font-extrabold text-4xl'>Fall limited <br />Sneakers</h1>
                        <p className='opacity-65'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, aut quibusdam. Ad illum, mollitia eligendi id vel aut quos laboriosam corporis atque harum tenetur impedit vero, nesciunt porro quidem laborum.</p>
                        <div className="price">
                            <div className="flex gap-4 items-center">
                                <p className='text-2xl'>$125.00</p>
                                <div className='bg-black text-white px-2 rounded-md'>50%</div>
                            </div>
                            <p className='opacity-65 line-through'>${count * 125}.00</p>
                        </div>
                        <div className="  md:flex md:justify-between md:mt-4 mt-8">
                            <div className='flex gap-2 md:gap-4 px-4 items-center justify-evenly text-4xl bg-slate-200 rounded-md'>
                                <button
                                    onClick={() => dispatch(increment())}
                                    className='text-primary-orange'
                                >+</button>
                                <p>{count}</p>
                                <button onClick={() => dispatch(decrement())} disabled={count <= 0}
                                    className='text-primary-orange'>-</button>
                            </div>
                            <div 
                            onClick={() =>dispatch(OpenModal())}
                            className="flex bg-primary-orange md:gap-4 justify-around items-center px-8 rounded-md text-xl md:mt-4 mt-8 min-h-8">
                                <img src={cartIcon} alt="cart"/>
                                <p className='text-sm sm:text-md'>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
