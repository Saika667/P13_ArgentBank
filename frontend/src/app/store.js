import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../features/user.slice"
import modalReducer from "../features/modal.slice"

export default configureStore({
    reducer : {
        user: userReducer,
        modal: modalReducer
    }
})