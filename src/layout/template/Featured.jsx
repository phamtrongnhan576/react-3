import React, { useEffect, useState } from "react";
import { getAllShoes } from "../../services/product";

import ProductItem from "./ProductItem";
const Featured = () => {
    const [shoes, setShoes] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(10);
    const handleLoadMore = () => {
        setVisibleProducts((visibleProducts) => visibleProducts + 10);
    };
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getAllShoes();
            setShoes(result.reverse());
            console.log(shoes);
        };

        fetchAPI();
    }, []);

   
    return (
        <section className="pt-16">
            <div className="custom-container">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">
                    Featured Sneakers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                    {shoes.length > 0 ? (
                        shoes
                            .slice(0, visibleProducts)
                            .map((shoe) => (
                                <ProductItem key={shoe.id} shoe={shoe} />
                            ))
                    ) : (
                        <p className="text-red-500 text-center col-span-5 text-2xl font-bold">
                            No shoes available.
                        </p>
                    )}
                </div>
                {visibleProducts < shoes.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => handleLoadMore()}
                            className="text-gray-800 font-semibold hover:underline text-lg"
                        >
                            View All
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Featured;
