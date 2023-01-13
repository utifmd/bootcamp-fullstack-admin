import { Form, useActionData, useNavigation } from "react-router-dom"
const Edit = () => {
    const navigation = useNavigation()
    const { error } = useActionData() || {}

    return (<>
        <div className="container">
            <Form className="p-4 p-md-5" method="put">
                <div className="lead mb-3">Please complete this info</div>
                <div className="mt-3">
                    <div className="form-floating">
                        <input
                            name="income"
                            type="number"
                            className="form-control"
                            id="income"
                            placeholder="(IDR) Income of theday" />
                        <label htmlFor="income">Income</label>
                    </div>
                    {error
                        ?.income
                        ?.length
                        ? <small className="text-danger">* {error.income}</small>
                        : null}
                </div>
                {error
                    ?.message
                    ?.length
                    ? <div class="alert alert-danger mt-2" role="alert"> {error?.message} </div>
                    : null}
                <button
                    className="btn btn-lg btn-primary mt-3"
                    disabled={navigation.state === "loading" || navigation.state === "submitting"}
                    type="submit">Save</button>

                <hr className="my-4" />
                <small className="text-muted">© 2023-{new Date().getFullYear()}</small>
            </Form>
        </div>
    </>)
}
export default Edit