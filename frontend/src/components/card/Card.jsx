import { CardWrapper, Description, Image, ImageWrapper, Title } from "./CardStyle"

function Card ({ title, description, image }) {
    return (
        <CardWrapper>
            <ImageWrapper>
                <Image src={ image } alt="logo avantage"/>
            </ImageWrapper>

            <Title>{ title }</Title>
            <Description>{ description }</Description>
        </CardWrapper>
    )
}

export default Card