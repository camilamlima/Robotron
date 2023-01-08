// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");

const controle = document.querySelectorAll("[data-controle]");

const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },
  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
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

function atualizaEstatisticas(peca) {
  console.log(pecas[peca]);

  estatistica.forEach((elemento) => {
    console.log(elemento.dataset.estatistica);
    console.log(elemento.textContent);
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
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
