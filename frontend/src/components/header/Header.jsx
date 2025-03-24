import { HeaderContainer, StyledLink, Logo, LogoWrapper, Nav, NavWrapper, Span, StyledSvg, ItemWrapper } from "./HeaderStyle"
import logo from "../../assets/argentBankLogo.png"
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { resetUser } from "../../features/user.slice"
// import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
function Header () {
    const user = useSelector(({ user }) => user.user)
    const isConnected = Object.keys(user).length !== 0 && localStorage.getItem('token')
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(resetUser())
    }

    return (
        <HeaderContainer>
            <LogoWrapper to="/">
                <Logo src={ logo } alt="logo de Argent Bank" />
            </LogoWrapper>

            <NavWrapper>
                { isConnected &&
                    <StyledLink to="/user">
                        <StyledSvg icon={ faUserCircle } />
                        <Span>{ user.firstName }</Span>
                    </StyledLink>
                }
                
                <Nav>
                    { isConnected ?
                        <ItemWrapper onClick={ () => logout() }>
                            <StyledSvg icon={ faSignOut } />
                            <Span>Sign Out</Span>
                        </ItemWrapper>
                    :
                        <StyledLink to="/login">
                            <StyledSvg icon={ faUserCircle } />
                            <Span>Sign In</Span>
                        </StyledLink>  
                    }
                </Nav>
            </NavWrapper>
        </HeaderContainer>
    )
}

export default Header