import * as fs from 'fs';

 

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => {
        console.log(texto)
    })

}

pegaArquivo('./arquivos/texto.md')