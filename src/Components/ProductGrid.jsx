import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ category }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                console.log(category);
                if (category) {
                    let categoriesToFetch = [];

                    if (category === "men") {
                        categoriesToFetch =
                            [
                                "mens-shirts",
                                "mens-shoes",
                                "mens-watches",
                                "sunglasses",
                            ]
                    }
                    else if (category === "women") {
                        categoriesToFetch =
                            [
                                "tops",
                                "womens-dresses",
                                "womens-shoes",
                                "womens-bags",
                                "womens-jewellery",
                                "beauty",
                                "womens-watches",
                                "sunglasses",
                                "skin-care",
                            ]
                    }
                    else if (category === "kids") {
                        categoriesToFetch = [
                            "mens-shirts",
                            "mens-shoes",
                            "sunglasses",
                        ];
                    }
                    else {
                        categoriesToFetch = [category]
                    }
                    const response = await Promise.all(
                        categoriesToFetch.map((cat) =>
                            axios.get(
                                `https://dummyjson.com/products/category/${cat}?limit=200`
                            )
                        )
                    );
                    const products = response.flatMap(
                        res => res.data.products
                    )
                    setData(products);
                }
                else {
                    const categories = [
                        "mens-shirts",
                        "mens-shoes",
                        "mens-watches",
                        "tops",
                        "womens-dresses",
                        "womens-shoes",
                        "womens-bags",
                        "womens-jewellery",
                        "beauty",
                        "womens-watches",
                        "fragrances",
                        "sunglasses",
                        "skin-care",
                    ];
                    const responses = await Promise.all(
                        categories.map((categories) =>
                            axios.get(`https://dummyjson.com/products/category/${categories}?limit=200`)
                        )
                    );


                    const products = responses.flatMap(
                        (response) => response.data.products
                    );

                    setData(products);
                }
            }
            catch (error) {
                console.log(error)
            }
        };
        getData();
    }, [category]);

    return (
        <div className='pgrid' >
            {
                data.map((el) => (
                    <ProductCard
                        key={el.id}
                        id={el.id}
                        // link={.link}
                        image={el.thumbnail}
                        name={el.title}
                        price={el.price}
                        details={el.description}
                    // category={el.category}
                    />
                ))
            }
        </div>
    )
}