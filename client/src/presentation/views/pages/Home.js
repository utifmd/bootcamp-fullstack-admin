import { useLoaderData } from "react-router-dom"
import { Header, Footer, Banner } from "../components"

const Home = () => {
    const { error } = useLoaderData() || {}
    
    return <>
        <Header />
        {error && 
            <div class="alert alert-danger m-5" role="alert"> {error?.message || error} </div>}
        <Banner />
        <div className="my-5" />
        <Footer />
    </>
}
export default Home