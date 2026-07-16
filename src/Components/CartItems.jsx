import { Trash2 } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartProvider';

export default function CartItems() {

    const { cartItem, removeFromCart, Increment, Decrement } = useContext(CartContext)
    console.log("CartItems:", cartItem[0]);

    return (
        <>
            {cartItem.map((el) => (
                <tr key={el.id} className="text-center align-middle">
                    <td className="border border-black">
                        <img
                            src={el.image}
                            alt={el.title}
                            className="img-fluid"
                            style={{ height: "70px", width: "70px", objectFit: "contain", }}
                        />
                    </td>
                    <td className="border border-black">
                        {el.title}
                    </td>
                    <td className="border border-black">
                        ₹ {el.price}
                    </td>
                    <td className="border border-black">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                            <button
                                onClick={() => Decrement(el)}
                                className="btn btn-sm btn-outline-dark me-2"
                            >
                                -
                            </button>
                            <span>{el.quantity}</span>
                            <button
                                onClick={() => Increment(el)}
                                className="btn btn-sm btn-outline-dark ms-2"
                            >
                                +
                            </button>
                        </div>
                    </td>
                    {/* <td className="border border-black">
                        ₹{(el.price * el.quantity).toFixed(2)}
                    </td> */}
                    <td className="border border-black">
                        <button
                            onClick={() => removeFromCart(el)}
                            className='btn btn-danger'
                        >
                            <Trash2 size={28} />
                        </button>
                    </td>
                </tr>
            ))}
        </>
    )
}