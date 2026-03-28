const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "System request failed.");
  }

  return payload;
}

export function registerUser(body) {
  return request("/auth/register", {
    method: "POST",
    body: JSON.stringify(body)
  });
}

export function loginUser(body) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify(body)
  });
}
