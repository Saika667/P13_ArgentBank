import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"
import { Page } from "../../utils/Atoms"
import { Wrapper } from "./IndexPageStyle"
import chat from "../../assets/icon-chat.png"
import money from "../../assets/icon-money.png"
import security from "../../assets/icon-security.png"
import Footer from "../../components/footer/Footer"

function IndexPage () {
    return (
        <>
            <Page>
                <Banner />
                
                <Wrapper>
                    <Card 
                        title="You are our #1 priority"
                        image={ chat }
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    />

                    <Card 
                        title="More savings means higher rates"
                        image={ money }
                        description="The more you save with us, the higher your interest rate will be!"
                    />

                    <Card 
                        title="Security you can trust"
                        image={ security }
                        description="We use top of the line encryption to make sure your data and money is always safe."
                    />
                </Wrapper>
            </Page>

            <Footer />
        </>
    )
}

export default IndexPage