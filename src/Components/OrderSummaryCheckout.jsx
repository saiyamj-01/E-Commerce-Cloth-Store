import './OrderSummary.css'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../Context/CartProvider';


export default function OrderSummaryCheckout({ btnval }) {

    const { subTotal } = useContext(CartContext)

    const ship = (subTotal > 1000 ? subTotal * (0.1) : 0);
    const disc = (subTotal > 1000 ? subTotal * (0.02) : 0);
    const total = subTotal + ship + disc;

    return (
        <>
            <div className="mt-5 d-flex flex-column m-auto px-4 bg-info py-3 m-auto" style={{ width: '320px', border: '2px solid black', minHeight: '700px' }}>
                <h3 className='text-center pb-3 text-decoration-underline fs-2'>Order Summary</h3>
                <div className='mt-5'>
                    <div className='os'>
                        <p>Subtotal</p>
                        <p>{subTotal.toFixed(2)}</p>
                    </div>
                    <div className='os'>
                        <p>Shipping</p>
                        {ship.toFixed(2)}
                    </div>
                    <div className='os'>
                        <p>Discount</p>
                        {disc.toFixed(2)}
                    </div>
                </div>
                <div className='mt-auto'>
                    <div className='os fw-semibold fs-3 pt-3' style={{ border: 'none', borderTop: '2px solid black' }}>
                        <p>Total</p>
                        {total.toFixed(2)}
                    </div>
                    <Link to="/checkout" className='text-decoration-none'>
                        <Link to="/ordersuccess" className='text-white' style={{ textDecoration: "none" }}>
                            <button className='w-100 btn btn-dark rounded-5 fs-5 py-2 '>
                                {btnval}
                            </button>
                        </Link>
                    </Link>
                </div>
            </div>
        </>
    )
}