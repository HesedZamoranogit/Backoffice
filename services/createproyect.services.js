const API_BASE = "https://portfolio-api-three-black.vercel.app/api/v1";

function authHeaders() {
  const raw = localStorage.getItem("token");
  let token = raw;
  try {
    if (raw && raw.startsWith("{")) {
      const obj = JSON.parse(raw);
      token = obj.token || obj.accessToken || obj.jwt;
    }
  } catch {}
  const headers = { "Content-Type": "application/json" };
  if (token) {
    // Header requerido por el backend
    headers["auth-token"] = token; // sin 'Bearer'
  }
  return headers;
}


async function handleCreateProyect(proyecto) {
  try {
    const resp = await fetch(`${API_BASE}/projects`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(proyecto),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      throw new Error(`Create project failed (${resp.status}): ${text}`);
    }
    return await resp.json();
  } catch (e) {
   console.error("Create project error", e);
    throw e;
  }
}

async function handleGetProyects() {
  try {
    const resp = await fetch(`${API_BASE}/projects`, {
      method: "GET",
      headers: authHeaders(),
    });
    return await resp.json();
  } catch (e) {
    console.error("Get projects error", e);
    throw e;
  }
}

async function handleGetProyectById(projectId) {
  try {
    const resp = await fetch(`${API_BASE}/projects/${projectId}`, {
      method: "GET",
      headers: authHeaders(),
    });
    if (!resp.ok) throw new Error("Proyecto no encontrado");
  return resp.json();
  } catch (e) {
    console.error("Get project by id error", e);
    throw e;
  }
}

async function handleUpdateProyect(projectId, update) {
  try {
    const resp = await fetch(`${API_BASE}/projects/${projectId}`, {
      method: "PUT",
      headers: authHeaders(),
      body: JSON.stringify(update),
    });
    return await resp.json();
  } catch (e) {
    console.error("Update project error", e);
    throw e;
  }
}

async function handleDeleteProyect(projectId) {
  try {
    const resp = await fetch(`${API_BASE}/projects/${projectId}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    return await resp.json();
  } catch (e) {
    console.error("Delete project error", e);
    throw e;
  }
}

export {
  authHeaders,
  handleCreateProyect,
  handleGetProyects,
  handleGetProyectById,
  handleUpdateProyect,
  handleDeleteProyect,
};
