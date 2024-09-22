
export const saludo = (req,res) =>{
    res.json({message: "Hola desde la API"});
}

export const recibirMensaje = (res,res)=>{
    const {mensaje} = req.body;

    if (!mensaje) {
        return res.status(400).json({error: "El campo mensaje es obligatorios"});

    }
    res.json({respuesta: `Recibimos tu mensaje: ${mensaje}`})
}

