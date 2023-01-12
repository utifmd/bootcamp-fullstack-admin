import { redirect } from "react-router-dom"
const changerValidation = ({ currentPassword, password, confirmPassword }) => {
    let error = {}
    if (!currentPassword) error.currentPassword = "Current password could not be empty."
    if (!password) error.password = "New password could not be empty."
    if (!confirmPassword) error.confirmPassword = "Confirm password could not be empty."
    if (confirmPassword !== password) error.confirmPassword = "Passwords does not match."

    return {
        error, isValid: !Object.entries(error).length
    }
}
const signUpValidation = ({ email, password, confirmPassword }) => {
    let error = {}
    if (!email) error.email = "Current password could not be empty."
    if (!password) error.password = "New password could not be empty."
    if (!confirmPassword) error.confirmPassword = "Confirm password could not be empty."
    if (confirmPassword !== password) error.confirmPassword = "Passwords does not match."

    return {
        error, isValid: !Object.entries(error).length
    }
}
const signInValidation = ({ email, password }) => {
    let error = {}
    if (!email) error.email = "Current password could not be empty."
    if (!password) error.password = "New password could not be empty."

    return {
        error, isValid: !Object.entries(error).length
    }
}
const signIn = async ({ request }) => {
    const formData = await request.formData()
    const fields = Object.fromEntries(formData)
    const { error, isValid } = signInValidation(fields)

    if (isValid) {
        try {
            const path = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(`/feeds`)
                }, 1000)
            })
            // {
            //     name: "Utif milkedori", 
            //     imageUrl: "https://via.placeholder.com/150"
            // }
            return redirect(path)
        } catch (error) {
            return { error: { message: "attempting request" } }
        }
    }
    return { error }
}
const changePassword = async ({ request }) => {
    const formData = await request.formData()
    const fields = Object.fromEntries(formData)
    const { error, isValid } = changerValidation(fields)

    if (isValid) {
        return { error: { message: "There was an error creating your account." } }
    }
    return { error }
}
const getAccessToken = async () => {
    try {
        const token = await new Promise((resolve, reject) => {
            setTimeout(() => {
                // reject({message: "There was an error loading your account."})
                resolve({acceess_token: "eyJhbGciOiJIUzI1NiJ9.Ng.wz_Vuta0wPcDkryVdi5vB4SUYf7csoTu2og1oUvM8vY"})
            }, 1000);
        })
        if (!token) {
            return { error: { message: "There was an error loading your account." } }
        }
        return redirect(`/feeds?access_token=${token.acceess_token}`)
    } catch (error) {

        console.log(JSON.stringify(error, null, 2))
        return error
    }
}
export {
    changePassword, signIn, getAccessToken
}