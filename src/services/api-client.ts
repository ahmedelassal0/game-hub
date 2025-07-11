import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a1c72052dc1f4274a43cb0a52717b0f6',
    },
});