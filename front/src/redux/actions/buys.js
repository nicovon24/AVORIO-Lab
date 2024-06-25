import axios from "axios";

export const createBuy = async (buy) => {
    try {
        const response = await axios.post("http://localhost:3000/buy", buy);
        return response;
    } catch (err) {
        console.error(err);
    }
}