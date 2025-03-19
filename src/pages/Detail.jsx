import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { AddToCart, UpdateQuantity } from "../actions/CartAction";
import { addToCart, updateQuantity } from "../store/reducer/cartSlice";
import { get } from "../utils/request";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import Reason from "../layout/template/Reason";
import QuantityBtn from "../layout/template/QuantityBtn";
import Breadcrumb from "../layout/template/BreadCrumb";

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            const result = await get(`shoes/${id}`);
            setProduct(result);
        };

        fetchDetail();
    }, [id]);

    // chọn size
    const [selectedSize, setSelectedSize] = useState(null);
    const handleClickSize = (size) => {
        setSelectedSize(size);
    };

    const [quantity, setQuantity] = useState(1);
    // pop up thông báo chọn size
    const notyf = new Notyf({
        duration: 1500,
        position: { x: "right", y: "top" },
    });

    // xử lý giỏ hàng
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (!selectedSize) {
            notyf.error("You need choose size");
            return;
        }

        if (
            cart.find(
                (item) => item.id === product.id && item.size === selectedSize
            )
        ) {
            dispatch(
                updateQuantity({ id: product.id, size: selectedSize, quantity })
            );
        } else {
            dispatch(
                addToCart({
                    id: product.id,
                    image: product.images[0],
                    name: product.name,
                    price: product.price,
                    size: selectedSize,
                    quantity,
                })
            );
        }
        notyf.success("Added to cart successfully!");
    };
    if (!product) {
        return <div>Loading...</div>;
    }
    // chờ xử lý
    
    // const [relatedShoes, setRelatedShoes] = useState([]);

    // useEffect(() => {
    //     const fetchProductDetails = async () => {
    //         const allShoes = await getAllShoes();

    //         const filteredShoes = allShoes.filter(
    //             (shoe) => shoe.id !== currentProduct.id
    //         );

    //         const randomShoes = [...filteredShoes]
    //             .sort(() => Math.random() - 0.5)
    //             .slice(0, 5);

    //         setRelatedShoes(randomShoes);
    //     };

    //     fetchProductDetails();
    // }, [id]);

    return (
        <div className="custom-container pt-1">
            <Breadcrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "Shoes", link: "/shoes" },
                    { label: product.name },
                ]}
            />
            <div className="grid md:grid-cols-2 mb-12">
                <div className="swiper-container">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `
                                   <span class="${className}" style="width: 100px; height: 100px; margin: 0 10px; border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb; transition: all 0.3s;">
                                       <img src="${
                                           product.images[index]
                                       }" alt="Thumbnail ${product.name} ${
                                    index + 1
                                }" style="width: 100%; height: 100%; object-fit: cover;" />
                                   </span>
                               `;
                            },
                        }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="mySwiper"
                    >
                        {product.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    className="w-full max-h-[700px] object-cover rounded-lg"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="space-y-6 pt-4 px-15">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            {product.name || "Tên sản phẩm"}
                        </h1>
                        <p className="text-2xl font-semibold text-red-600 mt-3">
                            {product.price
                                ? `${product.price.toLocaleString()}$`
                                : "Giá không xác định"}
                        </p>
                    </div>
                    <Reason />
                    <div className="space-y-4">
                        <h4 className="text-lg font-medium">Size</h4>
                        <div className="grid grid-cols-4 gap-3">
                            {product.sizes && product.sizes.length > 0 ? (
                                product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`py-2 px-4 border rounded-sm transition-colors ${
                                            selectedSize === size
                                                ? "bg-black text-white"
                                                : "hover:bg-gray-100"
                                        }`}
                                        onClick={() => handleClickSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))
                            ) : (
                                <p>No size </p>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div>
                                <QuantityBtn
                                    quantity={quantity}
                                    onIncrease={() =>
                                        setQuantity((prev) =>
                                            Math.min(prev + 1, 9)
                                        )
                                    }
                                    onDecrease={() =>
                                        setQuantity((prev) =>
                                            Math.max(prev - 1, 1)
                                        )
                                    }
                                    showLabel={true}
                                />
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 bg-black opacity-60 text-white font-medium py-3 px-4 rounded transition duration-200">
                                    Pay Now
                                </button>
                                <button
                                    className="flex-1 border border-[#15222e] text-[#15222e] hover:bg-gray-50 font-medium py-3 px-4 rounded transition duration-200"
                                    onClick={() => handleAddToCart()}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-3xl font-bold mb-6">Similar Products</h2>
        </div>
    );
};

export default Detail;
