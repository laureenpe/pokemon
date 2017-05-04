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
        return pokemon.vida
    }
}

const Pikachu = new Pokemon("Pikachu ", "amarillo", 100)
const Charmander = new Pokemon("Charmander ", "rojo", 50)

/*Pikachu.atacar(Charmander) //Pikachu ataca a Charmander; la funcion atacar lo que hace es que de acuerdo a la vida, le resta el poder de ataque
Charmander.atacar(Pikachu) // vida(200) - poderdeataque(50) =150*/


document.write(  "<br>"+ "Tengo a mis jugadores : " +  "<br>"+ "Charmander:  " + " Vida: " + Charmander.vida + " color : " + Charmander.color +  "<br>" + 
"Pikachu: " +  " Vida: " + Pikachu.vida + " color: " + Pikachu.color );

function pelear(){ //Con esta función voy a atacar al pokemon de acuerdo a lo que el usuario escoja
   
    var poke1 = document.getElementById('p1').value //traer los valores como string de los pokemons que estan en el html - nomp1 y nomp2
    var poke2 = document.getElementById('p2').value 

    var ataque = prompt('ingrese poder de ataque') //pregunto al usuario cuanto vale el poder de ataque

    var objPkm1 = new Pokemon(poke1, 'amarillo',ataque) // crear dos nuevas instancias donde los valores se toman desde las variables anteriores: 
    var objPkm2 = new Pokemon(poke2, 'rojo',20)

    objPkm1.atacar(objPkm2)

    alert(poke1 + ' atacó a ' + poke2 + ' y quedó con '+ objPkm2.vida + ' puntos de vida')


}


console.log(Pikachu.vida)
console.log(Pikachu.mostrarPokemon())
console.log(Charmander.mostrarPokemon())