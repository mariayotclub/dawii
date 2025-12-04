import Obras from '../models/Obras.js'
import Artista from '../models/Artista.js'

export default class ObrasController{

    constructor(caminhoBase='obras/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            const artistas = await Artista.find({})
            res.render(caminhoBase + "add", {Artistas: artistas})

        }
        this.add = async(req, res)=>{
            await Obras.create({
                nomeColecao: req.body.nomeColecao,
                artista: req.body.artista, 
                tipo: req.body.tipo,
                descricao: req.body.descricao,
                imagem: req.file.buffer
            });
            res.redirect('/'+caminhoBase + 'add');
        }

        this.list = async(req, res)=>{
            const resultado = await Obras.find({}).populate('artista');
            res.render(caminhoBase + 'lst', {Obrass:resultado})
        }

        this.find = async(req, res)=>{
            const filtro = req.body.filtro;
            const resultado = await 
            Obras.find({ nomeColecao: { $regex: filtro, $options: "i" }}).populate('artista') 
            res.render(caminhoBase + 'lst', {Obrass:resultado})
        }

         this.openEdt = async(req, res)=>{
            const id = req.params.id
            const obras = await Obras.findById(id)
            const artistas = await Artista.find({}) 
            res.render(caminhoBase + "edt", 
                {Obras: obras, Artistas: artistas}) 
        }

        this.edt = async(req, res)=>{
           
            await Obras.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/'+caminhoBase + 'lst');
        }

         this.del = async(req, res)=>{
            await Obras.findByIdAndDelete(req.params.id)
            res.redirect('/'+caminhoBase + 'lst');
        }
    }
}