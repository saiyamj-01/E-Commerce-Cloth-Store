import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import pic from "../assets/Home/home.webp";
import women from "../assets/Home/Women.avif";
import men from "../assets/Home/Men.jpg";
import kids from "../assets/Home/Kids.jpg";
import ad1 from "../assets/Home/ad1.jpg";
import ad2 from "../assets/Home/ad2.jpg";
import ad3 from "../assets/Home/ad3.jpg";
import ad4 from "../assets/Home/ad4.jpg";
import ad5 from "../assets/Home/ad5.jpg";
import ad6 from "../assets/Home/ad6.jpg";

export default function Home() {
    return (
        <>
            <Nav />
            <section>
                <section className="position-relative w-100" style={{ height: "80vh", minHeight: '400px', overflow: "hidden" }}>
                    <img src={pic} alt="Home Page Image" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                        <h1 className="display-5 fw-bold">Personal Styling For Everybody</h1>
                        <Link to="/products">
                            <button className="btn btn-dark px-4 py-2 mt-3 rounded-4">
                                Choose Your Own Style
                            </button>
                        </Link>
                    </div>
                </section>

                <section className="container py-5 px-3 text-center my-5" style={{ borderBottom: '2px solid #ccc', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc', boxShadow: '2px 2px 10px black' }}>
                    <h2 className="fw-bold mb-3 text-decoration-underline">We'll Find Style For Your Life</h2>
                    <p className="mx-auto px-3 mb-5" style={{ maxWidth: '700px', fontSize: '18px', fontWeight: '400' }}>With clothing hand selected by our expert stylists for your unique size & style, you'll always look and feel your best. No subscription required.</p>
                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={women} alt="Women Section" className="w-100 d-block img-fluid" style={{ height: '450px', maxHeight: '100%', objectFit: 'cover' }} />
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <Link to="/products/category/women">
                                        <button className="btn btn-light shadow-sm fw-semibold">
                                            Women <i className="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={men} alt="Men Section" className="w-100 d-block img-fluid" style={{ height: '450px', maxHeight: '100%', objectFit: 'cover' }} />
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <Link to="/products/category/men">
                                        <button className="btn btn-light shadow-sm fw-semibold">
                                            Men <i className="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={kids} alt="Kids Section" className="w-100 img-fluid" style={{ height: '450px', objectFit: 'cover' }} />
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <Link to="/products/category/kids">
                                        <button className="btn btn-light shadow-sm fw-semibold">
                                            Kids <i className="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container py-5 px-3 text-center my-5">
                    <h2>Endless styles for your best fit</h2>
                    <p>Your style gets to know you, discovering your perfect fit from limitless style options</p>
                    <div className="row g-1 my-4 pb-2">
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={ad1} alt="ad1" className="w-100 d-block img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={ad2} alt="ad2" className="w-100 d-block img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={ad3} alt="ad3" className="w-100 d-block img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={ad4} alt="ad4" className="w-100 d-block img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={ad5} alt="ad5" className="w-100 d-block img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className="position-relative overflow-hidden rounded">
                                <img src={ad6} alt="ad6" className="w-100 d-block img-fluid" style={{ height: '250px', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                    <h3>1,000+ top brands</h3>
                    <p>Women's sizes 0-24W (XS-3X)-Plus, Petite and Meternity</p>
                    <p>Men's sizes XS-3XL, waists 28-48* and inseams 28-36* ~including Big & Tall</p>
                </section>

                <section className="container text-center mb-5 py-5 px-3 position-relative mt-5" style={{ border: '2px solid #ccc', boxShadow: '0px 10px 10px 10px #ccc', maxWidth: '650px' }}>
                    <h2 className="position-absolute start-50 translate-middle px-3" style={{ top: '0', backgroundColor: '#fff', whiteSpace: 'nowrap' }}>Ready to Sign Up?</h2>
                    <div className="pt-5 mt-2">
                        <Link to="/login">
                            <div className="mx-auto" style={{ maxWidth: '250px' }}>
                                <button className="mb-4 fw-bold" style={{ backgroundColor: "rgba(255, 0, 0, 0.6)", height: '50px', width: '100%', maxWidth: '250px', fontSize: '20px', color: 'white', border: 'none', borderRadius: '8px' }}>
                                    Click to Sign In<i className="fa-solid fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </Link>
                        <p className="fs-5" style={{ marginBottom: '0' }}>
                            Already have an account?
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                Sign in
                            </Link>
                        </p>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}