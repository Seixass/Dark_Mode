import data from '../data.json' assert{'type': 'json'} ; //exportação e indentificação de um json no JS.
 

const btn = document.querySelector('#login')
btn.addEventListener('click' , (event)=>{
    event.preventDefault()

    const user = document.getElementById ('user').value
    const password = document.getElementById ('password').value

    const login =data.find((obj)=>obj.usuario === user && obj.senha === password)

    if(login){
        window.location = '../index.html'
    }else{
        alert('Usuário não encontrado')
    }

    console.log(login)
    console.log(user, password)
})