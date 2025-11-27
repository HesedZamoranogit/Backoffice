export async function handleGetProyectos(itsonId) {
  try {
    const url = `https://portfolio-api-three-black.vercel.app/api/v1/publicProjects/251940`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("PERSISTE UN ERROR DE:" + error);
    throw error;
  }
}
