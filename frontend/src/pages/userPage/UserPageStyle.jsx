import styled from "styled-components"
import { Page } from "../../utils/Atoms"

export const PageElt = styled(Page)`
    background-color: #12002b;
    padding: 2rem 0 0 0;
    min-height: calc(100vh - 70px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    color: white;
    font-size: 2rem;
    font-family: 'Avenir-bold';
    text-align: center;
    margin: 0;
`

export const AccountsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`