import { useDispatch, useSelector } from "react-redux";
import { forwardRef } from "react";
import img1 from './images/image-product-1-thumbnail.jpg'
import { OpenModal, closeModal,CheckoutModal } from "./Store/ModalSlice"


const CartModal = forwardRef((props, ref) => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value);


  return (
    <dialog ref={ref} className="min-w-[20vw] rounded-md p-4 border-2" open={isOpen==true}>
      <div className="flex justify-between">
      <h2 className="font-bold py-2">Cart</h2>
      {count > 0 ?(<button className="text-xl hover:text-primary-orange" onClick={() => dispatch(closeModal())}>x</button>):null}
      </div>
      <div className="border mb-8" />
      <div className="detail">
        {count !== null && count !== undefined && count > 0 ? (
          <>
         
            <div className="flex flex-col">
              <div className="flex items-center mb-5">
                <img src={img1} className="w-[20%] rounded-md" />

                <div className="mx-auto">
                  <p className="text-center">Fall limited edition snikers</p>
                  <p>$125.00 x {count} = <span className="font-bold">${count * 125}</span> </p>
                </div>
              </div>
            </div>
            
            <div
              className=" bg-primary-orange rounded-md text-center"
              onClick={()=>{dispatch(CheckoutModal())}}>
                <p>checkout</p>
                </div>
          </>
        ) : (<>
          <p className="text-center opacity-50">No count found</p>
          <form onSubmit={(e) => e.preventDefault()} className="text-right">
            <button onClick={() => dispatch(closeModal())} className="mt-8 hover:text-primary-orange">Close</button>
          </form>
        </>
        )}
      </div>

    </dialog>
  );
});

export default CartModal;