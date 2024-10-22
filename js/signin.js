const signinForm = document.querySelector('#signinForm')
signinForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.querySelector('#user').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const tipodocumento = document.querySelector('#tipod').value
    const numerodocumento = document.querySelector('#numdoc').value
    const numerotelefono = document.querySelector('#numte').value
    const fechanaci = document.querySelector('#fecha').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const IsUserRegistred = Users.find(user => user.email === email)
    if(IsUserRegistred){
        return alert('¡Este usuario ya esta registrado! 😠')
    }
    Users.push({username: username, email: email, password: password, tipodocumento: tipodocumento, numerodocumento: numerodocumento, numerotelefono: numerotelefono, fechanaci:fechanaci})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('¡Usuario registrado! 🙂‍↔️')
    window.location.href = "login.html"
})