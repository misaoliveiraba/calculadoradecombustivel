let ultimoPrecoCombustivel = null; // para armazenar preço do combustível da primeira box

function calcularMedia() {
  const km = parseFloat(document.getElementById("kmRodados").value);
  const valor = parseFloat(document.getElementById("valorGasto").value);
  const preco = parseFloat(document.getElementById("precoLitro").value);

  if (!km || !valor || !preco) {
    document.getElementById("resultadoMedia").innerText = "Preencha todos os campos!";
    return;
  }

  const litros = valor / preco;
  const media = km / litros;

  // salvar o preço do combustível para a segunda caixa
  ultimoPrecoCombustivel = preco;

  document.getElementById("resultadoMedia").innerText =
    `Consumo médio: ${media.toFixed(2)} km/L`;
}

function planejarViagem() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const kmRodados = parseFloat(document.getElementById("kmRodados").value);
  const valorGasto = parseFloat(document.getElementById("valorGasto").value);

  if (!distancia || !kmRodados || !valorGasto || !ultimoPrecoCombustivel) {
    document.getElementById("resultadoViagem").innerText = "Preencha todos os campos da primeira caixa primeiro!";
    return;
  }

  const media = kmRodados / (valorGasto / ultimoPrecoCombustivel); // calcula média novamente
  const litrosNecessarios = distancia / media;
  const custo = litrosNecessarios * ultimoPrecoCombustivel;

  document.getElementById("resultadoViagem").innerText =
    `Será necessário ${litrosNecessarios.toFixed(2)} L e custará R$ ${custo.toFixed(2)}`;
}
