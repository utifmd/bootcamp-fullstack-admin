# Pool Angkot
## Pool Angkot adalah apliksi manajemen angkot dan driver bagi orang-orang yang ingin kejar setoran.
## sequelize-cli commands
### History
```code
npx sequelize-cli model:generate --name History --attributes "fuel: integer, income: integer, vehicleId: integer, userId: integer, idVehicle:integer, idUser:integer"
```
### Vehicle
```code
npx sequelize-cli model:generate --name Vehicle --attributes "name:string, status:string, route:string, passengerCapacity:string, policeNumber:string, vendor:string, imageUrl:string, userId:integer, idHistory:integer"
```
### Users
```code
npx sequelize-cli model:generate --name User --attributes "name:string, role:string, identityNumber:integer, telp:string, email:string, password:string, imageUrl:string, idHistory:integer"
```

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
    "id": 2,
    "name": "Brad pitt",
    "role": "driver",
    "identityNumber": 1002,
    "telp": "+62 852-7286-9009",
    "email": "bradpitt@gmail.com",
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
    "userId": 2,
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

## Refferencies
### 
```url
https://www.sebats.com/2013/03/daftar-angkot-dan-jurusan-di-jakarta.html
```