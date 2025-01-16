class Loteria{

    constructor(){

        this.total = 0;

        this.decimosJugados = [];

        this.numeroGanador = "";



    }

    jugar(){
        this.numeroGanador = this.generarNumero();

        var boletosAComprar = parseInt($("#input input").val(), 10);

        for(var i = 0; i < boletosAComprar;i++){
            var nuevoDecimo = this.generarNumero();
            this.decimosJugados.push(nuevoDecimo);
            
            if(nuevoDecimo == this.numeroGanador){
                this.total += 400000;

                alert("¡Felicidades! Has ganado el Gordo de la Lotería con el décimo: " + nuevoDecimo + "\n" + "Puedes canjearlo por 400.000 euros");

            }else{
                this.total -= 20;
            }
        }

        var decimosJugados = $("#datos-decimos p:first-of-type").text("Décimos jugados: " + this.decimosJugados.length)
        var dineroGastado = $("#datos-decimos p:last-of-type").text("Dinero gastado: " + this.decimosJugados.length * 20 + " euros")
        var total = $("#total p").text("Total: " +this.total + " euros");



    }

    generarNumero() {
        let numero = "";
        for (let i = 0; i < 5; i++) {
          const cifra = Math.floor(Math.random() * 10); // Genera un número entre 0 y 9
          numero += cifra.toString(); // Lo añade al número
        }
        return numero;
      }
}