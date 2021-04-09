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

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`
    } catch (error) {
        throw error;
    }

}

getInfoUsuario(id)
    .then(resp => {
        console.log("TODO BIEN!")
        console.log(resp)
    })
    .catch(err => {
        console.log("TODO MAL")
        console.log(err)
    })