function Pokemon(nombre, color, poderDeAtaque) { // Funcion constructora
    this.nombre = nombre;
    this.color = color;

    this.nivelDeAmistad = 0 //propiedad inicializada en 0

    this.vida = 200
    this.poderDeAtaque = poderDeAtaque //propiedad poder de ataque pasada como parametro en la funcion constructora de pokemon

    this.mostrarPokemon = function() { // método que retorna una cadena
        return ("hola, soy: " + this.nombre + "y soy de color: " + this.color)
    }
    this.aumentarAmistad = function(valor) { //método para que el pokemón aumente su nivel de amistad
        this.nivelDeAmistad = this.nivelDeAmistad + valor
    }
    this.atacar = function(pokemon) { //metodo para atacar, que recibe el nombre del pokemon rival y le quita vida segun su poder de ataque
        pokemon.vida = pokemon.vida - this.poderDeAtaque
    }
}

function Inicio()
{
	var pikachu =new Pokemon("Pikachu","amarillo",100);
	var charmander=new Pokemon("Charmander",50);


Pikachu.atacar(Charmander) //Pikachu ataca a Charmander; la funcion atacar lo que hace es que de acuerdo a la vida, le resta el poder de ataque

Charmander.atacar(Pikachu) // vida(200) - poderdeataque(50) =150
}
/*console.log(Pikachu.vida)
console.log(Pikachu.mostrarPokemon())
console.log(Charmander.mostrarPokemon())*/


document.write(  "<br>"+ "Tengo a mis jugadores : " +  "<br>"+ "Charmander:  " + " Vida: " + pikachu.vida + " color : " + Charmander.color +  "<br>" + 
"Pikachu: " +  " Vida: " + Pikachu.vida + " color: " + Pikachu.color );



