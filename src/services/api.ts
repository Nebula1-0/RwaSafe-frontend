import axios from "axios";
import { Sector, EnvironmentalData, Alert, DashboardStats, SystemHealth } from "../types";

const API_BASE_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const apiService = {
  getSectors: () => api.get<Sector[]>("/sectors").then((r) => r.data),
  getSector: (id: number) => api.get<Sector>(`/sectors/${id}`).then((r) => r.data),
  getLatestEnvironment: () => api.get<EnvironmentalData[]>("/environment/latest").then((r) => r.data),
  getAlerts: () => api.get<Alert[]>("/alerts").then((r) => r.data),
  getActiveAlerts: () => api.get<Alert[]>("/alerts/active").then((r) => r.data),
  getSectorHistory: (id: number) => api.get<EnvironmentalData[]>(`/history/${id}`).then((r) => r.data),
  getDashboardStats: () => api.get<DashboardStats>("/dashboard/stats").then((r) => r.data),
  getSystemHealth: () => api.get<SystemHealth>("/system/health").then((r) => r.data),
  resolveAlert: (id: number) => api.post(`/alerts/${id}/resolve`).then((r) => r.data),
};
