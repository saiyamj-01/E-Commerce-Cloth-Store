import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import CartItems from "../Components/CartItems"
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from '../Context/CartProvider';


export default function Cart() {

    const { subTotal } = useContext(CartContext)

    return (
        <>
            <Nav />
            <main
                className="container py-5 d-flex flex-column"
                style={{ minHeight: "calc(100vh - 140px)" }}
            >
                <h1 className="text-center py-5">Shopping Cart</h1>
                <div className="table-responsive" style={{ minHeight: '500px' }}>
                    <table className="table table-bordered text-center align-middle">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItems />
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-end">
                    <div className=" fs-4 border border-black px-3 py-2 bg-info fw-semibold rounded-3 text-center" style={{ minWidth: '200px' }}>
                        Total:  ₹{subTotal}
                    </div>
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