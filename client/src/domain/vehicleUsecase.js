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
export {
    getVehicles, getVehicle
}