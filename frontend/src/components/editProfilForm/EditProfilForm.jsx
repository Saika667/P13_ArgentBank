import { useDispatch, useSelector } from "react-redux"
import ActionButton from "../actionButton/ActionButton"
import Input from "../input/Input"
import { Form, Wrapper } from "./EditProfilFormStyle"
import { setModalVisibility } from "../../features/modal.slice"
import { setEditForm, setErrorValue, setInputValue } from "../../features/user.slice"
import { useEffect } from "react"
import { updateUser } from "../../services/api"

function EditProfilForm () {
    const editForm = useSelector(({ user }) => user.edit)
    const dispatch = useDispatch()

    const getInputValue = (inputId) => {
        return editForm.find(editInput => editInput.id === inputId).value
    }

    const handleInputChange = (inputId, value) => {
        dispatch(setInputValue({ form: "edit", id: inputId, value }))
    }

    const getErrorValue = (inputId) => {
        return editForm.find(editInput => editInput.id === inputId).error
    }

    const modifyUserAccount = async () => {
        const firstName = getInputValue('edit-firstname')
        const lastName = getInputValue('edit-lastname')
        let hasError = true

        if (firstName === "") {
            dispatch(setErrorValue({ form: "edit", id: "edit-firstname", value: "Ce champ ne peut être vide." }))
            hasError = true
        } else {
            dispatch(setErrorValue({ form: "edit", id: "edit-firstname", value: "" }))
            hasError = false
        }

        if (lastName === "") {
            dispatch(setErrorValue({ form: "edit", id: "edit-lastname", value: "Ce champ ne peut être vide." }))
            hasError = true
        } else {
            dispatch(setErrorValue({ form: "edit", id: "edit-lastname", value: "" }))
            hasError = false
        }

        if (hasError) {
            return
        }

        const userData = {
            firstName,
            lastName
        }
        
        await updateUser(userData)
    }

    useEffect(() => {
        const loadData = async () => {
            dispatch(setEditForm())
        }
        loadData()
    }, [])

    return (
        <Form>
            <Wrapper>
                <Input 
                    type="text"
                    id="edit-firstname"
                    inputValue={ getInputValue('edit-firstname') }
                    change={ (value) => handleInputChange('edit-firstname', value) }
                    errorMessage={ getErrorValue('edit-firstname') }
                />
            </Wrapper>

            <Wrapper>
                <Input
                    type="text"
                    id="edit-lastname"
                    inputValue={ getInputValue('edit-lastname') }
                    change={ (value) => handleInputChange('edit-lastname', value) }
                    errorMessage={ getErrorValue('edit-lastname') }
                />
            </Wrapper>

            <Wrapper>
                <ActionButton label="Save" classname="form" onclick={ modifyUserAccount } />
            </Wrapper>

            <Wrapper>
                <ActionButton 
                    label="Cancel" 
                    classname="form"
                    onclick={() => dispatch(setModalVisibility({ modal: 'editProfil', visible: false }))}
                />
            </Wrapper>
        </Form>
    )
}

export default EditProfilForm