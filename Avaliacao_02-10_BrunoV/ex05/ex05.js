let numeroAleatorio1, numeroAleatorio2;

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 4) + 1;
}

numeroAleatorio1 = gerarNumeroAleatorio();

do {
  numeroAleatorio2 = gerarNumeroAleatorio();
} while (numeroAleatorio2 === numeroAleatorio1);

console.log(`Número Aleatório 1: ${numeroAleatorio1}`);
console.log(`Número Aleatório 2: ${numeroAleatorio2}`);

const candidatos = [
  {
    nome: "Jair Bolsonaro",
    partido: "Partido (PL)",
    imagem: "img/candidato1.png",
  },
  {
    nome: "Luiz Inácio Lula da Silva",
    partido: "PT",
    imagem: "img/candidato2.png",
  },
  {
    nome: "Ciro Gomes",
    partido: "Partido (PDT)",
    imagem: "img/candidato3.png",
  },
  {
    nome: "Simone Tebet",
    partido: "Partido (MDB)",
    imagem: "img/candidato4.png",
  },
];

const candidato1 = candidatos[numeroAleatorio1 - 1];
const candidato2 = candidatos[numeroAleatorio2 - 1];

const nome1 = document.getElementById("nome1");
const partido1 = document.getElementById("partido1");
const imagem1 = document.getElementById("imagem1");

const nome2 = document.getElementById("nome2");
const partido2 = document.getElementById("partido2");
const imagem2 = document.getElementById("imagem2");


imagem1.src = candidato1.imagem;
nome1.innerHTML = candidato1.nome;
partido1.innerHTML = candidato1.partido;


imagem2.src = candidato2.imagem;
nome2.innerHTML = candidato2.nome;
partido2.innerHTML = candidato2.partido;


const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");

const numeroAleatorio = Math.random();

const porcentagemVencedora = numeroAleatorio * 100;

porcentagem1 = porcentagemVencedora;
porcentagem2 = 100 - porcentagemVencedora;

resultado1.innerHTML = `Resultado: ${porcentagem1.toFixed(1)}%`;
resultado2.innerHTML = `Resultado: ${porcentagem2.toFixed(1)}%`;

vencedor = document.getElementById("vencedor");

if (porcentagem1 > porcentagem2) {
    vencedor.innerHTML = `Candidato(a) vencedor(a): ${candidato1.nome} (${porcentagem1.toFixed(1)}%)`;
} else {
    vencedor.innerHTML = `Candidato(a) vencedor(a): ${candidato2.nome} (${porcentagem2.toFixed(1)}%)`;
}
