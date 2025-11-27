
import Evento from '../models/Evento.js'

export default class EventoController{

    constructor(caminhoBase='evento/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
           
            await Evento.create({
                nomeEvento: req.body.nomeEvento,
                tipo: req.body.tipo,
                data: req.body.data,  
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Evento.find({})
            res.render(caminhoBase + 'lst', {Eventos:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Evento.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Eventos:resultado})
        }

     

         this.openEdt = async(req, res)=>{
            const id = req.params.id
            console.log(id)
            const evento = await Evento.findById(id) 
            console.log(evento)
            res.render(caminhoBase + "edt", 
                {Evento:evento})
        }


        this.edt = async(req, res)=>{
        await Evento.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Evento.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}