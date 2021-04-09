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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id)
    if (empleado) {
        callback(null, empleado); //!! este null indica que no tiene error
    } else {
        callback(`Empleado con id ${id} no existe `)
    }
}
const id = 10
getEmpleado(id, (err, emp) => {
    if (err) {
        return console.log(err)

    }
    const { nombre } = emp
    console.log(nombre)

})


const getSalario = (id, callback) => {
    const salario = salarios.find((e) => e.id === id)?.salario //*! null check operator quiere decir que despues del simbolo ? si tiene algo lo envía en este caso salario
    if (salario) {
        callback(null, salario)
    } else {
        callback(`no existe salario con id ${id}`)
    }
}

getSalario(id, (err, resp) => {
    if (err) {
        return console.log(err)
    }
    console.log(resp)
})
