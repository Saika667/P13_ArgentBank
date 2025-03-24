import styled from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputElt = styled.input`
    padding: 5px;
    font-size: 1.2rem;
    box-sizing: border-box;
`

export const Label = styled.label`
    font-family: 'Avenir-bold', Helvetica, Arial, sans-serif;
    font-size: 1.2rem;
`

export const ErrorMessage = styled.span`
    font-size: .8rem;
    color: red;
    margin: .5rem 0 1rem 0;
`