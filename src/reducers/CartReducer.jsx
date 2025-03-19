import React from "react";

const CartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                {
                    id: action.payload.id,
                    size: action.payload.size,
                    info: action.payload.info,
                },
            ];
        case "UPDATE_QUANTITY":
            return state.map((item) =>
                item.id === action.payload.id &&
                item.size === action.payload.size
                    ? {
                          ...item,
                          info: {
                              ...item.info,
                              quantity: Math.max(
                                  1,
                                  Math.min(
                                      item.info.quantity +
                                          action.payload.quantity,
                                      9
                                  )
                              ),
                          },
                      }
                    : item
            );

        default:
            return state;
    }
};

export default CartReducer;
