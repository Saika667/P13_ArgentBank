import { useNavigate } from "react-router-dom"
import Input from "../input/Input"
import { Checkbox, Form, Label, StyledSvg, Title, Wrapper } from "./LoginFormStyle"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import ActionButton from "../actionButton/ActionButton"
import { useDispatch, useSelector } from 'react-redux'
import { clearForm, setInputValue, setUserData } from "../../features/user.slice"
import { loginApi } from "../../services/api"

function LoginForm () {
    const loginForm = useSelector(({ user }) => user.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getInputValue = (inputId) => {
        return loginForm.find(loginInput => loginInput.id === inputId).value
    }

    const handleInputChange = (inputId, value) => {
        dispatch(setInputValue({ form: "login", id: inputId, value }))
    }

    const login = async () => {
        const username = getInputValue('login-username')
        const password = getInputValue('login-password')

        if(username === "" || password === "") {
            return
        }

        const loginObject = {
            email: username,
            password: password
        }

        try {
            const connexion = await loginApi(loginObject)
            localStorage.setItem('token', connexion.token)
            dispatch(clearForm('login'))
            navigate('/user')
        } catch (e) {

        }
        
    }

    return (
        <Form onSubmit={(e) => { e.preventDefault() }}>
            <StyledSvg icon={ faUserCircle } />
            <Title>Sign In</Title>
            
            <Input 
                label="Username"
                type="text"
                id="login-username"
                inputValue={ getInputValue('login-username') }
                change={ (value) => handleInputChange('login-username', value) }
            />

            <Input
                label="Password"
                type="password"
                id="login-password"
                inputValue={ getInputValue('login-password') }
                change={ (value) => handleInputChange('login-password', value) }
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