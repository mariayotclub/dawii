
import Artista from '../models/Artista.js'

export default class ArtistaController{

    constructor(caminhoBase='artista/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
           
            await Artista.create({
                nome: req.body.nome,
                dataNascimento: req.body.dataNascimento,
                CPF: req.body.CPF,
                email: req.body.email,
                celular: req.body.celular,
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Artista.find({})
            res.render(caminhoBase + 'lst', {Artistas:resultado})
        }
        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Artista.find({ nome: { $regex: filtro,
                $options: "i" }})
            res.render(caminhoBase + 'lst', {Artistas:resultado})
        }

     

         this.openEdt = async(req, res)=>{
            const id = req.params.id
            console.log(id)
            const artista = await Artista.findById(id) 
            console.log(artista)
            res.render(caminhoBase + "edt", 
                {Artista:artista})
        }


        this.edt = async(req, res)=>{
        await Artista.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

         this.del = async(req, res)=>{
        await Artista.findByIdAndDelete(req.params.id)
        res.redirect('/'+caminhoBase + 'lst');
        
        }

    }
}