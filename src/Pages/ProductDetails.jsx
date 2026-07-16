import { useParams } from "react-router-dom"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from "react"
import { CartContext } from "../Context/CartProvider"

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    console.log(product)

    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log(response)
            setProduct(response.data);
        };
        getProduct();
    }, [id]);

    if (!product) {
        return <h2>Loading.....</h2>;
    }
    return (
        <>
            <Nav />
            <section className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <img src={product.thumbnail} alt={product.title} className="img-fluid" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.title}</h2>
                        <h3 className="text-success my-3">₹{product.price}</h3>
                        <h6>{product.description}</h6>
                        <div className="py-3">
                            <p><h6 style={{ display: 'inline' }}>Brand: </h6>{product.brand}</p>
                            <p><h6 style={{ display: 'inline' }}>Product Rating: </h6>{product.rating}/5</p>
                            <p><h6 style={{ display: 'inline' }}>Stock: </h6>{product.stock}</p>
                        </div>
                        {/* <select className="form-select w-25 mb-3">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select> */}
                        <button className="btn btn-warning" onClick={() => (addToCart(product))}>
                            Add To cart
                        </button>
                    </div>
                </div>
            </section>
            <div className="fixed-bottom">
                <Footer />
            </div>
        </>
    )
}
