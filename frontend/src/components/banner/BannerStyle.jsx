import styled from "styled-components"
import banner from "../../assets/bank-tree.jpeg"

export const BannerContainer = styled.div`
    background: url(${ banner }) no-repeat center / cover ;
    height: 18.75rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width : 920px) {
        justify-content: flex-end;
        background-position: 0% 33%;
        height: 25rem;
    }
`

export const Wrapper = styled.div`
    background-color: white;
    padding: 2rem;
    width: 12.5rem;

    @media only screen and (min-width : 920px) {
        margin-right: 6rem;
        width: 18.75rem;
    }
`

export const Title = styled.h2`
    margin: 0;
    font-size: 1rem;
    font-family: 'Avenir-bold', Helvetica, Arial, sans-serif;

    @media only screen and (min-width : 920px) {
       font-size: 1.5rem;
    }
`

export const Catchphrase = styled.span`
    margin-top: 1rem;
    display: block;
    @media only screen and (min-width : 920px) {
        font-size: 1.2rem;
    }
`