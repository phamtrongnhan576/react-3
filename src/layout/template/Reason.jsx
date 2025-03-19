import React from "react";

const Reason = () => {
    return (
        <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">
                Why Choose Us Sneaker Shop?
            </h3>
            <ul className="space-y-3">
                <li className="flex items-center gap-2">
                    <img src="/src/assets/icon/check.svg" alt="" />
                    100% genuine commitment
                </li>
                <li className="flex items-center gap-2">
                    <img src="/src/assets/icon/check.svg" alt="" />
                    More affordable than the market price
                </li>
                <li className="flex items-center gap-2">
                    <img src="/src/assets/icon/check.svg" alt="" />
                    Free returns within one week.
                </li>
            </ul>
        </div>
    );
};

export default Reason;
