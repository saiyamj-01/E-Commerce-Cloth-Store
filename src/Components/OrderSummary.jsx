import { useContext } from 'react';
import './OrderSummary.css'
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartProvider';

export default function OrderSummary({ btnval }) {

    const { subTotal } = useContext(CartContext)

    const ship = (subTotal > 1000 ? subTotal * (0.1) : 0);
    const disc = (subTotal > 1000 ? subTotal * (0.02) : 0);
    const total = subTotal + ship + disc;

    return (
        <div className="mt-5 d-flex flex-column justify-content-center m-auto px-4 bg-info py-3" style={{ width: '320px', border: '2px solid black' }}>
            <h3 className='text-center pb-3 text-decoration-underline fs-2'>Order Summary</h3>
            <div className='text-center'>
                <div className='os'>
                    <p>Subtotal</p>
                    <p>{subTotal.toFixed(2)}</p>
                </div>
                <div className='os'>
                    <p>Shipping</p>
                    <p>
                        {ship.toFixed(2)}
                    </p>
                </div>
                <div className='os'>
                    <p>Discount</p>
                    <p>
                        {disc.toFixed(2)}
                    </p>
                </div>
                <hr />
                <div className='os fw-semibold fs-3'>
                    <p>Total</p>
                    <p>
                        {total.toFixed(2)}
                    </p>
                </div>
            </div>
            <Link to="/checkout">
                <button className='w-100 btn btn-dark rounded-5 fs-5 py-2 '>{btnval}</button>
            </Link>
        </div>
    )
}