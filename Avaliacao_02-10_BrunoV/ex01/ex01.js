valor1 = parseInt(prompt("Informe o primeiro valor: "));
valor2 = parseInt(prompt("Informe o segundo valor: "));

operador = prompt("Informe o operador: ");

soma = valor1 + valor2;
subtracao = valor1 - valor2;
multiplicacao = valor1 * valor2;
divisao = valor1 / valor2;

switch (operador) {
    case '+':
        document.write(`<h1>${valor1} + ${valor2} = ${soma}</h1>`)
        break;

        case '-':
        document.write(`<h1>${valor1} - ${valor2} = ${subtracao}</h1>`)
        break;

        case '*':
        document.write(`<h1>${valor1} X ${valor2} = ${multiplicacao}</h1>`)
        break;

        case '/':
        document.write(`<h1>${valor1} / ${valor2} = ${divisao}</h1>`)
        break;

    default:
        break;
}
