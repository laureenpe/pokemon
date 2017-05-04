function Pokemon(nombre, color, poderDeAtaque) { // Funcion constructora
    this.nombre = nombre;
    this.color = color;

    this.nivelDeAmistad = 0 //propiedad inicializada en 0

    this.vida = 100
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
const Pikachu = new Pokemon("Pikachu", "amarillo", 100)
const Charmander = new Pokemon("Charmander", "rojo", 20)

Pikachu.atacar(Charmander)
console.log(Charmander.vida)
console.log(Pikachu.vida)