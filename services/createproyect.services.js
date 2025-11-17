import {proyecto} from '../models/proyect.model.js';

async function handleCreateProyect(){

    const response = await fetch("https://portfolio-api-three-black.vercel.app/api/v1");
    const data = response.json({
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(proyecto),
    });

}
export {handleCreateProyect}