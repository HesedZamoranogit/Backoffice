
export async function handlelogin(login) {
  try {
    const response = await fetch(
      "https://portfolio-api-three-black.vercel.app/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      }
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    localStorage.setItem("token", data.token);
    return data;
    
  } catch (error) {
    console.log("Error en el login:", error);
  }
}
