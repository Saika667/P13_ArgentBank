import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    width: 35rem;
    margin: 0 0 2rem 0;
`

export const Wrapper = styled.div`
    width: 47%;
    display: flex;

    &:nth-child(odd) {
        justify-content: flex-end;
    }

    &:nth-child(even) {
        justify-content: flex-start;
    }
`