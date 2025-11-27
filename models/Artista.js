import conexao from '../config/conexao.js'

const Artista = conexao.Schema({
    nome: {type:String, required:true},
    dataNascimento: {type: String, required: true},
    CPF: {type: Number, required: true},
    email: {type: String, required: true},
    celular: {type:String, required: true}

})

export default conexao.model('Artista', Artista)