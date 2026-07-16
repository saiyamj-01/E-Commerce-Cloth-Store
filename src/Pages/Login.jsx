import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import loginimage from "../assets/LoginPage.png"
import { Link } from "react-router-dom"
import "./Login.css"

export default function Login() {
    return (
        <>
            <Nav />
            <section className="row g-0">
                <section className="bg-info col-12 col-md-6 d-flex flex-column justify-content-center align-items-center py-5">
                    <img
                        src={loginimage}
                        alt="Login Page Image"
                        className="img-fluid"
                        style={{ maxHeight: "500px", objectFit: "contain" }}
                    />
                    <div className="pb-5">
                        <h1 className="text-center text-white pt-5 mt-5">
                            Fashion That Defines You
                        </h1>
                        <p className="text-center text-white fs-5">
                            Discover the latest trends for Men, Women & Kids.
                        </p>
                    </div>
                </section>
                <section className="col-12 col-md-6 bg-light d-flex justify-content-center align-items-center p-4">
                    <div className="w-100 px-3" style={{ maxWidth: "420px" }}>
                        <h1 className=" text-center pt-5">Cloth Store</h1>
                        <h2 className="text-dark-emphasis pb-5 text-center">
                            Welcome To Cloth Store
                        </h2>
                        <form className="d-flex flex-column gap-4 text-center container">
                            <input
                                className="setting bg-light"
                                style={{ fontSize: '17px' }}
                                type="email"
                                placeholder="Enter Your Email"
                                required
                            />
                            <input
                                className="setting bg-light"
                                style={{ fontSize: '17px' }}
                                type="password"
                                placeholder="Enter Your Password"
                                required
                            />
                            <Link
                                to="/forget-pass"
                                className="text-secondary text-decoration-none"
                            >
                                Forget password?
                            </Link>
                            <button
                                className="btn btn-secondary w-75 rounded-pill"
                                style={{
                                    margin: "auto",
                                    height: "40px",
                                    fontSize: "15px",
                                    color: "white",
                                }}
                            >
                                Sign in
                            </button>
                            <p className="pt-5 fw-bold fs-5">------------  OR  ------------</p>
                            <span className="d-flex justify-content-center fs-5 gap-2">
                                <a
                                    href=""
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        textDecoration: "none",
                                        backgroundColor: "#ccc",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <i className="fa-brands fa-google mt-2"></i>
                                </a>
                                <p>Sign in with Google</p>
                            </span>
                            <span
                                className="d-flex justify-content-center fs-5 gap-2"
                                style={{ color: "gray" }}
                            >
                                {/* <p></p>  */}
                                <Link to="/register" style={{ textDecoration: "none", color: "gray", fontSize: "18px" }}>
                                    New User? Create Account
                                </Link>
                            </span>
                        </form>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}
