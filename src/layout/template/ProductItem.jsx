import { Link } from "react-router-dom";

const ProductItem = ({ shoe }) => {
    return (
        <Link to={`/product/${shoe.id}`} key={shoe.id}>
            <div className="product-card bg-white rounded-lg shadow-md overflow-hidden relative">
                <img
                    src={shoe.images[1]}
                    alt={shoe.name}
                    className="w-full h-55 object-cover"
                />
                <div className="p-4">
                    <h4 className=" font-semibold text-gray-400">
                        {shoe.brand}
                    </h4>

                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {shoe.name}
                    </h3>

                    <p className="text-sm text-gray-500">{shoe.category}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-800 font-medium">
                            {shoe.price} $
                        </p>
                        <i className="heart-icon fas fa-heart" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;
