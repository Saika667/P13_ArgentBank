import { BannerContainer, Catchphrase, Title, Wrapper } from "./BannerStyle";

function Banner () {
    return (
        <BannerContainer>
            <Wrapper>
                <Title>No fees.</Title>
                <Title>No minimum deposit.</Title>
                <Title>High interest rates.</Title>
                <Catchphrase>Open a savings account with Argent Bank today !</Catchphrase>
            </Wrapper>
        </BannerContainer>
    )
}

export default Banner