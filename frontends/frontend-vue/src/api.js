const BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081/api';

export async function getPersons(){
  const r = await fetch(`${BASE}/persons`);
  if(!r.ok) throw new Error('Error');
  return r.json();
}