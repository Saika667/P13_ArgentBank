import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store.js'
import App from './components/App.jsx'
import IndexPage from './pages/indexPage/IndexPage.jsx'
import SignInPage from './pages/signInPage/SignInPage.jsx'
import UserPage from './pages/userPage/UserPage.jsx'
import GlobalStyle from './utils/GlobalStyle.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={ store }>
                <App>
                    <GlobalStyle />
                    <Routes>
                        <Route path="/" element={ <IndexPage /> } />
                        <Route path="/login" element={ <SignInPage /> } />
                        <Route path="/user" element={ <UserPage /> } />
                    </Routes>
                </App>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
