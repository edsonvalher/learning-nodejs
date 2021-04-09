// setTimeout(() => {
//     console.log('Hola mundo')
// }, 1000);


// const getUsuarioByID = (id) => {
//     const usuario = {
//         id,
//         nombre: 'Edson'
//     }

//     setTimeout(() => {
//         console.log(usuario)
//     }, 1500);
// }
// getUsuarioByID(10);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Edson'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500);
}

//1
// getUsuarioByID(10, () => {
//     console.log('hola mundo')
// })

//2
getUsuarioByID(10, (e) => {
    const { id, nombre } = e
    console.log(id)
    console.log(nombre.toUpperCase())
})