//menu hamburguer
function hamburguer() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};


// validar login
var modal = document.getElementById('id01');

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const usuarios = [
  {nome: "Ana", senha: "321654"},
  {nome: "Johnny", senha: "123456"},
  {nome: "Beatriz", senha: "456789"},
];


// validar senha
function ValidaSenha(nome, senha) {
  let Cadastrado = [];
  let Senha = [];
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nome === nome) {
      Cadastrado = "Usuario OK"
      if (usuarios[i].senha === senha) {
        Senha = "Senha OK"
      }
    }
  }
  console.log(Cadastrado);
  console.log(Senha);
  if (Cadastrado != "Usuario OK") {
    alert("Usuário  incorreto");
    uname.value = "";
    psw.value = "";

  }
  if (Senha != "Senha OK") {
    alert("Senha incorreta");
    psw.value = "";

  }
}


//Slide do banner
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

// Inicialização
showSlides();
