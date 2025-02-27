import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    editProfil: false
}

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: initialState,
    reducers: {
        setModalVisibility: (state, { payload }) => {
            const { modal, visible } = payload
            state[modal] = visible
        },
        setModalData: (state, { payload }) => {
            state.modalData = payload.data
        }
    }
})

export const { setModalVisibility, setModalData } = modalSlice.actions
export default modalSlice.reducer