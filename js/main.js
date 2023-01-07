// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");

const controle = document.querySelectorAll("[data-controle]");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    // console.log(evento.target.textContent);
    // console.log(evento.target.parentNode);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector(".controle-contador");
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

// const robotron = document.querySelector("#robotron");

// //Função anônima só vai ser executada naquele momento, ela não pode ser chamada posteriormente
// robotron.addEventListener("click", (evento) => {
//   console.log(evento);
// });

// robotron.addEventListener("click", dizOi);

// function dizOi(nome) {
//   console.log("Oi " + nome);
//   console.log("Bem vindo");
// }

// dizOi("Camila");
