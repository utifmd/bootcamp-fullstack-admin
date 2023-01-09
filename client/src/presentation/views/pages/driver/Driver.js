import { useState } from "react"
import { NavBar, DriverItem } from "../../components"
import { backgroundStyle } from "../../helper"

const users = [
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
        updatedAt: null
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
const Driver = () => {
    const [form] = useState({ users, error: {}, loading: false })
    const [regex, setRegex] = useState("")
    const [sortToggle, setSortToggle] = useState(false)

    const onSearchValueChange = (e) => {
        e.preventDefault()
        let value = e.target.value
        setRegex(value)
    }
    return (<div className="bg-image" style={backgroundStyle}>
        {/* <NavBar 
            active={'drivers'}
            sortToggle={sortToggle}
            setSortToggle={setSortToggle}
            onSearchValueChange={onSearchValueChange} /> */}

        <div className="container pt-4 g-2 mt-5">
            <div class="row row-cols-1 row-cols-md-2">
                { form.users
                    .sort((a, b) => sortToggle 
                        ? a.createdAt - b.createdAt 
                        : b.createdAt - a.createdAt)
                    .filter(({ name, email }) => name.includes(regex) || email.includes(regex))
                    .map(user => <DriverItem user={user} />)
                }
            </div>
        </div>
    </div>)
}
export default Driver