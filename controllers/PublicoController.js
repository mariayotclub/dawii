import Obras from '../models/Obras.js'
import Evento from '../models/Evento.js'

export default class PublicoController {

    constructor() {
        // Renderiza a página inicial pública
        this.index = async (req, res) => {
            res.render('publico/index');
        }

        // Busca obras e artistas para a galeria
        this.galeria = async (req, res) => {
            try {
                const obras = await Obras.find({}).populate('artista');
                res.render('publico/galeria', { Obras: obras });
            } catch (error) {
                console.log(error);
                res.redirect('/site');
            }
        }

        // Busca eventos ordenados por data
        this.eventos = async (req, res) => {
            try {
                const eventos = await Evento.find({}).sort({ data: 1 });
                res.render('publico/eventos', { Eventos: eventos });
            } catch (error) {
                console.log(error);
                res.redirect('/site');
            }
        }
    }
}