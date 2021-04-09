const empleados = [
    {
        id: 1,
        nombre: 'Edson'
    },
    {
        id: 2,
        nombre: 'Alicia'
    },
    {
        id: 3,
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
const id = 3

//!forma correcta
let nombre
getEmpleado(id)
    .then(empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario ${salario}`))
    .catch(err => { console.log(err) })