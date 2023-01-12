import { redirect } from "react-router-dom"
const drivers = [
    {
        id: 1,
        name: "Brad pitt 1",
        role: "driver",
        identityNumber: 1001,
        telp: 6285272869001,
        email: "bradpitt1@gmail.com",
        password: "121212",
        imageUrl: "https://via.placeholder.com/150",
        createdAt: "2022-12-21 11:22:17.87+00",
        updatedAt: null
    },
    {
        id: 2,
        name: "Brad pitt 2",
        role: "driver",
        identityNumber: 1002,
        telp: 6285272869002,
        email: "bradpitt2@gmail.com",
        password: "121212",
        imageUrl: "https://via.placeholder.com/150",
        createdAt: "2022-12-22 11:22:17.87+00",
        updatedAt: null,
        histories: [
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
    },
    {
        id: 2,
        name: "Brad pitt 3",
        role: "driver",
        identityNumber: 1003,
        telp: 6285272869003,
        email: "bradpitt3@gmail.com",
        password: "121212",
        imageUrl: "https://via.placeholder.com/150",
        createdAt: "2022-12-23 11:22:17.87+00",
        updatedAt: null
    }
]
const validations = ({ name, telp, identityNumber, image }) => {
    let error = {}
    if (!name) error.name = "Name must not empty."
    if (!telp) error.telp = "Telp must not empty."
    if (!identityNumber) error.identityNumber = "Identity number number must not empty."
    if (!image) error.image = "Image must not empty."
    return {
        error, isValid: !Object.entries(error).length
    }
}
const getDrivers = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(drivers)
        }, 1000);
    })
}
const getDriver = async ({ params }) => {
    const driverId = params.id
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(drivers[driverId])
        }, 1000);
    })
}
const putDriver = async ({ request, params }) => {
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
            console.log(path)
            return redirect(path)
        } catch (error) {
            return { error: { message: "attempting request" } }
        }
    }
    return { error }
}
export {
    getDrivers, getDriver, putDriver
}