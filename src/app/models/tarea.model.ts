export class TareaModel{
    
    id:string;
    name:string;
    description:string;
    done:boolean;


    constructor(){
        this.name="";
        this.description="";
        this.done=false;
    }

}