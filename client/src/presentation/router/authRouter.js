import { Login, Register, AuthEdit } from "../views/pages"

const router = [
    {
        path: "auth/login/",
        element: <Login />
    },
    {
        path: "auth/register/",
        element: <Register />
    },
    {
        path: "auth/edit/",
        element: <AuthEdit />
    }
]
export default router