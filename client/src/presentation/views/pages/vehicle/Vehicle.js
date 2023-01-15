import React from "react"
import { SubNavbar } from "../../components"
import { useLoaderData, useActionData, useNavigation } from "react-router-dom"
import VehicleItem from "./VehicleItem"
import { getAccountInfo } from "../../../../domain"
import { backgroundStyle } from "../../helper"

const Vehicles = () => {
    const { vehicles, error } = useLoaderData()
    const { account } = getAccountInfo()
    const actionData = useActionData()
    const navigation = useNavigation()

    return (<div className="bg-image" style={backgroundStyle}>
        <div className="container py-5">
            <SubNavbar
                isBtnNewVehicle={account.role === 'admin'}
                isSearch={true} />

            <div className="p-5 my-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Angkot kami</h1>
                    <p className="col-md-8 fs-4">Silahkan pilih angkot dibawah untuk digunakan.</p>
                </div>
            </div>
            
            {error &&
                <div class="alert alert-danger m-5" role="alert"> {error.message || error} </div>}

            {actionData && actionData.error
                ? <div className="alert alert-danger m-5" role="alert"> {actionData.error.message || `You have taken another car.`} </div>
                : null}

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {actionData
                    ? actionData.vehicles && actionData.vehicles.map((vehicle, i) => <VehicleItem
                        key={i}
                        vehicle={vehicle}
                        actionData={actionData}
                        navigation={navigation} />
                    )
                    : vehicles && vehicles.map((vehicle, i) => <VehicleItem
                        key={i}
                        vehicle={vehicle}
                        actionData={actionData}
                        navigation={navigation} />
                    )}
            </div>
        </div>
    </div>)
}
export default Vehicles