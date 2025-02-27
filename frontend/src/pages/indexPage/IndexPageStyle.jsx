import styled from "styled-components"

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width : 920px) {
        flex-direction: row;
    }
`