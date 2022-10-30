/*Creamos una maquina tragaperras,
al introducir una moneda, la monesa se incrementa,
la tirada indica si pierdes o ganas,
si ganas te llevas el dinero acumulado*/
class SlothMachine {
    constructor(){
        this.monedas = 0;
    }
    play(){
        this.monedas +=1 ;
        this.aleatorio();
    }
    aleatorio(){
        let v = 0;
        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * 2);
            num?v++:false;
        }
        this.rulet(v);
    }
    premio(){
        console.log("Credito de: "+this.monedas+ " moneda." );
        console.log("Congratulations!!!. You won "+ this.monedas + " coins!!")
        this.monedas = 0;
    }
    noPremio(){
        console.log("Credito de: "+this.monedas+ " moneda." );
        console.log("Good luck next time!!");
    }
    rulet(v){
        v===3?this.premio():this.noPremio();
    }
}
const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
console.log("Fin del juego, perdio: " + machine1.monedas + " Monedas");