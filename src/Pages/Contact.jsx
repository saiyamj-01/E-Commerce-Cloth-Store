import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Clock } from 'lucide-react';
import { User } from 'lucide-react';
import { Send } from 'lucide-react';
import "./Contact.css"

export default function Contact() {
    return (
        <>
            <Nav />
            <section className="container py-5 px-4">
                <div className="row g-5 align-items-stretch">
                    <div className="col-12 col-lg-7">
                        <div className="h-100 left">
                            <h1>Get In Touch With Us Now</h1>
                            <div className="leftData row px-3 py-3">
                                <div className="col-12 col-md-6 border border-2 border-top-0 border-start-0 p-4 text-center">
                                    <Phone size={40} strokeWidth={2} />
                                    <h2>Phone Number</h2>
                                    <h5>+91-95608XXXXX</h5>
                                </div>
                                <div className="col-12 col-md-6 border border-2 border-top-0 border-end-0 p-4 text-center">
                                    <Mail size={40} strokeWidth={2} />
                                    <h2>Email</h2>
                                    <h5>info@clothstore.com</h5>
                                    <h5>sales@clothstore.com</h5>
                                </div>
                                <div className="col-12 col-md-6 border border-2 border-bottom-0 border-start-0 p-4 text-center">
                                    <MapPin size={40} strokeWidth={2} />
                                    <h2>Location</h2>
                                    <h5>Ghaziabad, Uttar Pradesh 201001</h5>
                                </div>
                                <div className="col-12 col-md-6 border border-2 border-bottom-0 border-end-0 p-4 text-center">
                                    <Clock size={40} strokeWidth={2} />
                                    <h2>Working Hours</h2>
                                    <h5>Monday To Saturday</h5>
                                    <h5>09:00 AM To 06:00 PM</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="h-100 right">
                            <h1>Contact Us</h1>
                            <div className="p-4 rounded flex-grow-1" style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}>
                                <form className="row g-3">
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex align-items-center bg-white rounded px-3">
                                            <User size={25} strokeWidth={3} />
                                            <input type="text" className="form-control border-0 shadow-none" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex align-items-center bg-white rounded px-3">
                                            <User size={25} strokeWidth={3} />
                                            <input type="text" className="form-control border-0 shadow-none" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex align-items-center bg-white rounded px-3">
                                            <Phone size={25} strokeWidth={3} />
                                            <input type="tel" className="form-control border-0 shadow-none" placeholder="Mobile No" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex align-items-center bg-white rounded px-3">
                                            <Mail size={25} strokeWidth={3} />
                                            <input type="email" className="form-control border-0 shadow-none" placeholder="Email ID" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control" rows='5' placeholder="Message" ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fs-4 fw-semibold">Please type the characters</label>
                                        <input type="text" className="form-control mb-3" placeholder="Enter captcha"></input>
                                        <div className="bg-white d-inline-block rounded fs-4 py-2 px-4 fw-bold mb-2" style={{ letterSpacing: '3px' }}>
                                            pst5s
                                        </div>
                                        <p className="fs-5 fw-semibold mb-0">This helps us to prevent spam, thank you.</p>
                                    </div>
                                    <div className="col-12">
                                        <button type="button" className="btn btn-dark w-100 d-flex justify-content-center align-items-center gap-3 fs-4">Submit <Send size={20} strokeWidth={2} /></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}