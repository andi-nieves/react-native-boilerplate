import apisauce from "apisauce";

// This one is by mobile app code
const api = apisauce.create({
  baseURL: "https://api.github.com/",
  headers: {
    "Cache-Control": "no-cache"
  },
  timeout: 10000
});

export default api;
