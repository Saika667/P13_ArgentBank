import { useDispatch } from "react-redux"
import ActionButton from "../actionButton/ActionButton"
import Input from "../input/Input"
import { Form, Wrapper } from "./EditProfilFormStyle"
import { setModalVisibility } from "../../features/modal.slice"

function EditProfilForm () {
    const dispatch = useDispatch()

    return (
        <Form>
            <Wrapper>
                <Input />
            </Wrapper>

            <Wrapper>
                <Input />
            </Wrapper>

            <Wrapper>
                <ActionButton label="Save" classname="form" />
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