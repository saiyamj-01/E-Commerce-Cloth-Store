import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import CartItems from "../Components/CartItems"
import { Link } from 'react-router-dom'

export default function Cart() {
    return (
        <>
            <Nav />
            <main
                className="container py-5 d-flex flex-column"
                style={{ minHeight: "calc(100vh - 140px)" }}
            >
                <h1 className="text-center py-5">Shopping Cart</h1>
                <div className="table-responsive">
                    <table className="table table-bordered text-center align-middle">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                {/* <th>Total</th> */}
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItems />
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end mt-4">
                    <Link to="/checkout">
                        <button className='btn btn-success rounded-pill px-3 py-1' style={{ fontSize: "18px" }}>
                            Click To Checkout
                        </button>
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    )
}