const devBaseURL = "http://localhost:3000/api";
const proBaseURL = "https://httpbin.org";

export const BASE_URL = process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIME_OUT = 5000;
