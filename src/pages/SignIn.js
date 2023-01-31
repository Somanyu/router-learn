function SignUp() {
    return (
        <>
            <div className="container w-50 m-auto mt-5">

                <form class="row g-3 card p-3">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="Enter username" required />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Another label</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter password" required />
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUp;