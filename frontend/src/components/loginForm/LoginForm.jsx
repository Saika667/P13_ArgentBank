import { useNavigate } from "react-router-dom"
import Input from "../input/Input"
import { Checkbox, Form, Label, StyledSvg, Title, Wrapper } from "./LoginFormStyle"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import ActionButton from "../actionButton/ActionButton"

function LoginForm () {
    const navigate = useNavigate()
    
    const login = () => {
        navigate('/user')
    }

    return (
        <Form>
            <StyledSvg icon={ faUserCircle } />
            <Title>Sign In</Title>
            
            <Input 
                label="Username"
                type="text"
                id="username"
            />

            <Input
                label="Password"
                type="password"
                id="password"
            />

            <Wrapper>
                <Checkbox type="checkbox" id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </Wrapper>

            <ActionButton onclick={ login } label="Sign In" />
        </Form>
    )
}

export default LoginForm