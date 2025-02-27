import { useDispatch } from "react-redux"
import { Button } from "./EditProfilButtonStyle"
import { setModalVisibility } from "../../features/modal.slice"

function EditProfilButton () {
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(setModalVisibility({ modal: 'editProfil', visible: true }))
    }
    
    return (
        <Button onClick={ () => handleEdit() }>Edit Name</Button>
    )
}

export default EditProfilButton