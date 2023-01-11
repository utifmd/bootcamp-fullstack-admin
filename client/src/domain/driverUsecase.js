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
export {
    getDrivers, getDriver
}