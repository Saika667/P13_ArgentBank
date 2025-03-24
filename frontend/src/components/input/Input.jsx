import { ErrorMessage, InputContainer, InputElt, Label } from "./InputStyle"

function Input ({ label, type, id, placeholder, change, inputValue, errorMessage }) {
    return (
        <InputContainer>
            <Label htmlFor={ id }>{ label }</Label>
            <InputElt 
                type={ type }
                id={ id }
                placeholder={ placeholder }
                onChange={ (e) => change(e.target.value) }
                value={ inputValue }
            />
            <ErrorMessage>{ errorMessage }</ErrorMessage>
        </InputContainer>
    )
}

export default Input