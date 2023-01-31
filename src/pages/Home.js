import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Card from "../components/Card";

function Home() {
    return (
        <>
            <Navbar />
            {/* <Card /> */}
            <Footer />
            <Outlet />
        </>
    );
}

export default Home;