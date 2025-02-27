import { HeaderContainer, StyledLink, Logo, LogoWrapper, Nav, NavWrapper, Span, StyledSvg, ItemWrapper } from "./HeaderStyle"
import logo from "../../assets/argentBankLogo.png"
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons"
// import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
function Header () {
    return (
        <HeaderContainer>
            <LogoWrapper to="/">
                <Logo src={ logo } alt="logo de Argent Bank" />
            </LogoWrapper>

            <NavWrapper>
                <ItemWrapper>
                    <StyledSvg icon={ faUserCircle } />
                    <Span>Tony</Span>
                </ItemWrapper>
                
                <Nav>
                    <StyledLink to="/login">
                        <StyledSvg icon={ faUserCircle } />
                        <Span>Sign In</Span>
                    </StyledLink>
                    {/* <StyledLink>
                        <StyledSvg icon={ faSignOut } />
                        <Span>Sign Out</Span>
                    </StyledLink> */}
                </Nav>
            </NavWrapper>
        </HeaderContainer>
    )
}

export default Header