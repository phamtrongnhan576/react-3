export const AddToCart = (id, image, name, price, size, quantity) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            id,
            info: {
                image,
                name,
                price,
                quantity,
            },
            size,
        },
    };
};

export const UpdateQuantity = (id, size, quantity) => {
    return {
        type: "UPDATE_QUANTITY",
        payload: { id, size, quantity },
    };
};
