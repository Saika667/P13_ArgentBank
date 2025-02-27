import { ErrorMessage, InputContainer, InputElt, Label } from "./InputStyle"

function Input ({ label, type, id, placeholder }) {
    return (
        <InputContainer>
            <Label htmlFor={ id }>{ label }</Label>
            <InputElt 
                type={ type }
                id={ id }
                placeholder={ placeholder }
            />
            <ErrorMessage></ErrorMessage>
        </InputContainer>
    )
}

export default Input