import axios from 'axios'
import { useEffect, useState } from "react";
import ProductGrid from "../Components/ProductGrid";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(el => setProducts(el.data.products))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='w-100'>
            <Nav />
            <div className="my-4">
                <h1 className="text-center mb-4">
                    Our Products
                </h1>
                <ProductGrid products={products} />
            </div>
            <Footer />
        </div>
    );
}