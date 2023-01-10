// import { Navigate } from "react-router-dom"
import { Header, Footer, Banner } from "../components"
// import { useAuth } from "../../state"

const Home = () => {
    // const { token } = useAuth()
    // if(token) return <Navigate to="/feeds" />

    return (<>
        <Header />
        <Banner />
        <div className="my-5" />
        <Footer />
    </>)
}
export default Home