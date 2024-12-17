import axios from "axios";
const BASE_URL="http://localhost:5000/api/";

let TOKEN = "";

try {
    const persistedState = localStorage.getItem("persist:root");
    if (persistedState) {
        const userState = JSON.parse(JSON.parse(persistedState).user);
        if (userState && userState.currentUser) {
            TOKEN = userState.currentUser.accessToken;
        }
    }
} catch (error) {
    console.error("Error accessing localStorage or parsing user data:", error);
}

export const publicRequest= axios.create({
    baseURL:BASE_URL
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{
        token:`Bearer ${TOKEN}`
    }
})