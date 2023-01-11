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
const getFeeds = async () => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(histories)
        }, 1000);
    })
}
export default getFeeds