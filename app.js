require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.MIPUERTO || 3003;
//middeleware body-parse
app.use(express.json())
app.get("/", (req, res) => { 
res.send('API Rest Full con express');
});

app.get("/api/aprendices", (req, res) => {
    res.status(200).json({'Mensaje': 'Lista Aprendices'})
})

app.post("/api/aprendices", (req, res) => {
    const datosaprendiz =req.body
    const edad= req.body.edad
    if (edad>=18){
        res.status(201).json({
            'Mensaje': `Eres mayor de edad`,
            'Datos': datosaprendiz
        });
    }
    res.status(201).json({
        'Mensaje': 'Eres menor de edad',
        'Datos': datosaprendiz
    });
    
    res.status(201).json({'Mensaje': 'Crear Aprendiz', "Datos": datosaprendiz})
})

app.put("/api/aprendices/:id", (req, res) => {
    res.status(200).json({'Mensaje': 'Actualizar Aprendiz'})
})

app.delete("/api/aprendices/:id", (req, res) => {
    res.status(200).json({'Mensaje': 'Eliminado'})
})



app.listen(port, () => { 
console.log(`Servidor: http://localhost:${port}`);
}); 
