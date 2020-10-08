export class Credito {
    identificacion: string;
    nombre: string;
    capitalinicial: number;
    tasainteres: number;
    tiempoduracioncredito: number;
    valortotal: number;

    CalcularValor( ){
        var tasa = this.tasainteres / 100;
       this.valortotal = this.capitalinicial * Math.pow((1 + tasa), this.tiempoduracioncredito);
    }

}

 