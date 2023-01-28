import * as fs from 'fs';

function extraiLinks(texto) {
    const regex = /\[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] }))
    return resultados.length !==0 ? resultados : 'não há links'

}
//async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto)
    } catch (erro) {
        console.log(erro)
    }
}
export default pegaArquivo;

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



