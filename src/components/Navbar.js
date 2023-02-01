import { Link } from "react-router-dom";

function Navbar() {
    const handleLogout = () => {
        try {
            localStorage.removeItem("admin");
            window.alert("❗ Logged out.");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    const admin = localStorage.getItem("admin");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/about" className="nav-link active">About</Link>
                            </li>
                            {admin ?
                                (<li className="nav-item">
                                    <Link onClick={handleLogout} className="nav-link active" to="/signIn">Sign Out</Link>
                                </li>)
                                : (
                                    <li className="nav-item">
                                        <div className="nav-link active" style={{ cursor: "pointer" }}>Sign In</div>
                                    </li>
                                )
                            }
                            {/* <li className="nav-item">
                                <div onClick={handleLogout} className="nav-link active" style={{ cursor: "pointer" }}>Sign Out</div>
                            </li> */}
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;