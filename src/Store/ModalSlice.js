import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isOpen: false,
}
export const modalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        OpenModal: (state) => {

            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        CheckoutModal:(state)=>{
            state.isOpen="checkout"
        }

    },
})


export const { OpenModal, closeModal,CheckoutModal} = modalSlice.actions

export default modalSlice.reducer
