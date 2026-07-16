import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";

export default function Card({ id, image, name, price, details, category }) {

    const { addToCart } = useContext(CartContext)

    const product = {
        id,
        image,
        title: name,
        price,
        description: details,
        category,
    };

    return (
        <div
            className="card h-100 w-100"
            style={{
                height: "20rem",
                border: "4px solid #e0e0e0",
            }}
        >
            <div
                className="d-flex align-items-center justify-content-center p-2"
                style={{ height: "160px", overflow: "hidden" }}
            >
                <Link
                    to={`/products/${id}`}
                    className="w-100 h-100 d-flex align-items-center justify-content-center"
                >
                    <img
                        src={image}
                        alt={name}
                        className="card-img-top img-fluid"
                        onError={(e) => (e.target.src = "/placeholder.jpg")}
                        style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Link>
            </div>
            <div className="card-body d-flex flex-column justify-content-between p-3">
                <h6 className="text-center fw-bold fs-5">{name}</h6>
                <p
                    className="card-text text-center mb-1"
                    style={{
                        fontSize: "1.2rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: 'nowrap'
                    }}
                >
                    {details}
                </p>
                <p
                    className="card-text text-center mb-1 fw-bold"
                    style={{
                        fontSize: "1.5rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {category}
                </p>
                <p className="fw-bold text-success fs-5 text-center">₹{price}</p>
                <div className="d-flex flex-column">
                    {/* <select
                        name="quantity"
                        id={`quantity-${id}`}
                        className="form-select form-select-md w-100"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select> */}
                    <br />
                    <button className="btn btn-warning btn-md w-100 fw-semibold" onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>

                    <Link
                        to={`/products/${id}`}
                        className="btn btn-outline-dark btn-md mt-2"
                    >
                        View Product
                    </Link>
                </div>
            </div>
        </div >
    );
}
