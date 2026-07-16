import "./About.css"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import AboutWC from "../Components/AboutWC"
import aboutap from "../assets/About/AboutAffordablePrices.jpg"
import abouter from "../assets/About/AboutEasyReturns.jpg"
import aboutfd from "../assets/About/AboutFastDelivery.jpg"
import aboutlf from "../assets/About/AboutLatestFashion.jpg"
import aboutpq from "../assets/About/AboutPremiumQuality.jpg"
import aboutss from "../assets/About/AboutSecureShopping.jpg"
import Category from "../Components/Category"
import kid from "../assets/About/Kids.webp"
import men from "../assets/About/Men.avif"
import women from "../assets/About/Women.webp"
import Stats from "../Components/Stats"
import { Link } from "react-router-dom";

export default function About() {

    const features = [
        {
            image: aboutpq,
            title: "Premium Quality",
            desc: "Every product is selected with attention to quality, comfort, and durability."
        },
        {
            image: aboutlf,
            title: "Latest Fashion",
            desc: "Stay ahead of trends with regularly updated collections inspired by modern fashion."
        },
        {
            image: aboutap,
            title: "Affordable Prices",
            desc: "Enjoy premium products at prices that fit every budget."
        },
        {
            image: aboutss,
            title: "Secure Shopping",
            desc: "Your personal information and payments are protected using secure technologies."
        },
        {
            image: aboutfd,
            title: "Fast Delivery",
            desc: "Reliable shipping ensures your favorite products arrive quickly and safely."
        },
        {
            image: abouter,
            title: "Easy Returns",
            desc: "Simple return and exchange policies make shopping worry-free."
        }
    ];

    const ctg = [
        {
            image: men,
            heading: 'Men',
            type: ["Classic essentials", "Casual wear", "Formal outfits", "Modern streetwear"]
        },
        {
            image: women,
            heading: 'Women',
            type: ["Elegant dresses", "Ethnic wear", "Western fashion", "Accessories"]
        },
        {
            image: kid,
            heading: 'Kids',
            type: ["Comfortable", "Stylish clothing designed", "Party Wear", "Formals"]
        },
    ]

    const stats = [
        {
            number: "1000+",
            title: "Products"
        },
        {
            number: "50+",
            title: "Brands"
        },
        {
            number: "10,000+",
            title: "Happy Customers"
        },
        {
            number: "99%",
            title: "Customer Satisfaction"
        },
        {
            number: "24/7",
            title: "Support"
        },
        {
            number: "5+",
            title: "Years of Experience"
        }
    ];

    return (
        <>
            <Nav />
            <section className="about-section d-flex align-items-center text-white">
                <div className="container">
                    <div className="row justify-content-center justify-content-lg-end">
                        <div className="col-lg-5 text-center">
                            <h1 className="fw-bold mb-3">About Cloth Store</h1>
                            <p className="lead fw-bold">
                                Style isn't just what you wear—it's how you express yourself. At Cloth Store, we make fashion accessible, affordable, and enjoyable for everyone.
                            </p>
                            <button className="btn btn-light rounded-pill px-4 mt-3">Explore Collection</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container pt-5 d-flex flex-column align-items-center">
                <h2 className="text-center mb-4">Our Story</h2>

                <p className="text-center fs-5 container">
                    Cloth Store was created with one simple vision—to make
                    premium fashion accessible to everyone. We believe clothing
                    should combine style, comfort and affordability without
                    compromising quality.
                </p>

                <p className="text-center fs-5 container">
                    From everyday essentials to trend-setting outfits, our
                    collections are carefully selected to suit every lifestyle.
                    Whether you're shopping for work, casual outings, festivals
                    or special occasions, Cloth Store has something for you.
                </p>
            </section>

            <section className="container py-5">
                <h2 className="text-center mb-3">
                    Our Mission
                </h2>
                <p className="fs-5 text-center mb-5 container">
                    To deliver high-quality clothing at affordable prices while providing a seamless and enjoyable online shopping experience.
                </p>

                <h2 className=" text-center mb-3">
                    Our Vision
                </h2>
                <p className="fs-5 text-center container">
                    To become one of the most trusted online fashion destinations by offering exceptional products, outstanding customer service, and innovative shopping experiences.
                </p>
            </section>

            <section className="py-5 container">
                <h2 className="mb-5 text-center">Why Choose Us</h2>
                {features.map((el, idx) => (
                    <AboutWC key={idx} {...el} reverse={idx % 2 !== 0} />
                ))}
            </section>

            <section className="container py-5">
                <h1 className="mb-5 text-center">Our Categories</h1>
                <div className="row g-4">
                    {ctg.map((el, idx) => (
                        <div className="col-md-4" key={idx}>
                            <Category {...el} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-5 container">
                <h1 className="mb-5 text-center">Our Achievements</h1>
                <div className="row g-4 justify-content-center">
                    {stats.map((el, idx) => (
                        <div key={idx} className="col-12 col-sm-6 col-md-6 col-lg-4">
                            <Stats {...el} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="container py-5">
                <h1 className="pb-5 text-center">Our Promise to You</h1>
                <p className="text-center fs-4">
                    We are committed to delivering exceptional shopping experiences through premium-quality products, transparent pricing, secure payments, and reliable customer support.
                    Every purchase is backed by our dedication to customer satisfaction because your trust is the foundation of our business.
                </p>
            </section>

            <section className="pb-5 container">
                <h1 className="pb-5 text-center">Frequently Asked Questions</h1>
                <div className="d-flex flex-column text-center">
                    <div className="pb-4 fs-4">
                        <h2>Q. Do you provide free shipping?</h2>
                        <p>Yes. Free shipping is available on eligible orders above the minimum purchase amount.</p>
                    </div>
                    <div className="pb-4 fs-4">
                        <h2>Q. Can I return a product?</h2>
                        <p>Absolutely. Eligible products can be returned or exchanged within our return policy period.</p>
                    </div>
                    <div className="pb-4 fs-4">
                        <h2>Q. Are your products genuine?</h2>
                        <p>Yes. We source products from trusted brands and verified suppliers.</p>
                    </div>
                    <div className="pb-4 fs-4">
                        <h2>Q. How can I track my order?</h2>
                        <p>Once your order is shipped, you'll receive tracking details through email or SMS.</p>
                    </div>
                </div>
            </section>

            <section className="pb-5 container">
                <div className="d-flex flex-column text-center fs-4">
                    <h1 className="pb-4 text-center">Ready to Upgrade Your Style?</h1>
                    <p>Explore thousands of fashion products designed for every occasion and discover your perfect look today.</p>
                </div>
                <div className="pt-4" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/products">
                        <button style={{ minWidth: '130px', minHeight: '50px', fontSize: '17px', fontWeight: 'bold', borderRadius: '25px' }}>Shop Now</button>
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    )
}