document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    login(email, password)

})


function login (email, password){
    let message  = ''
    let alertType = ''
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password})
    })
    .then((data) =>{
        alertType = 'success'
        message='Bienvenido'
        console.log('200 OK, responde bien' + data)
    })
    .catch((error) => {
        alertType = 'danger'
        message = 'Correo o contraseña incorrectos.'
        console.error(error)
    })
    
    let alert = `
        <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    
    document.getElementById('alert').innerHTML= alert;
}