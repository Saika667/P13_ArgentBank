import styled from "styled-components"

export const Container = styled.section`
    background-color: white;
    padding: 2rem;
    width: 80%;
    box-sizing: border-box;
    margin: 0 auto 2rem auto;

    div:first-child {
        margin-bottom: 1rem;
    }

    @media only screen and (min-width : 920px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div:first-child {
            margin-bottom: 0;
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Span = styled.span`
    display: block;
`

export const Price = styled.span`
    display: block;
    font-size: 2.5rem;
    font-family: 'Avenir-bold';
`

