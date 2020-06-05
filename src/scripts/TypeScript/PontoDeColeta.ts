export class PontoDeColeta {
    nome: String 
    tipoColeta: String 
    cidade: String 
    estado: String
    rua: String
    img: String
    

    setPonto(nome, tipoColeta, cidade, estado, rua){
        this.nome = nome;
        this.tipoColeta = tipoColeta;
        this.cidade = cidade;
        this.estado = estado;
        this.rua = rua;

        return "Tudo Ok"
    }

    setImage(){
        let num = Math.random() * (100 - 1) + 1
        let url = `https://picsum.photos/${num}/200`

        this.img = url
    }

}
