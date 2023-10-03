texto = prompt("Informe um texto: ");
operacao = parseInt(prompt("Que configuração você quer aplicar (1) itálico, (2) negrito ou (3) sublinhado: "));

switch (operacao) {
    case 1:
        document.write(`<i>${texto}</i>`);
        break;

        case 2:
            document.write(`<b>${texto}</b>`);
            break;

            case 3:
                document.write(`<u>${texto}</u>`);

    default:
        break;
}