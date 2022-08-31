function auth(){
    const email = document.getElementById('email').value
    const password = document.getElementById('sSenha').value
    if(email == "" || password == ""){
        alert('Falta dados')
    } else if(email == "teste@gage.com" || password == "123456"){
        location='inicio.html'
    }else if(email != "teste@gage.com" || password != "123456"){
        alert("Erro nos dados entre em contato com a Gage para recuperar sua conta.")
    }
}

const menuuser = document.getElementById('cMenu')
menuuser.addEventListener('click', mmenu);
function mmenu(){
    const nav = document.getElementById('opcsMenu');
    nav.classList.toggle('active');
}

const usaropcoes = document.getElementById('user')
usaropcoes.addEventListener('click', usuariomenu)

function usuariomenu(){
    const navdois = document.getElementById('userOpcs');
    navdois.classList.toggle('ativou');
}