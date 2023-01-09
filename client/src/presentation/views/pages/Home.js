import { Header, Footer } from "../components"
const Home = () => <>
    <Header />
    <div className="container">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 mx-1 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-5 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-1">Pool Angkot</h1>
                <p className="lead">Pool Angkot adalah apliksi rekrutment driver angkot bagi orang-orang yang ingin kejar setoran.</p>
                <p className="lead">Ayo, bergabung menjadi driver kami sekarang juga!</p>
                <a href="/auth/register" type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Join now</a>
            </div>
            <div className="col-lg-5 offset-lg-2 p-0 overflow-hidden">
                <img className="rounded-lg-3" src="./assets/sustainable-lifestyle.svg" alt="hero taxi" height="460" />
            </div>
        </div>
    </div>
    <div className="my-5" />
    <Footer />
</>
export default Home