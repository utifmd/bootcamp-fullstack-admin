const Footer = () => <>
    <footer class="text-center">
        <div class="container p-4 pb-0">
            <section class="">
                <p class="d-flex justify-content-center align-items-center">
                    <span class="me-3">Have an account?</span>
                    <button type="button" class="btn btn-outline-dark btn-rounded">
                        Sign in!
                    </button>
                </p>
            </section>
        </div>
        <div class="text-center p-3 bg-primary text-white">
            © {new Date().getFullYear()} Copyright:&nbsp;
            <a class="text-white" href="https://utif.pages.dev/">Flutter-BC-19</a>
        </div>
    </footer>
</>
export default Footer