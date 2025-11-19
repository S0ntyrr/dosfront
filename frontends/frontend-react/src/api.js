const BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export async function getItems() {
  const res = await fetch(`${BASE}/items`);
  if (!res.ok) throw new Error('Error al obtener items');
  return res.json();
}

export async function postItem(payload) {
  const res = await fetch(`${BASE}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return res.json();
}