const signinForm = document.querySelector('#signinForm')
signinForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.querySelector('#user').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const IsUserRegistred = Users.find(user => user.email === email)
    if(IsUserRegistred){
        return alert('¡Este usuario ya esta registrado! 😠')
    }
    Users.push({username: username, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('¡Usuario registrado! 🙂‍↔️')
    window.location.href = "login.html"
})