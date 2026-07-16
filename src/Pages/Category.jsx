import { useParams } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ProductGrid from "../Components/ProductGrid";

export default function Category() {
    const { category } = useParams();

    return (
        <>
            <Nav />

            <div className="container my-4">
                <h2 className="text-center text-capitalize mb-4">
                    {category.replace("-", " ")}
                </h2>

                <ProductGrid category={category} />
            </div>

            <Footer />
        </>
    );
}