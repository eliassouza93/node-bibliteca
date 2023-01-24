import * as fs from 'fs';

function extraiLinks(texto) {
    const regex = /\[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({ [captura[0]]: captura[1] }))

    return resultados;
}

function trataErro(erro) {
    throw new Error(erro.code, 'Arquivo não encontrado!')
}

//async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto))
    } catch (erro) {
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto.md')

// sempre quando falamos de promisses, estamos falando de codigo assincrono
//promises com then()
//function pegaArquivo(caminhoDoArquivo) {
//    const encoding = 'utf-8'
//    fs.promises
//        .readFile(caminhoDoArquivo, encoding)
//        .then((texto) => console.log(texto))
//        .catch((erro) => trataErro(erro)) // ou .cath(trataErro)
//}
//
//function pegaArquivo(caminhoDoArquivo) { (versao 5)
//   const encoding = 'utf-8'
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//       if (erro) {
//           trataErro(erro)
//
//       }
//       console.log(texto)
//   })  \(https?:\/\/[^\s?#.]*        \(https?:\/\/[^\s?#.].[^\s]*\)



