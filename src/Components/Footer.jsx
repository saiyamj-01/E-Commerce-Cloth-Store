import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footermain">
                <div className="photo">
                    <img src={logo} alt="Store Logo" className="footerlogo" />
                </div>
                <div className="others">
                    <div className="linkgrid">
                        <div className="linkcol">
                            <h3>The Service</h3>
                            <Link to="">Gift cards</Link>
                            <Link to="">Download our App</Link>
                            <Link to="">Plus Sizes</Link>
                            <Link to="">Maternity</Link>
                            <Link to="">Petite</Link>
                            <Link to="">Big & Tall</Link>
                            <Link to="">Women's Jeans</Link>
                            <Link to="">Business Casual</Link>
                        </div>
                        <div className="linkcol">
                            <h3>The Company</h3>
                            <Link to="/about">About Us</Link>
                            <Link to="">Social Impact</Link>
                            <Link to="">Women's Blog</Link>
                            <Link to="">Men's Blog</Link>
                            <Link to="">Press</Link>
                            <Link to="">Investor Relations</Link>
                            <Link to="">Careers</Link>
                            <Link to="">Tech Blog</Link>
                            <Link to="">Affiliates</Link>
                        </div>
                        <div className="linkcol">
                            <h3>Questions?</h3>
                            <Link to="">Help</Link>
                            <Link to="">Returns</Link>
                        </div>
                        <div className="apps">
                            <div className="applink">
                                <Link to="" className="iconlink"><i className="fa-brands fa-facebook"></i></Link>
                                <Link to="" className="iconlink"><i className="fa-brands fa-instagram"></i></Link>
                                <Link to="" className="iconlink"><i className="fa-brands fa-pinterest"></i></Link>
                                <Link to="" className="iconlink"><i className="fa-brands fa-x-twitter"></i></Link>
                                <Link to="" className="iconlink"><i className="fa-solid fa-envelope"></i></Link>
                                <Link to="" className="iconlink"><i className="fa-brands fa-youtube"></i></Link>
                            </div>
                            <div className="appinstall">
                                <Link to="">
                                    <div className="app">
                                        <i className="fa-brands fa-apple"></i>
                                        <div className="text">
                                            <span>DOWNLOAD ON THE</span>
                                            <strong>AppStore</strong>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="">
                                    <div className="app">
                                        <i className="fa-brands fa-google-play"></i>
                                        <div className="text">
                                            <span>GET IT ON</span>
                                            <strong>GooglePlay</strong>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="props">
                        <div className="terms">
                            <div className="termslinks">
                                <Link to="">Terms of Use</Link>-<Link to="">Accessibility</Link>-<Link to="">Privacy Policy</Link>-<Link to="">Supply Chain Information</Link>-<Link to="">Ad Choices</Link>-<Link to="">Sitemap</Link>
                            </div>
                            <p>Stitch Fix and Fix are trademarks of Stitch Fix, Inc.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}