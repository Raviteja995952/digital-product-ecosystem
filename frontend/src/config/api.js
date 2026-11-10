/**
 * API Configuration Module
 * Manages dynamic base URL resolution for both local development and production deployments (e.g. Vercel).
 * 
 * Rules:
 * 1. If VITE_API_BASE_URL environment variable is defined, use it (stripping trailing slashes).
 * 2. In local development (import.meta.env.DEV), default to 'http://localhost:8080' if no env var is provided.
 * 3. In production builds, default to '' (relative path) to avoid hardcoding localhost.
 */

const resolveApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.trim() !== '') {
    return envUrl.trim().replace(/\/+$/, '');
  }
  if (import.meta.env.DEV) {
    return 'http://localhost:8080';
  }
  return '';
};

export const API_BASE_URL = resolveApiBaseUrl();

export const API_ENDPOINTS = {
  practices: `${API_BASE_URL}/api/practices`,
  corrections: `${API_BASE_URL}/api/corrections`,
  leads: `${API_BASE_URL}/api/academy/leads`,
};

