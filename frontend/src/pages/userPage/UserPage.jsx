import { useDispatch, useSelector } from "react-redux"
import BankAccountCard from "../../components/bankAccountCard/BankAccountCard"
import EditProfilButton from "../../components/editProfilButton/EditProfilButton"
import EditProfilForm from "../../components/editProfilForm/EditProfilForm"
import { AccountsContainer, PageElt, Title } from "./UserPageStyle"
import { useEffect } from "react"
import { setUserData } from "../../features/user.slice"
import { getUser } from "../../services/api"
import { useNavigate } from "react-router-dom"

function UserPage () {
    const editProfilIsVisible = useSelector(({ modal }) => modal.editProfil)
    const user = useSelector(({ user }) => user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const loadData = async () => {
            try {
                const userData = await getUser()
                dispatch(setUserData(userData))
            } catch (e) {
                console.log(e)
                if (e.message === "jwt expired") {
                    navigate('/login')
                }
            }
        }

        if (Object.keys(user).length === 0 && localStorage.getItem('token')) {
            loadData()
        }
    }, [user])

    return (
        <PageElt>
            <Title>Welcome back<br/>{ user.firstName + ' ' + user.lastName }!</Title>

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