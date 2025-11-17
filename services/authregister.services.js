export async function handleregister(user) {
  try {
    const response = await fetch("https://portfolio-api-three-black.vercel.app/api/v1/auth/register",
      {
        method: "POST", //SE REALIZARA UN METODO POST
        headers: {
          //DECIMOS QUE EL CONTENIDO ES UN JSON
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), //Convierte el objeto: body => user a una cadena JSON
      }
    );

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error en el registro:", error);
    throw error;
  }
}
