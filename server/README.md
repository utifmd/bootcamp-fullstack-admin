# Pool Angkot
## Pool Angkot adalah apliksi manajemen angkot dan driver bagi orang-orang yang ingin kejar setoran.

### One user has many histories
```url
http://localhost:3000/users?_embed=histories
```
### One vehicles has many histories
```url
http://localhost:3000/vehicles?_embed=histories
```
### sequelize cli
```code
npx sequelize-cli model:generate --name History --attributes "quantity:integer, total:integer, idCustomer:integer, idProduct:integer"
```
### One history has one user and one vehicle
```url
http://localhost:5000/histories
http://localhost:5000/histories?_expand=vehicle
http://localhost:5000/histories?_expand=user
http://localhost:5000/signin?_expand=user
```
## Entities

### User
```json
{
    "id": 1,
    "name": "Utif Milkedori",
    "role": "admin",
    "identityNumber": 1001,
    "telp": "+62 852-7286-9008",
    "email": "utifmd@gmail.com",
    "password": "121212",
    "imageUrl": "https://via.placeholder.com/150",
    "createdAt": "2022-12-26 11:22:17.87+00",
    "updatedAt": null
}
```

### Vehicle
```json
 {
    "id": 1,
    "name": "Angkot B01",
    "status": null,
    "route": "Kebayoran lama - Ciledug",
    "passengerCapacity": 6,
    "policeNumber": "B 1001 BA",
    "vendor": "Toyota",
    "imageUrl": "https://via.placeholder.com/150",
    "createdAt": "2022-12-26 11:22:17.87+00",
    "updatedAt": null
}
```

### History
```json
{
    "id": 1,
    "fuel": 300000,
    "income": null,
    "vehicleId": 1,
    "userId": 2,
    "createdAt": "2022-12-26 11:22:17.87+00",
    "updatedAt": null
}
```
## sequelize-cli commands
### History
```code
npx sequelize-cli model:generate --name History --attributes "fuel:integer, income:integer, vehicleId:integer, userId:integer, VehicleId:integer, UserId:integer"
```
### Vehicle
```code
npx sequelize-cli model:generate --name Vehicle --attributes "name:string, status:string, route:string, passengerCapacity:integer, policeNumber:string, vendor:string, imageUrl:string"
```
### Users
```code
npx sequelize-cli model:generate --name User --attributes "name:string, role:string, identityNumber:integer, telp:string, email:string, password:string, imageUrl:stri"
```

## Related Tables

### User
```json
{
    "id": 1,
    "name": "Brad pitt",
    "role": "driver",
    "identityNumber": 1002,
    "telp": "6285272869009",
    "imageUrl": "https://via.placeholder.com/150",
    "histories": [
        {
            "id": 1,
            "fuel": 300000,
            "income": 400000,
            "createdAt": "2023-01-10T09:15:24.980Z",
            "updatedAt": "2023-01-10T09:17:37.012Z"
        }
    ],
    "createdAt": "2023-01-10T08:41:10.273Z",
    "updatedAt": "2023-01-10T08:56:07.468Z"
}
```
### Vehicle
```json
 {
    "id": 2,
    "name": "Angkot B02",
    "status": "standby",
    "route": "Jonggol - Puri indah",
    "passengerCapacity": 5,
    "policeNumber": "B 1002 BA",
    "vendor": "Datsun",
    "imageUrl": "https://via.placeholder.com/150",
    "histories": [
        {
            "id": 1,
            "fuel": 300000,
            "income": 400000,
            "createdAt": "2023-01-10T09:15:24.980Z",
            "updatedAt": "2023-01-10T09:17:37.012Z"
        }
    ],
    "createdAt": "2023-01-10T07:31:37.378Z",
    "updatedAt": "2023-01-10T08:09:30.663Z"
}
```
### History
```json
[
    {
        "id": 1,
        "fuel": 300000,
        "income": 400000,
        "vehicle": {
            "id": 2,
            "name": "Angkot B02",
            "status": "standby",
            "route": "Jonggol - Puri indah",
            "passengerCapacity": 5,
            "policeNumber": "B 1002 BA",
            "vendor": "Datsun",
            "imageUrl": "https://via.placeholder.com/150",
            "createdAt": "2023-01-10T07:31:37.378Z",
            "updatedAt": "2023-01-10T08:09:30.663Z"
        },
        "user": {
            "id": 1,
            "name": "Brad pitt",
            "role": "driver",
            "identityNumber": 1002,
            "telp": "6285272869009",
            "imageUrl": "https://via.placeholder.com/150"
        },
        "createdAt": "2023-01-10T09:15:24.980Z",
        "updatedAt": "2023-01-10T09:17:37.012Z"
    }
]
```

## Refferencies
### 
```url
https://www.sebats.com/2013/03/daftar-angkot-dan-jurusan-di-jakarta.html
```