import { redirect } from "react-router-dom"

const vehicles = [
    {
        "id": 1,
        "name": "Angkot B01",
        "status": "null",
        "route": "Kebayoran lama - Ciledug",
        "passengerCapacity": 6,
        "policeNumber": "B 1001 BA",
        "vendor": "Toyota",
        "imageUrl": "https://via.placeholder.com/150",
        "userId": 2,
        "createdAt": "2022-12-26 11:22:17.87+00",
        "updatedAt": null,
        "histories": [
            {
                "id": 1,
                "fuel": 300000,
                "income": 1300000,
                "vehicleId": 1,
                "userId": 2,
                "createdAt": "2022-12-26 10:22:17.87+00",
                "updatedAt": "2022-12-26 23:22:17.87+00"
            }
        ]
    }
]
const validations = ({ name, route, policeNumber, vendor, passengerCapacity, image }) => {
    let error = {}
    if (!name) error.name = "Name must not empty."
    if (!route) error.route = "Route must not empty."
    if (!policeNumber) error.policeNumber = "Police number must not empty."
    if (!vendor) error.vendor = "Vendor must not empty."
    if (!passengerCapacity) error.passengerCapacity = "Passenger capacity must not empty."

    return {
        error, isValid: !Object.entries(error).length
    }
}
const getVehicles = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vehicles)
        }, 2000);
    })
}
const getVehicle = async ({ params }) => {
    const vehicleId = params.id
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vehicles[vehicleId])
        }, 2000);
    })
}
const postVehicle = async ({ request }) => {
    const formData = await request.formData()
    const fields = Object.fromEntries(formData)
    const { error, isValid } = validations(fields)
    if (isValid) {
        try {
            const path = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(`../list`)
                }, 1000)
            })
            return redirect(path)
        } catch (error) {
            return { error: { message: "attempting request" } }
        }
    }
    return { error }
}
const putVehicle = async ({ request, params }) => {
    const formData = await request.formData()
    const fields = Object.fromEntries(formData)
    const { error, isValid } = validations(fields)
    if (isValid) {
        try {
            const path = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(`../info/${params.id}`)
                }, 1000)
            })
            return redirect(path)
        } catch (error) {
            return { error: { message: "attempting request" } }
        }
    }
    return { error }
}
export {
    getVehicles, getVehicle, postVehicle, putVehicle
}