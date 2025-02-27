import { useSelector } from "react-redux"
import BankAccountCard from "../../components/bankAccountCard/BankAccountCard"
import EditProfilButton from "../../components/editProfilButton/EditProfilButton"
import EditProfilForm from "../../components/editProfilForm/EditProfilForm"
import { AccountsContainer, PageElt, Title } from "./UserPageStyle"

function UserPage () {
    const editProfilIsVisible = useSelector(({ modal }) => modal.editProfil)

    return (
        <PageElt>
            <Title>Welcome back<br/>Tony Jarvis!</Title>
            <EditProfilButton />
            { editProfilIsVisible &&
                <EditProfilForm />
            }
            <AccountsContainer>
                <BankAccountCard 
                    label="Argent Bank Checking (x8349)"
                    price="2,082.79"
                    balance="Available Balance"
                />
                <BankAccountCard 
                    label="Argent Bank Savings (x6712)"
                    price="10,928.42"
                    balance="Available Balance"
                />
                <BankAccountCard
                    label="Argent Bank Credit Card (x8349)"
                    price="184.30"
                    balance="Current Balance"
                />
            </AccountsContainer>
        </PageElt>
    )
}

export default UserPage