const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// console.log(deadpool.getNombre())

// const { nombre, apellido, poder } = deadpool
// console.log(nombre)

function imprimeHeroe(heroe) {
    const { nombre, apellido, poder } = deadpool
    console.log(nombre, apellido, poder)
}

//imprimeHeroe(deadpool)


function imprimeHeroes2({ nombre, apellido, poder }) {
    console.log(nombre, apellido, poder)
}

// imprimeHeroes2(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman']

// const h1 = heroes[0]
// const h3 = heroes[1]
// const h2 = heroes[2]

// const [h1, h2, h3] = heroes
// console.log(h1, h2, h3)

// si solo quiero batman

const [, , h3] = heroes;
console.log(h3)