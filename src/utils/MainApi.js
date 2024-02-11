import axios from "axios";

const MAIN_URL = 'http://localhost:3000';

export const getProblemData = async () => {
    try {
        const res = await axios({
            url: `${MAIN_URL}/problems`,
            method: 'GET'
        });
        return res.data;
    } catch (error) {
        if(axios.isAxiosError(error)) {
            console.log(error.response?.data.message, 'error');
        } else if(error instanceof Error) {
            console.log(error.message);
        }
    }
}