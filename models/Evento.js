import conexao from '../config/conexao.js'

const Evento = conexao.Schema({
    nomeEvento:{type:String, required:true},
    tipo: {type:String, required:true},
    data:{type:Date, required:true},
})

export default conexao.model('Evento',Evento)