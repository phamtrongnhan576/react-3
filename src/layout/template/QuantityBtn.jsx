import React from "react";

const QuantityBtn = ({ quantity, onIncrease, onDecrease, showLabel }) => {
    return (
        <>
            {showLabel && (
                <label className="block font-medium text-gray-700 mb-2">
                    Quantity
                </label>
            )}
            <div className="inline-flex items-center border border-gray-200 rounded-md py-2 px-4">
                <button
                    className="text-gray-600 hover:bg-gray-100  rounded-md"
                    onClick={onDecrease}
                >
                    <img
                        src="/src/assets/icon/minus.svg"
                        alt="decrease"
                        width="24"
                        height="24"
                    />
                </button>
                <input
                    type="text"
                    className="w-12 text-center border-0 focus:outline-none bg-transparent text-lg font-medium"
                    value={quantity}
                    readOnly
                />
                <button
                    className="text-gray-600 hover:bg-gray-100  rounded-md"
                    onClick={onIncrease}
                >
                    <img
                        src="/src/assets/icon/plus.svg"
                        alt="increase"
                        width="24"
                        height="24"
                    />
                </button>
            </div>
        </>
    );
};

export default QuantityBtn;
