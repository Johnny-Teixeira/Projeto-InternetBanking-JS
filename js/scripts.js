//eu aqui
function hamburguer() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const usuarios = [
  {nome: "Fabio", senha: "12345"},
  {nome: "Johnny", senha: "76542"},
  {nome: "Ana", senha: "54321"},
];


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

//fim eu aqui




// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

// Funções
function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  }, 500);
}

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

// Eventos
[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  });
});

allLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Inicialização
showSlides();
