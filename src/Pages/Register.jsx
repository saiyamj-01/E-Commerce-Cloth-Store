import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Register() {
    return (
        <>
            <Nav />
            <div className="container text-center">
                <section
                    className="py-5 "
                >
                    <h4 className="pb-5">
                        Welcome! Create your account to start shopping.
                    </h4>
                    <form
                        action=""
                        className="d-flex flex-column gap-4 mx-auto p-5"
                        style={{
                            maxWidth: "600px",
                            width: "100%",
                            boxShadow: "2px 2px 10px black",
                            borderRadius: "15px",
                        }}
                    >
                        <h1 className="pb-2">Create Account</h1>
                        <input className="setting" type="text" placeholder="Full Name" />
                        <input className="setting" type="tel" placeholder="Phone Number" />
                        <input className="setting" type="text" placeholder="Address" />
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <input className="setting" type="number" placeholder="Pin Code" />
                            </div>
                            <div className="col-12 col-md-6">
                                <input className="setting" type="text" placeholder="City" />
                            </div>
                        </div>
                        <input className="setting" type="email" placeholder="Email Address" />
                        <input className="setting" type="password" placeholder="Password" />
                        <input
                            className="setting"
                            type="password"
                            placeholder="Confirm Password"
                        />
                        <div className="form-check text-start">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="terms"
                            />
                            <label className="form-check-label" htmlFor="terms">
                                I agree to the Terms & Conditions
                            </label>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn btn-secondary w-100 rounded-4"
                                style={{
                                    maxWidth: "220px",
                                }}
                            >
                                Create Account
                            </button>
                        </div>
                        <div className="text-center text-muted fw-bold">
                            OR
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn btn-dark w-100 rounded-4"
                                style={{
                                    maxWidth: "220px",
                                }}
                            >
                                Continue With Google
                            </button>
                        </div>
                        <Link
                            to="/login"
                            style={{ textDecoration: "none", color: "gray", fontSize: "14px" }}
                        >
                            Already have an account? Sign in
                        </Link>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
}
