class SlothMachine {
    constructor(){
        this.monedas = 0;
    }
    play(){
        this.aleatorio();
    }
    aleatorio(){
        let v = 0;
        let f = 0;
        for (let i = 0; i < 3; i++) {
        let num = Math.floor(Math.random() * 2);
        num?v++:f++;
        }
        this.rulet(v,f);
    }
    rulet(v,f){
        
        if(v===1 || v ===2){
            this.monedas += 1;
            console.log("Credito de: "+this.monedas+ " moneda." );
            console.log("Good luck next time!!");
        } 
        else if(v===3){
            this.monedas += 1;
            console.log("Credito de: "+this.monedas+ " moneda." );
            console.log("Congratulations!!!. You won "+ this.monedas + " coins!!")
            this.monedas = 0;
        }
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