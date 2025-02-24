import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {}
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers:{
        example: (state, { payload }) => {
            state.user = payload
        }
    }
})

export const { example } = userSlice.actions
export default userSlice.reducer