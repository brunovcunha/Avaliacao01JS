texto = prompt("Informe um texto qualquer: ");
palavra = prompt("Informe a palavra a ser encontrada: ");

texto = texto.toLowerCase();
palavrasVet = texto.split(" ");
cont = 0;

for (let index = 0; index < palavrasVet.length; index++) {

    if(palavrasVet[index] === palavra){
        document.write(`${palavrasVet[index]}, `);
        cont++;
    }
    
}

document.write(`<p>${cont}</p>`);