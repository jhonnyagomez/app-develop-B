tokenValidate()

function getUSers(){
    document.getElementById('cardHeader').innerHTML = '<h4>Lista de Usuarios</h4>'
    fetch("https://reqres.in/api/users?page=1", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            'x-api-key' : 'reqres-free-v1'
        }
    })
    .then((result) =>{
        return result.json().then(
            data => {
                return {
                    status: result.status,
                    body: data
                }
            }
        )
    })
    .then((response) => {
        if(response.status == 200){
                let listUsers = `
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                      <tbody>
                `
                response.body.data.forEach(user => {
                    listUsers = listUsers.concat(`
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.first_name}</td>
                            <td>${user.last_name}</td>
                            <td><img src="${user.avatar}" class="img-thumbnail" alt="Avatar del usuario"></td>
                        </tr>
                        `)
                })
                listUsers = listUsers.concat(`
                        </tbody>
                    </table>
                    `)
                    document.getElementById('info').innerHTML = listUsers
        }
        else{
            document.getElementById('info').innerHTML = '<h3>No se encontraron usuarios</h3>'
        }
    }) 
    
}

function getProducts(){
   document.getElementById('cardHeader').innerHTML = '<h3>Lista de Productos</h3>'
   document.getElementById('info').innerHTML =''
    fetch("https://reqres.in/api/unknown?page=1", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            'x-api-key' : 'reqres-free-v1'
        }
    })
    .then((result) =>{
        return result.json().then(
            data => {
                return {
                    status: result.status,
                    body: data
                }
            }
        )
    })
    .then((response) => {
        if(response.status == 200){
                let listProducts = `
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Year</th>
                            <th scope="col">Color</th>
                            <th scope="col">Value</th>
                            </tr>
                        </thead>
                      <tbody>
                `
                response.body.data.forEach(user => {
                    listProducts = listProducts.concat(`
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.year}</td>
                            <td><input type="color" value="${user.color}"></td>
                            <td>${user.pantone_value}</td>
                        </tr>
                        `)
                })
                listProducts = listProducts.concat(`
                        </tbody>
                    </table>
                    `)
                    document.getElementById('info').innerHTML = listProducts
        }
        else{
            document.getElementById('info').innerHTML = '<h3>No se encontraron productos</h3>'
        }
    }) 
}

function logOut(){
    localStorage.removeItem('token')
    location.href='../index.html'
}

function tokenValidate(){
    const TOKEN = localStorage.getItem('token')
    if(TOKEN != 'QpwL5tke4Pnpja7X4'){
        location.href='../index.html'
    }
    console.log('Autenticado', TOKEN)
}