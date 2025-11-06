type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
};

const request = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await fetch(url, {
    headers: { ...defaultHeaders, ...(options.headers || {}) },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(errorText || `Request failed with ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as unknown as T;
  }

  return (await response.json()) as T;
};

export const httpClient = {
  get: <T>(url: string) => request<T>(url, { method: "GET" }),
  post: <T>(url: string, body?: unknown) =>
    request<T>(url, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(url: string, body?: unknown) =>
    request<T>(url, { method: "PUT", body: JSON.stringify(body) }),
  patch: <T>(url: string, body?: unknown) =>
    request<T>(url, { method: "PATCH", body: JSON.stringify(body) }),
  delete: <T>(url: string) => request<T>(url, { method: "DELETE" }),
};

export type { HttpMethod };


