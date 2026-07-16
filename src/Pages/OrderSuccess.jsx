import "./OrderSuccess.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
    return (
        <main className="bg-white rounded-2 p-5 mx-auto mb-5 overflow-hidden order-success">
            <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3c4HadarYnc3SS0DUFszMw1040DXNcwzN70HnGULnymjb_Q8I"
                alt="Success"
                className="star-logo object-fit-cover d-block mx-auto mb-4"
            />

            <h3 className="fw-bold text-center mb-3">
                Order Placed Successfully!
            </h3>

            <p className="mx-auto text-center mb-5">
                Thank you for shopping with us. Your order has been received and is
                being processed. We'll send you an email with tracking details as soon
                as your items are shipped.
            </p>

            <section className="btns d-flex flex-wrap gap-2 justify-content-center mb-4">
                {/* <button className="update py-2 rounded-2 bg-white fw-bold">
                    View Order
                </button> */}

                <Link to="/">
                    <button className="back py-2 px-5 fs-5 rounded-2 fw-bold border-0 text-white">
                        Continue Shopping
                    </button>
                </Link>
            </section>

            <img
                src={logo}
                alt="Shopping"
                className="flow object-fit-cover d-block mx-auto"
            />
        </main>
    );
};