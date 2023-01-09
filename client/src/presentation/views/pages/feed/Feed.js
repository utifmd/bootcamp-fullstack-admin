import { useState } from "react"
import { asDateTimeFormat, asCapitalize } from "../../helper"
const histories = [
    {
        id: 1,
        fuel: 300000,
        income: null,
        vehicleId: 1,
        userId: 2,
        createdAt: "2022-12-27 11:22:17.87+00",
        updatedAt: null,
        user: {
            id: 2,
            name: "Brad pitt",
            role: "driver",
            identityNumber: 1002,
            telp: 6285272869009,
            email: "bradpitt@gmail.com",
            password: "121212",
            imageUrl: "https://via.placeholder.com/150",
            createdAt: "2022-12-26 11:22:17.87+00",
            updatedAt: null
        },
        vehicle: {
            id: 1,
            name: "Angkot B01",
            status: "onboarding",
            route: "Kebayoran lama - Ciledug",
            passengerCapacity: 6,
            policeNumber: "B 1001 BA",
            vendor: "Toyota",
            imageUrl: "https://via.placeholder.com/150",
            userId: 2,
            createdAt: "2022-12-26 11:22:17.87+00",
            updatedAt: null
        }
    },
    {
        id: 1,
        fuel: 300000,
        income: null,
        vehicleId: 1,
        userId: 2,
        createdAt: "2022-12-26 11:22:17.87+00",
        updatedAt: null,
        user: {
            id: 2,
            name: "Brad pitt",
            role: "driver",
            identityNumber: 1002,
            telp: 6285272869009,
            email: "bradpitt@gmail.com",
            password: "121212",
            imageUrl: "https://via.placeholder.com/150",
            createdAt: "2022-12-26 11:22:17.87+00",
            updatedAt: null
        },
        vehicle: {
            id: 1,
            name: "Angkot B01",
            status: "onboarding",
            route: "Kebayoran lama - Ciledug",
            passengerCapacity: 6,
            policeNumber: "B 1001 BA",
            vendor: "Toyota",
            imageUrl: "https://via.placeholder.com/150",
            userId: 2,
            createdAt: "2022-12-26 11:22:17.87+00",
            updatedAt: null
        }
    }
]
const Feed = () => {
    const [form, setForm] = useState({ histories, error: {}, loading: true })
    return (
        <div className="container">
            <div className="row">
                <table>
                    {form.histories.map((history, i) => i % 2 == 0
                        ? <tr><td></td><td className="border-start border-5 py-5 px-2">
                            <div class="card">
                                <div class="card-header">{history.vehicle.policeNumber}</div>
                                <div class="card-body">
                                    <div className="row">
                                        <div className="col-md-4"><img src={history.user.imageUrl} className="rounded-circle" alt="driver" /></div>
                                        <blockquote class="col-md-8 blockquote mb-0">
                                            <p>{asCapitalize(history.user.role)} {history.user.name} sedang kejar setoran dengan {history.vehicle.name} rute {history.vehicle.route}</p>
                                            <small className="text-info">{history.vehicle ? "Onboarding" : "Standby"} {asDateTimeFormat(history.createdAt)}</small>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </td></tr>
                        : <tr><td className="border-end border-5 py-5 px-2 text-end">
                            <div class="card">
                                <div class="card-header">{history.vehicle.policeNumber}</div>
                                <div class="card-body">
                                    <div className="row">
                                        <blockquote class="col-md-8 blockquote mb-0">
                                            <p>{asCapitalize(history.user.role)} {history.user.name} sedang kejar setoran dengan {history.vehicle.name} rute {history.vehicle.route}</p>
                                            <small className="text-info">{history.vehicle ? "Onboarding" : "Standby"} {asDateTimeFormat(history.createdAt)}</small>
                                        </blockquote>
                                        <div className="col-md-4"><img src={history.user.imageUrl} className="rounded-circle" alt="driver" /></div>
                                    </div>
                                </div>
                            </div>
                        </td><td></td></tr>
                    )}
                </table>
            </div>
        </div>
    )
}
export default Feed