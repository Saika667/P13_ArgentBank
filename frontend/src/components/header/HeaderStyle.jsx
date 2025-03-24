import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.313rem 1.25rem;
    box-sizing: border-box;
`

export const LogoWrapper = styled(Link)`
    width: 12.5rem;
    display: block;
`

export const Logo = styled.img`
    width: 100%;
`

export const StyledSvg = styled(FontAwesomeIcon)`
    font-size: 15px;
    padding-right: .5rem;
`

export const NavWrapper = styled.div`
    display: flex;
`

export const Nav = styled.nav`

`

export const ItemWrapper = styled.div`
    user-select: none;
    cursor: pointer;
`

export const StyledLink = styled(Link)`
    font-family: "Avenir-bold", Helvetica, Arial, sans-serif;
    text-decoration: none;
    color: #2c3e50;
    margin-right: 1rem;
`

export const Span = styled.span`
    font-family: "Avenir-bold", Helvetica, Arial, sans-serif;
`