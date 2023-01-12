import { redirect } from "react-router-dom"
import { 
    signInValidations, signUpValidations, changerValidations, driverValidations 
} from "../presentation/views/helper"
import { Service } from "../data"

const signUp = async ({ request }) => {
    const formData = await request.formData()
    const fields = Object.fromEntries(formData)
    const { error, isValid } = signUpValidations(fields)

    if (isValid) {
        try {
            const token = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        access_token: `eyJhbGciOiJIUzI1NiJ9.MQ.NdoybHTM5-q5sE7XOYgDW-zDTHbFiMmiFQxbiM3Qgss`
                    })
                }, 1000)
            })
            const account = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        name: "Brad pitt",
                        imageUrl: "https://via.placeholder.com/150"
                    })
                }, 1000)
            })
            postAccountInfo(token, account)
            return redirect(`/feeds`)
        } catch (error) {
            return { error: { message: "an error occurred." } }
        }
    }
    return { error }
}
const getAuth = async ({ params }) => {
    try {
        const auth = await Service.getAuth(params.id)
        if (!auth.data) {
            return { error: { message: "There was an error occurred." } }
        }
        return { auth: auth.data }
    } catch (error) {
        return { error }
    }
}
const putAuth = async ({ request, params }) => {
    try {
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = driverValidations(fields)
        
        if (isValid) {
            await Service.putAuth(fields)

            return redirect(`../info/${params.id}`)
        }
        return { error }
    } catch (error) {
        return { error }
    }
}
const signIn = async ({ request }) => {
    const formData = await request.formData()
    const fields = Object.fromEntries(formData)
    const { error, isValid } = signInValidations(fields)

    if (isValid) {
        try {
            const token = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if(fields.email === "u@m.com" && fields.password === "12") 
                        resolve(`eyJhbGciOiJIUzI1NiJ9.MQ.NdoybHTM5-q5sE7XOYgDW-zDTHbFiMmiFQxbiM3Qgss`)
                    else
                        reject("{message: }")
                }, 1000)
            })
            const account = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        name: "Brad pitt",
                        role: "driver",
                        imageUrl: "https://via.placeholder.com/150"
                    })
                }, 1000)
            })
            postAccountInfo(token, account)
            return redirect(`/feeds`)
        } catch (error) {
            return { error: { message: `There was an error loading your account.` } }
        }
    }
    return { error }
}
const signOut = async () => {
    try {
        const path = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`/`)
            }, 1000)
        })
        localStorage.clear()
        return redirect(path)
    } catch (error) {
        console.log(error)
        return { error: { message: "an error occurred." } }
    }
}
const changePassword = async ({ request }) => {
    try {
        if(!localStorage.getItem("access_token")) return redirect(`/`)
        
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = changerValidations(fields)
    
        if (!isValid) return { error }
        return redirect(`/`)
        
    } catch (error) {
        return error
    }
}
const checkAccessToken = async () => {
    try {
        const token = localStorage.getItem("access_token")
        if (!token) return null
        return redirect(`/feeds`)
    } catch (error) {
        return error
    }
}
const getAccountInfo = () => {
    try {
        const account = {}
        const token = localStorage.getItem("access_token")
        account.name = localStorage.getItem("name")
        account.imageUrl = localStorage.getItem("imageUrl")
        account.role = localStorage.getItem("role")

        return { access_token: token, account: account }
    } catch (error) {
        return error
    }
}
const postAccountInfo = (token, account) => {
    localStorage.setItem("access_token", token)
    localStorage.setItem("name", account.name)
    localStorage.setItem("imageUrl", account.imageUrl)
    localStorage.setItem("role", account.role)
}
export {
    getAuth, putAuth, changePassword, signUp, signIn, signOut, checkAccessToken, getAccountInfo
}