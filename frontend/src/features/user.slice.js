import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    login: [
        {
            id: 'login-username',
            value: '',
            error: ''
        },
        {
            id: 'login-password',
            value: '',
            error: ''
        }
    ],
    edit: [
        {
            id: 'edit-firstname',
            value: '',
            error: ''
        },
        {
            id: 'edit-lastname',
            value: '',
            error: ''
        }
    ]
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers:{
        setUserData: (state, { payload }) => {
            state.user = payload
        }, 
        setInputValue: (state, { payload }) => {
            const { form, id, value } = payload

            state[form].forEach(input => {
                if(input.id === id) {
                    input.value = value
                    return
                }
            })
        },
        setErrorValue: (state, { payload }) => {
            const { form, id, message } = payload
            state[form].forEach(input => {
                if(input.id === id) {
                    input.error = message
                    return
                }
            })
        },
        clearForm: (state, { payload }) => {
            state[payload] = initialState[payload]
        },
        resetUser: () => initialState,
        setEditForm: (state) => {
            const editForm = state.edit
            const user = state.user

            editForm.forEach(input => {
                if (input.id === 'edit-firstname') {
                    input.value = user.firstName
                } else if (input.id === 'edit-lastname') {
                    input.value = user.lastName
                }
            })
        }
    }
})

export const { setUserData, setInputValue, clearForm, resetUser, setEditForm, setErrorValue } = userSlice.actions
export default userSlice.reducer