import { createGlobalStyle } from "styled-components"
import Avenir from "../assets/fonts/AvenirLTStd-Book.otf"
import AvenirLight from "../assets/fonts/AvenirLTStd-Light.otf"
import AvenirMedium from "../assets/fonts/AvenirLTStd-Medium.otf"
import AvenirBold from "../assets/fonts/AvenirLTStd-Heavy.otf"

const StyledGlobalStyle = createGlobalStyle`
    :root {
        font-size: 14px;
    }
    body {
        margin: 0;
        font-family: 'Avenir';
    }
    @font-face {
        font-family: 'Avenir';
        src: url(${ Avenir }) format("trueType");
    }
    @font-face {
        font-family: 'Avenir-light';
        src: url(${ AvenirLight }) format("trueType");
    }
    @font-face {
        font-family: 'Avenir-medium';
        src: url(${ AvenirMedium }) format("trueType");
    }
    @font-face {
        font-family: 'Avenir-bold';
        src: url(${ AvenirBold }) format("trueType");
    }
`

function GlobalStyle () {
    return <StyledGlobalStyle />
}

export default GlobalStyle