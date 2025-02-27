import ViewTransactionButton from "../viewTransactionButton/ViewTransactionButton"
import { Container, Span, Wrapper, Price } from "./BankAccountCardStyle"

function BankAccountCard ({ label, price, balance }) {
    return (
        <Container>
            <Wrapper>
                <Span>{ label }</Span>
                <Price>${ price }</Price>
                <Span>{ balance }</Span>
            </Wrapper>

            <Wrapper>
                <ViewTransactionButton />
            </Wrapper>
        </Container>
    )
}

export default BankAccountCard