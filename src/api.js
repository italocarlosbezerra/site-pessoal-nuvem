import axios from "axios";

const api = axios.create({
   baseURL: "https://banco-dashboard-api.onrender.com/api",
});

export default api;

// Servidor Render - https://json-server-node-60lq.onrender.com
// Servidor Local  - http://localhost:5000
