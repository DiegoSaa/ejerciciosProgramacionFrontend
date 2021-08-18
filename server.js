const express= require("express");
const app=express();
var BancoPeliculas = require('./src/data/Movies.json')

app.use(express.json());

app.get("/", (req, res) => {
    res.send("holi")
  });

app.listen(3000, ()=>{
    console.log('server on port 3000')
});

app.post('/peliculas', (req, res)=>{

    const data = req.body

    const respuesta= busquedas(data.busqueda, data.generos,  data.fecha)

    res.json(respuesta)
    console.log(data)
 });

busquedas = (texto, generos, opcFecha) =>{
    const identi=generos
    const filtro= BancoPeliculas.results.filter(busqueda => identi.every(r=>busqueda.genre_ids.includes(r)) && busqueda.title.toLowerCase().includes(texto.toLowerCase()))

    if(filtro.length>0){

        var resp=[]

        switch (opcFecha) {
            case "0":
                return filtro.sort((f1, f2)=>{
                    fechaIndex1=new Date(f1.release_date);
                    fechaIndex2=new Date(f2.release_date);
                    const filter= fechaIndex1-fechaIndex2;
                    console.log("0")
                    return filter;
                });
            
            case "1":
                return filtro.sort((f1, f2)=>{
                    fechaIndex1=new Date(f1.release_date);
                    fechaIndex2=new Date(f2.release_date);
        
                    return fechaIndex2-fechaIndex1;
                });
            
            case "2":
                return filtro.sort((v1, v2)=>{
                    v1Index=v1.vote_average;
                    v2Index=v2.vote_average;
        
                    return v1Index-v2Index;
            });

            case "3":
                return filtro.sort((v1, v2)=>{
                    v1Index=v1.vote_average;
                    v2Index=v2.vote_average;
        
                    return v2Index-v1Index;
            });
        }
        return resp;
    }

}


 