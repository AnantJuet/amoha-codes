import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const API = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 30000, // 30 second timeout
});

// Request interceptor - add auth token
API.interceptors.request.use(
  (config) => {
    // Don't add token for login/register endpoints
    const publicEndpoints = ["/login", "/register", "/auth/"];
    const isPublicEndpoint = publicEndpoints.some(endpoint =>
      config.url?.includes(endpoint)
    );

    if (!isPublicEndpoint) {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle auth errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized - clear invalid token and redirect
    if (error.response?.status === 401) {
      const currentPath = window.location.pathname;
      // Don't clear token if already on login page or public routes
      if (currentPath !== "/" && !currentPath.includes("/login")) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("authChanged"));
      }
    }
    return Promise.reject(error);
  }
);
