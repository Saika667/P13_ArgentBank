import styled from "styled-components"

export const CardWrapper = styled.article`
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width : 920px) {
        width: 30%;
    }
`

export const ImageWrapper = styled.div`
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1.625rem;
    box-sizing: border-box;
    width: fit-content;
    height: fit-content;
`

export const Image = styled.img`
    width: 6.25rem;
    height: 6.25rem;
`

export const Title = styled.h3`
    text-align: center;
    font-size: 1.25rem;
    font-family: "Avenir-bold", Helvetica, Arial, sans-serif;
    color: #222;
`

export const Description = styled.p`
    text-align: center;
`