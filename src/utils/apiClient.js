import fetch from "node-fetch";

export async function apiGet(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Error ${res.status} al obtener ${url}`);
  return await res.json();
}
