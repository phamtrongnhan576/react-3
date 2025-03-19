import React from "react";

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
    return (
        <div className="inline-flex items-center border border-gray-200 rounded-md py-3 px-5">
            <button
                className="text-gray-600 hover:bg-gray-50"
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
                className="w-12 text-center border-gray-200 focus:outline-none translate-y-[-5%]"
                value={quantity}
                readOnly
            />
            <button
                className="text-gray-600 hover:bg-gray-50"
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
    );
};

export default QuantitySelector;
