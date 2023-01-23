import * as fs from 'fs';


function trataErro(erro) {

    throw new Error(erro, 'Arquivo não encontrado!')

}
//async/await

function pegaArquivo(caminhoDoArquivo){
    const ecoding = 'utf-8'
    const texto = fs.promises
    .readFile(caminhoDoArquivo, ecoding)
    console.log(texto)

    
}



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
//   })


pegaArquivo('./arquivos/texto.md')