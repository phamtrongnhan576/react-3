import { get } from "../utils/request";
export const getAllShoes = async () => {
    return await get("shoes");
};
