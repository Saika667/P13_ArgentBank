import { HeaderContainer, Logo, LogoWrapper } from "./HeaderStyle";
import logo from "../../assets/argentBankLogo.png"

function Header () {
    return (
        <HeaderContainer>
            <LogoWrapper>
                <Logo src={ logo } alt="logo de Argent Bank" />
            </LogoWrapper>
        </HeaderContainer>
    )
}

export default Header