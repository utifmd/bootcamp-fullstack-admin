import { redirect } from "react-router-dom"
import {
    signInValidations, signUpValidations, changerValidations, driverValidations
} from "../presentation/views/helper"
import { Service } from "../data"

const signUp = async ({ request }) => {
    const formData = await request.formData()
    const fields = Object.fromEntries(formData)
    const { error, isValid } = signUpValidations(fields)
    console.log("signup")
    if (isValid) {
        try {
            const authResponse = await Service.authSignUp(fields)
            const { access_token } = authResponse.data
            console.log(access_token)
            const accountResponse = await Service.getAuth(access_token)
            const account = accountResponse.data
            console.log(account)
            
            postAccountInfo(access_token, account)
            return redirect(`/feeds`)
        } catch (error) {
            const message = error.response && error.response.data ? error.response.data.error : `An error occurred.`
            return { error: { message } }
        }
    }
    return { error }
}
const getAuth = async () => {
    try {
        const { access_token } = getAccountInfo()
        const auth = await Service.getAuth(access_token)
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
            const { access_token } = getAccountInfo()
            const response = await Service.putAuth(
                access_token, fields, `multipart/form-data`
            )
            const account = response.data
            
            postAccountInfo(access_token, account)
            return redirect(`../../driver/info/${account.id}`)
        }
        return { error }
    } catch (error) {
        const message = error.response && error.response.data ? error.response.data.error : `An error occurred.`
        return { error: { message } }
    }
}
const signIn = async ({ request }) => {
    const formData = await request.formData()
    const fields = Object.fromEntries(formData)
    const { error, isValid } = signInValidations(fields)

    if (isValid) {
        try {
            const authResponse = await Service.authSignIn(fields)
            const { access_token } = authResponse.data || {}

            const accountResponse = await Service.getAuth(access_token)
            const account = accountResponse.data || {}
            
            postAccountInfo(access_token, account)
            return redirect(`/feeds`)
        } catch (error) {
            const message = error.response && error.response.data ? error.response.data.error : `An error occurred.`
            return { error: { message } }
        }
    }
    return { error }
}
const signOut = async () => {
    try {
        localStorage.clear()
        return redirect(`/`)
    } catch (error) {
        const message = error.response && error.response.data ? error.response.data.error : `An error occurred.`
        return { error: { message } }
    }
}
const changePassword = async ({ request }) => {
    try {
        const { access_token } = getAccountInfo()
        const formData = await request.formData()
        const fields = Object.fromEntries(formData)
        const { error, isValid } = changerValidations(fields)

        if (!isValid) return { error }
        const response = await Service.authChangePassword(access_token, fields)
        const newToken = response.data
        console.log('newToken ',newToken)
        postAccountInfo(newToken)
        return redirect(`/`)

    } catch (error) {
        const message = error.response && error.response.data ? error.response.data.error : `An error occurred.`
        return { error: { message } }
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