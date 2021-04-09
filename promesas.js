const empleados = [
    {
        id: 1,
        nombre: 'Edson'
    },
    {
        id: 1,
        nombre: 'Alicia'
    },
    {
        id: 1,
        nombre: 'Juan'
    },

]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre
        empleado
            ? resolve(empleado)
            : reject(`Empleado con id ${id} no existe `)
    })
}
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((e) => e.id === id)?.salario
        salario
            ? resolve(salario)
            : reject(`No existe salario para el  id ${id} `)
    })
}
const id = 1

// getEmpleado(id)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))

// getSalario(id)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))


//! este es un callback hell y es una mala practica
getEmpleado(id)
    .then(empl => {
        getSalario(id).then(sala => console.log(sala)).catch(err => console.log(err))
    })
    .catch(err => console.log(err))