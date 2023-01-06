const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    console.log(evento.target.textContent);
  });
});

function manipulaDados(operacao) {
  if (operacao === "subtrair") {
    braco.value = parseInt(braco.value) - 1;
  } else {
    braco.value = parseInt(braco.value) + 1;
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
