import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuantityBtn from "../layout/template/QuantityBtn";
import { updateQuantity, deleteItem } from "../store/reducer/cartSlice";
import ConfirmDeleteModal from "../layout/modal/DeleteModal";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import Breadcrumb from "../layout/template/BreadCrumb";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const totalQuantity = cart.reduce(
        (total, item) => total + item.info.quantity,
        0
    );
    const totalPrice = cart.reduce(
        (total, item) => total + item.info.price * item.info.quantity,
        0
    );
    const shippingCost = cart.length > 0 ? 10 : 0;
    const estimatedTotal = totalPrice + shippingCost;
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [deleteItemInfo, setDeleteItemInfo] = useState(null);
    const notyf = new Notyf({
        duration: 1500,
        position: { x: "right", y: "top" },
    });

    const handleConfirmDelete = useCallback(
        (item) => {
            dispatch(deleteItem({ id: item.id, size: item.size }));
            notyf.success(`${item.info.name} Size: ${item.size} removed`);
            setIsOpen(false);
        },
        [dispatch]
    );
    return (
        <>
            <div className="custom-container mx-auto px-4 py-8 bg-gray-50">
                <Breadcrumb
                    items={[
                        { label: "Home", link: "/" },
                        { label: "Cart", link: "/cart" },
                    ]}
                />
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <div
                                    className="bg-white rounded-lg shadow-xs p-6 mb-4"
                                    key={item.id}
                                >
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <NavLink to={`/product/${item.id}`}>
                                            <img
                                                src={item.info.image}
                                                alt={item.info.name}
                                                className="w-32 h-32 object-cover rounded-lg"
                                            />
                                        </NavLink>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <NavLink
                                                    to={`/product/${item.id}`}
                                                >
                                                    <h3 className="text-xl font-semibold text-black">
                                                        {item.info.name}
                                                    </h3>
                                                </NavLink>
                                                <p className="text-xl font-bold text-green-500">
                                                    {item.info.price *
                                                        item.info.quantity}
                                                    $
                                                </p>
                                            </div>
                                            <p className="text-gray-600 mt-4">
                                                Size: {item.size}
                                            </p>

                                            <div className="mt-4 flex justify-between items-center">
                                                <QuantityBtn
                                                    quantity={
                                                        item.info.quantity
                                                    }
                                                    onIncrease={() =>
                                                        dispatch(
                                                            updateQuantity({
                                                                id: item.id,
                                                                size: item.size,
                                                                quantity: 1,
                                                            })
                                                        )
                                                    }
                                                    onDecrease={() =>
                                                        dispatch(
                                                            updateQuantity({
                                                                id: item.id,
                                                                size: item.size,
                                                                quantity: -1,
                                                            })
                                                        )
                                                    }
                                                    showLabel={false}
                                                />
                                                <button
                                                    onClick={() => {
                                                        setIsOpen(true);
                                                        setDeleteItemInfo(item);
                                                    }}
                                                    className="text-red-600  p-3 text-lg "
                                                >
                                                    <i className="fas fa-trash "></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className=" flex items-center justify-center w-full h-full text-gray-800 font-bold text-2xl">
                                Your cart is empty
                            </p>
                        )}
                    </div>
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-lg shadow-xs p-6">
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between font-medium">
                                    <span className="text-gray-600 ">
                                        Subtotal
                                    </span>
                                    <span className=" text-black">
                                        {totalQuantity}
                                    </span>
                                </div>
                                <div className="flex justify-between font-medium">
                                    <span className="text-gray-600 ">
                                        Price
                                    </span>
                                    <span className=" text-black">
                                        {totalPrice}
                                    </span>
                                </div>
                                <div className="flex justify-between font-medium">
                                    <span className="text-gray-600">
                                        Shipping
                                    </span>

                                    <span className=" text-black">
                                        {shippingCost}$
                                    </span>
                                </div>
                                <div className="flex justify-between border-t pt-3">
                                    <span className="text-lg font-bold text-black">
                                        Estimated Total
                                    </span>
                                    <span className="text-lg font-bold text-black">
                                        {estimatedTotal}
                                    </span>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ConfirmDeleteModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                item={deleteItemInfo}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
};

export default Cart;
