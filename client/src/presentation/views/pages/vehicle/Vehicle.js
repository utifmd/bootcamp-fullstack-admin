import { useState } from "react"
import { NavBar, VehicleItem } from "../../components"

const vehicles = [
    {
        "id": 1,
        "name": "Angkot B01",
        "status": null,
        "route": "Kebayoran lama - Ciledug",
        "passengerCapacity": 6,
        "policeNumber": "B 1001 BA",
        "vendor": "Toyota",
        "imageUrl": "https://via.placeholder.com/150",
        "userId": 2,
        "createdAt": "2022-12-26 11:22:17.87+00",
        "updatedAt": "2022-12-26 11:22:17.87+00"
    }
]
const backgroundStyle = {
    minHeight: "100vh",
    background: `linear-gradient(45deg, hsla(0, 0%, 98%, 0.6), hsla(0, 0%, 85%, 0.6) 100%)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const Vehicles = () => {
    const [form] = useState({ vehicles, error: {}, loading: false })
    const [regex, setRegex] = useState("")
    const [sortToggle, setSortToggle] = useState(false)

    const onSearchValueChange = (e) => {
        e.preventDefault()
        let value = e.target.value
        setRegex(value)
    }
    return (<div className="bg-image" style={backgroundStyle}>
        <NavBar
            active={'vehicles'}
            sortToggle={sortToggle}
            setSortToggle={setSortToggle}
            onSearchValueChange={onSearchValueChange} />

        <div className="container py-5">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Angkot kami</h1>
                    <p className="col-md-8 fs-4">Silahkan pilih angkot dibawah untuk digunakan.</p>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {form.vehicles.sort((a, b) => sortToggle
                    ? a.createdAt - b.createdAt
                    : b.createdAt - a.createdAt)
                    .filter(({ name, route, policeNumber }) => name.includes(regex) || route.includes(regex) || policeNumber.includes(regex))
                    .map(vehicle => <VehicleItem vehicle={vehicle} />)
                }
            </div>
        </div>
    </div>)
}
export default Vehicles