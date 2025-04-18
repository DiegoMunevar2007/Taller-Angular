export class Serie{
    id : number;
    name: String;
    channel : String;
    seasons : number;
    description:String;
    webpage:String;
    poster:String;

    constructor(numero:number, titulo:String, canal:String, temporadas:number,sinopsis:String,info:String,img:String){
        this.id=numero
        this.name=titulo
        this.channel=canal
        this.seasons=temporadas
        this.description=sinopsis
        this.webpage=info
        this.poster=img
    }
    
}